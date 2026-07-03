import { Link } from "react-router-dom";

function LiveDemoSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="inline-block bg-blue-600/20 border border-blue-400 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
            LIVE AI DEMO
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Experience
            <span className="text-cyan-400">
              {" "}Real-Time{" "}
            </span>
            Sign Recognition
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Practice sign language through your webcam and receive
            instant AI predictions with confidence scores and
            personalized feedback.
          </p>

          <Link
            to="/practice"
            className="inline-block mt-10 bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg"
          >
            Start Practice →
          </Link>

        </div>

        {/* Right */}

        <div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">

            {/* Camera */}

            <div className="h-72 bg-slate-800 flex items-center justify-center">

              <div className="text-center">

                <div className="text-7xl mb-4">
                  📷
                </div>

                <p className="text-gray-300">
                  Webcam Preview
                </p>

              </div>

            </div>

            {/* Prediction */}

            <div className="p-8">

              <div className="flex justify-between">

                <span className="text-gray-300">
                  Prediction
                </span>

                <span className="font-bold text-cyan-400">
                  HELLO 👋
                </span>

              </div>

              <div className="mt-6">

                <div className="flex justify-between text-sm mb-2">

                  <span>Confidence</span>

                  <span>98.4%</span>

                </div>

                <div className="w-full bg-slate-700 h-3 rounded-full">

                  <div className="w-[98%] h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>

                </div>

              </div>

              <div className="mt-6 flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

                <span className="text-green-400 font-medium">
                  AI Model Online
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LiveDemoSection;