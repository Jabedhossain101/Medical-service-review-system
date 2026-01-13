import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllService from './AllService';

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

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-orange-400 border-dashed rounded-full animate-spin"></div>
          <p className="text-gray-500 text-sm tracking-wide">
            Loading services...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#F9FAFB]">
      {/* Spacer for navbar */}
      <div className="h-20"></div>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-white via-orange-50 to-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full bg-orange-100 text-orange-600">
            Our Services
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Trusted Medical Services for a Healthier Life
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            We provide comprehensive medical solutions focused on quality,
            compassion, and professionalism — from emergency response to
            advanced treatment care.
          </p>
        </div>
      </section>

      {/* ================= FEATURED SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative h-96 rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 p-6 text-white">
                <span className="inline-block mb-2 text-xs font-semibold tracking-widest uppercase text-orange-400">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ALL SERVICES TITLE ================= */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
            Explore All Services
          </h2>
          <p className="mt-3 text-gray-500">
            Browse our complete list of professional medical services
          </p>
        </div>
      </section>

      {/* ================= ALL SERVICES GRID ================= */}
      <AllService services={data} />

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </main>
  );
};

export default All;
