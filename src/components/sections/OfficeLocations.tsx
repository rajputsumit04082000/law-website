"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";

const locations = [
  {
    title: "Preet Vihar Address",
    address: "201-202, Sincere Tower, 2nd Floor, Commercial Complex, Preet Vihar, Near Petrol Pump, Delhi-110092",
  },
  {
    title: "Karkardooma Address",
    address: "G-401 Lawyers Chambers, Karkardooma Court, Delhi-110032",
  },
  {
    title: "Supreme Court",
    address: "23, Lawyers Chamber, Supreme Court of India, New Delhi-110001",
  },
  {
    title: "Tis Hazaari",
    address: "Chamber No. 189, Tis Hazaari Court, Delhi-110054.",
  },
];

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: SITE_CONTENT.company.phone,
    href: `tel:${SITE_CONTENT.company.phone.replace(/[\s-]/g, '')}`,
  },
  {
    icon: Mail,
    title: "Email",
    value: SITE_CONTENT.company.email,
    href: `mailto:${SITE_CONTENT.company.email}`,
  },
  {
    icon: Clock,
    title: "Schedule",
    value: "9:00 AM To 6:00 PM",
    subValue: "On Sunday and Holidays on Prior Appointment Only",
    href: null,
  },
];

export function OfficeLocations() {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#a67c52] font-semibold tracking-wide text-sm mb-2">
            Connect With Us, Wherever You Are
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0b1120] leading-tight">
            View all our office locations with contact details.
          </h2>
        </motion.div>

        {/* Location cards — 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="bg-[#ececec] hover:bg-white border border-transparent hover:border-[#D4AF37]/30 rounded-xl p-6 transition-all duration-400 shadow-sm hover:shadow-md group"
            >
              <div className="w-11 h-11 rounded-full bg-[#a67c52]/20 flex items-center justify-center mb-4 group-hover:bg-[#a67c52]/30 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-[#a67c52]" strokeWidth={2} />
              </div>
              <h3 className="font-semibold text-[#0b1120] text-[15px] mb-2 group-hover:text-[#a67c52] transition-colors">
                {loc.title}
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                {loc.address}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact detail cards — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;
            const inner = (
              <>
                <div className="w-11 h-11 rounded-full bg-[#a67c52]/20 flex items-center justify-center mb-4 group-hover:bg-[#a67c52]/30 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#a67c52]" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-[#0b1120] text-[15px] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-[14px] font-medium">
                  {item.value}
                </p>
                {item.subValue && (
                  <p className="text-[#a67c52] text-[12px] mt-1 font-medium leading-snug">
                    {item.subValue}
                  </p>
                )}
              </>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.55 }}
                className="bg-[#ececec] hover:bg-white border border-transparent hover:border-[#D4AF37]/30 rounded-xl p-6 transition-all duration-400 shadow-sm hover:shadow-md group"
              >
                {item.href ? (
                  <a href={item.href} className="block">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
