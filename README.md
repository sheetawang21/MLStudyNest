# MLStudyNest

This package contains the MLStudyNest learning platform as a two-service application:

- **Frontend:** Nuxt 4 + Vue 3 + Nuxt UI 4
- **Backend:** Rust + Axum + SQLx + MySQL
- **Database:** MySQL 8 compatible schema, auto-created by the Rust service on startup
- **Deployment:** Docker Compose included

## Project structure

The original project was a single large `index.html` with inline data, styles and JavaScript, plus PHP JSON endpoints. This package migrates it into:

```txt
frontend/
  app/
    pages/index.vue               Main Nuxt page
    components/                   Nuxt UI 4 based components
    data/learning-content.ts      Original units/topics/flashcards/quiz/notices
    composables/useApi.ts         Typed API client
    assets/css/main.css           Tailwind + Nuxt UI + retained visual theme
  server/api/[...path].ts         Nuxt server proxy to Rust API
  public/images/ariana-ad.jpg     Original default ad image
  public/audio/                   Reward song placeholder location

backend/
  src/main.rs                     Rust Axum API
  migrations/001_init.sql         MySQL schema

docker-compose.yml                MySQL + Rust backend + Nuxt frontend
```

## Run with Docker

```bash
docker compose up --build
```

Then open:

```txt
http://localhost:3000
```

API health check:

```txt
http://localhost:8080/health
```

## Local development without Docker

### Backend

```bash
cd backend
cp .env.example .env
export $(cat .env | xargs)
cargo run
```

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

### Backend

```env
DATABASE_URL=mysql://mlsn:mlsn_password@127.0.0.1:3306/mlstudynest
BIND_ADDR=0.0.0.0:8080
COOKIE_SECURE=false
```

Set `COOKIE_SECURE=true` in HTTPS production.

### Frontend

```env
RUST_API_URL=http://localhost:8080
```

In Docker Compose this is automatically set to `http://backend:8080`.

## API mapping from old PHP

| Old PHP endpoint | New Rust endpoint |
|---|---|
| `register.php` | `POST /auth/register` |
| `login.php` | `POST /auth/login` |
| `logout.php` | `POST /auth/logout` |
| `get_profile.php` | `GET /me` |
| `save_profile.php` | `PUT /profile` |
| `save_progress.php` | `POST /progress` |
| `get_resources.php` | `GET /resources` |
| `post_resource.php` | `POST /resources` |
| `get_ad_submissions.php` | `GET /ads/submissions` |
| `post_ad_submission.php` | `POST /ads/submissions` |
| `vote_ad_submission.php` | `POST /ads/vote` |
| `get_featured_ad.php` | `GET /ads/featured` |

Frontend calls `/api/*`. Nuxt proxies these requests to Rust, so the browser keeps same-origin requests.

## Security improvements

- PHP has been removed from the runtime path.
- Passwords use Argon2 hashing.
- Auth uses an HttpOnly `mlsn_session` cookie.
- The client no longer sends `username` as proof of identity.
- Vote uniqueness is enforced at the database level.
- Profile and progress writes require a valid session.

## Notes

- The uploaded package only contained `audio/PUT_reward-song.mp3_HERE.txt`, not the actual MP3. Put your file at `frontend/public/audio/reward-song.mp3` if you want to restore the reward song.
- The original learning data was moved into `frontend/app/data/learning-content.ts` to avoid losing content.
- The project is ready for Docker-based deployment. For production, place a reverse proxy such as Nginx/Caddy in front and enable HTTPS.

## Build context sanity check

If Docker reports `backend internal load build context` or `frontend internal load build context` as about 1KB, your local folder is incomplete or a `.dockerignore` is excluding source files. Run:

```bash
find backend -maxdepth 2 -type f -printf '%p %s bytes\n'
find frontend/app -maxdepth 3 -type f | head -30
du -sh backend frontend
```

The backend should include `backend/src/main.rs`, and the frontend should include `frontend/app/data/learning-content.ts`.

## Backend Docker note

The default `backend/Dockerfile` is intentionally development-friendly: it fetches dependencies during image build and runs `cargo run --release` when the container starts. This is to avoid Docker BuildKit hiding Cargo build output and failing on a missing copied binary path. A production-oriented multi-stage Dockerfile is kept as `backend/Dockerfile.prod`.

## Docker troubleshooting note

If you previously saw `exec /usr/local/cargo/bin/cargo: exec format error`, use this version's compose file and rebuild from scratch:

```bash
docker compose down -v --remove-orphans
docker builder prune -f
docker compose --progress=plain build --no-cache backend
docker compose --progress=plain build --no-cache frontend
docker compose up
```

The backend service is pinned to `linux/amd64` and now runs `/usr/local/bin/mlstudynest-api` rather than `cargo run`.

## Docker/Rust note

The backend Dockerfile intentionally uses `debian:bookworm` and installs Rust 1.96.0 from the official Rust static distribution tarball, instead of using `rust:*` as the base image. This avoids a WSL2/Docker Desktop issue where the Rust image may contain a zero-byte `rustup` shim and `cargo build` produces no output or target directory.
