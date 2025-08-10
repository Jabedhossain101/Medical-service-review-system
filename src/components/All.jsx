import React, { useState, useEffect } from 'react';
import AllService from './AllService';
import Search from './Search';
import { useLoaderData } from 'react-router';

const All = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    setFilteredServices(data); // shuru te sob dekhanor jonno
  }, [data]);

  // Simulate data loading delay (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (e, text) => {
    e.preventDefault();
    const searchText = text.toLowerCase();
    const searchServices = data.filter(
      service =>
        service.serviceTitle.toLowerCase().includes(searchText) ||
        service.companyName.toLowerCase().includes(searchText)
    );
    setFilteredServices(searchServices);
  };

  const portfolioItems = [
    {
      title: 'Ambulance & Rescue Unit',
      category: '24/7 Ambulance Support',
      description:
        'Our ambulance service offers fast, reliable, and 24/7 emergency transportation equipped with advanced life-saving tools. Trained medical staff ensures safe and immediate care during every ride.',
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

  // If still loading
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="h-16"></div>

      <section className=" bg-white my-8 max-w-7xl mx-auto rounded-xl shadow-md">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-black capitalize lg:text-3xl ">
            Our service
          </h1>

          <p className="mt-4 text-center text-gray-500 dark:text-gray-800">
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
      <Search handleSearch={handleSearch}></Search>
      <AllService services={filteredServices}></AllService>
    </div>
  );
};

export default All;
