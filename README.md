# Karyle Portfolio V2

A multi-page React portfolio, focused on software development with supporting strengths in data science and product/interface design.

## Stack

- React 19
- React Router
- Vite
- CSS
- EmailJS HTTPS API for the contact form

## Routes

- `/` — Home
- `/about` — Profile, specialties, technologies, experience, education, awards, certifications
- `/projects` — Curated project archive
- `/projects/:slug` — Individual case studies
- `/contact` — Contact form and direct links

## Project assets

Static assets live in `public/assets/`. Project screenshots used by the current portfolio are under `public/assets/projects/`.

## Design behavior

The site uses explicit light/dark section surfaces rather than a global theme toggle. The shared navbar automatically switches tone based on each section's `data-navbar-theme` value. Route changes reset scroll position to the top.

## Accessibility / interaction

- Semantic shared `<main>` landmark
- Visible focus states
- Keyboard-operable navigation and interactive About portrait
- Inline `aria-live` contact form status
- Reduced-motion styles for nonessential motion
- Responsive layouts across major page sections
