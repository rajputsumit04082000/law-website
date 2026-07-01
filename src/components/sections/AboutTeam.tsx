"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";

export function AboutTeam() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <section className="py-20 bg-white">
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
            The People Behind Your Case
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0b1120] mb-4">
            Meet Our Legal Team
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-gray-500 text-[15px] mt-6 max-w-2xl mx-auto leading-relaxed">
            Our attorneys combine deep legal expertise with genuine care for each client. 
            Every member of our team is handpicked for their skill, character, and commitment to justice.
          </p>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SITE_CONTENT.team.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-64 w-full overflow-hidden shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/80 via-[#0b1120]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Social icons on hover */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-4 group-hover:translate-y-0">
                  <Link
                    href={member.socials.linkedin}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#D4AF37] transition-colors shadow"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#0b1120]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </Link>
                  <Link
                    href={member.socials.twitter}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#D4AF37] transition-colors shadow"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#0b1120]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/></svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#D4AF37] transition-colors shadow"
                  >
                    <Mail className="w-4 h-4 text-[#0b1120]" />
                  </Link>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                {/* Gold accent bar */}
                <div className="w-8 h-0.5 bg-[#D4AF37] mb-3" />
                <h3 className="font-heading text-lg font-bold text-[#0b1120] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#a67c52] text-sm font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
