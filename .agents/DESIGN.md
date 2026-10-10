# DESIGN.md — Haseeb Academy Landing Page (Olive Edition)

Legend: ✓ observed · ≈ estimated · ? unconfirmed · [NEW] proposed
Metrics ≈ scaled to a 1440px viewport from an ~803px capture.
Sync: patched to match AGENTS.md (single page, anchor nav, WhatsApp CTAs, 3-slide hero, no legal/copyright bar).

## 1. Read First
A dark, cinematic, single-page site. A full-viewport 3-slide hero (image + overlay text) opens onto stacked olive-tinted dark bands. Condensed, heavy, tight-tracked Pearl headings contrast with light geometric body copy. One accent family, Olive, drives eyebrows, borders, icons and dividers, stepped darker per section. Buttons are Seaweed with a mint label and an Olive outline. Links are Lime. Content sits in fluid full-bleed sections with max-1600px content width and fluid gutters. Cards are rounded dark panels with hairline borders and a split text/image layout. The page ends at the footer link columns, with nothing below them.
Reference comparison path: `reference/academy-landing.png` ✓

Brand: `Haseeb Academy` (stacked wordmark `HASEEB / ACADEMY`). Logo mark → `[LOGO]` placeholder. All copy is `[PLACEHOLDER]` dummy text sourced from config. Photos → neutral dark placeholders.

## 2. Color System
```css
:root {
  /* Fluid gutter token */
  --gutter:           clamp(20px, 4vw, 72px);

  /* Olive accent ramp (base = #98BF64) */
  --olive-300:  #B7D58E; /* [NEW] hover tint */
  --olive-500:  #98BF64; /* ✓ main accent */
  --olive-600:  #7FA350; /* [NEW] */
  --olive-700:  #66843F; /* [NEW] */
  --olive-800:  #4D6530; /* [NEW] */

  /* Per-section accent */
  --accent-hero:      var(--olive-500);
  --accent-about:     var(--olive-500);
  --accent-programs:  var(--olive-600);
  --accent-faq:       var(--olive-500);
  --accent-cta:       var(--olive-500);
  --accent-footer:    var(--olive-700);

  /* Buttons */
  --btn-bg:           #354A21; /* ✓ Seaweed */
  --btn-bg-hover:     #41592A; /* [NEW] */
  --btn-bg-active:    #2A3B1A; /* [NEW] */
  --btn-border:       #98BF64; /* [NEW] keeps Seaweed visible on dark bands */
  --btn-text:         #E4F7E8; /* [NEW] pale mint, ≈9:1 on Seaweed */

  /* Text */
  --text-heading:     #FBFCF8; /* ✓ Pearl */
  --text-body:        rgba(251,252,248,.82);
  --text-muted:       rgba(251,252,248,.62);
  --text-dim:         rgba(251,252,248,.42);

  /* Links */
  --link:             #AEF359; /* ✓ Lime */
  --link-hover:       #C6FA82; /* [NEW] */

  /* Section backgrounds (lightest → darkest) */
  --bg-hero-overlay:  linear-gradient(180deg, rgba(12,16,10,.40) 0%, rgba(12,16,10,.72) 100%); /* ≈ */
  --bg-faq:           #202B1A;
  --bg-about:         #1B2516;
  --bg-cta:           #151D11;
  --bg-programs:      linear-gradient(180deg, #11170D 0%, #0C100A 100%);
  --bg-footer:        #090C07;

  /* Surfaces */
  --surface-card:     #1C2616;
  --surface-media:    #141414; /* ✓ image slots / placeholders */
  --surface-faq:      #2A3822;
  --surface-chip:     #0A0A0A;
  --surface-ctrl:     #0B0E09;

  /* Borders */
  --border-hair:      rgba(152,191,100,.16);
  --border-hover:     rgba(174,243,89,.45);
}
```
Hover states: link → `--link-hover`; nav item → Lime + 2px Olive underline; card → border `--border-hover`.

## 3. Typography
| Role | Family | Fallback |
|---|---|---|
| Display / headings | Oswald-like condensed bold | `'Oswald','Bebas Neue','Arial Narrow',Impact,sans-serif` |
| Body | Montserrat-like geometric sans | `'Montserrat','Helvetica Neue',Arial,sans-serif` |
| Nav / footer links | JetBrains Mono-like | `'JetBrains Mono','SF Mono',Menlo,Consolas,monospace` |

