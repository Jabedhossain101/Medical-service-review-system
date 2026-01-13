import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import Search from './Search';

const AllService = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  // Search & sort states
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('titleAsc');

  useEffect(() => {
    fetch('https://rafsan-service.vercel.app/service')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Search handler
  const handleSearchChange = text => {
    setSearchText(text);
    setShowAll(false);
  };

  // Sort handler
  const handleSortChange = option => {
    setSortOption(option);
  };

  // Filter services
  const filteredServices = services.filter(service =>
    service.serviceTitle.toLowerCase().includes(searchText.toLowerCase())
  );

  // Safe sorting (no mutation)
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortOption) {
      case 'titleAsc':
        return a.serviceTitle.localeCompare(b.serviceTitle);
      case 'titleDesc':
        return b.serviceTitle.localeCompare(a.serviceTitle);
      case 'categoryAsc':
        return a.category.localeCompare(b.category);
      case 'categoryDesc':
        return b.category.localeCompare(a.category);
      case 'companyAsc':
        return a.companyName.localeCompare(b.companyName);
      case 'companyDesc':
        return b.companyName.localeCompare(a.companyName);
      default:
        return 0;
    }
  });

  // Pagination logic
  const displayedServices = showAll
    ? sortedServices
    : sortedServices.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Search & Sort */}
      <div className="mb-8">
        <Search
          searchText={searchText}
          onSearchChange={handleSearchChange}
          sortOption={sortOption}
          onSortChange={handleSortChange}
        />
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-500 py-10">Loading services...</p>
      )}

      {/* Empty State */}
      {!loading && sortedServices.length === 0 && (
        <p className="text-center text-gray-500 py-10">No services found.</p>
      )}

      {/* Info text */}
      {!loading && sortedServices.length > 0 && (
        <p className="text-center text-sm text-gray-500 mb-6">
          Showing {displayedServices.length} of {sortedServices.length} services
        </p>
      )}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedServices.map(service => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      {/* Show All Button */}
      {!loading && sortedServices.length > 6 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="px-8 py-3 rounded-lg font-semibold text-white
                       bg-gradient-to-r from-orange-400 to-orange-500
                       hover:opacity-90 transition"
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>
      )}
    </section>
  );
};

export default AllService;
