"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-[700] uppercase">
            My Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/"className="Navigation ">Home</Link>
            <Link href="/about"className="Navigation " >About</Link>
            <Link href="/projects"className="Navigation ">Projects</Link>
            <Link href="/contact"className="Navigation ">Contact</Link>
            <div><ThemeToggle/></div>
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
            <Link href="/"className="Navigation " onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about"className="Navigation " onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/projects"className="Navigation " onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/contact"className="Navigation " onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
