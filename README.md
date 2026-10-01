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

## Local development

```bash
npm install
npm run dev
```

For a production check:

```bash
npm run build
npm run preview
```

## Contact form setup

Create `.env.local` from `.env.example` and provide your EmailJS values:

```env
VITE_CONTACT_EMAIL=your-email@example.com
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

`.env.local` is ignored by Git and should not be committed.

The EmailJS template should accept `from_name`, `from_email`, `reply_to`, `message`, and optionally `to_email`.

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
