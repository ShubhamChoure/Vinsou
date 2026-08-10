"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

// Custom Instagram Icon
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Official WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
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
    "Real Estate",
    "Healthcare",
    "Growing Brands",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Smooth rotation timer with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % targetSectors.length);
        setFade(true); 
      }, 300);
    }, 2800);

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
    <section className="relative w-full overflow-hidden bg-[#FAF9F6] font-sans pt-6 sm:pt-10 pb-16 sm:pb-20 lg:pb-24 min-h-0 lg:min-h-[calc(100vh-80px)] flex items-center z-0">
      
      {/* Soft eye-friendly background accent glow using yellow tint */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#FFCC00]/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none z-0"></div>

      {/* DESKTOP LEAF WATERMARK */}
      <div className="hidden lg:flex absolute inset-0 pointer-events-none z-0 items-center justify-center overflow-hidden">
        <LeafSVG className="w-[540px] h-[620px] text-black opacity-[0.03]" />
      </div>

      {/* SUBTLE MOBILE TEAM WATERMARK */}
      <div className="lg:hidden absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-end justify-end">
        <div className="relative w-full h-[75%] opacity-[0.08] filter grayscale contrast-125">
          <Image
            src="/herosection.png"
            alt=""
            fill
            className="object-contain object-right-bottom scale-105"
            priority
            aria-hidden="true"
          />
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: HERO TEXT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start w-full lg:max-w-[640px] z-20"
          >
            
            {/* Top label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-black/5 shadow-sm backdrop-blur-sm mb-4 sm:mb-5">
               <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-pulse"></span>
               <p className="text-[11px] sm:text-[13px] text-black font-bold tracking-widest uppercase">
                 Hi, We Are Vinsou
               </p>
            </div>

            {/* STACKED & RESPONSIVE HEADLINE */}
            <h1 className="text-[34px] sm:text-[46px] md:text-[54px] lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-tight mb-5 sm:mb-6">
              Your <br />
              Trusted Growth <br />
              Partner For <br />
              
              {/* Vibrant Yellow Dynamic Pill Box */}
              <span className={`relative inline-flex items-center justify-center w-fit bg-[#FFCC00] shadow-[0_10px_30px_rgba(255,204,0,0.3)] px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl mt-2 sm:mt-3 transition-all duration-300 ease-in-out`}>
                <span
                  className={`text-black font-extrabold whitespace-nowrap transition-all duration-300 ${
                    fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  {targetSectors[index]}
                </span>
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-black/10 pointer-events-none"></div>
              </span>
            </h1>

            {/* HIGH-IMPACT SUBHEADLINE */}
            <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-gray-800 leading-relaxed mb-8 sm:mb-9 font-medium max-w-[520px]">
              We build high-converting websites, powerful <strong className="font-extrabold underline decoration-[#FFCC00] decoration-2 underline-offset-4">CRM software</strong>, custom digital solutions, and <strong className="font-extrabold underline decoration-[#FFCC00] decoration-2 underline-offset-4">performance marketing</strong> strategies that help businesses attract customers, streamline operations, and scale revenue.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4">
              {/* PRIMARY CTA BUTTON */}
              <motion.button 
                onClick={handleButtonClick}
                whileHover={{ scale: 1.05, backgroundColor: "#F0C000", boxShadow: "0px 14px 35px rgba(255, 204, 0, 0.45)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 bg-[#FFCC00] text-black font-extrabold rounded-full px-8 sm:px-10 py-4 text-[14px] uppercase tracking-wider shadow-md cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full bg-white/30 -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                <span className="relative z-10">Book a Call</span>
                <PhoneCall size={18} className="relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              </motion.button>

              {/* SOCIAL ICONS (Instagram & WhatsApp) */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.08, backgroundColor: "#FFCC00" }}
                  whileTap={{ scale: 0.94 }}
                  aria-label="Instagram"
                  className="w-[48px] h-[48px] bg-white text-black border border-black/10 rounded-full flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                >
                  <InstagramIcon className="transition-colors duration-300" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.08, backgroundColor: "#FFCC00" }}
                  whileTap={{ scale: 0.94 }}
                  aria-label="WhatsApp"
                  className="w-[48px] h-[48px] bg-white text-black border border-black/10 rounded-full flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="transition-colors duration-300" />
                </motion.button>
              </div>
            </div>

          </motion.div>

          {/* DESKTOP FULL TEAM PHOTO */}
          <div className="hidden lg:flex w-full justify-end items-end z-10 relative">
            <div className="relative w-full max-w-[540px] h-[600px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FFCC00]/15 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none z-0"></div>
              
              <div className="absolute -right-2 bottom-0 w-full h-full opacity-20 blur-[8px] pointer-events-none select-none z-0">
                <Image
                  src="/herosection.png"
                  alt=""
                  fill
                  className="object-contain object-right-bottom scale-[1.03] filter brightness-0"
                  aria-hidden="true"
                />
              </div>
              <Image
                src="/herosection.png"
                alt="Ads With Vinsou Team"
                fill
                className="object-contain object-right-bottom drop-shadow-2xl z-10"
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