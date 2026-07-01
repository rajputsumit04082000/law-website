"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, ChevronRight } from "lucide-react";

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  }

  return (
    <section className="py-20 bg-[#f0ede8]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Form Side ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <p className="text-[#a67c52] font-semibold tracking-wide text-sm mb-2">
              We&apos;re Here For You
            </p>
            <h2 className="font-heading text-4xl md:text-[42px] font-bold text-[#0b1120] leading-tight mb-8">
              Book An Appointment
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-10 text-center shadow-md border border-[#D4AF37]/20"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Send className="w-7 h-7 text-[#a67c52]" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#0b1120] mb-3">
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Thank you for reaching out. Our team will contact you shortly to confirm your appointment.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1 — Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-gray-700">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="h-11 px-4 rounded-lg border border-gray-300 bg-white text-[14px] text-gray-800 placeholder:text-gray-400 focus:border-[#a67c52] focus:ring-1 focus:ring-[#a67c52] outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-gray-700">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="Enter your email"
                      className="h-11 px-4 rounded-lg border border-gray-300 bg-white text-[14px] text-gray-800 placeholder:text-gray-400 focus:border-[#a67c52] focus:ring-1 focus:ring-[#a67c52] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 2 — Phone + Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-gray-700">
                      Your Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="Enter your number"
                      className="h-11 px-4 rounded-lg border border-gray-300 bg-white text-[14px] text-gray-800 placeholder:text-gray-400 focus:border-[#a67c52] focus:ring-1 focus:ring-[#a67c52] outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-gray-700">
                      Subject
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your subject"
                      className="h-11 px-4 rounded-lg border border-gray-300 bg-white text-[14px] text-gray-800 placeholder:text-gray-400 focus:border-[#a67c52] focus:ring-1 focus:ring-[#a67c52] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 3 — Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-700">
                    Query / Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="px-4 py-3 rounded-lg border border-gray-300 bg-white text-[14px] text-gray-800 placeholder:text-gray-400 focus:border-[#a67c52] focus:ring-1 focus:ring-[#a67c52] outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-[#a67c52] hover:bg-[#8B6914] text-white font-semibold px-8 py-3 rounded-full text-[15px] transition-colors duration-300 disabled:opacity-60 shadow-md hover:shadow-lg"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* ── Image Side ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80&w=900"
                alt="Legal scales and gavel — Book an appointment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b1120]/30 via-transparent to-[#a67c52]/20" />
            </div>
            {/* Gold badge overlay */}
            <div className="absolute -bottom-5 -left-5 bg-[#0b1120] text-white px-6 py-5 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold text-[#D4AF37] font-heading">Free</div>
              <div className="text-sm text-gray-300 font-medium">Initial Consultation</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
