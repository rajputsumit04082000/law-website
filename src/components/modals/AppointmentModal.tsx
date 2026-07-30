"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, AlertCircle } from "lucide-react";
import { useState } from "react";
import { SuccessModal } from "@/components/modals/SuccessModal";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to submit enquiry. Please try again."
        );
      }

      // Reset form and show success popup
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      onClose(); // Close the modal
      setShowSuccessModal(true); // Open success modal
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1120]">
                      Enquiry Now
                    </h2>
                    <div className="w-14 h-1 bg-[#a67c52] mx-auto mt-3 rounded-full" />
                  </div>

                  {errorMessage && (
                    <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-3 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name *"
                        className="w-full h-12 px-4 rounded-md border border-gray-300 text-[14.5px] outline-none focus:border-[#a67c52] transition-colors"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email (Optional)"
                        className="w-full h-12 px-4 rounded-md border border-gray-300 text-[14.5px] outline-none focus:border-[#a67c52] transition-colors"
                      />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your number *"
                        className="w-full h-12 px-4 rounded-md border border-gray-300 text-[14.5px] outline-none focus:border-[#a67c52] transition-colors"
                      />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter your subject"
                        className="w-full h-12 px-4 rounded-md border border-gray-300 text-[14.5px] outline-none focus:border-[#a67c52] transition-colors"
                      />
                    </div>
                    <textarea
                      rows={4}
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here... *"
                      className="w-full p-4 rounded-md border border-gray-300 text-[14.5px] outline-none focus:border-[#a67c52] resize-none transition-colors"
                    />
                    <div className="flex justify-center pt-1">
                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#a67c52] hover:bg-[#8B6914] text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2 text-[15px] w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin h-4 w-4 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8H4z"
                              />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <>
                            Send Message <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
}
