# Bond Florida Audit Remediation Plan

This plan converts the August 30, 2026 live-site crawl into an implementation sequence. Work one phase at a time. Do not mark a phase complete until every acceptance test passes and the result is verified on the deployed production URL.

## Baseline

- Live audit date: August 30, 2026
- Pages crawled: 331
- Overall score: 67/100 (D)
- SEO: 65
- Performance: 73
- Security: 95
- Accessibility: 48
- Full report: `agents/squirrel_scan/2026-08-30-full-audit.md`
- Checklist: `AUDIT_CHECKLIST.md`

Important: the baseline crawl inspected the currently deployed site. It did not include the local Next.js upgrade or the new Airtable contact form.

## Working rules

1. Start every phase from a clean understanding of `git status`.
2. Preserve unrelated user changes.
3. Make the smallest complete change that solves the documented problem.
4. Run focused lint and TypeScript checks after each logical edit.
5. Run a production build before deployment.
6. Test a preview deployment before production.
7. Run production smoke tests immediately after deployment.
8. Re-crawl after each major phase and compare against the baseline.
9. Do not use `npm audit fix --force` or broad automated rewrites without reviewing every change.
10. Do not expand indexation until programmatic-page quality gates pass.

---

# Phase 0 — Establish a safe delivery pipeline

## Goal

Make the correct repository copy authoritative and ensure every later fix can be tested, reviewed, deployed, and rolled back safely.

## Steps

1. Decide which checkout is authoritative:
   - `C:\Users\tevat\bailbondsman`, or
   - `C:\Users\tevat\OneDrive\Documents\ChatGPT\New project 2\bailbondsmanfl`.
2. Copy or merge the approved dependency and Airtable work into the authoritative checkout.
3. Confirm the branch tracks `origin/master` and inspect all uncommitted changes.
4. Ensure `.env.local`, Airtable tokens, service credentials, and GSC credentials are ignored by Git.
5. Add the three Airtable variables to preview and production hosting environments.
6. Document the deployment command/platform and rollback procedure.
7. Create a preview deployment and prevent preview URLs from being indexed.
8. Record the currently deployed commit hash before changing production.

## Verification

```powershell
git status --short --branch
git diff --check
npm ci
npx tsc --noEmit
npm run build
```

## Done when

- One authoritative checkout is named and used.
- Secrets are absent from Git history and browser bundles.
- A preview build passes.
- Production can be rolled back to a known commit.

---

# Phase 1 — Deploy and verify completed security/contact work

## Goal

Put the already completed Next.js security upgrade and functioning Airtable form into production before interpreting contact-page crawl findings.

## Steps

1. Review the `next` and `eslint-config-next` upgrade to `16.3.3`.
2. Review `src/components/ContactForm.tsx`.
3. Review `src/app/api/contact/route.ts`.
4. Confirm the Airtable table contains exactly:
   - `Name`
   - `Phone`
   - `Defendant Name`
   - `Message`
   - `Consent`
   - `Source`
   - `Submitted At`
5. Confirm the Airtable token has only `data.records:write` access to the lead base.
6. Add durable serverless rate limiting or bot protection before significant paid traffic. The in-memory limiter is defense-in-depth, not a multi-instance production guarantee.
7. Deploy to preview.
8. Submit a clearly labeled test lead from the preview form.
9. Verify one Airtable record, every expected field, and the success state.
10. Test missing fields, invalid phone, missing consent, duplicate click, rate limit, Airtable failure, and network failure.
11. Deploy to production.
12. Submit one production test lead and remove it afterward.

## Done when

- Production reports Next.js `16.3.3`.
- A production contact submission creates exactly one complete Airtable record.
- Error states do not expose tokens, base IDs, table IDs, raw Airtable responses, or submitted personal data.
- The old mock form no longer appears in the rendered production HTML.

---

# Phase 2 — Fix broken URLs and sitemap integrity

## Goal

Remove the clearest crawl error: `/county/pasco/dade-city` returns `404` but appears in internal links and the sitemap.

## Steps

1. Inspect the Pasco county/city data in `src/lib/data.ts`.
2. Decide whether Dade City should have a valid page.
3. If the page should exist:
   - Correct the city slug/data relationship.
   - Ensure `generateStaticParams` emits the route.
   - Verify the page uses Pasco data, not another county's city data.
4. If the page should not exist:
   - Remove it from `/locations`.
   - Exclude it from the sitemap.
   - Redirect only when there is a genuinely equivalent destination; otherwise retain a real `404`.
5. Search the source for every reference to `dade-city`.
6. Check all generated sitemap URLs locally.
7. Deploy and verify the production URL.

## Verification

```powershell
rg -n "dade-city" src public
```

Verify:

