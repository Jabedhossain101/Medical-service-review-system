import React, { use } from 'react';
import ReviewRow from './ReviewRow';

const ReviewList = ({ myReviewsPromise }) => {
  const reviews = use(myReviewsPromise);
  return (
    <div>
      <div className="my-5">
        <small className=" p-2 text-white bg-[#471396]">
          TOTAL REVIEW: {reviews.length}
        </small>
      </div>
      <tbody>
        {reviews.map((review, index) => (
          <ReviewRow key={review._id} index={index} review={review}></ReviewRow>
        ))}
      </tbody>
    </div>
  );
};

export default ReviewList;
