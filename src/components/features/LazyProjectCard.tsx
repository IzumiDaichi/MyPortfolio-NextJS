"use client";

import { useEffect, useRef, useState } from "react";
import Card from "@/components/ui/Card/Card";
import type { ModalProject } from "@/components/features/project-modal/ProjectModal";
import type { ProjectStatus } from "@/data/projectsData";

interface LazyProjectCardProps {
  images?: string[];
  title: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  status?: ProjectStatus | ProjectStatus[];
  allProjects: ModalProject[];
  projectIndex: number;
}

export default function LazyProjectCard({
  images,
  title,
  description,
  tags,
  link,
  linkLabel,
  status,
  allProjects,
  projectIndex,
}: LazyProjectCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {shouldRender ? (
        <Card
          images={images}
          title={title}
          description={description}
          tags={tags}
          link={link}
          linkLabel={linkLabel}
          status={status}
          allProjects={allProjects}
          projectIndex={projectIndex}
        />
      ) : (
        <div
          aria-hidden="true"
          style={{
            width: "100%",
            minHeight: "275px",
          }}
        />
      )}
    </div>
  );
}