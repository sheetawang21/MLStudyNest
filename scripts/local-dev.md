# Local development without Docker

## 1. Start MySQL
Create a database and user matching `backend/.env.example`, or edit `DATABASE_URL`.

## 2. Run Rust API
```bash
cd backend
cp .env.example .env
export $(cat .env | xargs)
cargo run
```

## 3. Run Nuxt frontend
```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Open http://localhost:3000
