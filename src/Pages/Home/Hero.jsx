import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1D51] via-[#102A71] to-[#0B1D51] text-white">
      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-5 px-5 py-2 text-sm font-semibold rounded-full bg-white/10 backdrop-blur-md"
          >
            Trusted Medical Service Platform
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Smart Healthcare <br />
            <span className="text-blue-400 relative">
              Starts Here
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-blue-400 rounded-full"></span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-blue-100 max-w-xl"
          >
            Discover verified doctors, trusted clinics, and real patient reviews
            — all in one powerful healthcare service system.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold shadow-xl transition">
              Explore Services
            </button>
            <button className="px-8 py-4 border border-white/30 rounded-xl font-semibold hover:bg-white/10 transition">
              View Reviews
            </button>
          </motion.div>

          {/* Stats */}
          <div className="mt-12 flex gap-10">
            <div>
              <h3 className="text-3xl font-bold">10k+</h3>
              <p className="text-sm text-blue-200">Verified Reviews</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-sm text-blue-200">Expert Doctors</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">98%</h3>
              <p className="text-sm text-blue-200">Success Rate</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
          >
            <img
              src="https://i.ibb.co/LdBdY3MZ/com.jpg"
              alt="Healthcare"
              className="w-[420px] object-cover"
            />
          </motion.div>

          {/* Floating Card */}
          <div className="absolute top-12 -left-8 bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl shadow-lg">
            <p className="font-semibold">✔ Verified Professionals</p>
            <p className="text-sm text-blue-200">Government Approved</p>
          </div>

          <div className="absolute bottom-10 -right-8 bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl shadow-lg">
            <p className="font-semibold">⭐ 4.9 Rating</p>
            <p className="text-sm text-blue-200">Trusted by Patients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
