"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";

export function AboutCTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#8B6914] via-[#D4AF37] to-[#a67c52]">
      {/* decorative circles */}
      <div className="absolute top-[-60px] right-[-60px] w-72 h-72 bg-white/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-40px] w-64 h-64 bg-white/10 rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-white/80 font-semibold tracking-wider uppercase text-sm mb-4">
            Get Expert Legal Advice
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to Discuss<br />Your Legal Matter?
          </h2>
          <p className="text-white/85 text-[15px] max-w-xl mx-auto mb-10 leading-relaxed">
            Our attorneys are available for a confidential consultation. Take the first 
            step toward resolving your legal issue — we're here to help, every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#0b1120] hover:bg-[#1e293b] text-white font-semibold px-8 py-4 rounded-full text-[15px] shadow-lg transition-colors duration-300"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Consultation
              </motion.button>
            </Link>
            <a href={`tel:${SITE_CONTENT.company.phone.replace(/[\s-]/g, '')}`}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-[#0b1120] font-semibold px-8 py-4 rounded-full text-[15px] shadow-lg transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                Call: {SITE_CONTENT.company.phone}
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
