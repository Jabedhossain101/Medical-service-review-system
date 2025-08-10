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

  const displayedServices = showAll ? services : services.slice(0, 5);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {displayedServices.map(service => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      {services.length > 6 && (
        <div className="my-4 text-center">
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="btn text-white bg-[#FF9B10]"
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>
      )}
    </div>
  );
};

export default AllService;
