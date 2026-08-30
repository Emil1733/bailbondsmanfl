# Bond Florida Website Audit Checklist

Use this checklist as a repeatable release gate. Every item should receive one of four statuses: `Pass`, `Fail`, `Needs evidence`, or `Not applicable`. Record the URL, tool output, screenshot, or test that proves the status.

## Audit order

1. Safety, security, privacy, and legal accuracy
2. Lead capture and business-critical user journeys
3. Crawlability, indexability, redirects, and canonicalization
4. Programmatic page quality and content accuracy
5. Local SEO, business identity, and trust signals
6. Structured data and social metadata
7. Performance, accessibility, and mobile usability
8. Internal linking, images, AI-search readiness, and off-site signals
9. Automated regression checks and ongoing monitoring

Do not move a failed critical item into the backlog. Fix it before lower-priority optimization.

## 1. Safety, security, privacy, and legal accuracy — Critical

- [ ] Production dependencies have no applicable critical or high-severity advisories.
- [ ] Secrets exist only in local or hosting environment variables and never in Git, browser bundles, logs, or error messages.
- [ ] Airtable token is restricted to `data.records:write` and only the lead-capture base.
- [ ] Contact endpoints validate types, lengths, consent, and request size on the server.
- [ ] Contact endpoints have durable production rate limiting; do not rely solely on in-memory limits at scale.
- [ ] Spam and automated submissions are monitored and blocked.
- [ ] Security headers are verified from the deployed response, not only from configuration.
- [ ] Content Security Policy avoids `unsafe-eval` and minimizes or removes `unsafe-inline`.
- [ ] The canonical-domain redirect uses an explicit allowed hostname rather than trusting the request Host header.
- [ ] HTTPS is enforced and HTTP, `www`, and alternate-host behavior is tested.
- [ ] No mixed-content HTTP links remain.
- [ ] Personally identifiable lead data has a retention and deletion policy.
- [ ] Privacy policy identifies Airtable or the relevant service-provider category and explains contact-data processing.
- [ ] Consent language accurately reflects phone and text-message use.
- [ ] No form asks for Social Security numbers, card data, bank details, immigration identifiers, or unnecessary case details.
- [ ] Bail pricing, premium, release-time, court-procedure, and legal claims are reviewed by a qualified Florida professional.
- [ ] License numbers, agency identity, addresses, and claims such as “licensed,” “guaranteed,” or “immediate” are accurate and verifiable.
- [ ] Emergency and legal disclaimers do not mislead visitors or imply an attorney-client relationship.

## 2. Lead capture and critical user journeys — Critical

Test on current Chrome, Safari, Firefox, iOS Safari, and Android Chrome.

- [ ] Every visible button and link performs the action its label promises.
- [ ] Contact form creates one Airtable record with every expected field.
- [ ] Contact form shows clear loading, success, validation, rate-limit, configuration, and network-error states.
- [ ] Duplicate clicks cannot create unintended duplicate records.
- [ ] Form works with keyboard-only navigation and screen readers.
- [ ] Consent is required and is stored with each lead.
- [ ] Phone links use a consistent E.164-compatible destination.
- [ ] “Get Approved” has a real destination or is removed.
- [ ] “View All Counties” has a real destination or is removed.
- [ ] Release-time “Unlock” either saves a properly consented lead and reveals real content or is replaced with an honest call-to-action.
- [ ] No field appears to submit successfully when nothing was stored.
- [ ] Airtable failure triggers a useful call fallback without exposing internal details.
- [ ] Airtable alerting or automation notifies the responsible person of new leads.
- [ ] Lead response time is measured from Airtable creation to first contact.
- [ ] Analytics records form starts, validation failures, successful submissions, phone clicks, and abandonment without capturing sensitive values.

## 3. Crawlability, indexability, redirects, and canonicals — Critical/High

- [ ] Run `squirrelscan audit https://bondflorida.com --format llm` and archive the dated report.
- [ ] Google Search Console has no unresolved manual actions or security issues.
- [ ] Important pages return `200`; removed pages return a genuine `404` or `410`.
- [ ] Redirects use the correct permanent/temporary status and contain no chains or loops.
- [ ] HTTP, HTTPS, `www`, non-`www`, trailing-slash, and case variants resolve to one canonical URL.
- [ ] Canonical tags are absolute, self-referencing where appropriate, and agree with redirects and sitemap URLs.
- [ ] `robots.txt` is reachable, syntactically valid, and does not block required assets or indexable pages.
- [ ] XML sitemap is reachable, valid, contains canonical `200` URLs only, and excludes redirects, errors, duplicate pages, and `noindex` pages.
- [ ] Sitemap `lastModified` values represent real material updates rather than every request/build time.
- [ ] Important pages are server-rendered or statically rendered with meaningful HTML.
- [ ] No accidental `noindex`, `nofollow`, robots-header, or canonical conflicts exist.
- [ ] Parameterized, preview, development, and Vercel-host pages cannot create duplicate indexed versions.
- [ ] Soft-404 and near-empty location pages are identified.
- [ ] Crawl depth for priority service and county pages is three clicks or fewer.

