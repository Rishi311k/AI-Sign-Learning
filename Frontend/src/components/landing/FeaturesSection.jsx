import {
  Camera,
  BookOpen,
  BarChart3,
  ClipboardCheck,
} from "lucide-react";

function FeaturesSection() {
  const features = [
    {
      icon: Camera,
      title: "AI Recognition",
      description:
        "Detect hand signs instantly using computer vision and AI.",
    },
    {
      icon: BookOpen,
      title: "Interactive Courses",
      description:
        "Learn sign language step by step with structured lessons.",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description:
        "Monitor your learning progress with detailed analytics.",
    },
    {
      icon: ClipboardCheck,
      title: "Smart Assessment",
      description:
        "Receive AI-powered feedback and performance reports.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Why Choose Our Platform?
          </h2>

          <p className="mt-4 text-gray-600">
            Learn sign language with AI-powered tools,
            personalized practice, and real-time feedback.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-blue-50 rounded-xl p-8 shadow hover:shadow-lg transition duration-300"
              >
                <Icon
                  className="text-blue-600"
                  size={40}
                />

                <h3 className="text-xl font-semibold mt-6">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;