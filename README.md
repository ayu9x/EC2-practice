# Task Manager (React + Express)

Simple full‑stack task list app: a React frontend talks to an Express API that stores tasks in memory. Use Docker Compose to run both services together or run them separately for local development.

## Project layout
- `backend/` – Express API (`/tasks` GET, POST, DELETE `/:index`), in‑memory store.
- `frontend/` – React UI that lists, adds, and deletes tasks against the API.
- `docker-compose.yml` – builds/runs both containers; frontend depends on backend.

## Prerequisites
- Node.js 18+ (only if running without Docker)
- Docker + Docker Compose

## Run with Docker (recommended)
```sh
docker-compose up --build
```
- API: http://localhost:5000/tasks
- UI:  http://localhost:3000

## Run locally without Docker
Backend:
```sh
cd backend
npm install
node index.js   # listens on http://localhost:5000
```

Frontend (in a second terminal):
```sh
cd frontend
npm install
npm start       # opens http://localhost:3000
```

## API quick reference
- `GET /tasks` → array of tasks
- `POST /tasks` with JSON `{ "task": "Buy milk" }` → adds task
- `DELETE /tasks/:index` → removes task at zero‑based index

## Notes
- Data is held in memory only; restart clears tasks.
- The provided `frontend/.gitignore` assumes Create React App defaults.
