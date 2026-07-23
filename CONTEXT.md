# Context — Kingsley Lawani Portfolio

A personal portfolio website for **Kingsley Abiola Lawani** (AI / LLM Engineer,
Data Scientist, MLOps). Static site, no framework. Visual language modeled on
[glifo.cat](https://glifo.cat/): a "code editor" window (Tokyo Night theme,
monospace headings, file-tab navigation, `// comment` section headers).

## Glossary

- **Project** — a portfolio work item rendered as a card in the projects section.
  Defined as data in `projects.json`; never hand-written in HTML.
- **Featured** — a project flagged to sort to the front of the grid (`featured: true`).
- **Visible** — whether a project renders at all (`visible: false` hides it without
  deleting it — this is how projects are "swapped out").
- **Section** — a top-level page area with its own file tab: about, projects,
  experience, contact.

## Stack

- Plain **HTML + CSS + vanilla JS**. No build step. Deploys to GitHub Pages.
- Projects render client-side from `projects.json` via `main.js`.

## Conventions

- Tokyo Night palette lives in CSS custom properties (`:root` in `styles.css`).
- To add/remove/reorder a project: edit `projects.json` only.
