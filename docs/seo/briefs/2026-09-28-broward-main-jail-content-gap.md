# Broward County Main Jail content and query gap brief

**Prepared:** September 28, 2026  
**Target URL:** `https://bondflorida.com/jail/broward-county-main-jail`  
**Baseline:** [`../baselines/2026-09-28-priority-3.md`](../baselines/2026-09-28-priority-3.md)  
**Status:** Implemented and locally verified; awaiting commit, push, and deployment

## Executive decision

Improve the existing indexed URL. Do not create another Broward Main Jail page or change the slug. The page's strongest opportunity is to answer address and phone intent immediately, then route visitors to BSO's official arrest search and bond instructions.

## Search Console baseline

| Period | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| Sep 20–26 | 1 | 141 | 0.71% | 10.21 |
| Sep 13–19 | 3 | 251 | 1.20% | 9.92 |
| Aug 30–Sep 26 | 7 | 797 | 0.88% | 10.10 |
| Aug 2–29 | 7 | 441 | 1.59% | 8.38 |

Impressions grew 80.7% in the latest 28-day window, while clicks stayed flat and CTR fell. This is a snippet and task-relevance opportunity, with some ranking recovery also needed.

The complete visible query pull returned 52 queries representing 2 clicks and 380 impressions. Search Console withholds some low-volume and anonymized query data, so query totals are lower than page totals.

## Leading visible queries

| Query | Clicks | Impressions | CTR | Position |
|---|---:|---:|---:|---:|
| main jail | 0 | 37 | 0% | 7.46 |
| main jail phone number | 0 | 37 | 0% | 6.03 |
| broward county main jail phone number | 0 | 34 | 0% | 10.50 |
| broward main jail phone number | 0 | 33 | 0% | 10.70 |
| broward county main jail address | 0 | 32 | 0% | 9.97 |
| main jail broward | 0 | 28 | 0% | 11.11 |
| 555 se 1st ave fort lauderdale fl 33301 | 0 | 26 | 0% | 10.54 |
| 555 se 1st ave | 0 | 22 | 0% | 10.45 |
| fort lauderdale main jail | 0 | 12 | 0% | 13.17 |
| main jail fort lauderdale | 0 | 11 | 0% | 14.00 |

## Intent and content gaps

- Phone-number and address searches dominate the visible query set but were buried in the generic template.
- The former title mentioned phone but omitted address, despite strong address demand.
- The former page linked an old BSO arrest-search URL instead of the currently used official search application.
- The page did not identify the facility's official “Main Jail Bureau” name.
- It did not explain how to use the BSO arrest search or which identifiers to retain.
- It did not distinguish verified bond instructions from an estimated or guaranteed release time.
- Contextual inbound links used generic anchors rather than address, phone, or inmate-search language.

## Verified official sources

- BSO arrest search: `https://apps.sheriff.org/arrestsearch?d=y`
- BSO Main Jail Bureau: `https://www.sheriff.org/DOD/Pages/Facility.aspx?title=Main+Jail+Bureau`
- BSO bond instructions: `https://www.sheriff.org/DOD/Pages/Information/Bond.aspx`
- BSO Department of Detention: `https://www.sheriff.org/dod/`

Facts verified from BSO's indexed official pages on September 28, 2026:

- Facility: Broward County Main Jail / Main Jail Bureau.
- Address: 555 SE 1st Avenue, Fort Lauderdale, FL 33301.
- BSO information number for arrest procedures, bail, visitation and inmate contact: 954-831-5900.

The sheriff.org server was intermittently timing out during direct verification. The official URLs and indexed BSO result text were verified, but the implementation intentionally avoids detailed procedural claims or a specific release-time promise.

## Implemented search presentation

- Title: `Broward Main Jail Address, Phone & Inmate Search`
- Meta description: `Find the Broward County Main Jail address and phone, search official arrest records, and review verified booking, bond and release resources.`
- H1 preserved: `Broward County Main Jail`
- URL and canonical preserved.

## Implemented page structure

1. Address and phone quick facts above the detailed guidance.
2. Plain-language identification of the Main Jail Bureau and Fort Lauderdale location.
3. Three-step official arrest-search instructions.
4. BSO bond and release guidance without a release-time estimate.
5. Clear warning to verify facility assignment before traveling.
6. Official BSO arrest-search, facility, bond, and detention links.
7. Contextual links to Broward County, Fort Lauderdale, and the online safety guide.

## Internal-link work

- Broward county hub anchor changed to `Broward Main Jail address, phone and inmate search`.
- Broward city pages use `Broward Main Jail address and phone`.
- The online bail-bond safety guide now links to Broward custody information alongside Miami-Dade.
- Existing local-resource and footer links remain intact.

## Quality guardrails

- No guaranteed release time or legal outcome.
- No legal advice.
- No copied government wording.
- No HowTo or FAQ schema.
- No claim that a person is housed at Main Jail without official confirmation.
- One H1, self-referencing canonical, and indexability preserved.

## Measurement plan

- Primary metrics: page CTR, clicks, impressions, and average position.
- Query watchlist: `main jail phone number`, `broward county main jail phone number`, `broward county main jail address`, `555 se 1st ave`, `main jail broward`, `fort lauderdale main jail`, and `broward county jail inmate release search`.
- Check crawl/indexing 2–3 days after deployment, directional performance after 14 complete days, and make the first decision after 28 complete days.
- Initial target: return average position to 10 or better and raise 28-day CTR from 0.88% toward at least 1.2% without losing impression coverage.

## Implementation checklist

- [x] Pull the full visible GSC query set.
- [x] Verify official BSO sources and facts.
- [x] Update title and meta description.
- [x] Add address/phone quick facts and arrest-search instructions.
- [x] Add careful bond and release guidance.
- [x] Add contextual inbound links.
- [x] Run the full local verification suite.
- [x] Inspect rendered metadata, headings, links, and phone number.
- [ ] Review production on mobile and desktop after deployment.
- [ ] Record deployment date and commit SHA.
- [ ] Request recrawl after production verification.

## Implementation verification — September 28, 2026

- `npm run check`: passed.
- Lint and TypeScript: passed.
- Security scan: 52 source files scanned, zero failures.
- Production build: passed; 338 static pages generated.
- Crawl audit: 78 indexable routes, zero title/description violations, zero thin jail pages, zero orphan pages, and zero pages with fewer than two inbound links.
- Rendered Broward page: one H1, 11 H2 headings, 52-character encoded title, 141-character meta description, and correct self-referencing canonical.
- Rendered page includes the official phone, full address, BSO arrest search, BSO bond source, and Main Jail Bureau source.
- Broward county, Fort Lauderdale, Hollywood, and the online safety guide all render the intended contextual link and anchor.
