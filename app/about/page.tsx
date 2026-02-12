"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Handshake, Sparkles, Rocket } from "lucide-react";
import Image from "next/image";



type TeamMember = {
  name: string;
  role: string;
  text: string;
};

// ================= DATA =================

type ValueItem = {
  title: string;
  icon: any;
  description: string;
  points: string[];
};

const values: ValueItem[] = [
  {
    title: "Financial Education",
    icon: Rocket,
    description:
      "We conduct structured awareness programs that simplify:",
    points: [
      "Savings vs investing",
      "SIPs and long-term compounding",
      "Risk understanding",
      "Goal-based financial planning",
    ],
  },
  {
    title: "Wealth Creation Through Discipline",
    icon: Sparkles,
    description:
      "We promote small but consistent investments that help first-time investors:",
    points: [
      "Build assets in their own name",
      "Create emergency funds",
      "Plan for children’s education",
      "Secure long-term financial stability",
    ],
  },
  {
    title: "Women-Led Distribution Model",
    icon: Handshake,
    description:
      "StreeDhana creates income opportunities by training women to become financial facilitators. Our Sakhi / Ginnie model enables women to:",
    points: [
      "Conduct awareness programs",
      "Generate investor leads",
      "Support onboarding processes",
      "Earn commissions and recurring trail income",
    ],
  },
];


const team: TeamMember[] = [
  {
    name: "Gayathri Arvind",
    role: "Head of Product & Alliances",
    text: "15+ years building product and processes across growth-stage startups.",
  },
  {
    name: "Ankita Bhattacharya",
    role: "Head of Marketing",
    text: "15+ years of brand and marketing experience with leading organizations.",
  },
  {
    name: "Harish R",
    role: "Technology Lead",
    text: "Built and scaled technology teams across fintech and enterprise platforms.",
  },
];

