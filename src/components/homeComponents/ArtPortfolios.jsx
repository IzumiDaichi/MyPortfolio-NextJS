"use client";
import Image from "next/image";
import React from "react";
import ArtPortfolio from "/public/Images/ArtPortfolio.png";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";

function ArtPortfolios() {
  return (
    <motion.div
      id="art"
      variants={fadeIn("right", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container2 h-dvh bg-[#E3EAF5] overflow-hidden rounded-lg shadow-lg"
    >
      <div className="mt-5 px-10 max-w-screen-lg max-h-screen-lg m-auto">
        <span className="flex-wrap justify-center">
          <Image
            className="rounded-lg hover:cursor-pointer "
            src={ArtPortfolio}
            alt="Art Portfolio"
          />
          <p className="text-2xl text-black flex-nowrap font-semibold mt-2">
            MY ART PORTFOLIO
          </p>
          <p className="text-black text-base font-extralight">
            A Collection of my artworks
          </p>
        </span>
      </div>
    </motion.div>
  );
}

export default ArtPortfolios;
