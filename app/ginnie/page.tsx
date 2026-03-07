import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SakhiApplicationForm from "@/components/SakhiApplicationForm";
import GinnieApplicationForm from "@/components/GinnieApplicationForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Sparkles,
  GraduationCap,
  Users,
  MessageCircle,
  CheckCircle,
  XCircle,
  Phone,
  BookOpen,
  Shield,
  FileText,
  Award,
  Wallet,
  TrendingUp
} from "lucide-react";

const MutualFundSakhiGinnie = () => {
  return (
    <div className="min-h-screen bg-background">

      
      {/* Hero Section */}
      <section className="pt-14 pb-12 md:pt-16 md:pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 ">
              <span className="text-gradient">     Mutual Fund Sakhi</span> <span className="text-gradient">/</span> <span className="text-accent">Ginnie</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-primary font-medium italic">
              "Two Roles. One Mission — Women's Financial Empowerment."
            </p>
          </div>
        </div>
      </section>

      {/* Two Card Layout */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 items-stretch">
            {/* Sakhi Card */}
            <Card className="h-full flex flex-col border-primary/30 bg-gradient-to-br from-primary/5 to-background hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <Badge className="mx-auto mb-3 bg-primary/20 text-primary border-primary/30">
                  🌸 Financial Educator
                </Badge>
                <CardTitle className="text-2xl md:text-3xl font-display text-gradient">
                  Mutual Fund Sakhi
                </CardTitle>
                <p className="text-lg text-muted-foreground italic mt-2">
                  "She helps you understand money — before you invest."
                </p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Leads financial awareness & education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Explains money, SIPs & goals in simple language</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Supports first-time women investors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>No selling. No advice. Only awareness.</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground border-l-4 border-primary/30 pl-4  ">
                  Role limited to financial literacy and investor awareness.
                </p>
                <a href="tel:+919838094303" className="mt-auto cursor-pointer">
                  <Button variant="gredient" size="lg" className="w-full ">
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to a Sakhi
                </Button>

                </a>
              </CardContent>
            </Card>

            {/* Ginnie Card */}
            <Card className="h-full flex flex-col border-accent/30 bg-gradient-to-br from-accent/5 to-background hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-accent" />
                </div>
                <Badge className="mx-auto mb-3 bg-accent/20 text-accent border-accent/30">
                  ✨ Investment Facilitator
                </Badge>
                <CardTitle className="text-2xl md:text-3xl font-display text-accent">
                  Mutual Fund Ginnie
                </CardTitle>
                <p className="text-lg text-muted-foreground italic mt-2">
                  "When you're ready to invest, Ginnie helps you do it the right way."
                </p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Helps with KYC, SIP setup & tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Uses risk profiling & goal tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Works as AMFI-registered distributors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Process-driven. Compliant. Transparent.</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground border-l-4 border-accent/30 pl-4">
                  Mutual Fund Ginnie facilitates investments only through AMFI-registered distributors. Mutual fund investments are subject to market risks.
                </p>
                <div className="mt-auto">

                <a href="tel:+919838094303" className="cursor-pointer">
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Phone className="w-5 h-5 mr-2" />
                  Start Investing with Ginnie
                </Button>
                </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility & Details Tabs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="sakhi" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10">
              <TabsTrigger value="sakhi" className="text-sm md:text-base
                data-[state=active]:bg-white
                data-[state=active]:text-foreground
                data-[state=active]:shadow-sm
                rounded-md cursor-pointer">
                <Heart className="w-4 h-4 mr-2" />
                Become a Sakhi
              </TabsTrigger>
              <TabsTrigger value="ginnie" className="text-sm md:text-base
                data-[state=active]:bg-white
                data-[state=active]:text-foreground
                data-[state=active]:shadow-sm
                rounded-md cursor-pointer">
                <Sparkles className="w-4 h-4 mr-2" />
                Become a Ginnie
              </TabsTrigger>
            </TabsList>

            {/* Sakhi Tab Content */}
            <TabsContent value="sakhi" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 ">
                  🌸
                  <span className="text-gradient">

                    Eligibility for Mutual Fund Sakhi
                  </span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Mutual Fund Sakhi is a financial literacy ambassador, focused on education and awareness — not selling or execution.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {/* Who Can Become */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg ">
                      <Users className="w-5 h-5 text-primary" />
                      Who Can Become a Sakhi?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">A woman who:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        Is 18 years or above
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        Has basic understanding of money, savings, or household finances
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        Is comfortable speaking to women in her community
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        Wants to educate, guide, and empower, not sell products
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        Can communicate clearly in local language / Hindi / English
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Preferred Background */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      Preferred Background
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">(Not Mandatory)</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Homemaker with interest in finance</li>
                      <li>• Teacher, trainer, social worker</li>
                      <li>• SHG / NGO member</li>
                      <li>• Community leader</li>
                      <li>• Graduate or undergraduate student</li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-4 italic">
                      No prior finance degree is required.
                    </p>
                  </CardContent>
                </Card>

                {/* Training */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Training & Conduct
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        Must complete StreeDhana Financial Literacy Training
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        Must follow Code of Conduct & Ethics
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        Must clearly disclose limited role
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4 border-l-4 border-primary/30 pl-3 italic">
                      "I provide financial awareness only. I do not recommend or sell investments."
                    </p>
                  </CardContent>
                </Card>

                {/* What Sakhi Cannot Do */}
                <Card className="md:col-span-2 lg:col-span-3">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-destructive">
                      <XCircle className="w-5 h-5" />
                      What a Sakhi Cannot Do
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-start gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        Recommend any mutual fund or scheme
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        Handle money or transactions
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        Collect cheques, cash, or bank details
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        Promise returns
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-6">
                <SakhiApplicationForm />
              </div>
            </TabsContent>

            {/* Ginnie Tab Content */}
            <TabsContent value="ginnie" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                  ✨
                  <span className="text-gradient">

                    Eligibility for Mutual Fund Ginnie
                  </span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Mutual Fund Ginnie supports investment facilitation, strictly through compliant and regulated channels.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Who Can Become */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Users className="w-5 h-5 text-accent" />
                      Who Can Become a Ginnie?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">A woman who:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        Is 18 years or above
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        Has completed graduation (preferred)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        Is willing to follow regulatory and compliance processes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        Is comfortable with digital tools and documentation
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        Wants to support women in KYC, SIP setup, and tracking
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Regulatory Requirements */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Award className="w-5 h-5 text-accent" />
                      Mandatory Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">One of the following:</p>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        AMFI Certification (NISM Series V-A)
                      </li>
                      <li className="text-center text-muted-foreground">OR</li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        Willingness to complete AMFI certification within a defined period
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Skills Required */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <MessageCircle className="w-5 h-5 text-accent" />
                      Skills Required
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        Basic understanding of mutual funds & SIPs
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        Attention to detail (KYC, documents)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        Ethical, process-driven approach
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        Clear communication with transparency
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Training & Compliance */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Shield className="w-5 h-5 text-accent" />
                      Training & Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        Mandatory StreeDhana Ginnie Training Program
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        AMFI Code of Conduct
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        SEBI regulations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        StreeDhana Compliance Policy
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* What Ginnie Cannot Do */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-destructive">
                      <XCircle className="w-5 h-5" />
                      What a Ginnie Cannot Do
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        Assure or guarantee returns
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        Misrepresent schemes or risks
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        Accept cash or third-party payments
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        Act outside AMFI / SEBI guidelines
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-6">
                <GinnieApplicationForm />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Code of Conduct Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              📜
              <span className="text-gradient">

                Code of Conduct
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common Framework for All Sakhis and Ginnies
            </p>
          </div>

          {/* Core Principles */}
          <div className="max-w-4xl mx-auto mb-10">
            <Card className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-center text-gradient">Core Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-medium">Integrity</p>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <p className="font-medium">Transparency</p>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <p className="font-medium">Investor-first approach</p>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                      <Award className="w-6 h-6 text-foreground" />
                    </div>
                    <p className="font-medium">Regulatory compliance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sakhi & Ginnie Code of Conduct */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Sakhi Code */}
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="text-primary">🌸 
                  <span className="text-gradient">

                  Code of Conduct – Mutual Fund Sakhi
                  </span>
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">A Sakhi MUST</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Focus only on education & awareness
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Use simple, unbiased language
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Clearly disclose her limited role
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Encourage informed decision-making
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-destructive">A Sakhi MUST NOT</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      Recommend schemes or products
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      Handle money, cheques, or bank details
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      Promise returns
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      Misrepresent herself as an advisor or distributor
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Ginnie Code */}
            <Card className="border-accent/30">
              <CardHeader>
                <CardTitle className="text-accent">✨ Code of Conduct – Mutual Fund Ginnie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-accent">A Ginnie MUST</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      Follow AMFI Code of Conduct
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      Complete KYC & documentation properly
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      Explain risks and processes clearly
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      Maintain confidentiality of investor data
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-destructive">A Ginnie MUST NOT</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      Guarantee or assure returns
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      Push unsuitable products
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      Accept cash or third-party payments
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      Bypass compliance processes
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Violation may result in suspension or termination.
          </p>
        </div>
      </section>

    </div>
  );
};

export default MutualFundSakhiGinnie;
