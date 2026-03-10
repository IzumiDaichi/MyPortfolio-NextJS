import Card from "@/components/ui/Card"

export default function Projects() {
  return (
  <div className="section pb-8 pt-4">
    <div id="projects" className="container flex-auto">
      {/* Section Title */}
      <h1>Projects</h1>

      <Card
        category="Development"
        imageSrc="/Portfolio.webp"
        title="Portfolio"
        description="The first ever portfolio I made and my first task during my internship in Techstacks. I planned the early design using Figma, added a custom intro loading animation, and used my drawings for several components."
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