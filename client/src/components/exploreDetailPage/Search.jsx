import React from "react";
import Search from "../../images/search-02.png"; // Adjust the path as necessary

export default function SearchBar() {
  return (
    <div className="w-full px-6 py-4 flex justify-center">
      <div className="w-[95%] h-10 border border-gray-400 rounded-xl flex items-center px-4">

        {/* Search Icon */}
        <span className="text-gray-500 text-sm mr-3"><img src={Search} alt="Search Icon" /></span>

        {/* Input */}
        <input
          type="text"
          placeholder="Mangalore"
          className="flex-1 outline-none text-xs text-gray-700"
        />

        {/* Search Button */}
        <button className="bg-black text-white text-[10px] px-4 py-1 rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
}
