"use client";

import React from "react";
import CopyText from "@/components/ui/CopyText";
import Image from "next/image";

export default function Contact() {
  const handleMail = () => {
    window.location.href =
      "mailto:Jakerupisan2016@gmail.com";
  };

  return (
    <div id="contact" className="container mb-[32px] mt-4">
      <h1 className="">Contact</h1>

      <div className="flex flex-col text-center items-center">
        <p className="pb-4">The easiest way to contact me is through Email</p>

        <Image src="/Mail.png" alt="Email" width={250} height={250} />

        <div className="pt-2 flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <span>Email me at:</span>
            <CopyText
              text="Jakerupisan2016@gmail.com"
              hoverText="Copy to clipboard"
            />
          </div>

          <p>or press the button below to open your mail app</p>

          <button
            onClick={handleMail}
            className="button">
            Send me an email!
          </button>
        </div>
      </div>
    </div>
  );
}