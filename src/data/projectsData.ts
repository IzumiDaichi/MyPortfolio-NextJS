export type ProjectCategory = "Code" | "UI & UX" | "Art";
export type ProjectStatus = "live" | "wip" | "collab";

export interface Project {
  category: ProjectCategory;
  images?: string[];
  title: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  status?: ProjectStatus | ProjectStatus[];
}

export const projects: Project[] = [
  {
    category: "Code",
    images: ["/Portfolio.webp","/Portfolio.png","/Portfolio1.png","/Portfolio2.png","/Portfolio3.png","/Portfolio4.png","/Portfolio5.png"],
    title: "Portfolio v1",
    description:
      "The first portfolio I made and my first task during my internship in Techstacks. I planned the early design using Figma, added a custom intro loading animation, and used my drawings for several components.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "React Icons",
      "Framer Motion",
      "Shadcn",
      "Formspree",
      "Figma",
      "Clip Studio Paint EX",
      "Adobe Photoshop",
    ],
    link: "https://jakesoldportfolio.vercel.app/",
    status: "live",
  },
  {
    category: "UI & UX",
    images: ["/ElsFigma.png","/ElsFigma1.png","/ElsFigma2.png","/ElsFigma3.png","/ElsFigma4.webp","/ElsFigma5.png","/ElsFigma6.png","/ElsFigma7.png"],
    title: "Elsword website copy",
    description:
      "A copy of the ELSWORD website I made in Figma to practice my UI & UX design skills. Only the home page is complete. I plan to finish the rest with a fully functional prototype view.",
    tags: ["Figma"],
    link: "https://www.figma.com/design/gR7fKr5psqe506t8eRuq1L/Copy-of-ELSWORD-website?node-id=0-1&t=kMpvZXES1EhGktvV-1",
    status: "wip",
  },
  {
    category: "UI & UX",
    images: ["/KRMerch.png","/KRMerch1.png","/KRMerch2.png","/KRMerch3.png","/KRMerch4.png","/KRMerch5.png"],
    title: "Korean Merchandise Online Store",
    description:
      "A design for an online store selling Korean merchandise, such as K-pop albums, lightsticks, and fan-made goods. This is a Prototype of the website that me and my groupmates made for our capstone project in college. We used Figma to design the UI and create a clickable prototype.",
    tags: ["Figma"],
    link: "https://www.figma.com/design/mZao40z4eofg9vxQL9vX0h/GA69-Korean-Merchandise?node-id=0-1&t=0j3LU1JBlT7MgjeU-1",
    status: "collab",
  },
  {
    category: "Code",
    images: ["/FBClone.webp"],
    title: "Facebook Clone",
    description:
      "A collaborative project with a friend to recreate Facebook's core UI and functionality. Started March 8th, 2026.",
    tags: ["React", "TypeScript"],
    link: "https://github.com/trantantai1531/Facebook-clone",
    status: "collab",
  },
  {
    category: "Art",
    images: ["/Marketing.jpg","/Marketing1.webp","/Marketing2.webp","/Marketing3.webp","/Marketing4.webp"],
    title: "Marketing Graphic Designs",
    description:
      "A collection of graphic designs I made for marketing purposes, such as social media posts, banners, and promotional materials.",
    tags: ["Canva", "Adobe Photoshop"],
  },
  {
    category: "Art",
    title: "Drawings",
    description:
      "A collection of drawings I made for various purposes, including character designs and concept art.",
    tags: ["Clip Studio Paint EX"],
    status: "wip",
  },
];