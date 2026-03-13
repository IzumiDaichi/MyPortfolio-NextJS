import Card from "@/components/ui/Card/Card"

export default function Projects() {
  return (
  <div className="section pb-8 pt-4">
    <div id="projects" className="container flex-auto">
      {/* Section Title */}
      <div className="flex justify-between">
      <h1>Projects</h1>
      <a className="button" href="/projects">See All</a>
      </div>

      <Card
        category="Development"
        imageSrc="/Portfolio.webp"
        title="Portfolio"
        description="The first portfolio I made and my first task during my internship in Techstacks. I planned the early design using Figma, added a custom intro loading animation, and used my drawings for several components."
        tags={[
          "Next.js",
          "Tailwind CSS",
          "React Icons",
          "Framer Motion",
          "Shadcn",
          "Formspree",
          "Figma",
          "Clip Studio Paint EX",
          "Adobe Photoshop",
        ]}
        link="https://jakesoldportfolio.vercel.app/"></Card>
    </div>
    </div>
  );
}