"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Tags from "@/components/ui/Tag/Tag";
import type { ProjectStatus } from "@/data/projectsData";
import styles from "./ProjectModal.module.css";

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  live:   { label: "Live",        className: "statusLive"   },
  wip:    { label: "In progress", className: "statusWip"    },
  collab: { label: "Collab",      className: "statusCollab" },
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
    if (hasPrevProject) {
      setProjectIndex((i) => i - 1);
      setSlideIndex(0);
    }
  }, [hasPrevProject]);

  const goToNextProject = useCallback(() => {
    if (hasNextProject) {
      setProjectIndex((i) => i + 1);
      setSlideIndex(0);
    }
  }, [hasNextProject]);

  // Reset loaded state when project changes
  useEffect(() => {
    setFirstImageLoaded(false);
    setSlideIndex(0);
  }, [projectIndex]);

  // Auto-carousel — only starts after first image is loaded and not hovered
  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (imagesRef.current.length > 1 && !isHoveredRef.current && firstImageLoaded) {
      intervalRef.current = setInterval(() => {
        setSlideIndex((i) => (i + 1) % imagesRef.current.length);
      }, 1400);
    }
  }, [firstImageLoaded]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [projectIndex, resetInterval, firstImageLoaded]);

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  goToPrevProject();
      if (e.key === "ArrowRight") goToNextProject();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, goToPrevProject, goToNextProject]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const badges = project.status
    ? Array.isArray(project.status) ? project.status : [project.status]
    : [];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.modal} ${!hasImages ? styles.modalNoImage : ""}`}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Prev card */}
        {hasPrevProject && (
          <button className={`${styles.cardNav} ${styles.cardNavLeft}`} onClick={goToPrevProject} aria-label="Previous project">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* Next card */}
        {hasNextProject && (
          <button className={`${styles.cardNav} ${styles.cardNavRight}`} onClick={goToNextProject} aria-label="Next project">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* Left — image slideshow, only if images exist */}
        {hasImages && (
          <div
            className={styles.imageSection}
            onMouseEnter={() => {
              isHoveredRef.current = true;
              if (intervalRef.current) clearInterval(intervalRef.current);
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false;
              resetInterval();
            }}
          >
            {/* Loading spinner — shown until first image loads */}
            {!firstImageLoaded && (
              <div className={styles.loader}>
                <div className={styles.spinner} />
              </div>
            )}

            {/* Main image */}
            <div className={`${styles.imageWrapper} ${!firstImageLoaded ? styles.hidden : ""}`}>
              <Image
                key={images[slideIndex]}
                src={images[slideIndex]}
                alt={`${project.title} screenshot ${slideIndex + 1}`}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 60vw"
                draggable={false}
                priority
                onLoad={() => setFirstImageLoaded(true)}
              />
            </div>

            {/* Preload all other images silently once first is loaded */}
            {firstImageLoaded && images.map((src, i) =>
              i !== slideIndex ? (
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

            {/* Dot indicators */}
            {images.length > 1 && firstImageLoaded && (
              <div className={styles.dots}>
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === slideIndex ? styles.dotActive : ""}`}
                    onClick={() => setSlideIndex(i)}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Right — details */}
        <div className={`${styles.details} ${!hasImages ? styles.detailsOnly : ""}`}>

          {badges.length > 0 && (
            <div className={styles.badgeRow}>
              {badges.map((s) => (
                <span key={s} className={`${styles.badge} ${styles[statusConfig[s].className]}`}>
                  {statusConfig[s].label}
                </span>
              ))}
            </div>
          )}

          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.tagsRow}>
            <Tags tags={project.tags} />
          </div>

          {project.link && (
            <Link
              href={project.link}
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkLabel ?? "Visit live page"}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          )}

          <p className={styles.counter}>{projectIndex + 1} / {projects.length}</p>
        </div>

      </div>
    </div>
  );
}