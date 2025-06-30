import React, { useState, useRef, useEffect } from 'react';
import { RxAvatar } from 'react-icons/rx';

const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {/* Dropdown toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
      >
        <span className="mx-1 ">
          <RxAvatar className="text-2xl"></RxAvatar>
        </span>
        <svg
          className="w-5 h-5 mx-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition transform scale-100">
          <a
            href="#"
            className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <RxAvatar className="text-2xl"></RxAvatar>
            {/* <img
              className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
              src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
              alt="jane avatar"
            /> */}
            <div className="mx-1">
              <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200"></h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                youandme@gmail.com
              </p>
            </div>
          </a>

          <hr className="border-gray-200 dark:border-gray-700" />

          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            View Profile
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Settings
          </a>

          <hr className="border-gray-200 dark:border-gray-700" />

          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Company Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Avatar;
