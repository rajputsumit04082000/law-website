"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ChevronUp } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#051915] text-white pt-16 pb-6 font-sans">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Column 1: Brand & Description */}
          <div className="space-y-6 pr-0 md:pr-4">
            <div className="flex items-center space-x-3">
              {/* Optional: Add actual logo image here. Using placeholder circle for now */}
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <span className="text-xl font-serif">⚖</span>
              </div>
              <div>
                <h2 className="font-serif text-[18px] md:text-[20px] font-medium leading-tight">PRIME LEAGAL SERVICE</h2>
                <p className="text-[10px] text-gray-400 tracking-wider mt-1">ADVOCATES / SOLICITORS / LEGAL CONSULTANTS</p>
              </div>
            </div>

            <p className="text-[#d1d5db] text-[13px] leading-relaxed">
              At Prime Legal Service, we are more than just a law firm – we are your trusted legal partners, dedicated to guiding you through the complexities of law with clarity, compassion, and expertise.
            </p>

            <div>
              <p className="font-bold text-sm mb-4">Follow us!</p>
              <div className="flex space-x-3">
                <Link href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#051915] hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#051915] hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#051915] hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Our Expertise */}
          <div>
            <h3 className="font-bold text-base mb-6">Our Expertise</h3>
            <ul className="space-y-3">
              {[
                "Divorce Lawyer", "Domestic Violence Lawyer", "Matrimonial Lawyer",
                "Family Disputes Lawyer", "Bail Matters Lawyer", "Cheque Bounce Lawyer",
                "Civil Lawyer", "Criminal Lawyer", "Supreme Court Lawyer", "Corporate Lawyer"
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-[#d1d5db] hover:text-white text-[13px] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="font-bold text-base mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Child Custody Lawyer", "Legal Documentation", "Debt Recovery Tribunal Lawyer",
                "Property Lawyer", "Delhi High Court Lawyer", "C.A.T Services Matters Lawyer",
                "RERA Matters", "Consumer Disputes Lawyer", "Cyber Law Cases Lawyer", "Court Marriage Registration"
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-[#d1d5db] hover:text-white text-[13px] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="font-bold text-base mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-7 h-7 rounded-full bg-white shrink-0 flex items-center justify-center mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-[#051915]" />
                </div>
                <span className="text-[#d1d5db] text-[13px] mt-1">+919911077828</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-7 h-7 rounded-full bg-white shrink-0 flex items-center justify-center mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-[#051915]" />
                </div>
                <span className="text-[#d1d5db] text-[13px] mt-1">ABC@gmail.com</span>
              </li>

              <li className="flex items-start space-x-3">
                <div className="w-7 h-7 rounded-full bg-white shrink-0 flex items-center justify-center mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#051915]" />
                </div>
                <span className="text-[#d1d5db] text-[13px] leading-relaxed">201-202, Sincere Tower, 2 nd Floor, Commercial Complex, Preet Vihar, Near Petrol Pump, Delhi- 110092</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-7 h-7 rounded-full bg-white shrink-0 flex items-center justify-center mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#051915]" />
                </div>
                <span className="text-[#d1d5db] text-[13px] leading-relaxed">23, Lawyers Chamber, Supreme Court of India, New Delhi- 110001</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-7 h-7 rounded-full bg-white shrink-0 flex items-center justify-center mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#051915]" />
                </div>
                <span className="text-[#d1d5db] text-[13px] leading-relaxed">Chamber No. 189, Tis Hazaari Court, Delhi-110054.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-7 h-7 rounded-full bg-white shrink-0 flex items-center justify-center mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#051915]" />
                </div>
                <span className="text-[#d1d5db] text-[13px] leading-relaxed">G-401 Lawyers Chamber, Karkardooma Court, Delhi-110032.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[12px] text-[#d1d5db] relative">
          <p className="text-center sm:text-left">
            @2009-2026 All Rights Reserved <span className="font-bold text-white">Prime Legal Service</span>
          </p>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 flex items-center justify-center hover:bg-white/10 transition-colors rounded"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
