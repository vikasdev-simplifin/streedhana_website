"use client";
import HeroBanner from "@/components/HeroBanner";
import ToolCard from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Search,
  Scale,
  Target,
  Heart,
  BarChart3,
  FileText,
  Wallet,
  Calculator,
} from "lucide-react";

const tools = [
  {
    title: "Mutual Fund Chat GPT",
    description: "Get AI-powered answers to your mutual fund questions instantly",
    icon: MessageSquare,
    href: "#mutual-fund-chat",
  },
  {
    title: "Intelligent Mutual Fund Screener",
    description: "Find the right funds based on your specific criteria and goals",
    icon: Search,
    href: "#fund-screener",
  },
  {
    title: "Fund Comparisons",
    description: "Compare multiple funds side by side to make informed decisions",
    icon: Scale,
    href: "#fund-comparisons",
  },
  {
    title: "AI Financial Goal Planning",
    description: "Create personalized financial goals with AI-powered guidance",
    icon: Target,
    href: "#goal-planning",
  },
  {
    title: "Portfolio Health Check",
    description: "Analyze your portfolio's diversification, risk, and performance",
    icon: Heart,
    href: "#portfolio-health",
  },
  {
    title: "Stock & Sector Overlap Analysis",
    description: "Identify overlapping investments across all your holdings",
    icon: BarChart3,
    href: "#overlap-analysis",
  },
  {
    title: "CAS Upload & MF Central Analysis",
    description: "Upload your CAS statement for comprehensive portfolio analysis",
    icon: FileText,
    href: "#cas-upload",
  },
  {
    title: "Expense Tracking Tool",
    description: "Track and manage your daily expenses effortlessly",
    icon: Wallet,
    href: "#expense-tracking",
  },
  {
    title: "Smart Calculators",
    description: "SIP, EMI, and goal-based calculators for better planning",
    icon: Calculator,
    href: "#smart-calculators",
  },
];

const AITools = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />

      {/* Tools Grid Section */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-3">
            AI Tools
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our suite of intelligent tools designed to simplify your financial journey
          </p>
        </div>

        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              href={tool.href}
            />
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-gradient mb-4">
            Take Control of Your Financial Future
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Start using our free AI-powered tools today and make smarter investment decisions.
          </p>
          {/* <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started Now
          </button> */}
          <Button variant='gredient' className="px-8 py-4 text-lg rounded-full font-medium hover:bg-gradient-to-br hover:from-indigo-600 hover:to-cyan-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AITools;