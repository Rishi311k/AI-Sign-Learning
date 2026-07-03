function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      description:
        "Register and create your personalized learning profile.",
      color: "bg-blue-500",
    },
    {
      number: "02",
      title: "Learn ASL",
      description:
        "Study interactive lessons designed for beginners and advanced learners.",
      color: "bg-purple-500",
    },
    {
      number: "03",
      title: "Practice with AI",
      description:
        "Use your webcam to practice signs and receive instant AI feedback.",
      color: "bg-green-500",
    },
    {
      number: "04",
      title: "Get Assessed",
      description:
        "Complete assessments, earn scores, and track your improvement.",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Learn in{" "}
            <span className="text-blue-600">
              Four Simple Steps
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Start learning sign language with AI in just a few easy steps.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Line */}

          <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-gray-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative">

            {steps.map((step) => (

              <div
                key={step.number}
                className="text-center"
              >

                {/* Circle */}

                <div
                  className={`w-20 h-20 rounded-full ${step.color} text-white text-2xl font-bold flex items-center justify-center mx-auto shadow-lg`}
                >
                  {step.number}
                </div>

                {/* Card */}

                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 mt-8 p-8">

                  <h3 className="text-2xl font-semibold mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {step.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorksSection;