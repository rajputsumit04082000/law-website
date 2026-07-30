"use client";

import { motion } from "framer-motion";
import { Award, UserCheck, TrendingUp, Clock, ShieldCheck, MessageSquare } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Award-Winning Expertise",
    description:
      "Recognized across Meerut for exceptional legal outcomes and client satisfaction in family, matrimonial, and criminal law.",
  },
  {
    icon: UserCheck,
    title: "Client-First Approach",
    description:
      "We listen before we strategize. Every case receives personalized attention and a strategy crafted around your unique situation.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description:
      "With a 89% success ratio and 3000+ satisfied clients, our results speak louder than words.",
  },
  {
    icon: Clock,
    title: "Timely Representation",
    description:
      "We respect your time. Deadlines are sacred — our team ensures every filing, hearing, and response is prompt and precise.",
  },
  {
    icon: ShieldCheck,
    title: "Full Confidentiality",
    description:
      "Your privacy is paramount. All case details, documents, and communications are handled with the strictest confidentiality.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "No legalese, no surprises. We keep you informed at every stage with clear, honest updates about your case.",
  },
];

export function AboutWhyChooseUs() {
  return (
    <section className="py-20 bg-[#0b1120] text-white relative overflow-hidden">
      {/* decorative glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-3">
            Our Advantage
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Prime Legal Service
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-gray-400 text-[15px] mt-6 max-w-2xl mx-auto leading-relaxed">
            Choosing the right lawyer can define the outcome of your case. Here is why thousands of 
            clients across Meerut trust us with their most important legal matters.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                className="group flex gap-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/30 rounded-2xl p-7 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors duration-400">
                  <Icon className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
