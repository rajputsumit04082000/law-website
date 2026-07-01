"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/data/content";
import { useInView } from "react-intersection-observer";
import { Scale, Users, Smile, Award } from "lucide-react";

function Counter({ value, suffix, className }: { value: number; suffix?: string; className?: string }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      // Special case for years to start closer to the target
      if (value > 1000 && value < 2100 && suffix === "") {
        start = 1990;
      }
      
      const duration = 2000;
      const increment = Math.max(1, (value - start) / (duration / 16));

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value, suffix]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Scale": return <Scale strokeWidth={1} size={44} />;
    case "Users": return <Users strokeWidth={1} size={44} />;
    case "Smile": return <Smile strokeWidth={1} size={44} />;
    case "Award": return <Award strokeWidth={1} size={44} />;
    default: return <Scale strokeWidth={1} size={44} />;
  }
};

export function Stats() {
  return (
    <section className="py-12 bg-[#ebebeb] border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 justify-items-start md:justify-items-center">
          {SITE_CONTENT.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <div className="text-[#a67c52]">
                {getIcon(stat.icon || "Scale")}
              </div>
              <div className="flex flex-col text-left">
                <Counter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  className="text-2xl md:text-[28px] font-bold font-heading text-gray-900 leading-tight mb-1" 
                />
                <span className="text-[13px] md:text-sm text-gray-700 font-medium whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
