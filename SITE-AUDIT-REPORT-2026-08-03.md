# Boudicca Productions Website Audit

**Audit completed:** 3 August 2026  
**Scope:** Visitor-facing copy, visual hierarchy, consistency, accessibility, internal links and basic search optimisation across every public page.

## Executive summary

The website feels coherent, distinctive and close to launch quality. Its strongest pages are the two blog articles and the Who We Are page. The primary remaining work is consistency and SEO polish rather than a redesign.

One uncommitted change was present during this audit: the revised fading **What’s On** banner.

## Page-by-page analysis

### Home

The homepage makes a strong first impression through its clear identity, established colour palette and mission. The silhouettes give the site a recognisable visual language.

Recommended improvements:

- Strengthen the title tag from simply “Boudicca Productions” to something such as **Boudicca Productions | Female-Led Theatre in Colchester**.
- Reduce the number of separate Coming Soon elements, as the message becomes repetitive.
- Replace some Coming Soon messaging with one prominent What’s On teaser when production details are ready.
- Consider a visible, meaningful main headline rather than relying only on the technically valid screen-reader H1.

**Assessment:** Visually strong, but the company’s location and purpose could be communicated sooner.

### What’s On

The fading **What’s On** banner creates consistency with the rest of the site. “Currently in development” works well beneath it.

The confidential Colchester Fringe wording now feels intentional:

- “Shhh…”
- “Something Exciting Is Coming”
- “Colchester Fringe · October 2026”

Recommended improvements:

- Review whether three carousel cards imply that three separate productions are underway. If only one is confirmed, a single larger feature or three facets of the same production may be clearer.
- Replace the current SEO description about film and television with wording focused on theatre, Colchester Fringe and October 2026.
- Eventually remove internal developer comments that still refer to placeholder production cards. These are not visible to visitors.

**Assessment:** Much more intentional, although the three-card structure may overstate how much work is being announced.

### Who We Are

This is one of the strongest pages. The founders have distinctive voices, and Pets’ Corner adds personality without undermining the professional information.

Recommended improvements:

- Confirm that the role hierarchy is intentional: Holly and Eleanor are both listed as Creative Director, while Annabel is Creative Associate.
- Replace the generic Coming Soon hero with **Who We Are** to match the revised What’s On page.
- Refocus the search description on useful terms such as *female-led theatre company in Colchester*, while retaining some personality.

**Assessment:** Engaging, personable and memorable.

### Our Mission

The mission clearly explains the company’s purpose, location and focus. The revised Colchester Fringe paragraph provides a genuine update without disclosing too much.

Recommended improvements:

- Replace the generic description “The Boudicca Productions mission in full” with one mentioning female-led theatre, underrepresented voices, Essex and East Anglia.
- Replace the Coming Soon hero with **Our Mission**.

The revised Blog call-to-action is clear and visitor-facing.

**Assessment:** Strong copy with weak SEO metadata and a temporary-looking banner.

### Blog

The cream frames, green outlines and book-opening effects are cohesive and lighter than the previous all-green treatment.

Strengths:

- The two published posts are clearly differentiated.
- Coming Soon cards use the established design system.
- Removing “From the Blog” reduced repetition.
- The introductory wording now feels finished.

Recommended improvements:

- Consider whether two Coming Soon cards are needed while there are only two published articles. Removing one could give the published work more prominence.
- Expand the search description to include *Colchester theatre*, *women’s stories* and *Boudicca Productions*.
- Consider simplifying the fading Blog banner if “Blog”, “Stories” and “Notes” feels busier than the What’s On treatment.

**Assessment:** Distinctive and engaging. The book interaction is one of the site’s strongest visual features.

### A Seat at the Table

This is currently the strongest editorial page.

Strengths:

- Excellent opening composition and hierarchy.
- Comfortable reading width.
- Eleanor’s writing is preserved verbatim.
- Personal portrait and author section.
- Structured blog data for search engines.
- Strong relationship between image and title.

