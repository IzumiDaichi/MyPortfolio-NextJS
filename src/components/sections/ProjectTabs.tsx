"use client";

import { useState } from "react";
import Card from "@/components/ui/Card/Card";
import { projects, ProjectCategory } from "@/data/projectsData";
import type { ModalProject } from "@/components/ui/Modal/ProjectModal";
import styles from "./ProjectTabs.module.css";

type Tab = "All" | ProjectCategory;

const TABS: Tab[] = ["All", "Code", "UI & UX", "Art"];

const TAB_ICONS: Record<Tab, React.ReactNode> = {
  All: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="8" y="1" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="1" y="8" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="8" y="8" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  Code: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M4 4L1.5 7 4 10M10 4L12.5 7 10 10M8 2L6 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "UI & UX": (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1" y="2" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 12h6M7 11v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  Art: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="4.5" cy="5.5" r="1" fill="currentColor" />
      <circle cx="9.5" cy="5.5" r="1" fill="currentColor" />
      <path d="M4.5 9.5c.8.8 4.5.8 5 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
};

// All projects included — ones without images show no-image state in modal
const modalProjects: ModalProject[] = projects.map((p) => ({
  images: p.images,
  title: p.title,
  description: p.description,
  tags: p.tags,
  status: p.status,
  link: p.link,
  linkLabel: p.linkLabel,
}));

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const countFor = (tab: Tab) =>
    tab === "All"
      ? projects.length
      : projects.filter((p) => p.category === tab).length;

  return (
    <div>
      <div className={styles.tabBar} role="tablist" aria-label="Project categories">
        {TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            <span className={styles.tabIcon}>{TAB_ICONS[tab]}</span>
            {tab}
            <span className={styles.count}>{countFor(tab)}</span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <p>No projects in this category yet — check back soon!</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filtered.map((project) => {
            // Index is based on full modalProjects list so nav is consistent
            const modalIndex = modalProjects.findIndex((m) => m.title === project.title);
            return (
              <Card
                key={project.title}
                images={project.images}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                linkLabel={project.linkLabel}
                status={project.status}
                allProjects={modalProjects}
                projectIndex={modalIndex !== -1 ? modalIndex : 0}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
