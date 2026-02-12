import { useEffect, useState } from "react";

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsVisible(currentScrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 150);
  const translateY = Math.min(scrollY * 0.5, 50);

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[hsl(var(--mint))] via-background to-[hsl(var(--mint))] transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        opacity,
        transform: `translateY(-${translateY}px)`,
      }}
    >
      <div className="container mx-auto px-4 py-16 md:py-24 text-center relative z-10">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
        
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
         
          <span className="text-gradient"> Plan Better with Simple Financial Calculators</span>
        </h1>
        
        <p className="text-lg md:text-xl text-secondary font-medium mb-6">
          Clear answers for confident money decisions
        </p>
        
        <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed">
          Use StreeDhana calculators to plan your savings, understand your investments, 
          and prepare for the future—step by step and without confusion. They help you 
          make informed choices and stay in control of your money.
        </p>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;