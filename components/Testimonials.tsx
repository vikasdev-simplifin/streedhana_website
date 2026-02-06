"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  avatar: string;
  text: string;
  rating: number;
};

const splitIntoColumns = <T,>(arr: T[], cols: number): T[][] => {
  const result: T[][] = Array.from({ length: cols }, () => []);
  arr.forEach((item, i) => {
    result[i % cols].push(item);
  });
  return result;
};

const testimonials = [
  {
    name: "Saran Vashisht",
    avatar: "SV",
    text: "Investment apps in the western world are great for your goals like buying jewellery, home appliances, travel trips. All in all I found this app great because it lets you save and earn both at the same time. Regarding the customer support experience, team was easy to reach, and quick to guide and respond to my issue! I highly recommend try this app once!!",
    rating: 5,
  },
  {
    name: "Diksha Sharma",
    avatar: "DS",
    text: "This savings app is a game-changer! The installment feature makes saving manageable, and the added bonus of brand vouchers is fantastic. Redeeming them boosts my savings even further. Highly recommend for anyone looking to grow their money while enjoying extra perks!",
    rating: 5,
  },
  {
    name: "Abhishek Sainani",
    avatar: "AS",
    text: "This app has excellent design. The layout is comfortable and navigation is smooth. I could create my profile and my first investment goal easily. The brand specific investment options have good variety and I'll be opting for the travel, mattress and electric bike one. Overall its an easy to use app.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    avatar: "PM",
    text: "You can trust them, they are genuine. As a first-time investor, I was nervous about putting my money anywhere. StreeDhana made it so simple and the support team guided me through everything. Now I invest every month without worry!",
    rating: 5,
  },
  {
    name: "Anita Reddy",
    avatar: "AR",
    text: "Finally a platform that understands Indian women! The financial planning tools are exactly what I needed. My goal of saving for my daughter's education is now on track. Thank you StreeDhana!",
    rating: 5,
  },
];

const Testimonials = () => {
  const columns = splitIntoColumns(testimonials, 3);

  return (
    <section className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Trusted & Loved by Indian Women
          </h2>
          <p className="text-xl text-primary font-semibold">
            If they can do it, so can you!
          </p>
        </div>
      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className="relative h-[400px] overflow-hidden"
            >
              <div
                className={`
                  space-y-6
                  will-change-transform
                  pause-on-hover
                  ${
                    colIndex === 1
                      ? "animate-scroll-down"
                      : "animate-scroll-up"
                  }
                `}
              >
                {[...column, ...column].map((testimonial, i) => (
                  <div
                    key={`${testimonial.name}-${i}`}
                    className="bg-background border border-border rounded-2xl p-4 shadow-sm"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star
                          key={j}
                          className="w-4 h-4 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      “{testimonial.text}”
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <span className="font-semibold text-foreground">
                        {testimonial.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
