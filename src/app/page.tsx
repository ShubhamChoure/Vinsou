import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Navbar />
      <Hero />
      <ServicesSection />
      <Portfolio />
    </main>
  );
}