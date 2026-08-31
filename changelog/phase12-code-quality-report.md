# Phase 12 — Code-quality gates

## Baseline

The repository-wide ESLint run initially reported 73 findings: 65 errors and 8 warnings. Most came from applying application TypeScript rules to historical CommonJS scripts; application findings included one unsafe Leaflet cast, unescaped JSX quotes, and unused imports.

## Remediation

- Added a narrow ESLint override for repository tooling under `scripts/` and the root `fetch_opportunities.js` utility. It permits legacy CommonJS imports and loosely typed external API payloads only in that tooling scope.
- Kept the full Next.js Core Web Vitals and TypeScript rules for application code.
- Removed every application warning and error, including the Leaflet `any` cast.
- Changed lint to fail on warnings with `eslint --max-warnings=0`.
- Added deterministic `typecheck`, crawl-audit, and aggregate `check` commands.
- Added a cross-platform crawl orchestrator that starts the completed production build, waits for readiness, runs claims, content, internal-link, and programmatic quality audits against it, writes disposable evidence under `.next/audit-output`, and stops the server. The audits no longer depend on an unrelated development server already running.
- Added GitHub Actions enforcement on pull requests and pushes to `master`.
- CI uses the lockfile via `npm ci`, audits production dependencies, then runs lint, typecheck, security/claims regression gates, and the production build.

## Required release commands

```powershell
npm ci
npm audit --omit=dev
npm run check
```

The release is complete only when all commands exit successfully with zero lint warnings and all 338 routes build.
