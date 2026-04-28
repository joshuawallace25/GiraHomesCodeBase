import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { NewDevelopments } from "@/components/sections/NewDevelopments";
import { ExploreByArea } from "@/components/sections/ExploreByArea";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <NewDevelopments />
      <ExploreByArea />
      <WhyChoose />
      <CTASection />
    </>
  );
}
