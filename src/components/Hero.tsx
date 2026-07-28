"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

// Instagram Icon
const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Leaf SVG Watermark
const LeafSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
    <path d="M50 0C50 0 100 25 100 60C100 80 80 100 50 100C20 100 0 80 0 60C0 25 50 0 50 0Z" opacity="0.04" />
    <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1.2" opacity="0.06" />
  </svg>
);

const Hero = () => {
  const healthcareTargets = ["Doctors", "Clinics", "Hospitals", "Practices"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Smooth word rotation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % healthcareTargets.length);
        setFade(true);
      }, 200);
    }, 2400);

    return () => clearInterval(interval);
  }, [healthcareTargets.length]);

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8F5] font-sans pt-1 sm:pt-2 lg:pt-0 pb-12 lg:pb-12 min-h-0 lg:min-h-[calc(100vh-70px)] flex items-start lg:items-center">
      
      {/* 1. BACKGROUND LEAF WATERMARK */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <LeafSVG className="w-[320px] sm:w-[450px] lg:w-[540px] h-[400px] sm:h-[550px] lg:h-[620px] text-black" />
      </div>

      {/* 2. MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10 pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-12">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="flex flex-col items-start w-full lg:max-w-[580px] z-20 pt-0">
            
            {/* Tagline */}
            <p className="text-[13px] sm:text-[15px] lg:text-[16px] text-gray-600 font-semibold mb-1 tracking-wide">
              Hi, We Are Vinsou
            </p>

            {/* Main Headline */}
            <h1 className="text-[34px] sm:text-[48px] md:text-[56px] lg:text-[70px] font-extrabold text-[#0D0D0D] leading-[1.12] tracking-tight mb-4 sm:mb-6">
              Your Trusted Advisor <br />
              <span className="inline-flex flex-wrap items-center gap-2 sm:gap-3 mt-1">
                <span>For</span>
                
                {/* AUTO-SIZING YELLOW HIGHLIGHT BADGE */}
                <span className="bg-[#FFCC00] px-3 sm:px-4 py-0.5 sm:py-1 inline-flex items-center justify-center rounded-[2px] transition-all duration-300 shadow-sm">
                  <span
                    className={`text-black font-extrabold transition-all duration-300 transform ${
                      fade
                        ? "opacity-100 translate-y-0 blur-0"
                        : "opacity-0 -translate-y-1 blur-[1px]"
                    }`}
                  >
                    {healthcareTargets[index]}
                  </span>
                </span>

              </span>
            </h1>

            {/* Social Link Buttons */}
            <div className="flex gap-3 mb-5 sm:mb-7">
              <button 
                aria-label="Instagram Profile" 
                className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] bg-[#FFCC00] rounded-[4px] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-xs"
              >
                <InstagramIcon />
              </button>
              <button 
                aria-label="Contact Us" 
                className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] bg-[#FFCC00] rounded-[4px] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-xs"
              >
                <MessageCircle size={22} className="text-black" strokeWidth={2.2} />
              </button>
            </div>

            {/* Paragraph Subtext */}
            <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-gray-900 leading-relaxed mb-6 sm:mb-8 font-medium max-w-[540px]">
              Helping{" "}
              <strong className="font-bold underline decoration-[#FFCC00] decoration-2 underline-offset-4">
                healthcare
              </strong>{" "}
              professionals elevate their{" "}
              <strong className="font-bold underline decoration-[#FFCC00] decoration-2 underline-offset-4">
                practice
              </strong>{" "}
              and connect with patients through customized digital solutions.
            </p>

            {/* Main CTA Button */}
            <button className="bg-[#FFCC00] text-black font-extrabold rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-[13px] sm:text-[14px] uppercase tracking-wider shadow-md hover:bg-[#f2c200] hover:shadow-lg transition-all active:scale-95">
              Book a Call
            </button>
          </div>

          {/* RIGHT COLUMN / MOBILE & TAB BACKGROUND OVERLAY IMAGE */}
          <div className="absolute inset-0 lg:relative lg:inset-auto flex items-end justify-end z-10 pointer-events-none lg:pointer-events-auto">
            <div className="relative w-full h-full lg:h-[620px] max-w-full lg:max-w-[540px] opacity-[0.12] sm:opacity-[0.16] lg:opacity-100 transition-opacity duration-300">
              
              {/* DESKTOP-ONLY BACKGROUND BACKDROP SHADOW */}
              <div className="hidden lg:block absolute -right-2 bottom-0 w-full h-full opacity-30 blur-[6px] pointer-events-none select-none z-0">
                <Image
                  src="/hero.png"
                  alt=""
                  fill
                  className="object-contain object-right-bottom scale-[1.03] filter brightness-0"
                  aria-hidden="true"
                />
              </div>

              {/* MAIN TEAM IMAGE */}
              <div className="relative w-full h-full z-10">
                <Image
                  src="/hero.png"
                  alt="Ads With Vinsou Team"
                  fill
                  className="object-contain object-bottom lg:object-right-bottom drop-shadow-xl"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;