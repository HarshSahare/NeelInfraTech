import HeroSection from "./components/sections/heroSection";
import PropertiesLandingSection from "./components/sections/propertiesLandingSection";
import AwardsSection from "./components/sections/rewardsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AwardsSection />
      <PropertiesLandingSection />
    </>
  );
}
