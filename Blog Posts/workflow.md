# Workflow / Handoff — Wholehearted Animal Removal

Last updated: 2026-08-31. This file exists so work can pick back up exactly where it left off if a session ends unexpectedly (power loss, etc.) — read this first before doing anything else on this project.

## Where things stand right now

**The site itself** is built and content-complete for a first launch: Home (hero, trust points, what-I-handle tiles, why-families-trust-me + real "Our Story" with your dad's real photo, where-I-serve with real county/town lists, what-to-expect, quick-quote form, contact), plus a Blog index page (empty, ready for posts).

**Hosting is live and working:**
- GitHub repo: `https://github.com/aaronsguttersllc-dot/wholehearted-animal-removal.git`
- Netlify site (renamed from its random default): **https://wholehearted-animal-removal.netlify.app** — this is the *test* link, not the real domain yet
- The Quick Quote form is wired to Netlify Forms (`data-netlify="true"`, honeypot spam field) and **confirmed working end-to-end**: form detection is enabled, test submissions succeed (HTTP 200), and email notifications are confirmed arriving correctly under the renamed site name.

## Domain cutover — DNS changes are DONE, just waiting on propagation/SSL

**Goal:** point `wholeheartedanimalremoval.com` at the new Netlify site instead of the current Squarespace site, without breaking email. **The actual DNS edit is complete** — what's left is just waiting for it to fully take effect.

**Email — confirmed untouched and safe** (Google Workspace, not Squarespace):
- MX record: `@` → `smtp.google.com` (priority 1) — verified still present
- 3 TXT records (site-verification, SPF, DKIM) — verified still present

**What was actually changed in Squarespace's DNS panel:**
- Deleted the whole "Squarespace Defaults" block in one action (this covered the 4 old A records, the old `www` CNAME to `ext-sq.squarespace.com`, and the Squarespace HTTPS record)
- Added under "Custom records": `A` record, `@` → `75.2.60.5` (confirmed against Netlify's live dashboard, not memorized)
- Added under "Custom records": `CNAME` record, `www` → `wholehearted-animal-removal.netlify.app` (caught and fixed a typo here — first attempt had a hyphen instead of a period before "netlify.app")
- Domain added in Netlify (Site configuration → Domain management), set to use external DNS, not Netlify DNS/nameservers

**Status as of end of 2026-08-31 session:**
- ✅ Root domain (`wholeheartedanimalremoval.com`) — DNS confirmed resolving to `75.2.60.5`, and `http://` (non-secure) already serves the correct new site
- ⏳ `https://` (secure/padlock version) — was failing with a certificate name mismatch, because Netlify hadn't finished issuing the SSL certificate yet. This is automatic on Netlify's end and just needs time. **Check this first when resuming** — try `https://wholeheartedanimalremoval.com` and see if it loads clean now.
- ⏳ `www.wholeheartedanimalremoval.com` — was still resolving to the old Squarespace value as of last check, but that record had a 4-hour cache time from before the fix, so it just needs more time to catch up everywhere. Re-check this too.

**Once both of those show fully resolved/working (site loads clean over `https://`, both with and without `www`):** decide what to do with the Squarespace subscription (cancel/downgrade) — only after confirming the switch is fully live and stable, not before.

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
- A rendering plant will not accept a euthanized animal — this is now written up in the first published blog post (see below)

## First blog post — published 2026-08-31

`src/blog/what-happens-after-a-horse-is-euthanized.html` — targets "fallen animal" (1,600/mo) plus several related dead-horse-disposal keywords. Real, verified content: Washington's actual burial regulation (WAC 16-25-025, confirmed directly against the state legislature's own site — not just a search summary), and the euthanasia/rendering-plant-refusal fact with real sourcing (Iowa State University Extension on pentobarbital, plus the FDA zero-tolerance/pet-food-residue history). Live on the Netlify test URL now; will be live on the real domain once the domain cutover (above) finishes. Marked as published in `keyword-list.md`.
