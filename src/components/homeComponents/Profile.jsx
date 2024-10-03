"use client";
import Image from "next/image";
import React from "react";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";
import ProfileImg from "/public/images/Profile.png";
import Socials from "./Socials";
function Profile() {
  const resumeClick = (e) => {
    e.preventDefault();
    // window.open("../../public/resume.pdf", "_blank");

    window.location.href = "./documents/resume.pdf";
  };

  return (
    <div className="mt-16 flex flex-col items-center md:flex-row">
      <div className=" inline-block px-10 md:mr-0 md:mb-4">
        <Image
          className="rounded-full object-cover w-48 h-48 md:w-72 md:h-72"
          src={ProfileImg}
          alt="Jake Rupisan"
        />
        <Socials />
      </div>

      <motion.div
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false }}
        className="flex-1 md:order-1"
      >
        <h1 className="text-black font-bold text-3xl md:text-5xl mt-0">
          JAKE <br /> RUPISAN
        </h1>
        <h2 className="text-black font-bold text-xl md:text-xl">
          TRAINING FOR UI & UX, FRONTEND
        </h2>

        <button
          className="Button font-medium text-white px-4 py-2 rounded-xl mt-2"
          onClick={resumeClick}
        >
          Download Resume
        </button>
      </motion.div>
    </div>
  );
}
export default Profile;
