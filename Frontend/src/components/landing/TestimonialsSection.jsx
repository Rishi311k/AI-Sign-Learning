import { Star } from "lucide-react";

function TestimonialsSection() {

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Beginner Learner",
      review:
        "The AI feedback helped me improve my signing skills much faster than traditional learning methods.",
    },

    {
      name: "David Lee",
      role: "College Student",
      review:
        "Interactive lessons and AI recognition made learning enjoyable and engaging.",
    },

    {
      name: "Emily Brown",
      role: "Teacher",
      review:
        "The real-time practice sessions are incredibly accurate and easy to use.",
    },
  ];

  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            What Our Learners Say
          </h2>

          <p className="mt-4 text-gray-600">
            Hear from students who improved their communication skills with AI.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-blue-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition"
            >

              <div className="flex mb-5">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              <p className="text-gray-700 italic">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default TestimonialsSection;