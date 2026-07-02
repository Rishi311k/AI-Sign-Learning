import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";

function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold leading-tight">
          Ready to Start Your
          <span className="block text-yellow-300">
            Sign Language Journey?
          </span>
        </h2>

        <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
          Join thousands of learners using AI-powered lessons,
          real-time sign recognition, and interactive assessments
          to master sign language.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>

          <button
            className="inline-flex items-center justify-center gap-2 border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            <PlayCircle size={20} />
            Watch Demo
          </button>

        </div>

      </div>

    </section>
  );
}

export default CTASection;