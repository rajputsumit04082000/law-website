"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const bulletPoints = [
  "Experienced & Dedicated Legal Professionals",
  "Personalized and confidential service tailored to your needs",
  "Transparent Communication & Honest Advice",
  "Proven Track Record of Success in Various Legal Fields",
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
                src="/tingey-injury-law-firm-L4YGuSg0fxs-unsplash.jpg"
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
              <div className="text-5xl font-bold text-accent mb-2">16+</div>
              <div className="text-lg font-medium">Years of Legal<br />Excellence</div>
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
                With years of legal experience, we provide strategic, practical, and result-oriented legal solutions for individuals, businesses, and organizations. Our commitment is to protect your rights, simplify complex legal matters, and deliver professional representation with complete transparency and dedication.
              </p>
              <p>
                Every case is unique, and we believe in offering personalized legal guidance tailored to each client's specific needs. From consultation to courtroom representation, our focus remains on achieving the best possible outcome while maintaining the highest ethical standards.
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
