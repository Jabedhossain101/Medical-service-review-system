import React from 'react';
import AllService from './AllService';

const All = () => {
  const portfolioItems = [
    {
      title: 'Ambulance & Rescue Unit',
      category: '24/7 Ambulance Support',
      description:
        ' Our ambulance service offers fast, reliable, and 24/7 emergency transportation equipped with advanced life-saving tools. Trained medical staff ensures safe and immediate care during every ride.',

      imageUrl: 'https://i.ibb.co/hJvpFWZ2/image.png',
    },
    {
      title: 'Medical Assistance Services',
      category: '24/7 Medical Support',
      description:
        'Our medical customer service ensures prompt support and guidance for patients with care and compassion. We are committed to assisting with appointments, inquiries, and emergency coordination efficiently.',
      imageUrl: 'https://i.ibb.co/m58MS5Jz/image.png',
    },
    {
      title: 'Operation & Surgery Care',
      category: 'Advanced',
      description:
        'Our operation service ensures safe and efficient surgical procedures with the highest medical standards. Experienced surgeons and advanced equipment are used to deliver optimal patient outcomes.',
      imageUrl: 'https://i.ibb.co/sd4j6vCK/image.png',
    },
  ];
  return (
    <div>
      <div className="h-16"></div>

      <section className="bg-white mt-5 mx-auto dark:bg-gray-900 max-w-6xl rounded-2xl">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Our service
          </h1>

          <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
            Our medical service provides comprehensive healthcare solutions with
            a focus on quality, compassion, and professionalism. From diagnosis
            to treatment, we ensure personalized care for every patient.
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
                  <p className="text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <h1 className="text-center my-4 p-3 border font-bold rounded-2xl">
          All Service
        </h1>
      </div>
      <div className=" flex md:justify-around flex-col gap-4 md:flex-row justify-center mt-4 ">
        <div className="flex justify-center">
          {' '}
          <label
            className="input rounded-2xl bg-blue-50 w-[300px]
        "
          >
            <svg
              className="h-[2em] opacity-50"
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
            <input className="" type="search" required placeholder="Search" />
          </label>
        </div>
        <div className="flex justify-center">
          <select defaultValue="Pick a color" className="select rounded-2xl">
            <option disabled={true}>Select an option</option>
            <option>General</option>
            <option>Diagnostic</option>
            <option>Pregnancy</option>
          </select>
        </div>
      </div>
      <AllService></AllService>
    </div>
  );
};

export default All;
