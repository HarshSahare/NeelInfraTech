"use client";
import { useState, useEffect } from "react";
import ContactUsModel from "./components/model/contactUsModel";
import ContactSection from "./components/sections/contactSection";
import HeroSection from "./components/sections/heroSection";
import NeelWaySection from "./components/sections/neelWaySection";
import PropertiesLandingSection from "./components/sections/propertiesLandingSection";
import PropertiesSection from "./components/sections/propertiesSection";
import AwardsSection from "./components/sections/rewardsSection";
import StorySection from "./components/sections/storySection";
import TestimonialSection from "./components/sections/testimonialSection";
import VisionSection from "./components/sections/visionSection";
import DirectorsSection from "./components/sections/directorsSection";

export default function Home() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModelOpen(true);
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <ContactUsModel state={isModelOpen} setModelState={setIsModelOpen} />
      <HeroSection />
      <AwardsSection className="py-20 lg:py-50" />
      <PropertiesLandingSection />
      <PropertiesSection className="py-20 lg:py-50" />
      <StorySection />
      <VisionSection className="lg:py-50 py-20" />
      <DirectorsSection />
      <NeelWaySection className="py-20 lg:py-50" />
      <TestimonialSection />
      <ContactSection className="lg:my-50 my-20" />
    </>
  );
}
