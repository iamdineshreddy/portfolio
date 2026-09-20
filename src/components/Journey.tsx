import { motion } from "motion/react";
import { Compass, RefreshCw } from "lucide-react";
import { Reveal, Section } from "./Section";
import { journeyStages, learnCycle } from "../data/activities";

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="10 · Engineering Journey"
      title="Engineering Journey"
      subtitle="My learning direction — how I've been progressing as an engineer. Not employment history."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="glow-card rounded-2xl border hairline bg-ink-900 p-6 sm:p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 text-accent-300 ring-1 ring-ink-600">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Learning Direction</h3>
                <p className="text-xs text-muted-500">Programming → Agentic AI</p>
              </div>
            </div>

            <ol className="space-y-0">
              {journeyStages.map((stage, index) => {
                const isLast = index === journeyStages.length - 1;
                return (
                  <li key={stage}>
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                      className="group flex items-center gap-4"
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ring-1 ${
                          isLast
                            ? "bg-accent-400 text-ink-950 ring-accent-400"
                            : "bg-ink-800 text-accent-300 ring-ink-600"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span
                        className={`font-mono text-sm ${isLast ? "font-semibold text-white" : "text-muted-300"}`}
                      >
                        {stage}
                      </span>
                    </motion.div>
                    {!isLast && (
                      <span
                        className="ml-[15px] block h-4 w-px border-l border-dashed border-ink-600"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glow-card flex h-full flex-col justify-center rounded-2xl border hairline bg-ink-900 p-6 sm:p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 text-accent-300 ring-1 ring-ink-600">
                <RefreshCw className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-white">How I Learn</h3>
                <p className="text-xs text-muted-500">
                  I learn best by turning concepts into working projects.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              {learnCycle.map((step, index) => {
                const isLast = index === learnCycle.length - 1;
                return (
                  <div key={step} className="flex flex-col items-center">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.07 }}
                      className={`flex w-full items-center justify-center rounded-xl border px-6 py-2.5 font-mono text-sm font-bold tracking-widest ${
                        isLast
                          ? "border-accent-400/50 bg-accent-400/10 text-accent-300"
                          : "border-hairline bg-ink-850 text-muted-300"
                      }`}
                    >
                      {step}
                    </motion.span>
                    {!isLast && (
                      <span
                        className="h-5 w-px border-l border-dashed border-ink-600"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}