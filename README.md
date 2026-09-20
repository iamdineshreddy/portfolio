# Dinesh Reddy — AI Engineer Portfolio

Personal brand website for **Maddula Dinesh Reddy** — AI Engineer focused on
Generative AI, LLM applications, AI automation, and full-stack development.

> "I don't just list technologies. I build things with them."

## Stack

- **React 19** + **TypeScript** — component-driven UI
- **Vite 8** — fast dev server & production builds
- **Tailwind CSS 4** — utility-first design system (theme in `src/index.css`)
- **Motion (Framer Motion)** — scroll reveals & micro-interactions
- **Lucide React** — iconography

Pure static frontend — deploy anywhere. No backend required.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build   # type-checks (tsc) then bundles to dist/
npm run preview # serve the production build locally
```

## Deployment

The build outputs a fully static `dist/` folder. Deploy it to any static host.

### GitHub Pages (current deployment — live)

This repo already deploys automatically to GitHub Pages via a GitHub Action
(`.github/workflows/deploy.yml`). The `base` path in `vite.config.ts` is set to
`/portfolio/` (project-site subpath), which is why every asset URL is prefixed.

- Live URL: `https://iamdineshreddy.github.io/portfolio/`
- Push to `main` → workflow builds `dist/` and deploys.
- To change the deploy target, edit `base` in `vite.config.ts` (e.g. `/` for a
  user site at `https://iamdineshreddy.github.io/`).

### Netlify

1. Push this repo to GitHub/GitLab.
2. Netlify → **Add new site** → **Import an existing project**.
3. Build command: `npm run build` · Publish directory: `dist`
4. No other settings needed. Your site is live with automatic deploys on push.

### Vercel

1. Import the repo into Vercel (dashboard → *New Project*).
2. Framework preset: **Vite** (detected automatically).
3. Build command: `npm run build` · Output directory: `dist`
4. Deploy. Each push to the default branch auto-deploys.

### Render (Static Site)

1. Render dashboard → **New** → **Static Site**.
2. Connect the repo.
3. Build command: `npm run build` · Publish directory: `dist`
4. Save and it deploys. Free plans available.

### Manual upload

Run `npm run build` and upload the contents of `dist/` (Netlify Drop, GitHub
Pages, S3, Nginx, etc.). The site is fully static — any host works.

## Updating Content

All portfolio information lives in `src/data/` as typed TypeScript files — no
component edits needed for content changes.

| What to edit            | File                        |
| ----------------------- | --------------------------- |
| Name, socials, resume path | `src/data/profile.ts`     |
| Skills & "Exploring"    | `src/data/skills.ts`        |
| Featured + mini projects | `src/data/projects.ts`     |
| Internships/experience  | `src/data/experience.ts`    |
| Education               | `src/data/education.ts`     |
| Certifications          | `src/data/certifications.ts` |
| Leadership, journey, beyond-code | `src/data/activities.ts` |

Common edits:

- **Add a project** — add one object to `featuredProjects` (or `miniProjects`)
  in `src/data/projects.ts`.
- **Change social links / email** — edit `src/data/profile.ts`.
- **Replace resume** — drop the PDF at exactly
  `public/resume/Maddula_Dinesh_Reddy_Resume.pdf`, or change `resumePath` in
  `src/data/profile.ts`.
- **Add a profile photo** — set a photo in `public/`, then flip
  `enabled: true` in the `imageConfig` object inside `src/data/profile.ts`
  (the hero renders the photo automatically; keep `enabled: false` to stay
  photo-free).
- **Edit assistant Q&A** — `src/lib/assistant.ts` (this is a local portfolio
  navigator; swap `assistantEngine` with your own LLM function later).
- **SEO / meta tags** — `index.html`.

## Structure

```text
src/
├── components/   # UI sections (Navbar, Hero, Projects, …)
├── data/         # ALL content as typed data files
├── lib/          # helpers (scroll, assistant engine, cn)
├── pages/        # Home page composition
├── assets/       # static imports
├── App.tsx
├── main.tsx
└── index.css     # Tailwind theme + design tokens
```

## Requirements

- Node.js 18+ (Vite 8 requires Node 20.19+ / 22.12+)

## License

Content & design © Maddula Dinesh Reddy. All rights reserved.