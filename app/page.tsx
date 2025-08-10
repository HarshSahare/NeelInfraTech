"use client";
import { useState, useEffect } from "react";
import ContactUsModel from "./components/model/contactUsModel";
import ContactSection from "./components/sections/contactSection";
import HeroSection from "./components/sections/heroSection";
import NeelWaySection from "./components/sections/neelWaySection";
import PropertiesLandingSection from "./components/sections/propertiesLandingSection";
import PropertiesSection from "./components/sections/propertiesSection";
import AwardsSection from "./components/sections/rewardsSection";
import TestimonialSection from "./components/sections/testimonialSection";
import VisionSection from "./components/sections/visionSection";
import DirectorsSection from "./components/sections/directorsSection";
import CommitmentSection from "./components/sections/commitment/commitmentSection";

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
      <CommitmentSection className="pt-20 pb-15  bg-[#1b1b1b]" />
      <PropertiesLandingSection className="pt-20 pb-15 min-h-screen " />
      <AwardsSection className="py-20 lg:py-50" />
      <PropertiesSection />
      <VisionSection className="py-20 lg:py-50" />
      <DirectorsSection />
      <NeelWaySection className="py-20 lg:py-50" />
      <TestimonialSection />
      <ContactSection className="my-20 lg:my-50" />
    </>
  );
}
