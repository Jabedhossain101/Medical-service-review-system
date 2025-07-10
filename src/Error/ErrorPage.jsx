import React from 'react';
import PageError from '../assets/Error.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router';
const ErrorPage = () => {
  return (
    <div className="bg-blue-200 min-h-screen mx-auto">
      <Lottie
        className="w-[300px] mx-auto flex items-center"
        animationData={PageError}
        loop={true}
      ></Lottie>
      <div className="flex justify-center">
        <Link to={'/'} className="bg-blue-100 border p-3 rounded-lg">
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
