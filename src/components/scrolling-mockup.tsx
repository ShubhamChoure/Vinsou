"use client";

import React from "react";
import Image from "next/image";

interface ScrollingMockupProps {
  imageSrc: string;
}

export const ScrollingMockup = ({ imageSrc }: ScrollingMockupProps) => {
  return (
    <div className="relative w-full max-w-[260px] mx-auto aspect-[9/18.5] group cursor-pointer">
      
      {/* 1. Phone Frame SVG Overlay (Highest Z-index) */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <Image 
          src="/mobile-mockup.svg" 
          alt="Phone Frame" 
          fill 
          className="object-contain"
        />
      </div>

      {/* 2. The Screen Container */}
      <div className="absolute inset-[2.5%] z-10 overflow-hidden rounded-[2.2rem] md:rounded-[2.6rem] bg-black">
        
        {/* BLACK STATUS BAR / NOTCH AREA */}
        {/* This stays fixed at the top and hides the image behind it */}
        <div className="absolute top-0 left-0 w-full h-7 md:h-9 bg-black z-30 flex items-center justify-center">
            {/* Subtle notch detail */}
            <div className="w-16 h-1 bg-white/10 rounded-full mt-1" />
        </div>

        {/* 3. The Actual Scrolling Content Area */}
        {/* We push this area down by h-7/h-9 so the image starts below the black area */}
        <div className="absolute top-7 md:top-9 bottom-0 left-0 right-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt="Portfolio Screenshot"
            width={400}
            height={1500}
            className="absolute top-0 left-0 w-full h-auto transition-transform duration-[7000ms] ease-in-out transform translate-y-0 group-hover:-translate-y-[calc(100%-100%)]"
            priority
          />
        </div>
      </div>

      <style jsx>{`
        /* 
           This CSS ensures the image scrolls to the very bottom 
           regardless of the image's total height.
        */
        .group:hover img {
          transform: translateY(calc(-100% + 100%)) !important;
        }
      `}</style>
    </div>
  );
};