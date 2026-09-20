import { Braces, Bot, BrainCircuit, CloudCog, Database, Gauge } from "lucide-react";
import { Reveal, Section } from "./Section";

const focusCards = [
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    text: "Building practical AI systems — not just studying AI theory — and wiring intelligence into real software.",
  },
  {
    icon: Bot,
    title: "Generative AI",
    text: "Working with LLMs, prompt engineering, and generative concepts through hands-on AI applications.",
  },
  {
    icon: Gauge,
    title: "Automation",
    text: "Designing automation workflows that remove repetitive work and make businesses operate efficiently.",
  },
  {
    icon: Braces,
    title: "Full-Stack Development",
    text: "Shipping complete products with Python, JavaScript, React, Node, and MongoDB from API to UI.",
  },
  {
    icon: CloudCog,
    title: "Developer Tools",
    text: "Building tools that improve developer productivity — like the AI-assisted PR code reviewer.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    text: "Applying data concepts, visualization, and analytics to turn numbers into decisions.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title="About Me"
      subtitle="I build things, then I understand them fully."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <Reveal>
          <div className="space-y-5 leading-relaxed text-muted-400">
            <p>
              I am a Computer Science and Engineering (Data Science) student focused on
              AI Engineering, Generative AI, LLM applications, and AI automation.
            </p>
            <p>
              I enjoy building practical software rather than only studying theory. My
              experience includes building full-stack applications, AI-enabled
              applications, automation workflows, business platforms, productivity
              systems, developer tools, and data-oriented projects.
            </p>
            <p>
              I work with Python, JavaScript, Java, React.js, Node.js, Express.js,
              MongoDB, REST APIs, JWT authentication, Generative AI concepts, LLM
              concepts, prompt engineering, and machine learning fundamentals.
            </p>
            <p>
              I am particularly interested in connecting AI with real software systems
              to automate repetitive work, improve developer productivity, and help
              businesses operate more efficiently.
            </p>
            <p className="border-l-2 border-accent-400/60 pl-4 text-white">
              I continuously learn by building projects and experimenting with new
              technologies.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {focusCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <article className="glow-card group h-full rounded-2xl border hairline bg-ink-900 p-5 transition-colors hover:border-accent-400/25">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 text-accent-300 ring-1 ring-ink-600">
                  <card.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-400">
                  {card.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}