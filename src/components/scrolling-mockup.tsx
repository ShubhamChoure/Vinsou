"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ScrollingMockupProps {
  imageSrc: string;
}

export const ScrollingMockup = ({ imageSrc }: ScrollingMockupProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Handles both mobile tap and desktop interaction
  const handleToggleScroll = () => {
    setIsScrolled(!isScrolled);
  };

  return (
    <div 
      onClick={handleToggleScroll}
      className="relative w-full max-w-[280px] mx-auto aspect-[9/18.5] group cursor-pointer select-none"
    >
      
      {/* 1. Phone Frame SVG Overlay */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <Image 
          src="/mobile-mockup.svg" 
          alt="Phone Frame" 
          fill 
          className="object-contain"
        />
      </div>

      {/* 2. The Screen Container */}
      <div className="absolute inset-[2.8%] z-10 overflow-hidden rounded-[2.2rem] md:rounded-[2.6rem] bg-black">
        
        {/* Fixed Top Status Bar / Notch */}
        <div className="absolute top-0 left-0 w-full h-8 md:h-9 bg-black z-30 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-1 bg-white/20 rounded-full mt-1" />
        </div>

        {/* 3. Auto-Scrolling Image Container */}
        <div className="absolute top-8 md:top-9 bottom-0 left-0 right-0 overflow-hidden">
          {!hasError ? (
            <Image
              src={imageSrc}
              alt="Portfolio Showcase"
              width={400}
              height={2000}
              priority
              onError={() => setHasError(true)}
              className={`absolute top-0 left-0 w-full h-auto transition-transform duration-[6000ms] ease-in-out ${
                isScrolled 
                  ? "-translate-y-[calc(100%-420px)]" 
                  : "group-hover:-translate-y-[calc(100%-420px)]"
              }`}
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center text-neutral-400 h-full">
              <p className="text-xs font-bold text-red-500 mb-1">Image Not Found</p>
              <p className="text-[10px] break-all">Check if &quot;{imageSrc}&quot; exists in your public folder.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};