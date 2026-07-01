import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactPreview } from "@/components/sections/ContactPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <WhyChooseUs />
      <PracticeAreas />
      <ProcessTimeline />
      <TeamPreview />
      <Testimonials />
      <ContactPreview />
    </>
  );
}
