import ContactSection from "./components/sections/contactSection";
import HeroSection from "./components/sections/heroSection";
import NeelWaySection from "./components/sections/neelWaySection";
import PropertiesLandingSection from "./components/sections/propertiesLandingSection";
import PropertiesSection from "./components/sections/propertiesSection";
import AwardsSection from "./components/sections/rewardsSection";
import StorySection from "./components/sections/storySection";
import TestimonialSection from "./components/sections/testimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AwardsSection />
      <PropertiesLandingSection />
      <PropertiesSection />
      <StorySection />
      <TestimonialSection />
      <NeelWaySection />
      <ContactSection />
    </>
  );
}
