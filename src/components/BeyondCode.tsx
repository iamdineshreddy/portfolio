import { Clapperboard, Gamepad2, Lightbulb, Sparkles, Wand2 } from "lucide-react";
import { Reveal, Section } from "./Section";
import { beyondCode } from "../data/activities";

const iconMap = {
  "Content Creation": Lightbulb,
  "Video Editing": Clapperboard,
  Gaming: Gamepad2,
  "AI Experimentation": Sparkles,
  "Builder Mindset": Wand2,
};

export function BeyondCode() {
  return (
    <Section
      id="beyond-code"
      eyebrow="09 · Beyond Code"
      title="Beyond Code"
      subtitle="The creativity and curiosity that shape how I build."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {beyondCode.map((item, i) => {
          const Icon = iconMap[item.title as keyof typeof iconMap] ?? Lightbulb;
          return (
            <Reveal key={item.title} delay={(i % 3) * 0.07}>
              <article className="glow-card h-full rounded-2xl border hairline bg-ink-900 p-6 transition-colors hover:border-accent-400/25">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 text-accent-300 ring-1 ring-ink-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-400">
                    {item.description}
                  </p>
                )}
                {item.interests && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.interests.map((interest) => (
                      <span
                        key={interest}
                        className="rounded-md border hairline bg-ink-850 px-2.5 py-1 text-xs font-medium text-violet-soft"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          );
        })}

        <Reveal delay={0.21}>
          <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-accent-400/25 bg-accent-400/5 p-6 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
              Builder Mindset
            </p>
            <p className="mt-4 font-mono text-sm leading-8 text-white">
              Learn <span className="text-muted-500">→</span> Build{" "}
              <span className="text-muted-500">→</span> Experiment{" "}
              <span className="text-muted-500">→</span> Improve
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}