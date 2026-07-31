"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { PhoneCall, Sparkles } from "lucide-react";

interface ServicesSectionProps {
  onBookCall?: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookCall }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const cardScale = useTransform(smoothProgress, [0, 1], [0.85, 1]);
  const cardRotateX = useTransform(smoothProgress, [0, 1], [12, 0]);
  const cardOpacity = useTransform(smoothProgress, [0, 0.6], [0, 1]);
  const textY = useTransform(smoothProgress, [0, 1], [40, 0]);

  const handleButtonClick = () => {
    if (onBookCall) {
      onBookCall();
    } else {
      window.location.href = "https://calendly.com/official-vinsou/30min";
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#FAF9F6] font-sans py-12 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#FFCC00]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-14 lg:gap-16">
          
          {/* Left Column GIF Card */}
          <motion.div 
            style={{
              scale: cardScale,
              rotateX: cardRotateX,
              opacity: cardOpacity,
              perspective: 1000,
            }}
            className="w-full flex justify-center lg:justify-start order-1"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[540px] aspect-[1120/1040] rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,204,0,0.25)] group">
              
              <div className="h-2 w-full bg-[#FFCC00]" />

              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="absolute top-4 right-4 z-20 bg-black text-[#FFCC00] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md"
              >
                <Sparkles size={14} className="animate-pulse" />
                <span className="text-[11px] font-black tracking-wider uppercase">Live Ranking</span>
              </motion.div>

              <div className="relative w-full h-[calc(100%-8px)] p-3 sm:p-5">
                <Image
                  src="/google-business-profile-ranking-animation.gif"
                  alt="Google Business Profile Ranking Boost"
                  fill
                  unoptimized
                  className="object-contain p-2 sm:p-4 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  priority
                />
              </div>

            </div>
          </motion.div>

          {/* Right Column Content */}
          <motion.div 
            style={{ y: textY }}
            className="flex flex-col items-start w-full max-w-[580px] order-2"
          >
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[32px] sm:text-[46px] md:text-[54px] lg:text-[62px] font-black text-black leading-[1.08] tracking-tight mb-4 sm:mb-6"
            >
              Our Services Help <br />
              <span className="text-black">Doctors Get More Patients</span>
            </motion.h2>

            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "70px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-2 bg-[#FFCC00] rounded-full mb-6"
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[15px] sm:text-[17px] lg:text-[18px] text-gray-800 leading-relaxed mb-8 font-normal"
            >
              We engineer local SEO strategies and Google Profile optimizations designed to put your clinic at the top of patient searches—driving steady, high-intent appointments straight to your practice.
            </motion.p>

            {/* Framer Motion Interactive Contact Us Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.button 
                onClick={handleButtonClick}
                whileHover={{ 
                  scale: 1.06, 
                  boxShadow: "0px 14px 35px rgba(255, 204, 0, 0.45)",
                  backgroundColor: "#F0C000" 
                }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="group relative inline-flex items-center gap-3 bg-[#FFCC00] text-black font-extrabold rounded-full px-9 sm:px-11 py-4 text-[13px] sm:text-[14px] uppercase tracking-wider shadow-md cursor-pointer overflow-hidden"
              >
                {/* Sheen animation */}
                <span className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                <span className="relative z-10">Contact Us</span>

                {/* Animated Phone Icon */}
                <motion.div
                  className="relative z-10 flex items-center justify-center"
                  animate={{ rotate: [0, -12, 12, -12, 12, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.2, 
                    repeatDelay: 1.5,
                    ease: "easeInOut" 
                  }}
                >
                  <PhoneCall size={18} className="transition-transform duration-300 group-hover:scale-110" />
                </motion.div>
              </motion.button>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;