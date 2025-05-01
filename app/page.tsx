import HeroSection from "./components/sections/heroSection";
import PropertiesLandingSection from "./components/sections/propertiesLandingSection";
import PropertiesSection from "./components/sections/propertiesSection";
import AwardsSection from "./components/sections/rewardsSection";
import StorySection from "./components/sections/storySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AwardsSection />
      <PropertiesLandingSection />
      <PropertiesSection />
      <StorySection />
    </>
  );
}
