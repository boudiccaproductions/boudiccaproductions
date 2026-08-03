# Boudicca blog-post guide

Every published blog card uses the same opening-book interaction and one of three approved photographic cover presets.

## Author-text rule

Treat every submitted article as approved author copy. Reproduce the body text verbatim, including wording, paragraph order, punctuation, capitalisation and parenthetical remarks. Do not copy-edit, correct, shorten, expand or add pull quotes unless the author explicitly approves those changes. Layout, metadata and accessibility text must remain separate from the author's article body.

## Approved cover presets

- `blog-cover--editorial` — option 4, Editorial Edge. A full photograph with asymmetric text.
- `blog-cover--split` — option 5, Split Cover. The photograph fills the upper half and the title sits on a forest book jacket below.
- `blog-cover--proscenium` — option 6, Proscenium. The photograph sits inside a theatre-inspired arch with a gold border.

Add the chosen class to `.blog-tile__cover` and set its photograph through `--blog-cover-image`:

```html
<div
  class="blog-tile__cover blog-cover--proscenium"
  style="--blog-cover-image: url('../assets/img/post-cover.jpg')"
>
  <div class="blog-cover__copy">
    <span class="blog-tile__title">Post title</span>
    <span class="blog-tile__author">Author name</span>
  </div>
</div>
```

## Prompt for a future post

Copy this prompt when supplying a new article:

> Add this as a new Boudicca blog post. Use the existing opening-book card and the `[editorial / split / proscenium]` cover preset. The title is `[TITLE]`, the author is `[AUTHOR]`, the tagline is `[TAGLINE]`, the cover image is `[IMAGE PATH]`, and the article document is `[DOCUMENT PATH]`. Preserve the established typography, colours, accessibility behaviour and mobile layout.

If no preset is specified, ask which of the three approved covers should be used before publishing.

## Standard article-page structure

Every full post follows the same order:

1. Metadata in the document head: page title, description, canonical URL and `BlogPosting` structured data.
2. Article header: title, tagline, full author name and machine-readable publication date.
3. Optional banner: a shallow full-width image between the header and article. Omit the banner element entirely when a post does not need one.
4. Article body: one paragraph per source-document paragraph in the standard readable column.
5. Author panel: author name, short approved description and link to `who-we-are.html`.
6. Back-to-blog link.
7. Double-opt-in newsletter form.
8. Standard site footer.

For each new upload, replace the bracketed content in the prompt, copy the structure from an existing article page, and update all of these fields:

- filename and canonical URL
- browser title and meta description
- structured-data headline, description, image, date and author
- visible title, tagline, author and date
- optional banner-image path and accessible description
- article paragraphs
- author-panel copy

Do not remove semantic `<article>`, `<header>`, `<footer>`, `<time>` or heading elements. Preserve the newsletter success message, keyboard navigation and reduced-motion behaviour.

## Eleanor Wilson article layout

Use the approved **Literary Picture Essay** layout for Eleanor's posts by default. Copy `a-seat-at-the-table.html` as the starting point. Its fixed structure is:

- tall photograph on the left and title information on the right;
- title deliberately balanced across two lines where appropriate;
- one centred reading column, never newspaper columns;
- gold drop cap on the first paragraph;
- an optional pull quote within the article;
- a 420px centred forest divider before the author sign-off;
- Eleanor's 160px circular portrait on the left of an unboxed biography;
- portrait and biography stacked on small screens;
- newsletter and standard footer at the end.

Prompt for Eleanor's future posts:

> Add this as a new Eleanor Wilson blog post using her standard Literary Picture Essay layout. Use the `[COVER PRESET]` title card. The title is `[TITLE]`, the tagline is `[TAGLINE]`, the opening image is `[IMAGE PATH]`, and the article document is `[DOCUMENT PATH]`. Preserve the single reading column, drop cap, optional pull quote, author portrait and responsive layout.

When a banner is used, place it between the article header and `<article>`:

```html
<div
  class="blog-article__banner"
  role="img"
  aria-label="A concise description of the banner image"
  style="--blog-banner-image: url('../assets/img/post-banner.jpg')"
></div>
```
