import { Search, BarChart3, GitCompare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    icon: Search,
    emoji: "🔍",
    title: "Mutual Fund Screener",
    description: "Find mutual funds easily based on:",
    features: ["Returns", "Risk level", "Fund type"],
    footer: "So you can choose what feels right for you.",
  },
  {
    icon: BarChart3,
    emoji: "📊",
    title: "Portfolio Analyser",
    description: "See how your investments are performing:",
    features: ["Track growth in real time", "Understand risk clearly", "Know where your money stands"],
    footer: "All in one simple view.",
  },
  {
    icon: GitCompare,
    emoji: "⚖️",
    title: "Mutual Fund Comparison",
    description: "Compare two or more mutual funds side by side:",
    features: ["Returns", "Risk", "Suitability for your goals"],
    footer: "Choose with confidence, not confusion.",
  },
];

const SmartTools = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">🧠</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 text-gradient">
            Smart Tools to Plan & Manage Your Money
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span className="text-secondary font-semibold">Simple Tools. Clear Choices. Full Control.</span>
            <br />
            Use easy-to-understand tools that help you plan better, choose wisely, and track your money confidently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto cursor-pointer">
          {tools.map((tool, index) => (
            <div
              key={tool.title}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-glow transition-all duration-500"
            >
              <div className="absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-40 transition-opacity">
                {tool.emoji}
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-teal-light flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                <tool.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {tool.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {tool.description}
              </p>

              <ul className="space-y-2 mb-6">
                {tool.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground mb-6">
                {tool.footer}
              </p>

              <Button 
                variant="ghost" 
                className="group/btn text-primary hover:text-primary hover:bg-coral-light p-0"
              >
                Know More 
                <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-lg text-muted-foreground font-medium">
          No Confusion. No Pressure. Just clear tools to help you decide better.
        </p>
      </div>
    </section>
  );
};

export default SmartTools;
