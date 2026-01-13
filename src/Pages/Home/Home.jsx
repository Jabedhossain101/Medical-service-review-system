import React, { Suspense } from 'react';
import Hero from './Hero';
import AllService from '../../components/AllService';
import CountUp from 'react-countup';
import FAQSection from './FAQSection';
import Author from './Author';
import About from '../../components/About';
import Contact from '../../components/Contact';
import ReviewHighlightSection from './Banner';
import { motion } from 'framer-motion';

const Home = () => {
  const servicePromise = fetch(
    'https://rafsan-service.vercel.app/service'
  ).then(res => res.json());

  return (
    <div className="font-sans overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section */}
      <About />

      {/* 3. Author / Specialist Section */}
      <Author />

      {/* 4. Review Highlight / Trust Section */}
      <ReviewHighlightSection />

      {/* 5. Services Section with Suspense */}
      <div className="bg-slate-50 py-10">
        <Suspense
          fallback={
            <div className="flex justify-center py-20">
              <span className="loading loading-spinner loading-lg text-blue-600"></span>
            </div>
          }
        >
          <AllService servicePromise={servicePromise} />
        </Suspense>
      </div>

      {/* 6. Advanced Counter Section (Updated UI) */}
      <section className="bg-white py-20 relative overflow-hidden border-y border-slate-100">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/30 blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-24">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6 group-hover:bg-[#0B1D51] group-hover:text-white transition-all duration-300 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B1D51] mb-2">
                <CountUp end={400} duration={3} enableScrollSpy />+
              </h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                Registered Users
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6 group-hover:bg-[#0B1D51] group-hover:text-white transition-all duration-300 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B1D51] mb-2">
                <CountUp end={600} duration={3} enableScrollSpy />+
              </h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                Total Reviews
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6 group-hover:bg-[#0B1D51] group-hover:text-white transition-all duration-300 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.503 1.508a10.003 10.003 0 01-9.412-9.412l1.508-.503a2 2 0 001.415-1.961l-.478-2.387a2 2 0 00-.547-1.022L6.087.915a2.246 2.246 0 00-3.126 0L1.262 2.618a2.21 2.21 0 00-.5 2.285 11.404 11.404 0 007.032 7.032 2.21 2.21 0 002.285-.5l1.703-1.703a2.246 2.246 0 000-3.126l-1.698-1.698z"
                  />
                </svg>
              </div>
              <h2 className="text-5xl font-extrabold text-[#0B1D51] mb-2">
                <CountUp end={80} duration={3} enableScrollSpy />+
              </h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                Active Services
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <FAQSection />

      {/* 8. Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;
