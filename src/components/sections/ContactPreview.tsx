"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactPreview() {
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
                {/* Click overlay */}
                <div className="absolute inset-0 cursor-pointer z-10" />
                {/* Hover overlay */}
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

              <a
                href={`tel:${SITE_CONTENT.company.phone}`}
                className="flex items-center gap-3 group/item"
              >
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

              <a
                href={`mailto:${SITE_CONTENT.company.email}`}
                className="flex items-center gap-3 group/item"
              >
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
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">Request a Consultation</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">First Name</label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50/50"
                    placeholder="Rahul"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Last Name</label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50/50"
                    placeholder="Sharma"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Phone Number</label>
                <input
                  type="tel"
                  className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50/50"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Email Address</label>
                <input
                  type="email"
                  className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50/50"
                  placeholder="rahul@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Practice Area</label>
                <select defaultValue="" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50/50 appearance-none">
                  <option value="" disabled>Select an area</option>
                  {SITE_CONTENT.practiceAreas.map(area => (
                    <option key={area.id} value={area.id}>{area.title}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Message</label>
                <textarea
                  className="w-full p-4 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50/50 min-h-[120px] resize-y"
                  placeholder="Briefly describe your legal matter..."
                />
              </div>
              <Button className="w-full h-14 bg-accent hover:bg-accent/90 text-white text-lg rounded-xl">
                Send Message
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
