"use client";
import { ContactLinks } from "@/app/lib/contactLinks";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ContactSection = ({ className }: { className?: string }) => {
  const [data, setData] = useState({ Name: "", Mobile: "", Email: "" });
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
          values: [data.Name, data.Mobile, data.Email],
          header: ["Name", "Mobile", "Email"],
          sheetName: "Contact Requests",
        }),
      });

      const result = await res.json();

      if (result.success) {
        alert("Your request has been submitted!");
        setData({ Name: "", Mobile: "", Email: "" });
      } else {
        alert("There was an error submitting your request.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div
      id="contact"
      className={`${className} flex flex-col md:flex-row contact-container min-h-screen`}
    >
      {/* Left Section */}
      <div className="relative w-full md:w-1/2 bg-cover bg-center text-white p-6 md:p-10 flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/images/contactUsBg.jpg"}
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="overlay absolute inset-0 bg-[#00000060]"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-classica font-[700] leading-tight">
            EXPRESS
            <br />
            YOUR
            <br />
            INTEREST
          </h1>

          <div className="mt-20 sm:mt-40">
            <p className="text-base sm:text-lg font-classica font-[400] mt-6">
              DISCOVER OUR PROJECT
            </p>
            <p className="text-base sm:text-lg font-classica font-[400] mt-2">
              FIND A SALES BOUTIQUES
            </p>

            <div className="flex gap-4 items-center mt-6 sm:mt-8 text-2xl">
              <Link href={ContactLinks.facebook}>
                <Image
                  src={"/images/facebook-white-outline.png"}
                  className="cursor-pointer w-10 h-10"
                  alt="facebook"
                  width={41}
                  height={41}
                />
              </Link>

              <Link href={ContactLinks.instagram}>
                <Image
                  src={"/images/instagram-white-outline.png"}
                  className="cursor-pointer w-10 h-10"
                  alt="Instagram"
                  width={41}
                  height={41}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-6 sm:p-12 bg-white flex flex-col justify-center">
        <form className="space-y-8 px-10" onSubmit={handleSubmit}>
          <div>
            <label className="block text-base sm:text-lg font-[400] font-classica">
              NAME
            </label>
            <input
              value={data.Name}
              required
              onChange={(e) => setData({ ...data, Name: e.target.value })}
              type="text"
              className="w-full border-b border-black outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-base sm:text-lg font-[400] font-classica">
              MOBILE
            </label>
            <div className="flex items-center border-b border-black py-2">
              <span>+91</span>
              <input
                className="ml-4 w-full outline-none"
                type="tel"
                required
                value={data.Mobile}
                onChange={(e) => setData({ ...data, Mobile: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-base sm:text-lg font-[400] font-classica">
              EMAIL
            </label>
            <input
              type="email"
              value={data.Email}
              required
              onChange={(e) => setData({ ...data, Email: e.target.value })}
              className="w-full border-b border-black outline-none py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-black w-full text-white py-4 px-6 text-sm tracking-widest cursor-pointer"
          >
            {loading ? (
              <span className="flex justify-center items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Submitting...
              </span>
            ) : (
              "REQUEST A CALLBACK"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
