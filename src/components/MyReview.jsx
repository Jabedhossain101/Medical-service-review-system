import React, { Suspense } from 'react';
import ReviewList from './ReviewList';
import useAuth from '../Hook/useAuth';
import { myReviewsPromise } from './services';

const MyReview = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="h-16"></div>
      <h1 className="font-bold text-center text-2xl my-2 underline">
        My All Review In Here
      </h1>
      <Suspense fallback={'loading your review'}>
        <ReviewList
          myReviewsPromise={myReviewsPromise(user.email)}
        ></ReviewList>
      </Suspense>
    </div>
  );
};

export default MyReview;
