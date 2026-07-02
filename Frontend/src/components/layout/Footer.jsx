import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              AI Sign
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              AI-powered Sign Language Learning &
              Assessment Platform that enables
              learners to practice, assess and
              improve their communication skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  className="hover:text-blue-400"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/practice"
                  className="hover:text-blue-400"
                >
                  Practice
                </Link>
              </li>

              <li>
                <Link
                  to="/assessment"
                  className="hover:text-blue-400"
                >
                  Assessment
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-3">

              <li>Documentation</li>

              <li>Help Center</li>

              <li>FAQs</li>

              <li>Privacy Policy</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="mb-2">
              📧 support@aisignlearning.com
            </p>

            <p className="mb-2">
              📍 India
            </p>

            <div className="mt-5">

              <a
                href="https://github.com/Rishi311k"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-blue-400"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-blue-400 mt-2"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">

          © 2026 AI Sign Language Learning Platform. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;