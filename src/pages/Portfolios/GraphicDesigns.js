import React from "react";
import Image from "next/image";
import "../../app/globals.css";
import { motion } from "framer-motion";
import { scaleVariant } from "../../lib/framer";
import Navbar from "@/components/ui/Navbar2";
import {MarketingImages, PosterImages} from '@/lib/PortfolioImages'

const GraphicDesigns = () => {
  
  return (
    <>
      <Navbar />
      <div className="mt-[89px]">
        {/* Section Heading Animation */}
        <motion.div
          className="grid grid-col items-center bg-[#364971]"
          initial="hidden"
          animate="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-white flex justify-self-center font-bold text-5xl py-6">
            /Graphic Design Portfolio
          </h1>
        </motion.div>

        {/* Marketing Section */}
        <motion.div
          className="grid grid-col items-center bg-[#253558]"
          initial="hidden"
          animate="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-white flex justify-self-center font-bold text-2xl py-2">
            Marketing
          </h2>
        </motion.div>

        <div className="pt-4 pb-4">
          <div className="gallery">
            {MarketingImages.map((image, index) => (
              <motion.div
                key={index}
                variants={scaleVariant} // Apply the scale variant
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="mb-6"
              >
                <Image
                  src={image}
                  style={{ width: "100%", height: "100%" }}
                  alt={`Portfolio ${index + 1}`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Posters Section */}
        <div className='bg-gradient-to-t from-[#4A66A0]'>
          <motion.div
            className="grid grid-col items-center bg-[#253558]"
            initial="hidden"
            animate="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-white flex justify-self-center font-bold text-2xl py-2">
              Posters
            </h2>
          </motion.div>

          <div className="pt-4 pb-4">
            <div className="gallery">
              {PosterImages.map((poster, index) => (
                <motion.div
                  key={index}
                  variants={scaleVariant} // Apply the scale variant
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="mb-6"
                >
                  <Image
                    src={poster}
                    style={{ width: "100%", height: "100%" }}
                    alt={`Portfolio Poster ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphicDesigns;
