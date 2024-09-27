import React from "react";
import PS from "../../../public/icons/PhotoShop.png";
import Canva from "../../../public/icons/Canva.png";
import CSP from "../../../public/icons/CSP.png";
import Figma from "../../../public/icons/Figma.png";
import Image from "next/image";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";

export default function MyArtStudio() {
  return (
    <div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="font-bold text-3xl pb-4"> My Studio </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.9)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="bg-gray-800 rounded-lg p-4 text-white grid grid-cols-2 items-center">
          <Image src={PS} width="50" height="50" alt="Icon 1" />
          <p className="hidden sm:block">Adobe Photoshop</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-white grid grid-cols-2 items-center">
          <Image src={Canva} width="50" height="50" alt="Icon 2" />
          <p className="hidden sm:block">Canva</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-white grid grid-cols-2 items-center">
          <Image src={CSP} width="50" height="50" alt="Icon 3" />
          <p className="hidden sm:block">ClipStudioPaint</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-white grid grid-cols-2 items-center">
          <Image src={Figma} width="50" height="50" alt="Icon 4" />
          <p className="hidden sm:block">Figma</p>
        </div>
      </motion.div>
    </div>
  );
}
