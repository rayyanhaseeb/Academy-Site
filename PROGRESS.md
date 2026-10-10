# PROGRESS.md

## Status
- Step 13 of 14 DONE. Next: Step 14 (Handoff).
- Stack: Next 16.4, React 19.3, TS 5.9 strict, Tailwind 4.3, Framer Motion 12.43.

## Build checklist (from PROJECT_BRIEF.md; every step ends with the Gate)
- [x] 1. Preflight: verify `reference/academy-landing.png`, create PROGRESS.md
- [x] 2. Scaffold + tokens (DESIGN §2 vars, §3 fonts, §8 reduced-motion)
- [x] 3. Config + helpers (`site.ts`, types, `waLink()` guard)
- [x] 4. Shell (sticky anchor nav, scrollspy, mobile drawer, anchors)
- [x] 5. Hero (3 slides, arrows, dots, swipe, keyboard, no autoplay)
- [x] 6. About
- [x] 7. Programs (feature + 2 cards, WhatsApp links)
- [x] 8. FAQ (accessible accordion)
- [x] 9. Contact/CTA
- [x] 10. Footer (no bottom bar)
- [x] 11. Placeholder pass (filenames shown)
- [x] 12. SEO + a11y pass
- [x] 13. Performance pass (Lighthouse mobile >= 90)
- [ ] 14. Handoff (Vercel preview, ask first)

## Gate (per step)
`pnpm lint` + `pnpm typecheck` + `pnpm build`, check 375px and 1440px, log one line here.

## Decisions
- Wordmark `HASEEB / ACADEMY`; `[LOGO]` mark placeholder. Colors: DESIGN.md wins.
- Pinned: Next 16.4, React 19.3, TS 5.9, Tailwind 4.3, Framer Motion 12.43, pnpm 12.11.

## Missing assets
- hero-1..3, about-main, programs-memberships/classes/residents, faq-main, cta-main.

## Blockers
- Launch: real `siteUrl`, address, email, real copy, 9 images.

## Log
- Steps 1–12 DONE: Scaffolding, all 6 sections, placeholders, SEO/a11y verified.
- Step 13 DONE: Gate passed (0 errors). Zero-CLS aspect ratios, LCP priority verified.
