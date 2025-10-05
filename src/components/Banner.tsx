"use client";

import React from "react";
import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";

export default function Banner() {
  return (
    <div
      id="home"
      className="relative w-full h-screen" // fixed 100vh
    >
      <Image
        src="/Banner.webp"
        alt="Banner"
        fill
        style={{ objectFit: "cover" }}
        priority
        id="banner-image"
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <BsChevronDown className="size-10" />
      </div>
    </div>
  );
}
