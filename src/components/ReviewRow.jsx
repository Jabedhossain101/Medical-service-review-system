import React from 'react';
import Swal from 'sweetalert2';

const ReviewRow = ({ review, index, handleDelete }) => {
  const {
    _id,
    formData: { name, email, comment, rating, image },
  } = review;

  const onDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2563eb',
      cancelButtonColor: '#dc2626',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://rafsan-service.vercel.app/reviews/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your review has been deleted.',
                icon: 'success',
              });
              handleDelete(_id);
            }
          });
      }
    });
  };

  const date = new Date().toLocaleDateString();

  return (
    <tr className="bg-white even:bg-gray-50 hover:bg-green-50 transition-all duration-200 border-b">
      <td className="px-4 py-3 text-center font-medium text-gray-600">
        {index + 1}
      </td>

      {/* Image */}
      <td className="px-4 py-3">
        <img
          src={image || 'https://via.placeholder.com/40'}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm"
        />
      </td>

      {/* Name */}
      <td className="px-4 py-3 text-gray-800 font-semibold">{name}</td>

      {/* Email */}
      <td className="px-4 py-3 text-gray-600 break-all">{email}</td>

      {/* Date */}
      <td className="px-4 py-3 text-gray-500">{date}</td>

      {/* Comment */}
     
      {/* Rating */}
      <td className="px-4 py-3 text-center">
        <span className="inline-block bg-[#ffff] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
          {rating}
        </span>
      </td>

      {/* Delete Button */}
      <td className="px-4 py-3 text-center">
        <button
          onClick={() => onDelete(_id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 shadow-md"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReviewRow;
