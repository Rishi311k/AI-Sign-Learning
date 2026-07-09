import uuid
from datetime import datetime


class AssessmentService:

    def start_practice(self, lesson_id: int):

        return {
            "session_id": str(uuid.uuid4()),
            "lesson_id": lesson_id,
            "status": "Practice Started",
            "start_time": datetime.now().isoformat(),
            "next_step": "Open Camera"
        }

    def process_landmarks(self):

        return {
            "status": "Landmarks Extracted",
            "prediction": "Placeholder"
        }

    def end_practice(self):

        return {
            "status": "Practice Session Completed"
        }