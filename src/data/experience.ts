export interface Experience {
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    role: "MERN Stack Developer Intern",
    organization: "SkillBridge Program",
    period: "May – July 2026",
    type: "Virtual Internship",
    description:
      "Developed full-stack MERN applications and REST APIs as part of a structured virtual internship.",
    responsibilities: [
      "Developed MERN-stack applications",
      "Developed REST APIs",
      "Worked with React.js",
      "Worked with Node.js",
      "Worked with Express.js",
      "Worked with MongoDB",
      "Implemented JWT authentication",
      "Backend API integration",
      "Git/GitHub workflows",
      "Debugging",
    ],
  },
  {
    role: "Python Developer Intern",
    organization: "QSkill",
    period: "2 Months",
    type: "Internship",
    description:
      "Built Python-based software solutions through programming, problem solving, and debugging.",
    responsibilities: [
      "Python development tasks",
      "Programming",
      "Problem solving",
      "Debugging",
      "Application development",
      "Python-based software solutions",
    ],
  },
  {
    role: "Android Developer Virtual Intern",
    organization: "AICTE – EduSkills",
    period: "January – March 2025",
    type: "Virtual Internship",
    description:
      "Developed Android applications with Kotlin and handled API integration and local data storage.",
    responsibilities: [
      "Android development",
      "Kotlin",
      "Android Studio",
      "API integration",
      "Local data storage",
      "Debugging",
      "Application performance",
    ],
  },
];