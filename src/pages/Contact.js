"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { fadeIn } from "../lib/framer";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { FaStar } from "react-icons/fa6";
import Image from 'next/image';
import clipboard from '/public/Images/holdingclipboard.png'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nosnkwg', 'template_63tu4eh', form.current, {
        publicKey: 'OBxAmV-tBO83fA2J5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div
    id="contact"
    className="container h-fit bg-white rounded-lg shadow-lg flex-col">
    
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="w-screen h-fit bg-[#364971] rounded-lg shadow-lg text-center"
      >
          <h1 className="text-[#E3EAF5] font-bold text-3xl md:text-5xl my-4 text-center">
            /Contact
          </h1>
      </motion.div>
      <div id="cardform" className='py-8 grid grid-cols-2 w-full '>
        <Card className="rounded-2xl m-6 bg-[#1F2937]">
          <FaStar className="size-10 shadow-none fill-[#FFB955] animate-pulse m-3 flex justify-start"/>
          <CardHeader> 
 <CardTitle className="text-center text-white font-bold">Let's Work Together!</CardTitle>
          </CardHeader>
          <div className='mx-3'>
          <CardDescription className="text-center text-white"> if you are interested on working together with me. </CardDescription>
          <CardDescription className="text-center text-white"> Get in touch by completing the form below or by emailing me at </CardDescription>
          <CardDescription className="text-center text-1xl font-medium mt-2 text-white"> JakeRupisan2016@gmail.com </CardDescription>
         </div>
         <CardContent>
      <form className="flex justify-center flex-col mb-12 mt-3 " ref={form} onSubmit={sendEmail}>
      <label className="labels pb-2 text-white">Name</label>
      <input type="text" name="user_name" placeholder="Full Name" required className="rounded-xl text-md mb-4 py-2 pr-18 w-full pl-4 "/>
      <label className="labels pb-2 text-white">Email</label>
      <input type="email" name="user_email" placeholder="E-mail" required className="rounded-xl text-md mb-4 py-2 pr-18 w-full pl-4 " />
      <label className="labels pb-2 text-white">Message</label>
      <textarea name="message" placeholder="Message" required className="rounded-xl text-md mb-4 py-2 pr-18 w-full h-32 pl-4 " />
      <motion.div
      whileHover={{scale:1.1}} className="w-fit">
      <input className="bg-[#FB923C] flex px-10 p-2 rounded-xl hover:cursor-pointer hover:bg-[#0C9C3D] hover:shadow-lg hover:shadow-[#006A43] font-medium text-white" type="submit" value="Send" />
      </motion.div>
    </form>
    </CardContent>
    </Card>
    <Image id='aboutimg' src={clipboard}></Image>
      </div>
      </div>
  );
}

export default Contact;
