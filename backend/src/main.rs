use argon2::Argon2;
use axum::{
    extract::State,
    http::{header::{ACCEPT, AUTHORIZATION, CONTENT_TYPE}, HeaderValue, Method},
    response::IntoResponse,
    routing::{get, post, put},
    Json, Router,
};
use password_hash::{PasswordHash, PasswordHasher, PasswordVerifier, SaltString};
use rand_core::OsRng;
use serde::{Deserialize, Serialize};
use serde_json::{json, Value};
use sqlx::{mysql::MySqlPoolOptions, MySqlPool, Row};
use std::{env, net::SocketAddr, sync::Arc};
use tower_cookies::{cookie::SameSite, Cookie, CookieManagerLayer, Cookies};
use tower_http::{cors::CorsLayer, trace::TraceLayer};
use uuid::Uuid;

#[derive(Clone)]
struct AppState {
    db: MySqlPool,
    cookie_secure: bool,
}

type SharedState = Arc<AppState>;

#[derive(Debug, Serialize, Clone)]
struct PublicUser {
    id: i64,
    username: String,
    name: String,
    grade: String,
    birthday_month: Option<i32>,
    birthday_day: Option<i32>,
    favorite_subject: Option<String>,
    bio: Option<String>,
    #[serde(rename = "savedState")]
    saved_state: Option<Value>,
}

#[derive(Debug, Deserialize)]
struct AuthInput {
    username: String,
    password: String,
    name: Option<String>,
    grade: Option<String>,
    birthday_month: Option<i32>,
    birthday_day: Option<i32>,
}

#[derive(Debug, Deserialize)]
struct ProfileInput {
    name: Option<String>,
    grade: Option<String>,
    birthday_month: Option<i32>,
    birthday_day: Option<i32>,
    favorite_subject: Option<String>,
    bio: Option<String>,
}

#[derive(Debug, Deserialize)]
struct ProgressInput {
    #[serde(rename = "savedState")]
    saved_state: Value,
}

#[derive(Debug, Deserialize)]
struct ResourceInput {
    title: String,
    description: Option<String>,
    link: Option<String>,
}

#[derive(Debug, Deserialize)]
struct AdInput {
    content: String,
    display_days: Option<i32>,
}

#[derive(Debug, Deserialize)]
struct VoteInput {
    submission_id: i64,
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    tracing_subscriber::fmt()
        .with_env_filter(tracing_subscriber::EnvFilter::from_default_env())
        .init();

    let database_url = env::var("DATABASE_URL")
        .unwrap_or_else(|_| "mysql://mlsn:mlsn_password@127.0.0.1:3306/mlstudynest".to_string());
    let bind_addr = env::var("BIND_ADDR").unwrap_or_else(|_| "0.0.0.0:8080".to_string());
    let cookie_secure = env::var("COOKIE_SECURE").unwrap_or_else(|_| "false".to_string()) == "true";

    let db = MySqlPoolOptions::new()
        .max_connections(10)
        .connect(&database_url)
        .await?;
    ensure_schema(&db).await?;

    let state = Arc::new(AppState { db, cookie_secure });
    let cors = CorsLayer::new()
        .allow_methods([Method::GET, Method::POST, Method::PUT, Method::OPTIONS])
        .allow_headers([ACCEPT, AUTHORIZATION, CONTENT_TYPE])
        .allow_origin(HeaderValue::from_static("http://localhost:3000"))
        .allow_credentials(true);

    let app = Router::new()
        .route("/health", get(health))
        .route("/me", get(me))
        .route("/auth/register", post(register))
        .route("/auth/login", post(login))
        .route("/auth/logout", post(logout))
        .route("/profile", put(save_profile))
        .route("/progress", post(save_progress))
        .route("/resources", get(get_resources).post(post_resource))
        .route(
            "/ads/submissions",
            get(get_ad_submissions).post(post_ad_submission),
        )
        .route("/ads/vote", post(vote_ad_submission))
        .route("/ads/featured", get(get_featured_ad))
        .layer(TraceLayer::new_for_http())
        .layer(CookieManagerLayer::new())
        .layer(cors)
        .with_state(state);

