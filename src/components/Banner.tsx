"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";

export default function Banner() {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Shrinks height from 100vh down to 50vh
      const newHeight = Math.max(50, 100 - scrollY / 10);
      setHeight(`${newHeight}vh`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="home"
      className="relative w-full"
      style={{ height }}
    >
      <Image
        src="/Banner.webp"
        alt="Banner"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="banner-image"
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
      <BsChevronDown className="size-10" />
      </div>

    </div>
  );
}
