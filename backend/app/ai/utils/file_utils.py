import json
from pathlib import Path
from datetime import datetime
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[3]
CAPTURE_FOLDER = BASE_DIR / "captures"


def save_landmarks(results):

    if not results.multi_hand_landmarks:
        print("No hand detected. Nothing to save.")
        return

    CAPTURE_FOLDER.mkdir(parents=True, exist_ok=True)

    capture_number = len(list(CAPTURE_FOLDER.glob("capture_*.json"))) + 1

    filename = CAPTURE_FOLDER / f"capture_{capture_number:03d}.json"

    data = {
        "timestamp": datetime.now().isoformat(),
        "hands": []
    }

    for hand_index, hand_landmarks in enumerate(results.multi_hand_landmarks, start=1):

        hand_data = {
            "hand": hand_index,
            "landmarks": []
        }

        for landmark_id, landmark in enumerate(hand_landmarks.landmark):

            hand_data["landmarks"].append({
                "id": landmark_id,
                "x": landmark.x,
                "y": landmark.y,
                "z": landmark.z
            })

        data["hands"].append(hand_data)

    with open(filename, "w") as file:
        json.dump(data, file, indent=4)

    print(f"\nSaved: {filename}")