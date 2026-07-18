# Boudicca Productions

Female-founded and artist-led, Boudicca Productions creates bold new work that
elevates women's voices and celebrates stories too often left untold.

Static website for [boudiccaproductions.com](https://boudiccaproductions.com),
hosted on GitHub Pages. Plain HTML + CSS, no build step.

## Pages

| File              | Purpose                                                |
| ----------------- | ------------------------------------------------------ |
| `index.html`      | Home: logo-led hero, coming-soon flow, CTA blocks, marquee, newsletter |
| `mission.html`    | Expanded mission statement, blog CTA, newsletter      |
| `who-we-are.html` | Company page, team cards, Pets' Corner with images    |
| `projects.html`   | Theatre work (carousel) + reusable production template |
| `blog.html`       | Editorial space for stories and updates               |
| `contact.html`    | Get in touch + mailing list signup                    |
| `privacy-policy.html` | Privacy policy                                      |
| `cookie-policy.html`  | Cookie policy                                       |
| `accessibility.html`  | Accessibility statement                             |
| `terms.html`      | Website terms                                          |

## Design system

Taken from the brand logo (Canva -> web-safe fonts):

- **Parchment** `#f7f5eb` - background
- **Forest** `#2b4c3f` - headings, body, UI
- Headings: **Cormorant Garamond** (the logo wordmark face)
- Body/labels: **Montserrat** (thin, tracked - the logo's "PRODUCTIONS" style)

Fonts are **self-hosted** in `assets/fonts/` (woff2 + `fonts.css`) - no runtime
call to Google's servers. All tokens live at the top of `css/style.css`.

## Current content

- Expanded mission statement on `mission.html`
- Blog page replacing the older local stories/events slot
- Pets' Corner images for Luna, Mel, and Steve
- Shared footer and newsletter section across the site
- Footer policy links for privacy, cookies, accessibility, and terms
- Current contact email: `info@boudiccaproductions.com`

## Filling in content

Search the HTML for `PLACEHOLDER` and `photo-shim`. To do:

- Add a hero / production image and wire it into the homepage slideshow or
  feature area
- Add real production titles/photos in the `projects.html` carousel
- Authenticate the newsletter sending domain in MailerLite and complete an end-to-end signup test
- Expand the blog with real posts and editorial content

TV and Film categories are built but hidden (`class="is-hidden"`) for the
theatre-first launch - remove that class when the work exists.

## Local preview

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy (GitHub Pages)

1. Push to GitHub.
2. Settings -> Pages -> Build and deployment -> Source: **Deploy from a branch**,
   branch `main`, folder `/ (root)`.
3. The `CNAME` file already points at `boudiccaproductions.com`; add the DNS
   records below at your registrar.
4. `.nojekyll` disables Jekyll processing (we serve raw files).

### DNS

Apex `boudiccaproductions.com` -> four A records (GitHub Pages):
`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
(and the AAAA equivalents if you want IPv6).

Point `boudiccaproductions.co.uk` and `boudicca.productions` at the primary via
a registrar-side redirect to `https://boudiccaproductions.com`.
