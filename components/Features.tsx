import { Shield, Wallet, Smartphone, Target, HeartHandshake, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Safe, SEBI & AMFI Approved",
    description: "Your trust matters most.",
    details: [
      "Investments through SEBI-registered Mutual Funds",
      "AMFI-compliant processes",
      "Strong security to protect your money and personal details",
    ],
    footer: "Your money stays safe, transparent, and fully regulated.",
  },
  {
    icon: Wallet,
    title: "Easy Withdrawal – Your Money, Your Control",
    description: "Your money is not locked in.",
    details: [
      "How much you have invested",
      "How your money is growing",
      "How close you are to your goals",
    ],
    footer: "Withdraw anytime, from anywhere, directly into your bank account.",
  },
  {
    icon: Smartphone,
    title: "Easy Digital Start – From Anywhere in India",
    description: "Complete registration and KYC online, without paperwork.",
    details: [],
    footer: "Start investing whether you live in a metro, town, or village.",
  },
  {
    icon: Target,
    title: "Financial Planning That Fits Your Life",
    description: "We understand your real goals—children's education, buying a home, starting a business, retirement, or financial independence.",
    details: [],
    footer: "Based on your income and comfort level, we help you choose the right plan—step by step.",
  },
  {
    icon: HeartHandshake,
    title: "Simple & Safe Investment Options",
    description: "No confusing terms. No pressure.",
    details: [],
    footer: "We offer easy, goal-based investment options that help your money grow steadily and safely.",
  },
  {
    icon: Users,
    title: "Friendly Support from Trusted Experts",
    description: "Have a question? Need guidance?",
    details: [],
    footer: "Our dedicated MF Ginnie are always there to help you patiently and honestly.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 text-gradient">
            What Makes Us Stand Out
          </h2>
          <p className="text-xl text-secondary font-semibold">
            Easy to Start. Easy to Understand. Easy to Withdraw.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-background border border-border rounded-2xl p-8 cursor-pointer hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-coral-light flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-secondary-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>

              {feature.details.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              <p className="text-sm font-medium text-secondary">
                {feature.footer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
