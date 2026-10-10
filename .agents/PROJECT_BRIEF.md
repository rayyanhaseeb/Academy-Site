# PROJECT_BRIEF.md

Owns scope, data, assets and build order. Visuals → `DESIGN.md`. Tech and process → `AGENTS.md`. On any conflict between the three, STOP and alert the user.

## Goal
- Ship a single-page marketing site for Haseeb Academy that converts visitors into WhatsApp conversations.
- Success metric: every CTA opens WhatsApp. Launch gate: Lighthouse mobile ≥ 90 (Performance, Accessibility, SEO).
- Content is dummy until the client supplies real copy, logo, address and images.

## Scope
**Included**
| Area | Deliverable |
|---|---|
| Page | One route `/` with sections `#home #about #programs #faq #contact` plus footer |
| Hero | 3 slides, image + headline + CTA each |
| About | Eyebrow, H2, 3 paragraphs, 1 image |
| Programs | 1 feature card + 2 small cards, each with a WhatsApp "Learn More" |
| FAQ | 5-item accordion, first open |
| Contact | CTA block, location chip, WhatsApp button |
| Footer | Brand block, Navigate, Programs, Contact columns (no bottom bar) |
| Meta | Title, description, Open Graph, JSON-LD, robots, sitemap |

**Explicitly excluded** (do not build, do not scaffold): blog, CMS, forms, auth, payments, analytics, legal pages (Terms/Privacy), i18n, theme toggle, search, extra routes, backend, database.

## Data policy
- All content and brand data lives in `src/config/site.ts` only. No hardcoded copy in components.
- No network fetches for content or assets. No external image URLs, ever.
- Never invent real people, addresses, emails, statistics or testimonials.
- Unset optional values (`email`, `address`, socials) hide their UI, except the `Address coming soon` fallback.
- `waLink()` throws in dev if `phoneDigits` does not match `/^92\d{10}$/`.
- WhatsApp prefilled messages are English.

## Brand and contact values
| Key | Value |
|---|---|
| `brandName` | Haseeb Academy |
| `wordmark` | `HASEEB` / `ACADEMY` (two lines) |
| `logo` | none yet; render the `[LOGO]` placeholder |
| `tagline` | `[PLACEHOLDER] Tagline` |
| `phoneDisplay` | +92 333 3044777 |
| `phoneDigits` | 923333044777 |
| `address` | `""` → renders `Address coming soon` |
| `locationLabel` | Pakistan |
| `email` | `""` (hidden) |
| `socials` | `{}` (hidden) |
| `siteUrl` | https://example.com (placeholder; launch blocker) |
| `waDefaultMessage` | `Hi Haseeb Academy, I'd like to know more.` |
| `locale` | en-PK |

## Content data models
| Model | Fields | Count |
|---|---|---|
| `NavItem` | `label`, `href` | 5: Home, About, Programs, FAQ, Contact (`#home`…`#contact`) |
| `HeroSlide` | `image`, `alt`, `headline`, `ctaLabel`, `waMessage` | 3 |
| `AboutBlock` | `eyebrow`, `heading`, `paragraphs[3]`, `image`, `alt` | 1 |
| `Program` | `slug`, `title`, `description`, `image`, `alt`, `waMessage`, `variant: "feature" \| "card"` | 3 |
| `FaqItem` | `question`, `answer` | 5 |
| `CtaBlock` | `heading` (2 lines), `ctaLabel`, `image`, `alt` | 1 |
| `FooterColumn` | `title`, `links[]` (anchors or `tel:`/`wa.me`) | 3 |

**Dummy seed copy** (plain English, training-academy theme, 1–2 sentences each)
- Hero headlines: `Train With Purpose`, `Learn From The Best`, `Build Your Future`. CTA label: `Book Now`.
- Programs: `Program One` (feature), `Program Two`, `Program Three`. Each gets a 1–2 line dummy description.
- FAQ questions: `What is Haseeb Academy?` · `What can I expect from a class?` · `Who can enrol?` · `How experienced are the instructors?` · `How do I get started?` Answers are dummy, 2 sentences max.
- Program `waMessage` format: `Hi Haseeb Academy, I'm interested in <title>.`

