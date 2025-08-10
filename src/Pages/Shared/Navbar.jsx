import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { RxHamburgerMenu } from 'react-icons/rx';
import Swal from 'sweetalert2';
import Avatar from '../../components/Avatar';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  // Sign out handler
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

  // Navbar Links
  const links = (
    <>
      <Link to="/">
        <li className="m-2 hover:text-secondary transition font-bold">Home</li>
      </Link>
      <Link to="/all">
        <li className="m-2 hover:text-secondary transition font-bold">
          All Services
        </li>
      </Link>
      {user && (
        <>
          <Link to="/addService">
            <li className="m-2 hover:text-secondary transition font-bold">
              Add Service
            </li>
          </Link>
          <Link to="/myService">
            <li className="m-2 hover:text-secondary transition font-bold">
              My Services
            </li>
          </Link>
          <Link to="/myReview">
            <li className="m-2 hover:text-secondary transition font-bold">
              My Reviews
            </li>
          </Link>
        </>
      )}
      <Link to="/blog">
        <li className="m-2 hover:text-secondary transition font-bold">Blog</li>
      </Link>
    </>
  );

  return (
    <div className="navbar fixed top-0 z-50 w-full bg-black text-white shadow-md">
      {/* Navbar Start */}
      <div className="navbar-start px-4 lg:px-8">
        {/* Mobile menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden p-2">
            <RxHamburgerMenu className="text-white text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-white text-black rounded-none w-screen border border-gray-200"
          >
            {links}
            <div className="mt-3">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn btn-error btn-sm w-full text-white font-bold"
                >
                  Sign Out
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/login"
                    className="btn btn-primary btn-sm font-bold"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-secondary btn-sm font-bold"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </ul>
        </div>

        {/* Brand Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          MEDI<span className="text-secondary">SERVICE</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end px-4 lg:px-8">
        {user ? (
          <div className="flex items-center gap-3">
            <Avatar />
            <button
              onClick={handleSignOut}
              className="btn btn-outline btn-sm border-white text-white hover:bg-white hover:text-black"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-secondary btn-sm hidden md:inline-block"
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
