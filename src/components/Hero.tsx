"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { MorphingText } from "./ui/morphing-text";

const InstagramIcon = () => (
  <svg
    width="22"
    height="22"
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

const SpadeSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 300" fill="currentColor" className={className} aria-hidden="true">
    <path d="M100 0C100 0 200 100 200 200C200 300 100 300 100 300C100 300 0 300 0 200C0 100 100 0 100 0Z" />
    <line x1="100" y1="0" x2="100" y2="300" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const Hero = () => {
  const healthcareTargets = ["Doctors", "Clinics", "Hospitals", "Practices"];

  return (
    <section className="relative w-full overflow-hidden flex items-start md:items-center min-h-[calc(100vh-80px)] bg-[#FAF9F6]">
      {/* 1. BACKGROUND SPADE PATTERN */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <SpadeSVG className="absolute top-[-10%] right-[-5%] w-[600px] h-[800px] text-black opacity-[0.03] -rotate-12" />
        <SpadeSVG className="absolute top-[20%] left-[40%] w-[400px] h-[500px] text-black opacity-[0.02] rotate-45" />
        <SpadeSVG className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[400px] text-black opacity-[0.04] rotate-12" />
        <SpadeSVG className="absolute top-[15%] left-[5%] w-[200px] h-[300px] text-black opacity-[0.02] -rotate-6" />
      </div>

      {/* 2. MOBILE BACKGROUND PNG */}
      <div className="absolute inset-0 z-10 block md:hidden opacity-20 pointer-events-none">
        <Image
          src="/hero.png"
          alt="Healthcare Marketing Solutions Background"
          fill
          className="object-contain object-bottom drop-shadow-xl"
          priority
        />
        <div className="absolute inset-0 bg-[#FAF9F6]/50" />
      </div>

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
          {/* LEFT CONTENT COLUMN (Reduced top padding to tighten top gap) */}
          <div className="flex flex-col items-start pt-4 pb-12 md:py-8">
            <p className="text-[15px] md:text-[16px] text-gray-600 font-normal mb-3">
              Hi, We Are Vinsou
            </p>

            <h1 className="text-[42px] sm:text-[56px] md:text-[68px] lg:text-[80px] font-bold text-black leading-[1.05] tracking-tight mb-6">
              Your Trusted Advisor <br />
              <span className="flex flex-wrap items-center gap-3 md:gap-5 mt-2">
                <span>For</span>
                <span className="bg-[#FFCC00] px-4 md:px-8 inline-flex items-center justify-center min-w-[200px] md:min-w-[380px] h-[60px] md:h-[95px] rounded-[2px] overflow-hidden">
                  <MorphingText texts={healthcareTargets} />
                </span>
              </span>
            </h1>

            {/* Social Icons */}
            <div className="flex gap-3 mb-8">
              <button 
                aria-label="Instagram Profile" 
                className="w-[52px] h-[52px] bg-[#FFCC00] rounded-[3px] flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
              >
                <InstagramIcon />
              </button>
              <button 
                aria-label="Contact Us" 
                className="w-[52px] h-[52px] bg-[#FFCC00] rounded-[3px] flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
              >
                <MessageCircle size={26} className="text-black" strokeWidth={2.2} />
              </button>
            </div>

            <p className="text-[17px] md:text-[20px] text-black/90 leading-snug max-w-[550px] mb-8 font-medium">
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

            <button className="bg-[#FFCC00] text-black font-bold rounded-full px-10 py-4 md:px-12 md:py-5 text-[15px] uppercase tracking-widest shadow-lg hover:bg-[#F2C200] transition-all active:scale-95">
              Book a Call
            </button>
          </div>

          {/* RIGHT PNG IMAGE COLUMN WITH BACKGROUND WATERMARK IMAGE */}
          <div className="hidden md:flex relative w-full h-[550px] lg:h-[620px] items-end justify-center lg:justify-end">
            
            {/* GREEN MARK AREA: Large Hero PNG in Background */}
            <div className="absolute right-[-20px] bottom-0 w-[550px] lg:w-[700px] h-[550px] lg:h-[650px] opacity-15 pointer-events-none select-none z-0">
              <Image
                src="/hero.png"
                alt=""
                fill
                className="object-contain object-bottom scale-110 filter blur-[1px]"
                aria-hidden="true"
              />
            </div>

            {/* Foreground Main Image */}
            <div className="relative w-full h-full max-w-[480px] z-10">
              <Image
                src="/hero.png"
                alt="Ads With Vinsou Team"
                fill
                className="object-contain object-bottom drop-shadow-[0_20px_25px_rgba(0,0,0,0.18)]"
                priority
                sizes="(max-width: 1200px) 50vw, 600px"
              />
            </div>

            {/* Floating Chat CTA */}
            <div className="absolute bottom-6 right-0 z-30">
              <button
                aria-label="Start Chat"
                className="bg-[#FFCC00] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
              >
                <MessageCircle size={32} className="text-black fill-black" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;