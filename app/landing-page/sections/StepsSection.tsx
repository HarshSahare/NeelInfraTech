"use client";

import { FaWpforms, FaCar, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";

const steps = [
  {
    icon: <FaWpforms size={20} />,
    title: "Fill the Lead Form",
    desc1: "Name + Mobile + Date",
    desc2: "Select your preferred site visit date",
  },
  {
    icon: <FaCar size={20} />,
    title: "Free Pickup Arranged",
    desc1: "From Nagpur City",
    desc2: "Complimentary pickup & drop for all visitors",
  },
  {
    icon: <FaPhoneAlt size={20} />,
    title: "Call / WhatsApp",
    desc1: "+91",
    desc2: "Instant response — talk to our plot advisor",
  },
  {
    icon: <FaMapMarkedAlt size={20} />,
    title: "Visit the Site",
    desc1: "See it. Believe it. Invest.",
    desc2: "Walk the land near MIHAN & Samruddhi Expressway",
  },
];

export default function StepsSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase font-classica mb-2">Process</p>

          <h2 className="text-3xl font-classica md:text-4xl  mb-4">
            Four simple steps to your investment
          </h2>

          <p className="text-gray-500 text-sm max-w-2xl font-poppins mx-auto">
            We've streamlined the journey from interest to ownership. Each stage
            moves you closer to securing your plot in Nagpur’s best
            neighborhoods.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 text-center relative">
            <div className="hidden md:block absolute left-0 right-0 top-3 w-full h-[2px] bg-black" />
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Number Circle */}
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm mb-4 z-10">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-4 text-black">{step.icon}</div>

                {/* Title */}
                <h3 className="font-medium mb-2  font-classica">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 font-poppins">
                  {step.desc1}
                </p>
                <p className="text-xs text-gray-600 mt-1 font-poppins">
                  {step.desc2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
