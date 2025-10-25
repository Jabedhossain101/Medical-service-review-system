import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { RxHamburgerMenu } from 'react-icons/rx';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Signed out successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(console.error);
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition font-semibold ${
            isActive ? 'text-[#FF9B00]' : 'hover:text-[#FF9B00]'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition font-semibold ${
            isActive ? 'text-[#FF9B00]' : 'hover:text-[#FF9B00]'
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/all"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition font-semibold ${
            isActive ? 'text-[#FF9B00]' : 'hover:text-[#FF9B00]'
          }`
        }
      >
        All Services
      </NavLink>
      <NavLink
        to="/doctors"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition font-semibold ${
            isActive ? 'text-[#FF9B00]' : 'hover:text-[#FF9B00]'
          }`
        }
      >
        Doctors
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition font-semibold ${
            isActive ? 'text-[#FF9B00]' : 'hover:text-[#FF9B00]'
          }`
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition font-semibold ${
            isActive ? 'text-[#FF9B00]' : 'hover:text-[#FF9B00]'
          }`
        }
      >
        Contact
      </NavLink>
      {user && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition font-semibold ${
              isActive ? 'text-[#FF9B00]' : 'hover:text-[#FF9B00]'
            }`
          }
        >
          Dashboard
        </NavLink>
      )}
    </>
  );

  return (
    <div className="navbar bg-[#0B0B0B] text-white shadow-lg fixed top-0 z-50 w-full border-b border-gray-800">
      {/* Navbar Start */}
      <div className="navbar-start px-4 lg:px-8">
        {/* Mobile menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden p-2">
            <RxHamburgerMenu className="text-white text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-[#111111] text-white rounded-lg w-60 border border-gray-700 space-y-2"
          >
            {navLinks}
            <div className="border-t border-gray-600 mt-3 pt-3">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn bg-[#FF9B00] btn-sm w-full text-white font-semibold hover:bg-[#e28a00] transition"
                >
                  Sign Out
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/login"
                    className="btn btn-sm border border-gray-600 bg-transparent text-white hover:bg-gray-800 font-semibold"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-sm bg-[#FF9B00] text-white hover:bg-[#e28a00] font-semibold"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </ul>
        </div>

        {/* Brand Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide flex items-center gap-1"
        >
          <span className="text-white">MEDI</span>
          <span className="text-[#FF9B00]">SERVICE</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex space-x-3">{navLinks}</div>

      {/* Navbar End */}
      <div className="navbar-end px-4 lg:px-8">
        {user ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar border border-gray-600"
            >
              <div className="w-10 rounded-full overflow-hidden">
                <img
                  src={user.photoURL || 'https://via.placeholder.com/150'}
                  alt="User Avatar"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-3 shadow menu menu-sm dropdown-content bg-[#111111] text-white rounded-lg w-52 border border-gray-700"
            >
              <li>
                <Link
                  to="/profile"
                  className="font-semibold hover:text-[#FF9B00] transition"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="font-semibold hover:text-[#FF9B00] transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  className="btn bg-[#FF9B00] text-white hover:bg-[#e28a00] transition font-semibold mt-2"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2 rounded-md border border-gray-600 bg-transparent text-white hover:bg-gray-800 transition font-semibold"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 rounded-md bg-[#FF9B00] hover:bg-[#e28a00] text-white transition font-semibold"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
