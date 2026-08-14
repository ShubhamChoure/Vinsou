"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollingMockup } from "./scrolling-mockup";
import { Layers, Globe, TrendingUp } from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Social Media");

  const tabs = [
    { name: "Social Media", icon: <Layers size={16} /> },
    { name: "Website Development", icon: <Globe size={16} /> },
    { name: "Google Business Manager", icon: <TrendingUp size={16} /> },
  ];

  return (
    <section id="portfolio-section" className="relative w-full bg-[#FAF9F6] py-14 sm:py-20 lg:py-28 font-sans overflow-hidden z-0">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[700px] bg-[#FFCC00]/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-black tracking-tight leading-tight">
            Explore Our Recent <br className="hidden sm:block" />
            <span className="underline decoration-[#FFCC00] decoration-4 underline-offset-4">
              Success Stories
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg mt-3 sm:mt-4 font-medium px-2">
            Take a look at how we craft elite digital experiences and drive scalable growth for our partners.
          </p>

          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 overflow-x-auto no-scrollbar px-4 -mx-4 sm:mx-0 sm:px-0 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0 ${
                  activeTab === tab.name
                    ? "bg-[#FFCC00] text-black shadow-md scale-105 ring-2 ring-[#FFCC00]/50"
                    : "bg-white text-gray-600 border border-black/10 hover:text-black hover:border-black/30 shadow-xs"
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center justify-center"
          >
            {activeTab === "Social Media" && (
              <>
                <ScrollingMockup imageSrc="/mob1.png" device="phone" />
                <ScrollingMockup imageSrc="/mob-2.png" device="phone" />
                <ScrollingMockup imageSrc="/mob-3.png" device="phone" />
              </>
            )}

            {activeTab === "Website Development" && (
              <>
                <ScrollingMockup imageSrc="/web-1.png" device="browser" />
                <ScrollingMockup imageSrc="/web-2.png" device="browser" />
                <ScrollingMockup imageSrc="/web-3.png" device="browser" />
              </>
            )}

            {activeTab === "Google Business Manager" && (
              <>
                <ScrollingMockup imageSrc="/mob1.png" device="dashboard" />
                <ScrollingMockup imageSrc="/mob-2.png" device="dashboard" />
                <ScrollingMockup imageSrc="/mob-3.png" device="dashboard" />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}