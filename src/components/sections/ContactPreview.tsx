"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactPreview() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    // Combine first + last name from the split fields if present
    const payload = { ...formData };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit. Please try again.");
      }

      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSuccess(true);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* Left Card — Location + Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col"
          >
            <SectionHeading
              title="Get in Touch"
              subtitle="Contact Us"
              centered={false}
            />

            <p className="text-muted-foreground text-base mb-6 leading-relaxed">
              Visit our office at the Judicial Court Complex, Mohali. Click the map to get directions on Google Maps.
            </p>

            {/* Map Embed */}
            <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm group flex-1 min-h-[260px] relative">
              <a
                href="https://www.google.com/maps/search/District+Courts+Mohali+Sector+76+SAS+Nagar+Punjab"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-full"
                aria-label="Open District Courts Mohali in Google Maps"
              >
                <iframe
                  src="https://maps.google.com/maps?q=District+Courts+Mohali+Sector+76+SAS+Nagar+Punjab&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", minHeight: "260px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location – Judicial Court Complex, Mohali"
                  className="pointer-events-none"
                />
                <div className="absolute inset-0 cursor-pointer z-10" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 z-20 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#a67c52] font-semibold px-5 py-2.5 rounded-full shadow-lg text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Open in Google Maps
                  </span>
                </div>
              </a>
            </div>

            {/* Contact Details */}
            <div className="mt-6 space-y-4">
              <a
                href="https://www.google.com/maps/search/District+Courts+Mohali+Sector+76+SAS+Nagar+Punjab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group/item"
              >
                <div className="w-10 h-10 bg-[#a67c52]/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#a67c52]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover/item:text-[#a67c52] transition-colors">
                    Judicial Court Complex, Mohali
                  </p>
                  <p className="text-xs text-muted-foreground">Sector 76, SAS Nagar, Punjab</p>
                </div>
              </a>

              <a href={`tel:${SITE_CONTENT.company.phone}`} className="flex items-center gap-3 group/item">
                <div className="w-10 h-10 bg-[#a67c52]/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#a67c52]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover/item:text-[#a67c52] transition-colors">
                    {SITE_CONTENT.company.phone}
                  </p>
                  <p className="text-xs text-muted-foreground">Call us anytime</p>
                </div>
              </a>

              <a href={`mailto:${SITE_CONTENT.company.email}`} className="flex items-center gap-3 group/item">
                <div className="w-10 h-10 bg-[#a67c52]/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#a67c52]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover/item:text-[#a67c52] transition-colors">
                    {SITE_CONTENT.company.email}
                  </p>
                  <p className="text-xs text-muted-foreground">Drop us an email</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#a67c52]/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#a67c52]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{SITE_CONTENT.company.workingHours}</p>
                  <p className="text-xs text-muted-foreground">Working hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">
              Request a Consultation
            </h3>

            {success ? (
              <div className="py-12 text-center">
                <div className="w-20 h-20 bg-[#a67c52]/10 rounded-full flex items-center justify-center mx-auto mb-5 border border-[#a67c52]/20">
                  <CheckCircle2 className="w-11 h-11 text-[#a67c52]" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-[#0b1120] mb-3">Thank You!</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                  Your enquiry has been submitted successfully.<br />
                  Our legal team will contact you shortly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-[#a67c52] text-sm font-semibold underline underline-offset-2 hover:text-[#8B6914] transition-colors"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-3 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50/50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50/50"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">
                    Email Address{" "}
                    <span className="text-gray-400 font-normal text-xs">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50/50"
                    placeholder="rahul@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Practice Area</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50/50 appearance-none"
                  >
                    <option value="">Select an area</option>
                    {SITE_CONTENT.practiceAreas.map((area) => (
                      <option key={area.id} value={area.title}>
                        {area.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50/50 min-h-[120px] resize-y"
                    placeholder="Briefly describe your legal matter..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-accent hover:bg-accent/90 text-white text-lg rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
