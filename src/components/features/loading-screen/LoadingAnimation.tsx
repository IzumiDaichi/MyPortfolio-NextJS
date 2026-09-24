"use client";

import { useEffect, useState } from "react";

// --- Tuning knobs ---
const STAR_PATH = (c: string) => `/loading-stars/Star ${c}.png`;
const COLORS_ORDER = ["orange", "blue", "green", "purple"];
const BOUNCE_SECONDS = 1.1; // seconds per bounce cycle
const STAGGER_SECONDS = 0.15; // delay between each star's bounce, creates the "wave"
const SHINE_SECONDS = 2.2; // seconds per shine sweep

type StarsRowLoadingScreenProps = {
  onFinished?: () => void;
};

export default function StarsRowLoadingScreen({ onFinished }: StarsRowLoadingScreenProps) {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const markLoaded = () => setPageLoaded(true);
    if (document.readyState === "complete") {
      markLoaded();
    } else {
      window.addEventListener("load", markLoaded, { once: true });
      return () => window.removeEventListener("load", markLoaded);
    }
  }, []);

  useEffect(() => {
    if (!pageLoaded) return;
    const t = setTimeout(() => setExiting(true), 300);
    return () => clearTimeout(t);
  }, [pageLoaded]);

  useEffect(() => {
    if (!exiting) return;
    const t = setTimeout(() => onFinished?.(), 500);
    return () => clearTimeout(t);
  }, [exiting, onFinished]);

  return (
    <div
      aria-hidden={exiting}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--background)] transition-all duration-500 ease-in-out"
      style={{
        opacity: exiting ? 0 : 1,
        transform: exiting ? "scale(1.08)" : "scale(1)",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          {COLORS_ORDER.map((color) => (
            <mask key={color} id={`star-mask-${color}`} maskContentUnits="objectBoundingBox">
              <image
                href={STAR_PATH(color)}
                x="0"
                y="0"
                width="1"
                height="1"
                preserveAspectRatio="xMidYMid meet"
              />
            </mask>
          ))}
        </defs>
      </svg>

      <div
        className="flex items-center justify-center"
        style={{
          gap: "clamp(8px, 2.5vw, 20px)",
          width: "clamp(220px, 60vw, 420px)",
        }}
      >
        {COLORS_ORDER.map((color, i) => (
          <div
            key={color}
            className="relative bounce-star"
            style={{
              width: "22%",
              aspectRatio: "1 / 1",
              animationDelay: `${i * STAGGER_SECONDS}s`,
            }}
          >
            <img
              src={STAR_PATH(color)}
              alt=""
              draggable={false}
              className="absolute inset-0 h-full w-full select-none"
              style={{ objectFit: "contain" }}
            />
            <div
              className="absolute inset-0 shine-layer"
              style={{
                animationDelay: `${i * STAGGER_SECONDS}s`,
                WebkitMask: `url(#star-mask-${color})`,
                mask: `url(#star-mask-${color})`,
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        .bounce-star {
          animation: star-bounce ${BOUNCE_SECONDS}s ease-in-out infinite;
        }
        .shine-layer {
          background: linear-gradient(
            115deg,
            transparent 35%,
            rgba(255, 255, 255, 0.95) 50%,
            transparent 65%
          );
          background-size: 260% 260%;
          mix-blend-mode: screen;
          animation: star-shine ${SHINE_SECONDS}s ease-in-out infinite;
        }
        @keyframes star-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-35%); }
        }
        @keyframes star-shine {
          0% { background-position: -120% -120%; }
          100% { background-position: 120% 120%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bounce-star, .shine-layer { animation: none; }
          .shine-layer { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}