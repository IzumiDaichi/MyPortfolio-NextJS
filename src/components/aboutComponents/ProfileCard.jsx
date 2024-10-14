import {React, useState } from "react";
import Image from "next/image";
import ProfileImg from "/public/images/Profile.png";
import ProfileImg2 from "/public/images/Profile2.png";
import Socials from "../ui/Socials2";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";
const ProfileCard = () => {

    // Define state for the image and text content
    const [profile, setProfile] = useState({
      img: ProfileImg, // Default image
      name: "Jake Rupisan",
      role: "TRAINING FOR UI & UX, FRONTEND",
      description: "Student",
    });
  
    // Define alternative profile content
    const alternativeProfile = {
      img: ProfileImg2, // Change to another image source
      name: "IzumiDaichi",
      role: "LEARNING HOW TO DRAW ANATOMY",
      description: "Terrible Artist",
    };
  
    // Handle image click to toggle content
    const handleProfileClick = () => {
      setProfile((prevProfile) =>
        prevProfile.name === "Jake Rupisan" ? alternativeProfile : {
          img: ProfileImg,
          name: "Jake Rupisan",
          role: "TRAINING FOR UI & UX, FRONTEND",
          description: "Student"
        }
      );
    };
  return (
    <div
        className="flex flex-row justify-center"
  >
    <div     onClick={handleProfileClick}>
    <motion.div
    whileTap={{  scale: 0.95, rotateY: 90}}
    variants={fadeIn("fade", 0.9)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.5 }}
    className="bg-gradient-to-b from-[#E5F9F3] via-[#CCEBF0] to-[#B5D7E8] dark:bg-gradient-to-b dark:from-[rgb(19,132,98)] dark:via-[#2B8998] dark:to-[#184860] 
    rounded-2xl p-11 shadow-md max-w-screen-full cursor-pointer">
      <motion.div
        variants={fadeIn("down", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="flex flex-col items-center justify-center"
      >
        {/* Image that changes on click */}
        <Image
          src={profile.img}
          alt={profile.name}
          className="rounded-full object-cover w-48 h-48 md:w-72 md:h-72 mb-4" 
        />
        
        {/* Text content that changes with the image */}
        <h2 className="text-xl font-semibold text-black">{profile.name}</h2>
        <p className="text-black mb-2">{profile.role}</p>
        <p className="text-black mb-4">{profile.description}</p>

        <div className="flex space-x-4">
          <Socials />
        </div>
      </motion.div>
    </motion.div>
    </div>
  </div>
  );
}

export default ProfileCard;
