"use client";

import React from "react";
import Image from "next/image";

interface ScrollingMockupProps {
  imageSrc: string;
}

export const ScrollingMockup = ({ imageSrc }: ScrollingMockupProps) => {
  return (
    <div className="relative w-full max-w-[280px] mx-auto aspect-[9/18.5] group cursor-pointer select-none">
      
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
        <div className="absolute top-0 left-0 w-full h-8 md:h-9 bg-black z-30 flex items-center justify-center">
          <div className="w-16 h-1 bg-white/20 rounded-full mt-1" />
        </div>

        {/* 3. Auto-Scrolling Image Container */}
        <div className="absolute top-8 md:top-9 bottom-0 left-0 right-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt="Portfolio Showcase"
            width={400}
            height={2000}
            className="absolute top-0 left-0 w-full h-auto transition-transform duration-[6000ms] ease-in-out group-hover:-translate-y-[calc(100%-420px)]"
            priority
          />
        </div>
      </div>

    </div>
  );
};