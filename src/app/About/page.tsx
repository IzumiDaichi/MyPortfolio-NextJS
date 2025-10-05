import React from "react";
import Image from "next/image";
import Tags from "@/components/ui/Tag";

export default function About() {
  return (
    <div id="about" className="mb-[32px] mt-[64px] container flex flex-col lg:flex-row">
      <div className="flex justify-center ">
        <Image
          src="/Profile.webp"
          alt="Profile"
          width={450}
          height={450}
          className="rounded-md lg:max-w-[500px] object-cover w-auto h-auto"
        />
      </div>

      <div className="flex-auto flex-col lg:ml-6">
        <h1 className="mr-auto pt-2 lg:pt-0  text-2xl md:text-3xl">
          About Me
        </h1>
        <span className="text-center">
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
        </span>
        <hr className="divider" />
        <h1 className="mr-auto pb-2 text-xl md:text-2xl">
          What tools do i use?
        </h1>
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
  );
}
