

"use client";

import { Button } from "@/components/ui/button";
import HeroSlider from "./HeroSlider";

export default function HeroSection() {
  return (
    <section className="bg-gradient-hero overflow-hidden md:px-10">
      <div className="container mx-auto px-6 md:px-0 py-10">

        <div className="grid items-center gap-12 lg:min-h-[78vh] lg:grid-cols-2 lg:gap-16">

          {/* Slider - First on Mobile, Right on Desktop */}
          <div className="order-1 lg:order-2 flex justify-center animate-slide-in">
            <HeroSlider />
          </div>

          {/* Text Content - Below on Mobile, Left on Desktop */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-up">
            
            <h1 className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-gradient">
              Smart Mutual Funds For Big Dreams
            </h1>

            <h4 className="mb-6 font-display text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              Built for Bharat. Designed for Women.
            </h4>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              
              <Button
                variant="gredient"
                size="lg"
                className="rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary/25 w-full sm:w-auto"
              >
                Mutual Fund Ginnie GPT
              </Button>

              <Button
                variant="gredient"
                size="lg"
                className="rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary/25 w-full sm:w-auto"
              >
                Mutual Fund AI Comparison
              </Button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
