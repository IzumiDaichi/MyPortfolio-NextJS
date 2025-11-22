import React from "react";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="container flex flex-col items-center">
      <div className="flex flex-row">
        <Link 
        href="https://www.facebook.com/IzumiDaichi02"
        target="_blank"
        rel="noopener noreferrer">
        <FaFacebookSquare className="hover"  aria-label="Facebook" size={50} />
        </Link>

        <Link
        href="https://x.com/IzumiDaichi02"
        target="_blank"
        rel="noopener noreferrer">
        <FaSquareXTwitter className="hover"  aria-label="Twitter / X" size={50} />
        </Link>

        <Link href="https://github.com/IzumiDaichi"
        target="_blank"
        rel="noopener noreferrer">
        <FaSquareGithub className="hover"  aria-label="Github" size={50} />
        </Link>
      </div>
      <p>© 2025 Jake Rupisan</p>
    </div>
  );
}
