import { Crown, Users } from "lucide-react";
import { Reveal, Section } from "./Section";
import { leadership, projectLeadership } from "../data/activities";

export function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="08 · Leadership & Activities"
      title="Leadership & Activities"
      subtitle="Leading events, teams, and technical communities."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-3">
          {leadership.map((role, i) => (
            <Reveal key={role.organization} delay={i * 0.06}>
              <article className="glow-card rounded-2xl border hairline bg-ink-900 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-800 text-accent-300 ring-1 ring-ink-600">
                    <Users className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-white">{role.title}</h3>
                        <p className="mt-0.5 text-sm text-accent-300">
                          {role.organization}
                        </p>
                      </div>
                      {role.duration && (
                        <span className="rounded-md bg-ink-800 px-2.5 py-1 font-mono text-xs text-muted-400 ring-1 ring-ink-600">
                          {role.duration}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-400">
                      {role.description}
                    </p>
                    {role.skills && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border hairline bg-ink-850 px-2.5 py-1 text-xs text-muted-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="lg:col-span-2">
          <Reveal delay={0.1}>
            <article className="glow-card sticky top-24 rounded-2xl border hairline bg-ink-900 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-soft/10 text-violet-soft ring-1 ring-violet-soft/30">
                <Crown className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">Project Leadership</h3>
              <p className="mt-1 text-sm font-medium text-accent-300">
                Project Lead — {projectLeadership.project}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-400">
                {projectLeadership.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {projectLeadership.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-accent-400/25 bg-accent-400/5 px-2.5 py-1 text-xs font-medium text-accent-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}