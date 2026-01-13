import React, { useState, useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { Menu, X } from 'lucide-react';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = (
    <ul className="flex flex-col space-y-4">
      <li>
        <Link
          to="/dashboard"
          className={`block px-3 py-2 rounded hover:bg-[#FF9B00] hover:text-white transition ${
            location.pathname === '/dashboard'
              ? 'bg-[#FF9B00] text-white'
              : 'text-gray-800'
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/myService"
          className={`block px-3 py-2 rounded hover:bg-[#FF9B00] hover:text-white transition ${
            location.pathname === '/dashboard/myService'
              ? 'bg-[#FF9B00] text-white'
              : 'text-gray-800'
          }`}
          onClick={() => setMenuOpen(false)}
        >
          My Services
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/myReview"
          className={`block px-3 py-2 rounded hover:bg-[#FF9B00] hover:text-white transition ${
            location.pathname === '/dashboard/myReview'
              ? 'bg-[#FF9B00] text-white'
              : 'text-gray-800'
          }`}
          onClick={() => setMenuOpen(false)}
        >
          My Reviews
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/addService"
          className={`block px-3 py-2 rounded hover:bg-[#FF9B00] hover:text-white transition ${
            location.pathname === '/dashboard/addService'
              ? 'bg-[#FF9B00] text-white'
              : 'text-gray-800'
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Add Service
        </Link>
      </li>
      {user?.isAdmin && (
        <li>
          <Link
            to="/dashboard/admin"
            className={`block px-3 py-2 rounded hover:bg-[#FF9B00] hover:text-white transition ${
              location.pathname === '/dashboard/admin'
                ? 'bg-[#FF9B00] text-white'
                : 'text-gray-800'
            }`}
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
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex md:flex-col w-64 bg-white border-r border-gray-200 p-5">
        <h2 className="text-2xl font-bold mb-6 text-[#FF9B00]">Dashboard</h2>
        {menuItems}
      </aside>

      {/* Mobile header */}
      <header className="md:hidden bg-white border-b border-gray-200 flex justify-between items-center p-4">
        <h2 className="text-xl font-bold text-[#FF9B00]">Dashboard</h2>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 p-4">
          {menuItems}
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
