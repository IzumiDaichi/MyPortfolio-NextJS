"use client"
import React from 'react'
import BannerImg from './images/Banner.png'
import Image from 'next/image';
import Link from 'next/link';

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
      <div className="imagecontainer relative cursor-pointer">
        <Link href="#portfolios">
        <Image
          className="bannerimg z-10 w-screen max-h-screen brightness-50"
          src={BannerImg}
          alt="Banner"
          priority
        />
        <h1 className="imagetext text-6xl text-white">Portfolios</h1>
        </Link>
      </div>
      
    );
    
  };
  
  export default Banner;