"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const workEthicPoints = [
  {
    title: "Integrity",
    desc: "We uphold the highest ethical standards in every case we handle.",
  },
  {
    title: "Accountability",
    desc: "We take ownership of our work and deliver on our promises.",
  },
  {
    title: "Transparency",
    desc: "We maintain open, honest, and clear communication with our clients.",
  },
  {
    title: "Excellence",
    desc: "We leave no stone unturned in achieving the best possible results.",
  },
];

export function PhilosophySection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative"
          >
            {/* Gold border frame behind */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4AF37]/30 rounded-2xl z-0" />
            <div className="relative h-[440px] w-full rounded-2xl overflow-hidden shadow-xl z-10">
              <Image
                src="/images10.jpg"
                alt="Supreme Court of India – Philosophy of Justice"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* ── Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <p className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-3">
              Our Guiding Principles
            </p>
            <h2 className="font-heading text-4xl md:text-[42px] font-bold text-[#0b1120] leading-tight mb-5">
              Our Philosophy &amp; Work Ethic
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-7" />

            <p className="text-gray-600 text-[15px] leading-relaxed mb-6 text-justify">
              At <strong className="text-[#0b1120]">Prime Legal Service</strong>, our philosophy is simple —
              client-first, always. We believe that effective legal representation is not just about winning
              cases; it&apos;s about protecting rights, preserving dignity, and empowering clients to make
              informed decisions.
            </p>

            <p className="text-gray-700 font-semibold text-[15px] mb-4">
              Our work ethic is built on:
            </p>

            <ul className="space-y-3 mb-7">
              {workEthicPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="flex items-start gap-2 text-[15px] text-gray-600"
                >
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
                  <span>
                    <strong className="text-[#0b1120]">{point.title}</strong>
                    {" "}–{" "}
                    {point.desc}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className="text-gray-600 text-[15px] leading-relaxed text-justify">
              We see ourselves not just as lawyers, but as strategic partners in our clients&apos; legal
              journey — offering guidance, foresight, and a relentless drive for success.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
