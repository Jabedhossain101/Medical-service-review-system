import React from 'react';

const DashboardHome = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-[#FF9B00]">
        Welcome to your Dashboard
      </h1>
      <p className="mt-2 text-gray-600">
        Here you can manage your services, reviews, and account.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="p-4 bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-800">My Services</h2>
          <p className="text-gray-500 mt-1">
            View, edit, and manage all your services.
          </p>
        </div>
        <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-800">My Reviews</h2>
          <p className="text-gray-500 mt-1">
            Check and respond to reviews left by clients.
          </p>
        </div>
        <div className="p-4 bg-gradient-to-r from-green-100 to-green-50 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-800">
            Account Settings
          </h2>
          <p className="text-gray-500 mt-1">
            Update your profile and personal information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
