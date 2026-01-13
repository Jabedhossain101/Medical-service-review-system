// Doctors.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaStar,
  FaUserMd,
  FaPlus,
} from 'react-icons/fa';

// --- Core Values Card ---
const ValueCard = ({ title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between h-full transition-all duration-300 hover:shadow-xl hover:border-blue-200 group"
  >
    <div>
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0B1D51] group-hover:text-white transition-colors duration-300">
        <FaPlus className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-bold text-[#0B1D51] mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

// --- Core Values Section ---
const CoreValues = () => {
  const values = [
    {
      title: 'Compassionate Care',
      description:
        'Treating every patient with kindness, respect, and understanding.',
    },
    {
      title: 'Integrity & Ethics',
      description: 'Upholding the highest medical and professional standards.',
    },
    {
      title: 'Excellence in Service',
      description:
        'Delivering quality care using modern techniques and technology.',
    },
    {
      title: 'Patient-Centered',
      description:
        'Focusing on individual needs to create personalized solutions.',
    },
    {
      title: 'Continuous Innovation',
      description:
        'Adopting the latest medical advancements for better results.',
    },
    {
      title: 'Collaboration',
      description: 'Working together as a team to provide the best outcomes.',
    },
  ];

  return (
    <div className="py-20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-50/30 blur-3xl -z-10 rounded-full"></div>
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 rounded-full">
          Our Philisophy
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1D51] leading-tight">
          The Principles Guiding <br />
          <span className="text-blue-500 italic font-medium">
            Our Medical Services
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <ValueCard key={index} {...value} index={index} />
        ))}
      </div>
    </div>
  );
};

// --- Main Doctors Section ---
const Doctors = () => {
  const [openId, setOpenId] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const doctors = [
    {
      id: 'd1',
      name: 'Dr. Mahabubur Rahman',
      title: 'Chief Medical Officer',
      specialty: 'Emergency & General Surgery',
      experience: '22 years',
      rating: 4.9,
      patients: '12k+',
      image: 'https://i.ibb.co/F4hxfX3y/pexels-linkedin-2182970.jpg',
      bio: 'Dr. Rahman leads our emergency teams. He has extensive experience in trauma management and hospital emergency protocols.',
      contact: { phone: '+880123456789', email: 'mahabub@medical.example' },
    },
    {
      id: 'd2',
      name: 'Dr. James Lee',
      title: 'Senior Surgeon',
      specialty: 'Trauma & Minimally Invasive',
      experience: '18 years',
      rating: 4.8,
      patients: '8k+',
      image: 'https://i.ibb.co/8DJrh88D/image.png',
      bio: 'Dr. Lee specializes in complex trauma operations and is committed to reducing recovery time through minimally invasive surgery.',
      contact: { phone: '+880198765432', email: 'james.lee@medical.example' },
    },
    {
      id: 'd3',
      name: 'Sarah Mitchell',
      title: 'Clinical Psychologist',
      specialty: 'Mental Health & Counseling',
      experience: '12 years',
      rating: 4.7,
      patients: '5k+',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
      bio: 'Sarah provides therapy and counseling for stress, anxiety, trauma and family issues.',
      contact: { phone: '+880177001122', email: 'sarah.m@medical.example' },
    },
    {
      id: 'd4',
      name: 'Dr. Ayesha Karim',
      title: 'Pediatrician',
      specialty: 'Child Health & Neonatology',
      experience: '15 years',
      rating: 4.9,
      patients: '9k+',
      image:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80',
      bio: 'Dr. Karim focuses on newborn care, vaccination programs and developmental follow-ups.',
      contact: { phone: '+880199001234', email: 'ayesha.k@medical.example' },
    },
    {
      id: 'd5',
      name: 'Dr. Tariq Hasan',
      title: 'Cardiologist',
      specialty: 'Interventional Cardiology',
      experience: '20 years',
      rating: 4.8,
      patients: '7k+',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
      bio: 'Dr. Hasan treats acute and chronic cardiac conditions and performs catheter-based interventions.',
      contact: { phone: '+880166002233', email: 'tariq.h@medical.example' },
    },
  ];

  const visibleDoctors = showAll ? doctors : doctors.slice(0, 4);

  const handleBooking = doctorId => {
    navigate(`/book/${doctorId}`);
  };

  return (
    <section className="bg-white">
      {/* Top Background Decoration */}
      <div className="h-20 bg-[#0B1D51]"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* CORE VALUES SECTION */}
        <CoreValues />

        {/* DOCTORS SECTION */}
        <div className="text-center mb-16 pt-20">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">
            Medical Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1D51] mt-3">
            Meet Our <span className="text-blue-500 italic">Expert Team</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-lg">
            Experienced professionals ready to deliver world-class specialist
            treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleDoctors.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] shadow-xl shadow-blue-900/5 overflow-hidden border border-slate-50 transition-all duration-500 hover:shadow-2xl hover:border-blue-100"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D51]/90 via-transparent to-transparent"></div>
                <div className="absolute left-6 bottom-6 text-white">
                  <div className="text-xl font-bold leading-tight">
                    {doc.name}
                  </div>
                  <div className="text-xs text-blue-300 font-bold uppercase tracking-wider mt-1">
                    {doc.title}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm font-bold text-[#0B1D51]">
                      {doc.specialty}
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">
                      Experience: {doc.experience}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
                    <span className="text-xs font-bold text-blue-600">
                      {doc.rating}
                    </span>
                    <FaStar className="text-yellow-400 text-[10px]" />
                  </div>
                </div>

                <p className="text-sm text-slate-500 mb-6 line-clamp-2 italic">
                  "{doc.bio}"
                </p>

                <div className="flex items-center justify-between gap-4 border-t border-slate-50 pt-5">
                  <button
                    onClick={() => setOpenId(openId === doc.id ? null : doc.id)}
                    className="text-xs font-bold text-[#0B1D51] uppercase tracking-wider hover:text-blue-500 transition-colors"
                  >
                    {openId === doc.id ? 'Close' : 'View Profile'}
                  </button>

                  <button
                    onClick={() => handleBooking(doc.id)}
                    className="px-6 py-2 bg-blue-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all"
                  >
                    Book Now
                  </button>
                </div>

                <AnimatePresence>
                  {openId === doc.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-5 border-t border-slate-50 space-y-4">
                        <div className="grid grid-cols-1 gap-3">
                          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl group/contact transition-colors hover:bg-blue-50">
                            <FaPhoneAlt className="text-blue-500 text-xs" />
                            <a
                              href={`tel:${doc.contact.phone}`}
                              className="text-xs font-bold text-slate-700 group-hover/contact:text-blue-600"
                            >
                              {doc.contact.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl group/contact transition-colors hover:bg-blue-50">
                            <FaEnvelope className="text-blue-500 text-xs" />
                            <a
                              href={`mailto:${doc.contact.email}`}
                              className="text-xs font-bold text-slate-700 group-hover/contact:text-blue-600 truncate"
                            >
                              {doc.contact.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`px-10 py-4 rounded-2xl font-bold transition-all shadow-xl ${
              showAll
                ? 'border-2 border-slate-100 text-[#0B1D51] hover:bg-slate-50'
                : 'bg-[#0B1D51] text-white shadow-blue-900/20 hover:bg-blue-900'
            }`}
          >
            {showAll ? 'Show Less' : `Show All ${doctors.length} Specialists`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
