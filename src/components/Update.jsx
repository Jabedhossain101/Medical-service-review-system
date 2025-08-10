import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { IoIosArrowRoundBack } from 'react-icons/io';

const Update = () => {
  const navigate = useNavigate();
  const {
    _id,
    website,
    userEmail,
    serviceTitle,
    serviceImage,
    price,
    description,
    companyName,
    category,
    addedDate,
  } = useLoaderData();

  const handleUpdateService = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newService = Object.fromEntries(formData.entries());

    fetch(`https://rafsan-service.vercel.app/service/${_id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newService),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          navigate('/myservice');
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Service updated successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="h-16"></div>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <Link className='flex items-center gap-2 mb-6 text-gray-600 hover:text-orange-500 transition-colors duration-300' to='/myservice'>
            <IoIosArrowRoundBack className='text-2xl' />Go Back
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            Update Service
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Update details for your healthcare service.
          </p>

          <form
            onSubmit={handleUpdateService}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Service Image */}
            <div className="sm:col-span-2">
              <label className="block font-semibold text-gray-700 mb-1">
                Service Image
              </label>
              <input
                type="text"
                name="serviceImage"
                defaultValue={serviceImage}
                className="input input-bordered w-full bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder="Service Image URL"
              />
            </div>

            {/* Service Title */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Service Title
              </label>
              <input
                type="text"
                name="serviceTitle"
                defaultValue={serviceTitle}
                className="input input-bordered w-full bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder="Enter service title"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                defaultValue={companyName}
                className="input input-bordered w-full bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder="Clinic or hospital name"
              />
            </div>

            {/* Website */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Website
              </label>
              <input
                type="text"
                name="website"
                defaultValue={website}
                className="input input-bordered w-full bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder="https://example.com"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Price (BDT)
              </label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                className="input input-bordered w-full bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder="Enter service price"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                defaultValue={category}
                className="select select-bordered w-full bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
              >
                <option disabled value="">
                  Select category
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
            </div>

            {/* Description */}
            <div className="sm:col-span-2">
              <label className="block font-semibold text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={description}
                className="textarea textarea-bordered w-full bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400"
                placeholder="Describe the service..."
                rows={4}
              ></textarea>
            </div>

            {/* User Email */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                User Email
              </label>
              <input
                type="email"
                name="userEmail"
                defaultValue={userEmail}
                className="input input-bordered w-full bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                placeholder="Your email address"
              />
            </div>

            {/* Added Date */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Added Date
              </label>
              <input
                type="date"
                name="addedDate"
                defaultValue={addedDate?.slice(0, 10)}
                className="input input-bordered w-full bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#ff9b00] text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
              >
                Update Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
