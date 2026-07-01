"use client";

import { motion } from "framer-motion";

export function CommitmentSection() {
  return (
    <section className="py-20 bg-[#f8f6f1]">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* ── Main heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-8"
        >
          <p className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-3">
            Our Standard
          </p>
          <h2 className="font-heading text-4xl md:text-[42px] font-bold text-[#0b1120] leading-tight mb-5">
            Our Commitment to Excellence
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-7" />

          <p className="text-gray-600 text-[15px] leading-relaxed mb-5 text-justify">
            Our lawyers are excellent in legal drafting — whether it&apos;s petitions, complaints, deeds, 
            agreements or complex contracts and negotiations. We excel at negotiation, contract structuring, 
            and dispute resolution. Our success rate ranks among the highest in India, making us one of the 
            leading law firms in <strong className="text-[#0b1120]">Delhi NCR</strong>.
          </p>

          <p className="text-gray-600 text-[15px] leading-relaxed text-justify">
            With a client base spanning multinational corporations, public sector enterprises, entrepreneurs, 
            and individuals, we also cater to international clients, offering proactive legal support for 
            cross-border matters through our robust global network.
          </p>
        </motion.div>

        {/* ── Vision for the Future highlighted box ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative bg-white border border-[#D4AF37]/30 rounded-2xl p-8 shadow-md overflow-hidden"
        >
          {/* Gold left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] to-[#a67c52] rounded-l-2xl" />

          <div className="pl-4">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#0b1120] mb-5">
              Our Vision for the Future
            </h3>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-4 text-justify">
              We aspire to be more than just a law firm — we aim to be a trusted partner in justice, 
              recognized not only for our legal victories but also for the lasting relationships we build 
              with our clientele. Guided by the principles of honesty, consistency, and client empowerment, 
              we continue to adapt, evolve, and innovate in a rapidly changing legal environment dynamically 
              as per the requirements of our clients.
            </p>

            <p className="text-gray-600 text-[15px] leading-relaxed text-justify">
              When you choose <strong className="text-[#0b1120]">Prime Legal Service</strong>, you&apos;re 
              not just hiring a lawyer — you&apos;re securing a dedicated team that will fight for you, 
              guide you, and stand by you at every stage of your legal journey.
            </p>
          </div>

          {/* decorative gold circle */}
          <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#D4AF37]/8 rounded-full pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
