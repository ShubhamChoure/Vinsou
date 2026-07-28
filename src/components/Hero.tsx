"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { MorphingText } from "./ui/morphing-text";

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const SpadeSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 300" fill="currentColor" className={className}>
    <path d="M100 0C100 0 200 100 200 200C200 300 100 300 100 300C100 300 0 300 0 200C0 100 100 0 100 0Z" />
    <line x1="100" y1="0" x2="100" y2="300" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const Hero = () => {
  const healthcareTargets = ["Doctors", "Clinics", "Hospitals", "Practices"];

  return (
    <section className="relative w-full overflow-hidden flex items-center min-h-[calc(100vh-80px)]">
      
      {/* 1. BACKGROUND SPADE CLOUD - Multiple Spades for Texture */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Right - Large */}
        <SpadeSVG className="absolute top-[-10%] right-[-5%] w-[600px] h-[800px] text-black opacity-[0.03] -rotate-12" />
        {/* Center - Medium */}
        <SpadeSVG className="absolute top-[20%] left-[40%] w-[400px] h-[500px] text-black opacity-[0.02] rotate-45" />
        {/* Bottom Left - Small */}
        <SpadeSVG className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[400px] text-black opacity-[0.04] rotate-12" />
        {/* Mid Left - Small faint */}
        <SpadeSVG className="absolute top-[15%] left-[5%] w-[200px] h-[300px] text-black opacity-[0.02] -rotate-6" />
        {/* Bottom Right - Medium */}
        <SpadeSVG className="absolute bottom-[10%] right-[15%] w-[350px] h-[450px] text-black opacity-[0.02] rotate-[100deg]" />
      </div>

      {/* 2. MOBILE BACKGROUND IMAGE LOGIC 
          On mobile: It's absolute and fills the screen.
          On desktop: It's a standard grid column.
      */}
      <div className="absolute inset-0 md:relative md:inset-auto md:w-1/2 md:h-full z-10 block md:hidden opacity-30">
        <Image 
          src="/hero.jpg" 
          alt="Background" 
          fill 
          className="object-contain object-right-bottom md:object-right-bottom" 
          priority 
        />
        {/* Mobile-only overlay to keep text readable */}
        <div className="absolute inset-0 bg-[#FAF9F6]/60 md:hidden" />
      </div>

      {/* 3. SHARED CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="flex flex-col items-start py-20 md:py-24">
            <p className="text-[15px] md:text-[16px] text-gray-500 font-normal mb-4">
              Hi, We Are Vinsou
            </p>
            
            <h1 className="text-[44px] md:text-[72px] lg:text-[86px] font-bold text-black leading-[1.05] tracking-tighter mb-8">
              Your Trusted Advisor <br />
              <div className="flex flex-wrap items-center gap-3 md:gap-5 mt-2">
                <span>For</span>
                <div className="bg-[#FFCC00] px-4 md:px-8 inline-flex items-center justify-center min-w-[200px] md:min-w-[420px] h-[65px] md:h-[105px] rounded-[2px] overflow-hidden">
                  <MorphingText texts={healthcareTargets} />
                </div>
              </div>
            </h1>

            <div className="flex gap-3 mb-10">
              <div className="w-[52px] h-[52px] bg-[#FFCC00] rounded-[3px] flex items-center justify-center shadow-sm cursor-pointer">
                <InstagramIcon />
              </div>
              <div className="w-[52px] h-[52px] bg-[#FFCC00] rounded-[3px] flex items-center justify-center shadow-sm cursor-pointer">
                <MessageCircle size={26} className="text-black" strokeWidth={2.2} />
              </div>
            </div>

            <p className="text-[17px] md:text-[20px] text-black/90 leading-tight max-w-[550px] mb-12 font-medium">
              Helping <span className="font-bold underline decoration-[#FFCC00] decoration-2 underline-offset-4">healthcare</span> professionals elevate their <span className="font-bold underline decoration-[#FFCC00] decoration-2 underline-offset-4">practice</span> and connect with patients through customized digital solutions.
            </p>

            <button className="bg-[#FFCC00] text-black font-bold rounded-full px-12 py-5 text-[15px] uppercase tracking-widest shadow-xl transition-all active:scale-95 hover:bg-[#F2C200]">
              Book a Call
            </button>
          </div>

          {/* DESKTOP SIDE IMAGE (Hidden on mobile) */}
          <div className="hidden md:flex relative w-full h-full min-h-[600px] items-end justify-end">
            <Image 
              src="/hero.jpg" 
              alt="Team Vinsou" 
              fill 
              className="object-contain object-bottom md:object-right-bottom drop-shadow-2xl" 
              priority 
            />
            
            {/* Floating Chat CTA (Desktop only) */}
            <div className="absolute bottom-10 right-0 z-30">
               <div className="bg-[#FFCC00] p-4 rounded-full shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                  <MessageCircle size={36} className="text-black fill-black" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;