export default function AboutPage(): JSX.Element {
  return (
    <main className="bg-background text-foreground">

      <section className="pt-14 pb-12 md:pt-24 md:pb-16 bg-backgound shadow-soft text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient mb-6"
        >
          Women-First Mutual Fund Distribution Platform
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg sm:text-lg md:text-lg lg:text-lg font-display font-bold mb-6"
        >
          Built for Bharat. Designed for Trust.
        </motion.p>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          StreeDhana is a women-focused financial education platform built to simplify investing in India.
          We exist to make money understandable before it becomes actionable.
        </p>
        <br />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          For many women, investing feels complicated, intimidating, or overly technical. StreeDhana changes that. 
          We break down complex financial concepts, especially around mutual funds and investment distribution into 
          simple, structured, and practical learning journeys designed for first-time investors.
        </p>
        <br />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We believe financial confidence does not begin with returns.</p>
        <br />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          It begins with understanding.</p>

          <div className="text-center">
            <div className="mt-4 relative w-full h-64">
              <Image
                src="/about-illustration.png"
                alt="About Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold mb-12 text-gradient">
          What We Do 
        </h2>
      
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, i) => {
            const Icon = item.icon;
      
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="rounded-2xl bg-card shadow-soft h-full hover-shadow-glow transition">
                  <CardContent className="p-6 space-y-4">
                    <Icon className="text-primary" size={36} />
      
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>
      
                    <p className="text-foreground text-sm">
                      {item.description}
                    </p>
      
                    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
                      {item.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 ">
          <Card className="rounded-2xl bg-card shadow-soft hover-shadow-glow h-full border-none">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                Our Mission
              </h2>

              <p className="text-foreground leading-relaxed">
                To help women understand money before they invest it.
              </p>
        
              <p className="text-foreground leading-relaxed">
                Because financial independence does not start with capital.
              </p>
          
              <p className="text-foreground font-medium">
                It starts with clarity.
              </p>
            </CardContent>
          </Card>
        
          <Card className="rounded-2xl bg-card shadow-soft hover-shadow-glow h-full border-none">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                Our Vision
              </h2>

              <p className="text-foreground leading-relaxed">
                To build India’s largest women-led financial distribution network that:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-foreground">
                <li>Increases SIP penetration</li>
                <li>Improves financial literacy among women</li>
                <li>Enables independent income for women professionals</li>
                <li>Drives sustainable wealth creation at the household level</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-4">
        <Card className="rounded-2xl bg-card shadow-large">
          <CardContent className="p-8 space-y-4">
            <div className="grid md:grid-cols-3 gap-10 items-start">
              {/* Image */}
              <div className="relative w-full h-92 rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  src="/founder.png"
                  alt="Founder"
                  fill
                  className="object-contain"
                />
              </div>
      
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-bold">
                  Ms. Nitu Raghuvanshi
                </h3>
      
                <p className="text-md font-semibold">
                  Founder — StreeDhana
                </p>
      
                <p className="text-md font-semibold">
                  NextStep Financials Service Private Limited
                </p>
      
                <p className="text-gray-600 leading-relaxed">
                  Ms. Nitu Raghuvanshi is a purpose-driven entrepreneur building structured pathways for
                  employment, women leadership, and financial independence. Beginning her career in 2007
                  as a trainer, she witnessed firsthand how capable youth — especially from small
                  towns — struggled due to lack of guidance, exposure, and career alignment.
                </p>
      
                <p className="text-gray-600 leading-relaxed">
                  Determined to bridge this gap, she founded <strong>ReadyRecruit India</strong>, enabling graduates to
                  transition successfully from campus to careers in the BFSI sector. She later co-founded
                  <strong> STAFFIAA</strong>, a women-managed recruitment firm that, within a short span of time,
                  partnered with 30+ BFSI institutions, championing ethical hiring and creating leadership
                  opportunities for experienced women professionals.
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Recognising that true empowerment goes beyond employment, she conceptualised
              StreeDhana, a financial awareness initiative focused on investor education,
              digital safety, and building financial confidence among women.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Her mission is clear:
              <br />
              <strong>Education → Employability → Employment → Financial Awareness → Financial Independence.</strong><br />
              Through integrated initiatives, she is committed to creating sustainable, women-led impact at scale.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-4">
        <Card className="rounded-2xl bg-card shadow-large">
          <CardContent className="p-8 space-y-4">
            <div className="grid md:grid-cols-3 gap-10 items-start">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  src="/founder.png"
                  alt="Founder"
                  fill
                  className="object-contain"
                />
              </div>
      
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-bold">
                  Ms. Mantasha 
                </h3>
      
                <p className="text-md font-semibold">
                  Co-Founder — StreeDhana
                </p>
      
                <p className="text-md font-semibold">
                  NextStep Financials Service Private Limited
                </p>
      
                <p className="text-gray-600 leading-relaxed">
                  Ms. Mantasha is a committed financial literacy advocate 
                  focused on building structured, compliant, and community-driven 
                  investor education models for women. As Co-Founder of StreeDhana, 
                  she plays a key role in designing Investor Awareness Programs (IAPs), 
                  training MF Ginnies and Sakhis, and strengthening grassroots financial 
                  outreach.
                </p>
      
                <p className="text-gray-600 leading-relaxed">
                  With a strong focus on clarity before capital, she ensures 
                  that women understand financial concepts, digital safety, 
                  and responsible investing before taking action. Her work 
                  bridges the gap between financial products and real financial 
                  confidence.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Through StreeDhana, she contributes to creating scalable, women-led 
                  financial ecosystems that promote awareness, participation, and long-term 
                  financial independence across communities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-navy">
          Meet the Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="rounded-2xl bg-card shadow-soft hover-shadow-glow transition border-none">
                <CardContent className="p-6 space-y-4 text-center ">
                  <div className="relative h-24 w-24 mx-auto rounded-full overflow-hidden bg-gray-200">

                    <Image
                      src="/team.png"
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="font-semibold text-lg">
                    {member.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {member.role}
                  </p>

                  <p className="text-gray-600 text-sm">
                    {member.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section> */}

      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-lg md:text-xl font-medium max-w-4xl mx-auto mb-12">
            At StreeDhana, diversity and purpose form the foundation of our team. We are a collective of driven professionals and grassroots champions committed to building financial confidence for women in a rapidly evolving India. 
          </p>
        
          <div className="grid md:grid-cols-3 gap-6 auto-rows-[220px]">
            <div className="relative md:row-span-2 rounded-3xl overflow-hidden shadow-soft">
              <Image src="/culture-1.jpg" alt="Team culture" fill className="object-cover" />
            </div>
        
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <Image src="/culture-2.png" alt="Team culture" fill className="object-cover" />
            </div>
          
            <div className="relative md:row-span-2 rounded-3xl overflow-hidden shadow-soft">
              <Image src="/culture-3.jpg" alt="Team culture" fill className="object-cover" />
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <Image src="/culture-4.jpg" alt="Team culture" fill className="object-cover" />
            </div>
          
            <div className="relative rounded-3xl overflow-hidden shadow-soft md:col-span-2 text-centre">
              <Image src="/culture-5.png" alt="Team culture" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
