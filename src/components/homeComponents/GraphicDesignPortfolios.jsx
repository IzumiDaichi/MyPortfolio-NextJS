"use client";
import React from "react";
import Link from 'next/link';
import GraphicDesign from "@/Images/GraphicDesign.png";
import Image from "next/image";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";

function GraphicDesignPortfolios() {
  return (
    <div>
      <Link href="Portfolios/GraphicDesigns">
        <motion.div
          whileTap={{ scale: 0.95 }}
          id="uiux"
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="container group h-dvh bg-[#E3EAF5] hover:bg-[#F3F8FF] dark:bg-[#1B1D25] dark:hover:bg-[#363D5A] overflow-hidden rounded-lg border dark:border-[#3F5DA7]"
        >
          <div className="mt-5 px-10 max-w-screen-lg max-h-screen-lg m-auto py-8">
            {/* Image wrapper with hover effect triggered by parent */}
            <div className="transition-transform duration-300 transform group-hover:scale-110">
              <Image
                className="rounded-lg hover:cursor-pointer"
                src={GraphicDesign}
                alt="Graphic Design Portfolio"
              />
            </div>

            {/* Text section */}
            <div className="pt-6">
              <p className="text-2xl text-black dark:text-white flex-nowrap font-semibold mt-2">
                MY GRAPHIC DESIGN PORTFOLIO
              </p>
              <p className="text-black dark:text-white text-base font-extralight pb-4">
                A Collection of my Graphic Design Projects
              </p>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}

export default GraphicDesignPortfolios;
