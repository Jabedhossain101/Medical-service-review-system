import React from 'react';
import Swal from 'sweetalert2';

const ReviewRow = ({ review, index, handleDelete }) => {
  const {
    _id,
    formData: { name, email, rating },
  } = review;

  const onDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
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
              handleDelete(_id); // notify parent
            }
          });
      }
    });
  };

  const date = new Date().toLocaleDateString();

  return (
    <tr className="bg-lime-100 hover:bg-lime-200 text-[#333] text-sm lg:text-base border-b">
      <td className="px-2 py-3 text-center">{index + 1}</td>
      <td className="px-2 py-3">
        {/* <img
          src={photo}
          alt={name}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded object-cover border"
        /> */}
      </td>
      <td className="px-2 py-3">{name}</td>
      <td className="px-2 py-3 break-all">{email}</td>
      <td className="px-2 py-3">{date}</td>
      {/* <td className="px-2 py-3 max-w-xs truncate sm:whitespace-normal">
        {comment}
      </td> */}
      <td className="px-2 py-3">
        <span className="inline-block bg-lime-400 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
          {rating}
        </span>
      </td>
      <td className="px-2 py-3 text-center">
        <button
          onClick={() => onDelete(_id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs sm:text-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReviewRow;
