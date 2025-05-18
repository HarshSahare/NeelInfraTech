"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";

function ContactUsModel({
  state,
  setModelState,
}: {
  state: boolean;
  setModelState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`${
        state ? "block" : "hidden"
      } fixed top-0 left-0 right-0 bottom-0 z-51 flex justify-center items-center bg-[#0000007d]`}
    >
      <div className="bg-white p-5 rounded flex flex-col w-[90%] md:max-w-[30%]">
        <Image
          src="/cross_icon.svg"
          alt="cross"
          width={20}
          height={20}
          onClick={() => setModelState(false)}
          className=" cursor-pointer self-end"
        />
        <div className="font-classica font-[500] text-[#303643] text-lg">
          Get in Touch
        </div>

        <form className="space-y-4 mt-4">
          {/* Name Field */}
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#75727999]" />
            <input
              type="text"
              placeholder="Name"
              className="w-full pl-10 pr-4 py-3 border placeholder:text-[#75727999] border-[#D1D5DB] rounded-md outline-none focus:ring-2 focus:ring-[#D1D5DB]"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#75727999]" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 border placeholder:text-[#75727999] border-[#D1D5DB] rounded-md outline-none focus:ring-2 focus:ring-[#D1D5DB]"
            />
          </div>

          {/* Phone Field */}
          <div className="relative">
            <FaPhone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#75727999]" />
            <input
              type="tel"
              placeholder="Phone No."
              className="w-full pl-10 pr-4 py-3 border placeholder:text-[#75727999] border-[#D1D5DB] rounded-md outline-none focus:ring-2 focus:ring-[#D1D5DB]"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <RiMessage2Fill className="absolute top-4 left-3 text-[#75727999]" />
            <textarea
              placeholder="Message"
              rows={3}
              className="w-full pl-10 pr-4 py-3 border placeholder:text-[#75727999] border-[#D1D5DB] rounded-md outline-none focus:ring-2 focus:ring-[#D1D5DB]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsModel;
