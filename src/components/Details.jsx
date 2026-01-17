import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import useAuth from '../Hook/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import {
  FaGlobe,
  FaEnvelope,
  FaCalendarAlt,
  FaStar,
  FaHandHoldingHeart,
  FaExternalLinkAlt,
} from 'react-icons/fa';

const Details = () => {
  const { id: serviceId } = useParams();
  const { user } = useAuth();
  const {
    serviceImage,
    serviceTitle,
    companyName,
    website,
    category,
    description,
    price,
    userEmail,
  } = useLoaderData();

  const handleReview = e => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      photo: form.photo.value,
      email: form.email.value,
      comment: form.comment.value,
      rating: form.rating.value,
    };

    const review = { serviceId, reviewer: user.email, formData };

    axios
      .post('https://rafsan-service.vercel.app/reviews', review)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thank you! Your review has been saved',
            showConfirmButton: false,
            timer: 2000,
            background: '#0B1D51',
            color: '#fff',
          });
          form.reset();
        }
      })
      .catch(console.error);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Navbar Spacer */}
      <div className="h-24 bg-[#0B1D51]"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: SERVICE INFO (8 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Main Image Card */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 overflow-hidden border border-slate-100">
              <div className="relative h-[400px]">
                <img
                  className="w-full h-full object-cover"
                  src={serviceImage}
                  alt={serviceTitle}
                />
                <div className="absolute top-6 left-6 bg-blue-500 text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">
                  {category}
                </div>
              </div>

              <div className="p-10 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-black text-[#0B1D51] leading-tight">
                      {companyName}
                    </h1>
                    <p className="text-blue-500 font-bold text-lg italic mt-1">
                      {serviceTitle}
                    </p>
                  </div>
                  <div className="bg-blue-50 px-6 py-3 rounded-2xl border border-blue-100 text-center">
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">
                      Service Charge
                    </p>
                    <p className="text-2xl font-black text-blue-600">
                      ৳{price}
                    </p>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {description}
                  </p>
                  <div className="flex items-center gap-3 text-blue-600 font-semibold mt-4">
                    <FaHandHoldingHeart />
                    <span>
                      Comprehensive healthcare focusing on prevention and
                      emergency support.
                    </span>
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* Meta Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:bg-blue-50">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-500">
                      <FaGlobe />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">
                        Official Website
                      </p>
                      <a
                        href={website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-[#0B1D51] hover:text-blue-500 truncate flex items-center gap-2"
                      >
                        Visit Site <FaExternalLinkAlt size={10} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:bg-blue-50">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-500">
                      <FaEnvelope />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">
                        Contact Email
                      </p>
                      <p className="text-sm font-bold text-[#0B1D51] truncate">
                        {userEmail}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest pt-4">
                  <FaCalendarAlt className="text-blue-400" />
                  Posted on:{' '}
                  {new Date().toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: REVIEW FORM (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-[#0B1D51] rounded-[2.5rem] shadow-2xl p-8 md:p-10 sticky top-28">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Share Feedback
                </h3>
                <p className="text-blue-200/60 text-sm">
                  Your review helps our community grow.
                </p>
              </div>

              <form onSubmit={handleReview} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    defaultValue={user?.displayName}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                    Photo URL
                  </label>
                  <input
                    name="photo"
                    type="text"
                    defaultValue={user?.photoURL}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="Profile image link"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                    Review Comment
                  </label>
                  <textarea
                    name="comment"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                    placeholder="Describe your experience..."
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                    Select Rating
                  </label>
                  <div className="relative">
                    <select
                      name="rating"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    >
                      <option value="" className="text-slate-900">
                        Choose rating
                      </option>
                      <option value="5" className="text-slate-900">
                        ⭐⭐⭐⭐⭐ 5 - Excellent
                      </option>
                      <option value="4" className="text-slate-900">
                        ⭐⭐⭐⭐ 4 - Very Good
                      </option>
                      <option value="3" className="text-slate-900">
                        ⭐⭐⭐ 3 - Average
                      </option>
                      <option value="2" className="text-slate-900">
                        ⭐⭐ 2 - Poor
                      </option>
                      <option value="1" className="text-slate-900">
                        ⭐ 1 - Terrible
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                      <FaStar size={12} />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-black rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                >
                  Post Review
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Details;
