from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.api import api_router
from app.schemas.health import HealthResponse

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json" if settings.DEBUG else None,
    docs_url=f"{settings.API_V1_STR}/docs" if settings.DEBUG else None,
    redoc_url=f"{settings.API_V1_STR}/redoc" if settings.DEBUG else None,
)

# Configure CORS
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.BACKEND_CORS_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )


# Root Health Check (Decoupled from DB connection status for Phase 0)
@app.get(
    "/health",
    response_model=HealthResponse,
    tags=["Health"],
    summary="Application Health Check",
)
def root_health_check() -> HealthResponse:
    """
    Top-level health check endpoint returning {"status": "ok"}.
    """
    return HealthResponse(status="ok")


# Root landing endpoint
@app.get("/", tags=["Root"])
def root():
    return {
        "message": f"Welcome to {settings.PROJECT_NAME}",
        "docs": f"{settings.API_V1_STR}/docs",
        "health": "/health",
    }


# Include versioned API router
app.include_router(api_router, prefix=settings.API_V1_STR)
