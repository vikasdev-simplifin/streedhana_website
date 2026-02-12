import { TrendingUp, PieChart, Target, RefreshCw, Brain, Bell } from "lucide-react";

const analyserFeatures = [
  {
    icon: TrendingUp,
    emoji: "📈",
    title: "Portfolio Performance",
    description: "See which mutual funds are doing well and which need review—so you can take timely and confident action.",
  },
  {
    icon: PieChart,
    emoji: "🧺",
    title: "Stock & Sector Balance",
    description: "Know if too much money is invested in one stock or sector—helping you stay diversified and reduce risk.",
  },
  {
    icon: Target,
    emoji: "🎯",
    title: "Risk & Goal Match",
    description: "Check whether your investments match your life goals and comfort with risk—automatically and clearly.",
  },
  {
    icon: RefreshCw,
    emoji: "🔄",
    title: "SIP Start or Stop Guidance",
    description: "Get simple guidance on where to start SIPs and which funds may no longer suit you based on performance and your goals.",
  },
  {
    icon: Brain,
    emoji: "🧠",
    title: "Smart Streedhana AI Insights",
    description: "Understand hidden patterns in your portfolio and get helpful suggestions—made easy, not confusing.",
  },
  {
    icon: Bell,
    emoji: "🔔",
    title: "Important StreeDhana Alerts",
    description: "Receive gentle reminders for fund performance changes, goal progress, and when your portfolio needs rebalancing.",
  },
];

const PortfolioAnalyser = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-teal-light/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">🌸</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 text-gradient">
            Understand Your Portfolio Better
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            So you can take the right decisions with confidence.
            <br />
            <span className="text-secondary font-semibold">Clear information. No pressure. Decisions always in your hands.</span>
          </p>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            The StreeDhana Portfolio Analyser, powered by smart AI technology, helps you clearly understand where your money is invested, how it is performing, and what needs attention—so you always stay in control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto cursor-pointer">
          {analyserFeatures.map((feature) => (
            <div
              key={feature.title}
              className="
  group
  bg-card
  border border-border
  rounded-2xl p-6
  transition-colors duration-300
  hover:border-secondary
  hover:shadow-medium
"
            >
              <div className="flex items-start gap-4">
                {/* <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                </div> */}
                <div
                  className="
    w-12 h-12 rounded-lg
    bg-secondary/10
    flex items-center justify-center shrink-0
    transition-all duration-300
    group-hover:bg-gradient-to-br
    group-hover:from-[#0a4076]
    group-hover:to-[#11d4c4]
  "
                >
                  <feature.icon
                    className="
      w-6 h-6
      text-secondary
      transition-colors duration-300
      group-hover:text-white
    "
                  />
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2 flex items-center gap-2">
                    <span>{feature.emoji}</span> {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioAnalyser;
