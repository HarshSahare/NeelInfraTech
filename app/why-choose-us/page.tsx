import React from "react";
import HeroSection from "./sections/hero-section";
import IntroSection from "./sections/intro-section";
import ExclusivePropertiesSection from "./sections/ExclusivePropertiesSection";
import WhyThisMattersSection from "./sections/WhyThisMattersSection";
import FeaturesGridSection from "./sections/FeaturesGridSection";
import WhyInvestorsSection from "./sections/WhyInvestorsSection";
import StepsSection from "./sections/StepsSection";
import FeaturedPropertiesSection from "./sections/FeaturedPropertiesSection";
import StatsSection from "./sections/StatsSection";
import ClientStoriesSection from "./sections/ClientStoriesSection";
import ValueComparisonSection from "./sections/ValueComparisonSection";
import ContactSection from "../components/sections/contactSection";

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ExclusivePropertiesSection />
      <WhyThisMattersSection />
      <ValueComparisonSection />
      <FeaturesGridSection />
      <WhyInvestorsSection />
      <StepsSection />
      <FeaturedPropertiesSection />
      <StatsSection />
      <ClientStoriesSection />
      <ContactSection />
    </div>
  );
}

export default LandingPage;
