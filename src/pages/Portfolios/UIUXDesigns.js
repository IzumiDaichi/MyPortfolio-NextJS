import React from 'react'
import Image from "next/image";
import "../../app/globals.css";
import { motion } from "framer-motion";
import { FlipVariant } from "../../lib/framer";
import Link from 'next/link';
import {Card,CardHeader,CardTitle,CardDescription,CardContent,
  } from "@/components/ui/card";
import Navbar from "@/components/ui/Navbar2";
import GA69 from '@/Images/UIUX.png'
import Portfolio from '@/Images/UIUX2.png'

function UIUXDesigns() {
  return (
    <>
    <Navbar/>

<div className='mt-[140px] flex justify-center mx-14'>
        
            <div className='flex flex-row space-x-14 mx-6 pt-8 '>
                <Link href='https://www.figma.com/design/mZao40z4eofg9vxQL9vX0h/GA69-Korean-Merchandise?m=auto&t=QHYnsJodGIsp0mdk-1' target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{scale:1.1}}
                 variants={FlipVariant}  // Apply the card flip animation variant
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: false, amount: 0.5 }}
                 >
                <Card className="hover:cursor-pointer hover:shadow-2xl hover:bg-[#EBF3FF] rounded-2xl w-full bg-[#C9CEE7]">
                    <CardHeader className='mx-4'>
                        <div className='pt-4 grid grid-cols-2'>
                            <CardTitle className='font-bold'>GA69 KOREAN MERCHANDISE</CardTitle>
                            <p className='flex justify-end mx-6 font-medium'>2024</p>
                        </div>
                        </CardHeader>
                        <CardContent className='pt-2'>
                            <Image className='rounded-2xl' src={GA69} alt='GA69 KOREAN MERCHANDISE'></Image>
                        </CardContent>
                    <CardDescription className='mx-4 font-normal text-lg text-center pb-4'>Figma Design of GA69 Korean Merchandise used for Capstone Thesis</CardDescription>
                </Card>
                </motion.div>
                </Link>

                    <Link href='https://www.figma.com/design/vodnT6gbTJs5eiGeHpOJj3/PORTFOLIO?m=auto&t=QHYnsJodGIsp0mdk-1'target="_blank" rel="noopener noreferrer"> 
                <motion.div whileHover={{scale:1.1}}
                variants={FlipVariant}  // Apply the card flip animation variant
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}>
                <Card className="hover:cursor-pointer hover:shadow-2xl hover:bg-[#EBF3FF] rounded-2xl w-full bg-[#C9CEE7]">
                    <CardHeader className='mx-4'>
                        <div className='pt-4 grid grid-cols-2'>
                            <CardTitle className='font-bold'>My Portfolio</CardTitle>
                            <p className='flex justify-end mx-6 font-medium'>2024</p>
                        </div>
                        </CardHeader>
                        <CardContent className='pt-2'>
                            <Image className='rounded-2xl' src={Portfolio} alt='PORTFOLIO'></Image>
                        </CardContent>
                    <CardDescription className='mx-4 font-normal text-lg text-center pb-4'>Figma Design of this portfolio used to base the design of this website from scratch</CardDescription>
                </Card>
                </motion.div>
                    </Link>
            </div>
</div>
    </>
  )
}

export default UIUXDesigns