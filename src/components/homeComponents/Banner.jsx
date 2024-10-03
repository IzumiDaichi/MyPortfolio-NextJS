"use client";
import React from "react";
import BannerImg from "/public/Images/Banner.png";
import Image from "next/image";
import ScrollIntoView from 'react-scroll-into-view'

const Banner = () => {
  return (
    <ScrollIntoView
    selector="#portfolio">
    <div className="imagecontainer hover:cursor-pointer relative ">
      <Image
        className="bannerimg z-10 w-screen max-h-screen brightness-50 hover:brightness-[.80]"
        src={BannerImg}
        alt="Banner"
        priority
      />
      <h1 className="imagetext text-6xl text-white hover:text-[#FB923C]">
        Portfolios
      </h1>
    </div>
    </ScrollIntoView>
  );
};

export default Banner;
