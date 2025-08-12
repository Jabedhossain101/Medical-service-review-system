import React from 'react';
import { Link } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white/90 dark:bg-gray-800 rounded-2xl shadow-2xl p-10 flex flex-col items-center">
        <FaExclamationTriangle className="text-6xl text-orange-400 mb-4 animate-bounce" />
        <h1 className="text-7xl font-extrabold text-white mb-2 text-center">
          404
        </h1>
        <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-300 mb-2 text-center">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center">
          The page you are looking for doesn&apos;t exist or has been moved.
          <br />
          Please check the URL or return to the homepage.
        </p>
        <Link
          to="/"
          className="bg-orange-400 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
