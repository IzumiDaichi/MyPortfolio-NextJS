"use client";

import { useState, useEffect } from "react";
import { animate } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const sections = ["home", "about", "projects", "contact"];
  const navbarOffset = 80;

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        setScrolled(window.scrollY > homeBottom - navbarOffset);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    if (isScrolling) return;
    const section = document.getElementById(id);
    if (!section) return;

    const sectionTop = section.offsetTop;
    const scrollTarget = sectionTop - navbarOffset;

    setIsScrolling(true);

    animate(window.scrollY, scrollTarget, {
      duration: 0.4,
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest),
      onComplete: () => setIsScrolling(false),
    });

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-500 ${
        scrolled ? "NavigationBar" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 text-2xl md:text-4xl font-[700] uppercase cursor-pointer"
          >
            My Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleScrollToSection(section)}
                className="Navigation"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Burger */}
          <div className="md:hidden z-[60] relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
            >
              <span
                className={`block w-6 h-[2px] bg-white rounded-sm transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-white rounded-sm my-[5px] transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-white rounded-sm transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen md:hidden bg-black/80 backdrop-blur-lg z-50 flex flex-col items-center justify-center space-y-6">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleScrollToSection(section)}
              className="Navigation text-[#ededed] text-2xl"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
