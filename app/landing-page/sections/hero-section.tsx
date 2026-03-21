"use client";
import React, { useState } from "react";

function HeroSection() {
  const [formData, setFormData] = useState({ name: "", mobile: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/append", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: [formData.name, formData.mobile],
          header: ["Name", "Mobile"],
          sheetName: "landing page banner contact form",
        }),
      });
      setFormData({ name: "", mobile: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-fit bg-black relative">
      <video
        className="w-full h-[90vh] sm:h-screen object-cover"
        autoPlay
        src={"/videos/homepageHeroSectionBannerVideo.mp4"}
        loop
        muted
      ></video>

      <div className="overlay absolute inset-0 bg-black/50">
        <div className="details w-full h-full flex items-center">
          <div className="text-white p-5 sm:p-10 max-w-4xl">
            {/* Heading */}
            <div className="heading font-classica weight-400 text-[1.8rem] sm:text-[2.4rem] lg:text-[3.14rem] uppercase leading-tight">
              Premium Investment Plots-Nagpur
            </div>

            {/* Description */}
            <div className="description font-classica weight-400 text-[1rem] sm:text-[1.2rem] lg:text-[1.57rem] uppercase mt-2">
              Near MIHAN & Samruddhi Expressway
            </div>

            {/* Chips */}
            <div className="pointer-container font-poppins flex flex-wrap gap-2 sm:gap-5 my-6 sm:my-10">
              <div className="backdrop-blur-md bg-white/20 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm">
                Near Godrej City
              </div>
              <div className="backdrop-blur-md bg-white/20 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm">
                Near New Nagpur CBD
              </div>
              <div className="backdrop-blur-md bg-white/20 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm">
                Just 10 Min From MIHAN
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 font-poppins w-full sm:w-auto">
              <button className="primary-CTA bg-black px-6 py-3 w-full sm:w-auto">
                Contact Now
              </button>
              <button className="secondary-CTA backdrop-blur-md bg-white/20 px-6 py-3 w-full sm:w-auto">
                Book A Site Visit
              </button>
            </div>
          </div>
        </div>

        {/* Desktop form untouched */}
        <div className="lg:flex hidden contact-form absolute inset-0 px-15 py-10 border-2 border-grey pointer-events-none">
          <div className="mt-auto ml-auto w-fit h-fit bg-white p-6 rounded-2xl pointer-events-auto">
            <div className="mb-8 font-classica text-lg">Reach Out To Us</div>
            <form action="post" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-[100%] bg-[#EFF1F9] rounded-xs py-2 px-3 outline-none"
              />

              <label className="block mt-5 mb-1 text-xs text-[#5E6366]">
                Phone Number
              </label>

              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                required
                placeholder="8654321970"
                className="w-[100%] bg-[#EFF1F9] rounded-xs py-2 px-3 outline-none"
              />

              <button
                type="submit"
                className="mt-5 w-full bg-black text-white py-2 px-4 rounded-md"
              >
                {loading ? "Submitting..." : "Book Your Site Visit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
