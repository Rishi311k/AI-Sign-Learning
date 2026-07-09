import cv2


def main():
    # Open the default webcam (0 = built-in webcam)
    camera = cv2.VideoCapture(0)

    if not camera.isOpened():
        print("❌ Error: Could not access the webcam.")
        return

    print("✅ Webcam started successfully.")
    print("Press 'Q' to quit.")

    while True:
        ret, frame = camera.read()

        if not ret:
            print("❌ Failed to capture frame.")
            break

        # Display the webcam feed
        cv2.imshow("AI Sign Language - Camera Test", frame)

        # Exit when 'Q' is pressed
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    camera.release()
    cv2.destroyAllWindows()
    print("📷 Camera closed.")


if __name__ == "__main__":
    main()