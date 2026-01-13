import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { RxHamburgerMenu } from 'react-icons/rx';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {['/', '/about', '/all', '/doctors', '/blog', '/contact'].map(
        (path, i) => (
          <NavLink
            key={i}
            to={path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition font-semibold ${
                isActive
                  ? 'text-[#FF9B00]'
                  : 'text-white hover:text-[#FF9B00] hover:scale-105'
              }`
            }
          >
            {path === '/'
              ? 'Home'
              : path === '/about'
              ? 'About'
              : path === '/all'
              ? 'All Services'
              : path === '/doctors'
              ? 'Doctors'
              : path === '/blog'
              ? 'Blog'
              : 'Contact'}
          </NavLink>
        )
      )}
      {user && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition font-semibold ${
              isActive
                ? 'text-[#FF9B00]'
                : 'text-white hover:text-[#FF9B00] hover:scale-105'
            }`
          }
        >
          Dashboard
        </NavLink>
      )}
    </>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-extrabold flex items-center gap-1 text-white"
        >
          <span>MEDI</span>
          <span className="text-[#FF9B00]">SERVICE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">{navLinks}</div>

        {/* Right buttons / avatar */}
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <div className="dropdown dropdown-end relative">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar border border-gray-300"
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
                className="absolute right-0 mt-2 w-48 p-3 shadow-lg menu menu-sm dropdown-content bg-black/80 text-white rounded-lg backdrop-blur-md"
              >
                <li>
                  <Link
                    to="/profile"
                    className="hover:text-[#FF9B00] font-semibold"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-[#FF9B00] font-semibold"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="w-full bg-[#FF9B00] hover:bg-[#e28a00] rounded-md text-white py-2 font-semibold mt-2"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-2 rounded-md border border-white text-white hover:bg-white/10 font-semibold transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 rounded-md bg-[#FF9B00] hover:bg-[#e28a00] text-white font-semibold transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden relative">
          <button
            className="text-white text-2xl p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <RxHamburgerMenu />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-16 w-60 bg-black/90 backdrop-blur-md p-4 rounded-lg shadow-lg flex flex-col gap-3">
              {navLinks}
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="bg-[#FF9B00] hover:bg-[#e28a00] py-2 rounded-md text-white font-semibold mt-2"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="border border-white py-2 rounded-md text-white hover:bg-white/10 text-center font-semibold"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-[#FF9B00] py-2 rounded-md text-white hover:bg-[#e28a00] text-center font-semibold"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
