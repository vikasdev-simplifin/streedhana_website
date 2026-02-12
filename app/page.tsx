import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import GaolCart from "@/components/GaolCart";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import PortfolioAnalyser from "@/components/PortfolioAnalyser";
import SmartTools from "@/components/SmartTools";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      
      {/* <Hero /> */}
      <HeroSection />
      <GaolCart />
      <Features />
      <SmartTools />
      <PortfolioAnalyser />
      <Testimonials />
      <FAQ />
      <TrustBadges />
    </div>
  );
}
