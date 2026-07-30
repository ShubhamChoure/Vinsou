"use client";

import React, { useState } from "react";
import { ScrollingMockup } from "./scrolling-mockup";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Social Media");
  const tabs = ["Social Media", "Website Development", "Google Business Manager"];

  const socialMediaItems = [
    { id: 1, img: "/mob-1.png" },
    { id: 2, img: "/mob-2.png" },
    { id: 3, img: "/mob-3.png" },
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-24">
      {/* Aligned with Navbar/Hero gutters */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <h2 className="text-5xl md:text-7xl font-black text-black mb-16 text-center">
          Portfolio
        </h2>

        {/* Custom Tabs Switcher */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-24">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-sm md:text-base font-bold rounded-lg transition-all ${
                activeTab === tab
                  ? "bg-[#FFCC00] text-black shadow-lg scale-105"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="relative">
          {activeTab === "Social Media" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16">
              {socialMediaItems.map((item) => (
                <ScrollingMockup key={item.id} imageSrc={item.img} />
              ))}
            </div>
          ) : (
            <div className="w-full h-[500px] flex items-center justify-center border-2 border-dashed border-black/10 rounded-3xl">
               <p className="text-gray-400 font-medium italic">Case studies for {activeTab} coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;