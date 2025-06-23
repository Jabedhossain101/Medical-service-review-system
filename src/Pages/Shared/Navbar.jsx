import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('sign out user');
      })
      .catch(error => {
        console.log(error);
      });
  };
  const links = (
    <>
      <Link to="/">
        <li className="m-2">Home</li>
      </Link>
      <Link to="/all">
        <li className="m-2">All Service</li>
      </Link>
      <Link to="/addService">
        <li className="m-2">Add Service</li>
      </Link>
      <Link to="/updateMango">
        <li className="m-2">My Service</li>
      </Link>
      <Link to="/users">
        <li className="m-2">All user</li>
      </Link>
      <Link to="/unit">
        <li className="m-2">Blog</li>
      </Link>
      <Link className="m-2">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className=" ">
            Hover
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              {' '}
              <div className="indicator w-[100px]">
                <img
                  alt="Tailwind CSS examples"
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                />
              </div>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </Link>
    </>
  );
  return (
    <div
      className={`navbar z-50 fixed shadow-sm max-w-7xl w-full mx-auto 
         ease-in ${isScrolled ? 'bg-[#0B1D51] shadow-md' : 'bg-transparent'}`}
    >
      <div className="navbar-start ">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden   text-2xl mr-0.5 bg-[#0B1D51]"
          >
            <RxHamburgerMenu className="text-white " />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
            <div className="flex">
              <Link to={'login'}>
                <button className="btn bg-[#090040] text-white">Login</button>
              </Link>
              <Link to={'register'}>
                <button className="btn bg-[#471396] text-white">
                  Register
                </button>
              </Link>
            </div>
          </ul>
        </div>
        <div className="flex">
          <a className="btn bg-[#FF8000] bg- text-xl">
            MEDI<span className="text-white">SERVICE</span>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white bg-[#0B1D51] rounded-2xl">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-1">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-[#471396] text-white"
          >
            sign out
          </button>
        ) : (
          <>
            <div className=" space-x-1 flex">
              <Link to={'login'}>
                <button className="btn bg-[#090040] text-white">Login</button>
              </Link>
              <Link to={'register'}>
                <button className="btn hidden md:block bg-[#471396] text-white">
                  Register
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
