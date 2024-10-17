import React from "react";
import Image from "next/image";
import Html from "@/public/icons/Html 5.png";
import CSS from "@/public/icons/CSS.png";
import JS from "@/public/icons/JavaScript.png";
import Tailwind from "@/public/icons/Tailwind.png";
import Next from '@/public/icons/NextJS.png'
import ReactImg from '@/public/icons/React.png'
import Wordpress from '@/public/icons/Wordpress.png'
import Wix from '@/public/icons/Wix.png'
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";

export default function MyWorkshop() {
  return (
    <div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="font-bold text-3xl pb-4 dark:text-white"> My Tools </h1>
      </motion.div>

      <motion.div
        variants={fadeIn("down", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="toolscontainer grid grid-cols-3 gap-4  "
      >
        <motion.div 
        whileHover={{scale:1.1}}
        className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center">
          <Image className="toolsimage" src={Html} width="auto" height="50" alt="Icon 1" />
        </motion.div>

        <motion.div 
        whileHover={{scale:1.1}}
        className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center">
          <Image className="toolsimage" src={CSS} width="50" height="50" alt="Icon 2" />
        </motion.div>

        <motion.div 
        whileHover={{scale:1.1}}
        className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center">
          <Image className="toolsimage" src={JS} width="50" height="50" alt="Icon 3" />
        </motion.div>

        <motion.div 
        whileHover={{scale:1.1}}
        className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl py-6 p-4 text-white items-center">
          <Image className="toolsimage" src={Tailwind} width="50" height="50" alt="Icon 4" />
        </motion.div>

        <motion.div 
        whileHover={{scale:1.1}}
        className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl py-6 p-4 text-white items-center">
          <Image className="toolsimage" src={Next} width="50" height="50" alt="Icon 4" />
        </motion.div>

        <motion.div 
        whileHover={{scale:1.1}}
        className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center">
          <Image className="toolsimage" src={ReactImg} width="50" height="50" alt="Icon 4" />
        </motion.div>

        <motion.div 
        whileHover={{scale:1.1}}
        className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center">
          <Image className="toolsimage" src={Wordpress} width="50" height="50" alt="Icon 4" />
        </motion.div>

        <motion.div 
        whileHover={{scale:1.1}}
        className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center">
          <Image className="toolsimage" src={Wix} width="50" height="50" alt="Icon 4"/>
        </motion.div>

      </motion.div>
    </div>
  );
}
