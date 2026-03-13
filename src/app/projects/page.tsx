import Card from "@/components/ui/Card/Card"

function page() {
  return (
    <div className='container mt-16'>
      <Card
        category="Development"
        imageSrc="/Portfolio.webp"
        title="Portfolio"
        description="Tbuttonever portfolio I made and my first task during my internship in Techstacks. I planned the early design using Figma, added a custom intro loading animation, and used my drawings for several components."
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
  )
}

export default page