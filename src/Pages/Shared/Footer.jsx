import React from 'react';
import { Link } from 'react-router';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0B1D51] text-white">
      {/* Decorative Glow Effects (Hero-r sathe match kore) */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Brand & Description */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight">
              MEDI<span className="text-blue-400">SERVICE</span>
            </h2>
            <p className="text-blue-100/70 text-base leading-relaxed">
              Empowering patients with verified reviews and world-class medical
              service discovery. Your health journey, simplified and trusted.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaInstagram />, link: '#' },
                { icon: <FaFacebookF />, link: '#' },
                {
                  icon: <FaGithub />,
                  link: 'https://github.com/Jabedhossain101',
                },
                {
                  icon: <FaLinkedin />,
                  link: 'https://www.linkedin.com/in/mdjabedhossain12/',
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:ml-10">
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-blue-400 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'All Services', path: '/all' },
                { name: 'Latest Blog', path: '/blog' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-blue-100/70 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-[1px] w-0 bg-blue-400 group-hover:w-4 transition-all mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services (Extra Column for better UI balance) */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-blue-400 pl-3">
              Support
            </h3>
            <ul className="space-y-4 text-blue-100/70">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Find a Doctor
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                How it Works
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Terms of Service
              </li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-blue-400 pl-3">
              Get in Touch
            </h3>
            <div className="flex items-start gap-4 text-blue-100/70">
              <FaEnvelope className="mt-1 text-blue-400" />
              <p>support@mediservice.com</p>
            </div>
            <div className="flex items-start gap-4 text-blue-100/70">
              <FaPhoneAlt className="mt-1 text-blue-400" />
              <p>+880 1234 567 890</p>
            </div>
            <div className="flex items-start gap-4 text-blue-100/70">
              <FaMapMarkerAlt className="mt-1 text-blue-400" />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100/50">
          <p>© {new Date().getFullYear()} Medi Service. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a
              href="https://www.linkedin.com/in/mdjabedhossain12/"
              className="text-blue-400 hover:text-white font-semibold transition-colors"
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
