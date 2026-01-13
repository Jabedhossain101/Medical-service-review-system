import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 rounded-full"
          >
            Support Center
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0B1D51] leading-tight"
          >
            Common <span className="text-blue-500 italic">Questions</span>
          </motion.h2>
          <p className="mt-4 text-slate-600 text-lg">
            Everything you need to know about our healthcare services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-blue-200 bg-blue-50/30 shadow-lg shadow-blue-500/5'
                    : 'border-slate-100 bg-white hover:border-blue-100 hover:shadow-md'
                }`}
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-6 text-left focus:outline-none"
                  onClick={() => handleToggle(idx)}
                >
                  <div className="flex items-center gap-4">
                    <FaQuestionCircle
                      className={`text-xl ${
                        isOpen ? 'text-blue-500' : 'text-slate-300'
                      }`}
                    />
                    <span
                      className={`text-lg font-bold transition-colors ${
                        isOpen ? 'text-[#0B1D51]' : 'text-slate-700'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <FaChevronDown
                    className={`w-4 h-4 text-blue-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-14 pb-6 text-slate-600 leading-relaxed text-base md:text-lg border-t border-blue-100/50 pt-4 mx-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Support CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center p-8 rounded-3xl bg-[#0B1D51] text-white relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <h3 className="text-xl font-bold mb-2 relative z-10">
            Still have questions?
          </h3>
          <p className="text-blue-100/70 mb-6 relative z-10">
            We're here to help you 24/7 with any medical inquiries.
          </p>
          <button className="relative z-10 px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-lg">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
