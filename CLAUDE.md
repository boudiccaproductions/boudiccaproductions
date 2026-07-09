# CLAUDE.md - Boudicca Productions website

Conventions agreed for this repo. Follow them; if you deviate, say why.

## What this is

Static marketing site for **boudiccaproductions.com** - a female-founded,
artist-led theatre company (film & TV later). Plain **HTML + CSS**, **no build
step**, **no framework**, **no JavaScript** except one tiny inline menu script.
Hosted on **GitHub Pages** (`CNAME` + `.nojekyll`).

## Hard rules

- **No build tooling.** Author HTML/CSS directly. Do not introduce npm, bundlers,
  Sass, a static-site generator, or a CSS framework.
- **No runtime third-party requests.** Fonts are self-hosted; do not add Google
  Fonts `<link>`s, CDN scripts, analytics, or external stylesheets. Keep it
  self-contained and privacy-respecting.
- **JavaScript is a last resort.** The only script is the burger-menu close
  handler (inline, per page). Prefer CSS-only solutions (the nav toggle, marquee,
  and crossfade are all pure CSS).
- **ASCII punctuation in prose.** Use the hyphen `-`, not en/em dashes. Use
  straight apostrophes `'`, not curly `’` (keeps nav labels/headings consistent).

## Design tokens (single source of truth: `:root` in `css/style.css`)

| token               | value                | use                              |
| ------------------- | -------------------- | -------------------------------- |
| `--parchment`       | `#fbf4e4`            | page background (from logo file) |
| `--parchment-shade` | `#f3ead6`            | tinted panels / newsletter band  |
| `--forest`          | `#2b4c3f`            | headings, body, UI               |
| `--forest-deep`     | `#1f3a30`            | hover / darker green             |
| `--forest-ink`      | `#16281f`            | near-black green (overlays)      |
| `--gold`            | `#d5a541`            | the spear gold - accents, CTAs   |
| `--hairline`        | `rgba(43,76,63,.18)` | thin rules                       |
| `--measure`         | `62ch`               | readable line length             |
| `--container`       | `1160px`             | max content width                |

All three brand values were sampled from the actual logo file - keep them exact.

## Type

- **Headings:** Cormorant Garamond, weight **600**, uppercase, letter-spacing
  `0.05em`. This is the confirmed Canva logo font - do not swap it.
- **Body:** Montserrat 400.
- **Labels / eyebrows:** Montserrat **200**, uppercase, letter-spacing `0.35em`
  (`.eyebrow`) - the logo's "PRODUCTIONS" treatment.
- Fonts are **self-hosted** in `assets/fonts/` (`fonts.css` = Montserrat,
  `cormorant.css` = Cormorant Garamond), each `@import`ed at the top of
  `style.css`. To change a weight, download the woff2 and localise it (see how the
  existing ones are referenced) - never hot-link.

## Text alignment

- **Centred is the default.** `.section` sets `text-align: center` and
  `.section p` gets `margin-inline: auto` so max-width paragraphs stay
  page-centred (not hugging the left). You do **not** need to add a `center`
  class.
- Use **`.text-left`** on a block when you want it left-aligned.
- Bulleted lists stay readable-left inside centred sections
  (`justify-self: center; text-align: left`).

## Logo assets (`assets/img/`) - pick by background

| file             | bg          | use                                                |
| ---------------- | ----------- | -------------------------------------------------- |
| `logo.png`       | cream baked | on cream areas, or as a framed tile; the footer    |
| `logo-clear.png` | transparent | on parchment - seamless (Home logo banner)         |
| `logo-light.png` | transparent | green recoloured to cream + gold - for **dark** bg |
| `wordmark.png`   | cream baked | horizontal lockup - the top-left brand chip        |
| `favicon-*.png`  | -           | generated from the logo                            |

The logo's own cream is `#fbf4e4` (== `--parchment`), so `logo.png` blends on
parchment. On dark backgrounds the green vanishes - use `logo-light.png`. Regenerate
the transparent variants with the pure-Python PNG script pattern used previously
(no ImageMagick/PIL on this machine; `sips` -> BMP -> parse -> write PNG).

