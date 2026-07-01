"use client";

import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/data/content";

export function ProcessTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 md:py-20 bg-[#f4f4f4] text-black overflow-hidden relative">
      {/* Optional faint background image for building outline if available, leaving plain gray for now to match as closely as possible without asset */}
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        <div className="mb-12 md:mb-16 pl-0 md:pl-8">
          <h2 className="text-4xl md:text-[44px] font-heading font-bold mb-4 text-[#000000]">
            The Way We Work
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mt-12 pl-0 md:pl-8"
        >
          {/* Horizontal Dotted Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-0 right-12 border-t-2 border-dotted border-black z-0" />

          {/* Vertical Dotted Line (Mobile) */}
          <div className="md:hidden absolute top-6 bottom-6 left-6 border-l-2 border-dotted border-black z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {SITE_CONTENT.process.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative z-10 flex flex-row md:flex-col items-start md:items-start text-left pr-4">
                
                {/* Step Number Circle */}
                <div className="shrink-0 w-12 h-12 bg-[#051915] rounded-full flex items-center justify-center border-4 border-[#f4f4f4] relative z-10 md:mb-6">
                  <span className="text-[17px] font-heading font-bold text-[#a67c52]">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="ml-6 md:ml-0 md:mt-0">
                  <h3 className="text-[15px] font-bold mb-3 text-black leading-tight tracking-tight pr-4">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-gray-800 leading-relaxed pr-2">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
