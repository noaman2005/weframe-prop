import React, { useState } from "react";

const tabs = [
  { label: "All", count: 4500 },
  { label: "Draft", count: 1203 },
  { label: "Pending", count: 890 },
  { label: "Published", count: 2432 },
  { label: "Archived", count: 320 },
];

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex flex-wrap gap-2 text-sm sm:text-base px-2 sm:px-0">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-all
              ${
                activeTab === tab.label
                  ? "bg-[#1B103E] text-white"
                  : "bg-[#ECECF2] text-black hover:bg-[#ddd]"
              }`}
          >
            {tab.label}
            <span
              className={`ml-1 ${
                activeTab === tab.label ? "text-white" : "text-gray-500"
              }`}
            >
              ({tab.count.toLocaleString()})
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabMenu;
