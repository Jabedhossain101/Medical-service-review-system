import React from 'react';
import Swal from 'sweetalert2';

const AddService = () => {
  const handleAddService = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // console.log(formData.entries());
    const newService = Object.fromEntries(formData.entries());
    console.log(newService);

    fetch('https://rafsan-service.vercel.app/service', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newService),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          console.log('added successfully');
          Swal.fire({
            title: 'Added Successfully',
            icon: 'success',
            draggable: true,
          });
          form.reset();
        }
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
        <div className="bg-[#FAF7F3] shadow-2xl dark:bg-[#fafaf9] p-6 rounded-xl  space-y-6">
          {/* Service Image */}
          <div>
            <label className="block font-semibold mb-1">Service Image</label>
            <input
              type="text"
              name="serviceImage"
              className="input input-bordered w-full bg-[#FFFFF0]"
              placeholder="Service Image URL"
            />
          </div>

          {/* Service Title */}
          <div>
            <label className="block font-semibold mb-1">Service Title</label>
            <input
              type="text"
              name="serviceTitle"
              className="input input-bordered w-full bg-[#FFFFF0]"
              placeholder="Enter service title"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block font-semibold mb-1">Company Name</label>
            <input
              type="text"
              name="companyName"
              className="input input-bordered w-full bg-[#FFFFF0]"
              placeholder="Clinic or hospital name"
            />
          </div>

          {/* Website */}
          <div>
            <label className="block font-semibold mb-1">Website</label>
            <input
              type="text"
              name="website"
              className="input input-bordered w-full bg-[#FFFFF0]"
              placeholder="https://example.com"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full bg-[#FFFFF0]"
              placeholder="Describe the service..."
              rows={4}
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              name="category"
              className="select select-bordered w-full bg-[#FFFFF0]"
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
              className="input input-bordered w-full bg-[#FFFFF0]"
              placeholder="Enter service price"
            />
          </div>

          {/* User Email */}
          <div>
            <label className="block font-semibold mb-1">User Email</label>
            <input
              type="email"
              name="userEmail"
              className="input input-bordered w-full bg-[#FFFFF0]"
              placeholder="Your email address"
            />
          </div>

          {/* Added Date - User Selectable */}
          <div>
            <label className="block font-semibold mb-1">Added Date</label>
            <input
              type="date"
              name="addedDate"
              className="input input-bordered w-full bg-[#FFFFF0]"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn bg-[#FF9B00] text-white w-full"
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
