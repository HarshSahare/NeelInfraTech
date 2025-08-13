"use client";
import React, { useRef, useState } from "react";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";

function VideoComponent({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const [muted, setMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOnClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      videoRef.current.play();
      setMuted((prev) => !prev);
    }
  };

  return (
    <div className="w-full relative cursor-pointer">
      <video
        src={src}
        autoPlay
        ref={videoRef}
        onClick={handleOnClick}
        loop
        muted
        className={className + " w-full h-auto object-cover"}
      ></video>
      <div
        className="absolute top-0 right-0 flex justify-center items-center text-white h-10 w-10 bg-black/40"
        onClick={handleOnClick}
      >
        {muted ? <FaVolumeXmark /> : <FaVolumeHigh />}
      </div>
    </div>
  );
}

export default VideoComponent;
