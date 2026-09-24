from typing import Generator
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from app.core.config import settings

# Synchronous SQLAlchemy 2.x engine
# Connection is lazily initialized on first query, keeping Phase 0 decoupled
# from an active PostgreSQL instance during health checks.
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,
    echo=settings.DEBUG,
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
)


def get_db() -> Generator[Session, None, None]:
    """
    Dependency generator yielding a scoped SQLAlchemy database session.
    Closes the session after request processing.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
