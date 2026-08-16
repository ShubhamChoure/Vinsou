"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, PhoneCall, Globe, Share2 } from "lucide-react";

interface PricingSectionProps {
  onBookCall?: () => void;
}

export default function PricingSection({ onBookCall }: PricingSectionProps) {
  const [activeTab, setActiveTab] = useState<"social" | "website">("social");

  const socialPlans = [
    {
      name: "Starter",
      price: "₹8,999",
      period: "/ M",
      badge: null,
      popular: false,
      features: [
        "Profile Optimize",
        "Platforms: Facebook, Instagram, Whatsapp",
        "2 Reels",
        "2 Carousel Posts",
        "2 Stories",
        "3 Static Posts",
        "Ads Boosting",
      ],
      note: "Ads Budget is separately decided.",
    },
    {
      name: "Professional",
      price: "₹19,999",
      period: "/ M",
      badge: "Most Popular",
      popular: true,
      features: [
        "Profile Optimize",
        "Platforms: Facebook, Instagram, Whatsapp",
        "4 Reels",
        "4 Carousel Posts",
        "5 Static Posts",
        "Meta Ads",
        "Google Business Management - Basic",
        "Target Audience Creation",
      ],
      note: "Ads Budget is separately decided.",
    },
    {
      name: "Enterprise",
      price: "₹34,999",
      period: "/ M",
      badge: "Best Value",
      popular: false,
      features: [
        "Profile Optimize",
        "Platforms: Facebook, Instagram, Whatsapp, YT & Google",
        "6 Reels",
        "4 Carousel Posts",
        "6 Static Posts",
        "Meta Ads",
        "Google Ads (YT, Search & More)",
        "Google Business Management - Advance",
        "Target Audience Creation",
        "SEO Optimization",
      ],
      note: "Ads Budget is separately decided.",
    },
  ];

  const websitePlans = [
    {
      name: "Starter",
      price: "₹9,999",
      period: "/ M",
      badge: "Essential",
      popular: false,
      features: [
        "Single Page Website",
        "Domain Included (1 Year)",
        "Hosting Included (1 Year)",
        "Basic Responsive Layout",
        "Google Maps Integration",
        "Social Media Linking",
      ],
      note: "Ads Budget is separately decided.",
    },
    {
      name: "Professional",
      price: "₹14,999",
      period: "/ M",
      badge: "Most Popular",
      popular: true,
      features: [
        "6 Pages (Home, About, Services, Contact, Case Studies + 1 Custom)",
        "Domain Included (1 Year)",
        "Hosting Included (1 Year)",
        "SSL Certificate (1 Year)",
        "Ultra Responsive Design",
        "Google Maps Integration",
        "Social Media Linking",
        "SEO - Basic Setup",
      ],
      note: "Ads Budget is separately decided.",
    },
    {
      name: "Enterprise",
      price: "₹34,999",
      period: "/ M",
      badge: "Maximum Scale",
      popular: false,
      features: [
        "Unlimited Pages (Custom Structure)",
        "Domain Included (1 Year)",
        "Hosting Included (1 Year)",
        "SSL Certificate (1 Year)",
        "Premium Responsive Design",
        "Google Maps Integration",
        "Social Media Linking",
        "SEO - Advance Optimization",
      ],
      note: "Ads Budget is separately decided.",
    },
  ];

  const currentPlans = activeTab === "social" ? socialPlans : websitePlans;

  const handleCtaClick = () => {
    if (onBookCall) {
      onBookCall();
    } else {
      window.location.href = "https://calendly.com/official-vinsou/30min";
    }
  };

  return (
    <section id="pricing-section" className="relative w-full bg-[#FAF9F6] font-sans py-20 lg:py-28 overflow-hidden z-0">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFCC00]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[36px] sm:text-[48px] font-extrabold text-black tracking-tight leading-tight">
            Choose The Plan That <br />
            <span className="text-[#004DE6] underline decoration-[#FFCC00] decoration-4 underline-offset-4">
              Fits Your Ambition
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 font-medium">
            No hidden fees. Powerful execution tailored for scaling brands and businesses.
          </p>

          {/* TOGGLE SWITCH */}
          <div className="flex items-center justify-center mt-8">
            <div className="bg-white p-1.5 rounded-full border border-black/10 shadow-sm flex items-center gap-2">
              <button
                onClick={() => setActiveTab("social")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                  activeTab === "social"
                    ? "bg-[#FFCC00] text-black shadow-md scale-105"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                <Share2 size={16} />
                Social Media Plans
              </button>
              <button
                onClick={() => setActiveTab("website")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                  activeTab === "website"
                    ? "bg-[#FFCC00] text-black shadow-md scale-105"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                <Globe size={16} />
                Website Plans
              </button>
            </div>
          </div>
        </div>

        {/* PRICING CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {currentPlans.map((plan, idx) => (
            <motion.div
              key={plan.name + activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative bg-white rounded-3xl p-8 flex flex-col justify-between border transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "border-[#FFCC00] shadow-[0_20px_50px_rgba(255,204,0,0.25)] ring-2 ring-[#FFCC00]/50"
                  : "border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-[#FFCC00] px-4 py-1.5 rounded-full text-[11px] font-extrabold tracking-widest uppercase shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-pulse" />
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="text-center pb-6 border-b border-black/5">
                  <h3 className="text-xl font-extrabold text-black">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-black tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm font-bold text-gray-500">{plan.period}</span>
                    )}
                  </div>
                </div>

                <ul className="py-6 space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FFCC00]/20 text-black flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-black/5 mt-auto">
                <p className="text-[11px] font-bold text-center text-gray-400 mb-4 italic">
                  {plan.note}
                </p>

                <motion.button
                  onClick={handleCtaClick}
                  whileHover={{ scale: 1.03, backgroundColor: plan.popular ? "#E6B800" : "#F0C000" }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-4 rounded-full font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    plan.popular
                      ? "bg-[#FFCC00] text-black shadow-md"
                      : "bg-black text-white hover:bg-[#FFCC00] hover:text-black"
                  }`}
                >
                  <span>Get Started</span>
                  <PhoneCall size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}