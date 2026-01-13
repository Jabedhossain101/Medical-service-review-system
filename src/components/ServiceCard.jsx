import React from 'react';
import { Link } from 'react-router';

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
      <div className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={serviceImage}
            alt={serviceTitle}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Company */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/fluency/48/doctors-bag.png"
            alt="icon"
          />
          <h2 className="text-sm font-semibold text-gray-800">{companyName}</h2>
        </div>

        {/* Content */}
        <div className="px-4 py-4 space-y-2">
          <h1 className="text-lg font-bold text-gray-900 line-clamp-1">
            {serviceTitle}
          </h1>

          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

          {/* Category */}
          <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {category}
          </span>

          {/* Price */}
          <div className="flex items-center gap-2 pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-green-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm.75 16.25h-1.5v-1.5H9v-1.5h2.25v-1H9.5a.5.5 0 01-.5-.5V11c0-.276.224-.5.5-.5h2.25v-1H9V8h2.25V6.75h1.5V8H15v1.5h-2.25v1H15c.276 0 .5.224.5.5v.75a.5.5 0 01-.5.5h-2.25v1H15v1.5h-2.25v1.5z" />
            </svg>
            <span className="text-sm font-semibold text-gray-800">
              {price} TAKA
            </span>
          </div>

          {/* Email */}
          <p className="text-xs text-gray-500 truncate">{userEmail}</p>

          {/* Button */}
          <div className="pt-4">
            <Link
              to={`/service/${_id}`}
              className="block w-full text-center text-sm font-semibold text-white bg-gradient-to-r from-orange-400 to-orange-500 py-2 rounded-lg hover:opacity-90 transition"
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
