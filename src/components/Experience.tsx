import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { Reveal, Section } from "./Section";
import { experiences } from "../data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="05 · Experience"
      title="Experience & Internships"
      subtitle="Hands-on industry training across MERN, Python, and Android development."
    >
      <div className="relative">
        <span
          className="absolute left-[19px] top-2 bottom-2 w-px border-l border-dashed border-ink-600"
          aria-hidden="true"
        />
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 0.05}>
              <article className="relative pl-14">
                <motion.span
                  whileInView={{ scale: 1 }}
                  initial={{ scale: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 text-accent-300 ring-1 ring-ink-600"
                >
                  <Briefcase className="h-4 w-4" aria-hidden="true" />
                </motion.span>

                <div className="glow-card rounded-2xl border hairline bg-ink-900 p-6 transition-colors hover:border-accent-400/25 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <p className="mt-1 text-sm font-medium text-accent-300">
                        {exp.organization}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-sm text-muted-400">{exp.period}</p>
                      <p className="mt-0.5 text-xs text-muted-500">{exp.type}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-400">
                    {exp.description}
                  </p>
                  <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {exp.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}