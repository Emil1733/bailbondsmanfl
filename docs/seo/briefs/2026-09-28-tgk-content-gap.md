# TGK Correctional Center content and query gap brief

**Prepared:** September 28, 2026  
**Target URL:** `https://bondflorida.com/jail/tgk-correctional-center`  
**Baseline:** [`../baselines/2026-09-28-priority-3.md`](../baselines/2026-09-28-priority-3.md)  
**Status:** Implemented and locally verified; awaiting commit, push, and deployment

## Executive decision

Improve the existing URL rather than create another TGK page. The page already ranks close to page one for high-intent TGK searches, is indexed with the correct canonical, and has growing 28-day clicks. The opportunity is to improve relevance and click-through rate by replacing generic jail-directory copy with concise, verified answers about inmate search, release, phone numbers, address, and bond-status verification.

Preserve the URL, canonical, and H1. Do not create a competing page, change the slug, or promise release timing.

## Search Console baseline

Latest complete data ends September 26, 2026.

| Period | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| Sep 20–26 | 4 | 825 | 0.48% | 9.97 |
| Sep 13–19 | 6 | 1,086 | 0.55% | 9.79 |
| Aug 30–Sep 26 | 18 | 3,540 | 0.51% | 9.78 |
| Aug 2–29 | 13 | 2,858 | 0.45% | 9.79 |

Interpretation:

- The 28-day trend is positive: clicks rose 38.5% and impressions rose 23.9% while average position stayed essentially flat.
- The main constraint is CTR, not a major ranking collapse.
- Query-level totals are lower than page totals because Search Console withholds some low-volume and anonymized queries.

## Full visible query pattern

The latest 28-day query pull returned 89 visible queries, representing 12 clicks and 2,729 impressions.

### Highest-volume queries

| Query | Clicks | Impressions | CTR | Position |
|---|---:|---:|---:|---:|
| tgk jail | 4 | 1,269 | 0.32% | 10.62 |
| tgk | 6 | 578 | 1.04% | 9.24 |
| tgk miami | 0 | 67 | 0% | 9.48 |
| tgk correctional facility | 0 | 61 | 0% | 9.30 |
| tgk inmate | 0 | 61 | 0% | 9.41 |
| tgk miami jail | 0 | 52 | 0% | 9.42 |
| tgk inmate release phone number | 0 | 49 | 0% | 10.84 |
| tgk correctional | 0 | 48 | 0% | 8.98 |
| tgk bail bonds | 0 | 39 | 0% | 14.05 |
| tgk detention center | 0 | 33 | 0% | 9.64 |
| tgk address | 0 | 31 | 0% | 9.32 |
| tgk booking | 0 | 30 | 0% | 6.67 |
| tgk number | 0 | 27 | 0% | 10.96 |
| what is tgk jail | 0 | 23 | 0% | 8.57 |
| tgk inmate release search | 2 | 22 | 9.09% | 10.59 |
| tgk inmate search | 0 | 22 | 0% | 9.95 |

### Intent clusters to serve

1. **Facility/navigation:** “tgk,” “tgk jail,” “tgk miami,” and facility-name variants. This is the dominant impression group.
2. **Inmate search and release:** “tgk inmate,” “tgk inmate search,” “tgk inmate release search,” and release-phone variants. This group contains the clearest task intent and the strongest observed long-tail CTR.
3. **Phone and address:** facility number, release number, jail number, and address searches. The page must distinguish the facility number from general inmate/bond information.
4. **Booking and bond:** booking, bond, and bail-bond queries. These should be useful secondary sections, not aggressive sales copy.
5. **Definition and location:** “what is tgk jail,” “what is tgk in miami,” and Doral/Miami variants. The introduction should spell out the name, jurisdiction, and facility type immediately.
6. **Spanish-language variants:** “carcel tgk” and “carcel tgk miami.” These are currently small, so add a short natural clarification only if it helps users; do not keyword-stuff or create a thin translated page.

## Current-page gaps

The page currently contains approximately 266 words and relies almost entirely on the generic `VerifiedJailGuide` template.

Key gaps:

