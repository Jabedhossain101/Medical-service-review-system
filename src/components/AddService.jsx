import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const AddService = () => {
  const handleAddService = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // console.log(formData.entries());
    const newMango = Object.fromEntries(formData.entries());
    console.log(newMango);

    const service = { ...newMango };
    axios
      .get('http://localhost:3000/service', service)
      .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your review has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="p-12 text-center bg-[#f5f9f9]">
      <div className="h-10"></div>
      <h1 className="text-5xl font-bold mb-4">Add Medical Service</h1>
      {/* <p className="text-fuchsia-400 m-4">
        Add professional healthcare services including diagnostics,
        consultations, and treatments.
      </p> */}

      <form onSubmit={handleAddService}>
        {/* All inputs wrapped in one div with bg */}
        <div className="bg-gray-100 shadow-2xl dark:bg-[#fafaf9] p-6 rounded-xl  space-y-6">
          {/* Service Image */}
          <div>
            <label className="block font-semibold mb-1">Service Image</label>
            <input
              type="text"
              name="serviceImage"
              className="input input-bordered w-full bg-blue-50"
              placeholder="Service Image URL"
            />
          </div>

          {/* Service Title */}
          <div>
            <label className="block font-semibold mb-1">Service Title</label>
            <input
              type="text"
              name="serviceTitle"
              className="input input-bordered w-full bg-blue-50"
              placeholder="Enter service title"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block font-semibold mb-1">Company Name</label>
            <input
              type="text"
              name="companyName"
              className="input input-bordered w-full bg-blue-50"
              placeholder="Clinic or hospital name"
            />
          </div>

          {/* Website */}
          <div>
            <label className="block font-semibold mb-1">Website</label>
            <input
              type="text"
              name="website"
              className="input input-bordered w-full bg-blue-50"
              placeholder="https://example.com"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full bg-blue-50"
              placeholder="Describe the service..."
              rows={4}
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              name="category"
              className="select select-bordered w-full bg-blue-50"
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

          {/* Price */}
          <div>
            <label className="block font-semibold mb-1">Price (BDT)</label>
            <input
              type="number"
              name="price"
              className="input input-bordered w-full bg-blue-50"
              placeholder="Enter service price"
            />
          </div>

          {/* User Email */}
          <div>
            <label className="block font-semibold mb-1">User Email</label>
            <input
              type="email"
              name="userEmail"
              className="input input-bordered w-full bg-blue-50"
              placeholder="Your email address"
            />
          </div>

          {/* Added Date - User Selectable */}
          <div>
            <label className="block font-semibold mb-1">Added Date</label>
            <input
              type="date"
              name="addedDate"
              className="input input-bordered w-full bg-blue-50"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn bg-[#06923E] text-white w-full"
            >
              Add Service
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
