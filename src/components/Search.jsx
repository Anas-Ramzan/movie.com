import React from 'react';

const Search = ({ Searchterm, setSearchterm }) => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center w-full max-w-xl bg-[#1A1736] px-4 py-3 rounded-2xl shadow-md">
        <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 101.5 1.5a7.5 7.5 0 0015 15z" />
        </svg>
        <input
          type="text"
          placeholder="Search through 300+ movies online"
          value={Searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
          className="w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
