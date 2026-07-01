"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const bulletPoints = [
  "Award-winning legal representation",
  "Dedicated and personalized approach",
  "Deep understanding of complex laws",
  "Commitment to client success",
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[280px] sm:h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000"
                alt="Law firm office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="text-5xl font-bold text-accent mb-2">25+</div>
              <div className="text-lg font-medium">Years of Legal<br/>Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading 
              title="A Legacy of Excellence & Integrity" 
              subtitle="About Our Firm" 
              centered={false} 
            />
            
            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {bulletPoints.map((point, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="text-accent h-6 w-6 shrink-0" />
                  <span className="font-medium text-foreground">{point}</span>
                </motion.li>
              ))}
            </ul>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg rounded-full">
              Read Our Story
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