Recommended improvements:

- Add social-sharing metadata so the correct title, description and image appear on Facebook and messaging services.
- Standardise the stylesheet version with the rest of the site to reduce future caching inconsistencies.

**Assessment:** Polished, readable and publication-ready.

### Making Space

Holly’s article uses the established editorial structure without feeling like a duplicate of Eleanor’s page.

Strengths:

- Concise, memorable title.
- Effective proscenium/window cover treatment.
- Search-relevant tagline.
- Holly’s submitted text remains unchanged.
- Private location and device metadata were removed from the cover photograph.
- Structured blog data is included.

Recommended improvements:

- Retain the descriptive tagline because the title alone is broad.
- Add social-sharing metadata.
- Check the opening crop once more on smaller phones so the mast and railing do not compete with the sunset.

**Assessment:** Strong, personal and cohesive with the approved blog standard.

### Contact

The page is simple and direct. Its email address, enquiry types and social links are easy to find.

Recommended improvements:

- Replace the Coming Soon hero with **Contact** or **Let’s Talk**.
- Consider extending “Casting, press & collaborations welcome” to include general production enquiries.

The newsletter placement beneath the contact details is logical.

**Assessment:** Functional and clear, but its banner still feels temporary.

### Privacy Policy

The policy is clear and proportionate for the current website. It covers MailerLite, GitHub Pages, consent and international processing.

Recommended improvements:

- Add a canonical address and the standard favicon links.
- Restore Blog to the main navigation rather than replacing it with Newsletter.
- Standardise footer headings and link labels.
- Name the legal entity or data controller more precisely if the company becomes incorporated.

**Assessment:** Sensible content with inconsistent site navigation and footer treatment.

### Cookie Policy

The policy appropriately states that the site does not use analytics or advertising trackers and acknowledges MailerLite’s limited browser storage.

Recommended improvements:

- Periodically confirm that MailerLite remains the only service using browser storage.
- Standardise navigation, footer, favicon and canonical metadata with the main pages.

**Assessment:** Suitable for the current technical setup.

### Accessibility

The revised wording accurately explains that the website is live but has not received an independent audit.

Strengths:

- Mentions keyboard navigation, focus styles, responsive layouts and reduced motion.
- Provides a practical contact route.
- Avoids falsely claiming full WCAG compliance.

Recommended improvements:

- Formally test the custom checkbox navigation with screen readers.
- Standardise navigation, footer and metadata with the rest of the site.

**Assessment:** Honest and appropriately cautious.

### Website Terms

The terms are proportionate for an informational theatre-company website and clearly state that production information remains subject to confirmation.

Recommended improvements:

- Add dedicated ticketing, cancellation and refund terms if direct ticket sales are introduced.
- Standardise navigation, footer, favicon and canonical metadata with the main pages.

**Assessment:** Suitable for the company’s current stage.

## Site-wide technical findings

The audit found:

- Exactly one H1 on every page.
- No real missing internal pages or image assets.
- All visible images have alternative text.
- No duplicate element IDs.
- Structured `BlogPosting` data on both published articles.
- No Open Graph or other social-sharing metadata.
- No `sitemap.xml`, `robots.txt` or branded `404.html`.
- Different stylesheet version numbers across pages.
- Policy-page navigation omits Blog and differs from the main site.
- No obvious visitor-facing template or drafting language remains.

## Recommended priorities

1. Standardise navigation and footers across the four policy pages.
2. Replace the remaining Coming Soon hero banners on Who We Are, Our Mission and Contact with their actual page names.
3. Improve the Home, Mission and What’s On search titles and descriptions.
4. Add Open Graph metadata for Facebook and messaging previews.
5. Add `sitemap.xml`, `robots.txt` and a branded `404.html`.
6. Decide whether the What’s On page should show one confirmed production card rather than three implied projects.

## Conclusion

The website is already credible and visually distinctive. The remaining recommendations would make it feel more deliberate, consistent and discoverable without changing its established personality or visual direction.
