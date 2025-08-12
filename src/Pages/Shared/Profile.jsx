import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          You are not logged in
        </h2>
        <p className="text-gray-500">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="h-16"></div>
      <div className="flex flex-col items-center mt-10">
        <img
          src={user.photoURL || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-[#FF9B00] shadow-md mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800">{user.displayName}</h2>
        <p className="text-gray-600">{user.email}</p>

        <div className="mt-6 my-2.5 w-full max-w-md bg-white shadow-md rounded-lg p-5">
          <h3 className="text-lg font-semibold mb-3 text-[#FF9B00]">
            Account Details
          </h3>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Name:</strong> {user.displayName || 'N/A'}
            </li>
            <li>
              <strong>Email:</strong> {user.email}
            </li>
            <li>
              <strong>UID:</strong> {user.uid}
            </li>
            <li>
              <strong>Provider:</strong>{' '}
              {user.providerData[0]?.providerId || 'N/A'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
