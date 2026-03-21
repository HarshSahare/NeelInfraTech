"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";

export default function ThankYouPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ Ensure elements are visible by default
      gsap.set(".button", { opacity: 1 });

      const tl = gsap.timeline();

      tl.fromTo(
        ".icon",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      )
        .fromTo(
          ".title",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.3",
        )
        .fromTo(
          ".text",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.3",
        )
        .fromTo(
          ".button",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.3",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6">
      <div
        ref={containerRef}
        className="bg-white shadow-xl rounded-2xl p-8 md:p-12 text-center max-w-md w-full"
      >
        <FaCheckCircle className="icon text-green-500 text-5xl mx-auto mb-4" />

        <h1 className="title text-3xl font-bold mb-3 text-gray-800">
          Thank You!
        </h1>

        <p className="text text-gray-600 mb-6">
          Your form has been submitted successfully. Our team will get in touch
          with you shortly.
        </p>

        <Link
          href="/"
          className="button inline-block mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
