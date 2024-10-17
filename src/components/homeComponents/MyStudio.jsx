import React from "react";
import PS from "@/public/icons/PhotoShop.png";
import Canva from "@/public/icons/Canva.png";
import CSP from "@/public/icons/CSP.png";
import Figma from "@/public/icons/Figma.png";
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
        <h1 className="font-bold text-3xl pb-4 dark:text-white"> My Studio </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="toolscontainer grid grid-cols-3 gap-4"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center"
        >
          <Image src={PS} width="50" height="50" alt="Icon 1" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center"
        >
          <Image src={Canva} width="50" height="50" alt="Icon 2" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center"
        >
          <Image src={CSP} width="50" height="50" alt="Icon 3" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center"
        >
          <Image src={Figma} width="50" height="50" alt="Icon 4" />
        </motion.div>
      </motion.div>
    </div>
  );
}
