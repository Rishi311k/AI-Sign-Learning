import {
  BookOpen,
  Users,
  Target,
  Globe,
} from "lucide-react";

function StatisticsSection() {

  const stats = [
    {
      icon: BookOpen,
      number: "150+",
      label: "Interactive Lessons",
    },
    {
      icon: Users,
      number: "5,000+",
      label: "Active Learners",
    },
    {
      icon: Target,
      number: "95%",
      label: "AI Detection Accuracy",
    },
    {
      icon: Globe,
      number: "24/7",
      label: "Learning Available",
    },
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Trusted by Learners Worldwide
          </h2>

          <p className="mt-4 text-blue-100">
            Empowering communication through AI-powered sign language education.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (

              <div
                key={index}
                className="bg-white text-gray-900 rounded-xl p-8 text-center shadow-lg hover:scale-105 transition"
              >

                <Icon
                  size={45}
                  className="mx-auto text-blue-600"
                />

                <h3 className="text-4xl font-bold mt-5">
                  {stat.number}
                </h3>

                <p className="mt-3 text-gray-600">
                  {stat.label}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );

}

export default StatisticsSection;