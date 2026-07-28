"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Dancing_Script } from "next/font/google";

const scriptFont = Dancing_Script({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const navLinks = [
    { title: "Team", href: "/team" },
    { title: "Blog", href: "/blog" },
  ];

  return (
    <>
      <nav className="w-full bg-[#FAF9F6] border-b border-black/5 sticky top-0 z-[120]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 select-none relative z-[130]">
            <span className="text-xl md:text-2xl font-black italic tracking-tighter text-black uppercase leading-none">Ads</span>
            <span className={`${scriptFont.className} text-lg md:text-xl text-black/80 px-0.5 leading-none pt-1`}>With</span>
            <span className="text-xl md:text-2xl font-black italic tracking-tighter text-black uppercase leading-none">Vinsou</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.title} href={link.href} className="text-sm font-semibold text-black hover:opacity-60 transition-opacity">
                  {link.title}
                </Link>
              ))}
            </div>
            <button className="bg-[#FFCC00] hover:bg-[#F0C000] text-black font-bold rounded-full px-8 py-3 text-sm uppercase tracking-wide shadow-sm transition-all active:scale-95">
              Book a Call
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-1 text-black relative z-[130]">
            {isOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-x-0 top-0 bg-[#FAF9F6] z-[120] border-b border-black/10 shadow-2xl transform transition-transform duration-500 ease-in-out md:hidden ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="pt-24 pb-8 px-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link key={link.title} href={link.href} onClick={() => setIsOpen(false)} className="py-4 text-[15px] font-bold text-black border-t border-black/5 first:border-t-0">
              {link.title}
            </Link>
          ))}
          <button className="w-full bg-[#FFCC00] text-black font-bold rounded-full py-4 text-xs uppercase tracking-[0.1em] mt-4">Book a Call</button>
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black/40 z-[110] md:hidden backdrop-blur-[2px]" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Navbar;