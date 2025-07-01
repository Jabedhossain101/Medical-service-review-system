import React from 'react';
import { Link } from 'react-router';
import {
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';
const Footer = () => {
  const football = (
    <>
      <Link to="/">
        <li className="m-2 list-none focus:underline hover:underline">Home</li>
      </Link>
      <Link to="/all">
        <li className="m-2 list-none focus:underline hover:underline">
          All service
        </li>
      </Link>
      {/* <Link to="/addService">
        <li className="m-2 list-none focus:underline hover:underline">
          Add Service
        </li>
      </Link>
      <Link to="/myService">
        <li className="m-2 list-none focus:underline hover:underline  ">
          My Service
        </li>
      </Link>
      <Link to="/myReview">
        <li className="m-2 list-none focus:underline hover:underline  ">
          My Review
        </li>
      </Link> */}
      <Link to="/unit">
        <li className="m-2 list-none focus:underline hover:underline">Blog</li>
      </Link>
    </>
  );
  return (
    <div>
      <footer className=" bg-[#0B1D51]">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <div className="flex">
                <a className="btn bg-[#471396] text-xl font-poppins mt-4">
                  MEDI<span className="text-white">SERVICE</span>
                </a>
              </div>
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                Subscribe our service panel{' '}
                <span className="text-green-300"> to get premium</span>
              </h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-black border rounded-md 
                  bg-blue-50
                  dark:focus:border-blue-300 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#471396] rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Quick Link
              </p>

              <div className="text-white">{football}</div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Industries
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Diagnostic & Pathology Labs
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Mental Health & Therapy
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Surgical & Operation Services
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Nursing & Elderly Care
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Medical Equipment & Devices
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

          <div className="flex items-center justify-around">
            <div className="flex text-2xl text-white gap-2">
              {/* instagram */}
              <FaInstagramSquare className="bg-white rounded-lg text-red-400" />
              {/* Facebook */}
              <FaFacebookF className="bg-blue-600  rounded-md p-0.5" />
              {/* GitHub */}
              <a href="https://github.com/Jabedhossain101">
                <FaGithub />
              </a>

              {/* linkedin */}
              <a href="https://www.linkedin.com/in/mdjabedhossain12/">
                <FaLinkedin className="text-white bg-blue-800 rounded-md" />
              </a>
            </div>
          </div>
          <footer className="footer sm:footer-horizontal footer-center  text-white p-4">
            <aside>
              <p>
                Copyright © {new Date().getFullYear()} Medi Service - All right
                reserved
              </p>
              Developer By{' '}
              <a href="" className="text-blue-500 hover:underline">
                Md Jabed Hossain Rafsan
              </a>
            </aside>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
