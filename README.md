# Boudicca Productions

Female-founded and artist-led, Boudicca Productions creates bold new work that
elevates women's voices and celebrates stories too often left untold.

Static website for [boudiccaproductions.com](https://boudiccaproductions.com),
hosted on GitHub Pages. Plain HTML + CSS, no build step.

## Pages

| File              | Purpose                                                |
| ----------------- | ------------------------------------------------------ |
| `index.html`      | Home: logo banner, mission, brand mark, featured image |
| `who-we-are.html` | The company (team cards) + Pets' Corner                |
| `projects.html`   | Theatre work (carousel) + reusable production template |
| `contact.html`    | Get in touch + Join our mailing list                   |

## Design system

Taken from the brand logo (Canva -> web-safe fonts):

- **Parchment** `#f7f5eb` — background
- **Forest** `#2b4c3f` — headings, body, UI
- Headings: **Marcellus** (the logo wordmark face) · Body/labels: **Montserrat**
  (thin, tracked — the logo's "PRODUCTIONS" style)

Fonts are **self-hosted** in `assets/fonts/` (woff2 + `fonts.css`) — no runtime
call to Google's servers. All tokens live at the top of `css/style.css`.

## Filling in content

Search the HTML for `PLACEHOLDER` and `photo-shim`. To do:

- [ ] Write team + pet bios (Annabel Caldwell, Eleanor Wilson, Holly Hipwell;
      pets Luna, Mel, Frank)
- [ ] Add photos to `assets/img/` and swap each `<div class="photo-shim">…</div>`
      for `<img class="card__photo" src="assets/img/team/name.jpg" alt="Name" />`
- [ ] Add a hero photo: `assets/img/hero.jpg`, then set it as the
      `.feature-img` background in `index.html`
- [ ] Confirm the real contact email (currently `hello@boudiccaproductions.com`)
      — Instagram is wired to `@boudiccaproductions`
- [ ] Real production titles/photos in the `projects.html` carousel

TV and Film categories are built but hidden (`class="is-hidden"`) for the
theatre-first launch — remove that class when the work exists.

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
a **registrar-side redirect** to `https://boudiccaproductions.com`.
