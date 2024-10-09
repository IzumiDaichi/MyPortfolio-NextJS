"use client";
import Image from "next/image";
import React from "react";
import ArtPortfolioImg from "/public/Images/ArtPortfolio.png";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";
import Link from "next/link";

function ArtPortfolios() {
  return (
    <motion.div
    whileHover={{scale:1.1}}
      id="art"
      variants={fadeIn("right", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container h-dvh bg-[#E3EAF5] 
      overflow-hidden rounded-lg shadow-lg hover:cursor-pointer"
    >
     
      <div className="mt-5 px-10 max-w-screen-lg max-h-screen-lg m-auto">
        <span className="flex-wrap justify-center">
           <Link href="ArtPortfolio">
           <Image
            className="rounded-lg"
            src={ArtPortfolioImg}
            alt="Art Portfolio"
          />
          <p className="text-2xl text-black flex-nowrap font-semibold mt-2]">
            MY ART PORTFOLIO
          </p></Link>
          <p className="text-black text-base font-extralight pb-4">
            A Collection of my artworks
          </p>
        </span>
      </div>
    </motion.div>
  );
}

export default ArtPortfolios;
