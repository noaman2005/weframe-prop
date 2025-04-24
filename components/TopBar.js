'use client';

import { ChevronDown, ArrowLeft } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="flex justify-between items-center px-4 py-3 bg-gray-100 shadow-sm w-full gap-3">
      {/* Left - Back + Title */}
      <div className="flex items-center space-x-2">
        <ArrowLeft className="w-5 h-5 text-black sm:hidden" />
        <span className="text-lg font-semibold text-purple-950">Stories</span>
      </div>

      {/* Right - Avatar Section */}
      <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow border">
        <img
          src="https://api.dicebear.com/7.x/adventurer/svg?seed=Akshita"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        {/* Text visible only on larger screens */}
        <div className="hidden sm:flex flex-col text-sm">
          <span className="text-xs text-gray-500">Welcome back.</span>
          <span className="font-medium text-gray-900">Akshita Patel</span>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>
    </div>
  );
}
