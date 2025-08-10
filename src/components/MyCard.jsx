import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyCard = ({ service }) => {
  const { serviceImage, serviceTitle, category, price, companyName, _id } =
    service;

  const handleDelete = _id => {
    console.log(_id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      console.log(result.isConfirmed);
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
    <div className="">
      <div className="h-20"></div>
      <div className="flex justify-center ">
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-xl bg-[#FFFFF0] relative p-4">
          <img
            className="rounded-xl h-48 w-full object-cover"
            src={serviceImage} // Replace with your image
            alt="Istanbul"
          />

          <div className=" text-gry-800 italic text-lg font-semibold px-3 py-1 mt-2 inline-block rounded-md shadow-md">
            {companyName}
          </div>

          <div className="mt-3 text-sm space-y-1">
            <p>
              <span className="text-gray-800 font-semibold">Category:</span>{' '}
              {category}
            </p>
            <p>
              <span className="font-medium">Price: </span>
              {price}
            </p>
            <p>
              <span className="font-medium">Best Time to Visit:</span> Sunday to
              friday
            </p>
            <p>{serviceTitle}</p>
            <Link
              to={`/service/${_id}`}
              className="bg-[#ff9b00] hover:bg-[#ff9b04] btn text-white px-4 py-2 rounded flex items-center gap-1"
            >
              👁️ <span className="hidden sm:inline">View more</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-[#FFFFF0] text-[#000] px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              Medical instrument
            </span>
            <span className="bg-[#FFFFF0] text-[#000] px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              Operation theatre
            </span>
            <span className="bg-[#FFFFF0] text-[#000] px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              Time to time
            </span>
          </div>

          <div className="flex justify-between items-center mt-6 px-2 flex-wrap gap-2">
            <Link
              to={'/addService'}
              className="bg-[#FFFFF0] btn text-gray-800 px-4 py-2 rounded flex items-center gap-1 hover:bg-base-200 transition-colors duration-300"
            >
              ➕ <span className="hidden sm:inline">Add</span>
            </Link>
            <Link
              to={`/update/${_id}`}
              className="bg-[#FFFFF0] btn text-gray-800 px-4 py-2 rounded flex items-center gap-1 hover:bg-base-200 transition-colors duration-300"
            >
              ✏️ <span className="hidden sm:inline">Update</span>
            </Link>

            <button
              onClick={() => handleDelete(_id)}
              className="bg-[#FFFFF0] btn text-gray-800 px-4 py-2 rounded flex items-center gap-1 hover:bg-base-200 transition-colors duration-300"
            >
              🗑️ <span className="hidden sm:inline">Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
