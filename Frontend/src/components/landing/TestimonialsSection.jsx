function TestimonialsSection() {

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student",
      avatar: "SJ",
      review:
        "The AI feedback helped me improve my signing much faster than traditional learning methods.",
    },
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      avatar: "RS",
      review:
        "Real-time recognition is incredibly accurate. The practice sessions are engaging and effective.",
    },
    {
      name: "Emma Wilson",
      role: "Teacher",
      avatar: "EW",
      review:
        "An excellent platform for beginners and educators alike. The lessons are well structured.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">

            What Our

            <span className="text-blue-600">
              {" "}Learners Say
            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Thousands of learners trust our AI-powered platform to
            master sign language through interactive learning and
            instant feedback.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((user) => (

            <div
              key={user.name}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8"
            >

              {/* Avatar */}

              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center text-xl font-bold">

                {user.avatar}

              </div>

              {/* Stars */}

              <div className="mt-6 text-yellow-500 text-xl">

                ⭐⭐⭐⭐⭐

              </div>

              {/* Review */}

              <p className="mt-6 text-gray-600 leading-8 italic">

                "{user.review}"

              </p>

              {/* User */}

              <div className="mt-8">

                <h3 className="font-bold text-lg">

                  {user.name}

                </h3>

                <p className="text-gray-500">

                  {user.role}

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