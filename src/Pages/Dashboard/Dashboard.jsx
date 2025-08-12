import React, { useState, useContext } from 'react';
import { Link, Outlet } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { Menu, X } from 'lucide-react'; 
import { IoHomeSharp } from 'react-icons/io5';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = (
    <ul className="flex flex-col space-y-4">
      <li>
        <Link
          to="/dashboard"
          className="hover:text-[#FF9B00] block"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/myService"
          className="hover:text-[#FF9B00] block"
          onClick={() => setMenuOpen(false)}
        >
          My Services
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/myReview"
          className="hover:text-[#FF9B00] block"
          onClick={() => setMenuOpen(false)}
        >
          My Reviews
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/addService"
          className="hover:text-[#FF9B00] block"
          onClick={() => setMenuOpen(false)}
        >
          Add Service
        </Link>
      </li>
      {user?.isAdmin && (
        <li>
          <Link
            to="/dashboard/admin"
            className="hover:text-[#FF9B00] block"
            onClick={() => setMenuOpen(false)}
          >
            Admin Panel
          </Link>
        </li>
      )}
    </ul>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar for large screens */}
      <aside className="hidden md:flex md:flex-col w-64 bg-black text-white p-5">
        <Link to={'/'}>
          <IoHomeSharp className="text-2xl " />
        </Link>
        <h2 className="text-2xl font-bold mb-6 text-[#FF9B00]">Dashboard</h2>
        {menuItems}
      </aside>

      {/* Mobile top navbar */}
      <header className="md:hidden bg-black text-white flex justify-between items-center p-4">
        <h2 className="text-xl flex font-bold text-[#FF9B00]">
          <Link to={'/'} className="mr-2">
            <IoHomeSharp className="text-white mt-1" />
          </Link>
          <span> Dashboard</span>
        </h2>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white p-4 border-t border-gray-700">
          {menuItems}
        </div>
      )}

      {/* Main content area */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
