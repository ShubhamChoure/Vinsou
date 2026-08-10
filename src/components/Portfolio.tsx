"use client";

import React, { useState } from "react";
import { ScrollingMockup } from "./scrolling-mockup";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Social Media");
  const tabs = ["Social Media", "Website Development", "Google Business Manager"];

  // Mockup data updated with mob1.png as requested
  const portfolioData: Record<string, { id: number; img: string }[]> = {
    "Social Media": [
      { id: 1, img: "/mob1.png" },
      { id: 2, img: "/mob-2.png" },
      { id: 3, img: "/mob-3.png" },
    ],
    "Website Development": [
      { id: 1, img: "/web-1.png" },
      { id: 2, img: "/web-2.png" },
      { id: 3, img: "/web-3.png" },
    ],
    "Google Business Manager": [
      { id: 1, img: "/mob1.png" },
      { id: 2, img: "/mob-2.png" },
      { id: 3, img: "/mob-3.png" },
    ],
  };

  return (
    <section className="w-full bg-[#FAF9F6] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-black text-black mb-12 text-center tracking-tight">
          Portfolio
        </h2>

        {/* Custom Tabs Switcher */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-16 sm:mb-20">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 sm:px-8 py-3 text-xs sm:text-sm font-bold rounded-full transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-[#FFCC00] text-black shadow-md scale-105"
                  : "bg-black/5 text-gray-500 hover:text-black hover:bg-black/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {portfolioData[activeTab]?.map((item) => (
            <ScrollingMockup key={item.id} imageSrc={item.img} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;