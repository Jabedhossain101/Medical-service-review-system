// ...existing code...
import React from 'react';

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-white via-blue-50 to-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
          {/* Left: Text */}
          <div className="space-y-6">
            <span className="inline-block bg-[#FFFBF0] text-[#FF9B10] px-3 py-1 rounded-full text-sm font-semibold">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              Compassionate Care, Fast Response — Your Health, Our Priority
            </h2>

            <p className="text-gray-600 md:text-lg">
              We deliver reliable medical and emergency services around the
              clock. From rapid ambulance response to specialist treatment
              plans, our multidisciplinary team provides patient-first care with
              modern equipment and compassionate staff.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="flex-none w-10 h-10 rounded-lg bg-[#EAF7FF] text-blue-700 inline-flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 2v6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.2 9L4 20h16l-2.2-11"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    24/7 Emergency Support
                  </h4>
                  <p className="text-sm text-gray-500">
                    Rapid ambulance dispatch and emergency triage.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-none w-10 h-10 rounded-lg bg-[#FFF6EA] text-[#FF9B10] inline-flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 3v18"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12h18"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Experienced Specialists
                  </h4>
                  <p className="text-sm text-gray-500">
                    Certified doctors across multiple disciplines.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-none w-10 h-10 rounded-lg bg-[#F0FFF6] text-green-600 inline-flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Patient-centered Care
                  </h4>
                  <p className="text-sm text-gray-500">
                    Personalized treatment plans and follow-ups.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-none w-10 h-10 rounded-lg bg-[#F8F6FF] text-purple-700 inline-flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 8v8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12h8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Modern Facilities
                  </h4>
                  <p className="text-sm text-gray-500">
                    State-of-the-art equipment for accurate diagnosis.
                  </p>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="#services"
                className="inline-block px-5 py-3 rounded-lg bg-[#FF9B10] text-white font-semibold text-center shadow hover:brightness-95"
                aria-label="View services"
              >
                View Services
              </a>
              <a
                href="#contact"
                className="inline-block px-5 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium text-center hover:shadow-sm"
                aria-label="Contact us"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-gray-800">
                  24/7
                </div>
                <div className="text-sm text-gray-500">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-gray-800">
                  120+
                </div>
                <div className="text-sm text-gray-500">Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-gray-800">
                  10k+
                </div>
                <div className="text-sm text-gray-500">Patients helped</div>
              </div>
            </div>
          </div>

          {/* Right: Image / visual */}
          <div className="order-first md:order-last flex justify-center md:justify-end">
            <div className="relative w-full max-w-xl">
              <img
                src="https://i.ibb.co.com/gZgCgPhr/image.png"
                alt="Medical team"
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white"
              />

              {/* Floating card */}
              <div className="absolute left-4 bottom-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg w-64">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.ibb.co/F4hxfX3y/pexels-linkedin-2182970.jpg"
                    alt="Dr avatar"
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-50"
                  />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">
                      Dr. Mahabub
                    </div>
                    <div className="text-xs text-gray-500">
                      Chief Medical Officer
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Delivering trusted care with 20+ years experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
// ...existing code...