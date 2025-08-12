import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import Search from './Search';

const AllService = () => {
  const [services, setServices] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Search & sort states:
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('titleAsc'); // default sorting

  useEffect(() => {
    fetch('https://rafsan-service.vercel.app/service')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  // Handler to update search text from Search component
  const handleSearchChange = text => {
    setSearchText(text);
  };

  // Handler to update sorting option from Search component
  const handleSortChange = option => {
    setSortOption(option);
  };

  // Filter services by serviceTitle matching searchText (case insensitive)
  const filteredServices = services.filter(service =>
    service.serviceTitle.toLowerCase().includes(searchText.toLowerCase())
  );

  // Sort filteredServices based on sortOption
  const sortedServices = filteredServices.sort((a, b) => {
    if (sortOption === 'titleAsc') {
      return a.serviceTitle.localeCompare(b.serviceTitle);
    } else if (sortOption === 'titleDesc') {
      return b.serviceTitle.localeCompare(a.serviceTitle);
    } else if (sortOption === 'categoryAsc') {
      return a.category.localeCompare(b.category);
    } else if (sortOption === 'categoryDesc') {
      return b.category.localeCompare(a.category);
    } else if (sortOption === 'companyAsc') {
      return a.companyName.localeCompare(b.companyName);
    } else if (sortOption === 'companyDesc') {
      return b.companyName.localeCompare(a.companyName);
    }
    return 0;
  });

  // Decide how many services to show
  const displayedServices = showAll
    ? sortedServices
    : sortedServices.slice(0, 5);

  return (
    <div>
      {/* Search and sort controls */}
      <Search
        searchText={searchText}
        onSearchChange={handleSearchChange}
        sortOption={sortOption}
        onSortChange={handleSortChange}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {displayedServices.length > 0 ? (
          displayedServices.map(service => (
            <ServiceCard key={service._id} service={service} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 mt-4">
            No services found.
          </p>
        )}
      </div>

      {sortedServices.length > 5 && (
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
