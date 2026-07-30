"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export function SuccessModal({
  isOpen,
  onClose,
  title = "Thank You!",
  message = "Your enquiry has been submitted successfully. Our legal team will contact you shortly.",
}: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[250]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[251] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center pointer-events-auto relative border border-[#D4AF37]/30 overflow-hidden"
            >
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#a67c52] to-[#D4AF37]" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Checkmark Icon */}
              <div className="w-20 h-20 bg-[#a67c52]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#a67c52]/20">
                <CheckCircle2 className="w-11 h-11 text-[#a67c52]" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-3xl font-bold text-[#0b1120] mb-3">
                {title}
              </h3>

              {/* Message */}
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                {message}
              </p>

              {/* Action Button */}
              <button
                onClick={onClose}
                className="w-full bg-[#0b1120] hover:bg-[#a67c52] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-[15px]"
              >
                Done
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
