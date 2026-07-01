"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Handshake } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide every client with expert, compassionate, and results-driven legal representation — ensuring justice is accessible, transparent, and effective for all.",
    color: "from-[#0b1120] to-[#1e293b]",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be Delhi NCR's most trusted law firm, known for integrity, excellence, and a genuine commitment to transforming lives through the power of the law.",
    color: "from-[#8B6914] to-[#D4AF37]",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, empathy, and relentless advocacy. We treat every client like family — with respect, confidentiality, and unwavering dedication to their cause.",
    color: "from-[#0b1120] to-[#1e293b]",
  },
  {
    icon: Handshake,
    title: "Our Promise",
    description:
      "Transparent communication, timely updates, and zero compromise on quality. You'll always know where your case stands and feel supported every step of the way.",
    color: "from-[#8B6914] to-[#D4AF37]",
  },
];

export function MissionVision() {
  return (
    <section className="py-20 bg-[#f8f6f1]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-3">
            What Drives Us
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0b1120] mb-4">
            Our Mission, Vision & Values
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* accent bar at top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />

                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>

                <h3 className="font-heading text-xl font-bold text-[#0b1120] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed text-justify">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
