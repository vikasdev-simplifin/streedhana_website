"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { 
  Wallet, 
  GraduationCap, 
  Home, 
  Heart, 
  Car, 
  Plane, 
  PiggyBank, 
  TrendingUp,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
  Lock
} from "lucide-react";
import { useState } from "react";

const mutualFundPortfolios = [
  { name: "Emergency Fund", cagr: "6.44%", duration: "short-term" },
  { name: "Gratitude Fund", cagr: "18.35%", duration: "short-term" },
  { name: "My Wealth Plan", cagr: "21.25%", duration: "3+ years" },
  { name: "Boost Fund", cagr: "26.85%", duration: "3+ years" },
  { name: "Child Education Plan", cagr: "17.74%", duration: "3+ years" },
  { name: "Long Term Plan", cagr: "19.80%", duration: "3+ years" },
  { name: "Short Term Plan", cagr: "9.62%", duration: "1-3 years" },
  { name: "100 Equity Fund", cagr: "25.83%", duration: "3+ years" },
  { name: "Ultra Short Term Plan", cagr: "6.39%", duration: "1-11 months" },
  { name: "Tax Savings Plan", cagr: "18.80%", duration: "3+ years" },
  { name: "100 Gold Fund", cagr: "18.86%", duration: "3+ years" },
  { name: "100 Debt Fund", cagr: "6.40%", duration: "short-term" },
  { name: "Gulluck", cagr: "8.50%", duration: "flexible" },
  { name: "My Wealth Plan: Turbo", cagr: "28.50%", duration: "5+ years" },
  { name: "My Wealth Plan: Advanced", cagr: "24.20%", duration: "3+ years" },
];

const goalBasedPlans = [
  {
    icon: Sparkles,
    name: "All-in-One Variable SIP",
    description: "Our most recommended option. One flexible SIP that helps you manage multiple goals together—education, home, travel, and more.",
    recommended: true,
  },
  {
    icon: Clock,
    name: "Early Retirement Plan",
    description: "Start early and invest smartly so you can retire peacefully and independently, without financial worries.",
    recommended: false,
  },
  {
    icon: Home,
    name: "Dream Home Plan",
    description: "Save step by step to buy or build your dream home—planned in a stress-free way.",
    recommended: false,
  },
  {
    icon: GraduationCap,
    name: "Child Education Plan",
    description: "Secure your child's future education with planned savings that grow over time.",
    recommended: false,
  },
  {
    icon: Heart,
    name: "Wedding Plan",
    description: "Plan a beautiful wedding without financial stress—save smartly for a celebration to remember.",
    recommended: false,
  },
  {
    icon: Car,
    name: "Dream Car Plan",
    description: "Turn your dream car into reality with small, regular investments.",
    recommended: false,
  },
  {
    icon: Shield,
    name: "Emergency Fund",
    description: "Be prepared for life's unexpected moments. Keep money ready for medical needs or emergencies, anytime.",
    recommended: false,
  },
  {
    icon: Plane,
    name: "Dream Vacation Plan",
    description: "Plan your next holiday with confidence—save now, travel later without guilt.",
    recommended: false,
  },
];

const productCategories = [
  { name: "Trending Mutual Funds", active: true },
  { name: "Goal Based MF Investing", active: true },
  { name: "Insurance", upcoming: true },
  { name: "Loans", upcoming: true },
  { name: "Fixed Deposit", development: true },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("portfolios");

  return (
    <div className="min-h-screen bg-background">
      
      
      {/* Hero Section */}
      <section className="pt-14 pb-12 md:pt-16 md:pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore our range of financial products designed specifically for women to achieve their dreams
            </p>
          </div>
          
          {/* Product Categories */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {productCategories.map((category) => (
              <Badge
                key={category.name}
                variant={category.active ? "default" : "secondary"}
                className={`px-4 py-2 text-sm ${
                  category.active 
                    ? "bg-primary text-primary-foreground" 
                    : category.upcoming 
                      ? "bg-muted text-muted-foreground" 
                      : "bg-secondary/50 text-secondary-foreground"
                }`}
              >
                {category.name}
                {category.upcoming && <Lock className="w-3 h-3 ml-1.5" />}
                {category.development && <span className="ml-1.5 text-xs">(Coming Soon)</span>}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          {/* Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-full bg-muted p-1">

              <button
                onClick={() => setActiveTab("portfolios")}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition flex items-center
                  ${
                    activeTab === "portfolios"
                      ? "bg-primary text-white shadow"
                      : "text-muted-foreground"
                  }`}
              >
                <Wallet className="w-4 h-4 mr-2" />
                MF Portfolios
              </button>

              <button
                onClick={() => setActiveTab("goals")}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition flex items-center
                  ${
                    activeTab === "goals"
                      ? "bg-primary text-white shadow"
                      : "text-muted-foreground"
                  }`}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Goal Based
              </button>

            </div>
          </div>


          {/* Mutual Fund Portfolios Content */}
          {activeTab === "portfolios" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                  Mutual Fund Portfolios
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Pre-defined investment funds with proven track records.{" "}
                  <a
                    href="https://next.streedhana.com"
                    className="cursor-pointer font-semibold"
                  >
                    Click to start investing.
                  </a>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {mutualFundPortfolios.map((portfolio, index) => (
                  <a href="https://next.streedhana.com" key={index}>
                  <Card
                    // key={portfolio.name}
                    className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  >
                    <CardContent className="p-5 md:p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <PiggyBank className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {portfolio.duration}
                        </Badge>
                      </div>

                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {portfolio.name}
                      </h3>
                    </CardContent>
                  </Card>
                  </a>
                ))}
              </div>
            </div>
          )}


          {/* Goal Based Content */}
          {activeTab === "goals" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                  Goal Based Mutual Fund Investment
                </h2>
                <p className="text-lg text-primary font-medium mb-2">
                  Plan, Save & Invest for Every Life Goal
                </p>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  With goal-based investing, you can set clear goals, invest regularly,
                  and withdraw easily when needed—all with confidence and control.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {goalBasedPlans.map((plan) => {
                  const IconComponent = plan.icon;
                  return (
                    <Card
                      key={plan.name}
                      className={`group hover:shadow-lg transition-all duration-300 cursor-pointer ${
                        plan.recommended
                          ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                          : "hover:border-primary/30"
                      }`}
                    >
                      <CardContent className="p-5 md:p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary text-primary-foreground">
                            <IconComponent className="w-6 h-6" />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {plan.name}
                              </h3>

                              {plan.recommended && (
                                <Badge className="bg-accent text-accent-foreground text-xs">
                                  Recommended
                                </Badge>
                              )}
                            </div>

                            <p className="text-sm text-muted-foreground mb-4">
                              {plan.description}
                            </p>

                            <Button
                              size="sm"
                              onClick={()=>{window.location.href="https://next.streedhana.com"}}
                              variant={plan.recommended ? "default" : "outline"}
                              className={
                                plan.recommended
                                  ? "cursor-pointer"
                                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
                              }
                            >
                              Start Planning
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gradient mb-4">
            Not sure which product is right for you?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Use our AI-powered portfolio analyzer to get personalized recommendations based on your goals and risk profile.
          </p>
          <Button variant='gredient' size="lg" className="" onClick={()=>{window.location.href="https://next.streedhana.com"}}>
            Try Portfolio Analyzer
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Products;
