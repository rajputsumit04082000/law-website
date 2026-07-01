"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function ContactMap() {
  return (
    <section className="bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[420px] group"
      >
        {/* Map embed — Preet Vihar, Delhi */}
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
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Prime Legal Service – Preet Vihar Office Location"
            className="pointer-events-none"
          />
          {/* hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#a67c52] font-semibold px-6 py-3 rounded-full shadow-lg text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </span>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
