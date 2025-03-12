import { Card } from "@/components/common/card"

const technologies = [
  {
    category: "Languages & Frameworks",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "TailwindCSS",
      "Java",
      "R",
    ],
  },
  {
    category: "Libraries & ML Tools",
    skills: [
      "TensorFlow",
      "PyTorch",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "Keras",
      "Matplotlib",
    ],
  },
  {
    category: "Databases & Cloud",
    skills: ["MongoDB", "PostgreSQL", "SQL", "AWS"],
  },
  {
    category: "Development Tools",
    skills: ["GitHub", "Docker", "VS Code"],
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
