"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react'; // Import Formspree hook and error handler
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RiMailSendFill } from "react-icons/ri";

function FormComponent() {
  const [state, handleSubmit] = useForm("mrbgzvrb"); // Replace with your form ID

  if (state.succeeded) {
    return (
      <motion.div
        id='MformContainer'
        className="flex justify-center items-center h-screen"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Alert id='successform' className="bg-white shadow-lg rounded-xl p-6 w-96 text-center">
          <motion.div
            className="flex justify-center mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <RiMailSendFill className="text-[#0C9C3D] h-16 w-16" />
          </motion.div>
          <AlertTitle className="text-2xl font-bold text-[#0C9C3D]">
            Success!
          </AlertTitle>
          <AlertDescription className="text-gray-700 mt-2 text-lg">
            Your message has been successfully sent.
          </AlertDescription>
          <AlertDescription className="text-gray-500 mt-2 text-sm">
            I'll get back to you soon. Thank you for reaching out!
          </AlertDescription>
        </Alert>
      </motion.div>
    );
  }

  return (
    <>
      <div className="flex flex-row justify-center">
        <Card className="rounded-2xl m-6 pt-2 bg-[#1F2937]">
          <FaStar className="size-10 shadow-none fill-[#FFB955] animate-pulse m-3 flex justify-start" />
          <CardHeader>
            <CardTitle className="text-center text-white font-bold">
              Let's Work Together!
            </CardTitle>
          </CardHeader>
          <div className="mx-3">
            <CardDescription className="text-center text-white">
              If you are interested in working together with me
            </CardDescription>
            <CardDescription className="text-center text-white">
              Get in touch by completing the form below or by emailing me at
            </CardDescription>
            <CardDescription className="text-center text-1xl font-medium mt-2 text-white">
              JakeRupisan2016@gmail.com
            </CardDescription>
          </div>

          <CardContent>
            <form
              className="flex justify-center flex-col mb-12 mt-3"
              onSubmit={handleSubmit} // Attach Formspree handleSubmit
            >
              <label className="labels pb-2 text-white" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                className="rounded-xl text-md mb-4 py-2 pr-18 w-full pl-4"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <label className="labels pb-2 text-white" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-xl text-md mb-4 py-2 pr-18 w-full pl-4"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <label className="labels pb-2 text-white" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="rounded-xl text-md mb-4 py-2 pr-18 w-full pl-4"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <motion.div whileHover={{ scale: 1.1 }} className="flex place-self-end">
                <button
                  type="submit"
                  className="Button px-8 p-3 rounded-xl hover:cursor-pointer hover:shadow-lg hover:shadow-[#006A43] font-medium text-white"
                  disabled={state.submitting} // Disable while submitting
                >
                  {state.submitting ? "Submitting..." : "Submit"}
                </button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default FormComponent;
