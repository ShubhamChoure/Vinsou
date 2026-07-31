"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, PhoneCall, Code2, TrendingUp, Rocket } from "lucide-react";

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

const LeafSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
    <path d="M50 0C50 0 100 25 100 60C100 80 80 100 50 100C20 100 0 80 0 60C0 25 50 0 50 0Z" opacity="0.04" />
    <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1.2" opacity="0.06" />
  </svg>
);

interface HeroProps {
  onBookCall?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
  const targetSectors = [
    "E-Commerce",
    "Local Brands",
    "Startups",
    "Retail Stores",
    "Healthcare",
    "Growing Brands",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % targetSectors.length);
        setFade(true);
      }, 200);
    }, 2400);

    return () => clearInterval(interval);
  }, [targetSectors.length]);

  const handleButtonClick = () => {
    if (onBookCall) {
      onBookCall();
    } else {
      window.location.href = "https://calendly.com/official-vinsou/30min";
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8F5] font-sans pt-6 sm:pt-10 pb-16 sm:pb-20 lg:pb-24 min-h-0 lg:min-h-[calc(100vh-80px)] flex items-center">
      
      {/* 1. DESKTOP LEAF WATERMARK */}
      <div className="hidden lg:flex absolute inset-0 pointer-events-none z-0 items-center justify-center overflow-hidden">
        <LeafSVG className="w-[540px] h-[620px] text-black" />
      </div>

      {/* 2. SUBTLE MOBILE TEAM WATERMARK */}
      <div className="lg:hidden absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-end justify-end">
        <div className="relative w-full h-[75%] opacity-10 filter grayscale contrast-125">
          <Image
            src="/hero.png"
            alt=""
            fill
            className="object-contain object-right-bottom scale-105"
            priority
            aria-hidden="true"
          />
        </div>
      </div>

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: HERO TEXT */}
          <div className="flex flex-col items-start w-full lg:max-w-[620px] z-20">
            
            <p className="text-[12px] sm:text-[14px] text-gray-600 font-bold mb-2 tracking-wider uppercase">
              Hi, We Are Vinsou
            </p>

            {/* DYNAMIC HEADLINE WITH FIXED-WIDTH BADGE (STABLE UX) */}
            <h1 className="text-[34px] sm:text-[46px] md:text-[54px] lg:text-[66px] font-extrabold text-[#0D0D0D] leading-[1.15] tracking-tight mb-5 sm:mb-6">
              Your Trusted Growth Partner <br />
              <span className="inline-flex items-center gap-2 sm:gap-3 mt-1.5 align-middle">
                <span>For</span>
                {/* FIXED MIN-WIDTH PREVENTS LAYOUT SHIFT */}
                <span className="bg-[#FFCC00] px-3 sm:px-4 py-0.5 sm:py-1 min-w-[200px] sm:min-w-[280px] text-center inline-flex items-center justify-center rounded-[4px] transition-all duration-300 shadow-xs">
                  <span
                    className={`text-black font-extrabold whitespace-nowrap transition-all duration-300 transform ${
                      fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
                    }`}
                  >
                    {targetSectors[index]}
                  </span>
                </span>
              </span>
            </h1>

            {/* HIGH-IMPACT SUBHEADLINE */}
            <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-gray-800 leading-relaxed mb-6 font-medium max-w-[540px]">
              We build <strong className="font-bold underline decoration-[#FFCC00] decoration-2 underline-offset-4">high-converting websites</strong>, execute high-ROI ad campaigns, and engineer end-to-end digital solutions that scale your revenue.
            </p>

            {/* SERVICE PILL BADGES */}
            <div className="flex flex-wrap gap-2 mb-7">
              <span className="inline-flex items-center gap-1.5 bg-white border border-black/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-2xs hover:border-black/30 transition-colors">
                <Code2 size={14} className="text-black" />
                Web & Software Dev
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-black/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-2xs hover:border-black/30 transition-colors">
                <TrendingUp size={14} className="text-black" />
                Performance Ads
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-black/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-2xs hover:border-black/30 transition-colors">
                <Rocket size={14} className="text-black" />
                Brand Scaling
              </span>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4">
              {/* MAIN CTA BUTTON */}
              <button 
                onClick={handleButtonClick}
                className="group relative inline-flex items-center gap-3 bg-[#FFCC00] text-black font-extrabold rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-[13px] sm:text-[14px] uppercase tracking-wider shadow-md hover:bg-[#f2c200] hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>Book a Call</span>
                <PhoneCall size={18} className="transition-transform duration-300 group-hover:animate-shake" />
              </button>

              {/* SOCIAL ICONS */}
              <div className="flex gap-2.5">
                <button
                  aria-label="Instagram"
                  className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] bg-[#FFCC00] rounded-[6px] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-xs"
                >
                  <InstagramIcon />
                </button>
                <button
                  aria-label="Message"
                  className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] bg-[#FFCC00] rounded-[6px] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-xs"
                >
                  <MessageCircle size={22} className="text-black" strokeWidth={2.2} />
                </button>
              </div>
            </div>

          </div>

          {/* DESKTOP FULL TEAM PHOTO */}
          <div className="hidden lg:flex w-full justify-end items-end z-10">
            <div className="relative w-full max-w-[520px] h-[580px]">
              <div className="absolute -right-2 bottom-0 w-full h-full opacity-25 blur-[6px] pointer-events-none select-none z-0">
                <Image
                  src="/hero.png"
                  alt=""
                  fill
                  className="object-contain object-right-bottom scale-[1.03] filter brightness-0"
                  aria-hidden="true"
                />
              </div>
              <Image
                src="/hero.png"
                alt="Ads With Vinsou Team"
                fill
                className="object-contain object-right-bottom drop-shadow-xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;