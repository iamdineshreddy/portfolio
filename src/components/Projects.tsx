import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { FolderGit2 } from "lucide-react";
import { GithubIcon } from "./icons";
import { Reveal, Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { featuredProjects, miniProjects, type Project } from "../data/projects";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <Section
        id="projects"
        eyebrow="04 · Featured Work"
        title="Featured Projects"
        subtitle="Real software built to solve real problems — with AI and full-stack systems in production of thought."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Project Repository
            </h3>
            <span className="hidden font-mono text-xs text-muted-500 sm:block">
              // more experiments & work-in-progress
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {miniProjects.map((mini, i) => (
              <Reveal key={mini.github} delay={(i % 3) * 0.06}>
                <article className="glow-card flex h-full flex-col rounded-2xl border hairline bg-ink-900 p-5 transition-colors hover:border-accent-400/25">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-muted-400 ring-1 ring-ink-600">
                      <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h4 className="font-semibold text-white">{mini.title}</h4>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-400">
                    {mini.description}
                  </p>
                  <a
                    href={mini.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border hairline bg-ink-850 px-3.5 py-2 text-sm font-medium text-muted-300 transition-colors hover:border-accent-400/40 hover:text-accent-300"
                  >
                    <GithubIcon className="h-4 w-4" aria-hidden="true" />
                    Repository
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}