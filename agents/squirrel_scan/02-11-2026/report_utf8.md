# squirrelscan Audit Report

**URL:** https://bondflorida.com  
**Date:** 2026-02-11T19:07:59.447Z  
**Pages:** 27  
**Version:** 0.0.36

## Health Score

| Category | Score |
|----------|-------|
| **Overall** | **71/100 (C)** |
| Accessibility | 90/100 |
| Links | 69/100 |
| Core SEO | 91/100 |
| Performance | 96/100 |
| Content | 87/100 |
| Social Media | 81/100 |
| Security | 83/100 |
| Crawlability | 94/100 |
| E-E-A-T | 68/100 |
| Internationalization | 100/100 |
| Images | 100/100 |
| Legal Compliance | 100/100 |
| Mobile | 100/100 |
| Structured Data | 100/100 |
| URL Structure | 100/100 |

## Summary

- **Passed:** 2287
- **Warnings:** 176
- **Failed:** 42

---

## Issues

### Crawlability

*0 error(s), 3 warning(s)*

#### 4XX Pages in Sitemap **[WARN]**

`crawl/sitemap-4xx`

> Checks for sitemap URLs returning 4XX status codes

**Solution:**

Sitemaps should only list URLs that return 200 and are intended for indexing. Remove 4XX URLs from the sitemap or fix them by restoring the content or redirecting to a valid page. Keep sitemap entries clean to avoid wasting crawl budget.

| Check | Status | Message |
|-------|--------|---------|
| sitemap-4xx | ! warn | 8 sitemap URL(s) return 4XX |

<details><summary><strong>sitemap-4xx:</strong> 8 item(s)</summary>

