import React from 'react';
import ReviewRow from './ReviewRow';

const ReviewTable = ({ reviews, handleDelete }) => {
  return (
    <div>
      <div className="w-full overflow-x-auto mt-4">
        <table className="min-w-[800px] w-full text-left border">
          <thead className="bg-lime-300 text-black">
            <tr>
              <th className="px-4 py-2">No:</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Comment</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <ReviewRow
                key={review._id}
                review={review}
                index={index}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewTable;
