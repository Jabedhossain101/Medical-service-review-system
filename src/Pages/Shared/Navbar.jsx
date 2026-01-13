import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
          background: '#0B1D51',
          color: '#fff',
        });
      })
      .catch(console.error);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/all' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Dynamic Color Logic: Default e Bright Blue (blue-500), Scrolled hole White
  const textColor = scrolled ? 'text-white' : 'text-blue-500';
  const logoColor = scrolled ? 'text-white' : 'text-blue-500';

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#0B1D51]/95 backdrop-blur-lg shadow-2xl border-b border-white/10'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="/"
          className={`text-2xl md:text-3xl font-black tracking-tighter flex items-center gap-1 group transition-colors duration-500 ${logoColor}`}
        >
          <span className="group-hover:text-blue-400 transition-colors">
            MEDI
          </span>
          <span
            className={`${
              scrolled ? 'text-blue-400' : 'text-blue-600'
            } group-hover:text-white transition-colors`}
          >
            SERVICE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-500 group ${
                  isActive
                    ? scrolled
                      ? 'text-blue-400'
                      : 'text-blue-700 underline underline-offset-8'
                    : `${textColor} hover:text-blue-400`
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && scrolled && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-400 rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          {user && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-500 ${
                  isActive ? 'text-blue-400' : textColor
                }`
              }
            >
              Dashboard
            </NavLink>
          )}
        </div>

        {/* Right Action Area */}
        <div className="hidden lg:flex items-center gap-5">
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className={`btn btn-ghost btn-circle avatar border-2 transition-all p-0.5 ${
                  scrolled ? 'border-blue-400/30' : 'border-blue-500/30'
                }`}
              >
                <div className="w-10 rounded-full overflow-hidden">
                  <img
                    src={user.photoURL || 'https://via.placeholder.com/150'}
                    alt="User"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content mt-4 z-[1] p-2 shadow-2xl bg-[#0B1D51] border border-white/10 rounded-2xl w-52 backdrop-blur-xl"
              >
                <li className="px-4 py-3 border-b border-white/5 mb-2">
                  <p className="text-xs text-blue-300 font-bold uppercase">
                    Welcome
                  </p>
                  <p className="text-sm font-bold text-white truncate">
                    {user.displayName || 'User'}
                  </p>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="text-white hover:bg-white/5 py-2 px-4 rounded-lg block transition"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="w-full bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white py-2 rounded-xl text-sm font-bold transition-all mt-2"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className={`font-bold text-sm uppercase tracking-wider transition-colors duration-500 hover:text-blue-600 ${textColor}`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-500/20 transition-all transform hover:scale-105 active:scale-95"
              >
                Join Now
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden text-3xl transition-colors duration-500 ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B1D51] border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-bold uppercase tracking-widest text-lg transition-colors ${
                      isActive ? 'text-blue-400' : 'text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              {!user && (
                <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="text-white font-bold text-center py-2"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="bg-blue-500 text-white py-3 rounded-xl font-bold text-center"
                  >
                    Join Now
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
