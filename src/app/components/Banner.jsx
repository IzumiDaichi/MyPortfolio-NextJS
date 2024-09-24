"use client"
import React from 'react'
import BannerImg from '../images/Banner.png'
import Image from 'next/image';

function scrollToArt() {
    const child = document.querySelector("#social");
    if (child) {
        child.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'center',
        });
    }
  }
  
  
  const Banner = () => {
    return (
      <div className="imagecontainer hover:cursor-pointer relative">
        <Image
          className="bannerimg z-10 w-screen max-h-screen brightness-50 hover:brightness-[.80]"
          src={BannerImg}
          alt="Banner"
          priority
        />
        <h1 className="imagetext text-6xl text-white hover:text-[#FB923C]">Portfolios</h1>
      </div>
      
    );
    
  };
  
  export default Banner;