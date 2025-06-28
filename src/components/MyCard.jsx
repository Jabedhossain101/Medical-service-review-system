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
        fetch(`http://localhost:3000/service/${_id}`, {
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
      <div className="h-20"></div>
      <div className="flex justify-center">
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#eef1e1] to-[#e7efd7] relative p-4">
          <img
            className="rounded-xl h-48 w-full object-cover"
            src={serviceImage} // Replace with your image
            alt="Istanbul"
          />

          <div className="bg-[#415411] text-white italic text-lg font-semibold px-3 py-1 mt-2 inline-block rounded-md shadow-md">
            {companyName}
          </div>

          <div className="mt-3 text-[#2e3b21] text-sm space-y-1">
            <p>
              <span className="text-[#748c38] font-semibold">Category:</span>{' '}
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
              className="bg-[#4b5f20] hover:bg-[#374818] btn text-white px-4 py-2 rounded-full flex items-center gap-1"
            >
              👁️ <span className="hidden sm:inline">View more</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-[#e4eac5] text-[#2c3d1f] px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              Medical instrument
            </span>
            <span className="bg-[#e4eac5] text-[#2c3d1f] px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              Operation theatre
            </span>
            <span className="bg-[#e4eac5] text-[#2c3d1f] px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              Time to time
            </span>
          </div>

          <div className="flex justify-between items-center mt-6 px-2 flex-wrap gap-2">
            <Link
              to={'/addService'}
              className="bg-[#4b5f20] hover:bg-[#374818] text-white px-4 py-2 rounded-full flex items-center gap-1"
            >
              ➕ <span className="hidden sm:inline">Add</span>
            </Link>
            <Link
              to={'/update'}
              className="bg-[#4b5f20] hover:bg-[#374818] text-white px-4 py-2 rounded-full flex items-center gap-1"
            >
              ✏️ <span className="hidden sm:inline">Update</span>
            </Link>

            <button
              onClick={() => handleDelete(_id)}
              className="bg-[#4b5f20] hover:bg-[#374818] text-white px-4 py-2 rounded-full flex items-center gap-1"
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
