import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const AllService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/service')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {services.map(service => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
  );
};

export default AllService;
