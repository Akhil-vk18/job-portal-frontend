import React from 'react'
import { FaSearch } from 'react-icons/fa'
function SearchBar({searchTerm,setSearchTerm,search}) {
  return (
    <div className="flex justify-center items-center gap-2">
      <FaSearch size={24} className="text-indigo-600" />
      <input
        type="text"
        className="bg-indigo-200 p-3 rounded-2xl my-4 w-96"
        placeholder="Search jobs by title...."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={search}
        className="ml-3 bg-indigo-500 text-white px-4 py-2 rounded-xl hover:bg-indigo-600"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar