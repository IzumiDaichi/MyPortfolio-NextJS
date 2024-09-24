"use client"
import Profile from '../components/Profile'
import React from "react";
import { fadeIn } from "../components/framer";
import { motion } from "framer-motion";
import Aboutme from '../components/aboutme';
function page() {
  return (
    <div className="container h-dvh bg-white overflow-hidden rounded-lg shadow-lg flex-col">
    <motion.div
    variants={fadeIn("down",0.4)}
    initial="hidden"
    whileInView={"show"} 
    viewport={{once: true, amount: 0.2 }}
       
    className="bannerimg w-screen max-h-screen bg-[#364971] overflow-hidden rounded-lg shadow-lg">
      <div className="mt-3 mb-3 text-center">
        
      <h1 className="text-[#E3EAF5] font-bold text-3xl md:text-5xl mt-0">
          /About Me
        </h1>
      </div>
    </motion.div>
    <Profile />
    <div className="">
      <Aboutme/>
    </div>
    
      
    </div>
  );
}


export default page