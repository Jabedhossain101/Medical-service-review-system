import React, { useRef } from 'react';

const Banner = () => {
  const scrollRef = useRef(null);

  const scroll = direction => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  const images = [
    'https://i.ibb.co/9mvVgMPR/olga-guryanova-t-MFeat-BSS4s-unsplash.jpg',

    'https://i.ibb.co/v4ZwSHLb/lucas-vasques-9vn-ACv-X2748-unsplash.jpg',

    'https://i.ibb.co/ynCtrctD/national-cancer-institute-NFvd-KIhx-Yl-U-unsplash.jpg',

    'https://i.ibb.co/cXXrdgHp/robina-weermeijer-NIu-GLCC7q54-unsplash.jpg',
  ];

  return (
    <div className="relative max-w-6xl overflow-hidden rounded-lg mx-auto ">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:bg-white"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 8 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1L1 7L7 13"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>

      {/* Carousel Images */}
      <div
        ref={scrollRef}
        className="flex w-full overflow-x-auto scroll-smooth no-scrollbar"
      >
        {images.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-full">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[80vh] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:bg-white"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 8 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Banner;
