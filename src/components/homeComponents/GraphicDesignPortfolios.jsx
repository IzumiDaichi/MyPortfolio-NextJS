"use client";
import React from "react";
import Link from 'next/link'
import GraphicDesign from "../../../public/Images/GraphicDesign.png";
import Image from "next/image";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";

function GraphicDesignPortfolios() {
  return (
    <div className='hover:py-6'>

    <Link href="GraphicDesigns">

    <motion.div
    whileHover={{scale:1.1}}
    whileTap={{ scale: 0.95 }}
      id="uiux"
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container h-dvh bg-[#E3EAF5] hover:bg-[#F3F8FF] dark:bg-[#364971] dark:hover:bg-[#4A66A0] overflow-hidden rounded-lg shadow-lg"
    >

      <div className="mt-5 px-10 max-w-screen-lg max-h-screen-lg m-auto">
          
          <div className='hover:scale-110 transition-transform duration-300'>
          <Image
            className="rounded-lg hover:cursor-pointer"
            src={GraphicDesign}
            alt="UI UX Portfolio"
          />
          </div>
          
          <div className='pt-6'>
          <p className="text-2xl text-black dark:text-white flex-nowrap font-semibold mt-2">
            MY Graphic Design Portfolio
          </p>
          <p className="text-black dark:text-white text-base font-extralight pb-4">
            A Collection of my Graphic Desgin Projects
          </p>
        </div>
      </div>

    </motion.div>

    </Link>
    </div>
  )
}

export default GraphicDesignPortfolios