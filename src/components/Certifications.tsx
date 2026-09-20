import { Award } from "lucide-react";
import { Reveal, Section } from "./Section";
import { certifications } from "../data/certifications";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="07 · Certifications"
      title="Certifications"
      subtitle="Verified learning across AI, LLMs, cloud, and full-stack development."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={(i % 4) * 0.06}>
            <article className="glow-card flex h-full flex-col rounded-2xl border hairline bg-ink-900 p-5 transition-colors hover:border-accent-400/25">
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-accent-300 ring-1 ring-ink-600">
                  <Award className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="rounded-md bg-ink-800 px-2 py-1 font-mono text-[11px] text-muted-400 ring-1 ring-ink-600">
                  {cert.category}
                </span>
              </div>
              <h3 className="mt-4 flex-1 text-sm font-semibold leading-snug text-white">
                {cert.name}
              </h3>
              <p className="mt-2 text-xs text-muted-500">{cert.issuer}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}