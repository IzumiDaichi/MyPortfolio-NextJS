import React from "react";
import Image from "next/image";
import Tags from "@/components/ui/Tag";

export default function About() {
  return (
    <div id="about" className="container mb-[32px] mt-[32px]">
        <h1 className=""> About Me </h1>


        <div className=" flex flex-col lg:flex-row lg:gap-6 mt-4">
          <div className="flex justify-center">
        <Image
          src="/Profile.webp"
          alt="Profile"
          width={450}
          height={450}
          className="rounded-md lg:max-w-[500px] object-cover"
        />
        </div>

<div className="flex flex-col text-center space-y-2">

        {/* About me */}
        <div className="flex flex-col">
          <p className="text-[#EB9730] font-bold text-2xl">Jake Rupisan</p>
          <p>Junior Front-End Developer</p>
          <p>
            Former Intern at{" "}
            <a
              href="https://techstacksph.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[2px] text-[#37A383] decoration-[#37A383] hover:decoration-[#22ce9d] hover:text-[#22ce9d] duration-300 ease-in-out"
            >
              Techstacks
            </a>
          </p>
          </div>
          
        <hr />

        <h2 className=""> What tools do i use? </h2>
        {/* Tags */}
        <div>
        <Tags
          tags={[
            "HTML",
            "CSS",
            "Java Script",
            "React",
            "Next.js",
            "Tailwind",
            "Wordpress",
            "Wix",
            "Figma",
            "Adobe Photoshop",
            "Adobe Premiere",
            "Canva",
            "Clip Studio Paint EX",
          ]}
        />
        </div>
        </div>
      </div>
      </div>
  );
}
