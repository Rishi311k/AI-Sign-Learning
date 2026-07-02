import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function FAQSection() {
  const faqs = [
    {
      question: "Is this platform free to use?",
      answer:
        "Yes! You can access the core learning materials and AI-powered practice features for free. Additional premium features may be introduced in the future.",
    },
    {
      question: "Can beginners learn sign language here?",
      answer:
        "Absolutely. The platform is designed for beginners, intermediate learners, and advanced users with structured learning paths.",
    },
    {
      question: "How does AI recognize my hand signs?",
      answer:
        "The platform uses MediaPipe to detect hand landmarks and a trained deep learning model to recognize sign language gestures in real time.",
    },
    {
      question: "Do I need a webcam?",
      answer:
        "Yes. A webcam is required for real-time sign recognition, practice sessions, and assessments.",
    },
    {
      question: "Can I track my progress?",
      answer:
        "Yes. Your completed lessons, practice sessions, quiz scores, and AI assessment results are stored in your dashboard.",
    },
    {
      question: "Will more sign languages be added?",
      answer:
        "Yes. The platform is designed to support multiple sign languages such as ASL, ISL, and others in future updates.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-4">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <ChevronUp className="text-blue-600" />
                ) : (
                  <ChevronDown className="text-blue-600" />
                )}

              </button>

              {activeIndex === index && (

                <div className="px-6 pb-6 text-gray-600 leading-7">
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