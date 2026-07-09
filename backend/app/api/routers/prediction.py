from fastapi import APIRouter

from app.services.gesture_service import GestureService
from app.schemas.prediction_schema import PredictionResponse

router = APIRouter(
    prefix="/predict",
    tags=["Prediction"]
)

gesture_service = GestureService()


@router.post("/", response_model=PredictionResponse)
def predict():
    return gesture_service.predict()