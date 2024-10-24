import React, { useState } from "react";
import Image from "next/image";
import "../../app/globals.css";
import { fadeIn, scaleVariant } from "../../lib/framer";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar2";
import {ArtPortfolioImages} from '@/lib/PortfolioImages'

const ArtPortfolio = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[89px]">
        <motion.div
          className="grid grid-col items-center bg-[#364971]"
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-white flex justify-self-center font-bold text-5xl py-6">
            /Art Portfolio
          </h1>
        </motion.div>
        <div className="pt-4">
          <div className="gallery">
            {/* Render images using the `images` array */}
            {ArtPortfolioImages.map((image, index) => (
              <motion.div
              key={index}
              variants={scaleVariant} // Apply the scale variant
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="mb-6"
            >
              <Image
                key={index}
                src={image}
                style={{ width: "100%", height: "100%", paddingBottom: "12px" }}
                alt={`Portfolio ${index + 1}`}
              />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtPortfolio;
