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
    <div className="p-3 flex justify-center">
      <div className="w-full overflow-hidden bg-white rounded-lg shadow-md max-w-sm">
        <img
          className="object-cover object-center w-full h-40"
          src={serviceImage}
          alt={serviceTitle}
        />

        <div className="flex items-center px-4 py-2 bg-gray-100">
          <img
            width="36"
            height="36"
            src="https://img.icons8.com/fluency/48/doctors-bag.png"
            alt="icon"
          />
          <h1 className="mx-2 text-base font-semibold text-black">
            {companyName}
          </h1>
        </div>

        <div className="px-4 py-3">
          <h1 className="text-lg font-semibold text-gray-800">
            {serviceTitle}
          </h1>
          <p className="py-1 text-sm text-gray-600">{description}</p>

          <div className="flex gap-1 items-center mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-green-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm.75 16.25h-1.5v-1.5H9v-1.5h2.25v-1H9.5a.5.5 0 01-.5-.5V11c0-.276.224-.5.5-.5h2.25v-1H9V8h2.25V6.75h1.5V8H15v1.5h-2.25v1H15c.276 0 .5.224.5.5v.75a.5.5 0 01-.5.5h-2.25v1H15v1.5h-2.25v1.5z" />
            </svg>
            <h1 className="text-gray-800 text-sm">{price} TAKA</h1>
          </div>

          <div className="flex items-center mt-2 text-gray-800 text-xs">
            <span>{category}</span>
          </div>

          <div className="flex items-center mt-2 text-xs text-gray-600">
            {userEmail}
          </div>

          <div className="flex justify-center mt-3">
            <Link
              to={`/service/${_id}`}
              className="btn btn-sm text-white bg-[#FF9B00]"
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
