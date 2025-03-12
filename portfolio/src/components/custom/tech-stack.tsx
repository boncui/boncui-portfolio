import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Languages",
    skills: ['Python', 'Java', 'C++'],
  },
  {
    category: "Libraries",
    skills: ['Tensorflow', 'Pytorch', 'Pandas', 'NumPy', 'Keras', 'Matplot', 'Scikit-Learn', 'Seaborn'],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Javascript", "TailwindCSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Django", "MongoDB", "PostgreSQL", "SQL"],
  },
  
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "Git"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Postman", "Figma", "GitHub", "Vercel"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

