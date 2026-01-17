// DoctorBooking.jsx
import React from 'react';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaClock,
  FaUserMd,
  FaPhoneAlt,
  FaCheckCircle,
} from 'react-icons/fa';

const DoctorBooking = () => {
  const { doctorId } = useParams();

  const dummyDoctor = {
    d1: {
      name: 'Dr. Mahabubur Rahman',
      specialty: 'Emergency Medicine',
      image: 'https://i.ibb.co/F4hxfX3y/pexels-linkedin-2182970.jpg',
    },
    d2: {
      name: 'Dr. James Lee',
      specialty: 'Trauma Surgery',
      image: 'https://i.ibb.co.com/8DJrh88D/image.png',
    },
    d3: {
      name: 'Sarah Mitchell',
      specialty: 'Mental Health & Counseling',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    },
    d4: {
      name: 'Dr. Ayesha Karim',
      specialty: 'Pediatrics',
      image:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80',
    },
    d5: {
      name: 'Dr. Tariq Hasan',
      specialty: 'Cardiology',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    },
  }[doctorId] || {
    name: 'Unknown Doctor',
    specialty: 'N/A',
    image: 'https://via.placeholder.com/150',
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Spacer for Fixed Navbar */}
      <div className="h-24 bg-[#0B1D51]"></div>

      {/* Top Banner Area */}
      <section className="bg-[#0B1D51] pt-10 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
            Appointment Scheduling
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Book Your <span className="text-blue-400 italic">Consultation</span>
          </h1>
        </div>
      </section>

      {/* Booking Form Card */}
      <div className="max-w-4xl mx-auto px-6 -mt-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 overflow-hidden border border-slate-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left Column: Doctor Preview */}
            <div className="md:col-span-2 bg-slate-50 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-slate-100">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-[2rem] border-4 border-white shadow-xl overflow-hidden">
                  <img
                    src={dummyDoctor.image}
                    alt={dummyDoctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-slate-50 rounded-full flex items-center justify-center text-white text-[10px]">
                  <FaCheckCircle />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0B1D51]">
                {dummyDoctor.name}
              </h3>
              <p className="text-blue-500 font-bold text-xs uppercase tracking-widest mt-1">
                {dummyDoctor.specialty}
              </p>

              <div className="mt-8 space-y-3 w-full">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm text-xs font-medium text-slate-500">
                  <FaUserMd className="text-blue-500" />
                  <span>Verified Specialist</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm text-xs font-medium text-slate-500">
                  <FaPhoneAlt className="text-blue-500" />
                  <span>+880 1234 567 89</span>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="md:col-span-3 p-8 md:p-12">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B1D51] flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-500" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B1D51] flex items-center gap-2">
                    <FaClock className="text-blue-500" /> Preferred Time Slot
                  </label>
                  <div className="relative">
                    <select
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 appearance-none"
                    >
                      <option value="">Select a time</option>
                      <option>09:00 AM - 10:00 AM</option>
                      <option>10:00 AM - 11:00 AM</option>
                      <option>12:00 PM - 01:00 PM</option>
                      <option>02:00 PM - 03:00 PM</option>
                      <option>07:00 PM - 08:00 PM</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <FaClock size={14} />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-blue-500 hover:bg-[#0B1D51] text-white font-black rounded-2xl shadow-lg shadow-blue-500/20 transition-all transform hover:scale-[1.02] active:scale-95 uppercase tracking-widest text-sm"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>

              <p className="mt-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                A confirmation email will be sent after approval
              </p>
            </div>
          </div>
        </motion.div>

        {/* Support Footer */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 font-medium">
            Need immediate assistance?
          </p>
          <a
            href="tel:+880123456789"
            className="text-[#0B1D51] font-black text-xl hover:text-blue-500 transition-colors"
          >
            +880 1234 567 89
          </a>
        </div>
      </div>
    </div>
  );
};

export default DoctorBooking;
