export interface AssistantAnswer {
  text: string;
  scrollTo?: string;
}

export interface AssistantQuestion {
  id: string;
  label: string;
}

export const assistantQuestions: AssistantQuestion[] = [
  { id: "projects", label: "What AI projects has Dinesh built?" },
  { id: "tech", label: "What technologies does Dinesh use?" },
  { id: "exploring", label: "What is Dinesh currently exploring?" },
  { id: "internships", label: "What internships has Dinesh completed?" },
  { id: "fullstack", label: "Show me his full-stack projects." },
  { id: "leadership", label: "What leadership experience does he have?" },
];

export type AssistantEngine = (questionId: string) => Promise<AssistantAnswer>;

export const localAssistant: AssistantEngine = async (questionId) => {
  const answers: Record<string, AssistantAnswer> = {
    projects: {
      text: "Dinesh is building an AI GitHub PR Code Reviewer — an LLM-based system that analyzes pull requests and produces structured review feedback. He has also built BusinessFlow, a business management platform, and the productivity platform MANGO.",
      scrollTo: "projects",
    },
    tech: {
      text: "He works with Python, Java, and JavaScript, builds full-stack apps with React, Node.js, Express.js, and MongoDB, and works with Generative AI, LLM concepts, prompt engineering, and ML fundamentals.",
      scrollTo: "skills",
    },
    exploring: {
      text: "He's currently exploring Agentic AI, RAG, AI automation, AI developers tools, AI agents, and full-stack AI applications.",
      scrollTo: "exploring",
    },
    internships: {
      text: "MERN Stack Developer Intern at SkillBridge, Python Developer Intern at QSkill, and Android Developer Virtual Intern at AICTE–EduSkills.",
      scrollTo: "experience",
    },
    fullstack: {
      text: "BusinessFlow (CRM + analytics), MANGO (productivity + AI recommendations), LocalKart (local marketplace), and Campus Bytes (canteen ordering) — all MERN-based products.",
      scrollTo: "projects",
    },
    leadership: {
      text: "He served as Joint Secretary & Event Lead of Coders Club, is a member of the Datanauts department club, and led the BusinessFlow project as Project Lead.",
      scrollTo: "leadership",
    },
  };
  return (
    answers[questionId] ?? {
      text: "I can help you navigate this portfolio. Pick one of the questions above.",
    }
  );
};

export const assistantEngine: AssistantEngine = localAssistant;