import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is StreeDhana safe and trustworthy?",
    answer: "Yes. StreeDhana is built with safety and transparency at its core. We work only with regulated mutual fund houses and follow strict security standards to protect your money and personal information.",
  },
  {
    question: "Are the investments SEBI and AMFI approved?",
    answer: "Yes. All mutual fund investments are made through SEBI-registered funds and follow AMFI guidelines, ensuring complete regulatory compliance.",
  },
  {
    question: "Can I withdraw my money anytime?",
    answer: "Yes. Your money is always in your control. You can withdraw anytime, from anywhere, directly into your bank account.",
  },
  {
    question: "Is there any lock-in period on my investments?",
    answer: "Most mutual funds do not have a lock-in period. Some specific funds may have a short lock-in, which will always be clearly informed before you invest.",
  },
  {
    question: "Can I start investing with a small amount?",
    answer: "Yes. You can start with small monthly SIP amounts. You don't need a large sum to begin—consistent saving is what matters.",
  },
  {
    question: "Is StreeDhana suitable for first-time investors?",
    answer: "Absolutely. StreeDhana is specially designed for first-time investors, especially women. Everything is explained in simple language with step-by-step guidance.",
  },
  {
    question: "Do I need financial knowledge to use StreeDhana?",
    answer: "No. You don't need any prior financial knowledge. Our platform and experts help you understand and choose what's right for you.",
  },
  {
    question: "How easy is the online KYC and onboarding process?",
    answer: "Very easy. The entire process is digital, paperless, and secure. You can complete KYC from home in just a few minutes.",
  },
  {
    question: "Will I get personal support if I need help?",
    answer: "Yes. You will have access to real financial experts who are available to guide and support you whenever you need help.",
  },
  {
    question: "Are there any hidden charges or fees?",
    answer: "No. We believe in complete transparency. All charges, if any, are clearly explained upfront—no hidden costs.",
  },
  {
    question: "Can men also use StreeDhana?",
    answer: "Yes. While StreeDhana is designed with women's financial needs at the center, men are also welcome to use the platform. Anyone who values simple, safe, and goal-based investing can use StreeDhana.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">🌸</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 text-gradient">
            Your Questions, Answered
          </h2>
          <p className="text-xl text-muted-foreground">
            Clear answers. Honest guidance. No confusion.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary data-[state=open]:shadow-soft hover-shadow-soft transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="text-center mt-12 text-lg font-display font-semibold text-secondary">
          Simple answers. Honest Guidance. Your Money, Your Comfort.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
