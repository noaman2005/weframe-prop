import { Calendar, Filter, Search } from 'lucide-react';

export default function Search1() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center items-stretch gap-3 px-4 sm:px-6 py-2 w-full">
      
      {/* Search Input */}
      <div className="flex items-center rounded-md bg-gray-50 border border-gray-300 px-4 py-2 w-full sm:w-72 shadow-sm">
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-gray-700 w-full"
        />
      </div>

      {/* Icon Buttons */}
      <div className="flex gap-2 sm:gap-2">
        <button className="p-2 bg-gray-300 rounded-lg shadow-sm">
          <Calendar className="w-5 h-5 text-purple-950" />
        </button>
        <button className="p-2 bg-gray-300 rounded-lg shadow-sm">
          <Filter className="w-5 h-5 text-purple-950" />
        </button>
      </div>

      {/* Add Button */}
      <button className="bg-[#1e154e] text-white px-5 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-indigo-800 transition w-full sm:w-auto">
        Add New Story
      </button>
    </div>
  );
}
