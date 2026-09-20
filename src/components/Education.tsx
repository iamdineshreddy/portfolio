import { GraduationCap } from "lucide-react";
import { Reveal, Section } from "./Section";
import { education } from "../data/education";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="06 · Education"
      title="Education"
      subtitle="Building a strong CS & data foundation."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((edu, i) => (
          <Reveal key={edu.level} delay={i * 0.07}>
            <article className="glow-card h-full rounded-2xl border hairline bg-ink-900 p-6 transition-colors hover:border-accent-400/25">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 text-accent-300 ring-1 ring-ink-600">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-5 font-mono text-xs uppercase tracking-widest text-accent-400">
                {edu.level}
              </p>
              <h3 className="mt-2 font-semibold leading-snug text-white">
                {edu.program}
              </h3>
              <p className="mt-2 text-sm text-muted-400">{edu.institution}</p>
              <div className="mt-5 flex items-center justify-between border-t hairline pt-4">
                <span className="font-mono text-sm text-muted-400">{edu.period}</span>
                <span className="inline-flex items-center gap-2 rounded-md bg-ink-800 px-2.5 py-1 text-sm font-semibold text-accent-300 ring-1 ring-ink-600">
                  {edu.scoreLabel}: {edu.score}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}