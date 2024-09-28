"use client";
import React from "react";
import UIUX from "/public/images/UI & UX.png";
import Image from "next/image";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";
function UIUXPortfolios() {
  return (
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container2 h-dvh bg-[#C9CEE7] overflow-hidden rounded-lg shadow-lg"
    >
      <div className="mt-5 px-10 max-w-screen-lg max-h-screen-lg m-auto">
        <span className="flex-wrap justify-center">
          <Image
            className="rounded-lg hover:cursor-pointer"
            src={UIUX}
            alt="UI UX Portfolio"
            priority
          />
          <p className="text-2xl text-black flex-nowrap font-semibold mt-2">
            MY UI & UX Portfolio
          </p>
          <p className="text-black text-base font-extralight">
            A Collection of my UI & UX Projects
          </p>
        </span>
      </div>
    </motion.div>
  );
}

export default UIUXPortfolios;
