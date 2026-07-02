import { Camera, Activity, CheckCircle } from "lucide-react";

function AILiveDemoSection() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Experience AI Sign Recognition
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Practice sign language with real-time AI detection using your webcam.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">

          {/* Webcam Placeholder */}
          <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center">

            <div className="w-full h-80 bg-gray-100 rounded-xl flex items-center justify-center">

              <Camera size={70} className="text-gray-400" />

            </div>

            <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Start Live Demo
            </button>

          </div>

          {/* AI Information */}
          <div>

            <div className="flex items-center gap-3 mb-8">

              <CheckCircle className="text-green-500" size={30} />

              <h3 className="text-2xl font-semibold">
                AI Status: Ready
              </h3>

            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">

              <h4 className="text-lg font-semibold mb-2">
                Detected Sign
              </h4>

              <p className="text-3xl font-bold text-blue-600">
                Hello 👋
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">

              <h4 className="text-lg font-semibold mb-2">
                Confidence Score
              </h4>

              <p className="text-3xl font-bold text-green-600">
                97%
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-md p-6">

              <div className="flex items-center gap-3">

                <Activity className="text-blue-600" />

                <span className="font-semibold">
                  Live AI Recognition Enabled
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AILiveDemoSection;