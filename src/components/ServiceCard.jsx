import React from 'react';
import { Link } from 'react-router'; // note: react-router-dom

const ServiceCard = ({ service }) => {
  const {
    serviceImage,
    serviceTitle,
    companyName,
    _id,
    category,
    description,
    price,
    userEmail,
  } = service;

  return (
    <div className="flex justify-center">
      <div
        className="w-full max-w-sm bg-gradient-to-br from-[#0B1D51]/10 via-white to-[#102A71]/10 
                      rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
      >
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-3xl">
          <img
            src={serviceImage}
            alt={serviceTitle}
            className="w-full h-52 object-cover transform group-hover:scale-105 transition duration-500"
          />
          {/* Floating Category Label */}
          <span className="absolute top-3 left-3 text-xs font-medium text-blue-600 bg-blue-50/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
            {category}
          </span>
        </div>

        {/* Company Info */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/30 backdrop-blur-md border-b border-white/20">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/fluency/48/doctors-bag.png"
            alt="icon"
          />
          <h2 className="text-sm font-semibold text-slate-900">
            {companyName}
          </h2>
        </div>

        {/* Content */}
        <div className="px-4 py-4 space-y-3">
          <h1 className="text-lg font-bold text-slate-900 line-clamp-1">
            {serviceTitle}
          </h1>

          <p className="text-sm text-slate-700 line-clamp-2">{description}</p>

          {/* Price */}
          <div className="flex items-center gap-2 pt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-green-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm.75 16.25h-1.5v-1.5H9v-1.5h2.25v-1H9.5a.5.5 0 01-.5-.5V11c0-.276.224-.5.5-.5h2.25v-1H9V8h2.25V6.75h1.5V8H15v1.5h-2.25v1H15c.276 0 .5.224.5.5v.75a.5.5 0 01-.5.5h-2.25v1H15v1.5h-2.25v1.5z" />
            </svg>
            <span className="text-sm font-semibold text-slate-900">
              {price} TAKA
            </span>
          </div>

          {/* Email */}
          <p className="text-xs text-slate-500 truncate">{userEmail}</p>

          {/* Button */}
          <div className="pt-4">
            <Link
              to={`/service/${_id}`}
              className="block w-full text-center text-sm font-semibold text-white 
                         bg-gradient-to-r from-blue-500 to-blue-600 py-2 rounded-xl 
                         hover:opacity-90 transition shadow-lg"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
