import React, {useState} from "react";
import Image from "next/image";
import '../app/globals.css'
import { fadeIn } from "../lib/framer";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar2";

import portfolio64 from "@/components/portfolioComponents/portfolio64";
import portfolio65 from "@/components/portfolioComponents/portfolio65.png";
import portfolio66 from "@/components/portfolioComponents/portfolio66.png";
import portfolio67 from "@/components/portfolioComponents/portfolio67.png";
import portfolio68 from "@/components/portfolioComponents/portfolio68.png";
import portfolio69 from "@/components/portfolioComponents/portfolio69.png";
import portfolio70 from "@/components/portfolioComponents/portfolio70.png";
import portfolio71 from "@/components/portfolioComponents/portfolio71.png";
import portfolio72 from "@/components/portfolioComponents/portfolio72.png";
import portfolio73 from "@/components/portfolioComponents/portfolio73.png";
import { portfolio64 } from '@/c';

const GraphicDesigns = () => {
    const images = [
      portfolio64,
      portfolio65,
      portfolio66,
      portfolio67,
      portfolio68,
      portfolio69,
      portfolio70,
      portfolio71,
      portfolio72,
      portfolio73,
    ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState ('');
  
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

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

      <h1 className="text-white flex justify-self-center font-bold text-5xl py-6">/Graphic Design Portfolio</h1>

    </motion.div>
    <motion.div 
    className="grid grid-col items-center bg-[#253558]"
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true, amount: 0.2 }}>
      <h2 className="text-white flex justify-self-center font-bold text-2xl py-2">Marketing</h2>
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
  )
}

export default GraphicDesigns