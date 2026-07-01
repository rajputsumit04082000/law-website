import { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { OfficeLocations } from "@/components/sections/OfficeLocations";
import { FaqAndMap } from "@/components/sections/FaqAndMap";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Prime Legal Service. Visit our offices at Preet Vihar, Karkardooma, Supreme Court, or Tis Hazaari. Book a free legal consultation today.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero banner */}
      <PageHeader
        title="Contact Us"
        subtitle="We Are Here To Help"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000"
      />

      {/* 2. Book An Appointment — form + image (UPAR) */}
      <AppointmentForm />

      {/* 3. Office Locations — 4 address cards + phone/email/hours (NEECHE) */}
      <OfficeLocations />

      {/* 4. FAQ (left) + Google Map (right) — ek saath ek row mein */}
      <FaqAndMap />
    </>
  );
}
