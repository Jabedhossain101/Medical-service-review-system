import React, { useState } from 'react';

const faqs = [
  {
    question: 'What services do you provide?',
    answer:
      'We offer a wide range of medical and emergency services, including ambulance support, surgery care, and mental health counseling. Our team is available 24/7 to assist you.',
  },
  {
    question: 'How can I book an appointment?',
    answer:
      'You can book an appointment through our website or by calling our hotline. Our support team will guide you through the process and help you find the right specialist.',
  },
  {
    question: 'Are your services available at night?',
    answer:
      'Yes, our emergency and medical services are available 24/7, including nights and holidays. We are always ready to serve you.',
  },
  {
    question: 'Do you accept health insurance?',
    answer:
      'We accept most major health insurance plans. Please contact our billing department for specific details regarding your coverage.',
  },
  {
    question: 'How do I get emergency help?',
    answer:
      'In case of emergency, call our hotline immediately. Our ambulance and medical team will be dispatched to your location as quickly as possible.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 drop-shadow-lg">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 md:text-lg">
          Find answers to the most common questions about our services and
          support.
        </p>
      </div>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className=" bg-white rounded-lg shadow-lg transition hover:shadow-2xl"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="text-lg md:text-xl font-semibold text-gray-800">
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 text-[#FF9B00] transform transition-transform duration-300 ${
                  openIndex === idx ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-6 text-gray-700 text-base md:text-lg animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.4s ease;
          }
        `}
      </style>
    </section>
  );
};

export default FAQSection;
