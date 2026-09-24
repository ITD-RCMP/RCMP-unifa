# RCMP Financial Aids — build roadmap

Goal: turn the remixed food-blog template into a student-facing financial aid site for
Royal College of Medicine Perak (RCMP). Students must be able to browse and compare
financial aids, and understand each aid's eligibility in plain language.

Decisions locked in:
- Institution: Royal College of Medicine Perak (RCMP)
- Aid listings: realistic placeholders for now, replaced later with the real list
- Student actions this round: browse + compare aids (no eligibility quiz, no applications yet)
- Look: Institutional Trust — navy #0B2545 / #13315C, gold #C9A227, paper #F7F9FC, slate #5B6B7F
- Type: Libre Baskerville headings, IBM Plex Sans body
- Layout: sidebar navigation

## Tasks

1. Design foundation — tokens, fonts, Tailwind config, page metadata
2. Aid content model + placeholder programme listings (src/data/aids.ts)
3. App shell — sidebar nav (desktop) + drawer (mobile), footer
4. Home page — what's available, where to start, how the process works
5. Browse aids page — search, filters, aid cards, side-by-side comparison table
6. Aid detail page — plain-language explanation, eligibility checklist, documents, steps, FAQ
7. How to apply page + FAQ page + About rewrite
8. Remove food-blog leftovers (article data, blog images, unused components)
9. Verify build + click through every page in the preview

## Blocked / waiting on

- Real aid programme details (names, amounts, eligibility, deadlines) from the college
- Real contact details for the aid office (currently placeholder text)
