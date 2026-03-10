import Image from "next/image";
import Link from "next/link";
import Tags from "@/components/ui/Tag/Tag";
import styles from "./Card.module.css";

interface CardProps {
  category: string;
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export default function Card({
  category,
  imageSrc,
  title,
  description,
  link,
  tags,
}: CardProps) {
  return (
    <div className={`${styles.card} font-medium mt-4`}>
      {/* Category */}
      <h2 className="mb-2">{category}</h2>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={imageSrc}
            alt={title}
            width={522}
            height={512}
            className="rounded-md object-cover w-auto h-auto "
            priority
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-1 flex-col">
          {/* Title */}
          <h3 className="mb-2">{title}</h3>

          {/* Description */}
          <div className="space-y-2">
            <p>{description}</p>

            <hr/>

            {/* Tags */}
            <p className="font-medium">Created using:</p>
            <Tags tags={tags} />
          </div>

          {/* Button */}
          <div className="flex justify-end mt-auto pt-4">
            <Link
              href={link}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Live Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
