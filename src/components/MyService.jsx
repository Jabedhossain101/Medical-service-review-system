import React from 'react';
import { useLoaderData } from 'react-router';
import MyCard from './MyCard';
import { motion } from 'framer-motion';
import { FaStethoscope, FaArrowRight } from 'react-icons/fa';

const MyService = () => {
  const services = useLoaderData();

  return (
    <main className="bg-white min-h-screen">
      {/* Spacer for Navbar */}
      <div className="h-20 lg:h-24 bg-[#0B1D51]"></div>

      {/* ================= HEADER SECTION ================= */}
      <section className="bg-[#0B1D51] pb-24 pt-10 relative overflow-hidden">
        {/* Decorative Background Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600 rounded-full blur-[100px] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20">
                Patient Dashboard
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                My Added <span className="text-blue-400 italic">Services</span>
              </h1>
              <p className="mt-4 max-w-xl text-blue-100/70 text-lg font-medium leading-relaxed">
                Manage and review the medical services you have contributed to
                our platform. Your feedback helps thousands of patients find
                better care.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center text-xl shadow-lg">
                <FaStethoscope />
              </div>
              <div>
                <p className="text-white font-bold text-2xl">
                  {services?.length || 0}
                </p>
                <p className="text-blue-300 text-[10px] font-bold uppercase tracking-widest">
                  Active Contributions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 pb-24">
        {services && services.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <MyCard service={service} />
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty State UI */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-20 rounded-[3rem] shadow-2xl shadow-blue-900/5 text-center border border-slate-50"
          >
            <div className="w-24 h-24 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
              <FaStethoscope />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1D51]">
              No Services Found
            </h3>
            <p className="text-slate-500 mt-2 mb-8">
              You haven't added any services yet. Start by contributing to our
              medical community.
            </p>
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20">
              Add New Service
            </button>
          </motion.div>
        )}
      </section>

      {/* Bottom Spacing */}
      <div className="h-10"></div>
    </main>
  );
};

export default MyService;
