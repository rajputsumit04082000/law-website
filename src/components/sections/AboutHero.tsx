"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, Mail, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SITE_CONTENT } from "@/data/content";

const highlights = [
  "15+ Years of Dedicated Legal Practice",
  "Trusted by 3000+ Clients Across Delhi NCR",
  "Specialist in Family, Matrimonial & Criminal Law",
  "Empathetic Approach with Fierce Representation",
];

export function AboutHero() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Image Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative"
          >
            {/* Gold decorative frame */}
            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#D4AF37]/40 rounded-3xl z-0" />

            <div className="relative h-[320px] sm:h-[420px] lg:h-[580px] w-full rounded-3xl overflow-hidden shadow-2xl z-10">
              <Image
                src="/advocate-portrait.png"
                alt="Senior Advocate – Prime Legal Service"
                fill
                className="object-cover object-top"
                priority
              />
              {/* subtle dark gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/60 via-transparent to-transparent" />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-8 -right-6 bg-[#0b1120] text-white px-8 py-6 rounded-2xl shadow-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <Scale className="text-[#D4AF37] w-10 h-10" strokeWidth={1.2} />
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] leading-tight">15+</div>
                  <div className="text-sm font-medium text-gray-300 leading-snug">
                    Years of Legal<br />Excellence
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Content Column ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <p className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-3">
              About Our Firm
            </p>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0b1120] leading-tight mb-2">
              A Legacy of Excellence
            </h2>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#a67c52] mb-6">
              & Unwavering Integrity
            </h3>
            <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-8" />

            <div className="space-y-5 text-[15px] text-gray-600 leading-relaxed mb-8 text-justify">
              <p>
                <strong className="text-[#0b1120]">Prime Legal Service</strong> is a premier law firm based in Delhi NCR, 
                led by a team of seasoned advocates with decades of combined experience. We specialize in 
                family law, matrimonial disputes, divorce, child custody, domestic violence, and criminal defense.
              </p>
              <p>
                Founded on the principles of justice, compassion, and relentless advocacy, our firm has 
                successfully represented over <strong className="text-[#0b1120]">3,000+ clients</strong> across 
                Delhi and the surrounding NCR region. We believe every client deserves not just legal 
                representation, but a trusted partner who understands the human side of every case.
              </p>
              <p>
                Our attorneys bring deep expertise, sharp legal acumen, and a personalized approach to every 
                matter — whether it's a complex litigation or a sensitive family negotiation. Your success 
                is our mission.
              </p>
            </div>

            {/* Highlights list */}
            <ul className="space-y-3 mb-10">
              {highlights.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-[#D4AF37] h-5 w-5 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-sm">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#0b1120] hover:bg-[#D4AF37] text-white h-13 px-8 text-[15px] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book a Consultation
                </Button>
              </Link>
              <a href={`tel:${SITE_CONTENT.company.phone.replace(/[\s-]/g, '')}`} className="flex items-center gap-2 text-[#0b1120] font-semibold hover:text-[#D4AF37] transition-colors group">
                <span className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                </span>
                {SITE_CONTENT.company.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