    let addr: SocketAddr = bind_addr.parse()?;
    tracing::info!("MLStudyNest Rust API listening on {addr}");
    let listener = tokio::net::TcpListener::bind(addr).await?;
    axum::serve(listener, app).await?;
    Ok(())
}

async fn ensure_schema(db: &MySqlPool) -> anyhow::Result<()> {
    for statement in include_str!("../migrations/001_init.sql").split(';') {
        let sql = statement.trim();
        if !sql.is_empty() {
            sqlx::query(sql).execute(db).await?;
        }
    }
    Ok(())
}

async fn health() -> impl IntoResponse {
    Json(json!({ "ok": true, "service": "mlstudynest-api" }))
}

async fn me(State(state): State<SharedState>, cookies: Cookies) -> impl IntoResponse {
    match current_user(&state.db, &cookies).await {
        Ok(Some(user)) => Json(json!({ "ok": true, "user": user })),
        _ => Json(json!({ "ok": false, "message": "Not logged in" })),
    }
}

async fn register(
    State(state): State<SharedState>,
    cookies: Cookies,
    Json(input): Json<AuthInput>,
) -> impl IntoResponse {
    let username = input.username.trim().to_string();
    let password = input.password;
    let name = input.name.unwrap_or_default().trim().to_string();
    let grade = input.grade.unwrap_or_default().trim().to_string();

    if username.is_empty() || password.is_empty() || name.is_empty() || grade.is_empty() {
        return Json(
            json!({ "ok": false, "message": "请填写所有必填字段 · Please fill all required fields" }),
        );
    }

    let password_hash = match hash_password(&password) {
        Ok(hash) => hash,
        Err(_) => return Json(json!({ "ok": false, "message": "Password hashing failed." })),
    };

    let month = normalize_month(input.birthday_month);
    let day = normalize_day(input.birthday_day);

    let result = sqlx::query(
        r#"INSERT INTO users (username, password_hash, name, grade, birthday_month, birthday_day)
           VALUES (?, ?, ?, ?, ?, ?)"#,
    )
    .bind(&username)
    .bind(&password_hash)
    .bind(&name)
    .bind(&grade)
    .bind(month)
    .bind(day)
    .execute(&state.db)
    .await;

    let insert = match result {
        Ok(insert) => insert,
        Err(_) => {
            return Json(
                json!({ "ok": false, "message": "用户名已被使用 · Username already taken" }),
            )
        }
    };

    let user = PublicUser {
        id: insert.last_insert_id() as i64,
        username,
        name,
        grade,
        birthday_month: month,
        birthday_day: day,
        favorite_subject: Some(String::new()),
        bio: Some(String::new()),
        saved_state: None,
    };
    if create_session(&state, &cookies, user.id).await.is_err() {
        return Json(json!({ "ok": false, "message": "Failed to create session." }));
    }
    Json(json!({ "ok": true, "user": user }))
}

async fn login(
    State(state): State<SharedState>,
    cookies: Cookies,
    Json(input): Json<AuthInput>,
) -> impl IntoResponse {
    let username = input.username.trim();
    let row = match sqlx::query("SELECT * FROM users WHERE username = ?")
        .bind(username)
        .fetch_optional(&state.db)
        .await
    {
        Ok(row) => row,
        Err(_) => return Json(json!({ "ok": false, "message": "Login failed." })),
    };

    let Some(row) = row else {
        return Json(
            json!({ "ok": false, "message": "用户名或密码错误 · Invalid username or password" }),
        );
    };
    let password_hash: String = row.get("password_hash");
    if !verify_password(&input.password, &password_hash) {
        return Json(
            json!({ "ok": false, "message": "用户名或密码错误 · Invalid username or password" }),
        );
    }

    let user = user_from_row(&row);
    if create_session(&state, &cookies, user.id).await.is_err() {
        return Json(json!({ "ok": false, "message": "Failed to create session." }));
    }
    Json(json!({ "ok": true, "user": user }))
}

