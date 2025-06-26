import React from 'react';

const ReviewRow = ({ review, index, handleDelete }) => {
  const {
    _id,
    formData: { name, photo, email, comment, rating },
  } = review;

  return (
    <div className="overflow-x-auto h-64">
      <table className="min-w-[800px] w-full border border-gray-200">
        <thead>
          <tr className="bg-lime-300 text-[#333] text-sm lg:text-base">
            <th className="px-2 py-3 text-center">#</th>
            <th className="px-2 py-3">Photo</th>
            <th className="px-2 py-3">Name</th>
            <th className="px-2 py-3">Email</th>
            <th className="px-2 py-3">Date</th>
            <th className="px-2 py-3">Comment</th>
            <th className="px-2 py-3">Rating</th>
            <th className="px-2 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-lime-100 hover:bg-lime-200 text-[#333] text-sm lg:text-base border-b">
            <td className="px-2 py-3 text-center">{index + 1}</td>
            <td className="px-2 py-3">
              <img
                src={photo}
                alt={name}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded object-cover border"
              />
            </td>
            <td className="px-2 py-3">{name}</td>
            <td className="px-2 py-3 break-all">{email}</td>
            <td className="px-2 py-3">Today</td>
            <td className="px-2 py-3 max-w-xs truncate sm:whitespace-normal">
              {comment}
            </td>
            <td className="px-2 py-3">
              <span className="inline-block bg-lime-400 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                {rating}
              </span>
            </td>
            <td className="px-2 py-3 text-center">
              <button
                onClick={() => handleDelete(_id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs sm:text-sm"
              >
                Delete
              </button>
            </td>
          </tr>
          {/* Repeat <tr> for each item */}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewRow;
