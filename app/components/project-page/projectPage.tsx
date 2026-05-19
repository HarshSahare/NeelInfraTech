"use client";

import { useEffect, useState } from "react";

import styles from "./project-page.module.css";
import { ProjectData } from "@/app/types/projectPage";

import ProjectHero from "./ProjectHero";
import TrustStrip from "./TrustStrip";
import AboutSection from "./AboutSection";
import FeaturesGrid from "./FeaturesGrid";
import SnapshotGrid from "./SnapshotGrid";
import LocationAdvantages from "./LocationAdvantages";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";
import EnquiryModal from "./EnquiryModal";
import GallerySection from "./GallerySection";
import DeveloperSection from "./DeveloperSection";

interface Props {
  project: ProjectData;
}

export default function ProjectPage({ project }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#contact") {
      setOpen(true);
    }

    const handleHashChange = () => {
      if (window.location.hash === "#contact") {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const openModal = () => {
    setOpen(true);

    window.history.replaceState(null, "", "#contact");
  };

  const closeModal = () => {
    setOpen(false);

    if (window.location.hash === "#contact") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <main className={styles.page}>
      <ProjectHero
        project={project}
        onEnquire={() => {
          setOpen(true);
        }}
      />

      <TrustStrip items={project.trustItems} />

      <AboutSection about={project.about} />

      <FeaturesGrid feature={project.features} />

      <SnapshotGrid snapshot={project.snapshot} />

      <LocationAdvantages location={project.location} />

      <GallerySection gallery={project.gallery} />

      <DeveloperSection
        eyebrow="About the Developer"
        title="Neel Infratech — Trusted in Nagpur Since 2012"
        description="A CREDAI-member Nagpur developer specialising in NMRDA-approved plotted developments. The Vrindavan Park series — Vrindavan Park 12, 14 and 15 — is the company's flagship Hingna offering, designed to consistent infrastructure standards across all phases."
        stats={[
          {
            number: "12+",
            label: "Years of Trust",
          },

          {
            number: "6+",
            label: "Active Projects",
          },

          {
            number: "100%",
            label: "NMRDA Approved",
          },

          {
            number: "CREDAI",
            label: "Member Developer",
          },
        ]}
      />

      <FAQSection faq={project.faq} />

      <FinalCTA
        title={"Ready To Visit"}
        description="Site visits are arranged with pickup & drop on request. Speak to our team for the latest plot availability, pricing and finance assistance."
        whatsappLink={project.whatsappText}
        onEnquire={openModal}
      />

      <EnquiryModal
        isOpen={open}
        onClose={closeModal}
        projectName={project.seo.title}
      />
    </main>
  );
}
