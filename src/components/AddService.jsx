import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

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
            confirmButtonColor: '#06923E',
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="h-16"></div>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-50 via-white to-green-100 px-4">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8">
          <Link
            className="flex items-center gap-2 mb-6 text-gray-600 hover:text-orange-500 transition-colors duration-300"
            to="/"
          >
            <IoIosArrowRoundBack className="text-2xl" />
            Go Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-2">
            Add Medical Service
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Provide professional healthcare services — diagnostics,
            consultations, treatments, and more.
          </p>

          <form onSubmit={handleAddService} className="space-y-6">
            {/* Service Image */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Service Image URL
              </label>
              <input
                type="text"
                name="serviceImage"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Service Title & Company Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Service Title
                </label>
                <input
                  type="text"
                  name="serviceTitle"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Enter service title"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Clinic or hospital name"
                />
              </div>
            </div>

            {/* Website */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Website
              </label>
              <input
                type="text"
                name="website"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                placeholder="https://example.com"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                placeholder="Describe the service..."
              ></textarea>
            </div>

            {/* Category & Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Category
                </label>
                <select
                  name="category"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                >
                  <option disabled selected>
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

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Price (BDT)
                </label>
                <input
                  type="number"
                  name="price"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                  placeholder="Enter service price"
                />
              </div>
            </div>

            {/* Email & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Added Date
                </label>
                <input
                  type="date"
                  name="addedDate"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#ff9b00] hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md"
              >
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
