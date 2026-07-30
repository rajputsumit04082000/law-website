"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AppointmentModal } from "@/components/modals/AppointmentModal";
import Link from "next/link";

const CAROUSEL_IMAGES = [
  "/images.jpg",
  "/images (1).jpg",
  "/images (2).jpg",
  "/images (3).jpg",
  "/images (4).jpg",
  "/images (5).jpg"
];

export function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);

  return (
    <section className="relative h-[90vh] min-h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <AnimatePresence>
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${CAROUSEL_IMAGES[currentIdx]}')` }}
        >
          <div className="absolute inset-0 bg-[#2d330f]/80 mix-blend-multiply" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-between px-3 sm:px-8">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-[#a67c52] text-white transition-all backdrop-blur-sm"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-[#a67c52] text-white transition-all backdrop-blur-sm"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="container relative z-10 mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
            Advocates, Solicitors &amp; <br className="hidden sm:block" />
            <span className="text-[#a67c52]">Legal Consultants</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Providing exceptional legal representation and strategic counsel to businesses and individuals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-[#a67c52] hover:bg-[#8b6540] text-white text-base sm:text-lg h-12 sm:h-14 px-7 sm:px-8 rounded-full border-none"
            >
              Book Consultation
            </Button>
            <Link href="/practice-areas/" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-[#a67c52] hover:text-white hover:border-[#a67c52] text-base sm:text-lg h-12 sm:h-14 px-7 sm:px-8 rounded-full transition-colors"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-[#a67c52]"
        />
      </motion.div>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
