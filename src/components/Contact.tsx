import { FileUser, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal, Section } from "./Section";
import { profile } from "../data/profile";

interface ContactProps {
  onOpenRecruiter: () => void;
}

export function Contact({ onOpenRecruiter }: ContactProps) {
  return (
    <Section
      id="contact"
      eyebrow="13 · Contact"
      title="Let's Build Something Intelligent"
      subtitle=""
      className="pb-24"
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <Reveal>
          <div className="space-y-6">
            <p className="max-w-xl text-lg leading-relaxed text-muted-400">
              I'm interested in opportunities where I can build practical AI systems,
              automation workflows, full-stack applications, and intelligent software
              products.
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 rounded-xl border hairline bg-ink-900 px-4 py-3 transition-colors hover:border-accent-400/40"
              >
                <Mail className="h-5 w-5 text-accent-300" aria-hidden="true" />
                <span className="text-sm text-muted-400 group-hover:text-white">
                  {profile.email}
                </span>
              </a>
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                className="group flex items-center gap-3 rounded-xl border hairline bg-ink-900 px-4 py-3 transition-colors hover:border-accent-400/40"
              >
                <Phone className="h-5 w-5 text-accent-300" aria-hidden="true" />
                <span className="text-sm text-muted-400 group-hover:text-white">
                  {profile.phone}
                </span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border hairline bg-ink-900 px-4 py-3 transition-colors hover:border-accent-400/40"
              >
                <LinkedinIcon className="h-5 w-5 text-accent-300" aria-hidden="true" />
                <span className="text-sm text-muted-400 group-hover:text-white">
                  {profile.linkedin.replace("https://www.", "")}
                </span>
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-300"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border hairline bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
              >
                <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border hairline bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
              >
                <GithubIcon className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <button
                type="button"
                onClick={onOpenRecruiter}
                className="inline-flex items-center gap-2 rounded-lg border border-violet-soft/30 text-violet-soft px-5 py-3 text-sm font-semibold transition-colors hover:bg-violet-soft/10"
              >
                <FileUser className="h-4 w-4" aria-hidden="true" />
                Recruiter View
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="glow-card rounded-2xl border hairline bg-ink-900 p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-500">
              quick reply guaranteed
            </p>
            <h3 className="mt-4 text-xl font-bold text-white">
              Open to AI / GenAI / Automation / Full-Stack roles
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-400">
              Internships, entry-level engineering roles, freelance automation
              projects, or collaborative builds — happy to talk.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-xl border hairline bg-ink-850 px-4 py-3 font-mono text-xs text-muted-400">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
              available for new opportunities
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}