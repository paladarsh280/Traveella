import React, { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      number: "01",
      question: "How do I make a reservation on your website?",
      answer:
        "Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process.",
    },
    {
      number: "02",
      question: "What documents do I need for my trip, and how do I obtain them?",
      answer: "",
    },
    {
      number: "03",
      question:
        "If I need to modify or cancel my reservation, what are the policies?",
      answer: "",
    },
    {
      number: "04",
      question:
        "What types of credit/debit cards or online payment methods are accepted?",
      answer: "",
    },
    {
      number: "05",
      question:
        "What are your customer support working hours and response times?",
      answer: "",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 sm:px-6 md:px-10 py-12 bg-white relative overflow-hidden">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-500 text-center mt-1 mb-8 text-sm sm:text-base">
        You need to come at least once in your life
      </p>

      {/* FAQ Box */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md border overflow-hidden">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-none">
            <div
              className="flex justify-between items-center p-4 sm:p-6 cursor-pointer"
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="text-xl sm:text-2xl font-bold text-gray-800">
                  {faq.number}
                </span>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  {faq.question}
                </span>
              </div>

              <button className="text-gray-600 text-lg sm:text-xl font-bold w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center border rounded-full">
                {openIndex === index ? "x" : "+"}
              </button>
            </div>

            {/* Answer Section with Animation */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index && faq.answer ? "max-h-40" : "max-h-0"
              }`}
            >
              {faq.answer && (
                <div className="px-6 sm:px-14 md:px-20 pb-6 text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10">
        <button className="px-6 py-2 bg-black text-white rounded-full flex items-center gap-2 text-sm justify-center">
          Our Support Center <span>→</span>
        </button>

        <button className="px-6 py-2 border border-gray-300 text-black rounded-full flex items-center gap-2 text-sm justify-center">
          Contact Us <span>→</span>
        </button>
      </div>
    </div>
  );
}
