import React from 'react';
import { useLoaderData } from 'react-router';
import MyCard from './MyCard';

const MyService = () => {
  const services = useLoaderData();
  console.log(services);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3 justify-center">
        {services.map(service => (
          <MyCard key={service._id} service={service}></MyCard>
        ))}
      </div>
    </div>
  );
};

export default MyService;
