import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyCard = ({ service }) => {
  
  const { serviceImage, serviceTitle, category, price, companyName, _id } =
    service;

  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
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
                text: 'Your service has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="h-16"></div>
      <div className="flex justify-center">
        <div className="w-full max-w-xs bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            className="h-36 w-full object-cover"
            src={serviceImage}
            alt={serviceTitle}
          />

          <div className="px-4 py-3">
            <h3 className="text-lg font-semibold text-gray-800">
              {companyName}
            </h3>

            <div className="text-sm text-gray-600 mt-1 space-y-1">
              <p>
                <span className="font-medium">Category:</span> {category}
              </p>
              <p>
                <span className="font-medium">Price:</span> {price}
              </p>
              <p>
                <span className="font-medium">Best Time:</span> Sun–Fri
              </p>
              <p className="text-gray-700">{serviceTitle}</p>
            </div>

            <div className="mt-3">
              <Link
                to={`/service/${_id}`}
                className="w-full block text-center bg-orange-500 hover:bg-orange-600 text-white py-1.5 rounded-lg text-sm font-medium"
              >
                👁️ View More
              </Link>
            </div>

            <div className="flex flex-wrap gap-1 mt-3">
              <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium">
                Medical instrument
              </span>
              <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium">
                Operation theatre
              </span>
              <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium">
                Time to time
              </span>
            </div>

            <div className="flex justify-between mt-4 gap-1">
              <Link
                to={'/addService'}
                className="flex-1 text-center bg-green-100 hover:bg-green-200 text-green-800 py-1 rounded-lg text-sm"
              >
                ➕ Add
              </Link>
              <Link
                to={`/update/${_id}`}
                className="flex-1 text-center bg-blue-100 hover:bg-blue-200 text-blue-800 py-1 rounded-lg text-sm"
              >
                ✏️ Update
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="flex-1 bg-red-100 hover:bg-red-200 text-red-800 py-1 rounded-lg text-sm"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
