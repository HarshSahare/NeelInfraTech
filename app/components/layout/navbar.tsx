"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

function Navbar() {
  const prevY = useRef(0);
  const navbar = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMenuOpenRef = useRef(isMenuOpen);

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
      navbar.current?.classList.remove("opacity-0", "fadeIn", "delay-7s");
      navbar.current?.classList.add(
        "transition-opacity",
        "duration-500",
        "opacity-100"
      );
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > 100) {
        navbar.current?.classList.remove("bg-[#00000042]");
        navbar.current?.classList.add("bg-[#0000009c]");
      } else {
        navbar.current?.classList.add("bg-[#00000042]");
        navbar.current?.classList.remove("bg-[#0000009c]");
      }

      if (!isMenuOpenRef.current) {
        if (currentY > prevY.current) {
          navbar.current?.classList.remove("opacity-100");
          navbar.current?.classList.add("opacity-0", "pointer-events-none");
        } else {
          navbar.current?.classList.add("opacity-100");
          navbar.current?.classList.remove("opacity-0", "pointer-events-none");
        }
      } else {
        navbar.current?.classList.add("opacity-100");
        navbar.current?.classList.remove("opacity-0", "pointer-events-none");
      }

      prevY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loaded]);

  useEffect(() => {
    navbar.current?.classList.add("opacity-100");
    navbar.current?.classList.remove("opacity-0", "pointer-events-none");
  }, [isMenuOpen]);

  return (
    <div
      ref={navbar}
      className={`fixed top-0 left-0 z-50 w-full h-[94px] backdrop-blur-md ${
        isMenuOpen ? "bg-black/80" : "bg-[#00000042]"
      } opacity-0 fadeIn delay-7s`}
    >
      <div className="w-[90%] mx-auto h-full items-center grid grid-cols-3">
        {/* Desktop Left */}
        <div className="hidden md:flex gap-10 font-classica text-[#bab4bba8]">
          <Link className="hover:text-white cursor-pointer" href="/stories">
            Our Story
          </Link>
          <Link className="hover:text-white cursor-pointer" href="/properties">
            Our Properties
          </Link>
        </div>

        {/* Desktop Logo */}
        <div className="hidden md:flex justify-center">
          <Image
            className="h-auto"
            src="/images/logo.png"
            alt="logo"
            width={160}
            height={32}
            quality={80}
          />
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex justify-end">
          <a
            href="#contact"
            className="ring ring-black text-black py-2 px-5 hover:bg-black hover:text-white cursor-pointer"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Layout */}
        <div className="flex items-center justify-between w-full md:hidden col-span-3 px-2">
          <div>
            <Image
              className="h-auto"
              src="/images/logo.png"
              alt="logo"
              width={160}
              height={32}
              quality={80}
            />
          </div>
          <button
            className="text-white text-3xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-black/80 text-white text-lg flex flex-col gap-4 font-classica backdrop-blur-md">
          <Link href="/stories" onClick={() => setIsMenuOpen(false)}>
            Our Story
          </Link>
          <Link href="/properties" onClick={() => setIsMenuOpen(false)}>
            Our Properties
          </Link>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
