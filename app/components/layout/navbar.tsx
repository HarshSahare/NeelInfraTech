"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { ContactLinks } from "@/app/lib/contactLinks";

function Navbar() {
  const mobile_menu = useRef<HTMLDivElement>(null);
  const mobile_menu_container = useRef<HTMLDivElement>(null);
  const navbar = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeline = gsap.timeline();
  const isMenuOpenRef = useRef(isMenuOpen);

  useGSAP(() => {
    if (isMenuOpen) {
      timeline.to(mobile_menu_container.current, {
        opacity: 1,
        duration: 0.3,
      });
      timeline.to(mobile_menu.current, {
        translateX: "0%",
        duration: 0.3,
      });
    } else {
      timeline.to(mobile_menu.current, {
        translateX: "100%",
        duration: 0.3,
      });
      timeline.to(mobile_menu_container.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  useEffect(() => {
    navbar.current?.classList.add("opacity-100");
    navbar.current?.classList.remove("opacity-0", "pointer-events-none");
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        ref={navbar}
        className={`fixed  md:block flex items-center top-0 left-0 z-50 w-full min-h-[var(--navbar-h)] backdrop-blur-md ${
          isMenuOpen
            ? "bg-black/80"
            : isScrolled
              ? "bg-black/60"
              : "bg-[#00000042]"
        }`}
      >
        <div className="w-screen hidden md:flex bg-white  overflow-hidden">
          <div className="flex-4 p-2 flex pl-30 text-xl items-center ">
            <MdLocalPhone className="mr-2" />
            +91 XXXXXXXXXX
          </div>
          <div className="flex-1 p-2 flex items-center pr-40 justify-end relative">
            <div
              className="bg-[#1b1b1b] w-full absolute inset-0 z-1"
              style={{ transform: "skew(313deg, 0deg) scale(1.2)" }}
            ></div>
            <div className="z-2 flex gap-5 text-white text-xl">
              <Link
                href={ContactLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={ContactLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill />
              </Link>
              <Link
                href={ContactLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[90%] p-5 mx-auto h-full items-center grid grid-cols-3">
          {/* Desktop Left */}
          <div className="hidden md:flex gap-10 font-classica text-[#bab4bba8]">
            <Link className="hover:text-white cursor-pointer" href="/stories">
              Our Story
            </Link>
            <Link
              className="hover:text-white cursor-pointer"
              href="/why-choose-us"
            >
              Why Choose Us
            </Link>
            <Link
              className="hover:text-white cursor-pointer"
              href="/properties"
            >
              Our Properties
            </Link>
          </div>

          {/* Desktop Logo */}
          <Link className="hidden md:flex justify-center" href={"/"}>
            <Image
              className="h-auto"
              src="/images/logo.png"
              alt="logo"
              width={160}
              height={32}
              quality={80}
            />
          </Link>

          {/* Desktop Right */}
          <div className="hidden md:flex justify-end">
            <a
              href="#contact"
              className=" py-2 px-5 bg-black text-white cursor-pointer"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Layout */}
          <div className="flex items-center justify-between w-full md:hidden col-span-3 px-2">
            <div>
              <Link href={"/"}>
                <Image
                  className="h-auto"
                  src="/images/logo.png"
                  alt="logo"
                  width={160}
                  height={32}
                  quality={80}
                />
              </Link>
            </div>
            <button
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      <div
        ref={mobile_menu_container}
        className={`fixed flex w-screen h-screen bottom-0 bg-[#0000007c] z-100 opacity-0 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div
        ref={mobile_menu}
        className="fixed z-101 right-0 translate-x-[100%] md:hidden w-[60%] h-screen px-6 pt-4 pb-6 bg-black/80 text-white text-lg flex flex-col gap-4 font-classica backdrop-blur-md"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className="text-5xl self-end cursor-pointer font-[100]"
          onClick={() => setIsMenuOpen(false)}
        >
          &times;
        </button>
        <div className="flex-1 flex flex-col gap-4 py-5">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/stories" onClick={() => setIsMenuOpen(false)}>
            Our Story
          </Link>
          <Link href="/why-choose-us" onClick={() => setIsMenuOpen(false)}>
            Why Choose Us
          </Link>
          <Link href="/properties" onClick={() => setIsMenuOpen(false)}>
            Our Properties
          </Link>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </a>
        </div>
        <div className="border-1 border-white text-white  text-center py-2 cursor-pointer hover:text-black hover:bg-white">
          Call Us
        </div>
      </div>
    </>
  );
}

export default Navbar;
