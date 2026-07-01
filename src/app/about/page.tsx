import { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { AboutHero } from "@/components/sections/AboutHero";
import { Stats } from "@/components/sections/Stats";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { CommitmentSection } from "@/components/sections/CommitmentSection";
import { MissionVision } from "@/components/sections/MissionVision";

import { AboutWhyChooseUs } from "@/components/sections/AboutWhyChooseUs";
import { AboutCTA } from "@/components/sections/AboutCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Prime Legal Service — a trusted law firm in Delhi NCR led by experienced advocates specializing in family law, matrimonial disputes, divorce, and criminal defense.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero banner */}
      <PageHeader
        title="About Our Firm"
        subtitle="A Legacy of Excellence"
        image="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000"
      />

      {/* 2. About section — image + text + credentials */}
      <AboutHero />

      {/* 3. Animated stats bar */}
      <Stats />

      {/* 4. Philosophy & Work Ethic — image + bullet points */}
      <PhilosophySection />

      {/* 5. Commitment to Excellence + Vision for Future box */}
      <CommitmentSection />

      {/* 6. Mission, Vision, Values, Promise cards */}
      <MissionVision />

      {/* 7. Why choose us — dark section with 6 cards */}
      <AboutWhyChooseUs />

      {/* 9. Gold gradient CTA */}
      <AboutCTA />
    </>
  );
}
