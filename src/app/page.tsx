"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Portfolio from "@/components/Portfolio";

export const CALENDLY_URL = "https://calendly.com/official-vinsou/30min";

export default function Home() {
  const handleBookCall = () => {
    window.location.href = CALENDLY_URL;
  };

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Navbar onBookCall={handleBookCall} />
      <Hero onBookCall={handleBookCall} />
      <ServicesSection onBookCall={handleBookCall} />
      <Portfolio />
    </main>
  );
}