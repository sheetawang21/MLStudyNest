# MLStudyNest Rust API

Base URL during Docker development: `http://localhost:8080`.

Nuxt frontend calls these through `/api/*`.

## Auth

### POST `/auth/register`

```json
{
  "username": "alex",
  "password": "secret",
  "name": "Alex",
  "grade": "G12",
  "birthday_month": 5,
  "birthday_day": 31
}
```

### POST `/auth/login`

```json
{
  "username": "alex",
  "password": "secret"
}
```

### POST `/auth/logout`

Clears the `mlsn_session` cookie.

### GET `/me`

Returns the current user when logged in.

## Profile

### PUT `/profile`

```json
{
  "name": "Alex Walker",
  "grade": "G12",
  "birthday_month": 5,
  "birthday_day": 31,
  "favorite_subject": "Biology",
  "bio": "Studying for bio exams."
}
```

## Progress

### POST `/progress`

```json
{
  "savedState": {
    "unitId": "u1",
    "completed": { "u1-cellcycle": true },
    "review": { "u1-sav": true }
  }
}
```

## Resources

- `GET /resources`
- `POST /resources`

```json
{
  "title": "Genetics notes",
  "description": "Unit 1 review notes",
  "link": "https://example.com"
}
```

## Ads

- `GET /ads/submissions`
- `POST /ads/submissions`
- `POST /ads/vote`
- `GET /ads/featured`

```json
{
  "content": "Promote biology study group",
  "display_days": 7
}
```

Vote payload:

```json
{
  "submission_id": 1
}
```
