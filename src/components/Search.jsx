import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <div>
      <div className=" flex md:justify-around flex-col gap-4 md:flex-row justify-center mt-4 ">
        <form
          onSubmit={e => handleSearch(e, searchText)}
          className="flex
        flex-col md:flex-row justify-center items-center mb-4 md:px-24"
        >
          <div className="flex">
            <div>
              <input
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                type="text"
                placeholder="Search"
                className="bg-white border rounded-xl shadow-mdw-2/3 h-12 px-4 mb-4 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0"
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn  p-6 rounded-xl bg-blue-900 text-white"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="flex justify-center">
          <select defaultValue="Pick a color" className="select rounded-2xl">
            <option disabled={true}>Select an option</option>
            <option>Title</option>
            <option>category</option>
            <option>Company name</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
