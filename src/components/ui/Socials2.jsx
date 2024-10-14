import React from "react";
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineX } from "react-icons/ai";
import Link from "next/link";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";
function socials() {
  return (
    <motion.div
      id="social"
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-row justify-around pt-10 items-center mb-5"
    >
      <motion.div
      whileHover={{scale:1.2}}
      whileTap={{ rotate: 190, scale: 1.2 }}>
      <Link href="https://www.facebook.com/IzumiDaichi02">
        <AiOutlineFacebook size={60} color="black" className="cursor-pointer dark:fill-white" />
      </Link>
      </motion.div>
      <motion.div whileHover={{scale:1.2}}
      whileTap={{ rotate: 190, scale: 1.2 }}>
      <Link href="https://x.com/IzumiDaichi02">
        <AiOutlineX size={60} color="black" className="cursor-pointer dark:fill-white" />
      </Link>
      </motion.div>
      <motion.div whileHover={{scale:1.2}}
      whileTap={{ rotate: 190, scale: 1.2 }}>
      <Link href="https://github.com/IzumiDaichi">
        <AiOutlineGithub size={60} color="black" className="cursor-pointer dark:fill-white" />
      </Link>
      </motion.div>
    </motion.div>
  );
}

export default socials;