## Shared chrome is duplicated per page

There are no includes/partials. The header, burger + overlay nav, wordmark chip,
footer, and menu script are **copied into every `.html` file**. When you change any
of them, **change all pages together** (a small Python loop over the files keeps
them in sync - that's how they were built). Pages: `index.html`, `who-we-are.html`,
`projects.html`, `mission.html`, `contact.html`.

## Components (classes in `css/style.css`)

- **Header** differs by page:
  - Home (`index.html`): `.site-header.site-header--flush` - just the spear logo
    (`logo-clear.png`), no bottom border, minimal gap to the next section.
  - Subpages: `.hero-slider` crossfade slideshow - 3 `.hero-slide`s cycling
    "Coming Soon" over the cream/green shades. Delays 0/4/8s, keyframe
    `hero-crossfade`; reduced-motion shows the first slide only. Swap a
    `.hero-slide` for `<div class="hero-slide"><img ...></div>` to go live.
- **Nav:** CSS-only. `#nav-toggle` checkbox + `.burger` (fixed top-right) toggles
  `.nav-overlay` (full-screen). `.brand-chip` (wordmark) is fixed top-left, links
  home, hides when the menu opens. The only JS closes the overlay on link-click /
  Escape.
- **`.logo-row`** - `1fr auto 1fr` grid: block, logo, block. `.logo-side` are the
  flanking link panels (`.logo-side__title` + `.logo-side__cue`, plus a shade
  class).
- **`.cta-row`** - `repeat(auto-fit, minmax(200px, 1fr))` grid of `.logo-side`
  link blocks with **no** logo; wraps on narrow screens. (Home uses a 3-block row:
  Meet the Company / What's On / Get in Touch.)
- **`.marquee`** - full-bleed, infinite auto-scroll. `.marquee__track` holds **two
  identical copies** of the `.coming-slide`s and animates `translateX(-50%)` for a
  seamless loop - **keep both copies in sync** when editing. Per-slide
  `margin-right` (not flex `gap`) keeps the loop maths exact. Pauses on hover;
  reduced-motion switches to manual scroll. Footer-style `border-block` outline.
- **Footer** - `.site-footer` cream with a dark-green frame border on its
  `.container`. `.footer-grid` = four centred columns: logo (`logo.png`), tagline,
  Explore, Contact.
- **`.newsletter`** - pre-footer band (`--parchment-shade`). `.signup` form's
  `action` is a **placeholder** (`#`); wire it to a mailing-list provider
  (MailerLite recommended) - static hosting can't process the POST.
- **Cards** - `.grid.grid--3` / `.grid--4` + `.card` with `.card__photo.photo-shim`
  placeholders (team, pets, stories).
- **Shades** (cream/green fills, shared by marquee slides, hero slides, CTA
  blocks): `.shade-c1` `#f3ead6`, `.shade-c2` `#ece0c8`, `.shade-c3` `#e4d7bd`;
  `.shade-g1` forest, `.shade-g2` forest-deep, `.shade-g3` `#3a4b3f`. Each sets
  background + a readable text colour. Alternate cream/green for rhythm.

## Placeholders to fill (search these strings)

`PLACEHOLDER`, `photo-shim`, `Image + link`, `Coming Soon`, `Story or event title`,
`Short bio to follow`. Outstanding real content: hero/production images, team & pet
photos + bios (Annabel Caldwell, Eleanor Wilson, Holly Hipwell; pets Luna, Mel,
Frank), the longer mission copy, local stories/events, the contact email
(`hello@boudiccaproductions.com` - confirm), and the newsletter form `action`.

## Deploy

GitHub Pages, deploy-from-branch, folder `/` (root). `CNAME` -> apex; four A
records point at GitHub Pages (see `README.md`). `.nojekyll` serves files raw.

## Local preview

`python3 -m http.server 8000` then `http://localhost:8000`. For a rendered check,
headless Chrome works (`--screenshot`, `--virtual-time-budget` to catch the
crossfade/marquee mid-animation).
