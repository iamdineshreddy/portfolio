import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, BadgeCheck, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { imageConfig, profile, resumeHref } from "../data/profile";
import { ProfileImage } from "./ProfileImage";

function HeroVisual() {
  const nodes = [
    { x: 12, y: 28, r: 4, delay: 0 },
    { x: 26, y: 62, r: 5, delay: 0.6 },
    { x: 42, y: 20, r: 3, delay: 1.1 },
    { x: 55, y: 52, r: 4, delay: 0.3 },
    { x: 70, y: 24, r: 5, delay: 0.9 },
    { x: 82, y: 58, r: 3, delay: 1.5 },
    { x: 90, y: 34, r: 4, delay: 0.2 },
    { x: 64, y: 76, r: 4, delay: 1.2 },
    { x: 32, y: 82, r: 3, delay: 0.7 },
    { x: 84, y: 82, r: 3, delay: 0.4 },
  ];

  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [3, 7],
    [1, 8],
    [5, 9],
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(900px 500px at 70% -10%, rgba(103,232,249,0.12), transparent 60%), radial-gradient(700px 500px at 10% 110%, rgba(167,139,250,0.10), transparent 60%)",
        }}
      />
      <div className="grid-bg absolute inset-0 opacity-70" />
      <svg
        className="absolute right-0 top-1/2 h-[420px] w-[560px] -translate-y-1/2 opacity-70 max-lg:hidden"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="rgba(103,232,249,0.25)"
            strokeWidth="0.35"
            strokeDasharray="2 2"
          />
        ))}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="#67e8f9"
            opacity="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.25;0.8;0.25"
              dur={`${3 + i % 3}s`}
              repeatCount="indefinite"
              begin={`${n.delay}s`}
            />
          </circle>
        ))}
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute right-8 top-24 hidden rounded-xl border hairline bg-ink-900/80 p-3 font-mono text-xs shadow-xl backdrop-blur lg:block xl:right-16"
      >
        <p className="text-muted-500">&gt; generate_review(pull_request)</p>
        <p className="mt-1 text-accent-300">✓ structured feedback ready</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-24 right-12 hidden rounded-xl border hairline bg-ink-900/80 p-3 font-mono text-xs shadow-xl backdrop-blur lg:block xl:right-24"
      >
        <p className="text-muted-500">automation.run(workflow)</p>
        <p className="mt-1 text-violet-soft">{"{"} ideas → products {"}"}</p>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <HeroVisual />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-5 sm:px-8 lg:flex-row lg:items-start lg:gap-16">
        <div className="max-w-2xl flex-1 text-center lg:text-left">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border hairline bg-ink-900/80 px-4 py-1.5 text-xs font-medium text-accent-300 ring-1 ring-accent-400/20"
          >
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            {profile.badge}
          </motion.div>

          <motion.h1
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gradient mt-4 text-xl font-bold sm:text-2xl md:text-3xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3 text-base font-medium text-muted-400 sm:text-lg"
          >
            {profile.secondary}
          </motion.p>

          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-1.5 font-mono text-sm text-violet-soft sm:text-base"
          >
            {profile.extra}
          </motion.p>

          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-400 lg:mx-0"
          >
            {profile.description}
          </motion.p>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <button
              type="button"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-lg bg-accent-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-300"
            >
              View My Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href={resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-lg border hairline bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-lg border hairline px-5 py-3 text-sm font-semibold text-muted-400 transition-colors hover:border-accent-400/40 hover:text-white"
            >
              Let's Connect
            </button>
          </motion.div>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-9 flex items-center justify-center gap-3 lg:justify-start"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted-600">
              Find me on
            </span>
            <span
              className="h-px w-8 bg-ink-600"
              aria-hidden="true"
            />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border hairline bg-ink-900 text-muted-400 transition-all hover:border-accent-400/40 hover:text-accent-300"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border hairline bg-ink-900 text-muted-400 transition-all hover:border-accent-400/40 hover:text-accent-300"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email me"
              className="flex h-11 w-11 items-center justify-center rounded-xl border hairline bg-ink-900 text-muted-400 transition-all hover:border-accent-400/40 hover:text-accent-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <div className="hidden w-full max-w-sm shrink-0 flex-col gap-4 sm:flex lg:w-80">
          {imageConfig.enabled && <ProfileImage />}
          <div className="glow-card rounded-2xl border hairline bg-ink-900/70 p-5 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-500">
              currently focused
            </p>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-400">
              {["AI GitHub PR Code Reviewer", "BusinessFlow", "MANGO"].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glow-card rounded-2xl border hairline bg-ink-900/70 p-5 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-500">
              the process
            </p>
            <p className="mt-3 font-mono text-sm leading-7 text-accent-300">
              LEARN <span className="text-muted-500">→</span> BUILD{" "}
              <span className="text-muted-500">→</span> DEPLOY{" "}
              <span className="text-muted-500">→</span> REPEAT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}