async fn logout(State(state): State<SharedState>, cookies: Cookies) -> impl IntoResponse {
    if let Some(cookie) = cookies.get("mlsn_session") {
        let _ = sqlx::query("DELETE FROM sessions WHERE token = ?")
            .bind(cookie.value())
            .execute(&state.db)
            .await;
    }
    cookies.remove(Cookie::new("mlsn_session", ""));
    Json(json!({ "ok": true, "message": "Logged out." }))
}

async fn save_profile(
    State(state): State<SharedState>,
    cookies: Cookies,
    Json(input): Json<ProfileInput>,
) -> impl IntoResponse {
    let Some(user) = auth_or_json(&state.db, &cookies).await else {
        return Json(json!({ "ok": false, "message": "Please log in first. 请先登录。" }));
    };
    let name = input
        .name
        .unwrap_or_else(|| user.name.clone())
        .trim()
        .to_string();
    let grade = input
        .grade
        .unwrap_or_else(|| user.grade.clone())
        .trim()
        .to_string();
    let month = input.birthday_month.or(user.birthday_month).and_then(|v| normalize_month(Some(v)));
    let day = input.birthday_day.or(user.birthday_day).and_then(|v| normalize_day(Some(v)));
    let favorite_subject = input
        .favorite_subject
        .unwrap_or_else(|| user.favorite_subject.clone().unwrap_or_default())
        .trim()
        .to_string();
    let bio = input
        .bio
        .unwrap_or_else(|| user.bio.clone().unwrap_or_default())
        .trim()
        .to_string();

    let result = sqlx::query(
        "UPDATE users SET name=?, grade=?, birthday_month=?, birthday_day=?, favorite_subject=?, bio=? WHERE id=?",
    )
    .bind(&name)
    .bind(&grade)
    .bind(month)
    .bind(day)
    .bind(&favorite_subject)
    .bind(&bio)
    .bind(user.id)
    .execute(&state.db)
    .await;

    if result.is_err() {
        return Json(json!({ "ok": false, "message": "Profile save failed. 个人资料保存失败。" }));
    }

    let updated = PublicUser {
        name,
        grade,
        birthday_month: month,
        birthday_day: day,
        favorite_subject: Some(favorite_subject),
        bio: Some(bio),
        ..user
    };
    Json(json!({ "ok": true, "message": "Profile saved. 个人资料已保存。", "user": updated }))
}

async fn save_progress(
    State(state): State<SharedState>,
    cookies: Cookies,
    Json(input): Json<ProgressInput>,
) -> impl IntoResponse {
    let Some(user) = auth_or_json(&state.db, &cookies).await else {
        return Json(json!({ "ok": false, "message": "Please log in first. 请先登录。" }));
    };
    let saved = input.saved_state.to_string();
    match sqlx::query("UPDATE users SET saved_state=? WHERE id=?")
        .bind(saved)
        .bind(user.id)
        .execute(&state.db)
        .await
    {
        Ok(_) => Json(json!({ "ok": true, "message": "Progress saved. 学习进度已保存。" })),
        Err(_) => {
            Json(json!({ "ok": false, "message": "Progress save failed. 学习进度保存失败。" }))
        }
    }
}

async fn get_resources(State(state): State<SharedState>) -> impl IntoResponse {
    let rows = sqlx::query(
        "SELECT id, username, title, description, link, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') AS created_at FROM resources ORDER BY created_at DESC LIMIT 100",
    )
    .fetch_all(&state.db)
    .await
    .unwrap_or_default();
    let resources: Vec<Value> = rows
        .into_iter()
        .map(|r| {
            json!({
                "id": r.get::<i32, _>("id") as i64,
                "username": r.get::<String, _>("username"),
                "title": r.get::<String, _>("title"),
                "description": r.get::<Option<String>, _>("description").unwrap_or_default(),
                "link": r.get::<Option<String>, _>("link").unwrap_or_default(),
                "created_at": r.get::<String, _>("created_at")
            })
        })
        .collect();
    Json(json!({ "ok": true, "resources": resources }))
}

