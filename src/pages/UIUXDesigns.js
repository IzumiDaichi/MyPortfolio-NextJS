import React from 'react'
import Image from "next/image";
import '../app/globals.css'
import { fadeIn } from "../lib/framer";
import { motion } from "framer-motion";
import {Card,CardHeader,CardTitle,CardDescription,CardContent,
  } from "@/components/ui/card";
import Navbar from "@/components/ui/Navbar2";
import GA69 from '@/public/Images/UIUX.png'
import Portfolio from '@/public/Images/UIUX2.png'

function UIUXDesigns() {
  return (
    <>
    <Navbar/>

<div className='mt-[140px] flex justify-center mx-14'>
        
            <div className='flex flex-row space-x-14 mx-6 pt-8 '>
                <motion.div whileHover={{scale:1.1}}>
                <Card className="hover:cursor-pointer hover:shadow-2xl hover:bg-white rounded-2xl w-full bg-[#E3EAF5]">
                    <CardHeader className='mx-4'>
                        <div className='pt-4 grid grid-cols-2'>
                            <CardTitle className='font-bold'>GA69 KOREAN MERCHANDISE</CardTitle>
                            <p className='flex justify-end mx-6 font-medium'>2024</p>
                        </div>
                        </CardHeader>
                        <CardContent className='pt-2'>
                            <Image className='rounded-2xl' src={GA69}></Image>
                        </CardContent>
                    <CardDescription className='mx-4 font-medium text-lg text-center mb-4'>Figma Design of GA69 Korean Merchandise used for Capstone Thesis</CardDescription>
                </Card>
                </motion.div>
                <motion.div whileHover={{scale:1.1}}>
                <Card className="hover:cursor-pointer hover:shadow-2xl hover:bg-white rounded-2xl w-full bg-[#E3EAF5]">
                    <CardHeader className='mx-4'>
                        <div className='pt-4 grid grid-cols-2'>
                            <CardTitle className='font-bold'>My Portfolio</CardTitle>
                            <p className='flex justify-end mx-6 font-medium'>2024</p>
                        </div>
                        </CardHeader>
                        <CardContent className='pt-2'>
                            <Image className='rounded-2xl' src={Portfolio}></Image>
                        </CardContent>
                    <CardDescription className='mx-4 font-medium text-lg text-center mb-4'>Figma Design of this portfolio used to base the design of this website from scratch</CardDescription>
                </Card>
                </motion.div>
            </div>
</div>
    </>
  )
}

export default UIUXDesigns