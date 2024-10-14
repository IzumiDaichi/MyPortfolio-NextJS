"use client";
import Image from "next/image";
import React from "react";
import ArtPortfolioImg from "@/public/Images/ArtPortfolio.png";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";
import Link from "next/link";

function ArtPortfolios() {
  return (
    <div>

    <Link href="ArtPortfolio">

    <motion.div
    whileTap={{ scale: 0.95 }}
      id="art"
      variants={fadeIn("right", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container h-dvh bg-[#E3EAF5] 
      overflow-hidden rounded-lg shadow-inner hover:cursor-pointer hover:bg-[#F3F8FF] dark:bg-[#1B1D25] dark:hover:bg-[#363D5A] border dark:border-[#3F5DA7] "
    >
     
      <div className="mt-5 px-10 max-w-screen-lg max-h-screen-lg m-auto py-8">

           <div className='hover:scale-110 transition-transform duration-300'>
           <Image
            className="rounded-lg image"
            src={ArtPortfolioImg}
            alt="Art Portfolio"
          />
          </div>

          <div className='pt-6'>
          <p className="text-2xl text-black dark:text-white flex-nowrap font-semibold]">
            MY ART PORTFOLIO
          </p>
          <p className="text-black dark:text-white text-base font-extralight">
            A Collection of my artworks
          </p>
        </div>

      </div>
    </motion.div>
    </Link>
    </div>
  );
}

export default ArtPortfolios;
