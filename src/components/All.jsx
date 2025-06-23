import React from 'react';
import AllService from './AllService';

const All = () => {
  const portfolioItems = [
    {
      title: 'Best website collections',
      category: 'Website',
      imageUrl:
        'https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80',
    },
    {
      title: 'Block of Ui kit collections',
      category: 'Ui kit',
      imageUrl:
        'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
    {
      title: 'Ton’s of mobile mockup',
      category: 'Mockups',
      imageUrl:
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  ];
  return (
    <div>
      <div className="h-16"></div>

      <AllService></AllService>
      <section className="bg-white dark:bg-gray-900">
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
    </div>
  );
};

export default All;
