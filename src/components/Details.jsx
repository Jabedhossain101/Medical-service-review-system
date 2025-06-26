import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import useAuth from '../Hook/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const Details = () => {
  const { id: serviceId } = useParams();

  const { user } = useAuth();
  console.log(serviceId, user);

  const handleReview = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const comment = form.comment.value;
    const rating = form.rating.value;
    const formData = { name, photo, email, comment, rating };
    console.log(formData);

    const review = {
      serviceId,
      reviewer: user.email,
      formData,
    };

    axios
      .post('http://localhost:3000/reviews', review)
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
  const {
    serviceImage,
    serviceTitle,
    companyName,
    website,
    _id,
    category,
    description,
    price,
    userEmail,
  } = useLoaderData();

  return (
    <div className="min-h-screen ">
      {/* Top bar */}
      <div className="h-16  w-full"></div>

      {/* Main Content Wrapper */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-6 gap-6">
        {/* Left Section: Service Info */}
        <div className="w-full lg:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            className="object-cover w-full h-64"
            src={serviceImage}
            alt={serviceTitle}
          />
          <div className="p-6">
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              {serviceTitle}
            </span>
            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">
              {companyName}
            </h2>

            <p className="mt-2 text-gray-700 dark:text-gray-300">
              <strong>Service:</strong> {category}
            </p>

            <p className="mt-1 text-green-600 dark:text-green-400 font-semibold">
              Price: ৳{price}
            </p>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Medicare service is a comprehensive healthcare system that focuses
              on early detection and prevention of illnesses. It offers 24/7
              emergency support and ambulance services to ensure safe and prompt
              transportation of patients...
            </p>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              <strong>Email:</strong> {userEmail}
            </p>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <a
                href={website}
                className="text-blue-400 hover:text-blue-600 text-sm underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {website}
              </a>
              <span className="text-xs text-gray-600 dark:text-gray-300">
                Today:{' '}
                {new Date()
                  .toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })
                  .toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Review Form */}
        <div className="w-full lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="flex justify-end">
            <span className="text-xs text-gray-600 dark:text-gray-300">
              Today:{' '}
              {new Date()
                .toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })
                .toUpperCase()}
            </span>
          </p>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Add a Review
          </h3>

          <form onSubmit={handleReview} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="w-full mt-1 p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300">
                Photo URL
              </label>
              <input
                name="photo"
                type="text"
                className="w-full mt-1 p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Photo URL"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="w-full mt-1 p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300">
                Your Comment
              </label>
              <textarea
                name="comment"
                className="w-full mt-1 p-2 h-24 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Write your review..."
              ></textarea>
            </div>

            {/* You can integrate react-rating here */}
            {/* Example Placeholder */}
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300">
                Rating
              </label>
              <select
                name="rating"
                className="w-full mt-1 p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
              >
                <option>⭐ 1</option>
                <option>⭐⭐ 2</option>
                <option>⭐⭐⭐ 3</option>
                <option>⭐⭐⭐⭐ 4</option>
                <option>⭐⭐⭐⭐⭐ 5</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