## 4. Programmatic SEO and content quality — Critical/High

The site generates more than 250 service/city combinations. This requires an explicit quality and indexing justification before broad indexation.

- [ ] Document why each indexed service/city page provides standalone value to a visitor.
- [ ] At least 60% of the main content on every indexable location page is genuinely unique and locally relevant.
- [ ] Pages are not merely city-name substitutions, doorway pages, or repetitive boilerplate.
- [ ] Each city page contains verified jail, law-enforcement, court, transport, release, and contact information.
- [ ] Every factual/legal claim has an authoritative source and a recorded review date.
- [ ] Thin or insufficiently differentiated combinations are consolidated, improved, or marked `noindex`.
- [ ] Duplicate city slugs cannot resolve to the wrong county or content entity.
- [ ] Titles, H1s, descriptions, canonicals, breadcrumbs, and body copy agree on location and service intent.
- [ ] No page targets an intent the business cannot actually serve.
- [ ] Content has a named reviewer or accountable organization, an updated date, and a correction process.
- [ ] Claims avoid unsupported superlatives such as fastest, guaranteed, cheapest, or immediate.
- [ ] Spelling, grammar, encoding, and template-substitution defects are eliminated.
- [ ] Content cannibalization is measured across county, city, jail, service, and service/city pages.
- [ ] Each priority page answers the visitor's main question early and provides a clear next action.
- [ ] Helpful content is visible by default; essential SEO content is not hidden solely in accordions.

## 5. Local SEO, identity, and trust — High

- [ ] Business name, address, phone number, hours, license, and service area are consistent across the site.
- [ ] Google Business Profile ownership, primary category, secondary categories, hours, phone, website, services, and service areas are accurate.
- [ ] The site does not present jail or government addresses as the business's own office.
- [ ] Each physical location claimed on the site is legitimate, staffed as represented, and eligible under platform rules.
- [ ] NAP consistency is checked across major directories, licensing records, maps, and social profiles.
- [ ] Reviews are authentic, recent, answered appropriately, and monitored.
- [ ] Local landing pages link to appropriate county/jail/service resources without deceptive location claims.
- [ ] Contact and About pages clearly identify the operating business and responsible license holder.
- [ ] Trust pages include accurate licensing, privacy, terms, complaint/contact, and correction information.
- [ ] LocalBusiness/BailBondBusiness structured data matches visible facts and Google Business Profile data.

## 6. Structured data and metadata — High

- [ ] Validate rendered JSON-LD with Schema.org and Google's Rich Results Test where applicable.
- [ ] Structured data contains only facts visibly supported on the page.
- [ ] Organization/business schema has stable `@id`, name, canonical URL, phone, logo, service area, and valid address data.
- [ ] Breadcrumb schema matches the visible breadcrumb trail and canonical URLs.
- [ ] Service schema correctly connects the service, provider, and served area.
- [ ] Do not use FAQ rich-result markup for this commercial bail-bond site; Google limits FAQ rich results primarily to authoritative government and health sites.
- [ ] Do not add deprecated HowTo markup.
- [ ] JSON-LD serialization safely escapes `<` to prevent script termination if data ever becomes externally managed.
- [ ] Every indexable page has a unique, accurate title and meta description.
- [ ] Open Graph and social-card URLs return `200`, use the correct MIME type, and meet platform dimensions.
- [ ] Replace all nonexistent `/og-image.jpg` references with the actual image asset or provide the referenced file.
- [ ] Social title, description, canonical URL, image, and business identity agree.
- [ ] Favicons, manifest icons, and application metadata resolve successfully.

## 7. Performance, Core Web Vitals, mobile, and accessibility — High

