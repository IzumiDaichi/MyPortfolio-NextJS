import React from 'react'
import Image from "next/image";
import Html from "@/public/icons/Html 5.png";
import CSS from "@/public/icons/CSS.png";
import JS from "@/public/icons/JavaScript.png";
import Tailwind from "@/public/icons/Tailwind.png";
import Next from '@/public/icons/NextJS.png'
import ReactImg from '@/public/icons/React.png'
import Wordpress from '@/public/icons/Wordpress.png'
import Wix from '@/public/icons/Wix.png'
import PS from "@/public/icons/PhotoShop.png";
import Canva from "@/public/icons/Canva.png";
import CSP from "@/public/icons/CSP.png";
import Sai from '@/public/icons/Sai.png'
import Figma from "@/public/icons/Figma.png";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";


function MyWorkshop() {
  return (
    <div className='apps relative flex justify-center bg-[#BAE0C0] shadow-xl dark:bg-inherit border dark:border-[#3F5DA7] dark:shadow-indigo-500/100 dark:shadow-lg rounded-xl m-8 '> 

        <div className='p-6'>
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h1 className="font-bold text-3xl pb-4 dark:text-white"> My Tools </h1>
    </motion.div>

    <motion.div
      variants={fadeIn("down", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="toolscontainer grid grid-cols-5 gap-2  "
    >
      <motion.div 
      whileHover={{scale:1.1}}
      className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center grid grid-rows-2">
        <Image className="toolsimage" src={Html} width="auto" height="50" alt="Icon 1" />
        <p className='toolstext'>HTML</p>
      </motion.div>

      <motion.div 
      whileHover={{scale:1.1}}
      className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center grid grid-rows-2">
        <Image className="toolsimage" src={CSS} width="50" height="50" alt="Icon 2" />
        <p className='toolstext'>CSS</p>
      </motion.div>

      <motion.div 
      whileHover={{scale:1.1}}
      className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center grid grid-rows-2">
        <Image className="toolsimage" src={JS} width="50" height="50" alt="Icon 3" />
        <p className='toolstext'>Java Script</p>
      </motion.div>

      <motion.div 
      whileHover={{scale:1.1}}
      className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl py-6 p-4 text-white items-center grid grid-rows-2">
        <Image className="toolsimage" src={Tailwind} width="50" height="50" alt="Icon 4" />
        <p className='toolstext'>Tailwind</p>
      </motion.div>

      <motion.div 
      whileHover={{scale:1.1}}
      className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl py-6 p-4 text-white items-center grid grid-rows-2">
        <Image className="toolsimage" src={Next} width="50" height="50" alt="Icon 5" />
        <p className='toolstext'>Next JS</p>
      </motion.div>

      <motion.div 
      whileHover={{scale:1.1}}
      className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center grid grid-rows-2">
        <Image className="toolsimage" src={ReactImg} width="50" height="50" alt="Icon 6" />
        <p className='toolstext'>React</p>
      </motion.div>

      <motion.div 
      whileHover={{scale:1.1}}
      className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center grid grid-rows-2">
        <Image className="toolsimage" src={Wordpress} width="50" height="50" alt="Icon 7" />
        <p className='toolstext'>Word Press</p>
      </motion.div>

      <motion.div 
      whileHover={{scale:1.1}}
      className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center grid grid-rows-2">
        <Image className="toolsimage" src={Wix} width="50" height="50" alt="Icon 8"/>
        <p className='toolstext'>Wix</p>
      </motion.div>

    </motion.div>
  </div>

  <div className='p-6'>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="font-bold text-3xl pb-4 dark:text-white"> My Studio </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="toolscontainer grid grid-cols-5 gap-2"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center grid grid-rows-2"
        >
          <Image className='toolsimage' src={PS} width="50" height="50" alt="Icon 1" />
          <p className='toolstext'>Adobe Photoshop</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center grid grid-rows-2"
        >
          <Image className='toolsimage' src={Canva} width="50" height="50" alt="Icon 2" />
          <p className='toolstext'>Canva</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center grid grid-rows-2"
        >
          <Image className='toolsimage' src={CSP} width="50" height="50" alt="Icon 3" />
          <p className='toolstext'>Clip Studio Paint</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center grid grid-rows-2"
        >
          <Image className='toolsimage' src={Sai} width="50" height="50" alt="Icon 4" />
          <p className='toolstext'>Paint Tool Sai</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="tools bg-gray-800 dark:bg-[#364971] rounded-2xl p-4 text-white items-center grid grid-rows-2"
        >
          <Image className='toolsimage' src={Figma} width="50" height="50" alt="Icon 5" />
          <p className='toolstext'>Figma</p>
        </motion.div>
      </motion.div>
    </div>
    
  </div>
  )
}

export default MyWorkshop