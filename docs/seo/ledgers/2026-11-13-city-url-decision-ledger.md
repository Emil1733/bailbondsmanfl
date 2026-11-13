# City URL decision ledger

Date: 2026-11-13
Scope: the 32 canonical `/county/{county}/{city}` URLs generated from `src/lib/data.ts`
Machine-readable ledger: `2026-11-13-city-url-decision-ledger.csv`

## Outcome

This ledger replaces the earlier assumption that all city URLs are equally approved merely because they return `200` and appear in the sitemap.

| Decision | Count | Meaning |
| --- | ---: | --- |
| `keep` | 13 | The URL has a dedicated, source-based guide, unique metadata, a clear task, and a safe lead path. Keep indexed and monitor it. |
| `upgrade-next` | 0 | No unresolved city URL currently has enough fresh search demand to justify the next content investment. |
| `hold-and-monitor` | 19 | The URL remains reachable and indexable while backlink, lead-attribution, and coverage evidence is collected. Do not expand or noindex it from GSC performance alone. |
| `consolidate` | 0 | No city URL currently has enough evidence to justify redirecting, deleting, or noindexing it. |

No indexing directive, canonical, redirect, sitemap, or internal-link change was made during this reconciliation.

## Decision rules

### Keep

A city URL qualifies when it has:

1. A dedicated guide rather than only shared city-template copy.
2. Official custody, jail, law-enforcement, court, or bond sources appropriate to the page.
3. A distinct visitor task and clear next step.
4. Unique title, description, H1, and local body content.
5. No unsupported office, guaranteed-release, fixed-time, or licensing claim.

### Upgrade next

This is a research queue, not permission to publish generic expansion. A URL enters the queue when one or more of the following apply:

- it is a prominent depth-one city link;
- an approved service-city page creates a legitimate local topic cluster;
- a legacy GSC export shows some relevant visibility;
- the jurisdiction or custody path can support genuinely distinct information.

Before upgrading, capture fresh 28-day page and query data and check overlap with the county, jail, and service URLs.

### Hold and monitor

These URLs are not being declared high quality. They remain indexed because the current evidence is insufficient to choose between improvement and consolidation safely. A lack of recorded impressions in an old or partial export is not proof that a URL has no value.

### Consolidate only with evidence

Consolidation may be considered only when all of the following are true:

1. Two fresh, complete 28-day GSC windows show no meaningful city-specific demand or clicks.
2. The page has no backlinks, leads, or useful navigation role.
3. Its intent is fully satisfied by a stronger county, city, or jail URL.
4. A destination URL is selected and internal links, sitemap membership, canonical handling, and redirect behavior are documented.
5. The redirect/noindex choice is reviewed individually; it is never applied as a mass rule.

## Keep: verified custom guides

- `/county/palm-beach/west-palm-beach`
- `/county/hillsborough/tampa`
- `/county/orange/orlando`
- `/county/orange/winter-park`
- `/county/pinellas/st-petersburg`
- `/county/pinellas/clearwater`
- `/county/lee/fort-myers`
- `/county/lee/cape-coral`
- `/county/lee/bonita-springs`
- `/county/pasco/dade-city`
- `/county/indian-river/vero-beach`
- `/county/marion/ocala`
- `/county/nassau/yulee`

## Fresh GSC reconciliation

The read-only Search Console API was queried on 2026-11-13 for United States web-search data.

- Latest complete window: 2026-10-15 through 2026-11-11.
- Previous complete window: 2026-09-17 through 2026-10-14.
- Eighteen unresolved city URLs returned zero impressions in the latest window.
- Hialeah returned one impression at position 73 for `baiid in hialeah`, which is not reliable evidence of relevant demand.
- Lake City returned one impression in the previous window and none in the latest.
- None of the 19 unresolved city URLs received a click in either window.
- A property-level control query returned active data, confirming the city-level zeroes were not caused by an authentication or property-selection failure.

Result: all 19 unresolved city URLs are `hold-and-monitor`. Search performance alone is not sufficient to noindex or consolidate them. Backlinks, lead attribution, index coverage, and whether a stronger URL fully satisfies the same intent still need to be checked individually.

### Index inspection and internal-link follow-up

The read-only URL Inspection API and a fresh internal-link crawl added the following evidence:

- 5 URLs are indexed with matching Google-selected and user-declared canonicals.
- 6 URLs are discovered but currently not indexed.
- 8 URLs are unknown to Google.
- All 19 URLs have at least 10 internal sources and are at depth 1 or 2.

This rules out weak internal discovery as the primary explanation. Do not submit the 14 excluded/unknown URLs for indexing without first establishing distinct visitor or business value.

The existing Airtable payload cannot attribute leads to an originating city URL: it records only the contact form or estimator as the source. Search Console also does not expose its Links report through the API. Those missing inputs are documented in the held-city evidence review and have not been guessed.

Detailed evidence:

- `../gsc/2026-11-13-city-ledger-gsc.md`
- `../gsc/2026-11-13-city-ledger-gsc.csv`
- `../gsc/2026-11-13-held-city-index-inspection.md`
- `../gsc/2026-11-13-held-city-index-inspection.csv`
- `../gsc/2026-11-13-held-city-evidence-review.md`
- `../gsc/2026-11-13-current-internal-links.csv`

## Hold-and-monitor queue

- `/county/broward/pompano-beach`
- `/county/miami-dade/miami`
- `/county/miami-dade/hialeah`
- `/county/miami-dade/miami-beach`
- `/county/broward/fort-lauderdale`
- `/county/broward/hollywood`
- `/county/palm-beach/boca-raton`
- `/county/hillsborough/brandon`
- `/county/hillsborough/plant-city`
- `/county/orange/apopka`
- `/county/duval/jacksonville-beach`
- `/county/polk/lakeland`
- `/county/polk/winter-haven`
- `/county/pasco/new-port-richey`
- `/county/pasco/wesley-chapel`
- `/county/marion/belleview`
- `/county/brevard/cocoa`
- `/county/manatee/bradenton`
- `/county/columbia/lake-city`

## Required evidence for the next review

For every non-`keep` URL, record:

- latest complete 28 days and preceding 28 days;
- clicks, impressions, CTR, and average position;
- page-specific queries and whether they express city, county, jail, or service intent;
- conversions or assisted phone/form activity, when available;
- backlinks or meaningful external citations;
- competing Bond Florida URLs for the same queries;
- whether the city has a genuinely distinct arresting agency or visitor workflow;
- the proposed stronger destination if consolidation is recommended.

## Source limitations

- The structural crawl inventory is dated 2026-08-31 and predates the custom-guide batch.
- The locally saved Search Console samples are partial and older than this ledger.
- Historical visibility is used only to order research, never to justify removal.
- Fresh GSC data is required before changing indexability for any non-`keep` URL.

## Reconciliation query

Run this PowerShell check after editing the CSV:

```powershell
Import-Csv docs/seo/ledgers/2026-11-13-city-url-decision-ledger.csv |
  Group-Object decision |
  Sort-Object Name |
  Select-Object Name, Count
```

Expected total: 32 URLs.
