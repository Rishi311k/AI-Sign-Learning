function FeaturesSection() {
  const features = [
    {
      icon: "🤖",
      title: "AI Recognition",
      description:
        "Detect sign language gestures in real time using advanced AI and computer vision.",
    },
    {
      icon: "📚",
      title: "Interactive Lessons",
      description:
        "Learn step-by-step with structured ASL lessons, quizzes, and practice sessions.",
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      description:
        "Monitor your learning journey with detailed analytics and achievements.",
    },
    {
      icon: "🎯",
      title: "AI Assessment",
      description:
        "Receive instant feedback, scores, and suggestions to improve your signing skills.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            FEATURES
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="text-blue-600">
              AI Sign Learning?
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Learn sign language faster with Artificial Intelligence,
            real-time gesture recognition, interactive lessons,
            and personalized assessments.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:translate-x-2 transition-transform">
                Learn More →
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;