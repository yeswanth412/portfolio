# Yeswanth Portfolio

A production-grade personal developer portfolio built for **Yeswanth Uggina**, showcasing expertise as a **Python Backend Developer / Python Full Stack Developer with AI Focus**.

The project brings together a modern responsive React frontend, a robust FastAPI backend with SQLAlchemy 2.x and PostgreSQL, and a planned AI/RAG query engine.

---

## 1. Technology Stack

### Frontend
- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Modern CSS / CSS Custom Properties
- **Routing**: React Router (planned for multi-page views)
- **Future Enhancements**: GSAP micro-animations, Three.js / React Three Fiber for optional 3D/WebGL experiences

### Backend
- **Framework**: FastAPI
- **ASGI Server**: Uvicorn
- **Settings & Validation**: Pydantic v2 & Pydantic Settings
- **ORM**: SQLAlchemy 2.x (Synchronous)
- **Database Driver**: `psycopg2-binary`
- **Database**: PostgreSQL (planned models in Phase 3)
- **Future AI Layer**: Retrieval-Augmented Generation (RAG) agent for "Ask My Portfolio"

---

## 2. Architecture Overview

The system follows a clean, decoupled architecture:
- **Frontend SPA**: Serves client interfaces and consumes backend REST endpoints.
- **Backend API**: Exposes versioned endpoints, validates input, manages database sessions, and coordinates future AI services.
- **Persistence Layer**: Relational PostgreSQL database managed with SQLAlchemy 2.x declarative models.
- **AI/RAG Subsystem (Future)**: Ingests structured portfolio content and answers visitor queries via context retrieval and LLM reasoning.

For a detailed breakdown, see [docs/architecture.md](docs/architecture.md).

---

## 3. Project Directory Structure

```
yeswanth-portfolio/
├── frontend/                   # React + Vite Frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Page views
│   │   ├── sections/           # Section modules (Hero, About, Projects, etc.)
│   │   ├── assets/             # Static media, icons, and images
│   │   ├── hooks/              # Custom React hooks
│   │   ├── services/           # API clients and HTTP services
│   │   ├── data/               # Static/mock data and metadata
│   │   ├── styles/             # Global CSS and themes
│   │   ├── App.jsx             # Main application shell
│   │   └── main.jsx            # Application entrypoint
│   ├── public/                 # Static assets
│   ├── index.html              # HTML entrypoint
│   ├── package.json            # Frontend dependencies
│   ├── vite.config.js          # Vite configuration
│   └── README.md               # Frontend documentation
│
├── backend/                    # FastAPI Backend
│   ├── app/
│   │   ├── main.py             # FastAPI app initialization & middleware
│   │   ├── core/               # Configuration & security settings
│   │   │   └── config.py
│   │   ├── api/                # API router & endpoint definitions
│   │   │   ├── api.py
│   │   │   └── endpoints/
│   │   │       └── health.py
│   │   ├── models/             # SQLAlchemy ORM models (Phase 3)
│   │   ├── schemas/            # Pydantic validation schemas
│   │   │   └── health.py
│   │   ├── services/           # Business logic & services
│   │   └── db/                 # Database engine & session management
│   │       ├── base.py
│   │       └── session.py
│   ├── requirements.txt        # Backend Python dependencies
│   └── README.md               # Backend documentation
│
├── docs/                       # Architecture & design documents
│   └── architecture.md
│
├── .env.example                # Blueprint for environment variables
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation (this file)
```

---

## 4. Environment Variables

Create your local `.env` file from the provided `.env.example`:

```bash
cp .env.example .env
```

Key environment variables:

| Variable | Description | Default |
|---|---|---|
| `PROJECT_NAME` | Name of the backend application | `"Yeswanth Portfolio API"` |
| `ENV` | Environment stage (`development` / `production`) | `development` |
| `DEBUG` | Enable FastAPI debug mode | `True` |
| `API_V1_STR` | Prefix for version 1 API routes | `/api/v1` |
| `BACKEND_CORS_ORIGINS` | JSON list or comma-separated allowed origins | `["http://localhost:5173"]` |
| `DATABASE_URL` | PostgreSQL connection string (psycopg2) | `postgresql+psycopg2://...` |
| `VITE_API_BASE_URL` | Base URL for the backend API | `http://localhost:8000` |

---

## 5. Getting Started

### Prerequisites
- Node.js 18+ (tested with Node v26)
- Python 3.11+ (tested with Python 3.14)
- PostgreSQL (required in Phase 3 for database models)

---

### Backend Setup & Run

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the FastAPI development server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

5. Verify the health check:
   - Health check endpoint: `http://localhost:8000/health`
   - Interactive Swagger API docs: `http://localhost:8000/docs`

---

### Frontend Setup & Run

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   - Web application: `http://localhost:5173`

---

## 6. Current Development Phase

**Phase 0 — Architecture and Project Foundation (Current)**
- Clean and decoupled full-stack repository structure.
- FastAPI backend foundation with Pydantic settings, CORS, and `GET /health`.
- SQLAlchemy 2.x synchronous database layer configured with `psycopg2-binary`.
- Standalone health check operational without mandatory active PostgreSQL connection.
- React + Vite frontend skeleton displaying temporary developer landing placeholder.
- Comprehensive Git and environment hygiene.

---

## 7. Planned Future Phases

- **Phase 1: Portfolio Content & Core UI**: Complete responsive design, Hero, About, Skills, Projects, Experience, and Contact sections.
- **Phase 2: Visual Polish & Micro-Interactions**: Smooth scrolling, micro-animations, and optional WebGL / 3D touches.
- **Phase 3: Database & Dynamic Content**: PostgreSQL schema, Alembic migrations, dynamic project management, and inquiry storage.
- **Phase 4: AI & RAG Subsystem**: "Ask My Portfolio" vector-powered interactive chat assistant.
- **Phase 5: Production Deployment**: Containerization with Docker and cloud deployment.
