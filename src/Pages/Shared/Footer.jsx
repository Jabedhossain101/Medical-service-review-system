import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-black text-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              MEDI<span className="text-[#FF9B00]">SERVICE</span>
            </h1>
            <p className="mt-3 text-sm leading-6">
              Providing trusted healthcare services and solutions to make your
              life healthier and easier.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all"
                  className="hover:text-indigo-600 transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm">Email: support@mediservice.com</p>
            <p className="text-sm">Phone: +880 1234 567 890</p>
            <div className="flex gap-4 mt-4 text-gray-600 text-xl">
              <a href="#" className="hover:text-pink-500 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <FaFacebookF />
              </a>
              <a
                href="https://github.com/Jabedhossain101"
                className="hover:text-gray-900 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mdjabedhossain12/"
                className="hover:text-blue-700 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Medi Service. All rights reserved. |
            Developed by{' '}
            <a
              href="https://www.linkedin.com/in/mdjabedhossain12/"
              className="text-indigo-600 hover:underline"
            >
              Md Jabed Hossain Rafsan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
