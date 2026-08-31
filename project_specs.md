# Project Specs: Wholehearted Animal Removal

Status: **DRAFT — needs Aaron's review and approval before any site content is built**, per CLAUDE.md Rule 2.

## What the app does and who uses it

A marketing/lead-generation website for Wholehearted Animal Removal, a real business based in Roy, WA that removes deceased animals — primarily large animals (horses, cattle, llamas, goats, sheep) and also household pets. Visitors are typically homeowners, farm/ranch owners, or animal owners who need a deceased animal removed, often on short notice and often while grieving. The site's job is to build trust quickly, make it easy to call/text/request a quote, and be found by the right local searches.

**Confirmed real facts** (pulled from the current live site, wholeheartedanimalremoval.com):
- Owner/operator: Aaron (same person who owns Aarons Elite Gutters)
- Business founded by Aaron's late father, James Wayne Carver; Aaron took over in 2023
- Phone: (253) 905-2220 (24/7), also reachable by text
- Email: Aaron@wholeheartedanimalremoval.com
- Primary base: Roy, WA
- Service area: Pierce and Thurston Counties, greater South Puget Sound region; statewide and out-of-state large-animal transport available
- Services: removal of deceased horses, cattle, llamas, goats, sheep, and household pets — both domestic and wild, large and small
- "Licensed, bonded, and insured"
- Current tagline: "Compassionate, Trusted Animal Removal"
- Current site pages: Home, Who I Am, Services, Quick Quote, Contact (plus a shopping cart feature — purpose unconfirmed, see open questions)
- No reviews/testimonials currently published on the live site

**Not yet confirmed — need Aaron's input before building:**
- Exact license/permit numbers (the gutters site cites real UBI and L&I numbers — does this business have equivalent real numbers to cite, e.g. any state agriculture/environmental disposal permit, DOT number for transport, rendering facility relationship)?
- Real pricing or pricing ranges (nothing is published currently — is pricing quote-only, or are there real typical ranges by animal size that can be shared honestly, similar to how the gutters site publishes real price ranges)?
- Any real reviews/testimonials to use (none currently live)?
- Exact service-area town list (the gutters site lists ~25 specific towns — does this business want the same specificity, or stay at the county/region level it currently uses)?
- What the "shopping cart" feature on the current site is for (pre-need/pre-paid arrangement? merchandise? unclear from the fetch)
- Whether James Wayne Carver / the family-legacy story should be featured on the new site (the current site already references it) — and if so, how much detail Aaron is comfortable sharing publicly
- Any certifications specific to large-animal handling/transport, biohazard/carcass disposal regulations (WA Department of Agriculture, Ecology, etc.) that should be mentioned honestly if real
- Photos: does Aaron have real job photos (trucks/equipment, not the animals themselves — need to think carefully about what's appropriate to show), or does this site need different image treatment than the gutters site (stock, or text-forward with no imagery of the work itself)?

## Tech stack

- Static HTML/CSS, no build step — same approach as the gutters project
- Hosting/deploy: **not yet decided.** Options: mirror the gutters project (GitHub repo + Netlify auto-deploy), or something else. Needs Aaron's decision, including whether/when this replaces the live builder-based site at the real domain.
- No live Semrush/API connection — same manual CSV-export workflow as the gutters project

## Pages and user flows (planned, pending approval)

Mirroring the gutters site's structure where it fits a service business:
- **Home** — hero, trust signals (licensed/bonded/insured, years serving the area), services overview, CTA
- **Services** — deceased animal removal by category (large livestock, household pets, wildlife), each possibly its own page if keyword research supports it (same hub-and-spoke approach as the gutters site)
- **About / Who I Am** — Aaron's story, the family legacy angle (pending Aaron's input on how much to share)
- **Contact** — phone/text/email, service area, form
- **Blog** (later, if keyword research supports it) — informational content, same pattern as the gutters site

No user accounts, no payments processed on-site (the current "shopping cart" feature needs clarification — see open questions above).

## Data models / where data lives

None beyond static site content — no database. Same as the gutters project.

## Third-party services

- Contact form handling: TBD (the gutters site — needs checking how contact.html actually submits, to decide whether to mirror that)
- Hosting: TBD (see Tech Stack)
- No Semrush API — manual export workflow only

## What "done" looks like for this task (the current ask: "start the project, reuse the workflow")

For *this* step specifically:
1. ✅ New project folder created (`Wholehearted Animal Removal/`)
2. ✅ `CLAUDE.md` adapted from the gutters project
3. ⬜ This `project_specs.md` reviewed and approved by Aaron
4. ⬜ Open questions above answered
5. ⬜ `Reference/` voice/tone files started (compassionate, not the gutters site's humor-forward voice — this is a sensitive-subject business)
6. ⬜ Decide hosting/deploy approach
7. ⬜ Only after all of the above: begin actual site build, keyword research (`Blog Posts/workflow.md` equivalent), etc.

**Nothing beyond this point should be built until Aaron reviews this file and answers the open questions above.**
