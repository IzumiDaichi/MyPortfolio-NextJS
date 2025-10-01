"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

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
      className="relative w-full banner-image"
      style={{ height }}
    >
      <Image
        src="/Banner.webp"
        alt="Banner"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
}
