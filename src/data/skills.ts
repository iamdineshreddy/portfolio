export interface SkillCategory {
  category: string;
  highlight?: string;
  skills: { name: string; note?: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "C++" },
      { name: "SQL" },
    ],
  },
  {
    category: "AI / Data",
    highlight:
      "Focus area — applied through real projects, not just coursework.",
    skills: [
      { name: "Generative AI" },
      { name: "LLM Concepts" },
      { name: "AI Automation" },
      { name: "Prompt Engineering" },
      { name: "Machine Learning Fundamentals" },
      { name: "Data Visualization" },
      { name: "Power BI" },
      { name: "NumPy" },
      { name: "Pandas" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "JWT Authentication" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Firebase" },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "VS Code" },
      { name: "Android Studio" },
    ],
  },
  {
    category: "Cloud / Deployment",
    skills: [
      { name: "Render" },
      { name: "Vercel" },
      { name: "Netlify" },
    ],
  },
  {
    category: "Coursework",
    skills: [
      { name: "Data Structures and Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "DBMS" },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
      { name: "Software Engineering" },
    ],
  },
];

export const exploring = [
  "Agentic AI",
  "LLM Applications",
  "RAG",
  "AI Automation",
  "AI Developer Tools",
  "Intelligent Workflows",
  "Generative AI",
  "Full-Stack AI Applications",
  "AI Agents",
  "Business Process Automation",
];