- [https://bondflorida.com/county/miami-dade/hialeah](https://bondflorida.com/county/miami-dade/hialeah)
- [https://bondflorida.com/county/broward/pompano-beach](https://bondflorida.com/county/broward/pompano-beach)
- [https://bondflorida.com/county/hillsborough/tampa](https://bondflorida.com/county/hillsborough/tampa)
- [https://bondflorida.com/county/orange/orlando](https://bondflorida.com/county/orange/orlando)
- [https://bondflorida.com/county/orange/winter-park](https://bondflorida.com/county/orange/winter-park)
- [https://bondflorida.com/county/orange/apopka](https://bondflorida.com/county/orange/apopka)
- [https://bondflorida.com/county/duval/jacksonville-beach](https://bondflorida.com/county/duval/jacksonville-beach)
- [https://bondflorida.com/county/pinellas/st-petersburg](https://bondflorida.com/county/pinellas/st-petersburg)

</details>

---

#### Canonical Chain **[WARN]**

`crawl/canonical-chain`

> Checks for redirect chains on canonical URLs

**Solution:**

Canonical URLs should point directly to the final destination, not through redirects. Redirect chains waste crawl budget and dilute link equity. If your canonical URL redirects, update it to point to the final URL. Check that canonical URLs use the preferred protocol (https) and www/non-www version. Self-referencing canonicals should match the page URL exactly.

| Check | Status | Message |
|-------|--------|---------|
| page-redirect-chain | ! warn | Page redirects before content is served |

<details><summary><strong>page-redirect-chain:</strong> 1 page(s) affected</summary>

- [/](https://bondflorida.com/)

</details>

<details><summary><strong>page-redirect-chain:</strong> 1 item(s)</summary>

- [https://bondflorida.com ΓåÆ https://bondflorida.com/](https://bondflorida.com)

</details>

---

#### Sitemap Coverage **[WARN]**

`crawl/sitemap-coverage`

> Checks for indexable pages that are not in the sitemap

**Solution:**

Your sitemap should include all pages you want search engines to index. Pages that are crawlable and indexable (no noindex, not blocked by robots.txt) should generally be in your sitemap. Missing pages may not be discovered or indexed efficiently. Use a sitemap generator that automatically includes all indexable pages, or manually add important pages.

| Check | Status | Message |
|-------|--------|---------|
| sitemap-orphans | ! warn | 104 sitemap URL(s) were not crawled |

<details><summary><strong>sitemap-orphans:</strong> 104 item(s)</summary>

- [https://bondflorida.com/services/dui-bail-bonds/winter-park](https://bondflorida.com/services/dui-bail-bonds/winter-park)
- [https://bondflorida.com/services/dui-bail-bonds/apopka](https://bondflorida.com/services/dui-bail-bonds/apopka)
- [https://bondflorida.com/services/dui-bail-bonds/jacksonville-beach](https://bondflorida.com/services/dui-bail-bonds/jacksonville-beach)
- [https://bondflorida.com/services/dui-bail-bonds/st-petersburg](https://bondflorida.com/services/dui-bail-bonds/st-petersburg)
- [https://bondflorida.com/services/dui-bail-bonds/clearwater](https://bondflorida.com/services/dui-bail-bonds/clearwater)
- [https://bondflorida.com/services/dui-bail-bonds/lakeland](https://bondflorida.com/services/dui-bail-bonds/lakeland)
- [https://bondflorida.com/services/dui-bail-bonds/winter-haven](https://bondflorida.com/services/dui-bail-bonds/winter-haven)
- [https://bondflorida.com/services/dui-bail-bonds/new-port-richey](https://bondflorida.com/services/dui-bail-bonds/new-port-richey)
- [https://bondflorida.com/services/dui-bail-bonds/wesley-chapel](https://bondflorida.com/services/dui-bail-bonds/wesley-chapel)
- [https://bondflorida.com/services/domestic-violence-bail/miami](https://bondflorida.com/services/domestic-violence-bail/miami)
- [https://bondflorida.com/services/domestic-violence-bail/hialeah](https://bondflorida.com/services/domestic-violence-bail/hialeah)
- [https://bondflorida.com/services/domestic-violence-bail/miami-beach](https://bondflorida.com/services/domestic-violence-bail/miami-beach)
- [https://bondflorida.com/services/domestic-violence-bail/fort-lauderdale](https://bondflorida.com/services/domestic-violence-bail/fort-lauderdale)
- [https://bondflorida.com/services/domestic-violence-bail/hollywood](https://bondflorida.com/services/domestic-violence-bail/hollywood)
- [https://bondflorida.com/services/domestic-violence-bail/pompano-beach](https://bondflorida.com/services/domestic-violence-bail/pompano-beach)
- [https://bondflorida.com/services/domestic-violence-bail/tampa](https://bondflorida.com/services/domestic-violence-bail/tampa)
- [https://bondflorida.com/services/domestic-violence-bail/brandon](https://bondflorida.com/services/domestic-violence-bail/brandon)
- [https://bondflorida.com/services/domestic-violence-bail/plant-city](https://bondflorida.com/services/domestic-violence-bail/plant-city)
- [https://bondflorida.com/services/domestic-violence-bail/orlando](https://bondflorida.com/services/domestic-violence-bail/orlando)
- [https://bondflorida.com/services/domestic-violence-bail/winter-park](https://bondflorida.com/services/domestic-violence-bail/winter-park)
- [https://bondflorida.com/services/domestic-violence-bail/apopka](https://bondflorida.com/services/domestic-violence-bail/apopka)
- [https://bondflorida.com/services/domestic-violence-bail/jacksonville-beach](https://bondflorida.com/services/domestic-violence-bail/jacksonville-beach)
- [https://bondflorida.com/services/domestic-violence-bail/st-petersburg](https://bondflorida.com/services/domestic-violence-bail/st-petersburg)
- [https://bondflorida.com/services/domestic-violence-bail/clearwater](https://bondflorida.com/services/domestic-violence-bail/clearwater)
- [https://bondflorida.com/services/domestic-violence-bail/lakeland](https://bondflorida.com/services/domestic-violence-bail/lakeland)
- [https://bondflorida.com/services/domestic-violence-bail/winter-haven](https://bondflorida.com/services/domestic-violence-bail/winter-haven)
- [https://bondflorida.com/services/domestic-violence-bail/new-port-richey](https://bondflorida.com/services/domestic-violence-bail/new-port-richey)
- [https://bondflorida.com/services/domestic-violence-bail/wesley-chapel](https://bondflorida.com/services/domestic-violence-bail/wesley-chapel)
- [https://bondflorida.com/services/immigration-bail-bonds/miami](https://bondflorida.com/services/immigration-bail-bonds/miami)
- [https://bondflorida.com/services/immigration-bail-bonds/hialeah](https://bondflorida.com/services/immigration-bail-bonds/hialeah)
- [https://bondflorida.com/services/immigration-bail-bonds/miami-beach](https://bondflorida.com/services/immigration-bail-bonds/miami-beach)
- [https://bondflorida.com/services/immigration-bail-bonds/fort-lauderdale](https://bondflorida.com/services/immigration-bail-bonds/fort-lauderdale)
- [https://bondflorida.com/services/immigration-bail-bonds/hollywood](https://bondflorida.com/services/immigration-bail-bonds/hollywood)
- [https://bondflorida.com/services/immigration-bail-bonds/pompano-beach](https://bondflorida.com/services/immigration-bail-bonds/pompano-beach)
- [https://bondflorida.com/services/immigration-bail-bonds/tampa](https://bondflorida.com/services/immigration-bail-bonds/tampa)
- [https://bondflorida.com/services/immigration-bail-bonds/brandon](https://bondflorida.com/services/immigration-bail-bonds/brandon)
- [https://bondflorida.com/services/immigration-bail-bonds/plant-city](https://bondflorida.com/services/immigration-bail-bonds/plant-city)
- [https://bondflorida.com/services/immigration-bail-bonds/orlando](https://bondflorida.com/services/immigration-bail-bonds/orlando)
- [https://bondflorida.com/services/immigration-bail-bonds/winter-park](https://bondflorida.com/services/immigration-bail-bonds/winter-park)
- [https://bondflorida.com/services/immigration-bail-bonds/apopka](https://bondflorida.com/services/immigration-bail-bonds/apopka)
- [https://bondflorida.com/services/immigration-bail-bonds/jacksonville-beach](https://bondflorida.com/services/immigration-bail-bonds/jacksonville-beach)
- [https://bondflorida.com/services/immigration-bail-bonds/st-petersburg](https://bondflorida.com/services/immigration-bail-bonds/st-petersburg)
- [https://bondflorida.com/services/immigration-bail-bonds/clearwater](https://bondflorida.com/services/immigration-bail-bonds/clearwater)
- [https://bondflorida.com/services/immigration-bail-bonds/lakeland](https://bondflorida.com/services/immigration-bail-bonds/lakeland)
- [https://bondflorida.com/services/immigration-bail-bonds/winter-haven](https://bondflorida.com/services/immigration-bail-bonds/winter-haven)
- [https://bondflorida.com/services/immigration-bail-bonds/new-port-richey](https://bondflorida.com/services/immigration-bail-bonds/new-port-richey)
- [https://bondflorida.com/services/immigration-bail-bonds/wesley-chapel](https://bondflorida.com/services/immigration-bail-bonds/wesley-chapel)
- [https://bondflorida.com/services/traffic-warrant-bail/miami](https://bondflorida.com/services/traffic-warrant-bail/miami)
- [https://bondflorida.com/services/traffic-warrant-bail/hialeah](https://bondflorida.com/services/traffic-warrant-bail/hialeah)
- [https://bondflorida.com/services/traffic-warrant-bail/miami-beach](https://bondflorida.com/services/traffic-warrant-bail/miami-beach)
- [https://bondflorida.com/services/traffic-warrant-bail/fort-lauderdale](https://bondflorida.com/services/traffic-warrant-bail/fort-lauderdale)
- [https://bondflorida.com/services/traffic-warrant-bail/hollywood](https://bondflorida.com/services/traffic-warrant-bail/hollywood)
- [https://bondflorida.com/services/traffic-warrant-bail/pompano-beach](https://bondflorida.com/services/traffic-warrant-bail/pompano-beach)
- [https://bondflorida.com/services/traffic-warrant-bail/tampa](https://bondflorida.com/services/traffic-warrant-bail/tampa)
- [https://bondflorida.com/services/traffic-warrant-bail/brandon](https://bondflorida.com/services/traffic-warrant-bail/brandon)
- [https://bondflorida.com/services/traffic-warrant-bail/plant-city](https://bondflorida.com/services/traffic-warrant-bail/plant-city)
- [https://bondflorida.com/services/traffic-warrant-bail/orlando](https://bondflorida.com/services/traffic-warrant-bail/orlando)
- [https://bondflorida.com/services/traffic-warrant-bail/winter-park](https://bondflorida.com/services/traffic-warrant-bail/winter-park)
- [https://bondflorida.com/services/traffic-warrant-bail/apopka](https://bondflorida.com/services/traffic-warrant-bail/apopka)
- [https://bondflorida.com/services/traffic-warrant-bail/jacksonville-beach](https://bondflorida.com/services/traffic-warrant-bail/jacksonville-beach)
- [https://bondflorida.com/services/traffic-warrant-bail/st-petersburg](https://bondflorida.com/services/traffic-warrant-bail/st-petersburg)
- [https://bondflorida.com/services/traffic-warrant-bail/clearwater](https://bondflorida.com/services/traffic-warrant-bail/clearwater)
- [https://bondflorida.com/services/traffic-warrant-bail/lakeland](https://bondflorida.com/services/traffic-warrant-bail/lakeland)
- [https://bondflorida.com/services/traffic-warrant-bail/winter-haven](https://bondflorida.com/services/traffic-warrant-bail/winter-haven)
- [https://bondflorida.com/services/traffic-warrant-bail/new-port-richey](https://bondflorida.com/services/traffic-warrant-bail/new-port-richey)
- [https://bondflorida.com/services/traffic-warrant-bail/wesley-chapel](https://bondflorida.com/services/traffic-warrant-bail/wesley-chapel)
- [https://bondflorida.com/services/nebbia-hold-bail/miami](https://bondflorida.com/services/nebbia-hold-bail/miami)
- [https://bondflorida.com/services/nebbia-hold-bail/hialeah](https://bondflorida.com/services/nebbia-hold-bail/hialeah)
- [https://bondflorida.com/services/nebbia-hold-bail/miami-beach](https://bondflorida.com/services/nebbia-hold-bail/miami-beach)
- [https://bondflorida.com/services/nebbia-hold-bail/fort-lauderdale](https://bondflorida.com/services/nebbia-hold-bail/fort-lauderdale)
- [https://bondflorida.com/services/nebbia-hold-bail/hollywood](https://bondflorida.com/services/nebbia-hold-bail/hollywood)
- [https://bondflorida.com/services/nebbia-hold-bail/pompano-beach](https://bondflorida.com/services/nebbia-hold-bail/pompano-beach)
- [https://bondflorida.com/services/nebbia-hold-bail/tampa](https://bondflorida.com/services/nebbia-hold-bail/tampa)
- [https://bondflorida.com/services/nebbia-hold-bail/brandon](https://bondflorida.com/services/nebbia-hold-bail/brandon)
- [https://bondflorida.com/services/nebbia-hold-bail/plant-city](https://bondflorida.com/services/nebbia-hold-bail/plant-city)
- [https://bondflorida.com/services/nebbia-hold-bail/orlando](https://bondflorida.com/services/nebbia-hold-bail/orlando)
- [https://bondflorida.com/services/nebbia-hold-bail/winter-park](https://bondflorida.com/services/nebbia-hold-bail/winter-park)
- [https://bondflorida.com/services/nebbia-hold-bail/apopka](https://bondflorida.com/services/nebbia-hold-bail/apopka)
- [https://bondflorida.com/services/nebbia-hold-bail/jacksonville-beach](https://bondflorida.com/services/nebbia-hold-bail/jacksonville-beach)
- [https://bondflorida.com/services/nebbia-hold-bail/st-petersburg](https://bondflorida.com/services/nebbia-hold-bail/st-petersburg)
- [https://bondflorida.com/services/nebbia-hold-bail/clearwater](https://bondflorida.com/services/nebbia-hold-bail/clearwater)
- [https://bondflorida.com/services/nebbia-hold-bail/lakeland](https://bondflorida.com/services/nebbia-hold-bail/lakeland)
- [https://bondflorida.com/services/nebbia-hold-bail/winter-haven](https://bondflorida.com/services/nebbia-hold-bail/winter-haven)
- [https://bondflorida.com/services/nebbia-hold-bail/new-port-richey](https://bondflorida.com/services/nebbia-hold-bail/new-port-richey)
- [https://bondflorida.com/services/nebbia-hold-bail/wesley-chapel](https://bondflorida.com/services/nebbia-hold-bail/wesley-chapel)
- [https://bondflorida.com/county/miami-dade/miami](https://bondflorida.com/county/miami-dade/miami)
- [https://bondflorida.com/county/miami-dade/hialeah](https://bondflorida.com/county/miami-dade/hialeah)
- [https://bondflorida.com/county/miami-dade/miami-beach](https://bondflorida.com/county/miami-dade/miami-beach)
- [https://bondflorida.com/county/broward/fort-lauderdale](https://bondflorida.com/county/broward/fort-lauderdale)
- [https://bondflorida.com/county/broward/hollywood](https://bondflorida.com/county/broward/hollywood)
- [https://bondflorida.com/county/broward/pompano-beach](https://bondflorida.com/county/broward/pompano-beach)
- [https://bondflorida.com/county/hillsborough/tampa](https://bondflorida.com/county/hillsborough/tampa)
- [https://bondflorida.com/county/hillsborough/brandon](https://bondflorida.com/county/hillsborough/brandon)
- [https://bondflorida.com/county/hillsborough/plant-city](https://bondflorida.com/county/hillsborough/plant-city)
- [https://bondflorida.com/county/orange/orlando](https://bondflorida.com/county/orange/orlando)
- [https://bondflorida.com/county/orange/winter-park](https://bondflorida.com/county/orange/winter-park)
- [https://bondflorida.com/county/orange/apopka](https://bondflorida.com/county/orange/apopka)
- [https://bondflorida.com/county/duval/jacksonville-beach](https://bondflorida.com/county/duval/jacksonville-beach)
- [https://bondflorida.com/county/pinellas/st-petersburg](https://bondflorida.com/county/pinellas/st-petersburg)
- [https://bondflorida.com/county/pinellas/clearwater](https://bondflorida.com/county/pinellas/clearwater)
- [https://bondflorida.com/county/polk/lakeland](https://bondflorida.com/county/polk/lakeland)
- [https://bondflorida.com/county/polk/winter-haven](https://bondflorida.com/county/polk/winter-haven)
- [https://bondflorida.com/county/pasco/new-port-richey](https://bondflorida.com/county/pasco/new-port-richey)
- [https://bondflorida.com/county/pasco/wesley-chapel](https://bondflorida.com/county/pasco/wesley-chapel)

</details>

---

### Core SEO

*0 error(s), 35 warning(s)*

#### Meta Title **[ERROR]**

`core/meta-title`

> Validates page title presence and length

**Solution:**

Every page needs a unique, descriptive title tag between 30-60 characters. Titles appear in browser tabs, search results, and social shares. Write titles that accurately describe the page content while including your primary keyword near the beginning. If your title is too short, add more descriptive context. If too long, prioritize the most important information first and trim secondary details. Avoid keyword stuffing or duplicate titles across pages.

| Check | Status | Message |
|-------|--------|---------|
| meta-title | ! warn | Title too long (82 chars, max 60) |
| meta-title | ! warn | Title too long (88 chars, max 60) |
| meta-title | ! warn | Title too long (92 chars, max 60) |
| meta-title | ! warn | Title too long (85 chars, max 60) |
| meta-title | ! warn | Title too long (81 chars, max 60) |
| meta-title | ! warn | Title too long (87 chars, max 60) |
| meta-title | ! warn | Title too long (80 chars, max 60) |
| meta-title | ! warn | Title too long (83 chars, max 60) |
| meta-title | ! warn | Title too long (78 chars, max 60) |
| meta-title | ! warn | Title too long (79 chars, max 60) |
| meta-title | ! warn | Title too long (70 chars, max 60) |
| meta-title | ! warn | Title too long (72 chars, max 60) |
| meta-title | ! warn | Title too long (76 chars, max 60) |
| meta-title | ! warn | Title too long (74 chars, max 60) |
| meta-title | ! warn | Title too long (75 chars, max 60) |

<details><summary><strong>meta-title:</strong> 2 page(s) affected</summary>

- [/services/dui-bail-bonds](https://bondflorida.com/services/dui-bail-bonds)
- [/county/broward](https://bondflorida.com/county/broward)

</details>

<details><summary><strong>meta-title:</strong> 1 page(s) affected</summary>

- [/services/domestic-violence-bail](https://bondflorida.com/services/domestic-violence-bail)

</details>

<details><summary><strong>meta-title:</strong> 1 page(s) affected</summary>

- [/services/immigration-bail-bonds](https://bondflorida.com/services/immigration-bail-bonds)

</details>

<details><summary><strong>meta-title:</strong> 4 page(s) affected</summary>

- [/services/traffic-warrant-bail](https://bondflorida.com/services/traffic-warrant-bail)
- [/services/nebbia-hold-bail](https://bondflorida.com/services/nebbia-hold-bail)
- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)

</details>

<details><summary><strong>meta-title:</strong> 1 page(s) affected</summary>

- [/county/orange](https://bondflorida.com/county/orange)

</details>

<details><summary><strong>meta-title:</strong> 1 page(s) affected</summary>

- [/county/hillsborough](https://bondflorida.com/county/hillsborough)

</details>

<details><summary><strong>meta-title:</strong> 3 page(s) affected</summary>

- [/county/duval](https://bondflorida.com/county/duval)
- [/county/pasco](https://bondflorida.com/county/pasco)
- [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)

</details>

<details><summary><strong>meta-title:</strong> 1 page(s) affected</summary>

- [/county/pinellas](https://bondflorida.com/county/pinellas)

</details>

<details><summary><strong>meta-title:</strong> 2 page(s) affected</summary>

- [/county/lee](https://bondflorida.com/county/lee)
- [/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)

</details>

<details><summary><strong>meta-title:</strong> 1 page(s) affected</summary>

- [/county/polk](https://bondflorida.com/county/polk)

</details>

<details><summary><strong>meta-title:</strong> 2 page(s) affected</summary>

- [/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)

</details>

<details><summary><strong>meta-title:</strong> 3 page(s) affected</summary>

- [/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)

</details>

<details><summary><strong>meta-title:</strong> 1 page(s) affected</summary>

- [/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)

</details>

<details><summary><strong>meta-title:</strong> 1 page(s) affected</summary>

- [/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)

</details>

<details><summary><strong>meta-title:</strong> 1 page(s) affected</summary>

- [/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)

</details>

---

#### Meta Description **[ERROR]**

`core/meta-description`

> Validates meta description presence and length

**Solution:**

Meta descriptions should be 120-160 characters and provide a compelling summary of the page. While not a direct ranking factor, good descriptions improve click-through rates from search results. Write unique descriptions for each page that accurately preview the content. Include a call-to-action when appropriate. If missing, search engines will auto-generate snippets which may not represent your page optimally.

| Check | Status | Message |
|-------|--------|---------|
| meta-description | ! warn | Description too long (192 chars, max 160) |
| meta-description | ! warn | Description too long (186 chars, max 160) |
| meta-description | ! warn | Description too long (187 chars, max 160) |
| meta-description | ! warn | Description too long (203 chars, max 160) |
| meta-description | ! warn | Description too long (172 chars, max 160) |
| meta-description | ! warn | Description too long (184 chars, max 160) |
| meta-description | ! warn | Description too long (194 chars, max 160) |
| meta-description | ! warn | Description too long (189 chars, max 160) |

<details><summary><strong>meta-description:</strong> 1 page(s) affected</summary>

- [/county/miami-dade](https://bondflorida.com/county/miami-dade)

</details>

<details><summary><strong>meta-description:</strong> 1 page(s) affected</summary>

- [/county/broward](https://bondflorida.com/county/broward)

</details>

<details><summary><strong>meta-description:</strong> 1 page(s) affected</summary>

- [/county/palm-beach](https://bondflorida.com/county/palm-beach)

</details>

<details><summary><strong>meta-description:</strong> 2 page(s) affected</summary>

- [/county/orange](https://bondflorida.com/county/orange)
- [/county/duval](https://bondflorida.com/county/duval)

</details>

<details><summary><strong>meta-description:</strong> 1 page(s) affected</summary>

- [/county/hillsborough](https://bondflorida.com/county/hillsborough)

</details>

<details><summary><strong>meta-description:</strong> 2 page(s) affected</summary>

- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/lee](https://bondflorida.com/county/lee)

</details>

<details><summary><strong>meta-description:</strong> 1 page(s) affected</summary>

- [/county/polk](https://bondflorida.com/county/polk)

</details>

<details><summary><strong>meta-description:</strong> 1 page(s) affected</summary>

- [/county/pasco](https://bondflorida.com/county/pasco)

</details>

---

### Security

*0 error(s), 13 warning(s)*

#### Content Security Policy **[WARN]**

`security/csp`

> Checks for Content-Security-Policy header and validates directives

**Solution:**

CSP prevents XSS attacks by restricting which resources can load. Start with a report-only policy to identify issues. Key directives: default-src 'self', script-src (avoid 'unsafe-inline'), img-src, style-src, frame-ancestors. Use nonces or hashes instead of 'unsafe-inline' for scripts. Test thoroughly as strict CSP can break functionality.

| Check | Status | Message |
|-------|--------|---------|
| csp-missing | ! warn | No Content-Security-Policy header |

---

#### X-Frame-Options **[WARN]**

`security/x-frame-options`

> Checks for clickjacking protection header

**Solution:**

X-Frame-Options prevents your site from being embedded in iframes, protecting against clickjacking attacks. Set: X-Frame-Options: DENY (no framing) or SAMEORIGIN (same origin only). For modern browsers, CSP frame-ancestors is preferred: Content-Security-Policy: frame-ancestors 'self'. Use both for maximum compatibility.

| Check | Status | Message |
|-------|--------|---------|
| x-frame-options | ! warn | No clickjacking protection |

---

#### External Link Security **[WARN]**

`security/new-tab`

> Checks external target=_blank links for noopener (security) and noreferrer (privacy)

**Solution:**

External links with target="_blank" should include rel="noopener noreferrer". noopener prevents the opened page from accessing window.opener (tab-nabbing attacks). noreferrer prevents leaking the referrer URL to the destination site (privacy). Modern browsers default noopener for target="_blank", but explicit attributes ensure compatibility.

| Check | Status | Message |
|-------|--------|---------|
| noopener | ! warn | 1 external link(s) missing rel="noopener" |

<details><summary><strong>noopener:</strong> 10 page(s) affected</summary>

- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/broward](https://bondflorida.com/county/broward)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/county/orange](https://bondflorida.com/county/orange)
- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/duval](https://bondflorida.com/county/duval)
- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/lee](https://bondflorida.com/county/lee)
- [/county/polk](https://bondflorida.com/county/polk)
- [/county/pasco](https://bondflorida.com/county/pasco)

</details>

<details><summary><strong>noopener:</strong> 10 item(s)</summary>

- [https://www.miamidade.gov/Apps/mdcr/InmateSearch/#/](https://www.miamidade.gov/Apps/mdcr/InmateSearch/#/)
- [https://www.sheriff.org/LE/Pages/ArrestSearch.aspx](https://www.sheriff.org/LE/Pages/ArrestSearch.aspx)
- [https://www.pbso.org/arrestss/](https://www.pbso.org/arrestss/)
- [https://netapps.ocfl.net/BestJail/](https://netapps.ocfl.net/BestJail/)
- [https://www.teamhcso.com](https://www.teamhcso.com)
- [https://inmatesearch.jaxsheriff.org/](https://inmatesearch.jaxsheriff.org/)
- [https://www.pcsoweb.com/whos-in-jail](https://www.pcsoweb.com/whos-in-jail)
- [https://www.sheriffleefl.org](https://www.sheriffleefl.org)
- [https://www.polksheriff.org](https://www.polksheriff.org)
- [https://www.pascosheriff.com](https://www.pascosheriff.com)

</details>

---

#### HTTP to HTTPS Redirect **[WARN]**

`security/http-to-https`

> Checks whether HTTP URLs redirect to HTTPS

**Solution:**

Ensure all HTTP URLs redirect to their HTTPS equivalents using permanent (301) redirects. This consolidates link equity and avoids mixed indexing. Configure your server to enforce HTTPS globally and verify that both the homepage and key internal URLs redirect correctly. WARNING: This rule makes external HTTP requests to probe redirect behavior.

| Check | Status | Message |
|-------|--------|---------|
| http-to-https | ! warn | 20 HTTP URL(s) redirect to HTTPS |

<details><summary><strong>http-to-https:</strong> 20 item(s)</summary>

- [http://bondflorida.com/ ΓåÆ https://bondflorida.com/ (308)](http://bondflorida.com/)
- [http://bondflorida.com/services/dui-bail-bonds ΓåÆ https://bondflorida.com/services/dui-bail-bonds (308)](http://bondflorida.com/services/dui-bail-bonds)
- [http://bondflorida.com/services/domestic-violence-bail ΓåÆ https://bondflorida.com/services/domestic-violence-bail (308)](http://bondflorida.com/services/domestic-violence-bail)
- [http://bondflorida.com/services/immigration-bail-bonds ΓåÆ https://bondflorida.com/services/immigration-bail-bonds (308)](http://bondflorida.com/services/immigration-bail-bonds)
- [http://bondflorida.com/services/traffic-warrant-bail ΓåÆ https://bondflorida.com/services/traffic-warrant-bail (308)](http://bondflorida.com/services/traffic-warrant-bail)
- [http://bondflorida.com/services/nebbia-hold-bail ΓåÆ https://bondflorida.com/services/nebbia-hold-bail (308)](http://bondflorida.com/services/nebbia-hold-bail)
- [http://bondflorida.com/county/miami-dade ΓåÆ https://bondflorida.com/county/miami-dade (308)](http://bondflorida.com/county/miami-dade)
- [http://bondflorida.com/county/broward ΓåÆ https://bondflorida.com/county/broward (308)](http://bondflorida.com/county/broward)
- [http://bondflorida.com/county/palm-beach ΓåÆ https://bondflorida.com/county/palm-beach (308)](http://bondflorida.com/county/palm-beach)
- [http://bondflorida.com/county/orange ΓåÆ https://bondflorida.com/county/orange (308)](http://bondflorida.com/county/orange)
- [http://bondflorida.com/county/hillsborough ΓåÆ https://bondflorida.com/county/hillsborough (308)](http://bondflorida.com/county/hillsborough)
- [http://bondflorida.com/county/duval ΓåÆ https://bondflorida.com/county/duval (308)](http://bondflorida.com/county/duval)
- [http://bondflorida.com/county/pinellas ΓåÆ https://bondflorida.com/county/pinellas (308)](http://bondflorida.com/county/pinellas)
- [http://bondflorida.com/county/lee ΓåÆ https://bondflorida.com/county/lee (308)](http://bondflorida.com/county/lee)
- [http://bondflorida.com/county/polk ΓåÆ https://bondflorida.com/county/polk (308)](http://bondflorida.com/county/polk)
- [http://bondflorida.com/county/pasco ΓåÆ https://bondflorida.com/county/pasco (308)](http://bondflorida.com/county/pasco)
- [http://bondflorida.com/services/dui-bail-bonds/miami ΓåÆ https://bondflorida.com/services/dui-bail-bonds/miami (308)](http://bondflorida.com/services/dui-bail-bonds/miami)
- [http://bondflorida.com/services/dui-bail-bonds/hialeah ΓåÆ https://bondflorida.com/services/dui-bail-bonds/hialeah (308)](http://bondflorida.com/services/dui-bail-bonds/hialeah)
- [http://bondflorida.com/services/dui-bail-bonds/miami-beach ΓåÆ https://bondflorida.com/services/dui-bail-bonds/miami-beach (308)](http://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [http://bondflorida.com/services/dui-bail-bonds/fort-lauderdale ΓåÆ https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale (308)](http://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)

</details>

---

### Links

*1 error(s), 3 warning(s)*

#### Broken Links **[ERROR]**

`links/broken-links`

> Detects links returning 404 or 5xx errors

**Solution:**

Broken links hurt user experience and waste crawl budget. Regularly audit links using tools or crawlers. Fix or remove broken links. Set up 301 redirects for moved content. For external links, consider using nofollow and regularly verifying they still work. Implement custom 404 pages that help users find content.

| Check | Status | Message |
|-------|--------|---------|
| broken-links | X fail | 1 broken internal link(s) (4xx/5xx) |

<details><summary><strong>broken-links:</strong> 1 item(s)</summary>

- [https://bondflorida.com/contact (404)](https://bondflorida.com/contact)
  - from: [/services/dui-bail-bonds](https://bondflorida.com/services/dui-bail-bonds)
  - from: [/services/domestic-violence-bail](https://bondflorida.com/services/domestic-violence-bail)
  - from: [/services/immigration-bail-bonds](https://bondflorida.com/services/immigration-bail-bonds)
  - ... +2 more pages

</details>

---

#### Broken External Links **[WARN]**

`links/broken-external-links`

> Detects external links returning 4xx/5xx errors or timeouts

**Solution:**

Broken external links hurt user experience and credibility. Regularly audit external links using automated tools. Remove or replace broken links with working alternatives. Consider using archived versions (archive.org) if the original content is gone. For important resources, consider hosting your own copies of critical documentation or linking to more stable sources.

| Check | Status | Message |
|-------|--------|---------|
| broken-external-links | ! warn | 5 broken external link(s): 5 failed |

<details><summary><strong>broken-external-links:</strong> 5 item(s)</summary>

- [https://www.sheriff.org/LE/Pages/ArrestSearch.aspx (Error: timeout)](https://www.sheriff.org/LE/Pages/ArrestSearch.aspx)
  - from: [/county/broward](https://bondflorida.com/county/broward)
  - from: [/county/broward](https://bondflorida.com/county/broward)
  - from: [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
  - ... +2 more pages
- [https://www.pbso.org/arrestss/ (Error: timeout)](https://www.pbso.org/arrestss/)
  - from: [/county/palm-beach](https://bondflorida.com/county/palm-beach)
  - from: [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [https://www.teamhcso.com/ (Error: timeout)](https://www.teamhcso.com/)
  - from: [/county/hillsborough](https://bondflorida.com/county/hillsborough)
  - from: [/county/hillsborough](https://bondflorida.com/county/hillsborough)
  - from: [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
  - ... +2 more pages
- [https://inmatesearch.jaxsheriff.org/ (Error: unable to verify the first certificate)](https://inmatesearch.jaxsheriff.org/)
  - from: [/county/duval](https://bondflorida.com/county/duval)
  - from: [/county/duval](https://bondflorida.com/county/duval)
- [https://www.polksheriff.org/ (Error: timeout)](https://www.polksheriff.org/)
  - from: [/county/polk](https://bondflorida.com/county/polk)
  - from: [/county/polk](https://bondflorida.com/county/polk)

</details>

---

#### Orphan Pages **[WARN]**

`links/orphan-pages`

> Detects pages with no internal links pointing to them

**Solution:**

Orphan pages have no internal links and are hard for search engines to discover. They may not get indexed or rank well. Add internal links from relevant pages. Include in navigation or sidebar. Add to sitemap. Create contextual links from related content. If intentionally orphaned (e.g., landing pages), ensure they're accessible via sitemap.

| Check | Status | Message |
|-------|--------|---------|
| orphan-pages | ! warn | 20 orphan page(s) with <2 incoming links |

<details><summary><strong>orphan-pages:</strong> 20 item(s)</summary>

- [https://bondflorida.com/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [https://bondflorida.com/county/broward](https://bondflorida.com/county/broward)
- [https://bondflorida.com/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [https://bondflorida.com/county/orange](https://bondflorida.com/county/orange)
- [https://bondflorida.com/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [https://bondflorida.com/county/duval](https://bondflorida.com/county/duval)
- [https://bondflorida.com/county/pinellas](https://bondflorida.com/county/pinellas)
- [https://bondflorida.com/county/lee](https://bondflorida.com/county/lee)
- [https://bondflorida.com/county/polk](https://bondflorida.com/county/polk)
- [https://bondflorida.com/county/pasco](https://bondflorida.com/county/pasco)
- [https://bondflorida.com/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [https://bondflorida.com/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [https://bondflorida.com/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [https://bondflorida.com/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
- [https://bondflorida.com/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [https://bondflorida.com/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [https://bondflorida.com/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [https://bondflorida.com/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)
- [https://bondflorida.com/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)

</details>

---

#### Weak Internal Links **[WARN]**

`links/weak-internal-links`

> Detects pages with only 1 dofollow internal link pointing to them

**Solution:**

Pages with only a single internal link have weak internal linking support and may struggle to rank. Search engines use internal links to understand page importance and distribute link equity. Add contextual links from related content, include in navigation or sidebar, or link from category/hub pages to strengthen internal link profiles.

| Check | Status | Message |
|-------|--------|---------|
| weak-internal-links | ! warn | 14 page(s) have only 1 internal link |

<details><summary><strong>weak-internal-links:</strong> 14 item(s)</summary>

- [https://bondflorida.com/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [https://bondflorida.com/county/broward](https://bondflorida.com/county/broward)
- [https://bondflorida.com/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [https://bondflorida.com/county/orange](https://bondflorida.com/county/orange)
- [https://bondflorida.com/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [https://bondflorida.com/county/duval](https://bondflorida.com/county/duval)
- [https://bondflorida.com/county/pinellas](https://bondflorida.com/county/pinellas)
- [https://bondflorida.com/county/lee](https://bondflorida.com/county/lee)
- [https://bondflorida.com/county/polk](https://bondflorida.com/county/polk)
- [https://bondflorida.com/county/pasco](https://bondflorida.com/county/pasco)
- [https://bondflorida.com/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [https://bondflorida.com/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [https://bondflorida.com/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)

</details>

---

### Content

*0 error(s), 29 warning(s)*

#### Keyword Stuffing **[WARN]**

`content/keyword-stuffing`

> Detects excessive keyword repetition in content

**Solution:**

Keyword stuffing is repeating words unnaturally to manipulate rankings. Search engines penalize this practice. Write naturally for users first. Use keywords where they fit naturally. Aim for 1-2% keyword density at most. Use synonyms and related terms instead of repeating the exact same phrase. Focus on providing value, not gaming algorithms.

| Check | Status | Message |
|-------|--------|---------|
| keyword-stuffing | ! warn | 2 word(s) may be overused |
| keyword-stuffing | ! warn | 1 word(s) may be overused |
| keyword-stuffing | ! warn | 3 word(s) may be overused |
| keyword-stuffing | ! warn | 4 word(s) may be overused |
| keyword-stuffing | ! warn | 6 word(s) may be overused |

<details><summary><strong>keyword-stuffing:</strong> 2 page(s) affected</summary>

- [/](https://bondflorida.com/)
- [/county/miami-dade](https://bondflorida.com/county/miami-dade)

</details>

<details><summary><strong>keyword-stuffing:</strong> 3 item(s)</summary>

- "bail" (6.2%)
- "county" (3.0%)
- "tgk" (3.0%)

</details>

<details><summary><strong>keyword-stuffing:</strong> 15 page(s) affected</summary>

- [/services/dui-bail-bonds](https://bondflorida.com/services/dui-bail-bonds)
- [/services/domestic-violence-bail](https://bondflorida.com/services/domestic-violence-bail)
- [/services/traffic-warrant-bail](https://bondflorida.com/services/traffic-warrant-bail)
- [/services/nebbia-hold-bail](https://bondflorida.com/services/nebbia-hold-bail)
- [/county/duval](https://bondflorida.com/county/duval)
- [/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
- [/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)
- [/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)

</details>

<details><summary><strong>keyword-stuffing:</strong> 1 item(s)</summary>

- "bail" (6.6%)

</details>

<details><summary><strong>keyword-stuffing:</strong> 4 page(s) affected</summary>

- [/services/immigration-bail-bonds](https://bondflorida.com/services/immigration-bail-bonds)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/polk](https://bondflorida.com/county/polk)

</details>

<details><summary><strong>keyword-stuffing:</strong> 8 item(s)</summary>

- "bail" (6.7%)
- "bonds" (3.5%)
- "immigration" (3.5%)
- "beach" (4.0%)
- "detention" (3.3%)
- "county" (4.4%)
- "pinellas" (3.2%)
- "polk" (3.6%)

</details>

<details><summary><strong>keyword-stuffing:</strong> 4 page(s) affected</summary>

- [/county/broward](https://bondflorida.com/county/broward)
- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/lee](https://bondflorida.com/county/lee)
- [/county/pasco](https://bondflorida.com/county/pasco)

</details>

<details><summary><strong>keyword-stuffing:</strong> 12 item(s)</summary>

- "bail" (9.0%)
- "county" (4.1%)
- "broward" (3.8%)
- "main" (3.0%)
- "road" (3.9%)
- "orient" (3.1%)
- "jail" (3.1%)
- "lee" (3.3%)
- "facility" (3.3%)
- "detention" (3.4%)
- "lakes" (3.0%)
- "center" (3.0%)

</details>

<details><summary><strong>keyword-stuffing:</strong> 1 page(s) affected</summary>

- [/county/orange](https://bondflorida.com/county/orange)

</details>

<details><summary><strong>keyword-stuffing:</strong> 6 item(s)</summary>

- "bail" (8.7%)
- "county" (4.0%)
- "release" (4.0%)
- "brc" (3.6%)
- "orange" (3.2%)
- "booking" (3.2%)

</details>

---

#### Word Count **[WARN]**

`content/word-count`

> Checks content length for thin content issues

**Solution:**

Pages with thin content (under 300 words) often struggle to rank well and are actively deindexed by Google since the June 2025 core update. Add more valuable, relevant content to thin pagesΓÇöaim for at least 500 words for standard pages and 1000+ for in-depth articles. If a page can't be fleshed out, voluntarily noindex it or consolidate it into a more comprehensive resource. Trimming thin pages from your index is better than leaving low-value content for Google to penalize.

| Check | Status | Message |
|-------|--------|---------|
| word-count | ! warn | Thin content: 299 words (min 300) |
| word-count | ! warn | Thin content: 295 words (min 300) |
| word-count | ! warn | Thin content: 285 words (min 300) |

<details><summary><strong>word-count:</strong> 1 page(s) affected</summary>

- [/county/miami-dade](https://bondflorida.com/county/miami-dade)

</details>

<details><summary><strong>word-count:</strong> 1 page(s) affected</summary>

- [/county/hillsborough](https://bondflorida.com/county/hillsborough)

</details>

<details><summary><strong>word-count:</strong> 1 page(s) affected</summary>

- [/county/pinellas](https://bondflorida.com/county/pinellas)

</details>

---

### Performance

*0 error(s), 30 warning(s)*

#### Time to First Byte **[WARN]**

`perf/ttfb`

> Measures server response time (TTFB)

**Solution:**

Time to First Byte (TTFB) measures how quickly your server responds. Slow TTFB indicates server/backend issues.

Thresholds (Core Web Vitals):
- Good: < 600ms
- Needs improvement: 600-1000ms
- Poor: > 1000ms

Fixes for slow TTFB:
- Enable server caching (Redis, Varnish, CDN)
- Optimize database queries
- Use CDN for static assets
- Upgrade server resources
- Reduce server-side processing
- Enable HTTP/2 or HTTP/3
- Use edge computing (Cloudflare Workers, Vercel Edge)

| Check | Status | Message |
|-------|--------|---------|
| ttfb | ! warn | Slow server response (616ms) |
| ttfb | ! warn | Slow server response (775ms) |
| ttfb | ! warn | Slow server response (615ms) |

<details><summary><strong>ttfb:</strong> 2 page(s) affected</summary>

- [/services/immigration-bail-bonds](https://bondflorida.com/services/immigration-bail-bonds)
- [/county/pasco](https://bondflorida.com/county/pasco)

</details>

<details><summary><strong>ttfb:</strong> 1 page(s) affected</summary>

- [/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)

</details>

<details><summary><strong>ttfb:</strong> 1 page(s) affected</summary>

- [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)

</details>

---

#### Critical Request Chains **[WARN]**

`perf/critical-request-chains`

> Identifies chains of dependent resources that delay rendering

**Solution:**

Critical request chains are sequences of dependent network requests that must complete before the page can render. Reduce chain depth by: 1) Inlining critical CSS instead of linking external files. 2) Adding async or defer to non-critical scripts. 3) Avoiding CSS @import ΓÇö use <link> tags instead. 4) Using <link rel='preload'> for critical resources. 5) Reducing the number of render-blocking resources in <head>.

| Check | Status | Message |
|-------|--------|---------|
| critical-request-chains | ! warn | 2 critical request chain(s) found |

<details><summary><strong>critical-request-chains:</strong> 26 page(s) affected</summary>

- [/](https://bondflorida.com/)
- [/services/dui-bail-bonds](https://bondflorida.com/services/dui-bail-bonds)
- [/services/domestic-violence-bail](https://bondflorida.com/services/domestic-violence-bail)
- [/services/immigration-bail-bonds](https://bondflorida.com/services/immigration-bail-bonds)
- [/services/traffic-warrant-bail](https://bondflorida.com/services/traffic-warrant-bail)
- [/services/nebbia-hold-bail](https://bondflorida.com/services/nebbia-hold-bail)
- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/broward](https://bondflorida.com/county/broward)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/county/orange](https://bondflorida.com/county/orange)
- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/duval](https://bondflorida.com/county/duval)
- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/lee](https://bondflorida.com/county/lee)
- [/county/polk](https://bondflorida.com/county/polk)
- [/county/pasco](https://bondflorida.com/county/pasco)
- [/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
- [/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)
- [/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)

</details>

<details><summary><strong>critical-request-chains:</strong> 2 item(s)</summary>

- CSS: /_next/static/chunks/aef8c2063ed64508.css
- JS: /_next/static/chunks/a6dad97d9634a72d.js

</details>

---

### Social Media

*0 error(s), 20 warning(s)*

#### OG URL Match **[WARN]**

`social/og-url-match`

> Checks that og:url matches canonical URL

**Solution:**

og:url should match your canonical URL. Mismatches can cause social share stats to be fragmented across different URLs. Use the same URL normalization (https, www, trailing slash) as your canonical tag. Facebook uses og:url for share counting and deduplication.

| Check | Status | Message |
|-------|--------|---------|
| og-url-match | ! warn | og:url does not match canonical URL |

<details><summary><strong>og-url-match:</strong> 20 page(s) affected</summary>

- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/broward](https://bondflorida.com/county/broward)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/county/orange](https://bondflorida.com/county/orange)
- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/duval](https://bondflorida.com/county/duval)
- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/lee](https://bondflorida.com/county/lee)
- [/county/polk](https://bondflorida.com/county/polk)
- [/county/pasco](https://bondflorida.com/county/pasco)
- [/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
- [/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)
- [/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)

</details>

---

### Accessibility

*41 error(s), 41 warning(s)*

#### ARIA Input Field Name **[ERROR]**

`a11y/aria-input-field-name`

> Checks that input fields have accessible names

**Solution:**

All input fields need accessible names. Best options: 1) Use <label for='inputId'>. 2) Use aria-label or aria-labelledby. 3) Wrap input in <label>. Placeholder alone is not sufficient as it disappears when typing.

| Check | Status | Message |
|-------|--------|---------|
| aria-input-field-name | X fail | 1 input field(s) without accessible names |

<details><summary><strong>aria-input-field-name:</strong> 20 page(s) affected</summary>

- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/broward](https://bondflorida.com/county/broward)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/county/orange](https://bondflorida.com/county/orange)
- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/duval](https://bondflorida.com/county/duval)
- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/lee](https://bondflorida.com/county/lee)
- [/county/polk](https://bondflorida.com/county/polk)
- [/county/pasco](https://bondflorida.com/county/pasco)
- [/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
- [/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)
- [/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)

</details>

<details><summary><strong>aria-input-field-name:</strong> 1 item(s)</summary>

- input[type="time"]

</details>

---

#### Form Labels **[ERROR]**

`a11y/form-labels`

> Checks that form inputs have associated labels

**Solution:**

Every form input needs an accessible label for screen readers. Options: 1) Use <label for='inputId'>Label</label> with matching id. 2) Wrap the input inside <label>Label <input></label>. 3) Use aria-label or aria-labelledby for inputs where visible labels aren't feasible. Placeholders are not sufficient substitutes for labels. Hidden inputs, submit buttons, and image buttons don't need labels.

| Check | Status | Message |
|-------|--------|---------|
| form-labels | X fail | 1 form input(s) without labels |

<details><summary><strong>form-labels:</strong> 21 page(s) affected</summary>

- [/](https://bondflorida.com/)
- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/broward](https://bondflorida.com/county/broward)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/county/orange](https://bondflorida.com/county/orange)
- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/duval](https://bondflorida.com/county/duval)
- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/lee](https://bondflorida.com/county/lee)
- [/county/polk](https://bondflorida.com/county/polk)
- [/county/pasco](https://bondflorida.com/county/pasco)
- [/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
- [/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)
- [/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)

</details>

<details><summary><strong>form-labels:</strong> 2 item(s)</summary>

- number
- time

</details>

---

#### Color Contrast **[WARN]**

`a11y/color-contrast`

> Checks for color contrast issues in styles and classes

**Solution:**

Text must have sufficient contrast with its background for readability. WCAG AA requires 4.5:1 for normal text and 3:1 for large text (18px+ or 14px+ bold). Use tools like WebAIM Contrast Checker to verify. Common issues: light gray text, text over images without overlay. Don't rely on color alone to convey information - add icons or text labels.

| Check | Status | Message |
|-------|--------|---------|
| color-contrast | ! warn | 12 potential color contrast issue(s) |
| color-contrast | ! warn | 9 potential color contrast issue(s) |
| color-contrast | ! warn | 8 potential color contrast issue(s) |
| color-contrast | ! warn | 10 potential color contrast issue(s) |

<details><summary><strong>color-contrast:</strong> 11 page(s) affected</summary>

- [/](https://bondflorida.com/)
- [/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
- [/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)
- [/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)

</details>

<details><summary><strong>color-contrast:</strong> 19 item(s)</summary>

- span with class "block text-xl md:text-2xl text..." may have low contrast
- span with class "text-slate-400 text-lg block m..." may have low contrast
- p with class "max-w-2xl mx-auto text-slate-4..." may have low contrast
- div with class "flex flex-wrap justify-center ..." may have low contrast
- p with class "text-lg text-slate-400 max-w-2..." may have low contrast
- p with class "text-slate-400 leading-relaxed..." may have low contrast
- p with class "text-slate-400 mb-8 leading-re..." may have low contrast
- p with class "text-xl text-slate-300 italic ..." may have low contrast
- p with class "text-slate-400 max-w-xl..." may have low contrast
- p with class "text-lg text-slate-400 leading..." may have low contrast
- p with class "text-lg text-slate-300 leading..." may have low contrast
- p with class "text-slate-400 mb-6 italic bor..." may have low contrast
- div with class "flex items-center gap-4 text-s..." may have low contrast
- li with class "text-slate-300..." may have low contrast
- p with class "text-sm text-slate-400..." may have low contrast
- label with class "block text-xs font-bold text-s..." may have low contrast
- button with class "flex items-center justify-cent..." may have low contrast
- div with class "space-y-4 text-sm text-slate-4..." may have low contrast
- p with class "font-bold text-slate-300 mb-1..." may have low contrast

</details>

<details><summary><strong>color-contrast:</strong> 4 page(s) affected</summary>

- [/services/dui-bail-bonds](https://bondflorida.com/services/dui-bail-bonds)
- [/services/domestic-violence-bail](https://bondflorida.com/services/domestic-violence-bail)
- [/services/traffic-warrant-bail](https://bondflorida.com/services/traffic-warrant-bail)
- [/services/nebbia-hold-bail](https://bondflorida.com/services/nebbia-hold-bail)

</details>

<details><summary><strong>color-contrast:</strong> 9 item(s)</summary>

- p with class "max-w-2xl mx-auto text-slate-4..." may have low contrast
- p with class "text-xl leading-relaxed text-s..." may have low contrast
- div with class "w-10 h-10 rounded-full bg-slat..." may have low contrast
- p with class "text-slate-400..." may have low contrast
- p with class "text-xs text-slate-400 mb-4..." may have low contrast
- a with class "text-xs bg-slate-800 hover:bg-..." may have low contrast
- svg with class "lucide lucide-circle-question-..." may have low contrast
- p with class "text-slate-400 text-sm leading..." may have low contrast
- footer with class "py-16 bg-slate-950 text-slate-..." may have low contrast

</details>

<details><summary><strong>color-contrast:</strong> 1 page(s) affected</summary>

- [/services/immigration-bail-bonds](https://bondflorida.com/services/immigration-bail-bonds)

</details>

<details><summary><strong>color-contrast:</strong> 8 item(s)</summary>

- p with class "max-w-2xl mx-auto text-slate-4..." may have low contrast
- p with class "text-xl leading-relaxed text-s..." may have low contrast
- div with class "w-10 h-10 rounded-full bg-slat..." may have low contrast
- p with class "text-slate-400..." may have low contrast
- p with class "text-xs text-slate-400 mb-4..." may have low contrast
- svg with class "lucide lucide-circle-question-..." may have low contrast
- p with class "text-slate-400 text-sm leading..." may have low contrast
- footer with class "py-16 bg-slate-950 text-slate-..." may have low contrast

</details>

<details><summary><strong>color-contrast:</strong> 10 page(s) affected</summary>

- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/broward](https://bondflorida.com/county/broward)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/county/orange](https://bondflorida.com/county/orange)
- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/duval](https://bondflorida.com/county/duval)
- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/lee](https://bondflorida.com/county/lee)
- [/county/polk](https://bondflorida.com/county/polk)
- [/county/pasco](https://bondflorida.com/county/pasco)

</details>

<details><summary><strong>color-contrast:</strong> 10 item(s)</summary>

- span with class "block text-xl md:text-2xl text..." may have low contrast
- span with class "text-slate-400 text-lg block m..." may have low contrast
- p with class "max-w-2xl mx-auto text-slate-4..." may have low contrast
- div with class "flex items-start gap-3 text-sl..." may have low contrast
- p with class "text-slate-400 text-sm..." may have low contrast
- li with class "flex items-center gap-2 text-s..." may have low contrast
- p with class "text-slate-400 leading-relaxed..." may have low contrast
- label with class "block text-xs font-bold text-s..." may have low contrast
- button with class "flex items-center justify-cent..." may have low contrast
- footer with class "py-16 bg-slate-950 text-slate-..." may have low contrast

</details>

---

#### Heading Order **[WARN]**

`a11y/heading-order`

> Checks that heading levels don't skip

**Solution:**

Headings should follow a logical hierarchy without skipping levels. Screen reader users navigate by headings, so skipping from H1 to H3 is confusing. Correct order: H1 -> H2 -> H3 (not H1 -> H3). You can have multiple headings at the same level, and you can go back up (H3 -> H2 is fine). Think of headings as an outline - they should make sense when read alone.

| Check | Status | Message |
|-------|--------|---------|
| heading-order | ! warn | 1 heading level skip(s) detected |

<details><summary><strong>heading-order:</strong> 15 page(s) affected</summary>

- [/services/dui-bail-bonds](https://bondflorida.com/services/dui-bail-bonds)
- [/services/domestic-violence-bail](https://bondflorida.com/services/domestic-violence-bail)
- [/services/immigration-bail-bonds](https://bondflorida.com/services/immigration-bail-bonds)
- [/services/traffic-warrant-bail](https://bondflorida.com/services/traffic-warrant-bail)
- [/services/nebbia-hold-bail](https://bondflorida.com/services/nebbia-hold-bail)
- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/broward](https://bondflorida.com/county/broward)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/county/orange](https://bondflorida.com/county/orange)
- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/duval](https://bondflorida.com/county/duval)
- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/lee](https://bondflorida.com/county/lee)
- [/county/polk](https://bondflorida.com/county/polk)
- [/county/pasco](https://bondflorida.com/county/pasco)

</details>

<details><summary><strong>heading-order:</strong> 2 item(s)</summary>

- H3 after H1
- H4 after H2

</details>

---

### E-E-A-T

*0 error(s), 2 warning(s)*

#### About Page **[WARN]**

`eeat/about-page`

> Checks for an about/company page with content

**Solution:**

An About page establishes credibility and trust. Include company history, mission, team overview, and credentials. Link from main navigation or footer. For E-E-A-T, explain your expertise and why visitors should trust you. Include contact information and physical location if applicable.

| Check | Status | Message |
|-------|--------|---------|
| about-page | ! warn | No About page found |

---

#### Privacy Policy **[WARN]**

`eeat/privacy-policy`

> Checks for privacy policy page linked from footer

**Solution:**

A privacy policy is required by law in many jurisdictions (GDPR, CCPA) and signals trustworthiness. Link it from your footer on every page. Cover: what data you collect, how you use it, third-party sharing, user rights, and contact for privacy concerns. Keep it updated when practices change.

| Check | Status | Message |
|-------|--------|---------|
| privacy-policy | ! warn | No Privacy Policy page found |

---

---

*Generated by [squirrelscan](https://squirrelscan.com) v0.0.36*


