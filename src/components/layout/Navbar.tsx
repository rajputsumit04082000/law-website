"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scale, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/data/content";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { AppointmentModal } from "@/components/modals/AppointmentModal";

// ── Dropdown data ──────────────────────────────────────────────
const EXPERTISE_ITEMS = [
  { label: "Divorce Lawyer",           href: "/practice-areas/divorce-lawyer" },
  { label: "Domestic Violence Lawyer", href: "/practice-areas/domestic-violence" },
  { label: "Matrimonial Lawyer",       href: "/practice-areas/matrimonial-lawyer" },
  { label: "Family Disputes Lawyer",   href: "/practice-areas/family-disputes" },
  { label: "Bail Matters Lawyer",      href: "/practice-areas/bail-matters" },
  { label: "Cheque Bounce Lawyer",     href: "/practice-areas/cheque-bounce" },
  { label: "Civil Lawyer",             href: "/practice-areas/civil-lawyer" },
  { label: "Criminal Lawyer",          href: "/practice-areas/criminal-lawyer" },
  { label: "Supreme Court Lawyer",     href: "/practice-areas/supreme-court" },
  { label: "Corporate Lawyer",         href: "/practice-areas/corporate-lawyer" },
];

const SERVICE_ITEMS = [
  { label: "Child Custody Lawyer",           href: "/service/child-custody" },
  { label: "Legal Documentation",            href: "/service/legal-documentation" },
  { label: "Debt Recovery Tribunal Lawyer",  href: "/service/debt-recovery" },
  { label: "Property Lawyer",                href: "/service/property-lawyer" },
  { label: "Delhi High Court Lawyer",        href: "/service/delhi-high-court" },
  { label: "C.A.T Services Matters Lawyer",  href: "/service/cat-services" },
  { label: "RERA Matters",                   href: "/service/rera-matters" },
  { label: "Consumer Disputes Lawyer",       href: "/service/consumer-disputes" },
  { label: "Cyber Law Cases Lawyer",         href: "/service/cyber-law" },
  { label: "Court Marriage Registration",    href: "/service/court-marriage" },
];

interface DropdownItem { label: string; href: string; }

