import React from "react";
import styles from "./Tag.module.css";

interface TagsProps {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className={styles.tags}>
          {tag}
        </span>
      ))}
    </div>
  );
}
