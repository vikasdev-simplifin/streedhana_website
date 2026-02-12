import Image from "next/image";

const badges = [
  { emoji: "✅", text: "SEBI Registered" },
  { emoji: "🔐", text: "AMFI Compliant" },
  { emoji: "🏦", text: "100% Secure Platform" },
  { emoji: "💳", text: "Money Goes Directly to Your Bank" },
  { emoji: "👩‍🦰", text: "Women-First Platform" },
  { emoji: "📖", text: "Simple & Transparent" },
  { emoji: "🤝", text: "Real Human Support" },
];

const logos = [
  { src: "/axismflogo.png", alt: "AXIS Mutual Fund" },
  { src: "/sbimflogo.jpg", alt: "SBI Mutual Fund" },
  { src: "/nipponindia.png", alt: "NIPPON India Mutual Fund" },
  { src: "/tatamf.png", alt: "TATA Mutual Fund" },
  { src: "/dspmf.jpeg", alt: "DSP Mutual Fund" },
  { src: "/kotakmf.png", alt: "KOTAK Mutual Fund" },
  { src: "/lic-mf.jpeg", alt: "LIC Mutual Fund" },
  { src: "/motilaloswalmf.jpeg", alt: "Motilal Oswal Mutual Fund" },
  { src: "/mahindramf.jpeg", alt: "Mahindra Manulife Mutual Fund" },
];


const TrustBadges = () => {
  return (
    
    <section className="relative py-8 bg-primary overflow-hidden">

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-52 bg-gradient-to-r from-primary to-transparent z-10" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-52 bg-gradient-to-l from-primary to-transparent z-10" />

      {/* Badges */}
      <div className="overflow-hidden">
        <div className="flex w-max animate-scroll-right">
          {[...badges, ...badges].map((badge, index) => (
            <div
              key={`ltr-${index}`}
          className="flex items-center gap-2 whitespace-nowrap px-6"
        >
          <span className="text-xl">{badge.emoji}</span>
          <span className="text-primary-foreground font-medium">
            {badge.text}
          </span>
        </div>
      ))}
        </div>
      </div>

      {/* Logos */}
      <div className="overflow-hidden mt-6">
        <div className="flex w-max animate-scroll-left">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`logo-${index}`}
          className="flex items-center justify-center min-w-[140px] px-8 shrink-0"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={60}
            height={30}
            className="object-contain rounded-xl"
          />
        </div>
      ))}
        </div>
      </div>

    </section>

  );
};

export default TrustBadges;
