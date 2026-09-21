"use client";

import Image from "next/image";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiWordpress,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { BsChevronDown, BsDownload } from "react-icons/bs";
import styles from "./Hero.module.css";

const tools = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Laravel", icon: SiLaravel },
  { name: "WordPress", icon: SiWordpress },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

export default function Banner() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background */}
      <Image
        src="/Banner.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />

      {/* Dark / grid overlay */}
      <div className={styles.overlay} />
      <div className={styles.gridOverlay} />

      {/* Character */}
      <div className={styles.character}>
        <Image
          src="/Character.png"
          alt="Portfolio character"
          fill
          priority
          sizes="60vw"
          className={styles.characterImage}
        />
      </div>

      {/* Main content */}
      <div className={styles.content}>
        <h1 className={styles.name}>
          <span>JAKE</span>
          <span>RUPISAN</span>
        </h1>

        {/* Tools */}
        <div className={styles.toolsSection}>

          <div className={styles.toolsWindow}>
            <div className={styles.toolsTrack}>
              {[...tools, ...tools].map((tool, index) => {
                const Icon = tool.icon;

                return (
                  <div
                    key={`${tool.name}-${index}`}
                    className={styles.tool}
                    title={tool.name}
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={styles.description}>
          <p className={styles.position}>
            JUNIOR FRONT-END DEVELOPER
          </p>

          <p className={styles.experience}>
            FORMER INTERN AT{" "}
            <a
              href="https://techstacks.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TECHSTACKS
            </a>
          </p>
        </div>

        {/* Download */}
        <a
          href="/RESUME.pdf"
          download
          className={styles.downloadButton}
        >
          <BsDownload />
          <span>DOWNLOAD CV</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <BsChevronDown aria-hidden="true" />
      </div>
    </section>
  );
}