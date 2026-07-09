from app.schemas.lesson_schema import Lesson


class LessonService:

    def __init__(self):

        self.lessons = [
            Lesson(
                id=1,
                sign="A",
                description="Closed fist with thumb resting on the side.",
                meaning="Letter A",
                image="assets/asl/A.jpg",
                difficulty="Beginner"
            ),
            Lesson(
                id=2,
                sign="B",
                description="Flat hand with fingers together.",
                meaning="Letter B",
                image="assets/asl/B.jpg",
                difficulty="Beginner"
            ),
            Lesson(
                id=3,
                sign="C",
                description="Hand forms the shape of the letter C.",
                meaning="Letter C",
                image="assets/asl/C.jpg",
                difficulty="Beginner"
            ),
            Lesson(
                id=4,
                sign="D",
                description="Index finger points upward while thumb touches middle finger.",
                meaning="Letter D",
                image="assets/asl/D.jpg",
                difficulty="Beginner"
            ),
            Lesson(
                id=5,
                sign="E",
                description="Fingers curled with thumb touching fingertips.",
                meaning="Letter E",
                image="assets/asl/E.jpg",
                difficulty="Beginner"
            ),
        ]

    def get_all_lessons(self):
        return self.lessons

    def get_lesson(self, lesson_id):

        for lesson in self.lessons:
            if lesson.id == lesson_id:
                return lesson

        return None