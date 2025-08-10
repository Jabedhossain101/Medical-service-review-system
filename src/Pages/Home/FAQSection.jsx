import React, { useState } from 'react';

const faqData = {
  General: [
    {
      question: 'What services does your medical center offer?',
      answer:
        'We offer general medicine, emergency care, diagnostics, surgery, mental health counseling, and more.',
    },
    {
      question: 'How can I book an appointment?',
      answer:
        'Appointments can be booked online, through our mobile app, or by calling our hotline.',
    },
  ],
  Services: [
    {
      question: 'Do you offer emergency ambulance services?',
      answer:
        'Yes, we have 24/7 emergency ambulance services with fully equipped vehicles and trained personnel.',
    },
    {
      question: 'Can I get lab test reports online?',
      answer:
        'Yes, lab test reports are securely available via our patient portal.',
    },
  ],
  Billing: [
    {
      question: 'Do you accept health insurance?',
      answer:
        'Yes, we accept a wide range of private and public health insurances.',
    },
    {
      question: 'How do I get a bill copy?',
      answer:
        'Bill copies are available through your account dashboard or at the billing counter.',
    },
  ],
};

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('General');

  return (
    <section className="bg-white rounded-2xl dark:bg-gray-900 max-w-7xl mx-auto px-6 py-12">
      <div className="container  px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
          Have any Questions?
        </h1>

        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div className="lg:mx-12">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Table of Content
            </h2>
            <div className="mt-4 space-y-4 lg:mt-8">
              {Object.keys(faqData).map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`block text-left hover:underline ${
                    activeCategory === category
                      ? 'text-blue-500 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            {faqData[activeCategory].map((faq, index) => (
              <div key={index} className="mb-10">
                <h3 className="text-xl text-gray-700 dark:text-white font-medium">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  {faq.answer}
                </p>
                <hr className="my-4 border-gray-200 dark:border-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
