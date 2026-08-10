"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall, ArrowUpRight, Mail } from "lucide-react";

// Reliable SVG for Instagram
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Reliable SVG for WhatsApp
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

// Reliable SVG for LinkedIn
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface FooterProps {
  onBookCall?: () => void;
}

export default function Footer({ onBookCall }: FooterProps) {
  const handleButtonClick = () => {
    if (onBookCall) {
      onBookCall();
    } else {
      window.location.href = "https://calendly.com/official-vinsou/30min";
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-black text-white font-sans pt-16 pb-12 overflow-hidden z-0 border-t border-white/10">
      
      {/* Background Soft Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#FFCC00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* TOP CALL-TO-ACTION BANNER INSIDE FOOTER */}
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 border border-white/10 rounded-3xl p-8 sm:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <span className="text-[#FFCC00] text-xs font-extrabold tracking-widest uppercase">Ready to scale?</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
              Let&apos;s Build Something <span className="text-[#FFCC00]">Extraordinary</span> Together.
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              Book a strategy call with our team and discover how we can drive high-intent leads and revenue to your business.
            </p>
          </div>

          <motion.button
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05, backgroundColor: "#F0C000", boxShadow: "0px 10px 30px rgba(255, 204, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2.5 bg-[#FFCC00] text-black font-extrabold rounded-full px-8 py-4 text-sm uppercase tracking-wider shadow-md cursor-pointer overflow-hidden shrink-0"
          >
            <div className="absolute inset-0 -translate-x-full bg-white/30 -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            <span className="relative z-10">Book a Call</span>
            <PhoneCall size={18} className="relative z-10 transition-transform duration-300 group-hover:rotate-12" />
          </motion.button>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* COL 1: Brand Info */}
          <div className="space-y-4">
            <Link 
              href="/" 
              aria-label="VINSOU - Return to Homepage"
              className="flex items-center select-none group transition-opacity hover:opacity-80 py-2 overflow-visible"
            >
              <div className="relative h-10 w-10 shrink-0 z-10 filter brightness-0 invert">
                <Image
                  src="/site_logo.png"
                  alt="VINSOU Emblem"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="relative h-10 w-[160px] flex items-center -ml-2 mt-1 overflow-visible z-0 filter brightness-0 invert">
                <Image
                  src="/site_text.png"
                  alt="VINSOU"
                  fill
                  className="object-contain object-left scale-[1.8] origin-left"
                  priority
                />
              </div>
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
              Your trusted growth partner for high-converting websites, custom CRM solutions, and performance marketing that scale revenue.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/vinsou_creatives"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white hover:bg-[#FFCC00] hover:text-black transition-all"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/919322615918"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white hover:bg-[#FFCC00] hover:text-black transition-all"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/vinsou/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white hover:bg-[#FFCC00] hover:text-black transition-all"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* COL 2: Quick Links */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li>
                <Link href="/" className="hover:text-[#FFCC00] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#FFCC00] transition-colors">Our Team</Link>
              </li>
              <li>
                <a href="#pricing-section" onClick={(e) => scrollToSection(e, "pricing-section")} className="hover:text-[#FFCC00] transition-colors cursor-pointer">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* COL 3: Services */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li>Web Development & CRMs</li>
              <li>Social Media Management</li>
              <li>Performance Marketing</li>
              <li>Google Business Optimization</li>
              <li>Local SEO Strategies</li>
            </ul>
          </div>

          {/* COL 4: Contact info */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-5">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li>
                <span className="block text-xs text-gray-500 font-bold uppercase">Email Us</span>
                {/* Mailto link configured with pre-filled subject line */}
                <a 
                  href="mailto:official.vinsou@gmail.com?subject=Inquiry%20Regarding%20Vinsou%20Services" 
                  className="text-white hover:text-[#FFCC00] transition-colors flex items-center gap-1.5 mt-1"
                >
                  <Mail size={14} /> official.vinsou@gmail.com <ArrowUpRight size={14} />
                </a>
              </li>
              <li className="pt-2">
                <span className="block text-xs text-gray-500 font-bold uppercase">Instagram</span>
                <a href="https://www.instagram.com/vinsou_creatives" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFCC00] transition-colors flex items-center gap-1 mt-1">
                  @vinsou_creatives <ArrowUpRight size={14} />
                </a>
              </li>
              <li className="pt-2">
                <span className="block text-xs text-gray-500 font-bold uppercase">LinkedIn</span>
                <a href="https://www.linkedin.com/company/vinsou/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFCC00] transition-colors flex items-center gap-1 mt-1">
                  Vinsou Company <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-medium gap-4">
          <p>&copy; {new Date().getFullYear()} Vinsou Creatives. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-400 transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-400 transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}