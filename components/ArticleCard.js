import { Eye, BarChart } from 'lucide-react';

export default function ArticleCard({ imageSrc, title, category, date, status, statusColor }) {
  return (
    <div className="relative w-[300px] h-[320px] rounded-2xl overflow-hidden shadow-md bg-black text-white">
      {/* Image */}
      <div className="h-full w-full bg-gray-300">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover opacity-60"
        />
      </div>

      {/* Top Right Icons */}
      <div className="absolute top-2 right-2 flex space-x-2">
        <span className="flex items-center space-x-1 px-2 py-1 bg-white/20 rounded-lg text-xs">
          <Eye size={14} />
          <span>428</span>
        </span>
        <span className="flex items-center space-x-1 px-2 py-1 bg-white/20 rounded-lg text-xs">
          <BarChart size={14} />
        </span>
      </div>

      {/* Text Content */}
      <div className="absolute bottom-0 p-4 w-full">
        <h2 className="text-lg font-semibold leading-tight">{title}</h2>
        <div className="flex items-center mt-2 space-x-2 text-sm">
          <span className="font-bold uppercase">{category}</span>
          <span className="text-gray-300">•</span>
          <span>{date}</span>
          <span
            className={`ml-2 px-2 py-1 rounded-md text-xs font-medium ${statusColor}`}
          >
            {status}
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex space-x-2">
          <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium">
            View
          </button>
          <button className="bg-white text-black px-3 py-2 rounded-xl text-sm font-medium">
            ...
          </button>
        </div>
      </div>
    </div>
  );
}
