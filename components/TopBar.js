import { ChevronDown, ArrowLeft } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="flex justify-between items-center px-4 py-1 bg-white shadow-sm">
      <div className="flex items-center ml-1 space-x-2">
        <ArrowLeft className="w-5 h-5 text-black" />
        <span className="text-lg font-semibold text-black">Stories</span>
      </div>

      <div className="flex items-center space-x-3 bg-white px-4 py-1 rounded-lg shadow border">
        <img
          src="https://api.dicebear.com/7.x/adventurer/svg?seed=Akshita"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <div className="text-sm">
          <p className="text-xs text-gray-500">Welcome back.</p>
          <p className="font-medium text-gray-900">Akshita Patel</p>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>
    </div>
  );
}
