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
      <nav className="w-full bg-[#FAF9F6] border-b border-black/5 sticky top-0 z-[120]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          
          {/* LOGO WITH REDIRECT TO HOMEPAGE */}
          <Link 
            href="/" 
            aria-label="VINSOU - Return to Homepage"
            className="relative flex items-center justify-start overflow-visible select-none z-[130] transition-opacity hover:opacity-90 py-1"
          >
            <div className="relative h-12 sm:h-16 lg:h-20 w-[180px] sm:w-[240px] flex items-center justify-start">
              <Image
                src="/web_logo.png"
                alt="VINSOU - Business Growth Partner"
                fill
                className="object-contain object-left scale-125 sm:scale-150 mix-blend-multiply"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.title} 
                  href={link.href} 
                  className="text-sm font-semibold text-black hover:opacity-60 transition-opacity"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            
            {/* CTA BUTTON */}
            <button
              onClick={handleButtonClick}
              className="group relative inline-flex items-center gap-2.5 bg-[#FFCC00] hover:bg-[#F0C000] text-black font-bold rounded-full px-7 py-3 text-sm uppercase tracking-wide shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Book a Call</span>
              <PhoneCall size={18} className="transition-transform duration-300 group-hover:animate-shake" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-1 text-black relative z-[130] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-x-0 top-0 bg-[#FAF9F6] z-[120] border-b border-black/10 shadow-2xl transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
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

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[110] md:hidden backdrop-blur-[2px]" 
          onClick={() => setIsOpen(false)} 
        />
      )}
    </>
  );
};

export default Navbar;