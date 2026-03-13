"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { useScrollEffect } from "./useScrollEffect";
import NavLinks from "./NavLinks";
import BurgerMenu from "./BurgerMenu";
import "./NavigationBar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollEffect(80);
  const sections = ["home", "about", "projects", "contact"];

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled || isOpen ? "NavigationBar shadow-md" : "bg-transparent"
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
            <NavLinks sections={sections} navbarOffset={80} />
            <ThemeToggle />
          </div>

          {/* Mobile Burger */}
          <div className="md:hidden z-[60] relative">
            <BurgerMenu isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen md:hidden bg-black/80 backdrop-blur-lg z-50 flex flex-col items-center justify-center space-y-6">
          <NavLinks sections={sections} navbarOffset={80} isMobile onClose={handleCloseMenu} />
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
