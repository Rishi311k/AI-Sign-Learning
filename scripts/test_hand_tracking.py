import cv2

from ai.hand_tracking.camera import Camera
from ai.hand_tracking.detector import HandDetector
from ai.hand_tracking.fps import FPSCounter
from ai.utils.landmark_utils import print_landmarks
from ai.utils.file_utils import save_landmarks

def main():
    camera = Camera()
    detector = HandDetector()
    fps_counter = FPSCounter()

    try:
        camera.start()

        print("Camera started.")
        print("Press Q to quit.")

        while True:
            frame = camera.read_frame()

            if frame is None:
                break

            frame, hand_count, results = detector.process_frame(frame)
            print_landmarks(results)
            fps = fps_counter.get_fps()

            cv2.putText(
                frame,
                f"FPS: {fps}",
                (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.8,
                (0, 255, 0),
                2,
            )

            if hand_count == 0:
                cv2.putText(
                    frame,
                    "No Hand Detected",
                    (10, 70),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    0.8,
                    (0, 0, 255),
                    2,
                )
            else:
                cv2.putText(
                    frame,
                    f"Hands Detected: {hand_count}",
                    (10, 70),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    0.8,
                    (255, 0, 0),
                    2,
                )

            cv2.imshow("AI Sign Language Platform", frame)

            key = cv2.waitKey(1) & 0xFF

            if key == ord("s"):
                save_landmarks(results)

            elif key == ord("q"):
                break

    finally:
        detector.close()
        camera.release()


if __name__ == "__main__":
    main()