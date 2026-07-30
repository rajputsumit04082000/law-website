"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, X } from "lucide-react";

interface SidebarEnquiryFormProps {
  subject?: string; // Pre-fill subject with page context e.g. "Cheque Bounce"
}

export function SidebarEnquiryForm({ subject = "" }: SidebarEnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: subject,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit. Please try again.");
      }

      setFormData({ name: "", email: "", phone: "", subject: subject, message: "" });
      setSuccess(true);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-[#f5f5f5] p-5 sm:p-8 rounded-xl text-center">
        <div className="w-14 h-14 bg-[#a67c52]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#a67c52]/20">
          <CheckCircle2 className="w-8 h-8 text-[#a67c52]" />
        </div>
        <h3 className="font-heading text-lg font-bold text-[#0b1120] mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          Your enquiry has been submitted successfully. Our legal team will
          contact you shortly.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-[#a67c52] text-sm font-semibold underline underline-offset-2 hover:text-[#8B6914] transition-colors"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5] p-5 sm:p-8 rounded-xl">
      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0b1120] mb-5">
        Get In Touch
      </h3>

      {errorMessage && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-3 py-2.5 rounded-lg flex items-start gap-2 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
          <span>{errorMessage}</span>
          <button
            onClick={() => setErrorMessage(null)}
            className="ml-auto shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div className="space-y-1">
          <label className="text-[12px] sm:text-[13px] font-semibold text-gray-700">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full h-10 sm:h-11 px-4 rounded-md border border-gray-300 bg-transparent text-[13px] sm:text-[14px] outline-none focus:border-[#a67c52] transition-colors"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[12px] sm:text-[13px] font-semibold text-gray-700">
            Your Email{" "}
            <span className="text-gray-400 font-normal text-[11px]">(Optional)</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full h-10 sm:h-11 px-4 rounded-md border border-gray-300 bg-transparent text-[13px] sm:text-[14px] outline-none focus:border-[#a67c52] transition-colors"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[12px] sm:text-[13px] font-semibold text-gray-700">
            Your Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your number"
            className="w-full h-10 sm:h-11 px-4 rounded-md border border-gray-300 bg-transparent text-[13px] sm:text-[14px] outline-none focus:border-[#a67c52] transition-colors"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[12px] sm:text-[13px] font-semibold text-gray-700">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter your subject"
            className="w-full h-10 sm:h-11 px-4 rounded-md border border-gray-300 bg-transparent text-[13px] sm:text-[14px] outline-none focus:border-[#a67c52] transition-colors"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[12px] sm:text-[13px] font-semibold text-gray-700">
            Query / Message <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="w-full p-3 sm:p-4 rounded-md border border-gray-300 bg-transparent text-[13px] sm:text-[14px] outline-none focus:border-[#a67c52] resize-none transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#a67c52] hover:bg-[#8B6914] text-white font-semibold py-3 rounded-md transition-colors flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