async fn post_resource(
    State(state): State<SharedState>,
    cookies: Cookies,
    Json(input): Json<ResourceInput>,
) -> impl IntoResponse {
    let Some(user) = auth_or_json(&state.db, &cookies).await else {
        return Json(json!({ "ok": false, "message": "Please log in first. 请先登录。" }));
    };
    let title = input.title.trim();
    if title.is_empty() {
        return Json(json!({ "ok": false, "message": "Title is required. 标题不能为空。" }));
    }
    let result = sqlx::query(
        "INSERT INTO resources (username, title, description, link) VALUES (?, ?, ?, ?)",
    )
    .bind(user.username)
    .bind(title)
    .bind(input.description.unwrap_or_default())
    .bind(input.link.unwrap_or_default())
    .execute(&state.db)
    .await;
    match result {
        Ok(_) => {
            Json(json!({ "ok": true, "message": "Resource posted successfully. 资料发布成功。" }))
        }
        Err(_) => Json(json!({ "ok": false, "message": "Failed to post resource. 发布失败。" })),
    }
}

async fn get_ad_submissions(State(state): State<SharedState>) -> impl IntoResponse {
    let rows = sqlx::query(
        "SELECT id, username, content, display_days, votes, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') AS created_at FROM ad_submissions ORDER BY created_at DESC LIMIT 100",
    )
    .fetch_all(&state.db)
    .await
    .unwrap_or_default();
    let submissions: Vec<Value> = rows.into_iter().map(ad_row_to_json).collect();
    Json(json!({ "ok": true, "submissions": submissions }))
}

async fn post_ad_submission(
    State(state): State<SharedState>,
    cookies: Cookies,
    Json(input): Json<AdInput>,
) -> impl IntoResponse {
    let Some(user) = auth_or_json(&state.db, &cookies).await else {
        return Json(json!({ "ok": false, "message": "Please log in first. 请先登录。" }));
    };
    let content = input.content.trim();
    if content.is_empty() {
        return Json(
            json!({ "ok": false, "message": "Ad content is required. 投稿内容不能为空。" }),
        );
    }
    let display_days = input.display_days.unwrap_or(7).clamp(1, 7);
    let result = sqlx::query(
        "INSERT INTO ad_submissions (username, content, display_days) VALUES (?, ?, ?)",
    )
    .bind(user.username)
    .bind(content)
    .bind(display_days)
    .execute(&state.db)
    .await;
    match result {
        Ok(_) => Json(json!({ "ok": true, "message": "Ad submission posted. 广告投稿成功。" })),
        Err(_) => {
            Json(json!({ "ok": false, "message": "Failed to post ad submission. 广告投稿失败。" }))
        }
    }
}

async fn vote_ad_submission(
    State(state): State<SharedState>,
    cookies: Cookies,
    Json(input): Json<VoteInput>,
) -> impl IntoResponse {
    let Some(user) = auth_or_json(&state.db, &cookies).await else {
        return Json(json!({ "ok": false, "message": "Please log in first. 请先登录。" }));
    };
    if input.submission_id <= 0 {
        return Json(json!({ "ok": false, "message": "Invalid submission. 投稿无效。" }));
    }
    let mut tx = match state.db.begin().await {
        Ok(tx) => tx,
        Err(_) => return Json(json!({ "ok": false, "message": "Vote failed. 点赞失败。" })),
    };
    let insert = sqlx::query("INSERT INTO ad_votes (submission_id, username) VALUES (?, ?)")
        .bind(input.submission_id)
        .bind(&user.username)
        .execute(&mut *tx)
        .await;
    if insert.is_err() {
        let _ = tx.rollback().await;
        return Json(
            json!({ "ok": false, "message": "You have already voted for this submission. 你已经给这个投稿点过赞了。" }),
        );
    }
    let update = sqlx::query("UPDATE ad_submissions SET votes = votes + 1 WHERE id = ?")
        .bind(input.submission_id)
        .execute(&mut *tx)
        .await;
    if update.is_err() {
        let _ = tx.rollback().await;
        return Json(json!({ "ok": false, "message": "Vote failed. 点赞失败。" }));
    }
    let _ = tx.commit().await;
    Json(json!({ "ok": true, "message": "Vote added. 点赞成功。" }))
}

