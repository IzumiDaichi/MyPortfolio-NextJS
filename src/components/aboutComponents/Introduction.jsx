import React from "react";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";

function Introduction() {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="leading-7"
    >
      <p className="text-[#500A06] text-xl text-center mx-8">
        <span className="font-semibold">I'm Jake Rupisan</span>, a BSIT student
        at AMA Computer College. I'm a big fan of digital art and design, and
        you can find some of my work under the pen name Daichi Izumi. Besides
        drawing and designing, I'm also exploring the world of web development.
        Right now, I'm learning React, Tailwind CSS, and Next.js, and I'm pretty
        excited about what I can create with these tools. I've also got
        experience with creative software like Canva, Photoshop, Figma, and Clip
        Studio Paint. I'm really interested in UI/UX design and frontend
        development, and I'm always looking for new ways to improve my skills
        and create amazing digital experiences.
      </p>
    </motion.div>
  );
}

export default Introduction;
