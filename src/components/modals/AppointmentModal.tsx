"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useState } from "react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); }, 2000);
  };

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[201] flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              className="bg-white rounded-t-2xl sm:rounded-xl shadow-2xl w-full sm:max-w-2xl overflow-hidden pointer-events-auto relative max-h-[92vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 text-gray-400 hover:text-[#a67c52] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 sm:p-10">
                <div className="text-center mb-6">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120]">Enquiry Now</h2>
                  <div className="w-14 h-1 bg-[#a67c52] mx-auto mt-3 rounded-full"></div>
                </div>

                {submitted ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10 text-center">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#0b1120] mb-2">Thank You!</h3>
                    <p className="text-gray-600">Your enquiry has been submitted. We will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" required placeholder="Enter your name" className="w-full h-12 px-4 rounded-md border border-gray-300 text-[14.5px] outline-none focus:border-[#a67c52] transition-colors" />
                      <input type="email" required placeholder="Enter your email" className="w-full h-12 px-4 rounded-md border border-gray-300 text-[14.5px] outline-none focus:border-[#a67c52] transition-colors" />
                      <input type="tel" required placeholder="Enter your number" className="w-full h-12 px-4 rounded-md border border-gray-300 text-[14.5px] outline-none focus:border-[#a67c52] transition-colors" />
                      <input type="text" required placeholder="Enter your subject" className="w-full h-12 px-4 rounded-md border border-gray-300 text-[14.5px] outline-none focus:border-[#a67c52] transition-colors" />
                    </div>
                    <textarea rows={4} required placeholder="Write your message here..." className="w-full p-4 rounded-md border border-gray-300 text-[14.5px] outline-none focus:border-[#a67c52] resize-none transition-colors" />
                    <div className="flex justify-center pt-1">
                      <button type="submit" className="bg-[#a67c52] hover:bg-[#8B6914] text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2 text-[15px] w-full sm:w-auto">
                        Send Message <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
