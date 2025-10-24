import React from 'react';

import Contact from './Contact';

const TopBanner = () => (
  <section className="max-w-7xl mx-auto px-4 py-12">
    <div className="rounded-2xl bg-gradient-to-r from-[#FFEEE0] via-white to-[#E8F7FF] p-8 md:p-12 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            We're Here For You — 24/7 Support
          </h1>
          <p className="text-gray-600 mb-6">
            **Fast ambulance response**, expert medical care and friendly
            support whenever you need it. Reach out and we'll take care of the
            rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-[#FF9B10] text-white rounded-lg font-semibold shadow hover:brightness-95 text-center"
            >
              **Contact Us**
            </a>
            <a
              href="#services"
              className="inline-block px-6 py-3 border border-gray-200 rounded-lg text-gray-800 font-medium text-center"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1580281657521-3c6a3b7a6c3d?auto=format&fit=crop&w=900&q=80"
            alt="medical team"
            className="w-full max-w-md h-56 md:h-72 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
);

const QuickInfo = () => (
  <section className="max-w-7xl mx-auto px-4 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="p-6 bg-white rounded-2xl shadow-md flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-[#FFEFD6] flex items-center justify-center text-[#FF9B10]">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {' '}
            {/* Added xmlns for valid SVG */}
            <path
              d="M3 5v14a2 2 0 002 2h14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 3h4v4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 7h10v10H7z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">Emergency Hotline</h4>
          <p className="text-sm text-gray-500">
            Call us anytime:{' '}
            <a href="tel:+880123456789" className="font-medium text-gray-700">
              **+880 1234 567 89**
            </a>
          </p>
        </div>
      </div>

      <div className="p-6 bg-white rounded-2xl shadow-md flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-[#E8F7FF] flex items-center justify-center text-blue-700">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {' '}
            {/* Added xmlns for valid SVG */}
            <path
              d="M3 8l9 6 9-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">Email Support</h4>
          <p className="text-sm text-gray-500">
            General & billing:{' '}
            <a
              href="mailto:info@medicalservice.example"
              className="font-medium text-gray-700"
            >
              **info@medicalservice.example**
            </a>
          </p>
        </div>
      </div>

      <div className="p-6 bg-white rounded-2xl shadow-md flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-[#F0FFF6] flex items-center justify-center text-green-600">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {' '}
            {/* Added xmlns for valid SVG */}
            <path
              d="M12 2C8 2 5 5 5 9c0 6 7 13 7 13s7-7 7-13c0-4-3-7-7-7z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="9"
              r="2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">Visit Us</h4>
          <p className="text-sm text-gray-500">
            **123 Health Ave, Dhaka — Open 24/7**
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ContactUs = () => {
  return (
    <div className="space-y-8">
      <TopBanner />
      <QuickInfo />
      <section id="contact">
        {/* The Contact component will render the actual contact form/details here */}
        <Contact />
      </section>
    </div>
  );
};

export default ContactUs;
