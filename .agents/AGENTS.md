# AGENTS.md

## Project overview
- Single-page marketing site for a live client: Haseeb Academy, an education/training academy in Pakistan (`en-PK`).
- Sections in order: Hero (3 slides), About, Programs (1 feature + 2 cards), FAQ (5 items), CTA/Contact, Footer.
- No backend, no auth, no database, no extra routes.
- Content is dummy `[PLACEHOLDER]` text until the client supplies real copy.

## Source of truth and precedence
- AGENTS.md owns process and tech. DESIGN.md owns visuals. PROJECT_BRIEF.md (if present) owns scope.
- If PROJECT_BRIEF.md is absent, the Project overview above is the scope.
- Read PROGRESS.md, then this file, then DESIGN.md before every task.
- If two files conflict, STOP and alert the user. Never choose a winner.
- Reference DESIGN.md by section number. Never paste its contents into code or docs.
- DESIGN.md is synced with this file. There are no standing overrides.

## Tech stack
- Next.js 16 (App Router), React 19, TypeScript 5 (`strict: true`), Tailwind CSS 4.
- shadcn/ui (Accordion only unless asked), Framer Motion 12, lucide-react, pnpm 10, Vercel.
- Before scaffolding, run `pnpm view <pkg> version`. If the latest major differs from above, pin the latest stable and log it in PROGRESS.md.
- Do not add any other dependency without asking.

## Commands
- `pnpm install` / `pnpm dev` / `pnpm build` / `pnpm start`
- `pnpm lint` and `pnpm typecheck` (`tsc --noEmit`). Add both scripts if missing.
- Run lint, typecheck and build before reporting any task as done.

## Structure
- `src/app/` (`layout.tsx`, `page.tsx`, `globals.css`)
- `src/components/sections/` one file per page section. `src/components/ui/` shared primitives.
- `src/config/site.ts` all content and brand data. `src/lib/` helpers (`waLink`, etc.).
- `public/images/` all images. Root: `PROGRESS.md`, `DESIGN.md`, `AGENTS.md`.

## Content and data
- Every string, link, phone, FAQ item, program and hero slide lives in `src/config/site.ts`, fully typed.
- Components contain zero hardcoded copy. A missing config field must not crash rendering.
- Initial config values:
  - `brandName: "Haseeb Academy"`
  - `phoneDisplay: "+92 333 3044777"`, `phoneDigits: "923333044777"`
  - `address: ""` (render `Address coming soon` while empty)
  - `siteUrl: "https://example.com"` (placeholder; log under Blockers until the real domain exists)
  - `locationLabel: "Pakistan"`, `email: ""`, socials empty.
- Mark all dummy copy with a `[PLACEHOLDER]` comment in config, not in rendered text.
- Render a social icon, email line or address line only if its value is set (address shows the fallback).
- Never invent real names, addresses, emails, testimonials or statistics.

## Design rules
- Implement DESIGN.md exactly. Colors, type scale, spacing, radii, states and breakpoints come from §2–§7.
- Define the §2 tokens as CSS variables in `globals.css`. Map them in the Tailwind `@theme`.
- Never use raw hex in components. Use tokens only.
- Fixed brand colors: accent Olive `#98BF64`, buttons Seaweed `#354A21` with label `#E4F7E8` and a 1px Olive border, text Pearl `#FBFCF8`, links Lime `#AEF359`. No orange anywhere.
- Fonts via `next/font`: Oswald, Montserrat, JetBrains Mono, with the §3 fallbacks.
- Build mobile-first. Desktop styles come from `min-width` queries.
- Motion follows §8. Animate `transform` and `opacity` only. Include the `prefers-reduced-motion` block verbatim.
- If a visual detail is unspecified, STOP and ask. Do not improvise.

