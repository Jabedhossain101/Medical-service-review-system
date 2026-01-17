import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import {
  FaEye,
  FaPlus,
  FaEdit,
  FaTrashAlt,
  FaTag,
  FaDollarSign,
  FaClock,
} from 'react-icons/fa';

const MyCard = ({ service }) => {
  const { serviceImage, serviceTitle, category, price, companyName, _id } =
    service;

  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this medical service record!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0B1D51',
      cancelButtonColor: '#ef4444',
      confirmButtonText: 'Yes, delete it!',
      background: '#fff',
      color: '#0B1D51',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://rafsan-service.vercel.app/service/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'The service has been removed.',
                icon: 'success',
                confirmButtonColor: '#3b82f6',
              });
            }
          });
      }
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="w-full bg-white rounded-[2rem] shadow-xl shadow-blue-900/5 overflow-hidden border border-slate-50 transition-all duration-300 group"
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={serviceImage}
          alt={serviceTitle}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D51]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-black text-[#0B1D51] mb-1 truncate">
          {companyName}
        </h3>
        <p className="text-blue-500 font-bold text-sm mb-4 truncate italic">
          {serviceTitle}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-slate-500 text-xs font-medium">
            <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
              <FaDollarSign size={10} />
            </div>
            <span className="text-slate-700 font-bold">${price}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-500 text-xs font-medium">
            <div className="w-6 h-6 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500">
              <FaClock size={10} />
            </div>
            <span>Best: Sun – Fri</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Link
            to={`/service/${_id}`}
            className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-[#0B1D51] text-white py-3 rounded-xl text-xs font-extrabold transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            <FaEye /> View Details
          </Link>

          <div className="flex gap-2">
            <Link
              to={`/update/${_id}`}
              className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-indigo-100 text-indigo-600 py-2.5 rounded-xl text-[10px] font-bold transition-all"
            >
              <FaEdit /> Edit
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="flex-1 flex items-center justify-center gap-2 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white py-2.5 rounded-xl text-[10px] font-bold transition-all border border-red-100"
            >
              <FaTrashAlt /> Remove
            </button>
          </div>

          <Link
            to={'/addService'}
            className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-slate-200 hover:border-blue-500 hover:text-blue-500 text-slate-400 py-2.5 rounded-xl text-[10px] font-bold transition-all"
          >
            <FaPlus /> Add New
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MyCard;
