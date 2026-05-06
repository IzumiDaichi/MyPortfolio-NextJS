"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tags from "@/components/ui/Tag/Tag";
import ProjectModal, { type ModalProject } from "@/components/ui/Modal/ProjectModal";
import styles from "./Card.module.css";
import type { ProjectStatus } from "@/data/projectsData";

interface CardProps {
  images?: string[];
  title: string;
  description: string;
  link?: string;
  tags: string[];
  status?: ProjectStatus | ProjectStatus[];
  linkLabel?: string;
  allProjects: ModalProject[];
  projectIndex: number;
}

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  live:   { label: "Live",        className: "statusLive"   },
  wip:    { label: "In progress", className: "statusWip"    },
  collab: { label: "Collab",      className: "statusCollab" },
};

export default function Card({
  images,
  title,
  description,
  link,
  tags,
  status,
  linkLabel = "Visit live page",
  allProjects,
  projectIndex,
}: CardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const badges = status
    ? Array.isArray(status) ? status : [status]
    : [];

  const thumbnail = images?.[0];

  return (
    <>
      <div
        className={styles.card}
        onClick={() => setModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setModalOpen(true)}
        aria-label={`Open ${title}`}
      >
        {/* Thumbnail */}
        <div className={styles.thumbnailWrapper}>
          {thumbnail ? (
            <div className={styles.imageWrapper}>
              <Image
                src={thumbnail}
                alt={title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 480px"
                priority
              />
              <div className={styles.imageOverlay}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </div>
            </div>
          ) : (
            <div className={styles.noImageThumb} />
          )}

          {badges.length > 0 && (
            <div className={styles.badgeOverlay}>
              {badges.map((s) => (
                <span key={s} className={`${styles.badge} ${styles[statusConfig[s].className]}`}>
                  {statusConfig[s].label}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div className={styles.body}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>

          <div className={styles.tagsRow}>
            <Tags tags={tags} />
          </div>

          {link && (
            <div className={styles.footer}>
              <Link
                href={link}
                className={styles.ctaButton}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                {linkLabel}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>

      {modalOpen && (
        <ProjectModal
          projects={allProjects}
          initialIndex={projectIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