## Images
- Use only local files at `/public/images/<name>.webp`. WebP only.
- Required files (9): `hero-1`, `hero-2`, `hero-3`, `about-main`, `programs-memberships`, `programs-classes`, `programs-residents`, `faq-main`, `cta-main`.
- Never use external image URLs. Never add `remotePatterns` to `next.config`. Never generate or download images.
- Use `next/image` with explicit `width`/`height` (or `fill` + aspect-ratio box) and correct `sizes`.
- Hero slide 1 gets `priority`. All other images are lazy.
- A missing file renders the DESIGN.md §9 gradient placeholder with its target filename printed on it.
- List missing files under "Missing assets" in PROGRESS.md.

## Forms and contact
- No forms. Contact is WhatsApp only.
- CTA href: `https://wa.me/923333044777?text=<encodeURIComponent(message)>`, built from `phoneDigits` via `waLink()`. Use `target="_blank" rel="noopener noreferrer"`.
- Each program's "Learn More" sends a prefilled message naming that program.
- Phone is stored twice: `phoneDisplay` and `phoneDigits`. Never derive one at render time by guessing.
- `phoneDigits` rules: country code `92`, digits only, no `+`, no spaces, no leading zero.
- Footer phone link: `tel:+` + `phoneDigits`. Display text uses `phoneDisplay`.

## SEO and accessibility
- `<html lang="en-PK">`. Title, description and Open Graph come from config. OG image is `hero-1.webp`.
- Set `metadataBase` from `siteUrl`. Add `EducationalOrganization` JSON-LD from config. Add `robots` and `sitemap` for the single URL.
- One `<h1>` per page (the active hero slide's headline). Use landmark elements and sequential headings.
- Nav is a `<nav>` with a skip link. Anchor targets use `scroll-margin-top` equal to the nav height.
- Accordion: button + `aria-expanded` + `aria-controls`. Carousel: `aria-roledescription="carousel"`, labelled controls, keyboard operable.
- Focus ring: 2px Lime, offset 3px, never removed. Touch targets ≥ 44px.
- Text contrast ≥ 4.5:1, including hero text over images. Every image has meaningful `alt`, or `alt=""` if decorative.

## Code style
- TypeScript strict. No `any`, no `@ts-ignore`. Prefer `type` aliases and explicit return types on exports.
- Server Components by default. Use `"use client"` only for the hero carousel, accordion, scrollspy nav and mobile drawer.
- Function components only. One component per file. Named exports except Next route files.
- Tailwind utilities only. No inline styles except for dynamic values. No CSS-in-JS.
- No commented-out code. No `console.log` in committed code.

## Boundaries
- Always: edit freely inside `src/` and `public/`. Update PROGRESS.md.
- Ask first: adding dependencies, changing the tech stack, editing DESIGN.md, `git push`, deploying, changing Vercel settings.
- Never: add routes, backends, analytics, tracking scripts, forms, legal pages or external asset URLs. Never commit secrets. Never delete user files.

## Workflow and definition of done
- Maintain `PROGRESS.md` in the repo root, max 40 lines. Read it at the start of every terminal execution block. Update it before finishing.
- Sections: Status, Done, Next, Decisions, Missing assets, Blockers. Condense old items to stay at 40 lines.
- Work in small steps: scaffold → tokens/fonts → config → sections in page order → mobile pass → SEO/a11y → perf pass.
- Done means all of the following:
  - `pnpm lint`, `pnpm typecheck` and `pnpm build` pass with zero errors.
  - Verified at 375px and 1440px widths. No horizontal scroll, no console errors.
  - Lighthouse mobile ≥ 90 for Performance, Accessibility and SEO.
  - Output matches DESIGN.md. Deviations are listed in PROGRESS.md.
  - PROGRESS.md is updated.

## Gotchas
- Seaweed `#354A21` nearly disappears on dark bands. Always keep the 1px Olive border on buttons.
- Olive shade steps are per section (DESIGN.md §2). Do not use one flat accent.
- Pager dots and arrows align to the right gutter (`--gutter`).
- WhatsApp numbers must be digits only. A `+` or leading `0` breaks the link.
- The footer has no bottom bar: no copyright, no legal links. Do not add them back.
- Hero text sits on photos. Keep the overlay gradient so contrast stays ≥ 4.5:1.
- Screenshot typos and fake content in the original reference must not be reproduced. See DESIGN.md §9.