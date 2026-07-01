import { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what our clients have to say about our legal services and representation.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader 
        title="Client Testimonials" 
        subtitle="Success Stories"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000"
      />
      <Testimonials />
      <Stats />
      <CTA />
    </>
  );
}
