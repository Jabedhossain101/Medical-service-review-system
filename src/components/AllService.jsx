import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const AllService = () => {
  const [services, setServices] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('https://rafsan-service.vercel.app/service')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  const displayedServices = showAll ? services : services.slice(0, 6);

  const handleToggle = () => {
    setShowAll(prev => !prev); // Toggle showAll true/false
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {displayedServices.map(service => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      {services.length > 6 && (
        <div className="my-4 text-center">
          <button
            onClick={handleToggle}
            className="btn text-white bg-[#324495]"
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>
      )}
    </div>
  );
};

export default AllService;
