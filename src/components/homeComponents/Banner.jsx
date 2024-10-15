"use client";
import React from "react";
import BannerImg from "@/Images/Banner.png";
import Image from "next/image";
import ScrollIntoView from 'react-scroll-into-view'

const Banner = () => {
  return (
    <ScrollIntoView
    selector="#portfolio">
    <div id='header' className="imagecontainer hover:cursor-pointer relative ">
      <Image
        className="z-10 max-w-full max-h-full brightness-[70%] hover:brightness-50"
        src={BannerImg}
        alt="Banner"
        priority
      />
     
    </div>
    </ScrollIntoView>
  );
};

export default Banner;
