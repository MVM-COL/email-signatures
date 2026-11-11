# MVM email signatures

HTML email signatures for MVM employees (org `MVM-COL`, domain `mvialmeta.com`), plus the generator and install guide. Installed in Gmail web and iOS Mail.

Process rules (branches, commits, PRs, releases, labels, board) are global and live in the KB `CONVENTIONS.md` and `agent-skills/`. This file only documents this repo's domain. Repo knowledge (email-signature rules, project decisions) lives in `.claude/knowledge/`; query it with `kb search`.

## Board
Yes: GitHub Projects https://github.com/orgs/MVM-COL/projects/1 (Backlog → In progress → Done).

## Domain
- Today the domain is `mvialmeta.com`. A new domain may be bought later, with `mvialmeta.com` kept as secondary.
- In the generator the domain is a single variable (email, website, logo URL). Never hard-code it in several places.

## Hosting
- Target: **Vercel Pro** (same infrastructure as `MVM-COL/website`), serving the internal page at `intranet.mvialmeta.com/firma` (issue #8).
- GitHub Pages stays live until #8 replaces it.

## Image assets
- From v2 on, signature images are hosted on MVM's own domain under versioned paths (`assets/v2/...`) and are **never overwritten**: sent emails keep pointing at them. A new version gets a new path.
- v1 images live on imghippo and are left alone.
- Never base64 and never a third-party free host (see `.claude/knowledge/CONVENTIONS.md`).

## Releases
- release-please cuts releases from Conventional Commits (config: `release-please-config.json`).
- The current design is **v1.0.0**: tag `v1.0.0` on `main` before the first release-please run. The rebrand ships as **v2.0.0**.
- **MAJOR**: every employee must reinstall their signature. **MINOR**: a generator change that needs no reinstall. **PATCH**: fixes.
