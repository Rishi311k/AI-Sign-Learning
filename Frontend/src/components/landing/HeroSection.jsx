import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-image.png";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* Background Blobs */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        {/* Left Side */}
        <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}>

          {/* Badge */}
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
            🚀 AI Powered Learning Platform
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Learn{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sign Language
            </span>
            <br />
            with Artificial Intelligence
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 leading-8">
            Practice sign language through real-time AI recognition,
            interactive lessons, personalized feedback, and progress
            tracking designed for learners of all levels.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/register"
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
             <>
               Get Started
               <ArrowRight size={20} />
                </>
            </Link>

            <button className="border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300">
              ▶ Watch Demo
            </button>

          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-10">

            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                5K+
              </h3>

              <p className="text-gray-600">
                Active Learners
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-600">
                98%
              </h3>

              <p className="text-gray-600">
                Recognition Accuracy
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-600">
                24/7
              </h3>

              <p className="text-gray-600">
                AI Assistance
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center">

          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">

            <img
              src={heroImage}
              alt="AI Sign Language Learning"
              className="rounded-2xl"
            />

            <div className="mt-6">

              <div className="flex justify-between text-sm">
                <span className="font-medium">Prediction</span>
                <span className="font-bold text-blue-600">
                  HELLO 👋
                </span>
              </div>

              <div className="mt-5">

                <div className="flex justify-between text-sm mb-2">
                  <span>Confidence</span>
                  <span>98.4%</span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full w-[98%]"></div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;