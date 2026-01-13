import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Author = () => {
  const authors = [
    {
      name: 'Dr. Mahabubur Rahman',
      role: 'Chief Medical Officer',
      bio: 'Dr. Mahabubur Rahman leads our medical team with over 20 years of experience in emergency and general healthcare services.',
      image: 'https://i.ibb.co/F4hxfX3y/pexels-linkedin-2182970.jpg',
    },
    {
      name: 'Dr. James Lee',
      role: 'Senior Surgeon',
      bio: 'Specialized in trauma and critical surgeries, Dr. Lee brings global expertise and precision-driven care.',
      image: 'https://i.ibb.co.com/8DJrh88D/image.png',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Clinical Psychologist',
      bio: 'Sarah provides compassionate counseling for anxiety, emotional trauma, and mental well-being.',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=870&q=80',
    },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 rounded-full"
          >
            Our Professionals
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0B1D51] leading-tight"
          >
            Meet Our{' '}
            <span className="text-blue-500 italic">Medical Experts</span>
          </motion.h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Our certified healthcare specialists are dedicated to delivering
            trusted and precision-driven medical services to every patient.
          </p>
        </div>

        {/* Professional Cards Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {authors.map((author, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-8 text-center transition-all duration-500 hover:shadow-[0_20px_50px_rgba(11,29,81,0.1)] hover:border-blue-100"
            >
              {/* Profile Image with Ring Effect */}
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 group-hover:rotate-180 transition-transform duration-1000"></div>
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-full h-full rounded-full object-cover border-8 border-white shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-2 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-md"></span>
              </div>

              {/* Specialist Info */}
              <h3 className="text-2xl font-bold text-[#0B1D51] transition-colors group-hover:text-blue-600">
                {author.name}
              </h3>
              <p className="text-blue-500 font-bold text-sm uppercase tracking-wider mt-1">
                {author.role}
              </p>

              <p className="mt-5 text-slate-500 text-base leading-relaxed line-clamp-3 px-2">
                {author.bio}
              </p>

              {/* Social Links on Hover or Static */}
              <div className="mt-6 flex justify-center gap-3">
                {[<FaLinkedinIn />, <FaTwitter />, <FaEnvelope />].map(
                  (icon, i) => (
                    <button
                      key={i}
                      className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-[#0B1D51] hover:text-white transition-all duration-300"
                    >
                      {icon}
                    </button>
                  )
                )}
              </div>

              {/* Verification Tag */}
              <div className="mt-8 pt-6 border-t border-slate-50">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 px-4 py-2 rounded-full uppercase tracking-tighter">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Verified Specialist
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Author;
