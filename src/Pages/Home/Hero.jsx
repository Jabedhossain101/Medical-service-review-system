import React from 'react';
import { motion } from 'motion/react';
const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen mb-5 "
        style={{
          backgroundImage: 'url(https://i.ibb.co/LdBdY3MZ/com.jpg)',
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="hero">
            <div className="hero-content flex-col  lg:flex-row-reverse">
              <div className="flex-1">
                <div className="">
                  {' '}
                  <motion.img
                    src="https://i.ibb.co/67JvJw5F/national-cancer-institute-Krsoedf-RAf4-unsplash.jpg"
                    animate={{ y: [100, 50, 100] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="w-[400px] rounded-t-[20px] rounded-br-[20px] border-transparent   border-s-8 border-b-8 shadow-2x"
                  />
                  <motion.img
                    src="https://i.ibb.co/5xTJKDWH/akram-huseyn-V-0-ES17m9-Tc-unsplash.jpg"
                    animate={{ x: [150, 70, 150] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="w-[400px] h-[300px] rounded-bl-[20px]  border-blue-500  border-r-8 border-b-8 shadow-2xl"
                  />
                </div>
              </div>
              <div className="flex-1">
                <motion.h1
                  animate={{ rotate: [0, 360, 0] }}
                  className="text-5xl font-bold"
                >
                  Box Office News!
                </motion.h1>
                <label className="input bg-transparent border-2 text-white my-3">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input
                    className="text-white"
                    type="search"
                    required
                    placeholder="Search"
                  />
                </label>
                <button className="btn  bg-blue-300/20 hover:bg-blue-100 ">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
