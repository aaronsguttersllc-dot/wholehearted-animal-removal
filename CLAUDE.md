# Project Overview

A lightweight static website for Wholehearted Animal Removal, a real Roy, WA-based business removing deceased animals — mainly larger animals like horses, cattle, llamas, goats, and sheep, plus household pets. Founded by Aaron's late father James Wayne Carver; Aaron took over the business in 2023. Currently live at wholeheartedanimalremoval.com on a website builder (Squarespace/Wix/GoDaddy-type platform) — this project builds a new static site intended to eventually replace it.

This guide mirrors the working rules from the sibling project (`SEO--Aarons Elite Gutters`), adapted for this business.

---

# Development Rules

**Rule 1: Always read first**
Before taking any action, always read:
- `CLAUDE.md`
- `project_specs.md`

If either file doesn't exist, create it before doing anything else.

**Rule 2: Define before you build**
Before writing any code:
1. Create or update `project_specs.md` and define:
   - What the app does and who uses it
   - Tech stack (framework, database, auth, hosting)
   - Pages and user flows (public vs authenticated)
   - Data models and where data is stored
   - Third-party services being used
   - What "done" looks like for this task
2. Show the file
3. Wait for approval

No code should be written before this file is approved.

**Rule 3: Look before you create**
Always look at existing files before creating new ones. Don't start building until you understand what's being asked. If anything is unclear, ask before starting.

**Rule 4: Test before you respond**
After making any code changes, run the relevant tests or start the dev server to check for errors before responding. Never say "done" if the code is untested.

**Core Rule**
Do exactly what is asked. Nothing more, nothing less. If something is unclear, ask before starting.

---

# How to Respond

Always explain like you're talking to a 15 year old with no coding background.

For every response, include:
- **What I just did** — plain English, no jargon
- **What you need to do** — step by step, assume they've never seen this before
- **Why** — one sentence explaining what it does or why it matters
- **Next step** — one clear action
- **Errors** — if something went wrong, explain it simply and say exactly how to fix it

When a task involves external tools or technical elements a non-coder wouldn't know (GitHub, Netlify, DNS, domain transfer, etc.):
- Walk through exactly where to find what they need
- Describe what each setting does in one plain sentence
- Be as concise as possible. Do not ramble. Less is more

---

# Tech Stack

- Static HTML/CSS site, no build step (matches the gutters project's real setup)
- Hosting/deploy: TBD — likely GitHub + Netlify to match the sibling project, needs confirming
- No live Semrush/API connections — same manual-export workflow as the gutters project (see `Blog Posts/workflow.md` once created)

---

# Running the Project

Static HTML — open files in `src/` directly in a browser, or serve locally. No build/install step. Deploy process TBD (see Tech Stack).

---

# File Structure

- `/src` → All site files
- `Reference/` → Voice, tone, business facts, buyer profile — same pattern as the gutters project
- `Blog Posts/` → Content specs and workflow documentation
- `project_specs.md` → What this project does and what needs to be built
- `CLAUDE.md` → This file

Put new code in the same place as similar existing code. Don't create new top-level folders without asking first.

---

# How to Write Code

- Write simple, readable code — clarity matters more than cleverness
- Make one change at a time
- Don't change code that isn't related to the current task
- Don't over-engineer — build exactly what's needed, nothing more

If a big structural change is needed, explain why before making it.

---

# Secrets & Safety

- Never put API keys or passwords directly in the code
- Never commit `.env` to GitHub
- Ask before deleting or renaming any important files
- **This business handles a sensitive, emotional subject (deceased animals, grieving owners).** Tone matters more here than on the gutters site — see `Reference/voice.md` once built. No dark humor, no cutesy framing. Compassionate and direct, never clinical or cold either.

---

# Scope

Only build what is described in `project_specs.md`. If anything is unclear, ask before starting.

---

# Core Rule

Do exactly what is asked. Nothing more, nothing less. If something is unclear, ask before starting.

---

# Testing

Before marking any task as done:
- Run the relevant script or command and confirm it exits successfully
- Check stdout/stderr for errors, warnings, or unexpected output
- Trace the full execution path end-to-end — not just the entry point
- Verify that existing behaviour wasn't broken by the change
- For any page/content change: render it (headless Chrome screenshot or equivalent) and actually look at it before saying it's done

Never say "done" if:
- The workflow errors out or exits with a non-zero code
- Any step produces unexpected or unvalidated output
- The full execution path hasn't been traced end-to-end
- Edge cases haven't been considered

---

# Lessons carried over from the gutters project

- **Never hand-retype or "recall from memory" large pasted data (CSV exports, etc.) into a new file.** Write pasted content verbatim, or better, have Aaron save the export as a real file in the project folder and process it with real file tools (grep/awk), not by eyeballing it in chat. A large export pasted into chat is not safely processable by hand — this caused a real error in the sibling project.
- **`awk`'s regex engine does not support `\b` word boundaries reliably** — use `grep -E` for word-boundary-sensitive filtering, not `awk`.
- **Don't fabricate marketing stats.** If a commonly-used industry stat can't be traced to a real, checkable source, flag it and leave it out rather than use it anyway.
- **Real facts only — verify photo alt text, business facts, and claims against what's actually true**, not what would read well. Ask Aaron directly rather than guess when something is a real business fact only he knows (pricing, credentials, service scope, personal history).
- **Publish authorization is scoped per session/request** — don't assume a past "make everything live" instruction from the gutters project carries over here. Confirm publish authorization for this project separately.
