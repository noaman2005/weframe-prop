import { Eye, BarChart } from 'lucide-react';

export default function ArticleCard({
  imageSrc,
  title,
  category,
  date,
  status,
  statusColor,
}) {
  return (
    <div className="relative w-full max-w-[320px] sm:w-[250px] min-h-[380px] rounded-2xl overflow-hidden shadow-lg bg-black text-white">
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Top Right Stats */}
      <div className="absolute top-2 right-2 flex space-x-2 z-10">
        <span className="flex items-center space-x-1 px-2 py-1 bg-gray-500 backdrop-blur-sm rounded-md text-xs">
          <Eye size={14} />
          <span>428</span>
        </span>
        <span className="flex items-center px-2 py-1 bg-black/40 backdrop-blur-sm rounded-md text-xs">
          <BarChart size={14} />
        </span>
      </div>

      {/* Gradient Bottom Content */}
      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black via-black/60 to-transparent z-10">
        <h2 className="text-base font-semibold mb-2 leading-tight line-clamp-2">{title}</h2>

        <div className="flex flex-wrap gap-2 text-xs mb-3">
          <span className="bg-white/10 px-2 py-1 rounded-md">{category}</span>
          <span className="bg-white/10 px-2 py-1 rounded-md">{date}</span>
          <span className={`px-2 py-1 rounded-md ${statusColor}`}>{status}</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-2">
          <button className="flex-1 bg-[#e7e6fb] text-black py-2 rounded-md font-semibold text-sm">
            View
          </button>
          <button className="w-9 h-9 bg-yellow-100 text-black rounded-md font-bold text-lg flex items-center justify-center">
            ...
          </button>
        </div>
      </div>
    </div>
  );
}
