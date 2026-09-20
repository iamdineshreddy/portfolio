import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="mb-12 md:mb-16">
          {eyebrow && (
            <p className="font-mono text-sm tracking-widest text-accent-400 uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-400">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}