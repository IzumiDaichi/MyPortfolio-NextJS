import React from "react";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className= {styles.footer} >
      <div className={styles.footer_icon_container} >
        <Link 
        href="https://www.facebook.com/jake.rupisan/"
        target="_blank"
        rel="noopener noreferrer">
        <FaFacebookSquare className="hover-icon"  aria-label="Facebook" size={50} />
        </Link>

        <Link
        href="https://x.com/IzumiDaichi02"
        target="_blank"
        rel="noopener noreferrer">
        <FaSquareXTwitter className="hover-icon"  aria-label="Twitter / X" size={50} />
        </Link>

        <Link href="https://github.com/IzumiDaichi"
        target="_blank"
        rel="noopener noreferrer">
        <FaSquareGithub className="hover-icon"  aria-label="Github" size={50} />
        </Link>
      </div>
      <p>© 2025 Jake Rupisan</p>
    </div>
  );
}
