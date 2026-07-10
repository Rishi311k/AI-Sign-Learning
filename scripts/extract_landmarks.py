from pathlib import Path

import cv2
import mediapipe as mp


class LandmarkExtractor:

    def __init__(self):

        self.mp_hands = mp.solutions.hands

        self.hands = self.mp_hands.Hands(
            static_image_mode=True,
            max_num_hands=1,
            min_detection_confidence=0.5,
        )

    def extract(self, image_path):

        image = cv2.imread(str(image_path))

        if image is None:
            return None

        rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

        results = self.hands.process(rgb)

        if not results.multi_hand_landmarks:
            return None

        landmarks = []

        hand = results.multi_hand_landmarks[0]

        for landmark in hand.landmark:

            landmarks.extend([
                landmark.x,
                landmark.y,
                landmark.z
            ])

        return landmarks

    def close(self):
        self.hands.close()

if __name__ == "__main__":

    DATASET = Path("datasets/asl_alphabet/asl_train")

    extractor = LandmarkExtractor()

    first_image = None

    for class_folder in sorted(DATASET.iterdir()):

        if class_folder.is_dir():

            images = list(class_folder.glob("*"))

            if images:
                first_image = images[0]
                break

    if first_image:

        landmarks = extractor.extract(first_image)

        if landmarks:

            print("Extraction Successful")
            print("Number of Features:", len(landmarks))

        else:

            print("No hand detected.")

    extractor.close()