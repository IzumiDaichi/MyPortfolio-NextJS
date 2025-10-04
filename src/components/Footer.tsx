import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="container flex flex-col items-center">
      <div className="flex flex-row">
        <FaFacebookSquare className="hover" size={50} />
        <FaSquareXTwitter className="hover" size={50} />
        <FaSquareGithub className="hover" size={50} />
      </div>
      <p>© 2025 Jake Rupisan</p>
    </div>
  );
}
