import React, { Suspense } from 'react';
import ReviewList from './ReviewList';
import useAuth from '../Hook/useAuth';
import { myReviewsPromise } from './services';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const MyReview = () => {
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-[#0B1D51]">
            My Clinical <span className="text-blue-500 italic">Reviews</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1 uppercase tracking-widest text-xs">
            Manage your feedback and ratings for services
          </p>
        </div>
        <div className="hidden md:flex w-12 h-12 bg-white rounded-2xl shadow-xl shadow-blue-900/5 items-center justify-center text-blue-500 border border-slate-50">
          <FaStar size={20} />
        </div>
      </div>

      {/* Content Area */}
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
              Retrieving reviews...
            </p>
          </div>
        }
      >
        <ReviewList myReviewsPromise={myReviewsPromise(user.email)} />
      </Suspense>
    </main>
  );
};

export default MyReview;
