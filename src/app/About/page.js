"use client";

import ProfileCard from "../../components/aboutComponents/ProfileCard";
import React from "react";

import Intro from "../../components/aboutComponents/Introduction";

import MyWorkshop from "../../components/aboutComponents/MyWorkshop";

import MyArtStudio from "../../components/aboutComponents/MyArtStudio";

import MyInterests from "../../components/aboutComponents/MyInterests";

function About() {
  return (
    <div
      id="about"
      className="container h-dvh bg-white rounded-lg shadow-lg flex-col overflow-hidden "
    >
      <div className="w-screen h-fit bg-[#364971] rounded-lg shadow-lg text-center">
        <h1 className="text-[#E3EAF5] font-bold text-3xl md:text-5xl my-3">
          /About Me
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justifiy-between place-items-center lg:justify-center">
        <div className=" flex-1 py-8">
          <ProfileCard />
        </div>

        <div className="text-container flex-1 md:order-1 mt-4">
          <Intro />
        </div>
      </div>

      <div className="my-4 justify-center">
        <h1 className="font-bold text-3xl ml-8">My Interests</h1>
        <MyInterests />
      </div>

      <div className="mt-4 justify-between md:flex">
        <div className="px-5 pb-5">
          <MyWorkshop />
        </div>

        <div className="px-5 pb-5">
          <MyArtStudio />
        </div>
      </div>
    </div>
  );
}

export default About;
