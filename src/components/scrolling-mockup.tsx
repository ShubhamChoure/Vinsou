"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ScrollingMockupProps {
  imageSrc: string;
  device?: "phone" | "browser" | "dashboard";
}

export const ScrollingMockup = ({ imageSrc, device = "phone" }: ScrollingMockupProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleToggleScroll = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setIsScrolled((prev) => !prev);
  };

  // 1. WEBSITE DEVELOPMENT (Modern Desktop Browser Window Frame)
  if (device === "browser") {
    return (
      <div 
        onClick={handleToggleScroll}
        onMouseLeave={() => setIsScrolled(false)}
        className="relative w-full max-w-[360px] sm:max-w-[400px] mx-auto aspect-[4/5] group cursor-pointer select-none rounded-[1.75rem] bg-zinc-900 p-2.5 shadow-2xl border border-white/10 overflow-hidden"
      >
        {/* Browser Top Header Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-zinc-950 rounded-t-[1.25rem] mb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="bg-zinc-900 text-zinc-400 text-[10px] px-4 py-0.5 rounded-md font-mono tracking-wide border border-white/5 truncate max-w-[180px]">
            vinsou.com/project
          </div>
          <div className="w-4" />
        </div>

        {/* Screen Content Window */}
        <div className="relative w-full h-[calc(100%-40px)] bg-white rounded-xl overflow-hidden shadow-inner">
          {!hasError ? (
            <Image
              src={imageSrc}
              alt="Website Showcase"
              width={900}
              height={3000}
              priority
              onError={() => setHasError(true)}
              className={`absolute top-0 left-0 w-full h-auto transition-transform duration-[6000ms] ease-in-out ${
                isScrolled 
                  ? "-translate-y-[calc(100%-350px)]" 
                  : "group-hover:-translate-y-[calc(100%-350px)]"
              }`}
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center text-zinc-400 h-full">
              <p className="text-xs font-bold text-red-500 mb-1">Image Not Found</p>
              <p className="text-[10px]">&quot;{imageSrc}&quot;</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 2. GOOGLE BUSINESS MANAGER (Clean Professional Mobile/Dashboard Frame)
  if (device === "dashboard") {
    return (
      <div 
        onClick={handleToggleScroll}
        onMouseLeave={() => setIsScrolled(false)}
        className="relative w-full max-w-[360px] sm:max-w-[400px] mx-auto aspect-[4/5] group cursor-pointer select-none rounded-[1.75rem] bg-zinc-900 p-2.5 shadow-2xl border border-white/10 overflow-hidden"
      >
        {/* Dashboard Top Header Bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-zinc-950 rounded-t-[1.25rem] mb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FFCC00]" />
            <span className="text-xs font-bold text-white tracking-wide">Google Business Suite</span>
          </div>
          <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-bold">Optimized</span>
        </div>

        {/* Screen Content Window */}
        <div className="relative w-full h-[calc(100%-40px)] bg-black rounded-xl overflow-hidden shadow-inner">
          {!hasError ? (
            <Image
              src={imageSrc}
              alt="Business Manager Showcase"
              width={900}
              height={3000}
              priority
              onError={() => setHasError(true)}
              className={`absolute top-0 left-0 w-full h-auto transition-transform duration-[6000ms] ease-in-out ${
                isScrolled 
                  ? "-translate-y-[calc(100%-350px)]" 
                  : "group-hover:-translate-y-[calc(100%-350px)]"
              }`}
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center text-zinc-400 h-full">
              <p className="text-xs font-bold text-red-500 mb-1">Image Not Found</p>
              <p className="text-[10px]">&quot;{imageSrc}&quot;</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 3. SOCIAL MEDIA (Mobile Phone Mockup Frame)
  return (
    <div 
      onClick={handleToggleScroll}
      onMouseLeave={() => setIsScrolled(false)}
      className="relative w-full max-w-[280px] mx-auto aspect-[9/18.5] group cursor-pointer select-none"
    >
      <div className="absolute inset-0 z-40 pointer-events-none">
        <Image 
          src="/mobile-mockup.svg" 
          alt="Phone Frame" 
          fill 
          className="object-contain"
        />
      </div>
      <div className="absolute inset-[2.8%] z-10 overflow-hidden rounded-[2.2rem] md:rounded-[2.6rem] bg-black">
        <div className="absolute top-0 left-0 w-full h-8 md:h-9 bg-black z-30 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-1 bg-white/20 rounded-full mt-1" />
        </div>
        <div className="absolute top-8 md:top-9 bottom-0 left-0 right-0 overflow-hidden">
          {!hasError ? (
            <Image
              src={imageSrc}
              alt="Phone Showcase"
              width={400}
              height={2000}
              priority
              onError={() => setHasError(true)}
              className={`absolute top-0 left-0 w-full h-auto transition-transform duration-[4000ms] ease-in-out ${
                isScrolled 
                  ? "-translate-y-[calc(100%-420px)]" 
                  : "group-hover:-translate-y-[calc(100%-420px)]"
              }`}
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center text-neutral-400 h-full">
              <p className="text-xs font-bold text-red-500 mb-1">Image Not Found</p>
              <p className="text-[10px] break-all">&quot;{imageSrc}&quot;</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};