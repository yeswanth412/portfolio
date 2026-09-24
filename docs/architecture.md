# Architecture & System Design — Yeswanth Portfolio

## 1. Overview & Vision
The **Yeswanth Portfolio** is a production-grade personal developer platform showcasing Yeswanth Uggina's expertise as a **Python Developer / Python Full Stack Developer with AI Focus**.

Rather than a static brochure site, this platform is designed as a modular, decoupled full-stack architecture capable of running high-performance API endpoints, maintaining transactional database models, and orchestrating AI/RAG workflows (such as an interactive "Ask My Portfolio" assistant).

---

## 2. Phased Architecture Breakdown

```
+---------------------------------------------------------------------------------------+
|                                     CURRENT STATE                                     |
|                                                                                       |
|  [ Phase 0: Project & Architecture Foundation ]                                       |
|  - React + Vite Minimal Shell (Landing placeholder)                                   |
|  - FastAPI Modular Engine with Pydantic Settings & CORS                               |
|  - Standalone Health Check: GET /health (Decoupled from DB availability)              |
|  - Synchronous SQLAlchemy 2.x Layer (psycopg2-binary, create_engine, sessionmaker)   |
|  - Strict Environment Configuration (.env, .env.example)                              |
+---------------------------------------------------------------------------------------+
                                           |
                                           v
+---------------------------------------------------------------------------------------+
|                                     FUTURE PHASES                                     |
|                                                                                       |
|  [ Phase 1: Portfolio Content & Core UI ]                                             |
|  - Hero, About, Skills, Projects, Experience, Contact Sections                        |
|  - Responsive Modern Design System                                                    |
|                                                                                       |
|  [ Phase 2: Interactive Motion & Visual Experience ]                                 |
|  - Smooth micro-interactions & scroll triggers (GSAP / motion libraries)              |
|  - Optional 3D/WebGL experiences (Three.js / React Three Fiber)                       |
|                                                                                       |
|  [ Phase 3: PostgreSQL Models & Persistence Layer ]                                   |
|  - Relational Models (Projects, Inquiries, Analytics, Skills)                         |
|  - Alembic database migration management                                              |
|                                                                                       |
|  [ Phase 4: AI & RAG Subsystem ("Ask My Portfolio") ]                                 |
|  - Vector Embeddings generation (text embeddings of resume, technical blogs, code)    |
|  - Vector Storage / Similarity Search                                                 |
|  - LLM Query Pipeline with context synthesis & citation                              |
|                                                                                       |
|  [ Phase 5: Production Deployment & Observability ]                                   |
|  - Containerization (Docker, Docker Compose)                                          |
|  - Production hosting & CI/CD deployment pipeline                                     |
+---------------------------------------------------------------------------------------+
```

---

## 3. Component Deep Dive

### 3.1 Frontend Tier (`frontend/`)
- **Technology**: React 18+, Vite, ES Modules, Modern CSS.
- **Role**: Client-side single-page application (SPA).
- **Communication**: Communicates with the FastAPI backend over RESTful HTTP/JSON (and streaming Server-Sent Events / WebSockets in future AI chat phases).
- **Directory Structure Strategy**:
  - `components/`: Modular, reusable UI building blocks (buttons, modal dialogs, cards).
  - `sections/`: Distinct landing page sections (Hero, About, Projects, Experience, Contact).
  - `pages/`: Route-level views (Home, Project Detail, Playground).
  - `services/`: API client abstractions (`apiClient.js`) utilizing Axios or native `fetch`.
  - `hooks/`: Custom React hooks (theme toggles, animation observers, query state).
  - `data/`: Static metadata fallbacks and local mock schemas.
  - `styles/`: Global stylesheets, CSS custom properties, and reset rules.

### 3.2 Backend Tier (`backend/`)
- **Technology**: Python 3.11+, FastAPI, Uvicorn, Pydantic v2, Pydantic Settings.
- **Role**: High-throughput REST API serving content, handling contact submissions, providing portfolio metrics, and hosting AI assistant endpoints.
- **Architectural Principles**:
  - **Environment-based Configuration**: Managed through `app.core.config.Settings` reading from `.env`.
  - **Decoupled Health Check**: `GET /health` independently verifies application process health without hard failing if the database is offline.
  - **Modular API Routing**: Organized under `app.api.api` router with version prefixing (`/api/v1`).
  - **Separation of Concerns**: Strict boundary between API endpoints (`app/api/`), Pydantic request/response schemas (`app/schemas/`), and database models (`app/models/`).

### 3.3 Database Tier (PostgreSQL + SQLAlchemy 2.x)
- **Technology**: PostgreSQL, SQLAlchemy 2.x, psycopg2-binary driver.
- **Architectural Approach**:
  - **Synchronous Engine**: Uses `create_engine()` with connection pooling.
  - **Session Management**: Thread-safe `sessionmaker(autocommit=False, autoflush=False, bind=engine)` delivering scoped sessions via the `get_db()` dependency generator.
  - **Declarative Base**: Uses SQLAlchemy 2.0 `DeclarativeBase` subclassing in `app.db.base.Base` to enable type-safe attribute annotations.
  - **Status in Phase 0**: The configuration and session mechanics are established; database tables and active connections are deferred until Phase 3 to keep Phase 0 foundation robust and portable.

### 3.4 Future AI & RAG Subsystem ("Ask My Portfolio")
- **Vision**: An interactive on-page assistant where visitors, recruiters, and fellow engineers can ask questions like:
  - *"What experience does Yeswanth have with distributed systems and FastAPI?"*
  - *"Can you explain the architecture of Yeswanth's microservices projects?"*
- **Planned Data Flow**:
  1. **Knowledge Ingestion**: Structured JSON/Markdown describing Yeswanth's background, projects, architecture decisions, and code snippets are parsed and chunked.
  2. **Vector Embeddings**: Chunks are vectorized and indexed.
  3. **Retrieval**: When a visitor enters a prompt, the FastAPI AI endpoint queries relevant context chunks via cosine similarity.
  4. **Generation**: The prompt, along with the retrieved context and system instructions, is passed to an LLM to generate an accurate, grounded response.
  5. **Streaming Output**: Delivered to the React client via Server-Sent Events (SSE) or WebSockets for a smooth typing animation.

---

## 4. Security & Production Considerations
- **No Hardcoded Secrets**: Secrets and database credentials must only exist in `.env` files, never committed to source control.
- **CORS Configuration**: Restrict allowed origins to designated development (`localhost:5173`) and production domains.
- **Input Validation**: All incoming requests to FastAPI are strictly validated and sanitized via Pydantic schemas.
