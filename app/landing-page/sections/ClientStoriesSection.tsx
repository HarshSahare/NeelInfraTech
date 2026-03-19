"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function ClientStoriesSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-classica  capitalize mb-3">
            Client stories
          </h2>

          <p className="text-gray-500 text-sm font-poppins">
            Hear from investors who built wealth with us
          </p>
        </div>

        {/* Video/Image Block */}
        <div className="w-full aspect-video rounded-md overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/RUtfKF5FZNg"
            title="Client Story"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
