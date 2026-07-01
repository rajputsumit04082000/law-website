"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1505664173615-04f1bef7b500?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Rights?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Our team of expert attorneys is ready to evaluate your case and provide the strategic counsel you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white text-lg h-14 px-10 rounded-full">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary text-lg h-14 px-10 rounded-full">
              Call Us Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