// ── Desktop hover dropdown ─────────────────────────────────────
function NavDropdown({ label, items, isActive }: { label: string; items: DropdownItem[]; isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpen(true); };
  const leave = () => { closeTimer.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        type="button"
        className={`relative inline-flex items-center gap-1 font-semibold text-[15px] transition-colors py-2 cursor-default ${
          isActive ? "text-[#a67c52]" : "text-gray-900 hover:text-[#a67c52]"
        }`}
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        {isActive && (
          <motion.div layoutId="navbar-indicator" className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#a67c52]" initial={false} />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-[200]"
          >
            {items.map((item) => (
              <Link key={item.href} href={item.href} className="block px-5 py-2.5 text-[14px] font-medium text-gray-700 hover:text-[#a67c52] hover:bg-[#fdf8f2] transition-colors" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main Navbar ────────────────────────────────────────────────
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHoveringTop, setIsHoveringTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isAppointmentOpen, setAppointmentOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isVisible = !isScrolled || isHoveringTop;

  return (
    <>
      {/* Invisible hover zone for desktop */}
      <div
        className="hidden lg:block fixed top-0 left-0 right-0 z-[60] h-[60px] pointer-events-auto"
        onMouseEnter={() => setIsHoveringTop(true)}
        onMouseLeave={() => setIsHoveringTop(false)}
        style={{ background: "transparent" }}
      />

      {/* Fixed header group */}
      <motion.div
        animate={{ y: isVisible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onMouseEnter={() => setIsHoveringTop(true)}
        onMouseLeave={() => setIsHoveringTop(false)}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        <AnnouncementBar isVisible={!isScrolled} />

        <header className={`w-full transition-colors duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"}`}>
          <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 lg:space-x-3">
              <div className="flex items-center justify-center rounded-full border-2 border-[#a67c52] p-1.5 w-9 h-9 lg:w-12 lg:h-12">
                <Scale className="h-5 w-5 lg:h-6 lg:w-6 text-[#a67c52]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-base lg:text-2xl font-bold text-gray-900 tracking-tight leading-none uppercase">
                  PRIME LEAGAL SERVICE
                </span>
                <span className="text-[8px] lg:text-[10px] text-gray-500 font-medium tracking-widest uppercase mt-0.5">
                  Advocates / Solicitors / Legal Consultants
                </span>
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center space-x-7">
              {SITE_CONTENT.navLinks.map((link) => {
                if (link.label === "Our Expertise") {
                  return <NavDropdown key={link.label} label={link.label} items={EXPERTISE_ITEMS} isActive={pathname.includes("/practice-areas")} />;
                }
                if (link.label === "Our Service") {
                  return <NavDropdown key={link.label} label={link.label} items={SERVICE_ITEMS} isActive={pathname.includes("/service")} />;
                }
                if (link.label === "Blog") {
                  return <span key={link.label} className="font-semibold text-[15px] text-gray-400 py-2 cursor-not-allowed">{link.label}</span>;
                }
                return (
                  <Link key={link.href} href={link.href} className={`relative font-semibold text-[15px] transition-colors py-2 ${pathname === link.href ? "text-[#a67c52]" : "text-gray-900 hover:text-[#a67c52]"}`}>
                    {link.label}
                    {pathname === link.href && (
                      <motion.div layoutId="navbar-indicator" className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#a67c52]" initial={false} />
                    )}
                  </Link>
                );
              })}
              <Button onClick={() => setAppointmentOpen(true)} className="bg-[#a67c52] hover:bg-[#8b6540] text-white font-semibold rounded-full px-6 py-2 h-auto shadow-md transition-all ml-2">
                Get Appointment
              </Button>
            </nav>

            {/* ── Mobile Hamburger ── */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>
        </header>

        {/* ── Mobile Drawer (slides down below header) ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
            >
              <nav className="px-4 py-4 flex flex-col gap-1">
                {SITE_CONTENT.navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const hasDropdown = link.label === "Our Expertise" || link.label === "Our Service";
                  const dropItems = link.label === "Our Expertise" ? EXPERTISE_ITEMS : link.label === "Our Service" ? SERVICE_ITEMS : [];
                  const isExpanded = mobileExpanded === link.label;

                  if (hasDropdown) {
                    return (
                      <div key={link.label} className="border-b border-gray-100 last:border-0">
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                          className={`w-full flex items-center justify-between text-[15px] font-semibold py-3 transition-colors ${pathname.includes(link.label === "Our Expertise" ? "/practice-areas" : "/service") ? "text-[#a67c52]" : "text-gray-900"}`}
                        >
                          {link.label}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-3 grid grid-cols-1 gap-0.5 border-l-2 border-[#a67c52]/30 ml-2">
                                {dropItems.map((item) => (
                                  <Link key={item.href} href={item.href} className="block py-2 text-[13px] text-gray-600 hover:text-[#a67c52] transition-colors" onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}>
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (link.label === "Blog") {
                    return (
                      <div key={link.label} className="border-b border-gray-100 last:border-0">
                        <span className="block text-[15px] font-semibold py-3 text-gray-400 cursor-not-allowed">{link.label}</span>
                      </div>
                    );
                  }

                  return (
                    <div key={link.href} className="border-b border-gray-100 last:border-0">
                      <Link
                        href={link.href}
                        className={`block text-[15px] font-semibold py-3 transition-colors hover:text-[#a67c52] ${isActive ? "text-[#a67c52]" : "text-gray-900"}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </div>
                  );
                })}

                <div className="pt-3">
                  <Button
                    onClick={() => { setAppointmentOpen(true); setMobileOpen(false); }}
                    className="w-full bg-[#a67c52] hover:bg-[#8b6540] text-white font-semibold rounded-full py-3 h-auto"
                  >
                    Get Appointment
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AppointmentModal isOpen={isAppointmentOpen} onClose={() => setAppointmentOpen(false)} />

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
