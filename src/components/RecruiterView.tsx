import { useEffect } from "react";
import { motion } from "motion/react";
import { Download, X } from "lucide-react";
import { profile, resumeHref } from "../data/profile";

interface RecruiterViewProps {
  open: boolean;
  onClose: () => void;
}

const sections = [
  {
    label: "Focus",
    items: ["AI Engineering", "Generative AI", "AI Automation", "Full-Stack Development"],
  },
  { label: "Education", items: ["B.Tech CSE — Data Science"] },
  { label: "Primary Programming", items: ["Python", "Java", "JavaScript"] },
  {
    label: "AI",
    items: [
      "Generative AI",
      "LLM Concepts",
      "Prompt Engineering",
      "AI Automation",
      "ML Fundamentals",
    ],
  },
  { label: "Full Stack", items: ["React", "Node", "Express", "MongoDB"] },
  {
    label: "Featured Projects",
    items: [
      "AI GitHub PR Code Reviewer",
      "BusinessFlow",
      "MANGO",
      "LocalKart",
      "Campus Bytes",
    ],
  },
  { label: "Leadership", items: ["Coders Club — Joint Secretary & Event Lead"] },
  { label: "Internships", items: ["SkillBridge", "QSkill", "AICTE–EduSkills"] },
];

export function RecruiterView({ open, onClose }: RecruiterViewProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Recruiter quick view"
      className="fixed inset-0 z-[90] flex items-end justify-center bg-ink-950/85 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border hairline bg-ink-900 shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b hairline bg-ink-900/95 px-6 py-5 backdrop-blur sm:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent-400">
              Recruiter Quick View
            </p>
            <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              {profile.name}
            </h3>
            <p className="mt-1 text-sm text-muted-400">
              {profile.tagline}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close recruiter view"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-400 transition-colors hover:bg-ink-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-6 px-6 py-7 sm:grid-cols-2 sm:px-8">
          {sections.map((section) => (
            <div key={section.label}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-violet-soft">
                {section.label}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border hairline bg-ink-850 px-2.5 py-1 text-xs font-medium text-muted-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t hairline px-6 py-5 sm:px-8">
          <a
            href={resumeHref}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-accent-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-300"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}