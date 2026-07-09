import time

from app.ai.gesture_recognition.predictor import GesturePredictor
from app.schemas.prediction_schema import PredictionResponse


class GestureService:

    def __init__(self):
        self.predictor = GesturePredictor()

    def predict(self):

        start = time.perf_counter()

        result = self.predictor.predict(None)

        processing_time = round(time.perf_counter() - start, 6)

        return PredictionResponse(
            prediction=result["prediction"],
            confidence=result["confidence"],
            processing_time=processing_time,
        )