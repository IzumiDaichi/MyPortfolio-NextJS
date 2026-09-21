"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tags from "@/components/ui/Tag/Tag";
import ProjectModal, {
  type ModalProject,
} from "@/components/features/project-modal/ProjectModal";
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

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  live: {
    label: "Live",
    className: "statusLive",
  },
  wip: {
    label: "In progress",
    className: "statusWip",
  },
  collab: {
    label: "Collab",
    className: "statusCollab",
  },
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
    ? Array.isArray(status)
      ? status
      : [status]
    : [];

  const thumbnail = images?.[0];

  return (
    <>
      <div
        className={styles.card}
        onClick={() => setModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setModalOpen(true);
          }
        }}
        aria-label={`Open ${title}`}
      >
        {/* =========================
            THUMBNAIL
        ========================= */}

        <div className={styles.thumbnailWrapper}>
          {thumbnail ? (
            <div className={styles.imageWrapper}>
              <Image
                src={thumbnail}
                alt={title}
                fill
                className={styles.image}
                sizes="(max-width: 640px) 100vw, 50vw"
                loading="lazy"
              />

              <div className={styles.imageOverlay}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 3h6v6" />
                  <path d="M9 21H3v-6" />
                  <path d="M21 3l-7 7" />
                  <path d="M3 21l7-7" />
                </svg>
              </div>
            </div>
          ) : (
            <div className={styles.noImageThumb} />
          )}
        </div>

        {/* =========================
            BODY
        ========================= */}

        <div className={styles.body}>
          {/* Title + Status */}
          <div className={styles.projectHeader}>
            <h3 className={styles.title}>{title}</h3>

            {badges.length > 0 && (
              <div className={styles.statusRow}>
                {badges.map((s) => (
                  <span
                    key={s}
                    className={`${styles.badge} ${
                      styles[statusConfig[s].className]
                    }`}
                  >
                    {statusConfig[s].label}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <p className={styles.description}>{description}</p>

          {/* Tags */}
          <div className={styles.tagsRow}>
            <Tags tags={tags} />
          </div>

          {/* Visit Button */}
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

                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8L8 2M8 2H4M8 2V6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
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