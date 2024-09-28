import React from "react";
import Image from "next/image";
import ProfileImg from "/public/images/Profile.png";
import Socials from "../homeComponents/Socials";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";
function ProfileCard() {
  return (
    <motion.div
      variants={fadeIn("fade", 0.9)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }}
      className="flex flex-row justify-center"
    >
      <div className="bg-gradient-to-b from-[#E5F9F3] via-[#CCEBF0] to-[#B5D7E8] rounded-lg p-4 shadow-md max-w-screen-xl mx-4">
        <motion.div
          variants={fadeIn("down", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="flex flex-col items-center justify-center"
        >
          <Image
            src={ProfileImg}
            alt="Jake Rupisan"
            className="rounded-full object-cover w-48 h-48 md:w-72 md:h-72 mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Jake Rupisan</h2>
          <p className="text-gray-600 mb-2">TRAINING FOR UI & UX, FRONTEND</p>
          <p className="text-gray-600 mb-4">Artist/Student</p>
          <div className="flex space-x-4">
            <Socials />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProfileCard;
