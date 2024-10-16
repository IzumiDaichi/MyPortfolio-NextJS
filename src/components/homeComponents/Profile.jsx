"use client";
import Image from "next/image";
import { React, useEffect } from "react";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";
import ProfileImg from "@/Images/Profile.png";
import Socials from "../ui/Socials";
import ProfileAvatar from "@/Images/profileavatar.png";
import MyWorkshop from "../../components/homeComponents/MyWorkshop";
import MyArtStudio from "../../components/homeComponents/MyStudio";
function Profile() {
  const resumeClick = (e) => {
    e.preventDefault();
    // window.open("../../public/resume.pdf", "_blank");

    window.location.href = "./documents/resume.pdf";
  };

  return (
    <>
      <div id="profilediv" className="mt-16 grid grid-cols-3 items-center">
        <div className=" flex flex-col items-center md:mr-0 md:mb-4 px-2">
          <Image
            className="rounded-full object-cover w-48 h-48 md:w-72 md:h-72"
            src={ProfileImg}
            alt="Jake Rupisan"
          />
          <Socials />
        </div>

        <motion.div
        id="profiletext"
          variants={fadeIn("right")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className=" md:order-1 flex-col pl-2"
        >
          <h1 className="text-black dark:text-white font-bold text-3xl md:text-5xl mt-0">
            JAKE <br /> RUPISAN
          </h1>
          <h2 className="text-black dark:text-white font-bold text-xl md:text-xl">
            TRAINING FOR UI & UX, FRONTEND
          </h2>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="Button font-medium text-white px-4 py-2 rounded-xl mt-2"
            onClick={resumeClick}
          >
            Download Resume
          </motion.button>

        </motion.div>
        <motion.div
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="flex order-1 "
        >
          <Image
            id="profileavatar"
            src={ProfileAvatar} // Use the correct image based on dark mode
            className="w-full flex justify-self-end dark:hidden"
          ></Image>
        </motion.div>
      </div>

      <div id='apps' className="mt-4 justify-center w-full flex">
        <div className="px-5 pb-5">
          <MyWorkshop />
        </div>

        <div className="px-5 pb-5">
          <MyArtStudio />
        </div>
      </div>
    </>
  );
}
export default Profile;
