import cv2


class Camera:

    def __init__(self, camera_index=0):
        """
        Initialize webcam.
        """
        self.camera_index = camera_index
        self.cap = None

    def start(self):
        """
        Start webcam.
        """
        self.cap = cv2.VideoCapture(self.camera_index)

        if not self.cap.isOpened():
            raise RuntimeError("Unable to open webcam.")

    def read_frame(self):
        """
        Read one frame.
        """
        if self.cap is None:
            return None

        success, frame = self.cap.read()

        if not success:
            return None

        return frame

    def release(self):
        """
        Release webcam.
        """
        if self.cap:
            self.cap.release()

        cv2.destroyAllWindows()