| Token | Desktop | Mobile | Weight | Line-height | Tracking | Case / color |
|---|---|---|---|---|---|---|
| hero-h1 | 3.75rem / 60px ≈ | 2.25rem / 36px | 700 | 1.0 | -0.01em | UPPER, Pearl |
| h2 | 2.25rem / 36px ≈ | 1.75rem / 28px | 700 | 1.1 | -0.01em | Title, Pearl |
| h3 (card) | 1.25rem / 20px ≈ | 1.125rem | 700 | 1.2 | 0 | Title, Pearl |
| eyebrow | 0.75rem / 12px ≈ | 0.75rem | 600 | 1.2 | 0.08em | UPPER, Olive |
| body | 1rem / 16px ≈ | 0.9375rem | 400 | 1.6 | 0 | `--text-body` |
| card-desc | 0.8125rem / 13px ≈ | 0.8125rem | 400 | 1.55 | 0 | `--text-muted` |
| nav / footer link | 0.75rem / 12px ≈ | 1rem (drawer) | 400 | 1.4 | 0.02em | Title |
| button | 0.8125rem / 13px ≈ | 0.8125rem | 700 | 1 | 0.02em | UPPER, `--btn-text` |
| link | inherits | inherits | 700 | inherits | 0 | `--link` |
| faq-q | 0.9375rem / 15px ≈ | 0.875rem | 700 | 1.35 | 0 | Pearl |

## 4. Spacing Rhythm
- Fluid gutter token: `--gutter: clamp(20px, 4vw, 72px)`. Defined in `globals.css` `:root`.
- Nav, hero and footer are full-bleed: `padding-inline: var(--gutter)`. Logo at left gutter, nav links at right gutter.
- Content sections (About, Programs, FAQ, CTA): `width: min(100% - 2 * var(--gutter), 1600px); margin-inline: auto`.
- Hero arrows and pager dots align to the right gutter. Hero text aligns to the left gutter (same x as the logo).
- Media slots use `aspect-ratio`, not fixed px: About 414/540, FAQ 440/590, CTA 530/370, Programs feature card 1100/505, small cards 538/220.
- Body paragraphs: `max-width: 65ch`.
- Hero: 100vh ≈ 900px. Nav pinned top. Slide content anchored bottom-left, 96px above hero base ≈.
- Section padding: 112px ≈ (About, FAQ, CTA); 96px (Programs); footer 80px top / 64px bottom.
- Gaps: 24px card gap ≈; 64px column gap ≈; 12px between FAQ rows.
- Radii: cards 16px; media 16px; buttons 6px; FAQ rows 10px; chip 999px; arrows 50%.
- Shadows: cards/media `0 20px 50px rgba(0,0,0,.40)`; button `0 8px 24px rgba(53,74,33,.55)`.
- Anchor offset: every section has `scroll-margin-top` = nav height (72px).

## 5. Interactive Components
**Primary button:** bg `--btn-bg`, text `--btn-text`, 1px `--btn-border`, padding 14×28px (hero 16×32), radius 6px. Hover: `--btn-bg-hover`, border Lime, translateY(-2px). Active: `--btn-bg-active`. Focus: 2px Lime outline, offset 3px. Target ≥ 44px. **Every button opens WhatsApp** (`wa.me`, new tab).
**Nav (anchor links, in page order):** `Home → #home`, `About → #about`, `Programs → #programs`, `FAQ → #faq`, `Contact → #contact`. Mono links, gap 40px. Default Pearl. Active (scrollspy, current section) ✓: Lime + 2px Olive underline [NEW]. Hover: Lime. Focus: 2px Lime outline. Sticky on scroll with `--bg-footer` at 85% opacity + blur [NEW].
**Hero carousel:** 3 slides, each with its own image, H1 and button. Autoplay off. Arrow buttons and dots change slide. Crossfade 600ms. Arrows: 48px circles, `--surface-ctrl`, 1px `--border-hair`, Pearl icon; hover border Olive, icon Lime. Dots: vertical, right gutter, 6px, 14px gap; active Pearl, inactive 40% Pearl. Keyboard: left/right arrows move slides.
**Program card:** two-half split (text left, media right). Text half `--surface-card`, padding 32px, 1px `--border-hair`. Hover: border `--border-hover`, media scale 1.03. Focus-within: Lime outline. "Learn More →" opens WhatsApp with a message naming the program.
**Text link:** Lime, 700, arrow 12px, gap 8px. Hover: `--link-hover`, arrow +4px.
**FAQ accordion:** row `--surface-faq`, 1px `--border-hair`, padding 18×20px, Olive chevron. Open ✓: answer in `--text-body` 13px/1.6, chevron up. Hover: +4% lightness. Focus: Lime outline. Height ≥ 48px.
**Location chip:** `--surface-chip`, 999px radius, Olive pin, Pearl 12px label, padding 8×14px.
**Footer links:** mono 12px `--text-muted`. Hover: Lime. Social icons 16px, shown only if a URL exists.
**Dividers:** 1px `--olive-800`; CTA divider 40×2px Olive.

