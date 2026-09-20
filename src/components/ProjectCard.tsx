import { ExternalLink, SquareArrowOutUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="glow-card group relative flex h-full flex-col overflow-hidden rounded-2xl border hairline bg-ink-900 transition-colors hover:border-accent-400/25">
      <div className="h-1 w-full bg-gradient-to-r from-accent-400/0 via-accent-400/60 to-violet-soft/60 opacity-40 transition-opacity group-hover:opacity-100" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex rounded-md bg-ink-800 px-2.5 py-1 font-mono text-xs text-accent-400 ring-1 ring-ink-600">
            {project.category}
          </span>
          {project.lead && (
            <span className="inline-flex items-center gap-1 rounded-md bg-violet-soft/10 px-2.5 py-1 text-xs font-semibold text-violet-soft ring-1 ring-violet-soft/25">
              <SquareArrowOutUpRight className="h-3 w-3" aria-hidden="true" />
              Project Lead
            </span>
          )}
        </div>

        <h3 className="mt-4 text-lg font-bold text-white">{project.title}</h3>
        {project.subtitle && (
          <p className="mt-1 text-sm font-medium text-accent-300/90">{project.subtitle}</p>
        )}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-400">
          {project.description}
        </p>

        {project.status === "in-progress" && (
          <p className="mt-3 inline-flex w-fit items-center gap-2 rounded-md bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-400/25">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
            </span>
            {project.statusLabel ?? "In Progress"}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-md border hairline bg-ink-850 px-2 py-1 text-xs text-muted-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="rounded-md border hairline bg-ink-850 px-2 py-1 text-xs text-muted-500">
              +{project.technologies.length - 6}
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-2 rounded-lg bg-accent-400 px-4 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-300"
          >
            View Project
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border hairline bg-ink-850 text-muted-400 transition-colors hover:text-accent-300"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border hairline bg-ink-850 text-muted-400 transition-colors hover:text-accent-300"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}