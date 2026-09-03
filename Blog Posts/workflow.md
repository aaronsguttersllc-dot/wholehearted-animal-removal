# Workflow / Handoff — Wholehearted Animal Removal

Last updated: 2026-09-03. This file exists so work can pick back up exactly where it left off if a session ends unexpectedly (power loss, etc.) — read this first before doing anything else on this project.

## Where things stand right now

**The site itself** is built and content-complete: Home (hero, trust points, what-I-handle tiles, why-families-trust-me + real "Our Story" with your dad's real photo, where-I-serve with real county/town lists, what-to-expect, quick-quote form, contact), plus a Blog index page with 6 published posts (see below).

**Hosting is fully live on the real domain — cutover is DONE, not just planned:**
- GitHub repo: `https://github.com/aaronsguttersllc-dot/wholehearted-animal-removal.git`
- Live at `https://wholeheartedanimalremoval.com/` — confirmed working over HTTPS, both with and without `www` (www correctly 301-redirects to the root)
- Email (Google Workspace MX + 3 TXT records) confirmed untouched and working throughout the cutover
- The Quick Quote form is wired to Netlify Forms and confirmed working end-to-end, including email notifications
- `robots.txt`, `sitemap.xml`, and `llms.txt` all added post-cutover (they didn't exist at first and were 404ing) — confirmed live
- A full Semrush Site Audit came back clean after these fixes — 0 errors, 0 warnings, only a couple of low-priority notices (unminified CSS/JS, blog index word count — both expected/low priority)
- Google Search Console: sitemap submitted, Request Indexing done on the homepage and sitemap.xml

**Squarespace subscription:** still Aaron's call on when to cancel — no urgency, just confirm everything's stable first (it is, as of this update).

## Other open items, not urgent

1. **Photos from the live Squarespace site** — all 5 saved locally to `live-site-photos/` in this project folder (kept out of the public GitHub repo via `.gitignore`, since 2 of them are Getty-licensed and their reuse rights outside Squarespace haven't been confirmed):
   - `aaron-me.jpg` — a real photo of Aaron (safe to use anywhere, no license question)
   - `hero-GettyImages-1070002344.jpg` and `footer-GettyImages-539105686.jpg` — Getty stock photos from Squarespace's built-in library. **Before using these on the new site, confirm with Squarespace (or check the plan's terms) whether the license covers use outside Squarespace itself.**
   - `services-unsplash-1.jpg` and `services-unsplash-2.jpg` — real Unsplash photos, free to use anywhere, no restriction.
2. **Pet Land cremation referral** — Aaron refers cremation requests to a business called "Pet Land." Exact business name/location not yet verified — confirm before publishing this referral anywhere on the site.
3. **Keyword research is done and saved** (`keyword-list.md` in the project root) — real Semrush exports processed (2 seeds: "Dead Animal Removal," "Dead horse removal"). Real opportunities identified, including some near-zero-difficulty terms. Two open decisions logged in that file:
   - Whether to build service pages or blog posts first (not yet decided)
   - Confirmed exclusions already applied: no rodent removal (not part of Aaron's real scope), no cremation as a service-page target (referral-only)
4. Raw Semrush CSV exports are kept in the project root but intentionally excluded from git (`.gitignore`) — they're large, working-only files.

## Real facts already confirmed and baked into the site (don't re-ask)

- Second-generation, family-owned, Aaron running it solo since 2023, father James Wayne Carver founded it
- Real service area: Pierce, King, Thurston, Lewis Counties plus Shelton/Elma/Castle Rock — full town list on the homepage
- Real stories: driven as far as Forks, WA; coordinated necropsy transport to University of Oregon
- Only ~2 real local competitors (one ~30 min away near Graham, WA; one in Eastern Washington) — informs a higher keyword-difficulty tolerance than typical
- A rendering plant will not accept a euthanized animal — written up in the first published blog post (see below)
- **Important regulatory distinction, confirmed 2026-09-01, don't mix these up in future content:** WAC 16-25-025 (5-acre minimum, 300 ft setbacks, 1,000 lb cap) is a **livestock-only** rule — it applies to horses/cattle, not pets. Household pets (dogs, cats) are governed by the far more permissive WAC 246-203-121 instead (3 ft cover, 100 ft water setback, 72-hour rule, no acreage minimum). Any future pet-focused content should cite 246-203-121, not 16-25-025.

## Blog posts — 6 published

1. **`src/blog/what-happens-after-a-horse-is-euthanized.html`** (2026-08-31) — targets "fallen animal" (1,600/mo). WAC 16-25-025 burial rules, plus the euthanasia/rendering-plant-refusal fact (Iowa State Extension, FDA pentobarbital residue history).
2. **`src/blog/who-picks-up-dead-animals.html`** (2026-09-01) — targets "who picks up dead animals" (390/mo). Real decision-tree: county roads (WSDOT/public works), pets at home (vets don't do home pickup; King County/Lewis County disposal options), livestock (animal control's real scope is dangerous/loose animals, not carcass removal), and wildlife (WDFW).
3. **`src/blog/cost-to-bury-a-horse.html`** (2026-09-01) — targets "how much does it cost to bury a horse" (40/mo, KD 2). Real excavation/equipment rental cost ranges (DOZR, BigRentz, Tacoma-area contractor rates), cost comparison against cremation/rendering/professional removal, and the real groundwater/pathogen-contamination research (ScienceDirect, WSU Extension) that most cost-guide content skips.
4. **`src/blog/dispose-of-a-dead-dog-or-cat.html`** (2026-09-01) — targets "how to dispose of a dead dog" / "how do you dispose of a dead cat" (390/320 per month). Correctly uses WAC 246-203-121 (not the livestock-only 16-25-025), real cremation cost ranges, and real King County/Lewis County disposal options.
5. **`src/blog/dead-deer-removal.html`** (2026-09-03) — targets "dead deer removal" / "dead deer removal near me" (480/390 per month). Wildlife-specific angle distinct from the other 5 posts: WAC 220-400-040 (the little-known requirement to call WDFW or WSP before removing wildlife found dead on your own property), WAC 246-203-121 disposal timeline/burial rules as applied to deer specifically, WSDOT roadkill carcass-removal statistics, roadkill salvage permit basics, and real WA CWD status (confirmed 2024, Spokane/Pend Oreille counties — Eastern WA, outside the service area, stated honestly).
6. **`src/blog/cost-to-cremate-a-horse.html`** (2026-09-03) — targets "how much does it cost to cremate a horse" / "how much to cremate a horse" (260/170 per month, near-zero KD). Real weight-based pricing from a verified Washington provider (PALSNW, Washougal — $1.75–$2.25/lb), private vs. communal cost breakdown, and honest comparison to burial/rendering/removal. Deliberately does not name "Pet Land" as a referral — that business's exact name/location is still unverified (see open item #2 below) — so the post stays factual without an unconfirmed claim.

All 6 cross-link to each other where relevant, added to `blog.html` and `sitemap.xml`, and marked Published in `keyword-list.md`.