- `/county/pasco/dade-city` returns `200` with correct content, or is absent everywhere.
- No sitemap URL returns `4xx`, `5xx`, or a redirect.
- No internal link points to a missing URL.

## Done when

- `links/broken-links` passes.
- `crawl/sitemap-4xx` passes.

---

# Phase 3 — Correct sitemap, indexability, and canonical behavior

## Goal

Make redirects, canonical tags, robots directives, and the XML sitemap agree.

## Steps

1. Decide whether `/privacy` and `/terms` should be indexed.
2. If they remain `noindex`, remove them from `src/app/sitemap.ts`.
3. If they should be indexed, remove the `noindex` directive and retain them in the sitemap.
4. Replace `new Date()` sitemap dates with actual content-update dates or omit `lastModified` when no reliable date exists.
5. Ensure sitemap dates change only after a meaningful page update.
6. Verify the sitemap contains canonical `200` URLs only.
7. Change the canonical-domain redirect so it targets the explicit production hostname instead of deriving the destination from the incoming Host header.
8. Test HTTP, HTTPS, `www`, non-`www`, trailing slash, query string, Vercel preview, and unknown Host behavior.
9. Ensure Open Graph URL and canonical URL use the same final URL.

## Done when

- `crawl/noindex-in-sitemap` passes.
- `crawl/indexability-conflicts` passes.
- `crawl/sitemap-lastmod-churn` is resolved or intentionally documented.
- No open redirect is possible through the Host header.
- Redirects, canonicals, sitemap entries, and `og:url` agree.

---

# Phase 4 — Repair every misleading or dead interaction

## Goal

Ensure every visible action does what it promises.

## Steps

1. Complete the release-time estimator “Unlock” flow:
   - Require explicit phone/text consent.
   - Submit to Airtable with a distinct source such as `release-time-estimator`.
   - Store the relevant county/jail/page context.
   - Reveal a real jail-specific guide only after successful submission.
   - Provide a phone-call fallback on error.
2. Decide the destination for “Get Approved”:
   - Contact form section,
   - Dedicated application flow, or
   - Phone call.
3. Replace “View All Counties” with a real link to `/locations`.
4. Audit every `<button>` and form in the repository.
5. Test keyboard activation and screen-reader names.
6. Add analytics events that record actions without recording submitted values.

## Verification

```powershell
rg -n "<button|<form" src -g "*.tsx"
```

## Done when

- No button lacks a handler, link destination, or form action.
- No interface claims to save, unlock, approve, search, or submit without performing that operation.

---

# Phase 5 — Build an accessibility foundation

## Goal

Raise accessibility from 48 by fixing shared components before individual pages.

## Steps

1. Give `BailFeeCalculator`'s number input a programmatic label and useful autocomplete/input mode.
2. Give `ReleaseTimeEstimator`'s time input a programmatic label linked with `htmlFor`/`id`.
3. Add `aria-expanded` and `aria-controls` to accordions.
4. Add a visible-on-focus “Skip to main content” link in the root layout.
5. Give the main content target a stable `id` and make sure there is one main landmark.
6. Correct heading hierarchy in shared templates before fixing one-off pages.
7. Standardize phone links so identical visible text has the same destination.
8. Test all text/control color combinations against WCAG AA.
9. Add appropriate autocomplete and enter-key hints to forms.
10. Verify focus styles, focus order, error announcements, disabled states, zoom, and reduced motion.
11. Run automated accessibility checks on every major template.
12. Perform manual keyboard and screen-reader smoke tests.

## Priority templates

1. Homepage
2. Contact
3. County
4. County/city
5. Service
6. Service/city
7. Jail
8. Locations/resources/warrant search

## Done when

- No form input lacks an accessible name or label.
- Every page has a working skip link.
- Heading-order failures are eliminated.
- Confirmed color contrast meets WCAG AA.
- Keyboard-only completion of the contact form succeeds.

---

# Phase 6 — Normalize social metadata and structured data

## Goal

Give every page one valid canonical/social identity and safe, accurate structured data.

## Steps

1. Standardize on the existing `/og-image.png`, or add the intended `.jpg`; do not reference both accidentally.
2. Replace every incorrect `/og-image.jpg` reference.
3. Confirm the asset returns `200`, correct MIME type, and appropriate dimensions.
4. Make every page's `openGraph.url` match its canonical.
5. Centralize common metadata helpers to prevent template drift.
6. Validate rendered JSON-LD, not merely source objects.
7. Add a safe JSON-LD serializer that escapes `<` as `\\u003c` before inserting JSON into a script tag.
8. Ensure business, phone, address, license, service area, and page URLs match visible content.
9. Remove FAQ rich-result markup from this commercial site unless a documented Google eligibility change justifies it. Keep visible FAQs for users.
10. Do not introduce HowTo schema.
11. Correct breadcrumb positions and ensure the visible trail matches JSON-LD.

