"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SITE_CONTENT } from "@/data/content";

interface AnnouncementBarProps {
  isVisible?: boolean;
}

export function AnnouncementBar({ isVisible = true }: AnnouncementBarProps) {
  return (
    <motion.div
      animate={{ opacity: isVisible ? 1 : 0, height: isVisible ? "auto" : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="bg-[#051915] text-white/90 text-[13px] hidden md:block border-b border-white/10 overflow-hidden"
    >
      <div className="py-2.5 px-4">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex space-x-6 items-center">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-[#a67c52]" />
              <span>Mob: {SITE_CONTENT.company.phone}</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-[#a67c52]" />
              <span>{SITE_CONTENT.company.email}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-[#a67c52] transition-colors"><FaFacebook size={16} /></a>
            <a href="#" className="hover:text-[#a67c52] transition-colors"><FaInstagram size={16} /></a>
            <a href="#" className="hover:text-[#a67c52] transition-colors"><FaLinkedin size={16} /></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
