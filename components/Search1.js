import { Calendar, Filter, Search } from 'lucide-react';

export default function Search1() {
  return (
    <div className="flex justify-end items-center mt-2 flex-wrap gap-3 px-6 py-2  ">
      {/* Search input */}
      <div className="flex items-center bg-gray-50 border border-gray-300  px-4 py-2 w-72 shadow-sm">
        <Search className="w-64 h-5 text-gray-400 " />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-gray-700 w-full"
        />
      </div>

      {/* Action buttons */}
      <button className="p-2 bg-gray-100 rounded-lg shadow-sm">
        <Calendar className="w-5 h-5 text-purple-950" />
      </button>
      <button className="p-2 bg-gray-100 rounded-lg shadow-sm">
        <Filter className="w-5 h-5 text-purple-950" />
      </button>
      <button className="bg-purple-950 text-white px-5 py-2 ml-10 rounded-xl text-sm font-medium shadow-sm hover:bg-indigo-800">
        Add New Story
      </button>
    </div>
  );
}
