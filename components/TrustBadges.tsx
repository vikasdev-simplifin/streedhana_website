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
  { src: "/nipponmf.png", alt: "NIPPON India Mutual Fund" },
  { src: "/tatamf.png", alt: "TATA Mutual Fund" },
  { src: "/dspmf.jpeg", alt: "DSP Mutual Fund" },
  { src: "/kotakmf.png", alt: "KOTAK Mutual Fund" },
  { src: "/licmf.png", alt: "LIC Mutual Fund" },
  { src: "/motilaloswalmf.jpeg", alt: "Motilal Oswal Mutual Fund" },
  { src: "/mahindramf.jpeg", alt: "Mahindra Manulife Mutual Fund" },
];


const TrustBadges = () => {
  return (
    <section className="py-8 bg-primary overflow-hidden">
      {/* Left to Right */}
      <div className="mb-4 relative">
        <div className="flex gap-12 animate-scroll-left">
          {[...badges, ...badges, ...badges].map((badge, index) => (
            <div
              key={`ltr-${index}`}
              className="flex items-center gap-2 whitespace-nowrap cursor-pointer border-border border-primary"
            >
              <span className="text-xl">{badge.emoji}</span>
              <span className="text-primary-foreground font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right to Left */}
      <div className="relative">
        <div className="flex items-center gap-10 animate-scroll-right">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex items-center justify-center min-w-[100px] cursor-pointer"
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