## Done when

- Social-image and `og:url` divergence warnings pass.
- Structured data validators report no errors.
- No structured data contains unsupported or invisible claims.

---

# Phase 7 — Repair internal-link architecture

## Goal

Eliminate 120 orphan-like pages and 100 one-link pages without creating link spam.

## Steps

1. Export all routes into a URL inventory with page type, county, city, service, and indexability.
2. Create an expected link graph:
   - Homepage → core services and major counties.
   - Locations → county hubs.
   - County → valid city pages, jail guide, and locally applicable services.
   - City → parent county, jail, relevant services, and nearby legitimate cities.
   - Service → selected high-value local combinations.
   - Service/city → parent service, city/county hub, jail, and genuinely related services.
   - Jail → county/city hub and relevant service pages.
3. Add contextual links within useful copy, not merely footer/sidebar blocks.
4. Break `/locations` into a clearer hierarchy if necessary rather than exceeding 100 undifferentiated links.
5. Use descriptive anchors that reflect the destination.
6. Avoid sitewide linking to every programmatic URL.
7. Re-crawl and review inbound-link counts and click depth.

## Done when

- Priority pages are within three clicks of the homepage.
- No indexable page has fewer than two meaningful inbound links.
- `/locations` remains usable and does not function as a link dump.

---

# Phase 8 — Apply the programmatic SEO quality gate

## Goal

Ensure the 250+ service/city pages help users independently and do not resemble doorway or scaled low-value content.

This phase is a hard gate. Do not expand the matrix until it passes.

## Steps

1. Create an inventory of every service/city URL.
2. Group pages by template, service, county, and city.
3. Select a statistically useful sample from every group, including low-demand combinations.
4. Measure duplicate text and template-only substitutions.
5. Require at least 60% genuinely unique main content for every indexable location page.
6. Require verified local value, such as:
   - Correct arresting agency
   - Correct jail and address
   - Accurate transport/release process
   - Court and bond-hearing details
   - Locally relevant restrictions or procedures
   - Verified official resources
   - Meaningful nearby alternatives
7. Record an authoritative source and review date for factual/legal claims.
8. Remove unsupported legal, timing, pricing, and guarantee language.
9. Decide page by page:
   - Keep indexed,
   - Improve before indexing,
   - Consolidate and redirect,
   - Keep for users but `noindex`, or
   - Remove.
10. Prevent duplicate city slugs from resolving to the wrong county.
11. Add automated uniqueness and minimum-data completeness checks to generation scripts.
12. Re-submit only approved canonical URLs through the sitemap.

## Done when

- Every indexed combination has documented standalone user value.
- Every factual/legal claim has a source and review date.
- Thin, duplicate, inaccurate, or unjustified combinations are not indexed.
- Search Console shows no rising “Crawled - currently not indexed” pattern caused by low-value matrix pages.

---

# Phase 9 — Improve titles, descriptions, and content quality

## Goal

Fix metadata at the template/data level while reducing repetition and keyword stuffing.

## Steps

1. Export all rendered titles and descriptions.
2. Group violations by generating template.
3. Fix shared generators rather than editing hundreds of pages manually.
4. Keep titles descriptive and concise; avoid repeating Florida/county/city unnecessarily.
5. Write descriptions for users, not density targets.
6. Review the 322 keyword-overuse warnings manually; treat them as heuristics, not automatic violations.
7. Expand thin Contact, Privacy, and Terms pages only with useful, accurate information.
8. Add responsible organization/reviewer, reviewed date, sources, and correction/contact process where appropriate.
9. Run spelling, grammar, encoding, and template-substitution checks.
10. Re-crawl and sample actual SERP snippets in Search Console.

## Done when

- No template systematically creates overlong titles or descriptions.
- Priority pages have distinct search intent and do not cannibalize each other.
- Copy reads naturally and makes no unsupported claims.

---

# Phase 10 — Performance and Core Web Vitals

## Goal

Improve real-user LCP, INP, and CLS without optimizing solely for the crawler's aggregate-resource heuristics.

## Steps

1. Measure field data in Search Console/CrUX and lab data separately.
2. Test homepage, contact, county, city, service, service/city, jail, and locations templates.
3. Confirm whether the reported 15,506 KB is aggregate crawl weight or a repeatable per-page problem before changing code.
4. Inspect large JS/CSS bundles and unnecessary client components.
5. Lazy-load maps and non-critical interactive features.
6. Self-host critical fonts if external fetches threaten builds or rendering.
7. Size and compress raster images; use responsive modern formats.
8. Eliminate layout shifts from fonts, images, maps, headers, and floating controls.
9. Review HTML caching intentionally; do not add long caching blindly to dynamic or personalized responses.
10. Investigate the three routes with TTFB around 600 ms using repeated samples and hosting logs.

