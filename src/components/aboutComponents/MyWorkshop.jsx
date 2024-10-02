import React from "react";
import Image from "next/image";
import Html from "../../../public/icons/Html 5.png";
import CSS from "../../../public/icons/CSS.png";
import JS from "../../../public/icons/JavaScript.png";
import Tailwind from "../../../public/icons/Tailwind.png";
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
        <h1 className="font-bold text-3xl pb-4 "> My Tools </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-2 gap-4 "
      >
        <div className="bg-gray-800 rounded-lg p-4 text-white grid grid-cols-2 items-center">
          <Image src={Html} width="50" height="50" alt="Icon 1" />
          <p className="hidden sm:block">HTML</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-white grid grid-cols-2 items-center">
          <Image src={CSS} width="50" height="50" alt="Icon 2" />
          <p className="hidden sm:block">CSS</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-white grid grid-cols-2 items-center">
          <Image src={JS} width="50" height="50" alt="Icon 3" />
          <p className="hidden sm:block">JavaScript</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-white grid grid-cols-2 items-center">
          <Image src={Tailwind} width="50" height="50" alt="Icon 4" />
          <p className="hidden sm:block">Tailwind</p>
        </div>
      </motion.div>
    </div>
  );
}
