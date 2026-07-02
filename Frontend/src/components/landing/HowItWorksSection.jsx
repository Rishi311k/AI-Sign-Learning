import {
  UserPlus,
  GraduationCap,
  Camera,
  Award,
} from "lucide-react";

function HowItWorksSection() {

  const steps = [
    {
      icon: UserPlus,
      title: "Create an Account",
      description:
        "Sign up and create your personalized learning profile.",
    },

    {
      icon: GraduationCap,
      title: "Learn",
      description:
        "Complete interactive lessons designed for every skill level.",
    },

    {
      icon: Camera,
      title: "Practice with AI",
      description:
        "Use your webcam to practice signs with real-time recognition.",
    },

    {
      icon: Award,
      title: "Get Instant Feedback",
      description:
        "Receive AI-powered evaluation and improve your accuracy.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            How It Works
          </h2>

          <p className="text-gray-600 mt-4">
            Learn sign language in four simple steps.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300"
              >

                <div className="flex justify-center">

                  <div className="bg-blue-100 rounded-full p-5">

                    <Icon
                      className="text-blue-600"
                      size={40}
                    />

                  </div>

                </div>

                <h3 className="text-2xl font-semibold mt-6">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {step.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );

}

export default HowItWorksSection;