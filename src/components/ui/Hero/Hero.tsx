"use client";

import React from "react";
import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";
import styles from "./Hero.module.css";

export default function Banner() {
  return (
    <div
      id="home"
      className="relative w-full h-screen overflow-hidden" // fixed 100vh
    >
      <Image
        src="/Banner.webp"
        alt="Banner"
        fill
        style={{ objectFit: "cover" }}
        priority
        className={styles.bannerImage}
      />

      {/* Pixel Grid Overlay */}
      <div className={styles.gridOverlay} />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <BsChevronDown className="size-10 text-white drop-shadow-lg" aria-hidden="true"/>
      </div>
    </div>
  );
}
