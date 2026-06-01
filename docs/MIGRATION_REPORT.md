# Migration Report

## Source architecture

The uploaded package was primarily one large single-page `index.html` containing data, styles and JavaScript, plus PHP endpoints for login, register, profile, resource sharing, ad submission/voting and featured ad selection.

## Target architecture

The final package uses:

- Nuxt 4 app directory layout
- Nuxt UI 4 components and Tailwind CSS
- Rust Axum API backend
- MySQL schema managed by the Rust service
- Docker Compose for local and production-like deployment

## Preserved features

- Units and topics
- Bilingual study content
- Topic completion and review marking
- Flashcards
- Quiz mode
- Notifications
- Birthday popup
- User registration and login
- Profile editing
- Cross-device progress sync
- Resource sharing
- Ad submission
- Voting
- Featured ad selection from the highest-voted recent submission
- Original `ariana-ad.jpg` placeholder image

## Intentional changes

- Removed PHP runtime dependency.
- Converted authentication to HttpOnly session cookies.
- Server derives user identity from the session instead of trusting client-submitted usernames.
- Learning content is now isolated in a data module.
- UI is componentized using Nuxt UI 4.

## Deployment recommendation

Use Docker Compose for a single-server deployment, or deploy the services separately:

- Nuxt frontend: Node server from `.output/server/index.mjs`
- Rust backend: compiled `mlstudynest-api` binary
- MySQL: managed database or MySQL container

For production, set `COOKIE_SECURE=true` and run everything behind HTTPS.
