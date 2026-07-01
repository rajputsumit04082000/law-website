import { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet our dedicated team of experienced attorneys and legal professionals.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader 
        title="Our Legal Team" 
        subtitle="Meet The Experts"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
      />
      <TeamPreview />
      <CTA />
    </>
  );
}
