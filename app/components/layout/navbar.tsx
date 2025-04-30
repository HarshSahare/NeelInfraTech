"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

function Navbar() {
  const prevY = useRef(0);
  const [loaded, setLoaded] = useState(false);
  const navbar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
      navbar.current?.classList.remove("opacity-0");
      navbar.current?.classList.remove("delay-7s");
      navbar.current?.classList.remove("fadeIn");
      navbar.current?.classList.add("transition-opacity", "duration-500");
    }, 8000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const handleScroll = () => {
      const prev = prevY.current;
      const currentY = window.scrollY;
      if (currentY > prev) {
        navbar.current?.classList.remove("opacity-100");
        navbar.current?.classList.add("opacity-0");
      } else {
        navbar.current?.classList.add("opacity-100");
        navbar.current?.classList.remove("opacity-0");
      }
      prevY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loaded]);
  return (
    <div
      ref={navbar}
      className="w-full flex bg-[#00000042] opacity-0 fadeIn delay-7s h-[94px] backdrop-blur-md fixed top-0 left-0 z-50"
    >
      <div className="w-[90%] m-auto flex justify-between content-center">
        <div className="flex content-center flex-wrap">
          <Image
            src="/images/hamburger.png"
            alt="hamburger"
            width={32}
            height={11}
          />
        </div>
        <div>
          <Image
            className="h-auto"
            src="/images/logo.png"
            alt="logo"
            width={220}
            quality={80}
            height={32}
          />
        </div>
        <div className="bg-black text-white py-2 px-5">Contact Us</div>
      </div>
    </div>
  );
}

export default Navbar;
