export interface LeadershipRole {
  title: string;
  organization: string;
  duration?: string;
  description: string;
  skills?: string[];
}

export const leadership: LeadershipRole[] = [
  {
    title: "Joint Secretary & Event Lead",
    organization: "Coders Club",
    duration: "1 Year",
    description:
      "Served as Joint Secretary and contributed to planning, coordinating, and leading multiple technical events and student activities.",
    skills: [
      "Leadership",
      "Team Coordination",
      "Event Management",
      "Technical Community",
      "Communication",
    ],
  },
  {
    title: "Department Club Member",
    organization: "Datanauts — CSE (Data Science) Department Club",
    description:
      "Participated in department-level technical activities, peer learning, and data/technology-focused initiatives.",
  },
];

export const projectLeadership = {
  project: "BusinessFlow",
  role: "Project Lead",
  description:
    "Led the development of BusinessFlow from application planning through implementation, coordinating project modules, feature priorities, and technical integration.",
  focus: [
    "Planning",
    "Feature Prioritization",
    "Technical Integration",
    "Full-Stack Development",
    "Analytics",
    "AI Automation",
  ],
};

export const beyondCode = [
  {
    title: "Content Creation",
    interests: [
      "AI",
      "Automation",
      "Finance",
      "Technology",
      "Productivity",
      "Side Hustles",
    ],
  },
  {
    title: "Video Editing",
    description:
      "Creative video editing and digital content creation.",
  },
  {
    title: "Gaming",
    description: "Gaming as a personal interest.",
  },
  {
    title: "AI Experimentation",
    description: "Exploring:",
    interests: [
      "AI tools",
      "AI-generated content",
      "LLMs",
      "Automation",
      "AI productivity tools",
    ],
  },
  {
    title: "Builder Mindset",
    description: "Learn → Build → Experiment → Improve",
  },
];

export const journeyStages = [
  "Programming",
  "Full-Stack Development",
  "Data Science",
  "AI / ML",
  "Generative AI",
  "LLM Applications",
  "AI Automation",
  "Agentic AI",
];

export const learnCycle = [
  "LEARN",
  "BUILD",
  "BREAK",
  "DEBUG",
  "IMPROVE",
  "DEPLOY",
  "REPEAT",
];

export const buildPipeline = [
  "IDEA",
  "AI / LLM",
  "AUTOMATION",
  "BACKEND",
  "DATABASE",
  "FRONTEND",
  "REAL-WORLD PRODUCT",
];