// ReviewTable.jsx
import React from 'react';
import ReviewRow from './ReviewRow';

const ReviewTable = ({ myReviewsPromise, handleDelete }) => {
  const reviews = myReviewsPromise.read(); // Suspense-style promise reading

  return (
    <div className="mt-6">
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200">
        <table className="min-w-[800px] w-full text-left">
          <thead className="bg-gradient-to-r from-lime-400 to-green-400 text-white">
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
          <tbody>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <ReviewRow
                  key={review._id}
                  review={review}
                  index={index}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-500">
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewTable;
