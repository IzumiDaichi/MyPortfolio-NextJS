"use client"
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
  } from "@/components/ui/card";
  import { FaStar } from "react-icons/fa6";
  import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";

function form() {

    const [state, handleSubmit] = useForm("mrbgzvrb");
  if (state.succeeded) {
      return <p>MESSAGE SENT</p>;
  }


  return (
    <Card className="rounded-2xl m-6 pt-2 bg-[#1F2937]">
        <FaStar className="size-10 shadow-none fill-[#FFB955] animate-pulse m-3 flex justify-start" />

        <CardHeader>
        <CardTitle className="text-center text-white font-bold"> Let's Work Together! </CardTitle>
        </CardHeader>

        <div className="mx-3">
        <CardDescription className="text-center text-white"> if you are interested on working together with me </CardDescription>
        <CardDescription className="text-center text-white">  Get in touch by completing the form below or by emailing me at </CardDescription>
        <CardDescription className="text-center text-1xl font-medium mt-2 text-white"> JakeRupisan2016@gmail.com  </CardDescription>
        </div>

<CardContent>
     <form className='flex justify-center flex-col mb-12 mt-3' onSubmit={handleSubmit}>

      <label className='labels pb-2 text-white' htmlFor="email"> Email Address </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email"
        className="rounded-xl text-md mb-4 py-2 pr-18 w-full pl-4"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
<label className='labels pb-2 text-white' htmlFor="email"> Message </label>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        className="rounded-xl text-md mb-4 py-2 pr-18 w-full pl-4"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      
      <motion.div whileHover={{ scale: 1.1 }} className="flex place-self-end">
      <button 
      type="submit" 
      className="bg-[#FB923C] px-8 p-3 rounded-xl hover:cursor-pointer hover:bg-[#0C9C3D] hover:shadow-lg hover:shadow-[#006A43] font-medium text-white" 
      disabled={state.submitting}>
        Submit
      </button>
      </motion.div>

    </form>
    </CardContent>
    </Card>
  )
}

export default form