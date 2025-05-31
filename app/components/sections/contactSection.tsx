import Image from "next/image";
import React from "react";

const ContactSection = ({ className }: { className?: string }) => {
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
              <Image
                src={"/images/facebook-white-outline.png"}
                className="cursor-pointer w-10 h-10"
                alt="facebook"
                width={41}
                height={41}
              />
              <Image
                src={"/images/instagram-white-outline.png"}
                className="cursor-pointer w-10 h-10"
                alt="Instagram"
                width={41}
                height={41}
              />
              <Image
                src={"/images/thread-white-outline.png"}
                className="cursor-pointer w-10 h-10"
                alt="threads"
                width={41}
                height={41}
              />
              <Image
                src={"/images/linkedin-white-outline.png"}
                className="cursor-pointer w-10 h-10"
                alt="linkedin"
                width={41}
                height={41}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-6 sm:p-12 bg-white flex flex-col justify-center">
        <form className="space-y-8 px-10">
          <div>
            <label className="block text-base sm:text-lg font-[400] font-classica">
              NAME
            </label>
            <input
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
              <input type="tel" className="ml-4 w-full outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-base sm:text-lg font-[400] font-classica">
              EMAIL
            </label>
            <input
              type="email"
              className="w-full border-b border-black outline-none py-2"
            />
          </div>

          <div className="space-y-4 text-sm font-classica font-[400] mt-12">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              TERM AND CONDITION
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              PRIVACY POLICIES
            </label>
          </div>

          <button
            type="submit"
            className="bg-black w-full text-white py-4 px-6 text-sm tracking-widest"
          >
            REQUEST A CALLBACK
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
