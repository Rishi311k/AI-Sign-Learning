import { useState } from "react";

function FAQSection() {

  const faqs = [
    {
      question: "What is AI Sign Learning?",
      answer:
        "AI Sign Learning is an AI-powered platform that helps users learn and practice sign language using real-time gesture recognition and interactive lessons.",
    },
    {
      question: "Is the platform free to use?",
      answer:
        "Yes. The basic learning modules are free. Premium features such as advanced assessments and certificates can be added later.",
    },
    {
      question: "Which sign language is supported?",
      answer:
        "Initially, the platform supports American Sign Language (ASL). Support for additional sign languages can be added in future updates.",
    },
    {
      question: "Can I practice using my webcam?",
      answer:
        "Yes. During practice sessions, the AI analyzes webcam input and provides instant feedback on your hand gestures.",
    },
    {
      question: "How accurate is the AI model?",
      answer:
        "Our target accuracy is above 95% using MediaPipe and TensorFlow-based recognition models.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Everything you need to know about our AI-powered sign language platform.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden"
            >

              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full px-8 py-6 flex justify-between items-center text-left"
              >

                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <span className="text-2xl text-blue-600">

                  {activeIndex === index ? "−" : "+"}

                </span>

              </button>

              {activeIndex === index && (

                <div className="px-8 pb-6 text-gray-600 leading-8">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQSection;