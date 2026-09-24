from fastapi import APIRouter
from app.schemas.health import HealthResponse

router = APIRouter()


@router.get(
    "/health",
    response_model=HealthResponse,
    summary="Health Check",
    description="Returns the operational health status of the FastAPI backend application.",
)
def get_health() -> HealthResponse:
    """
    Health check endpoint.
    Independent of external database connection status for Phase 0.
    """
    return HealthResponse(status="ok")
