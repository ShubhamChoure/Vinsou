"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, PhoneCall } from "lucide-react";

interface NavbarProps {
  onBookCall?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookCall }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const navLinks = [
    { title: "Team", href: "/team" },
    { title: "Blog", href: "/blog" },
  ];

  const handleButtonClick = () => {
    if (onBookCall) {
      onBookCall();
    } else {
      window.location.href = "https://calendly.com/official-vinsou/30min";
    }
  };

  return (
    <>
      {/* NAVBAR: Increased to z-[140] so it ALWAYS stays on top of the mobile drawer */}
      <nav className="w-full bg-[#FAF9F6] border-b border-black/5 sticky top-0 z-[140]">
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between h-16 sm:h-20">
          
          {/* LOGO CONTAINER */}
          <Link 
            href="/" 
            aria-label="VINSOU - Return to Homepage"
            className="flex items-center select-none group transition-opacity hover:opacity-80 py-2 max-w-[75vw] overflow-visible"
          >
            {/* 1. 3D Emblem */}
            <div className="relative h-9 w-9 sm:h-14 sm:w-14 shrink-0 z-10">
              <Image
                src="/site_logo.png"
                alt="VINSOU Emblem"
                fill
                className="object-contain mix-blend-multiply"
                priority
              />
            </div>

            {/* 2. Text Wordmark */}
            <div className="relative h-9 w-[150px] sm:h-14 sm:w-[280px] flex items-center -ml-3 sm:-ml-8 mt-0.5 sm:mt-1.5 overflow-visible z-0">
              <Image
                src="/site_text.png"
                alt="VINSOU"
                fill
                className="object-contain object-left mix-blend-multiply scale-[1.5] sm:scale-[2.2] origin-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.title} 
                  href={link.href} 
                  className="text-sm font-bold text-black hover:opacity-60 transition-opacity"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            
            {/* CTA BUTTON */}
            <button
              onClick={handleButtonClick}
              className="group relative inline-flex items-center gap-2.5 bg-[#FFCC00] hover:bg-[#F0C000] text-black font-extrabold rounded-full px-7 py-3 text-sm uppercase tracking-wide shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Book a Call</span>
              <PhoneCall size={18} className="transition-transform duration-300 group-hover:animate-shake" />
            </button>
          </div>

          {/* Mobile Toggle: Swaps between Menu and X automatically */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-1 text-black relative cursor-pointer shrink-0 transition-transform active:scale-90"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER: Kept at z-[130] so it slides nicely UNDER the navbar */}
      <div 
        className={`fixed inset-x-0 top-0 bg-[#FAF9F6] z-[130] border-b border-black/10 shadow-2xl transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Added pt-24 so the links don't hide under the navbar */}
        <div className="pt-24 pb-8 px-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="py-4 text-[15px] font-bold text-black border-t border-black/5 first:border-t-0"
            >
              {link.title}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              handleButtonClick();
            }}
            className="group w-full inline-flex items-center justify-center gap-2.5 bg-[#FFCC00] text-black font-bold rounded-full py-4 text-xs uppercase tracking-[0.1em] mt-4 cursor-pointer"
          >
            <span>Book a Call</span>
            <PhoneCall size={18} className="transition-transform duration-300 group-hover:animate-shake" />
          </button>
        </div>
      </div>

      {/* BACKDROP: Set to z-[120] */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[120] md:hidden backdrop-blur-[2px]" 
          onClick={() => setIsOpen(false)} 
        />
      )}
    </>
  );
};

export default Navbar;