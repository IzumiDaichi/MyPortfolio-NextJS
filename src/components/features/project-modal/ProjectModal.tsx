"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import type { ProjectStatus } from "@/data/projectsData";
import styles from "./ProjectModal.module.css";

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  live: { label: "Live", className: "statusLive" },
  wip: { label: "In progress", className: "statusWip" },
  collab: { label: "Collab", className: "statusCollab" },
};

export interface ModalProject {
  images?: string[];
  title: string;
  description: string;
  tags: string[];
  status?: ProjectStatus | ProjectStatus[];
  link?: string;
  linkLabel?: string;
}

interface ProjectModalProps {
  projects: ModalProject[];
  initialIndex: number;
  onClose: () => void;
}

export default function ProjectModal({
  projects,
  initialIndex,
  onClose,
}: ProjectModalProps) {
  const [projectIndex, setProjectIndex] = useState(initialIndex);
  const [slideIndex, setSlideIndex] = useState(0);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const imagesRef = useRef<string[]>([]);
  const isHoveredRef = useRef(false);

  const project = projects[projectIndex];
  const images = project.images ?? [];
  const hasImages = images.length > 0;

  imagesRef.current = images;

  const hasPrevProject = projectIndex > 0;
  const hasNextProject = projectIndex < projects.length - 1;

  const goToPrevProject = useCallback(() => {
    if (!hasPrevProject) return;

    setProjectIndex((index) => index - 1);
    setSlideIndex(0);
  }, [hasPrevProject]);

  const goToNextProject = useCallback(() => {
    if (!hasNextProject) return;

    setProjectIndex((index) => index + 1);
    setSlideIndex(0);
  }, [hasNextProject]);

  useEffect(() => {
    setFirstImageLoaded(false);
    setSlideIndex(0);
  }, [projectIndex]);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (
      imagesRef.current.length > 1 &&
      !isHoveredRef.current &&
      firstImageLoaded
    ) {
      intervalRef.current = setInterval(() => {
        setSlideIndex(
          (index) => (index + 1) % imagesRef.current.length
        );
      }, 1400);
    }
  }, [firstImageLoaded]);

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [projectIndex, resetInterval, firstImageLoaded]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevProject();
      if (e.key === "ArrowRight") goToNextProject();
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [onClose, goToPrevProject, goToNextProject]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const badges = project.status
    ? Array.isArray(project.status)
      ? project.status
      : [project.status]
    : [];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.modal} ${
          !hasImages ? styles.modalNoImage : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous project */}
        {hasPrevProject && (
          <button
            className={`${styles.cardNav} ${styles.cardNavLeft}`}
            onClick={goToPrevProject}
            aria-label="Previous project"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {/* Next project */}
        {hasNextProject && (
          <button
            className={`${styles.cardNav} ${styles.cardNavRight}`}
            onClick={goToNextProject}
            aria-label="Next project"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {/* Image slideshow */}
        {hasImages && (
          <div
            className={styles.imageSection}
            onMouseEnter={() => {
              isHoveredRef.current = true;

              if (intervalRef.current) {
                clearInterval(intervalRef.current);
              }
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false;
              resetInterval();
            }}
          >
            {!firstImageLoaded && (
              <div className={styles.loader}>
                <div className={styles.spinner} />
              </div>
            )}

            <div
              className={`${styles.imageWrapper} ${
                !firstImageLoaded ? styles.hidden : ""
              }`}
            >
              <Image
                key={images[slideIndex]}
                src={images[slideIndex]}
                alt={`${project.title} screenshot ${slideIndex + 1}`}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 700px"
                draggable={false}
                priority
                onLoad={() => setFirstImageLoaded(true)}
              />
            </div>

            {/* Preload other images */}
            {firstImageLoaded &&
              images.map((src, index) =>
                index !== slideIndex ? (
                  <Image
                    key={`preload-${src}`}
                    src={src}
                    alt=""
                    fill
                    sizes="1px"
                    className={styles.preload}
                    priority
                  />
                ) : null
              )}

            {/* Slide dots */}
            {images.length > 1 && firstImageLoaded && (
              <div className={styles.dots}>
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${
                      index === slideIndex ? styles.dotActive : ""
                    }`}
                    onClick={() => setSlideIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Title + status */}
        <div
          className={`${styles.details} ${
            !hasImages ? styles.detailsOnly : ""
          }`}
        >
          <div className={styles.projectHeader}>
            <h2 className={styles.title}>{project.title}</h2>

            {badges.length > 0 && (
              <div className={styles.badgeRow}>
                {badges.map((status) => (
                  <span
                    key={status}
                    className={`${styles.badge} ${
                      styles[statusConfig[status].className]
                    }`}
                  >
                    {statusConfig[status].label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}