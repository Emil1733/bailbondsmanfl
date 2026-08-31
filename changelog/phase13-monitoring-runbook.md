# Phase 13 — Monitoring and recurring-audit runbook

## Automated coverage

### Production smoke monitor

GitHub Actions runs `.github/workflows/production-monitor.yml` twice per hour and on manual dispatch. It performs read-only checks for:

- homepage status, expected content, CSP, HSTS, Permissions Policy, and MIME-sniffing protection;
- contact page status and form presence;
- `robots.txt` status and canonical sitemap declaration;
- `sitemap.xml` status and canonical homepage entry;
- `/api/contact` configuration health using `GET`, which never writes an Airtable record.

Each request has a 15-second timeout and up to three attempts. A failure opens or updates a GitHub issue labeled `automated-monitoring` with a link to the failed run.

### Recurring production audit

GitHub Actions runs `.github/workflows/recurring-audit.yml` every Monday and on manual dispatch. It:

1. installs the exact lockfile with `npm ci`;
2. checks production dependencies with `npm audit --omit=dev`;
3. crawls production with concurrency limited to two requests;
4. checks high-risk claims, metadata/content quality, internal links, and the noindex programmatic-page gate;
5. retains CSV evidence as a GitHub Actions artifact for 90 days;
6. opens or updates the monitoring incident issue if any gate fails.

## Search Console review

Google Search Console requires account access and cannot be safely automated without adding a service-account credential. The owner should review the canonical `https://bondflorida.com/` property every Monday and record:

- manual actions and security issues;
- sitemap processing and indexed/not-indexed changes;
- crawl errors and unexpected canonical selections;
- mobile Core Web Vitals using LCP, INP, and CLS;
- clicks, impressions, CTR, and average position for the prior 7 and 28 days;
- query/page changes for jail, county, city, and service templates.

Escalate immediately for a manual action, security issue, sustained loss of indexed priority pages, or a material traffic drop without a known seasonal or tracking explanation.

## Lead and Airtable operations

- The health endpoint confirms required Airtable configuration exists but deliberately does not create a test lead or expose secrets.
- Review Vercel function logs for `Contact bot verification could not be completed`, Airtable configuration failures, Airtable HTTP failures, and Airtable connection failures.
- Configure Vercel log alerts for repeated `/api/contact` `5xx` responses. Treat any sustained `5xx` rate as a lead-capture incident.
- Airtable should notify the responsible person when a real record is created. A daily Airtable automation may flag an unexpectedly empty lead period, but zero legitimate leads is not automatically a system failure; compare it with form traffic and phone clicks before escalating.
- Keep the Airtable token restricted to record creation for the intended base/table. Do not grant read access merely to make synthetic monitoring easier.

## Quarterly factual review

Every three months:

1. verify the operating identity, phone number, license disclosures, and service-area language;
2. check every sheriff, jail, court, FDLE, DFS, and ICE link for HTTPS status and destination accuracy;
3. review bail, custody, court, pricing, and procedural statements against authoritative sources;
4. review all 256 programmatic pages; keep them `noindex` until each independently passes the uniqueness, source, and review-date gate;
5. update visible review dates only when the underlying content was actually checked.

## Incident response

1. Open the failed GitHub Actions run from the monitoring issue.
2. Identify whether the failure is DNS/TLS, hosting, content, headers, sitemap/robots, contact configuration, dependency, or crawl quality.
3. Re-run once manually to distinguish a transient network failure from a repeatable regression.
4. If repeatable, stop unrelated releases and create a narrowly scoped fix branch.
5. Verify the fix through pull-request CI and Vercel preview before merging.
6. Record cause, user impact, start/end time, remediation, and prevention in the issue before closing it.

## Rollback procedure

For a harmful production deployment:

1. identify the last known-good production commit and Vercel deployment;
2. prefer a GitHub revert pull request for an auditable code rollback;
3. if immediate recovery is required, promote the last known-good Vercel deployment, then follow with the Git revert so source and production agree;
4. run `npm run smoke:production` after recovery;
5. confirm homepage, contact, robots, sitemap, security headers, and contact health before closing the incident.

Never rewrite shared branch history or use `git reset --hard` as a production rollback.

## Accepted limitation

GitHub scheduled workflows are suitable for regression detection but are not a strict uptime SLA and may start late. If the site becomes revenue-critical, add an independent external uptime service and Vercel log drain/alerting so monitoring does not depend on the same GitHub control plane as deployments.
