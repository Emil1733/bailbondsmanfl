# Phase 10 — Claims verification and factual-content rebuild

Date: 2026-08-31

## Scope

- Inventoried visible claims concerning licensing, coverage, release outcomes, timing, facility procedure, warrants, pricing, collateral, online security, payment plans, and federal immigration bonds.
- Verified legal and facility facts against primary government sources.
- Rebuilt high-risk templates instead of preserving cloned promotional copy.

## Baseline findings

- 664 broad high-risk phrase matches in source content.
- Eleven cloned jail pages contained unsupported release, payment, filing, timing, and licensing claims.
- Several cloned jail pages used incorrect Miami-Dade language for other counties.
- Verified factual errors included outdated or incorrect Hillsborough jail addresses, the Lee Core phone number, the TGK information phone number, the Duval jail information phone number, and the Pinellas city/ZIP presentation.
- Warrant content falsely claimed confidential database access and promised a custody-free “walk-through” outcome.
- The site described Bond Florida as a verified statewide provider despite having no verified public license or office credential in the repository.

## Primary sources used

- Florida Department of Financial Services bail-bond consumer overview and license search.
- Florida Legislature: Chapters 903 and 648; §§ 316.193 and 741.2901.
- Florida Department of Law Enforcement Wanted Persons Public Access System.
- ICE Online Detainee Locator and ICE bond information.
- Official corrections or sheriff sources for Miami-Dade, Broward, Hillsborough, Duval, Lee, Orange, Palm Beach, Pinellas, and Pasco.

## Implementation

- Replaced eleven cloned jail pages with one verified facility-guide component and explicit government source links.
- Corrected facility addresses and information phone numbers where official sources contradicted the old pages.
- Replaced all 16 county and 32 city pages with factual directory templates that do not promise transfer prevention or release timing.
- Rebuilt the homepage, locations, resources, and warrant-search pages around public-resource intent.
- Rewrote all eight service guides with cautious, sourced explanations and official links.
- Removed unverified service-provider structured data from information pages.
- Removed the release-time estimator from programmatic service/city pages.
- Removed four unused legacy components that contained timing, service, and pricing claims.
- Added a runtime safety boundary so legacy county FAQ and editorial fields cannot be exposed by public templates.
- Added `scripts/audit-high-risk-claims.mjs` to fail on promotional licensing, coverage, release, timing, database-access, security, and payment-plan claims.
- Updated thin-content thresholds by page purpose: directories are evaluated differently from long educational service guides, avoiding both padding and genuinely empty pages.

## Final gates

- Production build: 338 routes generated successfully.
- Approved sitemap: 73/73 pages returned successfully.
- High-risk claims gate: 0 violations.
- Titles: 0 length violations and 0 duplicates.
- Descriptions: 0 length violations and 0 duplicates.
- Content: 0 pages below their page-type minimum and 0 keyword-density warnings.
- Trust signals: 0 pages missing reviewer, date, or official-source labeling.
- Internal links: 0 orphan pages and 0 pages deeper than three clicks.

## Interpretation

Phase 10 deliberately shortens location and facility pages. A factual directory page should answer the user’s task and point to the responsible agency; it should not be padded to an arbitrary universal word count with repeated or speculative release copy. Educational service guides retain a higher 400-word minimum.
