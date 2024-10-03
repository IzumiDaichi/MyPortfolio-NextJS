"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { fadeIn } from "../lib/framer";
import { motion } from "framer-motion";

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
      <div className=''>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
      </div>
      </div>
  );
}

export default Contact;
