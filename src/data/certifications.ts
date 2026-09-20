export interface Certification {
  name: string;
  issuer: string;
  category: string;
}

export const certifications: Certification[] = [
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    category: "Generative AI",
  },
  {
    name: "Large Language Models",
    issuer: "Google Cloud",
    category: "LLM",
  },
  {
    name: "Generative AI Global Certification",
    issuer: "Oracle",
    category: "Generative AI",
  },
  {
    name: "Claude 101",
    issuer: "Anthropic",
    category: "LLM",
  },
  {
    name: "MongoDB Basics",
    issuer: "MongoDB",
    category: "Database",
  },
  {
    name: "Node.js Developer Path",
    issuer: "MongoDB",
    category: "Backend",
  },
  {
    name: "Full Stack Developer – MERN Stack Virtual Internship",
    issuer: "SmartBridge",
    category: "Full-Stack",
  },
  {
    name: "Zscaler Trusted Cloud Associate (ZTCA)",
    issuer: "Zscaler",
    category: "Cloud Security",
  },
];