- [ ] Measure field and lab performance separately for homepage, contact, service, county, city, jail, and service/city templates.
- [ ] Core Web Vitals pass at the 75th percentile: LCP, INP, and CLS.
- [ ] Mobile performance is tested on a throttled mid-tier device and connection.
- [ ] Largest images are correctly sized, compressed, and served as WebP/AVIF where appropriate.
- [ ] Fonts do not block builds or rendering; consider self-hosting critical fonts.
- [ ] JavaScript and client-component usage is minimized on content-heavy pages.
- [ ] Map code and third-party tiles load only where needed and do not block primary content.
- [ ] No layout shift occurs from images, fonts, maps, headers, accordions, or floating call controls.
- [ ] Touch targets have adequate size and spacing.
- [ ] Text and controls meet WCAG AA color contrast.
- [ ] Every input has an accessible label, error association, and understandable instructions.
- [ ] Heading hierarchy is logical and contains one clear page H1.
- [ ] Focus indicators are visible; focus order is logical; no keyboard trap exists.
- [ ] Accordions expose `aria-expanded` and the controlled region relationship.
- [ ] Decorative images/icons are ignored by assistive technology; meaningful images have useful alt text.
- [ ] Zoom to 200% and narrow viewport layouts remain usable without horizontal scrolling.
- [ ] Reduced-motion preferences are respected.

## 8. Internal links, images, AI search, and off-site authority — Medium/High

- [ ] No internal or external broken links remain.
- [ ] Important pages receive contextual internal links with descriptive anchors.
- [ ] Orphan pages and excessive crawl-depth pages are eliminated.
- [ ] Related service/city links resolve to real, contextually valid pages.
- [ ] External jail, court, sheriff, and government links use HTTPS and are checked regularly.
- [ ] Image filenames, dimensions, alt text, and compression are appropriate.
- [ ] `llms.txt` and `llms-full.txt` contain current canonical, factual, non-duplicative information.
- [ ] AI crawlers receive indexable server-rendered content without special claims unsupported on the visible page.
- [ ] Key answers are concise, attributable, and easy to quote while remaining accurate.
- [ ] Authoritative citations support legal, procedural, jail, court, and licensing claims.
- [ ] Backlink profile is reviewed for spam, relevant local citations, legal/community authority, and competitor gaps.
- [ ] Brand mentions and incorrect business information are monitored.

## 9. Automation, testing, deployment, and monitoring — Critical/High

- [ ] `npm ci` succeeds from a clean checkout.
- [ ] Production build and TypeScript checks pass in CI.
- [ ] Lint passes or has an explicitly documented, shrinking baseline; no new lint errors are allowed.
- [ ] Unit tests cover server-side validation and Airtable error handling.
- [ ] Integration tests cover successful lead creation using a dedicated test table or mocked Airtable endpoint.
- [ ] End-to-end tests cover contact submission, phone links, mobile controls, and all critical CTAs.
- [ ] Automated link, sitemap, metadata, schema, and accessibility checks run before deployment.
- [ ] Preview deployments are protected from indexing.
- [ ] Production smoke tests run after deployment.
- [ ] Uptime monitoring covers homepage, contact page, sitemap, robots, and contact endpoint.
- [ ] Alerts exist for elevated `4xx/5xx`, Airtable failures, missing leads, and dependency advisories.
- [ ] Google Search Console tracks indexing, crawl errors, Core Web Vitals, queries, CTR, and manual actions.
- [ ] Analytics and Search Console data are reviewed on a defined weekly/monthly schedule.
- [ ] A rollback procedure is documented and tested.

## Current known remediation queue

1. Complete the Airtable-backed release-guide lead flow or remove the misleading “Unlock” control.
2. Fix all `/og-image.jpg` references that do not match the existing PNG asset.
3. Replace Host-derived canonical redirects with an explicit allowed production hostname.
4. Harden the Content Security Policy.
5. Repair the nonfunctional “Get Approved” and “View All Counties” controls.
6. Sanitize or eliminate raw HTML rendering boundaries.
7. Resolve the repository-wide lint baseline revealed by the Next.js upgrade.
8. Review and remediate remaining transitive dependency advisories without a blanket forced upgrade.
9. Audit all legal, licensing, office-location, pricing, and release-time claims.
10. Apply the programmatic page uniqueness gate before allowing all service/city pages to remain indexed.

## Audit record template

For each failed item, record:

- **ID:** Stable identifier, such as `SEC-01` or `SEO-14`
- **Status:** Fail / Needs evidence
- **Severity:** Critical / High / Medium / Low
- **Affected URLs or files:** Exact scope
- **Evidence:** Response, screenshot, crawl output, test, or code reference
- **Risk:** Concrete user, business, security, or search impact
- **Remediation:** Smallest complete fix
- **Owner:** Named person
- **Target date:** Required completion date
- **Verification:** Test that proves the fix
- **Regression coverage:** Automated check preventing recurrence