- It does not explain what TGK stands for or clearly state that it is a Miami-Dade Corrections and Rehabilitation facility.
- It links to the official inmate search but does not tell a visitor how to use it or which identifier to save.
- It does not answer the high-impression release-phone and inmate-release intents.
- It does not distinguish the TGK facility number from Miami-Dade's general inmate and bond-information number.
- It does not provide the county's verified release-window information or explain that actual release timing cannot be guaranteed.
- It lacks a compact, above-the-fold quick-facts block for users in a stressful situation.
- Most inbound links are template/sitewide references rather than intentional, context-rich links from related Miami-Dade pages.
- The current page uses `(786) 263-5550`. Miami-Dade's current official contact/visitation page lists `786-263-5341` for TGK. This must be corrected only after the implementation pass rechecks the live official source.

## Verified official facts and sources

Use the sources below as the factual authority. Paraphrase; do not copy county text.

- Miami-Dade inmate search: `https://www.miamidade.gov/Apps/mdcr/inmateSearch/`
- Miami-Dade inmate release information: `https://www.miamidade.gov/global/corrections/inmate-release.page`
- Miami-Dade inmate contact and visitation: `https://www.miamidade.gov/global/service.page?Mduid_service=ser1479236266010643`
- Miami-Dade corrections contact directory: `https://wwwx.miamidade.gov/global/corrections/contact.page`

Facts verified on September 28, 2026:

- Facility name: Turner Guilford Knight Correctional Center.
- Address: 7000 NW 41st Street, Miami, FL 33166.
- Official TGK facility number: 786-263-5341.
- General inmate and bond-information number: 786-263-7000.
- Miami-Dade states that bondable inmates may bond out at any time.
- Miami-Dade states that designated releases from TGK occur between 6 a.m. and 9 p.m.; this is not a guarantee that a particular person will be released within a specific time.

## Recommended search presentation

### Title

`TGK Jail Inmate Search, Release & Phone | Miami`

Why: keeps the dominant “TGK jail” phrase, adds the underserved release intent, preserves inmate-search relevance, and makes the Miami location explicit. Recheck the rendered pixel width before deployment.

### Meta description

`Search Miami-Dade custody records, find the TGK jail phone and address, and review official booking, bond and release information for TGK Miami.`

### H1

Keep: `Turner Guilford Knight (TGK) Correctional Center`

### Opening answer

The first paragraph should state, in plain language, that TGK is the Turner Guilford Knight Correctional Center operated by Miami-Dade Corrections and Rehabilitation, followed immediately by the official inmate-search action and the correct phone-number distinction.

## Recommended page structure

Target roughly 550–750 unique, useful words. Write for a stressed family member who needs the next verified action, not for a search crawler.

1. **Quick facts**
   - Full facility name and common abbreviation.
   - Address.
   - TGK facility phone: 786-263-5341.
   - Inmate/bond information: 786-263-7000.
   - Official inmate-search button.
   - “Last verified” date.

2. **How to search for someone at TGK**
   - Link to the official Miami-Dade inmate search.
   - Explain that spelling and identifying information should be checked carefully.
   - Advise the visitor to save the jail number and displayed charge/bond details for follow-up.
   - Use an ordinary numbered list. Do not add HowTo structured data.

3. **TGK release and bond information**
   - Explain the official ways a person may be released at a high level: bond, pretrial release, or court action.
   - State the county's designated 6 a.m.–9 p.m. TGK release window with attribution.
   - Clearly warn that processing times vary and the site cannot promise a release time.
   - Direct bond-status questions to the official search or 786-263-7000.

4. **TGK phone numbers and address**
   - Visually separate facility contact from inmate/bond information.
   - Make phone links tap-to-call on mobile.
   - Link to the official contact/visitation source.

5. **Information to gather before calling**
   - Full legal name and spelling.
   - Date of birth.
   - Jail number, if available.
   - Booking date and charge/bond details shown by the official search.

6. **Related Miami-Dade resources**
   - Miami-Dade county bail and jail guide.
   - Miami local guide.
   - Metro West Detention Center guide.
   - Online bail-bond process page.

## Internal-link plan

Add a small number of contextual links, using natural anchors rather than repeating an exact-match phrase sitewide:

