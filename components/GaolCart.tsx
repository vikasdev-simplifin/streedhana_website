"use client";

const goalCards = [
  { icon: "💰", label: "Gold Plan" },
  { icon: "👶", label: "MY Child Education Plan", sublabel: "MY PRIORITY" },
  { icon: "🏖️", label: "Retirement" },
  { icon: "✨", label: "Dreams" },
];

const GaolCart = () => {
  return (
    <section className="relative bg-gradient-hero-reverse pt-24 pb-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
         
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {goalCards.map((card, index) => (
              <div
                key={card.label}
                className="
              
                  rounded-xl
                  p-6
                  text-center
                  cursor-pointer

                  transition-all
                  duration-300
                  ease-out

                  hover:border-primary                 
                  hover:shadow-glow
                  shadow-soft
                  md:hover:-translate-y-1
                "
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <span
                  className="
                    text-3xl
                    md:text-4xl
                    mb-3
                    block
                    transition-transform
                    duration-300
                    md:hover:scale-110
                  "
                >
                  {card.icon}
                </span>

                <p className="font-semibold text-foreground text-capitalize">
                  {card.label}
                </p>

                {card.sublabel && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {card.sublabel}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GaolCart;
