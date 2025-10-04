import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div id="about"className="my-[32px] container flex flex-col lg:flex-row">
      <div className="flex justify-center ">
        <Image
          src="/Profile.webp"
          alt="Profile"
          width={500}
          height={500}
          className="rounded-md lg:max-w-[500px] object-cover"
        />
      </div>

      <div className="flex-auto flex-col">
        <h1 className="mr-auto sm:pt-2 lg:pl-6 text-2xl md:text-3xl">About Me</h1>
        <span className="text-center">
          <p className="text-[#ff9a0e] font-bold text-2xl">Jake Rupisan</p>
          <p>Junior Front-End Developer</p>
          <p>
            Former Intern at <a href="https://techstacksph.com/" className="underline underline-offset-4 decoration-[2px] decoration-[#22ce9d] hover:text-[#22ce9d] duration-300 ease-in-out">Techstacks</a>
          </p>
        </span>
        <hr className="lg:ml-6 my-4 border-b" />
        <h1 className="mr-auto sm:pt-2 lg:pl-6 text-xl md:text-2xl">What tools do i use?</h1>
        <div className="lg:ml-6 flex flex-wrap gap-4 mt-2 ">
          <p className="tags">HTML</p>
          <p className="tags">CSS</p>
          <p className="tags">JavaScript</p>
          <p className="tags">React</p>
          <p className="tags">Next.js</p>
          <p className="tags">Wordpress</p>
          <p className="tags">Wix</p>
          <p className="tags">Figma</p>
          <p className="tags">Adobe Photoshop</p>
          <p className="tags">Adobe Premiere</p>
          <p className="tags">Canva</p>
          <p className="tags">Clip Studio Paint EX</p>
        </div>
      </div>

      
    </div>
  );
}
