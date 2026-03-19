"use client";
import React, { useState } from "react";

function HeroSection() {
  const [formData, setFormData] = useState({ name: "", mobile: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/append", {
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
        className="w-full h-screen object-cover"
        autoPlay
        src={"/videos/homepageHeroSectionBannerVideo.mp4"}
        loop
        muted
      ></video>

      <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-black/50">
        <div className=" details w-full h-full flex items-center">
          <div className="text-white p-10">
            <div className="heading font-classica weight-400 text-[3.14rem] uppercase">
              Premium Investment Plots-Nagpur
            </div>
            <div className="description font-classica weight-400 text-[1.57rem] uppercase">
              Near MIHAN & Samruddhi Expressway
            </div>
            <div className="pointer-container font-poppins flex gap-5 my-10">
              <div className="backdrop-blur-md bg-white/20 px-6 py-3 sm:rounded-full rounded-2xl">
                Near Godrej City
              </div>
              <div className="backdrop-blur-md bg-white/20 px-6 py-3 sm:rounded-full rounded-2xl">
                Near New Nagpur CBD
              </div>
              <div className="backdrop-blur-md bg-white/20 px-6 py-3 sm:rounded-full rounded-2xl">
                Just 10 Min From MIHAN
              </div>
            </div>
            <div className="flex gap-3 font-poppins">
              <button className="primary-CTA bg-black px-6 py-3 cursor-pointer">
                Contact Now
              </button>
              <button className="secondary-CTA backdrop-blur-md bg-white/20 px-6 py-3 cursor-pointer">
                Book A Site Visit
              </button>
            </div>
          </div>
        </div>

        <div className="lg:flex  hidden contact-form absolute top-0 left-0 right-0 bottom-0 px-15 py-10 border-2 border-grey pointer-events-none">
          <div className="mt-auto ml-auto w-fit h-fit bg-white p-6  rounded-2xl pointer-events-auto">
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
                className="w-screen max-w-xs bg-[#EFF1F9] rounded-xs py-2 px-3 outline-none placeholder:text-[#ABAFB1] "
                style={{ fontFamily: "inter,system-ui,sans-serif" }}
              />
              <label
                htmlFor="phone"
                className="block mt-5 mb-1 text-xs text-[#5E6366]"
              >
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                required
                id="phone"
                placeholder="8654321970"
                className="w-screen max-w-xs bg-[#EFF1F9] rounded-xs py-2 px-3 outline-none placeholder:text-[#ABAFB1]  "
              />

              <button
                type="submit"
                className="mt-5 w-full font-poppins block bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
              >
                {loading ? (
                  <span className="flex justify-center items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Submitting...
                  </span>
                ) : (
                  "Book Your Site Visit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
