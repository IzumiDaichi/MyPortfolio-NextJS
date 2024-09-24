"use client"
import React from "react";
import { fadeIn } from "../components/framer";
import { motion } from "framer-motion";

function contact() {
  return (
    <div className="container2 bg-white overflow-hidden rounded-lg shadow-lg flex-col">
    <motion.div
    variants={fadeIn("down",0.4)}
    initial="hidden"
    whileInView={"show"} 
    viewport={{once: false, amount: 0.2 }}
       
    className="cover bg-[#364971] overflow-hidden rounded-lg shadow-lg">
      <div className="mt-5 mb-3 text-center">
      <h1 className="text-[#E3EAF5] font-bold text-3xl md:text-5xl mt-0">
          /Contact
        </h1>
      </div>
    </motion.div>
    <hr className="solid"/>
    <p className="text-[#500A06] text-3xl">
          ENTER CONTACT FIELDS HERE
        </p>
    </div>
  );
}

export default contact;
