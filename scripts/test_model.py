import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.append(str(PROJECT_ROOT))

from backend.app.services.gesture_service import GestureService

service = GestureService()

dummy_landmarks = [0.5] * 63

result = service.predict(dummy_landmarks)

print(result)