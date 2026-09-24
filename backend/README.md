# Backend — Yeswanth Portfolio API

FastAPI-powered backend service for the Yeswanth Portfolio project.

## Features & Architecture (Phase 0)

- **FastAPI Framework**: High performance ASGI application.
- **Pydantic Settings**: Strongly typed environment variable management.
- **Synchronous SQLAlchemy 2.x**: Foundation with `create_engine`, `sessionmaker`, `DeclarativeBase`, and `get_db()`.
- **Driver**: `psycopg2-binary` for PostgreSQL compatibility.
- **Decoupled Health Check**: `GET /health` operational independently of database connectivity.
- **CORS Configured**: Ready for frontend local dev (`http://localhost:5173`).

---

## Directory Structure

```
backend/
├── app/
│   ├── main.py             # FastAPI entrypoint, middleware, and route mounting
│   ├── core/               # Configuration settings (config.py)
│   ├── api/                # API router and versioned endpoints
│   │   ├── api.py
│   │   └── endpoints/
│   │       └── health.py
│   ├── models/             # SQLAlchemy ORM models (Phase 3)
│   ├── schemas/            # Pydantic schemas for request/response validation
│   │   └── health.py
│   ├── services/           # Business and AI logic services
│   └── db/                 # Database engine, sessionmaker, and base declarative class
│       ├── base.py
│       └── session.py
├── requirements.txt        # Python package dependencies
└── README.md               # Backend documentation
```

---

## Getting Started

### 1. Create and Activate Virtual Environment

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the Development Server

```bash
uvicorn app.main:app --reload --port 8000
```

### 4. Endpoints & Documentation

- **Health Check**: `GET http://127.0.0.1:8000/health` (Response: `{"status": "ok"}`)
- **Swagger UI**: `http://127.0.0.1:8000/api/v1/docs`
- **ReDoc**: `http://127.0.0.1:8000/api/v1/redoc`
