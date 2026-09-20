import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { cn } from "../lib/cn";
import { scrollToId } from "../lib/scroll";
import { resumeHref } from "../data/profile";

const primaryLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "journey", label: "Journey" },
];

const moreLinks = [
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "leadership", label: "Leadership" },
  { id: "beyond-code", label: "Beyond Code" },
  { id: "github", label: "GitHub" },
];

function NavItem({
  label,
  onClick,
  onNavigate,
}: {
  label: string;
  onClick: () => void;
  onNavigate?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick();
        onNavigate?.();
      }}
      className="rounded-lg px-3 py-2 text-sm font-medium text-muted-400 transition-colors hover:bg-ink-800 hover:text-white"
    >
      {label}
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (id: string) => {
    setMobileOpen(false);
    setMoreOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b hairline bg-ink-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <button
          type="button"
          onClick={() => navigate("home")}
          className="flex items-center gap-2 font-mono text-sm tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-800 ring-1 ring-ink-600">
            <span className="text-accent-400">DR</span>
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            dinesh<span className="text-accent-400">.dev</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex" role="list">
          {primaryLinks.map((link) => (
            <NavItem key={link.id} label={link.label} onClick={() => navigate(link.id)} />
          ))}

          <div className="relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((v) => !v)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                moreOpen
                  ? "bg-ink-800 text-white"
                  : "text-muted-400 hover:bg-ink-800 hover:text-white",
              )}
            >
              More ▾
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-xl border hairline bg-ink-900 shadow-xl"
                >
                  {moreLinks.map((link) => (
                    <button
                      key={link.id}
                      type="button"
                      role="menuitem"
                      onClick={() => navigate(link.id)}
                      className="block w-full px-4 py-2.5 text-left text-sm text-muted-400 transition-colors hover:bg-ink-800 hover:text-white"
                    >
                      {link.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem label="Contact" onClick={() => navigate("contact")} />
        </div>

        <div className="flex items-center gap-2">
          <a
            href={resumeHref}
            download
            className="hidden items-center gap-2 rounded-lg bg-accent-400 px-3.5 py-2 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-300 sm:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted-400 transition-colors hover:bg-ink-800 hover:text-white lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b hairline bg-ink-950/95 backdrop-blur-md lg:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {[...primaryLinks, ...moreLinks, { id: "contact", label: "Contact" }].map(
                (link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => navigate(link.id)}
                    className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-muted-400 transition-colors hover:bg-ink-800 hover:text-white"
                  >
                    {link.label}
                  </button>
                ),
              )}
              <a
                href={resumeHref}
                download
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-accent-400 px-4 py-2.5 text-sm font-semibold text-ink-950"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}