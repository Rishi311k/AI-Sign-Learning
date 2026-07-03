import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-white">

              <span className="text-blue-500">
                AI
              </span>{" "}
              Sign Learning

            </h2>

            <p className="mt-5 leading-7">

              Learn sign language through AI-powered
              lessons, real-time gesture recognition,
              and interactive assessments.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><Link to="/">Home</Link></li>

              <li><Link to="/courses">Courses</Link></li>

              <li><Link to="/practice">Practice</Link></li>

              <li><Link to="/assessment">Assessment</Link></li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Resources
            </h3>

            <ul className="space-y-3">

              <li>Documentation</li>

              <li>FAQ</li>

              <li>Privacy Policy</li>

              <li>Terms & Conditions</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <p>📧 support@aisignlearning.com</p>

              <p>📞 +91 98765 43210</p>

              <p>📍 India</p>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-400">

          © 2026 AI Sign Learning Platform. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;