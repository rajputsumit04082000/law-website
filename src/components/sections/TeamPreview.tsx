"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SITE_CONTENT } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TeamPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Meet Our Legal Experts" 
          subtitle="Our Team" 
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {SITE_CONTENT.team.slice(0, 3).map((member) => (
            <motion.div key={member.id} variants={itemVariants} className="group flex flex-col h-full">
              <div className="relative overflow-hidden rounded-2xl h-48 sm:h-52 mb-5 shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 space-x-4">
                  <Link href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </Link>
                  <Link href={member.socials.twitter} className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/></svg>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground line-clamp-3">
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
