import React from 'react'
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineX } from "react-icons/ai";
import Link from "next/link";
import { fadeIn } from "./framer"
import { motion } from "framer-motion"
function socials() {
  return (
    <motion.div
    variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
    className="flex flex-row justify-around pt-10 items-center mb-5">
    <Link href="https://www.facebook.com/IzumiDaichi02">
      <AiOutlineFacebook
        size={60}
        color="black"
        className="cursor-pointer"
      />
    </Link>
    <Link href="https://x.com/IzumiDaichi02">
      <AiOutlineX size={60} color="black" className="cursor-pointer" />
    </Link>
    <Link href="https://github.com/IzumiDaichi">
      <AiOutlineGithub
        size={60}
        color="black"
        className="cursor-pointer"
      />
    </Link>
  </motion.div>
  )
}

export default socials