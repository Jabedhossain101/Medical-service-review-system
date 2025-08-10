import React, { use } from 'react';
import ReviewRow from './ReviewRow';

const ReviewList = ({ myReviewsPromise, handleDelete }) => {
  // Suspense: Resolve promise
  const reviews = use(myReviewsPromise);

  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200 mt-6">
      <table className="min-w-[800px] w-full text-left">
        {/* Table Head */}
        <thead className="bg-gradient-to-r from-orange-400 to-orange-500 text-white">
          <tr>
            <th className="px-4 py-3">No.</th>
            <th className="px-4 py-3">Image</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Comment</th>
            <th className="px-4 py-3">Rating</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
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
              <td colSpan="8" className="px-4 py-6 text-center text-gray-500">
                No reviews found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Total Count */}
      <div className="p-3 text-sm font-semibold text-gray-700 bg-gray-50 border-t">
        Total Reviews: {reviews.length}
      </div>
    </div>
  );
};

export default ReviewList;
