# Issue tracker: GitHub (with interim local staging)

Issues and PRDs for this repo live as **GitHub issues** on the portfolio repo
(under `@abiolaks`). Use the `gh` CLI for all operations. `gh` infers the repo
from `git remote -v` when run inside the clone.

> **Interim:** until the GitHub repo is created, stage tickets as local markdown
> under `.scratch/<feature-slug>/` (one file per ticket, numbered from `01`).
> Migrate them to GitHub issues once the remote exists.

## Conventions

- **Create an issue**: `gh issue create --title "..." --body "..."` (heredoc for multi-line bodies).
- **Read an issue**: `gh issue view <number> --comments`.
- **List issues**: `gh issue list --state open --json number,title,body,labels,comments`.
- **Comment**: `gh issue comment <number> --body "..."`.
- **Labels**: `gh issue edit <number> --add-label "..."` / `--remove-label "..."`.
- **Close**: `gh issue close <number> --comment "..."`.

## Pull requests as a triage surface

**PRs as a request surface: no.** _(Flip to `yes` later if external PRs should
enter the triage queue.)_

## When a skill says "publish to the issue tracker"

Create a GitHub issue (or, interim, a file under `.scratch/<feature-slug>/`).

## When a skill says "fetch the relevant ticket"

`gh issue view <number> --comments` (or read the referenced `.scratch/` file).
