# Kingsley Lawani — Portfolio

Personal portfolio for **Kingsley Abiola Lawani** — AI / LLM Engineer, Data
Scientist, MLOps. Static site (HTML + CSS + vanilla JS), no build step, styled
after [glifo.cat](https://glifo.cat/) (Tokyo Night, code-editor aesthetic).

## Run locally

Serve over HTTP (projects load via `fetch`, so `file://` won't work):

```bash
npx serve .        # or: python3 -m http.server 8000
```

## Swapping projects in and out

All projects live in **`projects.json`** — the single source of truth. No HTML edits needed.

- **Hide a project** (swap out): set `"visible": false`.
- **Show it again** (swap in): set `"visible": true`.
- **Feature first**: set `"featured": true` to sort it to the front.
- **Reorder**: change array order (within the same featured group).
- **Add one**: copy a block, edit `title`, `role`, `tags`, `description`, `links`.

Tag colors: `blue`, `purple`, `green` (anything else renders neutral).
Links are optional: `{ "label": "GitHub", "url": "https://…" }`.

## Structure

```
index.html      · markup + all sections
styles.css      · Tokyo Night design system (colors in :root)
main.js         · tab nav, scroll-spy, renders projects from projects.json
projects.json   · project data (edit this to swap projects)
assets/         · favicon, icons
CONTEXT.md      · domain model & conventions
docs/agents/    · issue-tracker / triage / domain config
```

## Deploy

GitHub Pages: push to the repo, enable Pages on the default branch (root).
