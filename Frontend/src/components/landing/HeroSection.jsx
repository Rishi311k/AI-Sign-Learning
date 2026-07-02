import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-image.png";

function HeroSection() {
  return (
    <section className="bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Side */}
        <div className="md:w-1/2">

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Learn Sign Language with
            <span className="text-blue-600"> AI Assistance</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Practice sign language through real-time AI recognition,
            interactive lessons, and instant feedback.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              to="/register"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Watch Demo
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">

          <img
            src={heroImage}
            alt="Sign Language Learning"
            className="w-full max-w-md"
          />

        </div>

      </div>
    </section>
  );
}

export default HeroSection;