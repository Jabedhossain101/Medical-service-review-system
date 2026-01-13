import React from 'react';
import About from './About';
import { motion } from 'framer-motion';
import {
  FaAmbulance,
  FaStethoscope,
  FaMicroscope,
  FaBrain,
  FaPhoneAlt,
  FaCalendarCheck,
} from 'react-icons/fa';

/* ===================== MISSION SECTION ===================== */
const MissionSection = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 p-8 md:p-14 overflow-hidden border border-blue-100/50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/50 rounded-full">
            Our Purpose
          </span>

          <h3 className="text-3xl md:text-5xl font-extrabold text-[#0B1D51] mt-3 mb-5 leading-tight">
            Our{' '}
            <span className="text-blue-500 italic font-medium">Mission</span>
          </h3>

          <p className="text-slate-600 leading-relaxed text-lg">
            We deliver fast, compassionate, and professional medical & emergency
            services with a patient-first mindset. Through modern technology and
            community outreach, we ensure evidence-based care for everyone.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Rapid Response',
                desc: '24/7 emergency dispatch',
                num: '01',
              },
              {
                title: 'Trusted Experts',
                desc: 'Experienced professionals',
                num: '02',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#0B1D51] text-white flex items-center justify-center font-bold shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform">
                  {item.num}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Content */}
        <div className="relative">
          <img
            src="https://i.ibb.co.com/tPDs0ddS/image.png"
            alt="Mission"
            className="w-full h-72 md:h-[420px] object-cover rounded-[2rem] shadow-2xl border-4 border-white"
          />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </motion.div>
  </section>
);

/* ===================== VISION SECTION ===================== */
const VisionSection = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="rounded-[2.5rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-3 border border-slate-100">
      {/* Left Deep Blue Panel */}
      <div className="bg-[#0B1D51] text-white p-10 lg:p-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
        <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">
          Looking Ahead
        </span>

        <h4 className="text-3xl font-extrabold mt-3 mb-6 leading-tight">
          Our Vision
        </h4>

        <p className="text-blue-100/70 leading-relaxed mb-10">
          To build a healthier community where timely, quality care is
          accessible to everyone — powered by medical innovation.
        </p>

        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { value: '24/7', label: 'Service' },
            { value: '150+', label: 'Staff' },
            { value: '10k+', label: 'Patients' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-xl font-bold text-blue-400">{s.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-blue-100/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="lg:col-span-2 bg-white p-8 md:p-14">
        <h5 className="text-2xl font-bold text-[#0B1D51] mb-8">
          How We Achieve Excellence
        </h5>

        <ul className="space-y-6">
          {[
            {
              icon: '01',
              title: 'Community Programs',
              desc: 'Free screening camps and health education initiatives.',
            },
            {
              icon: '02',
              title: 'Continuous Training',
              desc: 'Regular upskilling and emergency response drills for staff.',
            },
            {
              icon: '03',
              title: 'Technology',
              desc: 'Investment in modern diagnostics and digital telemedicine.',
            },
          ].map((item, idx) => (
            <li key={idx} className="flex gap-5 group">
              <span className="text-blue-200 font-black text-4xl group-hover:text-blue-500 transition-colors">
                {item.icon}
              </span>
              <div>
                <h6 className="font-bold text-slate-800 text-lg">
                  {item.title}
                </h6>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

/* ===================== FACILITIES SECTION ===================== */
const FacilitiesSection = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="text-center mb-16">
      <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">
        What We Offer
      </span>
      <h3 className="text-4xl md:text-5xl font-extrabold text-[#0B1D51] mt-3">
        Modern <span className="text-blue-500 italic">Facilities</span>
      </h3>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: 'Emergency Care',
          icon: <FaAmbulance />,
          desc: '24/7 ambulance & trauma unit',
        },
        {
          title: 'Surgery Care',
          icon: <FaStethoscope />,
          desc: 'Advanced OT suites',
        },
        {
          title: 'Lab Diagnostics',
          icon: <FaMicroscope />,
          desc: 'Modern imaging & pathology',
        },
        {
          title: 'Mental Health',
          icon: <FaBrain />,
          desc: 'Personalized therapy sessions',
        },
      ].map((f, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10 }}
          className="bg-white rounded-[2rem] p-8 shadow-xl shadow-blue-900/5 border border-slate-50 hover:border-blue-100 transition-all text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 mx-auto text-2xl shadow-inner">
            {f.icon}
          </div>
          <h6 className="text-xl font-bold text-slate-800">{f.title}</h6>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            {f.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

/* ===================== MAIN ABOUT US PAGE ===================== */
const AboutUs = () => {
  return (
    <div className="bg-white ">
      
      {/* Top Section: About (Apnar custom About component) */}
      <About />

      <MissionSection />
      <VisionSection />
      <FacilitiesSection />

      {/* CTA SECTION - Updated with Deep Blue Theme */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-[#0B1D51] rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-blue-900/20 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>

          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-3xl md:text-4xl font-extrabold text-white">
              Ready to <span className="text-blue-400">Receive Care?</span>
            </h4>
            <p className="text-blue-100/70 mt-4 max-w-xl text-lg">
              Our medical team is available 24/7 to support your health journey.
              Contact us now for any emergencies or general inquiries.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <button className="px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2">
              <FaPhoneAlt size={16} /> Contact Us
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              <FaCalendarCheck size={18} /> View Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
