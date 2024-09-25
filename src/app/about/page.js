"use client"
import ProfileCard from '../components/ProfileCard'
import React from "react";
import Aboutme from '../components/Aboutme';
import MyWorkshop from '../components/MyWorkshop'
function page() {
  return (
    <div className="container h-dvh bg-white overflow-hidden rounded-lg shadow-lg flex-col">
    <div
  
    className="bannerimg w-screen max-h-screen bg-[#364971] overflow-hidden rounded-lg shadow-lg">
      <div className="mt-3 mb-3 text-center">
        
      <h1 className="text-[#E3EAF5] font-bold text-3xl md:text-5xl mt-0">
          /About Me
        </h1>
      </div>
    </div>
    <div className='flex flex-col md:flex-row justifiy-between place-items-center'>
    <div className=" py-8">
    <ProfileCard />
    </div>
    <div className="text-container flex-1 md:order-1 mt-4">
      <Aboutme/>
      </div>
    </div>
    <div className="flex flex-cols-2 mt-4">
      <MyWorkshop/>
      </div>
    </div>
  );
}


export default page