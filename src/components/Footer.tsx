import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/profile";
import { scrollToId } from "../lib/scroll";

const footerLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t hairline bg-ink-900/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-white">{profile.name}</p>
            <p className="mt-1.5 font-mono text-xs leading-relaxed text-muted-400">
              AI Engineer · Generative AI · AI Automation · Full-Stack Developer
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-3 gap-x-8 gap-y-2 text-center sm:grid-cols-6 md:grid-cols-3 md:text-left">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToId(link.id)}
                className="text-sm text-muted-400 transition-colors hover:text-accent-300"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl border hairline bg-ink-900 text-muted-400 transition-colors hover:text-accent-300"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl border hairline bg-ink-900 text-muted-400 transition-colors hover:text-accent-300"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t hairline pt-6 text-center">
          <p className="text-sm text-muted-500">
            © {year} {profile.name}. Built with curiosity, code, and AI.
          </p>
          <p className="font-mono text-xs text-muted-600">
            {`</> built in public — ship, learn, repeat`}
          </p>
        </div>
      </div>
    </footer>
  );
}