# Phase 8 programmatic SEO quality gate

Review date: 2026-08-31

## Scope

- 8 service templates
- 32 city records
- 256 service/city combinations

## Measured baseline

Before remediation, all 256 combination pages were indexable and included in the XML sitemap.

- Pages meeting the 60% standalone-uniqueness threshold: 0
- Minimum measured uniqueness: 22.6%
- Median measured uniqueness: 44.0%
- Maximum measured uniqueness: 53.1%
- Pages with an authoritative source record: 0
- Pages with a visible review date: 0

The long statewide service article was repeated across every city for a service. City and county substitutions did not create sufficient standalone value, and some substitutions produced malformed wording.

## Decision

Every service/city combination is classified as `noindex-until-reviewed`.

- Pages remain available to users and internal navigation.
- Pages emit `noindex,follow` for standard crawlers and Googlebot.
- Pages are excluded from the XML sitemap.
- Self-referencing canonicals remain in place; combinations are not redirected or deleted.
- Duplicated statewide editorial sections and unsupported timing or release guarantees were removed from the combination template.

## Automated safeguards

The build now rejects:

- Duplicate city slugs
- Duplicate service/city combinations
- Missing city, police-agency, jail, or inmate-search fields
- Invalid or non-HTTPS official inmate-search URLs

The programmatic audit script records word count, nearest-page uniqueness, indexability, source status, review-date status, decision, and reason for all 256 pages in `phase8-programmatic-inventory.csv`.

## Requirements before re-indexing a page

A combination may be individually approved only when it has:

1. At least 60% genuinely unique main content.
2. Correct local arresting-agency and jail information.
3. A directly relevant authoritative source for every factual or legal claim.
4. A recorded review date.
5. No unsupported timing, pricing, eligibility, or release guarantee.
6. A documented reason the page serves a distinct user intent beyond its service and city parent pages.
7. Passing automated uniqueness and data-completeness checks.

Search Console coverage should be monitored after production deployment. Only individually approved canonical URLs should be restored to the sitemap.
