import React from "react";
import CommitmentBox from "./commitmentBox";

function CommitmentSection({ className }: { className?: string }) {
  const commitments = [
    {
      heading: "Strategically Located Properties",
      description:
        "Our projects are situated in prime locations with excellent connectivity and growth potential, ensuring your investment is in the heart of the action.",
    },
    {
      heading: "Transparent <br/> Dealings",
      description:
        "We offer plots in emerging, high-growth areas, ensuring strong, long-term returns. Trust in our projects for enduring value over time.",
    },
    {
      heading: "Eco-Friendly Developments",
      description:
        "We prioritize sustainability in our projects, incorporating green spaces, energy-efficient designs, and eco-conscious materials to protect the environment.",
    },
    {
      heading: "Expert <br/> Consultation",
      description:
        "Our team of real estate professionals is available to provide expert advice on market trends, property selection, and investment strategies, ensuring you make informed decisions.",
    },
  ];

  return (
    <div className={`${className}`}>
      <div className="text-center text-5xl text-white font-medium font-classica my-5">
        Our Commitments
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-20">
        {commitments.map((commitment, index) => (
          <CommitmentBox
            heading={commitment.heading}
            description={commitment.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default CommitmentSection;
