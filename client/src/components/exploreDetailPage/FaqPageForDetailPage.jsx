import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Can I get the refund?",
      answer:
        "Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience."
    },
    {
      question: "Can I change the travel date?",
      answer: ""
    },
    {
      question: "When and where does the tour end?",
      answer: ""
    },
    {
      question: "Do you arrange airport transfers?",
      answer: ""
    }
  ];

  return (
    <div className="w-full px-10 py-10 pl-16"> {/* 🔥 Right Shift Like Previous Sections */}

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">FAQ</h2>

      <div className="flex flex-col gap-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => setOpenIndex(index)}
              className={`rounded-2xl border shadow-sm p-6 cursor-pointer relative transition-all
                ${isOpen ? "bg-white" : "bg-[#fafafa]"}
              `}
            >
              {/* Right Side Dot */}
              <span
                className={`absolute top-6 right-6 w-4 h-4 rounded-full 
                  ${isOpen ? "bg-indigo-500" : "bg-indigo-200"}
                `}
              ></span>

              {/* Question */}
              <p className="text-sm font-semibold text-gray-900">
                {item.question}
              </p>

              {/* Answer */}
              {isOpen && (
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
