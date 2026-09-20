import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Reveal, Section } from "./Section";
import { buildPipeline } from "../data/activities";

const stageIndexToIcon: Record<string, string> = {
  "AI / LLM": "🤖",
};

export function Builds() {
  return (
    <Section
      id="builds"
      eyebrow="02 · Engineer Identity"
      title="What I Build"
      subtitle="From idea to intelligent software."
    >
      <Reveal>
        <div className="glow-card flex flex-col items-stretch gap-2 rounded-2xl border hairline bg-ink-900 p-6 sm:p-10 md:mx-auto md:max-w-2xl">
          {buildPipeline.map((stage, index) => {
            const isLast = index === buildPipeline.length - 1;
            return (
              <div key={stage} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex w-full items-center justify-center gap-3 rounded-xl border hairline bg-ink-850 px-5 py-3.5 font-mono text-sm font-semibold tracking-wide text-muted-300 transition-colors hover:border-accent-400/30 hover:text-accent-300"
                >
                  <span className="text-xs text-muted-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {stageIndexToIcon[stage] && (
                    <span aria-hidden="true">{stageIndexToIcon[stage]}</span>
                  )}
                  {stage}
                  {index === 3 && (
                    <Sparkles className="h-4 w-4 text-violet-soft" aria-hidden="true" />
                  )}
                  {isLast && <span className="text-accent-400">★</span>}
                </motion.div>
                {!isLast && (
                  <span
                    className="h-6 w-px border-l border-dashed border-ink-600"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
          <p className="mt-4 text-center font-mono text-sm text-muted-500">
            // from idea to intelligent software
          </p>
        </div>
      </Reveal>
    </Section>
  );
}