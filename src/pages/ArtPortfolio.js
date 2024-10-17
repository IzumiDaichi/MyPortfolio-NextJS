import React, {useState} from "react";
import Image from "next/image";
import '../app/globals.css'
import { fadeIn } from "../lib/framer";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar2";


import portfolio1 from "../components/portfolioComponents/portfolio1.webp";
import portfolio2 from "../components/portfolioComponents/portfolio2.webp";
import portfolio3 from "../components/portfolioComponents/portfolio3.webp";
import portfolio4 from "../components/portfolioComponents/portfolio4.webp";
import portfolio5 from "../components/portfolioComponents/portfolio5.webp";
import portfolio6 from "../components/portfolioComponents/portfolio6.webp";
import portfolio7 from "../components/portfolioComponents/portfolio7.webp";
import portfolio8 from "../components/portfolioComponents/portfolio8.webp";
import portfolio9 from "../components/portfolioComponents/portfolio9.webp";
import portfolio10 from "../components/portfolioComponents/portfolio10.webp";

import portfolio11 from "../components/portfolioComponents/portfolio11.webp";
import portfolio12 from "../components/portfolioComponents/portfolio12.webp";
import portfolio13 from "../components/portfolioComponents/portfolio13.webp";
import portfolio14 from "../components/portfolioComponents/portfolio14.webp";
import portfolio15 from "../components/portfolioComponents/portfolio15.webp";
import portfolio16 from "../components/portfolioComponents/portfolio16.webp";
import portfolio17 from "../components/portfolioComponents/portfolio17.webp";
import portfolio18 from "../components/portfolioComponents/portfolio18.webp";
import portfolio19 from "../components/portfolioComponents/portfolio19.webp";
import portfolio20 from "../components/portfolioComponents/portfolio20.webp";

import portfolio21 from "../components/portfolioComponents/portfolio21.webp";
import portfolio22 from "../components/portfolioComponents/portfolio22.webp";
import portfolio23 from "../components/portfolioComponents/portfolio23.webp";
import portfolio24 from "../components/portfolioComponents/portfolio24.webp";
import portfolio25 from "../components/portfolioComponents/portfolio25.webp";
import portfolio26 from "../components/portfolioComponents/portfolio26.webp";
import portfolio27 from "../components/portfolioComponents/portfolio27.webp";
import portfolio28 from "../components/portfolioComponents/portfolio28.webp";
import portfolio29 from "../components/portfolioComponents/portfolio29.webp";
import portfolio30 from "../components/portfolioComponents/portfolio10.webp";

import portfolio31 from "../components/portfolioComponents/portfolio31.webp";
import portfolio36 from "../components/portfolioComponents/portfolio36.webp";
import portfolio32 from "../components/portfolioComponents/portfolio32.webp";
import portfolio37 from "../components/portfolioComponents/portfolio37.webp";
import portfolio33 from "../components/portfolioComponents/portfolio33.webp";
import portfolio38 from "../components/portfolioComponents/portfolio38.webp";
import portfolio34 from "../components/portfolioComponents/portfolio34.webp";
import portfolio39 from "../components/portfolioComponents/portfolio39.webp";
import portfolio35 from "../components/portfolioComponents/portfolio35.webp";
import portfolio40 from "../components/portfolioComponents/portfolio40.webp";

import portfolio41 from "../components/portfolioComponents/portfolio41.webp";
import portfolio46 from "../components/portfolioComponents/portfolio46.webp";
import portfolio42 from "../components/portfolioComponents/portfolio42.webp";
import portfolio47 from "../components/portfolioComponents/portfolio47.webp";
import portfolio43 from "../components/portfolioComponents/portfolio43.webp";
import portfolio48 from "../components/portfolioComponents/portfolio48.webp";
import portfolio44 from "../components/portfolioComponents/portfolio44.webp";
import portfolio49 from "../components/portfolioComponents/portfolio49.webp";
import portfolio45 from "../components/portfolioComponents/portfolio45.webp";
import portfolio50 from "../components/portfolioComponents/portfolio50.webp";

import portfolio51 from "../components/portfolioComponents/portfolio51.webp";
import portfolio56 from "../components/portfolioComponents/portfolio56.webp";
import portfolio52 from "../components/portfolioComponents/portfolio52.webp";
import portfolio57 from "../components/portfolioComponents/portfolio57.webp";
import portfolio53 from "../components/portfolioComponents/portfolio53.webp";
import portfolio58 from "../components/portfolioComponents/portfolio58.webp";
import portfolio54 from "../components/portfolioComponents/portfolio54.webp";
import portfolio59 from "../components/portfolioComponents/portfolio59.webp";
import portfolio55 from "../components/portfolioComponents/portfolio55.webp";
import portfolio60 from "../components/portfolioComponents/portfolio60.webp";
import portfolio61 from "../components/portfolioComponents/portfolio61.webp";
import portfolio62 from "../components/portfolioComponents/portfolio63.webp";
import portfolio63 from "../components/portfolioComponents/portfolio62.webp";


const ArtPortfolio = () => {
  
  const images = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    portfolio7,
    portfolio8,
    portfolio9,
    portfolio10,
    portfolio11,
    portfolio12,
    portfolio13,
    portfolio14,
    portfolio15,
    portfolio16,
    portfolio17,
    portfolio18,
    portfolio19,
    portfolio20,
    portfolio21,
    portfolio22,
    portfolio23,
    portfolio24,
    portfolio25,
    portfolio26,
    portfolio27,
    portfolio28,
    portfolio29,
    portfolio30,
    portfolio31,
    portfolio32,
    portfolio33,
    portfolio34,
    portfolio35,
    portfolio36,
    portfolio37,
    portfolio38,
    portfolio39,
    portfolio40,
    portfolio41,
    portfolio42,
    portfolio43,
    portfolio44,
    portfolio45,
    portfolio46,
    portfolio47,
    portfolio48,
    portfolio49,
    portfolio50,
    portfolio51,
    portfolio52,
    portfolio53,
    portfolio54,
    portfolio55,
    portfolio56,
    portfolio57,
    portfolio58,
    portfolio59,
    portfolio60,
    portfolio61,
    portfolio62,
    portfolio63,

  ];

  return (
  <>
  <Navbar/>
  <div className='mt-[89px]'>
    <motion.div
    className="grid grid-col items-center bg-[#364971]"
    variants={fadeIn("down", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true, amount: 0.2 }}>

      <h1 className="text-white flex justify-self-center font-bold text-5xl py-6">/Art Portfolio</h1>

    </motion.div>
    <div className="pt-4">
      <div className="gallery">
      {/* Render images using the `images` array */}
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          style={{width:'100%',height:'100%',paddingBottom:'12px'}}
          alt={`Portfolio ${index + 1}`}
        />
      ))}
      </div>
      </div>
      </div>
  </>
  );
};

export default ArtPortfolio;
