# Miner — Industrial Mining & Resource Group

Marketing site for Miner Resource Group, a full-cycle mining company:
exploration, extraction, processing and site rehabilitation. Single-page
React app with an animated geological hero, scroll-reveal sections,
animated stat counters and a contact form.

## Stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config, no `tailwind.config.js`)
- [lucide-react](https://lucide.dev) for icons
- No other runtime dependencies — the hero background, mine cross-section
  diagram and social icons are hand-rolled SVG/CSS

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on <http://localhost:5173>.

## Scripts

| Command           | What it does                     |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the Vite dev server        |
| `npm run build`   | Production build into `dist/`    |
| `npm run preview` | Serve the production build       |
| `npm run lint`    | Lint with oxlint                 |

## Project structure

```
src/
  components/   Navbar, Hero, Services, About, Stats,
                Testimonials, Contact, Footer, shared bits
  hooks/        useReveal (IntersectionObserver reveals),
                useCountUp (rAF counters)
  index.css     Tailwind theme tokens + keyframes
```

## Design notes

- Palette: coal (near-black), steel (cool greys), ash (off-white) and a
  single ember/amber accent. Type: Barlow Condensed for display, Barlow
  for body, IBM Plex Mono for technical labels.
- All motion (strata drift, dust, counters, reveals) is CSS/rAF only and
  is disabled under `prefers-reduced-motion`.

## Deployment

Deployed on Netlify — `netlify.toml` pins the build command, publish
directory and Node version. Any push to `main` triggers a deploy when the
repo is connected to a Netlify site.
