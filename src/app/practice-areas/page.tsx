import { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Practice Areas",
  description: "Explore our diverse practice areas including corporate law, family law, criminal defense, and more.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHeader 
        title="Practice Areas" 
        subtitle="Specialized Expertise"
        image="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=2000"
      />
      <PracticeAreas />
      <ProcessTimeline />
      <CTA />
    </>
  );
}
