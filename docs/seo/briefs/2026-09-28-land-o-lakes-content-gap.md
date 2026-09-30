# Land O' Lakes Detention Center content and query gap brief

**Prepared:** September 28, 2026  
**Target URL:** `https://bondflorida.com/jail/land-o-lakes-detention-center`  
**Baseline:** [`../baselines/2026-09-28-priority-3.md`](../baselines/2026-09-28-priority-3.md)  
**Status:** Implemented and locally verified; awaiting commit, push, and deployment

## Executive decision

Improve the existing indexed URL. Preserve its slug, canonical, and H1. The page already ranks in or near the top 10 for its two primary facility-name queries, so the work focuses on clearer task fulfillment and correcting the custody-search destination.

## Search Console baseline

| Period | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| Sep 20–26 | 0 | 18 | 0% | 11.72 |
| Sep 13–19 | 0 | 48 | 0% | 12.65 |
| Aug 30–Sep 26 | 3 | 482 | 0.62% | 12.37 |
| Aug 2–29 | 4 | 355 | 1.13% | 10.15 |

The full visible query pull returned 33 queries representing 2 clicks and 297 impressions. Search Console withholds some low-volume and anonymized queries.

## Leading visible queries

| Query | Clicks | Impressions | CTR | Position |
|---|---:|---:|---:|---:|
| land o lakes jail | 1 | 128 | 0.78% | 9.80 |
| land o lakes detention center | 1 | 66 | 1.52% | 8.45 |
| land o'lakes jail | 0 | 16 | 0% | 10.13 |
| land o lakes bail bonds | 0 | 11 | 0% | 21.18 |
| jail land o lakes | 0 | 10 | 0% | 8.30 |
| land o lakes pasco county jail | 0 | 7 | 0% | 22.86 |
| lando lakes jail | 0 | 6 | 0% | 10.17 |
| 20101 central blvd land o lakes fl 34637 | 0 | 2 | 0% | 11.50 |
| land o lakes jail phone number | 0 | 2 | 0% | 16.00 |
| land o' lakes jail mugshots | 0 | 2 | 0% | 9.00 |

## Critical accuracy findings

- The former “Official inmate search” button opened a Pasco Sheriff active-warrants search, not the Pasco Corrections current-custody portal.
- The page displayed `(813) 235-6111`; the county and Florida Department of State sources list `(813) 996-6982` as the main facility phone.
- The page mixed inmate and warrant-search language even though these tools answer different questions.

These items were corrected in the implementation.

## Verified official sources

- Pasco Corrections custody portal: `https://jailinfo.pascocorrections.net/jmc/`
- Pasco Corrections department: `https://www.pascocountyfl.gov/services/pasco_corrections/index.php`
- Pasco County inmate services: `https://www.pascocountyfl.gov/inmate_services/index.php`
- Pasco Sheriff active warrants: `https://pascosheriff.com/active-warrants/`

Facts verified September 28, 2026:

- Address: 20101 Central Boulevard, Land O' Lakes, FL 34637.
- Main facility phone: 813-996-6982.
- Pasco Corrections publishes a separate current-custody portal.
- The Pasco Sheriff active-warrants search is not proof of current jail custody.

## Implemented search presentation

- Title: `Land O' Lakes Jail Inmate Search, Phone & Address`
- Meta description: `Find the Land O' Lakes Detention Center address and phone, search Pasco County custody records, and review verified booking and release resources.`
- H1 preserved: `Land O' Lakes Detention Center`

## Implemented content

1. Facility address and corrected main phone in a quick-facts section.
2. Explanation that the facility is Pasco County's central detention facility.
3. Three-step current-custody search guidance.
4. Clear separation between inmate/custody and active-warrant searches.
5. Careful booking, bond, and release guidance without timing guarantees.
6. Official Corrections, inmate-services, custody-search, and warrants links.
7. Contextual links to Pasco County, Wesley Chapel, New Port Richey, and the online safety guide.

## Internal-link work

- Pasco county hub anchor: `Land O' Lakes jail inmate search, phone and address`.
- Pasco city pages: `Land O' Lakes jail inmate search`.
- Online bail-bond safety guide: Pasco custody link added.
- Existing footer and local-resource links preserved.

## Quality guardrails

- No release-time guarantee or legal advice.
- No claim that a warrant result proves custody.
- No HowTo or FAQ schema.
- No copied county wording.
- One H1, canonical, URL, and indexability preserved.

## Measurement plan

- Primary watchlist: `land o lakes jail`, `land o lakes detention center`, spelling variants, `jail land o lakes`, the full street address, phone-number queries, and `pasco county jail` variants.
- Verify crawl/indexing 2–3 days after deployment.
- Review directional movement after 14 complete days and make the first decision after 28 complete days.
- Initial target: move the 28-day average position from 12.37 into the top 10 while improving CTR above 0.62% and preserving top-10 visibility for the two primary facility queries.

## Checklist

- [x] Pull full visible query set.
- [x] Verify official sources, address, phone, and custody portal.
- [x] Correct the wrong search destination and phone.
- [x] Update title and meta description.
- [x] Add facility-specific search, booking, release, and warrant guidance.
- [x] Add contextual inbound links.
- [x] Run complete local verification suite.
- [x] Inspect rendered page and inbound links.
- [ ] Review production on mobile and desktop after deployment.
- [ ] Record deployment date and commit SHA.
- [ ] Request recrawl after production verification.

## Implementation verification — September 28, 2026

- `npm run check`: passed.
- Lint and TypeScript: passed.
- Security scan: 52 source files scanned, zero failures.
- Production build: passed; 338 static pages generated.
- Crawl audit: 78 indexable routes, zero title/description violations, zero thin jail pages, zero orphan pages, and zero pages with fewer than two inbound links.
- Rendered page: one H1, 11 H2 headings, 51-character decoded title, 151-character meta description, and correct self-referencing canonical.
- Rendered page includes the corrected phone, full address, current-custody portal, Pasco Corrections source, and separately labeled active-warrants link.
- Pasco county, Wesley Chapel, New Port Richey, and the online safety guide all render the intended contextual link and anchor.
