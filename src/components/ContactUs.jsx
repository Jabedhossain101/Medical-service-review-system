import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from 'react-icons/fa';
import Contact from './Contact';

const TopBanner = () => (
  <section className="relative pt-32 pb-20 overflow-hidden ">
    {/* Background Decorative Glows */}
    <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
    <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20">
            Available 24/7 For You
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Help is Just a <br />
            <span className="text-blue-400 italic font-medium text-3xl md:text-5xl">
              Conversation Away
            </span>
          </h1>
          <p className="text-blue-100/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium">
            Whether it's an emergency ambulance or a general inquiry, our
            dedicated medical team is ready to support you at any hour.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact-form"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-500/20 transition-all flex items-center gap-2 group"
            >
              Send Message{' '}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+880123456789"
              className="px-8 py-4 border-2 border-white/20 text-white rounded-2xl font-bold hover:bg-white/10 transition-all"
            >
              Emergency Call
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1580281657521-3c6a3b7a6c3d?auto=format&fit=crop&w=900&q=80"
              alt="medical team"
              className="w-full h-[350px] md:h-[450px] object-cover"
            />
          </div>
          {/* Floating Experience Card */}
          <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl hidden md:block">
            <p className="text-blue-400 font-bold text-2xl">99.9%</p>
            <p className="text-white text-xs font-bold uppercase tracking-wider">
              Response Rate
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const QuickInfo = () => (
  <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: 'Emergency Hotline',
          val: '+880 1234 567 89',
          sub: 'Call anytime, 24/7 support',
          icon: <FaPhoneAlt />,
          color: 'bg-blue-500',
        },
        {
          title: 'Email Support',
          val: 'info@mediservice.com',
          sub: 'General & billing queries',
          icon: <FaEnvelope />,
          color: 'bg-[#0B1D51]',
        },
        {
          title: 'Visit Our Clinic',
          val: '123 Health Ave, Dhaka',
          sub: 'Open 24 hours daily',
          icon: <FaMapMarkerAlt />,
          color: 'bg-indigo-500',
        },
      ].map((info, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-8 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-slate-50 flex items-center gap-6 group hover:border-blue-100 transition-all"
        >
          <div
            className={`w-14 h-14 ${info.color} text-white rounded-2xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform`}
          >
            {info.icon}
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
              {info.title}
            </h4>
            <p className="text-lg font-bold text-[#0B1D51] group-hover:text-blue-600 transition-colors">
              {info.val}
            </p>
            <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">
              {info.sub}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen">
      <TopBanner />
      <QuickInfo />

      {/* Main Content Area */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h2 className="text-3xl font-black text-[#0B1D51] mb-6">
                Frequently <br /> Requested Info
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                    <FaClock size={14} />
                  </div>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    Emergency ambulance response time is usually under 15
                    minutes within Dhaka city.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                    <FaClock size={14} />
                  </div>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    General appointment consultations are available 8 AM to 10
                    PM daily.
                  </p>
                </div>
              </div>
            </div>

            {/* Support Image Decorator */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 relative group">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
                alt="Consult"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0B1D51]/40 flex items-center justify-center">
                <p className="text-white font-bold tracking-widest text-xs uppercase">
                  Certified Support Team
                </p>
              </div>
            </div>
          </div>

          {/* Right Contact Form Component */}
          <div id="contact-form" className="lg:col-span-8 scroll-mt-28">
            <div className="text-center lg:text-left mb-10">
              <h3 className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">
                Direct Message
              </h3>
              <h4 className="text-4xl font-extrabold text-[#0B1D51]">
                Send Us Your Inquiry
              </h4>
            </div>
            {/* Apnar deya updated Contact form component ekhane boshe jabe */}
            <Contact />
          </div>
        </div>
      </section>

      {/* Spacing before footer */}
      <div className="h-20"></div>
    </div>
  );
};

export default ContactUs;
