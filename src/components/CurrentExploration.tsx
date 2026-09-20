import { Binoculars } from "lucide-react";
import { Reveal, Section } from "./Section";
import { exploring } from "../data/skills";

export function CurrentExploration() {
  return (
    <Section
      id="exploring"
      eyebrow="11 · Currently Exploring"
      title="Currently Exploring"
      subtitle="Where I'm actively pushing right now — clearly separate from established skills."
    >
      <Reveal>
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-900 px-4 py-2 font-mono text-xs uppercase tracking-widest text-violet-soft">
          <Binoculars className="h-4 w-4" aria-hidden="true" />
          Exploring
        </div>
      </Reveal>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {exploring.map((area, i) => (
          <Reveal key={area} delay={(i % 5) * 0.05}>
            <article className="glow-card group flex h-full flex-col justify-between rounded-2xl border border-violet-soft/15 bg-ink-900 p-4 transition-colors hover:border-violet-soft/40">
              <span className="font-mono text-[11px] text-muted-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-sm font-semibold leading-snug text-muted-300 transition-colors group-hover:text-white">
                {area}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}