"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress Animations for 3D Reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  // Dynamic transforms based on scroll position
  const cardScale = useTransform(smoothProgress, [0, 1], [0.82, 1]);
  const cardRotateX = useTransform(smoothProgress, [0, 1], [15, 0]);
  const cardOpacity = useTransform(smoothProgress, [0, 0.6], [0, 1]);
  const textY = useTransform(smoothProgress, [0, 1], [60, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#FAF8F5] font-sans py-12 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* BACKGROUND GLOW SPOTLIGHT EFFECT */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#FFCC00]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-14 lg:gap-16">
          
          {/* LEFT COLUMN: 3D SCROLL-REVEAL GIF CARD */}
          <motion.div 
            style={{
              scale: cardScale,
              rotateX: cardRotateX,
              opacity: cardOpacity,
              perspective: 1000,
            }}
            className="w-full flex justify-center lg:justify-start order-1"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[540px] aspect-[1120/1040] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white/90 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,204,0,0.25)] group">
              
              {/* Dynamic Yellow Top Glow Line */}
              <div className="h-2 w-full bg-gradient-to-r from-[#FFCC00] via-[#FFE57F] to-[#FFCC00]" />

              {/* Floating Sparkle Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="absolute top-4 right-4 z-20 bg-black text-[#FFCC00] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md"
              >
                <Sparkles size={14} className="animate-pulse" />
                <span className="text-[11px] font-black tracking-wider uppercase">Live Ranking</span>
              </motion.div>

              {/* Animated GIF Container */}
              <div className="relative w-full h-[calc(100%-8px)] p-3 sm:p-5">
                <Image
                  src="/google-business-profile-ranking-animation.gif"
                  alt="Google Business Profile Ranking Boost"
                  fill
                  unoptimized
                  className="object-contain p-2 sm:p-4 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority
                />
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: HIGH-ENERGY STAGGERED TEXT */}
          <motion.div 
            style={{ y: textY }}
            className="flex flex-col items-start w-full max-w-[580px] order-2"
          >
            
            {/* Animated Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[32px] sm:text-[46px] md:text-[54px] lg:text-[62px] font-extrabold text-[#0D0D0D] leading-[1.08] tracking-tight mb-4 sm:mb-6"
            >
              Our Services Help <br />
              <span className="text-black">Doctors Get More Patients</span>
            </motion.h2>

            {/* Glowing Yellow Divider Line */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-2 bg-[#FFCC00] rounded-full mb-6 shadow-[0_0_15px_rgba(255,204,0,0.6)]"
            />

            {/* Subtext Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[15px] sm:text-[17px] lg:text-[19px] text-gray-800 leading-relaxed mb-8 font-normal"
            >
              We engineer local SEO strategies and Google Profile optimizations designed to put your clinic at the top of patient searches—driving steady, high-intent appointments straight to your practice.
            </motion.p>

            {/* Magnetic CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className="group relative inline-flex items-center gap-3 bg-[#FFCC00] text-black font-extrabold rounded-full px-9 sm:px-11 py-4 sm:py-4.5 text-[13px] sm:text-[15px] uppercase tracking-wider shadow-lg hover:bg-[#f2c200] hover:shadow-[0_10px_25px_rgba(255,204,0,0.4)] transition-all duration-300 active:scale-95">
                <span>Contact Us</span>
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;