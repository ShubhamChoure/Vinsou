"use client";

import React from "react";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className="relative w-full bg-[#FAF8F5] font-sans py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          
          {/* LEFT COLUMN: ANIMATED GOOGLE BUSINESS PROFILE GIF */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[560px] aspect-[1120/1040] rounded-2xl overflow-hidden shadow-xs border border-gray-100/80 bg-white">
              <Image
                src="/google-business-profile-ranking-animation.gif"
                alt="Google Business Profile Ranking Animation"
                fill
                unoptimized
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: HEADLINE, DESCRIPTION & CTA */}
          <div className="flex flex-col items-start w-full max-w-[580px]">
            
            {/* Headline */}
            <h2 className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-extrabold text-[#0D0D0D] leading-[1.12] tracking-tight mb-4 sm:mb-5">
              Our Services Help <br />
              <span>Doctors Get More Patients</span>
            </h2>

            {/* Accent Yellow Bar */}
            <div className="w-16 h-1.5 bg-[#FFCC00] rounded-full mb-6 sm:mb-7"></div>

            {/* Description Text */}
            <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-gray-800 leading-relaxed mb-6 sm:mb-8 font-normal">
              We&apos;ve combined 11+ years of Google Business Profile expertise with proven patient growth strategies — designed only for doctors and clinics.
            </p>

            {/* CTA Button */}
            <button className="bg-[#FFCC00] text-black font-extrabold rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-[13px] sm:text-[14px] uppercase tracking-wider shadow-md hover:bg-[#f2c200] hover:shadow-lg transition-all active:scale-95">
              Contact Us
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;