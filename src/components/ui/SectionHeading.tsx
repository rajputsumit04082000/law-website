"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        centered ? "text-center" : "text-left",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {subtitle && (
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
            {subtitle}
          </p>
        )}
        <h2
          className={cn(
            "font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
            light ? "text-white" : "text-primary"
          )}
        >
          {title}
        </h2>
        {centered && (
          <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full" />
        )}
        {!centered && (
          <div className="w-20 h-1 bg-accent mt-6 rounded-full" />
        )}
      </motion.div>
    </div>
  );
}
