import { AboutMePreview } from "@/components/AboutMePreview";
import { AchievementsCertifications } from "@/components/AchievementsCertifications";
import { CTASection } from "@/components/CTASection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HeroSection } from "@/components/HeroSection";
import { SkillsPreview } from "@/components/SkillsPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsPreview />
      <AboutMePreview />
      <FeaturedProjects />
      <AchievementsCertifications />
      <CTASection />
    </>
  );
}