- From the Miami-Dade county hub: `TGK inmate search and release information`.
- From the Miami city page: `Turner Guilford Knight (TGK) Correctional Center`.
- From the Metro West guide: a facility-comparison link when the user may be unsure where the person is housed.
- From the online bail-bond process page: `check Miami-Dade custody and bond information`.

Keep the existing local-resource links from TGK to the county, city, and online-service pages. Avoid adding TGK links to unrelated county or city pages merely to increase link count.

## Implementation approach

Avoid duplicating the whole shared template or injecting TGK-specific copy into every jail page.

Recommended code shape:

1. Add an optional React content slot to `VerifiedJailGuide`, rendered after the core lookup/contact section and before the generic timing disclaimer.
2. Supply a TGK-specific content block from `src/app/jail/tgk-correctional-center/page.tsx`.
3. Correct the TGK facility phone after one final official-source verification during implementation.
4. Add the four contextual inbound links in the relevant shared/data-driven page sources without changing unrelated pages.

This preserves the reusable component while allowing this high-opportunity page to carry genuinely local, task-specific information.

## Quality and compliance guardrails

- No guaranteed release time or legal outcome.
- No legal advice.
- No copied government wording.
- No unsupported claim that a person is housed at TGK.
- No HowTo schema.
- No FAQ schema; visible question-and-answer copy may be used only when it genuinely helps users.
- No keyword stuffing, doorway copy, or separate thin pages for minor query variants.
- Preserve one H1, the current URL, self-referencing canonical, and indexability.
- Keep official links clearly labeled and opening behavior accessible.

## Acceptance criteria

- Official TGK facility number and general inmate/bond number are correct and clearly distinguished.
- Title is approximately 40–60 characters and meta description approximately 120–160 characters after final editing.
- Page contains 550–750 words of unique, actionable content without padding.
- Official inmate-search, release, and contact links return HTTP 200.
- At least four relevant contextual internal links point to the TGK page.
- Only one H1 is rendered; heading order is logical.
- Canonical remains `https://bondflorida.com/jail/tgk-correctional-center` and robots remain indexable.
- `npm run check` passes.
- Production page is manually checked on mobile and desktop after deployment.

## Measurement plan

Treat deployment day as the intervention date and annotate it in the audit notes.

- Check indexing/rendering 2–3 days after deployment.
- Review directional 7-day data after 14 complete days to reduce partial-week noise.
- Make the main evaluation after 28 complete days, comparing with the baseline in this document and the shared Priority 3 baseline.
- Primary metrics: page CTR, clicks, impressions, and average position.
- Query watchlist: `tgk jail`, `tgk`, `tgk miami`, `tgk inmate`, `tgk inmate release phone number`, `tgk address`, `tgk booking`, and `tgk inmate search`.
- Success means CTR improves while impressions and average position remain stable or improve. Do not judge the change on a single day or on one low-volume query.

## Ordered implementation checklist

- [x] Recheck all official source facts and phone numbers on implementation day.
- [x] Update title and meta description.
- [x] Add the optional page-specific content slot to the shared guide.
- [x] Add TGK quick facts, search instructions, release/bond guidance, and phone distinction.
- [x] Add contextual inbound links from the four relevant pages.
- [x] Run link, metadata, heading, type, lint, and build checks.
- [ ] Review the production page on mobile and desktop.
- [ ] Record the deployment date beside the baseline.
- [ ] Request recrawl only after production verification.
- [ ] Run the 14-day directional and 28-day decision reviews.

## Implementation verification — September 28, 2026

- `npm run check`: passed.
- Lint and TypeScript: passed.
- Security scan: 52 source files scanned, zero failures.
- Production build: passed; 338 static pages generated.
- Crawl audit: 78 indexable routes, zero title/description violations, zero thin jail pages, zero orphan pages, and zero pages with fewer than two inbound links.
- Rendered TGK page: one H1, 11 H2 headings, 51-character title, 144-character meta description, and correct self-referencing canonical.
- Rendered TGK page contains both verified phone numbers, the official release and contact sources, and all four planned related-resource links.
- All four selected inbound pages rendered successfully with the intended TGK link and contextual anchor.
