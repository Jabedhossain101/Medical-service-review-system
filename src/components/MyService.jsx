import React from 'react';
import { useLoaderData } from 'react-router';
import MyCard from './MyCard';

const MyService = () => {
  const services = useLoaderData();
  console.log(services);

  return (
    <div className="p-3">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {services.map(service => (
          <MyCard key={service._id} service={service}></MyCard>
        ))}
      </div>
    </div>
  );
};

export default MyService;
