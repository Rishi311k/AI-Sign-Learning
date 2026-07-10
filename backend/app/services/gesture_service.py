import time

from app.ai.gesture_recognition.model_loader import ModelLoader


class GestureService:

    def __init__(self):
        self.model_loader = ModelLoader()

    def predict(self, landmarks):

        start_time = time.time()

        prediction = self.model_loader.predict(landmarks)

        processing_time = time.time() - start_time

        return {
            "prediction": prediction,
            "confidence": 100.0,  # Temporary
            "processing_time": round(processing_time, 4)
        }