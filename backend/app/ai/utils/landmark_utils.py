def print_landmarks(results):

    if not results.multi_hand_landmarks:
        return

    for hand_index, hand_landmarks in enumerate(results.multi_hand_landmarks, start=1):

        print("\n" + "=" * 40)
        print(f"Hand {hand_index}")
        print("=" * 40)

        for landmark_id, landmark in enumerate(hand_landmarks.landmark):

            print(
                f"Landmark {landmark_id:2d} : "
                f"x={landmark.x:.4f} "
                f"y={landmark.y:.4f} "
                f"z={landmark.z:.4f}"
            )