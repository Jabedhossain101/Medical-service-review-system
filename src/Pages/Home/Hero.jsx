import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

const Hero = () => {
  const text = 'Welcome to Our Service System';

  const slides = [
    {
      img: 'https://i.ibb.co/LdBdY3MZ/com.jpg',
      title: 'Building a Healthier Tomorrow',
      desc: 'We are committed to providing the best healthcare services nationwide.',
    },
    {
      img: 'https://i.ibb.co/5xTJKDWH/akram-huseyn-V-0-ES17m9-Tc-unsplash.jpg',
      title: 'Connecting People with Services',
      desc: 'Your health, our priority. Discover top medical professionals today.',
    },
    {
      img: 'https://i.ibb.co.com/7xqSNDCK/image.png',
      title: 'Advanced Medical Solutions',
      desc: 'Cutting-edge technology and expert care for everyone.',
    },
  ];

  return (
    <div className="hero-container mt-16 max-w-7xl mx-auto rounded-lg">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={4000}
        showStatus={false}
        emulateTouch
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative mt-4">
            <img
              src={slide.img}
              alt={slide.title}
              className="h-[60vh] object-cover w-full"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center p-4">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {slide.title}
              </motion.h1>
              <p className="text-white max-w-2xl mb-6">{slide.desc}</p>
            
            </div>
          </div>
        ))}
      </Carousel>

      {/* Animated headline under carousel */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-[#0B1D51] mt-10"
      >
        {text.split('').map((char, idx) => (
          <motion.span
            key={idx}
            animate={{
              opacity: [1, 0.7, 1],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 1.5,
              delay: idx * 0.05,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

export default Hero;