## 6. Section-by-Section
1. **Hero `#home` ✓:** 3 full-bleed slides, each image + `--bg-hero-overlay`. Logo top-left at left gutter (stacked `HASEEB / ACADEMY`, Pearl, 700). Nav top-right at right gutter (5 links). Bottom-left: slide H1 on 2 lines, 24px gap, button. Bottom-right: two arrows at right gutter. Right gutter, mid-height: 3 dots. Images: `hero-1/2/3.webp`.
2. **About `#about` ✓ (`--bg-about`):** 2-col. Left: portrait slot aspect-ratio 414/540 (`about-main.webp`). Right: eyebrow → H2 → three body paragraphs (20px apart, max-width 65ch), centered to media.
3. **Programs `#programs` ✓ (`--bg-programs`):** centered H2, muted 2-line subcopy (max 560px), bold small line. 64px below: full-width feature card (aspect-ratio 1100/505, text 50% / media 50%, link pinned bottom-left, `programs-memberships.webp`). 24px below: two half cards (aspect-ratio 538/220, text ~55% / media ~45%, `programs-classes.webp`, `programs-residents.webp`).
4. **FAQ `#faq` ✓ (`--bg-faq`):** 2-col. Left: slot aspect-ratio 440/590 (`faq-main.webp`). Right: H2 + 5 accordion rows, first open.
5. **CTA / Contact `#contact` ✓ (`--bg-cta`):** 2-col. Left: 2-line H2, divider, button. Right: slot aspect-ratio 530/370 (`cta-main.webp`), location chip bottom-left inside (label from config, default `Pakistan`).
6. **Footer ✓ (`--bg-footer`):** 4-col grid (1.6fr 1fr 1fr 1.2fr), full-bleed with `padding-inline: var(--gutter)`, top hairline `--accent-footer`.
   - Brand: `[LOGO]` + wordmark, 2-line blurb, social icons.
   - Navigate: Home, About, Programs, FAQ, Contact (anchors).
   - Programs: the 3 program names (anchor → `#programs`).
   - Contact: phone (display format, `tel:` link), address (`Address coming soon` until set), WhatsApp link.
   - **No bottom bar.** No copyright line. No legal links. The page ends after the columns.
   - Headings: bold 12px Pearl. Links 24px apart.

## 7. Mobile Spec [NEW]
- Breakpoints: ≤1024px tablet, ≤640px phone. Build mobile-first.
- Nav → hamburger (44px) opening a full-height drawer on `--bg-footer`, 1rem links, 56px rows, active link Lime. Closing the drawer on link tap.
- Hero: min-height 85svh, H1 2.25rem, button full-width ≤320px, arrows 40px, dots hidden, swipe to change slides.
- About / FAQ / CTA: 1 column, media first at 4:3, 16px radius.
- Program cards: stacked, media on top (16:9), text below, 24px padding, 1-up.
- FAQ rows: full-width, ≥48px.
- Footer: brand block full-width, then Navigate / Programs / Contact in a 2-col grid (Contact spans full).
- Section padding 64px; gutters 20px.

## 8. Motion Framework
- Durations: hover/focus 180ms `ease-out`; accordion 260ms `cubic-bezier(.4,0,.2,1)`; hero crossfade 600ms; scroll reveal 500ms (fade + 16px rise).
- Hero autoplay is off. Slides change by user input only.
- Hero image slow drift (scale 1→1.05, 20s) [NEW].
- Animate `transform` and `opacity` only (border-color/background hover transitions allowed).
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

## 9. Structural Flaws to Ignore
| Flaw in screenshot | Fix in code |
|---|---|
| Orange smoke hero photo clashes with the palette | Local images only. Placeholder uses the olive overlay until real photos exist |
| Two academy names, woodworking copy under a military theme | One brand (`Haseeb Academy`), `[PLACEHOLDER]` copy from config |
| Typos ("Contac Us", "Kuucall Phone Tracking", "Loodswezen", "GET BOOKED") | Not reproduced. Nav and footer labels come from §5/§6 |
| Vague nav labels ("Prep", "Q&As") | `Programs`, `FAQ`, each linking to its section |
| Lorem-ipsum blurb, stale "© 2020", legal links, dead pages (Features, Careers, Blog, Help) | Placeholder blurb. Bottom bar removed. Footer links are anchors only |
| Feature card has dead space above the link | Pin link to bottom; cap card min-height at 420px |
| Small-card text cramped, "(co-working)" duplicated | Max 2 lines, no repeated phrases |
| Empty near-black image slots read as broken | Gradient placeholder block printing the target filename |
| Hero arrows/dots sit outside the gutter | Align arrows to the right gutter (`--gutter`) |
| Footer heading/link weights inconsistent | Standardize to §3 tokens |
| Seaweed buttons nearly vanish on dark bands | Keep the 1px Olive border |