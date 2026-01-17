import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import {
  FaStethoscope,
  FaCloudUploadAlt,
  FaHospital,
  FaGlobe,
  FaMoneyBillWave,
  FaEnvelope,
  FaCalendarAlt,
  FaArrowRight, // Fixed: Added this missing import
} from 'react-icons/fa';

const AddService = () => {
  const handleAddService = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newService = Object.fromEntries(formData.entries());

    fetch('https://rafsan-service.vercel.app/service', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newService),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Service Added Successfully',
            icon: 'success',
            confirmButtonColor: '#3b82f6',
            background: '#fff',
            color: '#0B1D51',
          });
          form.reset();
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to add service. Please try again.',
          icon: 'error',
          confirmButtonColor: '#ef4444',
        });
      });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <Link
              className="inline-flex items-center gap-2 mb-4 text-sm font-bold text-slate-400 hover:text-blue-500 transition-colors"
              to="/dashboard"
            >
              <IoIosArrowRoundBack size={24} /> Back to Dashboard
            </Link>
            <h1 className="text-3xl md:text-4xl font-black text-[#0B1D51]">
              Register New{' '}
              <span className="text-blue-500 italic">Medical Service</span>
            </h1>
          </div>
          <div className="hidden md:flex w-14 h-14 bg-white rounded-2xl shadow-xl shadow-blue-900/5 items-center justify-center text-blue-500 border border-slate-50">
            <FaStethoscope size={24} />
          </div>
        </div>

        {/* Main Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-50 p-8 md:p-12"
        >
          <form onSubmit={handleAddService} className="space-y-8">
            {/* Service Image Section */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-bold text-[#0B1D51] uppercase tracking-widest ml-1">
                <FaCloudUploadAlt className="text-blue-500" /> Service Banner
                URL
              </label>
              <input
                type="text"
                name="serviceImage"
                required
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300"
                placeholder="https://example.com/medical-banner.jpg"
              />
            </div>

            {/* Title & Company Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-[#0B1D51] uppercase tracking-widest ml-1">
                  <FaStethoscope className="text-blue-500" /> Service Title
                </label>
                <input
                  type="text"
                  name="serviceTitle"
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300"
                  placeholder="e.g. Advanced Health Checkup"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-[#0B1D51] uppercase tracking-widest ml-1">
                  <FaHospital className="text-blue-500" /> Clinic/Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300"
                  placeholder="e.g. City General Hospital"
                />
              </div>
            </div>

            {/* Website Link */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-bold text-[#0B1D51] uppercase tracking-widest ml-1">
                <FaGlobe className="text-blue-500" /> Official Website
              </label>
              <input
                type="text"
                name="website"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300"
                placeholder="https://clinic-website.com"
              />
            </div>

            {/* Description Area */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-bold text-[#0B1D51] uppercase tracking-widest ml-1">
                Description
              </label>
              <textarea
                name="description"
                rows={4}
                required
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300 resize-none"
                placeholder="Describe the medical facilities and expert teams included in this service..."
              ></textarea>
            </div>

            {/* Category & Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-[#0B1D51] uppercase tracking-widest ml-1">
                  Medical Category
                </label>
                <div className="relative">
                  <select
                    name="category"
                    required
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected>
                      Select service type
                    </option>
                    <option>Health Check</option>
                    <option>Cardiology</option>
                    <option>Pediatrics</option>
                    <option>Dental</option>
                    <option>Radiology</option>
                    <option>Gynecology</option>
                    <option>Ophthalmology</option>
                    <option>Pathology</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <FaStethoscope size={14} />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-[#0B1D51] uppercase tracking-widest ml-1">
                  <FaMoneyBillWave className="text-blue-500" /> Price (BDT)
                </label>
                <input
                  type="number"
                  name="price"
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300"
                  placeholder="e.g. 5500"
                />
              </div>
            </div>

            {/* Contact & Date Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-[#0B1D51] uppercase tracking-widest ml-1">
                  <FaEnvelope className="text-blue-500" /> Contact Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300"
                  placeholder="admin@hospital.com"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-[#0B1D51] uppercase tracking-widest ml-1">
                  <FaCalendarAlt className="text-blue-500" /> Added Date
                </label>
                <input
                  type="date"
                  name="addedDate"
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-slate-50">
              <button
                type="submit"
                className="w-full py-5 bg-blue-500 hover:bg-[#0B1D51] text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-500/20 transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3"
              >
                Publish Service <FaArrowRight size={16} />
              </button>
            </div>
          </form>
        </motion.div>

        <p className="mt-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
          Certified Healthcare Management Portal
        </p>
      </div>
    </div>
  );
};

export default AddService;
