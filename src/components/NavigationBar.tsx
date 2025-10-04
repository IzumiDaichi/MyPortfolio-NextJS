"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        setScrolled(window.scrollY > homeBottom - 80); // 80px buffer
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-500 ${
        scrolled ? "bg-gray-800" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl md:text-4xl font-[700] uppercase">
            <a href="#home">My Portfolio</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="Navigation">Home</Link>
            <Link href="#about" className="Navigation">About</Link>
            <Link href="#projects" className="Navigation">Projects</Link>
            <Link href="#contact" className="Navigation">Contact</Link>
            <div><ThemeToggle /></div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="inset-0 md:hidden bg-black/15 backdrop-blur-lg z-40">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <Link href="#home" className="Navigation" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#about" className="Navigation" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#projects" className="Navigation" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="#contact" className="Navigation" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
