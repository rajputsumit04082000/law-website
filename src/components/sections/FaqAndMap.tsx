"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAndMap() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* ── Left column: FAQ ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <p className="text-[#a67c52] font-semibold tracking-wider uppercase text-sm mb-2">
              Clear Answers
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0b1120] mb-2">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-6" />

            {/* Accordion fills remaining height */}
            <div className="flex-1 flex flex-col justify-between">
              <Accordion className="w-full">
                {SITE_CONTENT.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left font-heading text-[15px] font-semibold hover:text-[#a67c52] hover:no-underline py-5 data-[state=open]:text-[#a67c52]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500 text-[14px] leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>

          {/* ── Right column: Google Map ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <p className="text-[#a67c52] font-semibold tracking-wider uppercase text-sm mb-2">
              Find Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0b1120] mb-2">
              Our Location
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-6" />

            {/* Map stretches to fill remaining space */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group flex-1 min-h-[300px]">
              <a
                href="https://www.google.com/maps/place/Sincere+Tower,+Preet+Vihar,+Delhi-110092"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full h-full"
                aria-label="Open office location in Google Maps"
              >
                <iframe
                  src="https://maps.google.com/maps?q=Sincere+Tower+Preet+Vihar+Delhi+110092&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Prime Legal Service – Preet Vihar Office"
                  className="pointer-events-none w-full h-full absolute inset-0"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#a67c52] font-semibold px-6 py-3 rounded-full shadow-lg text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Open in Google Maps
                  </span>
                </div>
              </a>
            </div>

            {/* Address pill */}
            <div className="mt-3 flex items-start gap-3 bg-[#f5f5f0] rounded-xl px-5 py-4 border border-[#D4AF37]/20">
              <MapPin className="w-5 h-5 text-[#a67c52] shrink-0 mt-0.5" />
              <p className="text-[13px] text-gray-600 leading-snug">
                <strong className="text-[#0b1120] font-semibold block mb-0.5">
                  Main Office — Preet Vihar
                </strong>
                201-202, Sincere Tower, 2nd Floor, Commercial Complex,
                Preet Vihar, Near Petrol Pump, Delhi-110092
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
