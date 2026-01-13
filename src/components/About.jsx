import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUserMd, FaHospital, FaClock } from 'react-icons/fa';

const About = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Glow Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[120px] -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE AREA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image with Decorative Frame */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white">
              <img
                src="https://i.ibb.co.com/gZgCgPhr/image.png"
                alt="Medical Team"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating Specialist Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-10 -right-6 md:right-10 bg-white p-6 rounded-3xl shadow-2xl border border-blue-50 z-20 max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="https://i.ibb.co/F4hxfX3y/pexels-linkedin-2182970.jpg"
                  alt="Doctor"
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-100"
                />
                <div>
                  <h4 className="text-lg font-bold text-[#0B1D51]">
                    Dr. Mahabub
                  </h4>
                  <p className="text-xs text-blue-500 font-bold uppercase tracking-wider">
                    Chief Medical Officer
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                "We are dedicated to providing accessible healthcare through
                modern technology."
              </p>
            </motion.div>

            {/* Decorative Dot Pattern */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100/50 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          {/* RIGHT CONTENT AREA */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 rounded-full">
                Learn About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1D51] leading-tight">
                Compassionate Care, <br />
                <span className="text-blue-500 italic text-3xl md:text-4xl">
                  Fast Response Always.
                </span>
              </h2>
              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                We bridge the gap between world-class medical expertise and your
                health needs. Our multidisciplinary team ensures patient-first
                care using advanced diagnostic tools and compassionate expertise
                24/7.
              </p>
            </motion.div>

            {/* FEATURE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: '24/7 Emergency',
                  icon: <FaClock />,
                  desc: 'Rapid ambulance dispatch',
                  bg: 'bg-blue-50 text-blue-600',
                },
                {
                  title: 'Top Specialists',
                  icon: <FaUserMd />,
                  desc: 'Certified expert doctors',
                  bg: 'bg-indigo-50 text-indigo-600',
                },
                {
                  title: 'Modern Facilities',
                  icon: <FaHospital />,
                  desc: 'Advanced medical tools',
                  bg: 'bg-blue-50 text-blue-600',
                },
                {
                  title: 'Trusted Reviews',
                  icon: <FaCheckCircle />,
                  desc: 'Verified patient feedback',
                  bg: 'bg-indigo-50 text-indigo-600',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-slate-50 hover:bg-white hover:shadow-xl transition-all"
                >
                  <div
                    className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-xl ${item.bg}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1D51]">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 rounded-xl bg-[#0B1D51] hover:bg-blue-600 text-white font-bold shadow-xl shadow-blue-900/10 transition-all transform hover:scale-105">
                Explore Services
              </button>
              <button className="px-8 py-4 rounded-xl border-2 border-slate-100 text-[#0B1D51] font-bold hover:bg-slate-50 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
