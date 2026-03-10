import { useRouter } from "next/navigation";
import { useState } from "react";
import { animate } from "framer-motion";

interface NavLinksProps {
  sections: string[];
  navbarOffset: number;
  isMobile?: boolean;
  onClose?: () => void;
}

export default function NavLinks({ sections, navbarOffset, isMobile = false, onClose }: NavLinksProps) {
  const router = useRouter();
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScrollToSection = (id: string) => {
    if (isScrolling) return;
    if (window.location.pathname !== "/") {
      router.push("/#" + id);
      onClose?.();
      return;
    }
    const section = document.getElementById(id);
    if (!section) return;

    const sectionTop = section.offsetTop;
    const scrollTarget = sectionTop - navbarOffset;

    setIsScrolling(true);

    animate(window.scrollY, scrollTarget, {
      duration: 0.4,
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest),
      onComplete: () => setIsScrolling(false),
    });

    onClose?.();
  };

  const LinkComponent = isMobile ? "a" : "button";

  return (
    <>
      {sections.map((section) => (
        <LinkComponent
          key={section}
          onClick={() => handleScrollToSection(section)}
          className="Navigation"
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </LinkComponent>
      ))}
    </>
  );
}