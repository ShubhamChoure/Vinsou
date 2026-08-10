"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollingMockup } from "./scrolling-mockup";
import { Layers, Globe, TrendingUp } from "lucide-react";

interface PortfolioItem {
  id: number;
  img: string;
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Social Media");

  const tabs = [
    { name: "Social Media", icon: <Layers size={16} /> },
    { name: "Website Development", icon: <Globe size={16} /> },
    { name: "Google Business Manager", icon: <TrendingUp size={16} /> },
  ];

  const portfolioData: Record<string, PortfolioItem[]> = {
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
    <section id="portfolio-section" className="relative w-full bg-[#FAF9F6] py-20 lg:py-28 font-sans overflow-hidden z-0">
      
      {/* Ambient Background Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFCC00]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-[38px] sm:text-[52px] font-black text-black tracking-tight leading-tight">
            Explore Our Recent <br />
            <span className="underline decoration-[#FFCC00] decoration-4 underline-offset-4">
              Success Stories
            </span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mt-4 font-medium">
            Take a look at how we craft elite digital experiences and drive scalable growth for our partners.
          </p>

          {/* CUSTOM TABS SWITCHER */}
          <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                  activeTab === tab.name
                    ? "bg-[#FFCC00] text-black shadow-lg scale-105 ring-2 ring-[#FFCC00]/50"
                    : "bg-white text-gray-600 border border-black/10 hover:text-black hover:border-black/30 shadow-xs"
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT GRID WITH ANIMATED TRANSITIONS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 items-center justify-center"
          >
            {portfolioData[activeTab]?.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center"
              >
                {/* Mockup Display Container */}
                <div className="w-full flex justify-center">
                  <ScrollingMockup imageSrc={item.img} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}