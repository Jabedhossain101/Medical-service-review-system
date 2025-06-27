import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Make sure you're using `framer-motion`, not `motion/react`

const Hero = () => {
  const text = 'This is our nation';

  // ✅ Step 1: Background images list (you can change these URLs)
  const backgroundImages = [
    'https://i.ibb.co/LdBdY3MZ/com.jpg',
    'https://i.ibb.co/5xTJKDWH/akram-huseyn-V-0-ES17m9-Tc-unsplash.jpg',
    'https://i.ibb.co/67JvJw5F/national-cancer-institute-Krsoedf-RAf4-unsplash.jpg',
  ];

  const [bgIndex, setBgIndex] = useState(0);

  // ✅ Step 2: Change background every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prevIndex =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-20"></div>
      <div
        className="hero rounded-2xl min-h-screen mb-5 transition-all duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay bg-black/40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="hero">
            <div className="hero-content flex-col  lg:flex-row-reverse">
              <div className="flex-1">
                <div className="">
                  <motion.img
                    src="https://i.ibb.co/67JvJw5F/national-cancer-institute-Krsoedf-RAf4-unsplash.jpg"
                    animate={{ y: [100, 50, 100] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="w-[400px] rounded-t-[20px] rounded-br-[20px] border-transparent border-s-8 border-b-8 shadow-2xl"
                  />
                  {/* <motion.img
                    src="https://i.ibb.co/5xTJKDWH/akram-huseyn-V-0-ES17m9-Tc-unsplash.jpg"
                    animate={{ x: [20, 0, 20] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="w-[400px] h-[300px] rounded-bl-[20px] border-blue-500 border-r-8 border-b-8 shadow-2xl"
                  /> */}
                </div>
              </div>
              <div className="flex-1">
                <motion.h1
                  className="text-5xl font-bold text-white mb-6 flex flex-wrap justify-center"
                  aria-label={text}
                >
                  {text.split('').map((char, idx) => (
                    <motion.span
                      key={idx}
                      animate={{
                        opacity: [1],
                        y: [20, 0],
                        x: [0, 20, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: idx * 0.2,
                        repeat: Infinity,
                        repeatType: 'loop',
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
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
                <button className="btn bg-blue-300/20 hover:bg-blue-100">
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
