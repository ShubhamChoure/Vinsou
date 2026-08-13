"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Portfolio from "@/components/Portfolio";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export const CALENDLY_URL = "https://calendly.com/official-vinsou/30min";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleBookCall = () => {
    window.location.href = CALENDLY_URL;
  };

  return (
    <main className="bg-[#FAF9F6] min-h-screen relative">
      <SplashScreen onComplete={() => setIsLoading(false)} />

      <div className={isLoading ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-700"}>
        <Navbar onBookCall={handleBookCall} />
        <Hero onBookCall={handleBookCall} />
        <ServicesSection onBookCall={handleBookCall} />
        <Portfolio />
        <PricingSection onBookCall={handleBookCall} />
        <Footer onBookCall={handleBookCall} />
      </div>
    </main>
  );
}