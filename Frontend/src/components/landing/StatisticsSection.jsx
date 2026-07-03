function StatsSection() {

  const stats = [
    {
      number: "5K+",
      title: "Active Learners",
      icon: "👨‍🎓",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "120+",
      title: "Interactive Lessons",
      icon: "📚",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "98%",
      title: "Recognition Accuracy",
      icon: "🎯",
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "850+",
      title: "Certificates Earned",
      icon: "🏆",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            OUR IMPACT
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">

            Trusted by

            <span className="text-blue-600">
              {" "}Thousands
            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            Empowering learners worldwide through
            Artificial Intelligence and interactive education.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((stat) => (

            <div
              key={stat.title}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 p-8 text-center"
            >

              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-4xl mx-auto shadow-lg`}
              >
                {stat.icon}
              </div>

              <h3 className="mt-8 text-4xl font-bold text-gray-900">
                {stat.number}
              </h3>

              <p className="mt-3 text-gray-600">
                {stat.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default StatsSection;