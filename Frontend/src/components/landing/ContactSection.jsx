import { Mail, Phone, MapPin } from "lucide-react";

function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Contact Us
          </h2>

          <p className="text-gray-600 mt-4">
            We'd love to hear from you. Send us your questions,
            suggestions, or feedback.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <div>

            <h3 className="text-2xl font-semibold mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <Mail className="text-blue-600" />

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">
                    support@aisignlearning.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <Phone className="text-blue-600" />

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">
                    +91 9876543210
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <MapPin className="text-blue-600" />

                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600">
                    India
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white shadow-lg rounded-xl p-8">

            <form className="space-y-5">

              <div>

                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;