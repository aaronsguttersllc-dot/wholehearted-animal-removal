# Workflow / Handoff — Wholehearted Animal Removal

Last updated: 2026-08-31. This file exists so work can pick back up exactly where it left off if a session ends unexpectedly (power loss, etc.) — read this first before doing anything else on this project.

## Where things stand right now

**The site itself** is built and content-complete for a first launch: Home (hero, trust points, what-I-handle tiles, why-families-trust-me + real "Our Story" with your dad's real photo, where-I-serve with real county/town lists, what-to-expect, quick-quote form, contact), plus a Blog index page (empty, ready for posts).

**Hosting is live and working:**
- GitHub repo: `https://github.com/aaronsguttersllc-dot/wholehearted-animal-removal.git`
- Netlify site (renamed from its random default): **https://wholehearted-animal-removal.netlify.app** — this is the *test* link, not the real domain yet
- The Quick Quote form is wired to Netlify Forms (`data-netlify="true"`, honeypot spam field) and **confirmed working end-to-end**: form detection is enabled, test submissions succeed (HTTP 200), and email notifications are confirmed arriving correctly under the renamed site name.

## We are mid-way through the domain cutover — this is the critical next step

**Goal:** point `wholeheartedanimalremoval.com` at the new Netlify site instead of the current Squarespace site, without breaking email.

**What we already know (confirmed via real screenshots from Aaron's Squarespace DNS panel):**
- Domain registrar: **Squarespace Domains** (DNS changes happen in Squarespace's own dashboard, not a separate registrar)
- Email is on **Google Workspace**, NOT Squarespace — confirmed via real DNS records:
  - MX record: `@` → `smtp.google.com` (priority 1)
  - TXT: `google-site-verification=...`
  - TXT: `v=spf1 include:_spf.google.com ~all`
  - TXT: `google._domainkey` (DKIM)
  - **→ These four records must NEVER be touched during the cutover.** Email is completely independent of the website hosting.
- The records that currently point the *website* to Squarespace (these are the ones that will change):
  - 4× A records, `@` → `198.185.159.144`, `198.185.159.145`, `198.49.23.144`, `198.49.23.145`
  - CNAME: `www` → `ext-sq.squarespace.com`
  - An HTTPS record (`@`, alpn/ipv4hint data) — Squarespace-specific, likely gets removed/replaced
  - A separate "Squarespace Domain Connect" CNAME (`_domainconnect` → `_domainconnect.domains.squarespace.com`) — harmless, unrelated to serving the site, safe to leave alone either way

**Next concrete step (not yet done):** In Netlify, go to Site configuration → Domain management → Add a domain → enter `wholeheartedanimalremoval.com` → choose to **keep the current DNS provider** (do NOT switch to "Netlify DNS" / do NOT delegate nameservers — that would touch far more than necessary and adds risk). Netlify will then display the *exact current* A record / CNAME values it wants used. **Get a screenshot of that Netlify screen before doing anything in Squarespace** — don't reuse old memorized IPs, confirm live with Netlify at the time of the actual switch.

**Once we have Netlify's exact values, the actual cutover is:** in Squarespace's DNS panel, replace the 4 Squarespace A records with Netlify's value(s), and repoint the `www` CNAME from `ext-sq.squarespace.com` to the Netlify value — while leaving the MX record and all 3 TXT records completely untouched. Test thoroughly right after (site loads, form works) before considering it done. DNS changes can take anywhere from a few minutes to a few hours to fully propagate everywhere, so don't panic if it's not instant.

**After the domain is confirmed working on the new site:** decide what to do with the Squarespace subscription (cancel/downgrade) — but only after confirming the switch is fully live and stable, not before.

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
- A rendering plant will not accept a euthanized animal (real differentiator fact, logged in `keyword-list.md` as a strong blog angle, not yet written)
