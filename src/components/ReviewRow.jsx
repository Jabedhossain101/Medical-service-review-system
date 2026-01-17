import React from 'react';
import Swal from 'sweetalert2';
import { FaTrashAlt, FaStar, FaEnvelope } from 'react-icons/fa';

const ReviewRow = ({ review, index, handleDelete }) => {
  const {
    _id,
    formData: { name, email, rating, photo }, // Change image to photo if that's your field name
  } = review;

  const onDelete = _id => {
    Swal.fire({
      title: 'Remove Review?',
      text: 'This data will be permanently deleted from our servers.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0B1D51',
      cancelButtonColor: '#ef4444',
      confirmButtonText: 'Yes, Delete',
      background: '#fff',
      color: '#0B1D51',
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
                text: 'Record has been removed.',
                icon: 'success',
                confirmButtonColor: '#3b82f6',
              });
              if (handleDelete) handleDelete(_id);
            }
          });
      }
    });
  };

  const displayDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <tr className="hover:bg-blue-50/30 transition-colors group">
      {/* Index */}
      <td className="px-6 py-4">
        <span className="text-xs font-bold text-slate-300 group-hover:text-blue-500 transition-colors leading-none">
          #{String(index + 1).padStart(2, '0')}
        </span>
      </td>

      {/* Patient Profile */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-100">
            <img
              src={photo || 'https://via.placeholder.com/150'}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-black text-[#0B1D51] leading-tight">
              {name}
            </p>
            <p className="text-[10px] font-bold text-slate-400 uppercase mt-1 tracking-tighter">
              Verified Patient
            </p>
          </div>
        </div>
      </td>

      {/* Email */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 text-slate-500 font-medium">
          <FaEnvelope className="text-blue-400 text-[10px]" />
          <span className="text-xs break-all">{email}</span>
        </div>
      </td>

      {/* Date */}
      <td className="px-6 py-4">
        <p className="text-xs font-bold text-slate-600">{displayDate}</p>
      </td>

      {/* Rating */}
      <td className="px-6 py-4">
        <div className="flex justify-center">
          <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100">
            <FaStar className="text-blue-500 text-[10px]" />
            <span className="text-xs font-black text-blue-600 leading-none">
              {rating?.split(' ')[1] || rating}
            </span>
          </div>
        </div>
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <div className="flex justify-center">
          <button
            onClick={() => onDelete(_id)}
            className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-500 text-red-500 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm border border-red-100"
            title="Delete Record"
          >
            <FaTrashAlt size={14} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ReviewRow;
