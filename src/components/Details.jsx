import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import useAuth from '../Hook/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const Details = () => {
  const { id: serviceId } = useParams();
  const { user } = useAuth();
  const {
    serviceImage,
    serviceTitle,
    companyName,
    website,
    category,
    description,
    price,
    userEmail,
  } = useLoaderData();

  const handleReview = e => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      photo: form.photo.value,
      email: form.email.value,
      comment: form.comment.value,
      rating: form.rating.value,
    };

    const review = { serviceId, reviewer: user.email, formData };

    axios
      .post('https://rafsan-service.vercel.app/reviews', review)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your review has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch(console.error);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-16 w-full"></div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Service Info */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img
            className="w-full h-64 object-cover"
            src={serviceImage}
            alt={serviceTitle}
          />
          <div className="p-6 space-y-4">
            <div>
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest">
                {category}
              </span>
              <h2 className="mt-1 text-2xl font-bold text-gray-900">
                {companyName}
              </h2>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {description}
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              Medicare service is a comprehensive healthcare system focusing on
              prevention, early detection, and 24/7 emergency support.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <span className="text-lg font-bold text-green-600">
                ৳{price}
              </span>
              <a
                href={website}
                className="text-blue-500 hover:text-blue-700 text-sm underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>

            <div className="text-sm text-gray-500">
              <p>
                <strong>Email:</strong> {userEmail}
              </p>
              <p>
                <strong>Date:</strong>{' '}
                {new Date().toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Review Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Share Your Review
          </h3>
          <form onSubmit={handleReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                name="photo"
                type="text"
                className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
                placeholder="Photo URL"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Comment
              </label>
              <textarea
                name="comment"
                required
                className="w-full mt-1 p-2 rounded-lg border border-gray-300 h-24 focus:ring-2 focus:ring-blue-400"
                placeholder="Write your review..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <select
                name="rating"
                required
                className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select a rating</option>
                <option>⭐ 1</option>
                <option>⭐⭐ 2</option>
                <option>⭐⭐⭐ 3</option>
                <option>⭐⭐⭐⭐ 4</option>
                <option>⭐⭐⭐⭐⭐ 5</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-orange-400 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
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