async fn get_featured_ad(State(state): State<SharedState>) -> impl IntoResponse {
    let row = sqlx::query(
        "SELECT id, username, content, display_days, votes, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') AS created_at
         FROM ad_submissions
         WHERE created_at >= NOW() - INTERVAL 7 DAY AND votes > 0
         ORDER BY votes DESC, created_at ASC
         LIMIT 1",
    )
    .fetch_optional(&state.db)
    .await
    .ok()
    .flatten();
    Json(json!({ "ok": true, "ad": row.map(ad_row_to_json) }))
}

async fn auth_or_json(db: &MySqlPool, cookies: &Cookies) -> Option<PublicUser> {
    current_user(db, cookies).await.ok().flatten()
}

async fn current_user(db: &MySqlPool, cookies: &Cookies) -> anyhow::Result<Option<PublicUser>> {
    let Some(cookie) = cookies.get("mlsn_session") else {
        return Ok(None);
    };
    let row = sqlx::query(
        "SELECT u.* FROM users u JOIN sessions s ON s.user_id = u.id WHERE s.token = ? AND s.expires_at > NOW() LIMIT 1",
    )
    .bind(cookie.value())
    .fetch_optional(db)
    .await?;
    Ok(row.map(|r| user_from_row(&r)))
}

async fn create_session(state: &AppState, cookies: &Cookies, user_id: i64) -> anyhow::Result<()> {
    let token = Uuid::new_v4().to_string();
    sqlx::query("INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 30 DAY))")
        .bind(&token)
        .bind(user_id)
        .execute(&state.db)
        .await?;
    let mut cookie = Cookie::new("mlsn_session", token);
    cookie.set_path("/");
    cookie.set_http_only(true);
    cookie.set_same_site(SameSite::Lax);
    cookie.set_secure(state.cookie_secure);
    cookies.add(cookie);
    Ok(())
}

fn hash_password(password: &str) -> anyhow::Result<String> {
    let salt = SaltString::generate(&mut OsRng);
    let hash = Argon2::default()
        .hash_password(password.as_bytes(), &salt)
        .map_err(|e| anyhow::anyhow!(e.to_string()))?
        .to_string();
    Ok(hash)
}

fn verify_password(password: &str, hash: &str) -> bool {
    let Ok(parsed) = PasswordHash::new(hash) else {
        return false;
    };
    Argon2::default()
        .verify_password(password.as_bytes(), &parsed)
        .is_ok()
}

fn normalize_month(value: Option<i32>) -> Option<i32> {
    value.filter(|m| (1..=12).contains(m))
}

fn normalize_day(value: Option<i32>) -> Option<i32> {
    value.filter(|d| (1..=31).contains(d))
}

fn user_from_row(row: &sqlx::mysql::MySqlRow) -> PublicUser {
    let saved_raw = row.get::<Option<String>, _>("saved_state");
    let saved_state = saved_raw.and_then(|s| serde_json::from_str(&s).ok());
    PublicUser {
        id: row.get::<i32, _>("id") as i64,
        username: row.get::<String, _>("username"),
        name: row.get::<String, _>("name"),
        grade: row.get::<String, _>("grade"),
        birthday_month: row.get::<Option<i32>, _>("birthday_month"),
        birthday_day: row.get::<Option<i32>, _>("birthday_day"),
        favorite_subject: row.get::<Option<String>, _>("favorite_subject"),
        bio: row.get::<Option<String>, _>("bio"),
        saved_state,
    }
}

fn ad_row_to_json(r: sqlx::mysql::MySqlRow) -> Value {
    json!({
        "id": r.get::<i32, _>("id") as i64,
        "username": r.get::<String, _>("username"),
        "content": r.get::<String, _>("content"),
        "display_days": r.get::<i32, _>("display_days"),
        "votes": r.get::<i32, _>("votes"),
        "created_at": r.get::<String, _>("created_at")
    })
}
