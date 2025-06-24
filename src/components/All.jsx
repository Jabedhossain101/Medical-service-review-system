import React from 'react';
import AllService from './AllService';

const All = () => {
  const portfolioItems = [
    {
      title: 'Best website collections',
      category: 'Website',
      imageUrl: 'https://i.ibb.co/hJvpFWZ2/image.png',
    },
    {
      title: 'Block of Ui kit collections',
      category: 'Ui kit',
      imageUrl: 'https://i.ibb.co/m58MS5Jz/image.png',
    },
    {
      title: 'Ton’s of mobile mockup',
      category: 'Mockups',
      imageUrl: 'https://i.ibb.co/sd4j6vCK/image.png',
    },
  ];
  return (
    <div>
      <div className="h-16"></div>

      <section className="bg-white mt-5 mx-auto dark:bg-gray-900 max-w-6xl rounded-2xl">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Portfolio
          </h1>

          <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              >
                <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AllService></AllService>
    </div>
  );
};

export default All;
