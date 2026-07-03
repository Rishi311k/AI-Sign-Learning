import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="py-24 px-6 bg-white">

      <div className="max-w-6xl mx-auto">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-16 text-center shadow-2xl">

          {/* Decorative Blur Circles */}

          <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

          {/* Content */}

          <div className="relative z-10">

            <span className="inline-block bg-white/20 border border-white/30 text-white px-5 py-2 rounded-full text-sm font-semibold">
              🚀 START YOUR JOURNEY TODAY
            </span>

            <h2 className="mt-8 text-4xl md:text-5xl font-extrabold text-white leading-tight">

              Ready to Learn
              <br />

              Sign Language with AI?

            </h2>

            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto leading-8">

              Practice with real-time AI recognition,
              interactive lessons, progress tracking,
              and personalized feedback—all in one platform.

            </p>

            <div className="mt-10">

              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                Get Started Free →
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTASection;