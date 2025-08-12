import React from 'react';

const Search = ({ searchText, onSearchChange, sortOption, onSortChange }) => {
  const handleInputChange = e => {
    onSearchChange(e.target.value);
  };

  const handleSortSelect = e => {
    onSortChange(e.target.value);
  };

  return (
    <div>
      <div className="flex md:justify-around flex-col gap-3 md:flex-row justify-center mt-4">
        <form
          onSubmit={e => e.preventDefault()} // prevent submit reload
          className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24"
        >
          <input
            value={searchText}
            onChange={handleInputChange}
            type="text"
            placeholder="Search by title..."
            className="bg-white border rounded-xl shadow-md w-64 h-12 px-4 mb-4 focus:outline-none focus:shadow-outline md:mb-0"
          />

          <select
            value={sortOption}
            onChange={handleSortSelect}
            className="select rounded-2xl ml-0 md:ml-4 px-4 py-2"
          >
            <option value="titleAsc">Title: A to Z</option>
            <option value="titleDesc">Title: Z to A</option>
            <option value="categoryAsc">Category: A to Z</option>
            <option value="categoryDesc">Category: Z to A</option>
            <option value="companyAsc">Company: A to Z</option>
            <option value="companyDesc">Company: Z to A</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Search;
