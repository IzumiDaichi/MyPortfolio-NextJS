"use client";
import React from "react";
import Logo from "@/logo/Logo.png";
import Logo2 from "@/logo/Logo2.png";
import Image from "next/image";
import Link from "next/link";
import ScrollIntoView from 'react-scroll-into-view'
import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineMenu,
  AiOutlineX,
} from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-slate-900 block fixed top-0 z-10 w-full shadow-xl">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 pr-20 py-4 w-full">
        <Link href="/">
          <Image
          id='navlogo'
            src={Logo}
            alt="Logo"
            className="object-cover w-full cursor-pointer inline size-12 align-middle mx-4"
          />
        </Link>

        <div className="flex items-center flex-1 pl-5">
          <Link href="/">
            <span className=" text-2xl font-bold text-white hover:text-[#0C9C3D]">
              PORTFOLIO
            </span>
          </Link>
        </div>

        <div className="flex items-center sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="ml-10 text-xl font-normal hover:text-[#E38F52] transition border-b-2 border-slate-900 hover:border-orange-500 cursor-pointer text-white">
                Home
              </li>
            </Link>
            <ScrollIntoView selector="#about">
              <a href='/#about' className="ml-10 text-xl font-normal hover:text-[#E38F52] transition border-b-2 border-slate-900 hover:border-orange-500 cursor-pointer text-white">
                About
              </a>
              </ScrollIntoView>
            <ScrollIntoView selector="#contact">
              <a href='/#contact' className="ml-10 text-xl font-normal hover:text-[#E38F52] transition border-b-2 border-slate-900 hover:border-orange-500 cursor-pointer text-white">
                Contact
              </a>
            </ScrollIntoView>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="md:hidden cursor-pointer pl-10 flex items-center"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={
          menuOpen
            ? "place-self-center fixed left-0 top-0 w-[90%] sm:hidden h-screen bg-gradient-to-b from-[#0F172A] to-[#58626e] p-10 ease-in-out duration-500 rounded-t-lg"
            : "fixed left-[-100%] top-0 p-10 ease-out"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} color="white" />
          </div>
        </div>

        <Link href="/">
          <Image src={Logo2} width={280} alt="logo" className="py-4 " />
        </Link>

        <div className="flex-col py-4">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-white hover:bg-[#01A93E] hover:p-4 font-semibold text-2xl"
              >
                Home
              </li>
            </Link>
            <ScrollIntoView selector="#about">
              <a href='/#about'
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-white hover:bg-[#01A93E] hover:p-4 font-semibold text-2xl"
              >
                About
              </a>
            </ScrollIntoView>
            <ScrollIntoView selector="#contact">
              <a href='/#contact'
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-white hover:bg-[#01A93E] hover:p-4 font-semibold text-2xl"
              >
                Contact
              </a>
            </ScrollIntoView>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <Link href="https://www.facebook.com/IzumiDaichi02">
            <AiOutlineFacebook
              size={50}
              color="white"
              className="cursor-pointer"
            />
          </Link>
          <Link href="https://x.com/IzumiDaichi02">
            <AiOutlineX size={50} color="white" className="cursor-pointer" />
          </Link>
          <Link href="https://github.com/IzumiDaichi">
            <AiOutlineGithub
              size={50}
              color="white"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
