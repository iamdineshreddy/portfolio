import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../lib/cn";
import { Reveal, Section } from "./Section";
import { skillCategories } from "../data/skills";

export function Skills() {
  const [active, setActive] = useState<string>(skillCategories[0].category);

  const selected =
    skillCategories.find((c) => c.category === active) ?? skillCategories[0];

  return (
    <Section
      id="skills"
      eyebrow="03 · Skills"
      title="Technical Skills"
      subtitle="No fake percentages — just the technologies I actually use to build things."
    >
      <Reveal>
        <div
          role="tablist"
          aria-label="Skill categories"
          className="flex flex-wrap gap-2"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              role="tab"
              aria-selected={active === cat.category}
              onClick={() => setActive(cat.category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                active === cat.category
                  ? "border-accent-400/50 bg-accent-400/10 text-accent-300"
                  : "border-ink-600 bg-ink-900 text-muted-400 hover:border-ink-500 hover:text-white",
              )}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </Reveal>

      <div
        role="tabpanel"
        aria-label={`${selected.category} skills`}
        className="glow-card mt-8 rounded-2xl border hairline bg-ink-900 p-6 sm:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{selected.category}</h3>
          {selected.highlight && (
            <p className="max-w-md text-xs leading-relaxed text-accent-300/80">
              {selected.highlight}
            </p>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={selected.category}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
          >
            {selected.skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-2.5 rounded-xl border hairline bg-ink-850 px-4 py-3 text-sm font-medium text-muted-300 transition-colors hover:border-accent-400/30 hover:text-white"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                {skill.name}
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </Section>
  );
}