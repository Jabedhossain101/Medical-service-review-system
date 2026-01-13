import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllService from './AllService';
import { motion } from 'framer-motion';

const All = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const portfolioItems = [
    {
      title: 'Ambulance & Rescue Unit',
      category: '24/7 Emergency',
      description:
        'Fast, reliable ambulance service with trained paramedics and modern life-saving equipment.',
      imageUrl: 'https://i.ibb.co/hJvpFWZ2/image.png',
    },
    {
      title: 'Medical Assistance',
      category: 'Medical Support',
      description:
        'Professional assistance for appointments, diagnostics, and emergency coordination.',
      imageUrl: 'https://i.ibb.co/m58MS5Jz/image.png',
    },
    {
      title: 'Operation & Surgery',
      category: 'Advanced Care',
      description:
        'High-standard surgical care with experienced surgeons and modern technology.',
      imageUrl: 'https://i.ibb.co/sd4j6vCK/image.png',
    },
  ];

  /* ================= MODERN LOADING STATE ================= */
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-[#0B1D51] border-t-transparent rounded-full animate-spin"></div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#0B1D51] font-bold tracking-widest uppercase text-xs"
          >
            Initializing Services...
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white">
      {/* Spacer for navbar */}
      <div className="h-20 lg:h-24"></div>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-[#0B1D51] rounded-[2.5rem] shadow-2xl overflow-hidden p-10 md:p-20 text-center"
        >
          {/* Decorative Glows */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>

          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20">
              Healthcare Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Trusted Medical Services <br />
              <span className="text-blue-400 italic font-medium">
                For a Healthier Life
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-blue-100/70 text-lg leading-relaxed font-medium">
              Comprehensive medical solutions focused on quality, compassion,
              and professionalism — from emergency response to advanced care.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= FEATURED SERVICES (Portfolio) ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-xl"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Advanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D51] via-[#0B1D51]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute bottom-0 p-8 text-white w-full">
                <span className="inline-block mb-3 text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold leading-tight group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-blue-100/80 leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.description}
                </p>

                {/* Visual Line Decorator */}
                <div className="mt-6 w-12 h-1 bg-blue-400 rounded-full transition-all duration-500 group-hover:w-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ALL SERVICES TITLE ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-10">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">
              Full Catalog
            </span>
            <h2 className="text-4xl font-black text-[#0B1D51] mt-2">
              Explore All <span className="text-blue-500">Services</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 font-medium">
            Browse our complete list of professional medical services and find
            the perfect specialist for your needs.
          </p>
        </div>
      </section>

      {/* ================= ALL SERVICES GRID ================= */}
      <div className="mt-10">
        <AllService services={data} />
      </div>

      {/* Bottom spacing */}
      <div className="h-24"></div>
    </main>
  );
};

export default All;
