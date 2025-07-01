import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Update = () => {
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
  console.log(useLoaderData());

  const handleUpdateService = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // console.log(formData.entries());
    const newService = Object.fromEntries(formData.entries());
    console.log(newService);

    fetch(`https://rafsan-service.vercel.app/service/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newService),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="p-12 text-center bg-[#f5f9f9]">
      <div className="h-10"></div>
      <h1 className="text-5xl font-bold mb-4">Update This Services</h1>
      {/* <p className="text-fuchsia-400 m-4">
      Add professional healthcare services including diagnostics,
      consultations, and treatments.
    </p> */}

      <form onSubmit={handleUpdateService}>
        {/* All inputs wrapped in one div with bg */}
        <div className="bg-gray-100 shadow-2xl dark:bg-[#fafaf9] p-6 rounded-xl  space-y-6">
          {/* Service Image */}
          <div>
            <label className="block font-semibold mb-1">Service Image</label>
            <input
              type="text"
              name="serviceImage"
              defaultValue={serviceImage}
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
              defaultValue={serviceTitle}
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
              defaultValue={companyName}
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
              defaultValue={website}
              className="input input-bordered w-full bg-blue-50"
              placeholder="https://example.com"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              defaultValue={description}
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
              defaultValue={category}
              className="select select-bordered w-full bg-blue-50"
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

          {/* Price */}
          <div>
            <label className="block font-semibold mb-1">Price (BDT)</label>
            <input
              type="number"
              name="price"
              defaultValue={price}
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
              defaultValue={userEmail}
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
              defaultValue={addedDate?.slice(0, 10)}
              className="input input-bordered w-full bg-blue-50"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn bg-[#06923E] text-white w-full"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
