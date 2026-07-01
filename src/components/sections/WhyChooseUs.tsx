"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 md:py-20 bg-[#0b1120] text-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <SectionHeading 
          title="Why Choose Our Firm" 
          subtitle="Our Advantage" 
          light 
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mt-12 pl-0 md:pl-8"
        >
          {SITE_CONTENT.whyChooseUs.map((item, index) => {
            const Icon = Icons[item.icon as keyof typeof Icons] as React.ElementType;
            
            return (
              <motion.div key={index} variants={itemVariants} className="text-center group flex flex-col items-center">
                <div className="w-16 h-16 bg-[#1e293b]/60 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#a67c52]/20 transition-colors duration-500">
                  {Icon && <Icon className="w-7 h-7 text-[#a67c52] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />}
                </div>
                <h3 className="text-lg font-heading font-bold mb-4 tracking-wide">{item.title}</h3>
                <p className="text-[14px] text-gray-400 leading-relaxed max-w-[280px] mx-auto">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
