function ContactSection() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            CONTACT US
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            We'd Love to Hear From You
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Have questions about our platform? Reach out and we'll get back to you soon.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Contact Info */}

          <div className="space-y-6">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-bold mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="font-semibold text-blue-600">📧 Email</p>
                  <p className="text-gray-600">
                    support@aisignlearning.com
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-blue-600">📞 Phone</p>
                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-blue-600">📍 Location</p>
                  <p className="text-gray-600">
                    India
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-blue-600">🕒 Support</p>
                  <p className="text-gray-600">
                    Monday – Friday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <form className="space-y-6">

              <div>

                <label className="block font-medium mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />

              </div>

              <div>

                <label className="block font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />

              </div>

              <div>

                <label className="block font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                ></textarea>

              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg"
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