## Targets at the 75th percentile

- LCP: 2.5 seconds or less
- INP: 200 milliseconds or less
- CLS: 0.1 or less

## Done when

- All key page groups pass Core Web Vitals on mobile and desktop field data, or have a documented improvement plan while field data accumulates.
- No critical resource is unexpectedly large, duplicated, or blocking.

---

# Phase 11 — Harden security and privacy

## Goal

Resolve the remaining security warnings and prepare for increased lead traffic.

## Steps

1. Remove `unsafe-eval` from the production Content Security Policy.
2. Replace broad `unsafe-inline` script permission with nonces or hashes where feasible.
3. Test every third-party resource against the tightened policy.
4. Replace the Palm Beach Sheriff HTTP link with the correct official HTTPS destination.
5. Add production-grade bot protection appropriate for the contact form.
6. Add privacy disclosures for Airtable/subprocessors and lead-data retention.
7. Define who can access leads, how long they remain, and how deletion requests are handled.
8. Avoid storing unnecessary legal/case information.
9. Monitor dependency advisories and remediate remaining transitive issues based on actual runtime exposure.
10. Add `Permissions-Policy` and HSTS after verifying deployment behavior and subdomain requirements.

## Done when

- CSP no longer permits `unsafe-eval` in production.
- All public links use HTTPS.
- Contact abuse controls work across serverless instances.
- Privacy documentation matches actual Airtable processing.

---

# Phase 12 — Restore code-quality gates

## Goal

Make repository-wide linting reliable after the Next.js upgrade without hiding new defects.

## Steps

1. Capture the current lint output by rule and directory.
2. Separate application code from one-off scripts.
3. Decide whether scripts need a dedicated ESLint override for CommonJS and tooling-specific types.
4. Fix application errors first:
   - Unsafe `any`
   - Unescaped JSX content
   - Unused imports
   - Accessibility rules
5. Fix or appropriately configure script errors without disabling rules globally.
6. Add CI commands for clean install, typecheck, focused tests, lint, and build.
7. Add a rule that changed files may not introduce new warnings/errors.
8. Reduce the baseline to zero and remove temporary allowances.

## Done when

```powershell
npm ci
npx tsc --noEmit
npm run lint
npm run build
```

All four commands exit successfully from a clean checkout.

---

# Phase 13 — Monitoring and recurring audits

## Goal

Prevent regression after the initial cleanup.

## Steps

1. Configure Search Console for the canonical domain.
2. Monitor coverage, sitemap processing, manual actions, Core Web Vitals, queries, clicks, impressions, CTR, and position.
3. Add uptime checks for:
   - `/`
   - `/contact`
   - `/robots.txt`
   - `/sitemap.xml`
   - `/api/contact` using a safe non-writing health strategy
4. Alert on elevated `4xx/5xx`, Airtable failures, missing lead volume, and dependency advisories.
5. Run a conservative incremental crawl after every significant deployment.
6. Run a full crawl monthly and archive reports by date.
7. Review local-business identity, licensing, official links, and procedural claims quarterly.
8. Review programmatic pages for content decay and source freshness quarterly.

## Crawl command

```powershell
& "$env:APPDATA\npm\node_modules\squirrelscan\bin\squirrel.exe" audit https://bondflorida.com `
  --coverage full `
  --max-pages 400 `
  --concurrency 2 `
  --per-host 2 `
  --http `
  --offline `
  --no-publish `
  --format llm `
  --output "agents\squirrel_scan\YYYY-MM-DD-full-audit.md" `
  --yes
```

## Done when

- Every major deployment has a recorded smoke test.
- Monthly audit results improve or document accepted exceptions.
- Regressions create actionable alerts before they become widespread.

---

# Recommended execution batches

## Batch A — Immediate

1. Phase 0: delivery pipeline
2. Phase 1: deploy current security/contact work
3. Phase 2: broken Dade City route
4. Phase 3: sitemap/indexability/canonical consistency
5. Phase 4: dead and misleading controls

## Batch B — High impact

1. Phase 5: accessibility foundation
2. Phase 6: social metadata and structured data
3. Phase 7: internal-link architecture
4. Phase 8: programmatic quality gate

## Batch C — Optimization

1. Phase 9: metadata and content quality
2. Phase 10: performance and Core Web Vitals
3. Phase 11: deeper security/privacy hardening
4. Phase 12: code-quality gates

## Batch D — Continuous

1. Phase 13: monitoring and recurring audits

Do not begin with bulk title rewrites, backlink acquisition, or AI-search optimization. First make the site technically reliable, truthful, accessible, internally coherent, and safe to index at scale.
