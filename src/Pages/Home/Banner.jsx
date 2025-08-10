import React, { useEffect, useState } from 'react';

const Banner = () => {
  const slides = [
    {
      image:
        'https://i.ibb.co/9mvVgMPR/olga-guryanova-t-MFeat-BSS4s-unsplash.jpg',
      title: 'Caring For Life',
      description: 'We provide world-class medical services with compassion.',
      buttonText: 'Explore Services',
    },
    {
      image:
        'https://i.ibb.co/v4ZwSHLb/lucas-vasques-9vn-ACv-X2748-unsplash.jpg',
      title: 'Trusted Professionals',
      description: 'Experienced doctors and advanced medical support.',
      buttonText: 'Meet Our Team',
    },
    {
      image:
        'https://i.ibb.co/ynCtrctD/national-cancer-institute-NFvd-KIhx-Yl-U-unsplash.jpg',
      title: 'Modern Facilities',
      description: 'State-of-the-art equipment for accurate treatment.',
      buttonText: 'Take a Tour',
    },
    {
      image:
        'https://i.ibb.co/cXXrdgHp/robina-weermeijer-NIu-GLCC7q54-unsplash.jpg',
      title: 'Emergency Ready',
      description: '24/7 emergency support and quick response.',
      buttonText: 'Get Help Now',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <div className="h-16"></div>
      <div className="relative max-w-7xl mx-auto h-[80vh] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out
              ${
                index === currentIndex
                  ? 'opacity-100 translate-y-0 z-10'
                  : 'opacity-0 translate-y-10 z-0'
              }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 drop-shadow">
                {slide.title}
              </h2>
              <p className="text-lg sm:text-xl max-w-xl mb-4 drop-shadow">
                {slide.description}
              </p>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
