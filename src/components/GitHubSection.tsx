import { GithubIcon } from "./icons";
import { Reveal, Section } from "./Section";
import { profile } from "../data/profile";
import { featuredProjects, miniProjects } from "../data/projects";

const publicRepos = [
  ...featuredProjects
    .filter((p) => p.github)
    .map((p) => ({ title: p.title, url: p.github as string })),
  ...miniProjects.map((p) => ({ title: p.title, url: p.github })),
];

export function GitHubSection() {
  return (
    <Section
      id="github"
      eyebrow="12 · Building in Public"
      title="Building in Public"
      subtitle="Every project pushed to GitHub — work in progress, experiments, and shipping. No inflated stats."
    >
      <div className="grid gap-10 lg:grid-cols-3">
        <Reveal>
          <div className="glow-card flex h-full flex-col rounded-2xl border hairline bg-ink-900 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400 text-ink-950">
              <GithubIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">iamdineshreddy</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-400">
              My public repository — where I push projects as I build, break, and
              improve them. Public code over perfect demos.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-accent-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-300"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              Explore My GitHub
            </a>
          </div>
        </Reveal>

        <div className="lg:col-span-2">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-500">
            {`// ${publicRepos.length} public repos linked here`}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {publicRepos.map((repo, i) => (
              <Reveal key={repo.url} delay={(i % 2) * 0.06}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-card flex items-center gap-3 rounded-2xl border hairline bg-ink-900 px-5 py-4 transition-colors hover:border-accent-400/30"
                >
                  <GithubIcon className="h-5 w-5 shrink-0 text-muted-400" aria-hidden="true" />
                  <span className="text-sm font-semibold text-white">{repo.title}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}