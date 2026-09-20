export type ProjectStatus = "in-progress" | "completed";

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  category: string;
  statusLabel?: string;
  status: ProjectStatus;
  description: string;
  features: string[];
  problem?: string;
  approach?: string;
  contribution?: string;
  currentStatusNote?: string;
  technologies: string[];
  github?: string;
  live?: string;
  lead?: boolean;
  highlight?: boolean;
}

export const featuredProjects: Project[] = [
  {
    id: "ai-pr-reviewer",
    title: "AI GitHub PR Code Reviewer",
    category: "AI / LLM / Developer Tools",
    status: "in-progress",
    statusLabel: "Major Project — Prototype In Progress",
    description:
      "An AI-assisted GitHub pull-request code review system designed to analyze changed code and generate structured review feedback.",
    problem:
      "Reviewing pull requests across multiple repositories is time-consuming and repetitive. Teams need fast, structured, and security-aware feedback on changed code.",
    approach:
      "Build an agentic review pipeline that pulls PR diffs from GitHub, analyzes changed code with an LLM, and produces structured review feedback covering correctness, code quality, and security.",
    features: [
      "AI-assisted code analysis",
      "Pull-request analysis",
      "Structured feedback",
      "Code quality review",
      "Security-oriented review",
      "Developer productivity",
      "GitHub integration",
      "LLM-based analysis",
      "Agentic AI exploration",
      "RAG concepts",
      "Automated review workflows",
    ],
    contribution:
      "Designing the review pipeline, wiring GitHub integration, prototyping the LLM-based analysis flow, and structuring the feedback output.",
    currentStatusNote: "Prototype in progress — not yet a completed production system.",
    technologies: ["Python", "GitHub API", "LLM", "RAG Concepts", "Agentic AI"],
    github: "https://github.com/iamdineshreddy/adaptive-multi-agent-pr-review",
    highlight: true,
  },
  {
    id: "businessflow",
    title: "BusinessFlow",
    subtitle: "AI-Powered Business Management Platform",
    tagline: "Full-Stack + AI Automation",
    category: "Full-Stack + AI Automation",
    status: "completed",
    description:
      "A full-stack business platform covering CRM, customer management, leads, orders, inventory, invoices, analytics, and KPI tracking.",
    problem:
      "Small businesses juggle customers, leads, orders, inventory, and invoices across scattered tools. BusinessFlow unifies this in one dashboard with analytics.",
    approach:
      "Built a modular MERN application with role-based workflows, REST APIs, and JWT authentication, extended with AI-oriented automation concepts and KPI dashboards.",
    features: [
      "CRM",
      "Customer management",
      "Leads",
      "Orders",
      "Inventory",
      "Invoices",
      "Analytics",
      "KPI tracking",
      "Dashboards",
      "REST APIs",
      "JWT authentication",
      "Role-based workflows",
      "AI-oriented automation concepts",
    ],
    contribution:
      "Led the development from application planning through implementation, coordinating project modules, feature priorities, and technical integration.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "REST APIs",
      "Chart.js",
    ],
    lead: true,
    highlight: true,
  },
  {
    id: "mango",
    title: "MANGO",
    subtitle: "AI-Powered Productivity & Goal Management Platform",
    tagline: "AI + Full Stack",
    category: "AI + Full Stack",
    status: "completed",
    description:
      "A productivity platform for goal planning, task management, habit tracking, progress tracking, and AI-powered recommendations.",
    problem:
      "Existing productivity tools are fragmented. MANGO combines goals, tasks, habits, and progress in one place with AI-powered recommendations.",
    approach:
      "Built a MERN-based productivity platform with authentication, persistent user data, reusable frontend components, REST APIs, and an AI recommendation layer.",
    features: [
      "Goal planning",
      "Task management",
      "Habit tracking",
      "Progress tracking",
      "AI recommendations",
      "Authentication",
      "Persistent user data",
      "Reusable frontend components",
      "REST APIs",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "REST APIs",
      "AI Integration",
    ],
    github: undefined,
    live: "https://mango-mindset-pro.lovable.app",
  },
  {
    id: "localkart",
    title: "LocalKart",
    tagline: "Full-Stack Marketplace",
    category: "Full-Stack Marketplace",
    status: "completed",
    description:
      "A digital marketplace connecting local businesses with customers through structured seller profiles, seller verification, and trust-focused discovery.",
    problem:
      "Local businesses lack a discoverable digital storefront. LocalKart connects them with customers through verified, structured seller profiles.",
    approach:
      "Designed an MERN marketplace focused on trust — structured seller profiles and verification make discovery safe and reliable for local shoppers.",
    contribution:
      "Worked on the marketplace architecture, seller profiles, and verification flow.",
    features: [
      "Seller profiles",
      "Seller verification",
      "Trust-focused discovery",
      "Local business onboarding",
    ],
    technologies: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/iamdineshreddy/LocalKart",
    live: "https://local-kart.lovable.app",
  },
  {
    id: "campus-bytes",
    title: "Campus Bytes",
    tagline: "MERN Stack",
    category: "MERN Stack",
    status: "completed",
    description:
      "A MERN-based college canteen food ordering application.",
    problem:
      "College canteens operate with long queues and no ordering system. Campus Bytes digitizes ordering, tracking, and canteen inventory management.",
    approach:
      "Built a MERN application with authentication, cart, order management and tracking, inventory, and an admin dashboard.",
    features: [
      "Authentication",
      "Menu browsing",
      "Cart",
      "Order management",
      "Order tracking",
      "Inventory",
      "Admin dashboard",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    github: "https://github.com/iamdineshreddy/campus-bytes-eats",
    live: "https://campus-bytes.lovable.app",
  },
];

export interface MiniProject {
  title: string;
  description: string;
  github: string;
}

export const miniProjects: MiniProject[] = [
  {
    title: "Street Vendor–Farmer Connect",
    description:
      "A hyperlocal platform connecting street vendors with farmers to source fresh and affordable produce directly.",
    github: "https://github.com/iamdineshreddy/streetvendor-farmer",
  },
  {
    title: "Secure Chat",
    description:
      "A secure messaging application focused on safe communication.",
    github: "https://github.com/iamdineshreddy/Secure-chat",
  },
  {
    title: "Hand Gesture Recognition",
    description:
      "Gesture-based interaction experiments using computer vision.",
    github: "https://github.com/iamdineshreddy/Hand_Gesture_Recognition",
  },
  {
    title: "TradeX",
    description: "A trading-related software project.",
    github: "https://github.com/iamdineshreddy/TradeX",
  },
  {
    title: "Seasonal Agriculture Performance Analysis",
    description:
      "Data-oriented analysis of seasonal agriculture performance.",
    github:
      "https://github.com/iamdineshreddy/seasonal-agriculture-performance-analysis",
  },
];