## Local Image Asset Index
All files in `public/images/`, WebP, loaded only via `next/image`. The agent must never call random web URLs. A missing file renders the DESIGN.md §9 placeholder showing its filename.
| File | Section | Size (px) | Max KB |
|---|---|---|---|
| `hero-1.webp` | Hero slide 1 (LCP, `priority`) | 1920×1080 | 300 |
| `hero-2.webp` | Hero slide 2 | 1920×1080 | 300 |
| `hero-3.webp` | Hero slide 3 | 1920×1080 | 300 |
| `about-main.webp` | About | 828×1080 | 200 |
| `programs-memberships.webp` | Programs, feature card | 1100×1010 | 200 |
| `programs-classes.webp` | Programs, small card | 484×440 | 200 |
| `programs-residents.webp` | Programs, small card | 484×440 | 200 |
| `faq-main.webp` | FAQ | 880×1180 | 200 |
| `cta-main.webp` | Contact/CTA | 1060×740 | 200 |

## Step-by-step build order
**Gate** (end of every step, no exceptions): run `pnpm lint`, `pnpm typecheck`, `pnpm build`. All must pass. Then check 375px and 1440px previews against `reference/academy-landing.png` and DESIGN.md. If no browser tool exists, ask the user to check both widths and wait. Log one line in `PROGRESS.md` (state, widths checked, deviations). Do not install screenshot tooling without asking.

1. **Preflight.** Verify `reference/academy-landing.png` exists. Halt and ask if missing. Create `PROGRESS.md` (≤ 40 lines). → Gate
2. **Scaffold + tokens.** App skeleton, DESIGN.md §2 variables, §3 fonts, §8 reduced-motion block. → Gate
3. **Config + helpers.** Types, `site.ts` with the values above, `waLink()` with its guard. → Gate
4. **Shell.** Sticky anchor nav with scrollspy, mobile drawer, section wrappers with anchors and scroll offset. → Gate
5. **Hero.** 3-slide carousel, arrows, dots, swipe, keyboard, no autoplay. → Gate
6. **About.** → Gate
7. **Programs.** Feature card, 2 small cards, WhatsApp links. → Gate
8. **FAQ.** Accessible accordion. → Gate
9. **Contact/CTA.** Block, divider, location chip, button. → Gate
10. **Footer.** 3 link columns plus brand block, no bottom bar. → Gate
11. **Placeholder pass.** Confirm every missing image shows its filename. List missing files in PROGRESS.md. → Gate
12. **SEO + a11y pass.** Meta, JSON-LD, sitemap, robots, focus, contrast, alt text. → Gate
13. **Performance pass.** LCP preload, `sizes`, CLS check, Lighthouse mobile ≥ 90. → Gate
14. **Handoff.** Vercel preview deploy (ask first), final PROGRESS.md summary. → Gate

## Done checklist
- [ ] All 14 steps logged in `PROGRESS.md`; the Gate passed at 375px and 1440px.
- [ ] Every CTA opens `wa.me/923333044777` with the correct message, in a new tab.
- [ ] Nav order and anchors match the `NavItem` table. Scrollspy highlights the active section.
- [ ] Footer has no bottom bar, copyright line or legal links.
- [ ] No excluded feature, extra route, external URL or new dependency exists.
- [ ] Lighthouse mobile ≥ 90 on Performance, Accessibility and SEO.
- [ ] Preview deploy approved by the user.

**Production blockers** (preview is allowed before these; production is not):
- [ ] Real `siteUrl` set. [ ] Logo supplied. [ ] Address and email decided. [ ] Real copy replaces dummy copy. [ ] All 9 images supplied and under their size caps.