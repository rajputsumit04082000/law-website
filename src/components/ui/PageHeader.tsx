"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHeader({ 
  title, 
  subtitle, 
  image = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
}: PageHeaderProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {subtitle && (
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
              {subtitle}
            </p>
          )}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
