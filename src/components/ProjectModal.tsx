import { useEffect } from "react";
import { motion } from "motion/react";
import { ExternalLink, X } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-widest text-accent-400">
        {label}
      </h4>
      <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-400">
        {children}
      </div>
    </div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
      className="fixed inset-0 z-[90] flex items-end justify-center bg-ink-950/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border hairline bg-ink-900 shadow-2xl sm:rounded-2xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b hairline bg-ink-900/95 px-6 py-5 backdrop-blur sm:px-8">
          <div>
            {project.statusLabel && (
              <p className="mb-2 inline-flex items-center rounded-md bg-accent-400/10 px-2.5 py-1 text-xs font-semibold text-accent-300 ring-1 ring-accent-400/25">
                {project.statusLabel}
              </p>
            )}
            <h3 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
            {project.subtitle && (
              <p className="mt-1 text-sm text-muted-400">{project.subtitle}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-400 transition-colors hover:bg-ink-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-7 px-6 py-7 sm:px-8">
          <DetailRow label="Overview">
            <p>{project.description}</p>
          </DetailRow>

          {project.problem && (
            <DetailRow label="Problem">
              <p>{project.problem}</p>
            </DetailRow>
          )}

          {project.approach && (
            <DetailRow label="Approach">
              <p>{project.approach}</p>
            </DetailRow>
          )}

          <DetailRow label="Features">
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </DetailRow>

          <DetailRow label="Technology">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border hairline bg-ink-850 px-2.5 py-1 text-xs font-medium text-muted-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </DetailRow>

          {project.contribution && (
            <DetailRow label="My Contribution">
              <p>{project.contribution}</p>
            </DetailRow>
          )}

          <DetailRow label="Current Status">
            <p>
              {project.status === "in-progress"
                ? `${project.statusLabel ?? "In progress"} — actively being worked on.`
                : "Completed — shipped and available."}
            </p>
            {project.currentStatusNote && (
              <p className="text-xs italic text-muted-500">{project.currentStatusNote}</p>
            )}
          </DetailRow>

          <div className="flex flex-wrap gap-3 border-t hairline pt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border hairline bg-ink-850 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
              >
                <GithubIcon className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-400 px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-300"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}