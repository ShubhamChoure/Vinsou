import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}