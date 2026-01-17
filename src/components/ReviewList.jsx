import React, { use } from 'react';
import ReviewRow from './ReviewRow';

const ReviewList = ({ myReviewsPromise, handleDelete }) => {
  const reviews = use(myReviewsPromise);

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 overflow-hidden border border-slate-50">
      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full text-left border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-[#0B1D51] text-white">
              <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em]">
                No.
              </th>
              <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em]">
                Patient
              </th>
              <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em]">
                Contact Info
              </th>
              <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em]">
                Date
              </th>
              <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-center">
                Rating
              </th>
              <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-center">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-50">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <ReviewRow
                  key={review._id}
                  index={index}
                  review={review}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-20 text-center">
                  <div className="flex flex-col items-center">
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                      No reviews submitted yet
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer / Summary */}
      <div className="px-8 py-4 bg-slate-50/50 flex justify-between items-center border-t border-slate-50">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
          Report Generated: {new Date().toLocaleDateString()}
        </span>
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full uppercase">
          Total: {reviews.length} Entries
        </span>
      </div>
    </div>
  );
};

export default ReviewList;
