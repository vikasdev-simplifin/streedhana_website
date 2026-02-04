"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
}

const ToolCard = ({
  title,
  description,
  icon: Icon,
  href,
  onClick,
}: ToolCardProps) => {
  const Wrapper = href ? Link : "div";

  return (
    <Wrapper
      href={href ?? ""}
      onClick={onClick}
      className="block h-full"
    >
      <Card
        className="
          group
          h-full
          cursor-pointer
          border
          border-border/60
          bg-card
          transition-all
          duration-300
          md:hover:-translate-y-2
          md:hover:shadow-xl
          md:hover:border-primary/40
        "
      >
        <CardContent className="p-6 relative">
          {/* Hover gradient (desktop only) */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-7 h-7 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground mb-2 md:group-hover:text-primary transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>

            {/* Explore CTA */}
            <div
              className="
                mt-4
                flex
                items-center
                text-primary
                text-sm
                font-medium
                md:opacity-0
                md:group-hover:opacity-100
                transition-all
                duration-300
              "
            >
              Explore
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default ToolCard;
