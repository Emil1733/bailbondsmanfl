# squirrelscan Audit Report

**URL:** https://bondflorida.com  
**Date:** 2026-02-11T23:37:06.269Z  
**Pages:** 100  
**Version:** 0.0.36

## Health Score

| Category | Score |
|----------|-------|
| **Overall** | **75/100 (C)** |
| Accessibility | 90/100 |
| Core SEO | 89/100 |
| Performance | 96/100 |
| Content | 89/100 |
| Links | 85/100 |
| Security | 90/100 |
| E-E-A-T | 68/100 |
| Crawlability | 98/100 |
| Social Media | 100/100 |
| Internationalization | 100/100 |
| Images | 100/100 |
| Legal Compliance | 100/100 |
| Mobile | 100/100 |
| Structured Data | 100/100 |
| URL Structure | 100/100 |

## Summary

- **Passed:** 8712
- **Warnings:** 522
- **Failed:** 187

---

## Issues

### Crawlability

*0 error(s), 2 warning(s)*

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

- [https://bondflorida.com → https://bondflorida.com/](https://bondflorida.com)

</details>

---

#### Sitemap Coverage **[WARN]**

`crawl/sitemap-coverage`

> Checks for indexable pages that are not in the sitemap

**Solution:**

Your sitemap should include all pages you want search engines to index. Pages that are crawlable and indexable (no noindex, not blocked by robots.txt) should generally be in your sitemap. Missing pages may not be discovered or indexed efficiently. Use a sitemap generator that automatically includes all indexable pages, or manually add important pages.

| Check | Status | Message |
|-------|--------|---------|
| sitemap-orphans | ! warn | 31 sitemap URL(s) were not crawled |

<details><summary><strong>sitemap-orphans:</strong> 31 item(s)</summary>

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

*0 error(s), 184 warning(s)*

#### Meta Title **[ERROR]**

`core/meta-title`

> Validates page title presence and length

**Solution:**

Every page needs a unique, descriptive title tag between 30-60 characters. Titles appear in browser tabs, search results, and social shares. Write titles that accurately describe the page content while including your primary keyword near the beginning. If your title is too short, add more descriptive context. If too long, prioritize the most important information first and trim secondary details. Avoid keyword stuffing or duplicate titles across pages.

| Check | Status | Message |
|-------|--------|---------|
| meta-title | ! warn | Title too long (86 chars, max 60) |
| meta-title | ! warn | Title too long (63 chars, max 60) |
| meta-title | ! warn | Title too long (69 chars, max 60) |
| meta-title | ! warn | Title too long (73 chars, max 60) |
| meta-title | ! warn | Title too long (66 chars, max 60) |
| meta-title | ! warn | Title too long (74 chars, max 60) |
| meta-title | ! warn | Title too long (71 chars, max 60) |
| meta-title | ! warn | Title too long (76 chars, max 60) |
| meta-title | ! warn | Title too long (70 chars, max 60) |
| meta-title | ! warn | Title too long (72 chars, max 60) |
| meta-title | ! warn | Title too long (67 chars, max 60) |
| meta-title | ! warn | Title too long (68 chars, max 60) |
| meta-title | ! warn | Title too long (61 chars, max 60) |
| meta-title | ! warn | Title too long (62 chars, max 60) |
| meta-title | ! warn | Title too long (77 chars, max 60) |
| meta-title | ! warn | Title too long (75 chars, max 60) |
| meta-title | ! warn | Title too long (80 chars, max 60) |
| meta-title | ! warn | Title too long (81 chars, max 60) |
| meta-title | ! warn | Title too long (79 chars, max 60) |
| meta-title | ! warn | Title too long (84 chars, max 60) |
| meta-title | ! warn | Title too long (78 chars, max 60) |
| meta-title | ! warn | Title too long (64 chars, max 60) |
| meta-title | ! warn | Title too long (65 chars, max 60) |

<details><summary><strong>meta-title:</strong> 1 page(s) affected</summary>

- [/contact](https://bondflorida.com/contact)

</details>

<details><summary><strong>meta-title:</strong> 3 page(s) affected</summary>

- [/services/dui-bail-bonds](https://bondflorida.com/services/dui-bail-bonds)
- [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [/services/dui-bail-bonds/new-port-richey](https://bondflorida.com/services/dui-bail-bonds/new-port-richey)

</details>

<details><summary><strong>meta-title:</strong> 8 page(s) affected</summary>

- [/services/domestic-violence-bail](https://bondflorida.com/services/domestic-violence-bail)
- [/county/duval](https://bondflorida.com/county/duval)
- [/county/pasco](https://bondflorida.com/county/pasco)
- [/services/domestic-violence-bail/hialeah](https://bondflorida.com/services/domestic-violence-bail/hialeah)
- [/services/domestic-violence-bail/brandon](https://bondflorida.com/services/domestic-violence-bail/brandon)
- [/services/domestic-violence-bail/orlando](https://bondflorida.com/services/domestic-violence-bail/orlando)
- [/services/traffic-warrant-bail/plant-city](https://bondflorida.com/services/traffic-warrant-bail/plant-city)
- [/services/traffic-warrant-bail/clearwater](https://bondflorida.com/services/traffic-warrant-bail/clearwater)

</details>

<details><summary><strong>meta-title:</strong> 7 page(s) affected</summary>

- [/services/immigration-bail-bonds](https://bondflorida.com/services/immigration-bail-bonds)
- [/services/domestic-violence-bail/miami-beach](https://bondflorida.com/services/domestic-violence-bail/miami-beach)
- [/services/domestic-violence-bail/winter-park](https://bondflorida.com/services/domestic-violence-bail/winter-park)
- [/services/immigration-bail-bonds/hialeah](https://bondflorida.com/services/immigration-bail-bonds/hialeah)
- [/services/immigration-bail-bonds/brandon](https://bondflorida.com/services/immigration-bail-bonds/brandon)
- [/services/immigration-bail-bonds/orlando](https://bondflorida.com/services/immigration-bail-bonds/orlando)
- [/services/traffic-warrant-bail/st-petersburg](https://bondflorida.com/services/traffic-warrant-bail/st-petersburg)

</details>

<details><summary><strong>meta-title:</strong> 7 page(s) affected</summary>

- [/services/traffic-warrant-bail](https://bondflorida.com/services/traffic-warrant-bail)
- [/services/nebbia-hold-bail](https://bondflorida.com/services/nebbia-hold-bail)
- [/services/dui-bail-bonds/jacksonville-beach](https://bondflorida.com/services/dui-bail-bonds/jacksonville-beach)
- [/services/traffic-warrant-bail/hialeah](https://bondflorida.com/services/traffic-warrant-bail/hialeah)
- [/services/traffic-warrant-bail/brandon](https://bondflorida.com/services/traffic-warrant-bail/brandon)
- [/services/traffic-warrant-bail/orlando](https://bondflorida.com/services/traffic-warrant-bail/orlando)
- [/services/nebbia-hold-bail/hialeah](https://bondflorida.com/services/nebbia-hold-bail/hialeah)

</details>

<details><summary><strong>meta-title:</strong> 7 page(s) affected</summary>

- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/services/domestic-violence-bail/winter-haven](https://bondflorida.com/services/domestic-violence-bail/winter-haven)
- [/services/immigration-bail-bonds/lakeland](https://bondflorida.com/services/immigration-bail-bonds/lakeland)
- [/services/traffic-warrant-bail/fort-lauderdale](https://bondflorida.com/services/traffic-warrant-bail/fort-lauderdale)
- [/services/traffic-warrant-bail/new-port-richey](https://bondflorida.com/services/traffic-warrant-bail/new-port-richey)
- [/services/nebbia-hold-bail/fort-lauderdale](https://bondflorida.com/services/nebbia-hold-bail/fort-lauderdale)

</details>

<details><summary><strong>meta-title:</strong> 5 page(s) affected</summary>

- [/county/broward](https://bondflorida.com/county/broward)
- [/services/domestic-violence-bail/hollywood](https://bondflorida.com/services/domestic-violence-bail/hollywood)
- [/services/immigration-bail-bonds/miami](https://bondflorida.com/services/immigration-bail-bonds/miami)
- [/services/immigration-bail-bonds/tampa](https://bondflorida.com/services/immigration-bail-bonds/tampa)
- [/services/traffic-warrant-bail/winter-haven](https://bondflorida.com/services/traffic-warrant-bail/winter-haven)

</details>

<details><summary><strong>meta-title:</strong> 4 page(s) affected</summary>

- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/services/domestic-violence-bail/st-petersburg](https://bondflorida.com/services/domestic-violence-bail/st-petersburg)
- [/services/immigration-bail-bonds/plant-city](https://bondflorida.com/services/immigration-bail-bonds/plant-city)
- [/services/immigration-bail-bonds/clearwater](https://bondflorida.com/services/immigration-bail-bonds/clearwater)

</details>

<details><summary><strong>meta-title:</strong> 5 page(s) affected</summary>

- [/county/orange](https://bondflorida.com/county/orange)
- [/services/domestic-violence-bail/lakeland](https://bondflorida.com/services/domestic-violence-bail/lakeland)
- [/services/traffic-warrant-bail/miami-beach](https://bondflorida.com/services/traffic-warrant-bail/miami-beach)
- [/services/traffic-warrant-bail/winter-park](https://bondflorida.com/services/traffic-warrant-bail/winter-park)
- [/services/nebbia-hold-bail/miami-beach](https://bondflorida.com/services/nebbia-hold-bail/miami-beach)

</details>

<details><summary><strong>meta-title:</strong> 7 page(s) affected</summary>

- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/services/domestic-violence-bail/plant-city](https://bondflorida.com/services/domestic-violence-bail/plant-city)
- [/services/domestic-violence-bail/clearwater](https://bondflorida.com/services/domestic-violence-bail/clearwater)
- [/services/immigration-bail-bonds/apopka](https://bondflorida.com/services/immigration-bail-bonds/apopka)
- [/services/traffic-warrant-bail/pompano-beach](https://bondflorida.com/services/traffic-warrant-bail/pompano-beach)
- [/services/traffic-warrant-bail/wesley-chapel](https://bondflorida.com/services/traffic-warrant-bail/wesley-chapel)
- [/services/nebbia-hold-bail/pompano-beach](https://bondflorida.com/services/nebbia-hold-bail/pompano-beach)

</details>

<details><summary><strong>meta-title:</strong> 4 page(s) affected</summary>

- [/county/lee](https://bondflorida.com/county/lee)
- [/services/domestic-violence-bail/miami](https://bondflorida.com/services/domestic-violence-bail/miami)
- [/services/domestic-violence-bail/tampa](https://bondflorida.com/services/domestic-violence-bail/tampa)
- [/services/traffic-warrant-bail/lakeland](https://bondflorida.com/services/traffic-warrant-bail/lakeland)

</details>

<details><summary><strong>meta-title:</strong> 4 page(s) affected</summary>

- [/county/polk](https://bondflorida.com/county/polk)
- [/services/domestic-violence-bail/apopka](https://bondflorida.com/services/domestic-violence-bail/apopka)
- [/services/traffic-warrant-bail/hollywood](https://bondflorida.com/services/traffic-warrant-bail/hollywood)
- [/services/nebbia-hold-bail/hollywood](https://bondflorida.com/services/nebbia-hold-bail/hollywood)

</details>

<details><summary><strong>meta-title:</strong> 2 page(s) affected</summary>

- [/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [/services/dui-bail-bonds/wesley-chapel](https://bondflorida.com/services/dui-bail-bonds/wesley-chapel)

</details>

<details><summary><strong>meta-title:</strong> 1 page(s) affected</summary>

- [/services/dui-bail-bonds/st-petersburg](https://bondflorida.com/services/dui-bail-bonds/st-petersburg)

</details>

<details><summary><strong>meta-title:</strong> 5 page(s) affected</summary>

- [/services/domestic-violence-bail/fort-lauderdale](https://bondflorida.com/services/domestic-violence-bail/fort-lauderdale)
- [/services/domestic-violence-bail/new-port-richey](https://bondflorida.com/services/domestic-violence-bail/new-port-richey)
- [/services/immigration-bail-bonds/miami-beach](https://bondflorida.com/services/immigration-bail-bonds/miami-beach)
- [/services/immigration-bail-bonds/winter-park](https://bondflorida.com/services/immigration-bail-bonds/winter-park)
- [/services/traffic-warrant-bail/jacksonville-beach](https://bondflorida.com/services/traffic-warrant-bail/jacksonville-beach)

</details>

<details><summary><strong>meta-title:</strong> 3 page(s) affected</summary>

- [/services/domestic-violence-bail/pompano-beach](https://bondflorida.com/services/domestic-violence-bail/pompano-beach)
- [/services/domestic-violence-bail/wesley-chapel](https://bondflorida.com/services/domestic-violence-bail/wesley-chapel)
- [/services/immigration-bail-bonds/hollywood](https://bondflorida.com/services/immigration-bail-bonds/hollywood)

</details>

<details><summary><strong>meta-title:</strong> 2 page(s) affected</summary>

- [/services/domestic-violence-bail/jacksonville-beach](https://bondflorida.com/services/domestic-violence-bail/jacksonville-beach)
- [/services/immigration-bail-bonds/st-petersburg](https://bondflorida.com/services/immigration-bail-bonds/st-petersburg)

</details>

<details><summary><strong>meta-title:</strong> 2 page(s) affected</summary>

- [/services/immigration-bail-bonds/fort-lauderdale](https://bondflorida.com/services/immigration-bail-bonds/fort-lauderdale)
- [/services/immigration-bail-bonds/new-port-richey](https://bondflorida.com/services/immigration-bail-bonds/new-port-richey)

</details>

<details><summary><strong>meta-title:</strong> 2 page(s) affected</summary>

- [/services/immigration-bail-bonds/pompano-beach](https://bondflorida.com/services/immigration-bail-bonds/pompano-beach)
- [/services/immigration-bail-bonds/wesley-chapel](https://bondflorida.com/services/immigration-bail-bonds/wesley-chapel)

</details>

<details><summary><strong>meta-title:</strong> 1 page(s) affected</summary>

- [/services/immigration-bail-bonds/jacksonville-beach](https://bondflorida.com/services/immigration-bail-bonds/jacksonville-beach)

</details>

<details><summary><strong>meta-title:</strong> 1 page(s) affected</summary>

- [/services/immigration-bail-bonds/winter-haven](https://bondflorida.com/services/immigration-bail-bonds/winter-haven)

</details>

<details><summary><strong>meta-title:</strong> 4 page(s) affected</summary>

- [/services/traffic-warrant-bail/miami](https://bondflorida.com/services/traffic-warrant-bail/miami)
- [/services/traffic-warrant-bail/tampa](https://bondflorida.com/services/traffic-warrant-bail/tampa)
- [/services/nebbia-hold-bail/miami](https://bondflorida.com/services/nebbia-hold-bail/miami)
- [/services/nebbia-hold-bail/tampa](https://bondflorida.com/services/nebbia-hold-bail/tampa)

</details>

<details><summary><strong>meta-title:</strong> 1 page(s) affected</summary>

- [/services/traffic-warrant-bail/apopka](https://bondflorida.com/services/traffic-warrant-bail/apopka)

</details>

---

#### Meta Description **[ERROR]**

`core/meta-description`

> Validates meta description presence and length

**Solution:**

Meta descriptions should be 120-160 characters and provide a compelling summary of the page. While not a direct ranking factor, good descriptions improve click-through rates from search results. Write unique descriptions for each page that accurately preview the content. Include a call-to-action when appropriate. If missing, search engines will auto-generate snippets which may not represent your page optimally.

| Check | Status | Message |
|-------|--------|---------|
| meta-description | ! warn | Description too long (163 chars, max 160) |
| meta-description | ! warn | Description too long (161 chars, max 160) |
| meta-description | ! warn | Description too long (167 chars, max 160) |

<details><summary><strong>meta-description:</strong> 1 page(s) affected</summary>

- [/services/domestic-violence-bail/jacksonville-beach](https://bondflorida.com/services/domestic-violence-bail/jacksonville-beach)

</details>

<details><summary><strong>meta-description:</strong> 2 page(s) affected</summary>

- [/services/immigration-bail-bonds/fort-lauderdale](https://bondflorida.com/services/immigration-bail-bonds/fort-lauderdale)
- [/services/immigration-bail-bonds/new-port-richey](https://bondflorida.com/services/immigration-bail-bonds/new-port-richey)

</details>

<details><summary><strong>meta-description:</strong> 1 page(s) affected</summary>

- [/services/immigration-bail-bonds/jacksonville-beach](https://bondflorida.com/services/immigration-bail-bonds/jacksonville-beach)

</details>

---

#### Open Graph Tags **[WARN]**

`core/og-tags`

> Validates Open Graph meta tags for social sharing

**Solution:**

Open Graph tags control how your content appears when shared on Facebook, LinkedIn, and other platforms. Required tags: og:title, og:description, og:image, og:url, and og:type. Add OG tags in your page head. Use images at least 1200x630 pixels for best display. Keep og:title under 60 characters and og:description under 200. Test shares using Facebook's Sharing Debugger tool.

| Check | Status | Message |
|-------|--------|---------|
| og-image | ! warn | Missing og:image - social shares will lack imagery |

<details><summary><strong>og-image:</strong> 94 page(s) affected</summary>

- [/](https://bondflorida.com/)
- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/broward](https://bondflorida.com/county/broward)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/orange](https://bondflorida.com/county/orange)
- [/county/duval](https://bondflorida.com/county/duval)
- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/lee](https://bondflorida.com/county/lee)
- [/county/polk](https://bondflorida.com/county/polk)
- [/county/pasco](https://bondflorida.com/county/pasco)
- [/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
- [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)
- [/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)
- [/services/dui-bail-bonds/winter-park](https://bondflorida.com/services/dui-bail-bonds/winter-park)
- [/services/dui-bail-bonds/apopka](https://bondflorida.com/services/dui-bail-bonds/apopka)
- [/services/dui-bail-bonds/jacksonville-beach](https://bondflorida.com/services/dui-bail-bonds/jacksonville-beach)
- [/services/dui-bail-bonds/clearwater](https://bondflorida.com/services/dui-bail-bonds/clearwater)
- [/services/dui-bail-bonds/st-petersburg](https://bondflorida.com/services/dui-bail-bonds/st-petersburg)
- [/services/dui-bail-bonds/lakeland](https://bondflorida.com/services/dui-bail-bonds/lakeland)
- [/services/dui-bail-bonds/winter-haven](https://bondflorida.com/services/dui-bail-bonds/winter-haven)
- [/services/dui-bail-bonds/new-port-richey](https://bondflorida.com/services/dui-bail-bonds/new-port-richey)
- [/services/domestic-violence-bail/miami](https://bondflorida.com/services/domestic-violence-bail/miami)
- [/services/dui-bail-bonds/wesley-chapel](https://bondflorida.com/services/dui-bail-bonds/wesley-chapel)
- [/services/domestic-violence-bail/hialeah](https://bondflorida.com/services/domestic-violence-bail/hialeah)
- [/services/domestic-violence-bail/miami-beach](https://bondflorida.com/services/domestic-violence-bail/miami-beach)
- [/services/domestic-violence-bail/fort-lauderdale](https://bondflorida.com/services/domestic-violence-bail/fort-lauderdale)
- [/services/domestic-violence-bail/pompano-beach](https://bondflorida.com/services/domestic-violence-bail/pompano-beach)
- [/services/domestic-violence-bail/hollywood](https://bondflorida.com/services/domestic-violence-bail/hollywood)
- [/services/domestic-violence-bail/brandon](https://bondflorida.com/services/domestic-violence-bail/brandon)
- [/services/domestic-violence-bail/tampa](https://bondflorida.com/services/domestic-violence-bail/tampa)
- [/services/domestic-violence-bail/plant-city](https://bondflorida.com/services/domestic-violence-bail/plant-city)
- [/services/domestic-violence-bail/winter-park](https://bondflorida.com/services/domestic-violence-bail/winter-park)
- [/services/domestic-violence-bail/orlando](https://bondflorida.com/services/domestic-violence-bail/orlando)
- [/services/domestic-violence-bail/apopka](https://bondflorida.com/services/domestic-violence-bail/apopka)
- [/services/domestic-violence-bail/jacksonville-beach](https://bondflorida.com/services/domestic-violence-bail/jacksonville-beach)
- [/services/domestic-violence-bail/st-petersburg](https://bondflorida.com/services/domestic-violence-bail/st-petersburg)
- [/services/domestic-violence-bail/lakeland](https://bondflorida.com/services/domestic-violence-bail/lakeland)
- [/services/domestic-violence-bail/clearwater](https://bondflorida.com/services/domestic-violence-bail/clearwater)
- [/services/domestic-violence-bail/new-port-richey](https://bondflorida.com/services/domestic-violence-bail/new-port-richey)
- [/services/domestic-violence-bail/winter-haven](https://bondflorida.com/services/domestic-violence-bail/winter-haven)
- [/services/domestic-violence-bail/wesley-chapel](https://bondflorida.com/services/domestic-violence-bail/wesley-chapel)
- [/services/immigration-bail-bonds/miami](https://bondflorida.com/services/immigration-bail-bonds/miami)
- [/services/immigration-bail-bonds/hialeah](https://bondflorida.com/services/immigration-bail-bonds/hialeah)
- [/services/immigration-bail-bonds/fort-lauderdale](https://bondflorida.com/services/immigration-bail-bonds/fort-lauderdale)
- [/services/immigration-bail-bonds/miami-beach](https://bondflorida.com/services/immigration-bail-bonds/miami-beach)
- [/services/immigration-bail-bonds/hollywood](https://bondflorida.com/services/immigration-bail-bonds/hollywood)
- [/services/immigration-bail-bonds/pompano-beach](https://bondflorida.com/services/immigration-bail-bonds/pompano-beach)
- [/services/immigration-bail-bonds/tampa](https://bondflorida.com/services/immigration-bail-bonds/tampa)
- [/services/immigration-bail-bonds/brandon](https://bondflorida.com/services/immigration-bail-bonds/brandon)
- [/services/immigration-bail-bonds/plant-city](https://bondflorida.com/services/immigration-bail-bonds/plant-city)
- [/services/immigration-bail-bonds/orlando](https://bondflorida.com/services/immigration-bail-bonds/orlando)
- [/services/immigration-bail-bonds/apopka](https://bondflorida.com/services/immigration-bail-bonds/apopka)
- [/services/immigration-bail-bonds/winter-park](https://bondflorida.com/services/immigration-bail-bonds/winter-park)
- [/services/immigration-bail-bonds/jacksonville-beach](https://bondflorida.com/services/immigration-bail-bonds/jacksonville-beach)
- [/services/immigration-bail-bonds/st-petersburg](https://bondflorida.com/services/immigration-bail-bonds/st-petersburg)
- [/services/immigration-bail-bonds/clearwater](https://bondflorida.com/services/immigration-bail-bonds/clearwater)
- [/services/immigration-bail-bonds/winter-haven](https://bondflorida.com/services/immigration-bail-bonds/winter-haven)
- [/services/immigration-bail-bonds/lakeland](https://bondflorida.com/services/immigration-bail-bonds/lakeland)
- [/services/immigration-bail-bonds/new-port-richey](https://bondflorida.com/services/immigration-bail-bonds/new-port-richey)
- [/services/immigration-bail-bonds/wesley-chapel](https://bondflorida.com/services/immigration-bail-bonds/wesley-chapel)
- [/services/traffic-warrant-bail/miami](https://bondflorida.com/services/traffic-warrant-bail/miami)
- [/services/traffic-warrant-bail/hialeah](https://bondflorida.com/services/traffic-warrant-bail/hialeah)
- [/services/traffic-warrant-bail/miami-beach](https://bondflorida.com/services/traffic-warrant-bail/miami-beach)
- [/services/traffic-warrant-bail/fort-lauderdale](https://bondflorida.com/services/traffic-warrant-bail/fort-lauderdale)
- [/services/traffic-warrant-bail/hollywood](https://bondflorida.com/services/traffic-warrant-bail/hollywood)
- [/services/traffic-warrant-bail/pompano-beach](https://bondflorida.com/services/traffic-warrant-bail/pompano-beach)
- [/services/traffic-warrant-bail/brandon](https://bondflorida.com/services/traffic-warrant-bail/brandon)
- [/services/traffic-warrant-bail/tampa](https://bondflorida.com/services/traffic-warrant-bail/tampa)
- [/services/traffic-warrant-bail/plant-city](https://bondflorida.com/services/traffic-warrant-bail/plant-city)
- [/services/traffic-warrant-bail/orlando](https://bondflorida.com/services/traffic-warrant-bail/orlando)
- [/services/traffic-warrant-bail/winter-park](https://bondflorida.com/services/traffic-warrant-bail/winter-park)
- [/services/traffic-warrant-bail/apopka](https://bondflorida.com/services/traffic-warrant-bail/apopka)
- [/services/traffic-warrant-bail/jacksonville-beach](https://bondflorida.com/services/traffic-warrant-bail/jacksonville-beach)
- [/services/traffic-warrant-bail/st-petersburg](https://bondflorida.com/services/traffic-warrant-bail/st-petersburg)
- [/services/traffic-warrant-bail/clearwater](https://bondflorida.com/services/traffic-warrant-bail/clearwater)
- [/services/traffic-warrant-bail/lakeland](https://bondflorida.com/services/traffic-warrant-bail/lakeland)
- [/services/traffic-warrant-bail/winter-haven](https://bondflorida.com/services/traffic-warrant-bail/winter-haven)
- [/services/traffic-warrant-bail/new-port-richey](https://bondflorida.com/services/traffic-warrant-bail/new-port-richey)
- [/services/traffic-warrant-bail/wesley-chapel](https://bondflorida.com/services/traffic-warrant-bail/wesley-chapel)
- [/services/nebbia-hold-bail/miami](https://bondflorida.com/services/nebbia-hold-bail/miami)
- [/services/nebbia-hold-bail/hialeah](https://bondflorida.com/services/nebbia-hold-bail/hialeah)
- [/services/nebbia-hold-bail/miami-beach](https://bondflorida.com/services/nebbia-hold-bail/miami-beach)
- [/services/nebbia-hold-bail/fort-lauderdale](https://bondflorida.com/services/nebbia-hold-bail/fort-lauderdale)
- [/services/nebbia-hold-bail/pompano-beach](https://bondflorida.com/services/nebbia-hold-bail/pompano-beach)
- [/services/nebbia-hold-bail/hollywood](https://bondflorida.com/services/nebbia-hold-bail/hollywood)
- [/services/nebbia-hold-bail/tampa](https://bondflorida.com/services/nebbia-hold-bail/tampa)

</details>

<details><summary><strong>og-image:</strong> 94 item(s)</summary>

- [https://bondflorida.com](https://bondflorida.com)
- [https://bondflorida.com/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [https://bondflorida.com/county/broward](https://bondflorida.com/county/broward)
- [https://bondflorida.com/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [https://bondflorida.com/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [https://bondflorida.com/county/orange](https://bondflorida.com/county/orange)
- [https://bondflorida.com/county/duval](https://bondflorida.com/county/duval)
- [https://bondflorida.com/county/pinellas](https://bondflorida.com/county/pinellas)
- [https://bondflorida.com/county/lee](https://bondflorida.com/county/lee)
- [https://bondflorida.com/county/polk](https://bondflorida.com/county/polk)
- [https://bondflorida.com/county/pasco](https://bondflorida.com/county/pasco)
- [https://bondflorida.com/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [https://bondflorida.com/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [https://bondflorida.com/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [https://bondflorida.com/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
- [https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [https://bondflorida.com/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [https://bondflorida.com/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [https://bondflorida.com/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [https://bondflorida.com/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)
- [https://bondflorida.com/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)
- [https://bondflorida.com/services/dui-bail-bonds/winter-park](https://bondflorida.com/services/dui-bail-bonds/winter-park)
- [https://bondflorida.com/services/dui-bail-bonds/apopka](https://bondflorida.com/services/dui-bail-bonds/apopka)
- [https://bondflorida.com/services/dui-bail-bonds/jacksonville-beach](https://bondflorida.com/services/dui-bail-bonds/jacksonville-beach)
- [https://bondflorida.com/services/dui-bail-bonds/clearwater](https://bondflorida.com/services/dui-bail-bonds/clearwater)
- [https://bondflorida.com/services/dui-bail-bonds/st-petersburg](https://bondflorida.com/services/dui-bail-bonds/st-petersburg)
- [https://bondflorida.com/services/dui-bail-bonds/lakeland](https://bondflorida.com/services/dui-bail-bonds/lakeland)
- [https://bondflorida.com/services/dui-bail-bonds/winter-haven](https://bondflorida.com/services/dui-bail-bonds/winter-haven)
- [https://bondflorida.com/services/dui-bail-bonds/new-port-richey](https://bondflorida.com/services/dui-bail-bonds/new-port-richey)
- [https://bondflorida.com/services/domestic-violence-bail/miami](https://bondflorida.com/services/domestic-violence-bail/miami)
- [https://bondflorida.com/services/dui-bail-bonds/wesley-chapel](https://bondflorida.com/services/dui-bail-bonds/wesley-chapel)
- [https://bondflorida.com/services/domestic-violence-bail/hialeah](https://bondflorida.com/services/domestic-violence-bail/hialeah)
- [https://bondflorida.com/services/domestic-violence-bail/miami-beach](https://bondflorida.com/services/domestic-violence-bail/miami-beach)
- [https://bondflorida.com/services/domestic-violence-bail/fort-lauderdale](https://bondflorida.com/services/domestic-violence-bail/fort-lauderdale)
- [https://bondflorida.com/services/domestic-violence-bail/pompano-beach](https://bondflorida.com/services/domestic-violence-bail/pompano-beach)
- [https://bondflorida.com/services/domestic-violence-bail/hollywood](https://bondflorida.com/services/domestic-violence-bail/hollywood)
- [https://bondflorida.com/services/domestic-violence-bail/brandon](https://bondflorida.com/services/domestic-violence-bail/brandon)
- [https://bondflorida.com/services/domestic-violence-bail/tampa](https://bondflorida.com/services/domestic-violence-bail/tampa)
- [https://bondflorida.com/services/domestic-violence-bail/plant-city](https://bondflorida.com/services/domestic-violence-bail/plant-city)
- [https://bondflorida.com/services/domestic-violence-bail/winter-park](https://bondflorida.com/services/domestic-violence-bail/winter-park)
- [https://bondflorida.com/services/domestic-violence-bail/orlando](https://bondflorida.com/services/domestic-violence-bail/orlando)
- [https://bondflorida.com/services/domestic-violence-bail/apopka](https://bondflorida.com/services/domestic-violence-bail/apopka)
- [https://bondflorida.com/services/domestic-violence-bail/jacksonville-beach](https://bondflorida.com/services/domestic-violence-bail/jacksonville-beach)
- [https://bondflorida.com/services/domestic-violence-bail/st-petersburg](https://bondflorida.com/services/domestic-violence-bail/st-petersburg)
- [https://bondflorida.com/services/domestic-violence-bail/lakeland](https://bondflorida.com/services/domestic-violence-bail/lakeland)
- [https://bondflorida.com/services/domestic-violence-bail/clearwater](https://bondflorida.com/services/domestic-violence-bail/clearwater)
- [https://bondflorida.com/services/domestic-violence-bail/new-port-richey](https://bondflorida.com/services/domestic-violence-bail/new-port-richey)
- [https://bondflorida.com/services/domestic-violence-bail/winter-haven](https://bondflorida.com/services/domestic-violence-bail/winter-haven)
- [https://bondflorida.com/services/domestic-violence-bail/wesley-chapel](https://bondflorida.com/services/domestic-violence-bail/wesley-chapel)
- [https://bondflorida.com/services/immigration-bail-bonds/miami](https://bondflorida.com/services/immigration-bail-bonds/miami)
- [https://bondflorida.com/services/immigration-bail-bonds/hialeah](https://bondflorida.com/services/immigration-bail-bonds/hialeah)
- [https://bondflorida.com/services/immigration-bail-bonds/fort-lauderdale](https://bondflorida.com/services/immigration-bail-bonds/fort-lauderdale)
- [https://bondflorida.com/services/immigration-bail-bonds/miami-beach](https://bondflorida.com/services/immigration-bail-bonds/miami-beach)
- [https://bondflorida.com/services/immigration-bail-bonds/hollywood](https://bondflorida.com/services/immigration-bail-bonds/hollywood)
- [https://bondflorida.com/services/immigration-bail-bonds/pompano-beach](https://bondflorida.com/services/immigration-bail-bonds/pompano-beach)
- [https://bondflorida.com/services/immigration-bail-bonds/tampa](https://bondflorida.com/services/immigration-bail-bonds/tampa)
- [https://bondflorida.com/services/immigration-bail-bonds/brandon](https://bondflorida.com/services/immigration-bail-bonds/brandon)
- [https://bondflorida.com/services/immigration-bail-bonds/plant-city](https://bondflorida.com/services/immigration-bail-bonds/plant-city)
- [https://bondflorida.com/services/immigration-bail-bonds/orlando](https://bondflorida.com/services/immigration-bail-bonds/orlando)
- [https://bondflorida.com/services/immigration-bail-bonds/apopka](https://bondflorida.com/services/immigration-bail-bonds/apopka)
- [https://bondflorida.com/services/immigration-bail-bonds/winter-park](https://bondflorida.com/services/immigration-bail-bonds/winter-park)
- [https://bondflorida.com/services/immigration-bail-bonds/jacksonville-beach](https://bondflorida.com/services/immigration-bail-bonds/jacksonville-beach)
- [https://bondflorida.com/services/immigration-bail-bonds/st-petersburg](https://bondflorida.com/services/immigration-bail-bonds/st-petersburg)
- [https://bondflorida.com/services/immigration-bail-bonds/clearwater](https://bondflorida.com/services/immigration-bail-bonds/clearwater)
- [https://bondflorida.com/services/immigration-bail-bonds/winter-haven](https://bondflorida.com/services/immigration-bail-bonds/winter-haven)
- [https://bondflorida.com/services/immigration-bail-bonds/lakeland](https://bondflorida.com/services/immigration-bail-bonds/lakeland)
- [https://bondflorida.com/services/immigration-bail-bonds/new-port-richey](https://bondflorida.com/services/immigration-bail-bonds/new-port-richey)
- [https://bondflorida.com/services/immigration-bail-bonds/wesley-chapel](https://bondflorida.com/services/immigration-bail-bonds/wesley-chapel)
- [https://bondflorida.com/services/traffic-warrant-bail/miami](https://bondflorida.com/services/traffic-warrant-bail/miami)
- [https://bondflorida.com/services/traffic-warrant-bail/hialeah](https://bondflorida.com/services/traffic-warrant-bail/hialeah)
- [https://bondflorida.com/services/traffic-warrant-bail/miami-beach](https://bondflorida.com/services/traffic-warrant-bail/miami-beach)
- [https://bondflorida.com/services/traffic-warrant-bail/fort-lauderdale](https://bondflorida.com/services/traffic-warrant-bail/fort-lauderdale)
- [https://bondflorida.com/services/traffic-warrant-bail/hollywood](https://bondflorida.com/services/traffic-warrant-bail/hollywood)
- [https://bondflorida.com/services/traffic-warrant-bail/pompano-beach](https://bondflorida.com/services/traffic-warrant-bail/pompano-beach)
- [https://bondflorida.com/services/traffic-warrant-bail/brandon](https://bondflorida.com/services/traffic-warrant-bail/brandon)
- [https://bondflorida.com/services/traffic-warrant-bail/tampa](https://bondflorida.com/services/traffic-warrant-bail/tampa)
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
- [https://bondflorida.com/services/nebbia-hold-bail/pompano-beach](https://bondflorida.com/services/nebbia-hold-bail/pompano-beach)
- [https://bondflorida.com/services/nebbia-hold-bail/hollywood](https://bondflorida.com/services/nebbia-hold-bail/hollywood)
- [https://bondflorida.com/services/nebbia-hold-bail/tampa](https://bondflorida.com/services/nebbia-hold-bail/tampa)

</details>

---

### Security

*0 error(s), 3 warning(s)*

#### Content Security Policy **[WARN]**

`security/csp`

> Checks for Content-Security-Policy header and validates directives

**Solution:**

CSP prevents XSS attacks by restricting which resources can load. Start with a report-only policy to identify issues. Key directives: default-src 'self', script-src (avoid 'unsafe-inline'), img-src, style-src, frame-ancestors. Use nonces or hashes instead of 'unsafe-inline' for scripts. Test thoroughly as strict CSP can break functionality.

| Check | Status | Message |
|-------|--------|---------|
| csp-unsafe-scripts | ! warn | CSP allows 'unsafe-inline' and 'unsafe-eval' |

---

#### Form CAPTCHA **[WARN]**

`security/form-captcha`

> Checks for CAPTCHA protection on public forms

**Solution:**

Add CAPTCHA protection (reCAPTCHA, Cloudflare Turnstile, hCaptcha, etc.) to public-facing forms to prevent spam and bot submissions. Contact forms, comment forms, newsletter signups, and registration forms are common targets for automated abuse. Modern CAPTCHA solutions like Turnstile offer invisible protection with minimal user friction.

| Check | Status | Message |
|-------|--------|---------|
| form-captcha | ! warn | 1 public form(s) without CAPTCHA |

<details><summary><strong>form-captcha:</strong> 1 page(s) affected</summary>

- [/contact](https://bondflorida.com/contact)

</details>

<details><summary><strong>form-captcha:</strong> 1 item(s)</summary>

- form[0]

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

- [http://bondflorida.com/ → https://bondflorida.com/ (308)](http://bondflorida.com/)
- [http://bondflorida.com/contact → https://bondflorida.com/contact (308)](http://bondflorida.com/contact)
- [http://bondflorida.com/services/dui-bail-bonds → https://bondflorida.com/services/dui-bail-bonds (308)](http://bondflorida.com/services/dui-bail-bonds)
- [http://bondflorida.com/services/domestic-violence-bail → https://bondflorida.com/services/domestic-violence-bail (308)](http://bondflorida.com/services/domestic-violence-bail)
- [http://bondflorida.com/services/immigration-bail-bonds → https://bondflorida.com/services/immigration-bail-bonds (308)](http://bondflorida.com/services/immigration-bail-bonds)
- [http://bondflorida.com/services/traffic-warrant-bail → https://bondflorida.com/services/traffic-warrant-bail (308)](http://bondflorida.com/services/traffic-warrant-bail)
- [http://bondflorida.com/services/nebbia-hold-bail → https://bondflorida.com/services/nebbia-hold-bail (308)](http://bondflorida.com/services/nebbia-hold-bail)
- [http://bondflorida.com/county/miami-dade → https://bondflorida.com/county/miami-dade (308)](http://bondflorida.com/county/miami-dade)
- [http://bondflorida.com/county/broward → https://bondflorida.com/county/broward (308)](http://bondflorida.com/county/broward)
- [http://bondflorida.com/county/palm-beach → https://bondflorida.com/county/palm-beach (308)](http://bondflorida.com/county/palm-beach)
- [http://bondflorida.com/county/hillsborough → https://bondflorida.com/county/hillsborough (308)](http://bondflorida.com/county/hillsborough)
- [http://bondflorida.com/county/orange → https://bondflorida.com/county/orange (308)](http://bondflorida.com/county/orange)
- [http://bondflorida.com/county/duval → https://bondflorida.com/county/duval (308)](http://bondflorida.com/county/duval)
- [http://bondflorida.com/county/pinellas → https://bondflorida.com/county/pinellas (308)](http://bondflorida.com/county/pinellas)
- [http://bondflorida.com/county/lee → https://bondflorida.com/county/lee (308)](http://bondflorida.com/county/lee)
- [http://bondflorida.com/county/polk → https://bondflorida.com/county/polk (308)](http://bondflorida.com/county/polk)
- [http://bondflorida.com/county/pasco → https://bondflorida.com/county/pasco (308)](http://bondflorida.com/county/pasco)
- [http://bondflorida.com/services/dui-bail-bonds/miami → https://bondflorida.com/services/dui-bail-bonds/miami (308)](http://bondflorida.com/services/dui-bail-bonds/miami)
- [http://bondflorida.com/services/dui-bail-bonds/hialeah → https://bondflorida.com/services/dui-bail-bonds/hialeah (308)](http://bondflorida.com/services/dui-bail-bonds/hialeah)
- [http://bondflorida.com/services/dui-bail-bonds/miami-beach → https://bondflorida.com/services/dui-bail-bonds/miami-beach (308)](http://bondflorida.com/services/dui-bail-bonds/miami-beach)

</details>

---

### Links

*0 error(s), 3 warning(s)*

#### Broken External Links **[WARN]**

`links/broken-external-links`

> Detects external links returning 4xx/5xx errors or timeouts

**Solution:**

Broken external links hurt user experience and credibility. Regularly audit external links using automated tools. Remove or replace broken links with working alternatives. Consider using archived versions (archive.org) if the original content is gone. For important resources, consider hosting your own copies of critical documentation or linking to more stable sources.

| Check | Status | Message |
|-------|--------|---------|
| broken-external-links | ! warn | 5 broken external link(s): 4 failed, 1 with 404 |

<details><summary><strong>broken-external-links:</strong> 5 item(s)</summary>

- [https://www.pbso.org/arrestss/ (Error: timeout)](https://www.pbso.org/arrestss/)
  - from: [/county/palm-beach](https://bondflorida.com/county/palm-beach)
  - from: [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [https://www.teamhcso.com/ (Error: timeout)](https://www.teamhcso.com/)
  - from: [/county/hillsborough](https://bondflorida.com/county/hillsborough)
  - from: [/county/hillsborough](https://bondflorida.com/county/hillsborough)
  - from: [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
  - ... +12 more pages
- [https://inmatesearch.jaxsheriff.org/ (Error: unable to verify the first certificate)](https://inmatesearch.jaxsheriff.org/)
  - from: [/county/duval](https://bondflorida.com/county/duval)
  - from: [/county/duval](https://bondflorida.com/county/duval)
  - from: [/services/dui-bail-bonds/jacksonville-beach](https://bondflorida.com/services/dui-bail-bonds/jacksonville-beach)
  - ... +3 more pages
- [https://www.polksheriff.org/ (Error: timeout)](https://www.polksheriff.org/)
  - from: [/county/polk](https://bondflorida.com/county/polk)
  - from: [/county/polk](https://bondflorida.com/county/polk)
  - from: [/services/dui-bail-bonds/lakeland](https://bondflorida.com/services/dui-bail-bonds/lakeland)
  - ... +7 more pages
- [https://www.broward.org/arrestsearch (404)](https://www.broward.org/arrestsearch)
  - from: [/county/broward](https://bondflorida.com/county/broward)
  - from: [/county/broward](https://bondflorida.com/county/broward)
  - from: [/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
  - ... +14 more pages

</details>

---

#### Orphan Pages **[WARN]**

`links/orphan-pages`

> Detects pages with no internal links pointing to them

**Solution:**

Orphan pages have no internal links and are hard for search engines to discover. They may not get indexed or rank well. Add internal links from relevant pages. Include in navigation or sidebar. Add to sitemap. Create contextual links from related content. If intentionally orphaned (e.g., landing pages), ensure they're accessible via sitemap.

| Check | Status | Message |
|-------|--------|---------|
| orphan-pages | ! warn | 29 orphan page(s) with <2 incoming links |

<details><summary><strong>orphan-pages:</strong> 29 item(s)</summary>

- [https://bondflorida.com/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [https://bondflorida.com/county/broward](https://bondflorida.com/county/broward)
- [https://bondflorida.com/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [https://bondflorida.com/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [https://bondflorida.com/county/orange](https://bondflorida.com/county/orange)
- [https://bondflorida.com/county/duval](https://bondflorida.com/county/duval)
- [https://bondflorida.com/county/pinellas](https://bondflorida.com/county/pinellas)
- [https://bondflorida.com/county/lee](https://bondflorida.com/county/lee)
- [https://bondflorida.com/county/polk](https://bondflorida.com/county/polk)
- [https://bondflorida.com/county/pasco](https://bondflorida.com/county/pasco)
- [https://bondflorida.com/services/immigration-bail-bonds/miami](https://bondflorida.com/services/immigration-bail-bonds/miami)
- [https://bondflorida.com/services/immigration-bail-bonds/hialeah](https://bondflorida.com/services/immigration-bail-bonds/hialeah)
- [https://bondflorida.com/services/immigration-bail-bonds/fort-lauderdale](https://bondflorida.com/services/immigration-bail-bonds/fort-lauderdale)
- [https://bondflorida.com/services/immigration-bail-bonds/miami-beach](https://bondflorida.com/services/immigration-bail-bonds/miami-beach)
- [https://bondflorida.com/services/immigration-bail-bonds/hollywood](https://bondflorida.com/services/immigration-bail-bonds/hollywood)
- [https://bondflorida.com/services/immigration-bail-bonds/pompano-beach](https://bondflorida.com/services/immigration-bail-bonds/pompano-beach)
- [https://bondflorida.com/services/immigration-bail-bonds/tampa](https://bondflorida.com/services/immigration-bail-bonds/tampa)
- [https://bondflorida.com/services/immigration-bail-bonds/brandon](https://bondflorida.com/services/immigration-bail-bonds/brandon)
- [https://bondflorida.com/services/immigration-bail-bonds/plant-city](https://bondflorida.com/services/immigration-bail-bonds/plant-city)
- [https://bondflorida.com/services/immigration-bail-bonds/orlando](https://bondflorida.com/services/immigration-bail-bonds/orlando)
- [https://bondflorida.com/services/immigration-bail-bonds/apopka](https://bondflorida.com/services/immigration-bail-bonds/apopka)
- [https://bondflorida.com/services/immigration-bail-bonds/winter-park](https://bondflorida.com/services/immigration-bail-bonds/winter-park)
- [https://bondflorida.com/services/immigration-bail-bonds/jacksonville-beach](https://bondflorida.com/services/immigration-bail-bonds/jacksonville-beach)
- [https://bondflorida.com/services/immigration-bail-bonds/st-petersburg](https://bondflorida.com/services/immigration-bail-bonds/st-petersburg)
- [https://bondflorida.com/services/immigration-bail-bonds/clearwater](https://bondflorida.com/services/immigration-bail-bonds/clearwater)
- [https://bondflorida.com/services/immigration-bail-bonds/winter-haven](https://bondflorida.com/services/immigration-bail-bonds/winter-haven)
- [https://bondflorida.com/services/immigration-bail-bonds/lakeland](https://bondflorida.com/services/immigration-bail-bonds/lakeland)
- [https://bondflorida.com/services/immigration-bail-bonds/new-port-richey](https://bondflorida.com/services/immigration-bail-bonds/new-port-richey)
- [https://bondflorida.com/services/immigration-bail-bonds/wesley-chapel](https://bondflorida.com/services/immigration-bail-bonds/wesley-chapel)

</details>

---

#### Weak Internal Links **[WARN]**

`links/weak-internal-links`

> Detects pages with only 1 dofollow internal link pointing to them

**Solution:**

Pages with only a single internal link have weak internal linking support and may struggle to rank. Search engines use internal links to understand page importance and distribute link equity. Add contextual links from related content, include in navigation or sidebar, or link from category/hub pages to strengthen internal link profiles.

| Check | Status | Message |
|-------|--------|---------|
| weak-internal-links | ! warn | 10 page(s) have only 1 internal link |

<details><summary><strong>weak-internal-links:</strong> 10 item(s)</summary>

- [https://bondflorida.com/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [https://bondflorida.com/county/broward](https://bondflorida.com/county/broward)
- [https://bondflorida.com/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [https://bondflorida.com/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [https://bondflorida.com/county/orange](https://bondflorida.com/county/orange)
- [https://bondflorida.com/county/duval](https://bondflorida.com/county/duval)
- [https://bondflorida.com/county/pinellas](https://bondflorida.com/county/pinellas)
- [https://bondflorida.com/county/lee](https://bondflorida.com/county/lee)
- [https://bondflorida.com/county/polk](https://bondflorida.com/county/polk)
- [https://bondflorida.com/county/pasco](https://bondflorida.com/county/pasco)

</details>

---

### Content

*0 error(s), 101 warning(s)*

#### Keyword Stuffing **[WARN]**

`content/keyword-stuffing`

> Detects excessive keyword repetition in content

**Solution:**

Keyword stuffing is repeating words unnaturally to manipulate rankings. Search engines penalize this practice. Write naturally for users first. Use keywords where they fit naturally. Aim for 1-2% keyword density at most. Use synonyms and related terms instead of repeating the exact same phrase. Focus on providing value, not gaming algorithms.

| Check | Status | Message |
|-------|--------|---------|
| keyword-stuffing | ! warn | 1 word(s) may be overused |
| keyword-stuffing | ! warn | 3 word(s) may be overused |
| keyword-stuffing | ! warn | 4 word(s) may be overused |
| keyword-stuffing | ! warn | 6 word(s) may be overused |
| keyword-stuffing | ! warn | 2 word(s) may be overused |

<details><summary><strong>keyword-stuffing:</strong> 67 page(s) affected</summary>

- [/](https://bondflorida.com/)
- [/contact](https://bondflorida.com/contact)
- [/services/dui-bail-bonds](https://bondflorida.com/services/dui-bail-bonds)
- [/services/domestic-violence-bail](https://bondflorida.com/services/domestic-violence-bail)
- [/services/traffic-warrant-bail](https://bondflorida.com/services/traffic-warrant-bail)
- [/services/nebbia-hold-bail](https://bondflorida.com/services/nebbia-hold-bail)
- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/duval](https://bondflorida.com/county/duval)
- [/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
- [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)
- [/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)
- [/services/dui-bail-bonds/winter-park](https://bondflorida.com/services/dui-bail-bonds/winter-park)
- [/services/dui-bail-bonds/apopka](https://bondflorida.com/services/dui-bail-bonds/apopka)
- [/services/dui-bail-bonds/jacksonville-beach](https://bondflorida.com/services/dui-bail-bonds/jacksonville-beach)
- [/services/dui-bail-bonds/clearwater](https://bondflorida.com/services/dui-bail-bonds/clearwater)
- [/services/dui-bail-bonds/st-petersburg](https://bondflorida.com/services/dui-bail-bonds/st-petersburg)
- [/services/dui-bail-bonds/lakeland](https://bondflorida.com/services/dui-bail-bonds/lakeland)
- [/services/dui-bail-bonds/winter-haven](https://bondflorida.com/services/dui-bail-bonds/winter-haven)
- [/services/dui-bail-bonds/new-port-richey](https://bondflorida.com/services/dui-bail-bonds/new-port-richey)
- [/services/domestic-violence-bail/miami](https://bondflorida.com/services/domestic-violence-bail/miami)
- [/services/dui-bail-bonds/wesley-chapel](https://bondflorida.com/services/dui-bail-bonds/wesley-chapel)
- [/services/domestic-violence-bail/hialeah](https://bondflorida.com/services/domestic-violence-bail/hialeah)
- [/services/domestic-violence-bail/miami-beach](https://bondflorida.com/services/domestic-violence-bail/miami-beach)
- [/services/domestic-violence-bail/fort-lauderdale](https://bondflorida.com/services/domestic-violence-bail/fort-lauderdale)
- [/services/domestic-violence-bail/hollywood](https://bondflorida.com/services/domestic-violence-bail/hollywood)
- [/services/domestic-violence-bail/brandon](https://bondflorida.com/services/domestic-violence-bail/brandon)
- [/services/domestic-violence-bail/tampa](https://bondflorida.com/services/domestic-violence-bail/tampa)
- [/services/domestic-violence-bail/plant-city](https://bondflorida.com/services/domestic-violence-bail/plant-city)
- [/services/domestic-violence-bail/winter-park](https://bondflorida.com/services/domestic-violence-bail/winter-park)
- [/services/domestic-violence-bail/orlando](https://bondflorida.com/services/domestic-violence-bail/orlando)
- [/services/domestic-violence-bail/apopka](https://bondflorida.com/services/domestic-violence-bail/apopka)
- [/services/domestic-violence-bail/jacksonville-beach](https://bondflorida.com/services/domestic-violence-bail/jacksonville-beach)
- [/services/domestic-violence-bail/st-petersburg](https://bondflorida.com/services/domestic-violence-bail/st-petersburg)
- [/services/domestic-violence-bail/lakeland](https://bondflorida.com/services/domestic-violence-bail/lakeland)
- [/services/domestic-violence-bail/clearwater](https://bondflorida.com/services/domestic-violence-bail/clearwater)
- [/services/domestic-violence-bail/new-port-richey](https://bondflorida.com/services/domestic-violence-bail/new-port-richey)
- [/services/domestic-violence-bail/winter-haven](https://bondflorida.com/services/domestic-violence-bail/winter-haven)
- [/services/domestic-violence-bail/wesley-chapel](https://bondflorida.com/services/domestic-violence-bail/wesley-chapel)
- [/services/traffic-warrant-bail/miami](https://bondflorida.com/services/traffic-warrant-bail/miami)
- [/services/traffic-warrant-bail/hialeah](https://bondflorida.com/services/traffic-warrant-bail/hialeah)
- [/services/traffic-warrant-bail/fort-lauderdale](https://bondflorida.com/services/traffic-warrant-bail/fort-lauderdale)
- [/services/traffic-warrant-bail/hollywood](https://bondflorida.com/services/traffic-warrant-bail/hollywood)
- [/services/traffic-warrant-bail/brandon](https://bondflorida.com/services/traffic-warrant-bail/brandon)
- [/services/traffic-warrant-bail/tampa](https://bondflorida.com/services/traffic-warrant-bail/tampa)
- [/services/traffic-warrant-bail/plant-city](https://bondflorida.com/services/traffic-warrant-bail/plant-city)
- [/services/traffic-warrant-bail/orlando](https://bondflorida.com/services/traffic-warrant-bail/orlando)
- [/services/traffic-warrant-bail/winter-park](https://bondflorida.com/services/traffic-warrant-bail/winter-park)
- [/services/traffic-warrant-bail/apopka](https://bondflorida.com/services/traffic-warrant-bail/apopka)
- [/services/traffic-warrant-bail/st-petersburg](https://bondflorida.com/services/traffic-warrant-bail/st-petersburg)
- [/services/traffic-warrant-bail/clearwater](https://bondflorida.com/services/traffic-warrant-bail/clearwater)
- [/services/traffic-warrant-bail/lakeland](https://bondflorida.com/services/traffic-warrant-bail/lakeland)
- [/services/traffic-warrant-bail/winter-haven](https://bondflorida.com/services/traffic-warrant-bail/winter-haven)
- [/services/traffic-warrant-bail/wesley-chapel](https://bondflorida.com/services/traffic-warrant-bail/wesley-chapel)
- [/services/nebbia-hold-bail/miami](https://bondflorida.com/services/nebbia-hold-bail/miami)
- [/services/nebbia-hold-bail/hialeah](https://bondflorida.com/services/nebbia-hold-bail/hialeah)
- [/services/nebbia-hold-bail/miami-beach](https://bondflorida.com/services/nebbia-hold-bail/miami-beach)
- [/services/nebbia-hold-bail/fort-lauderdale](https://bondflorida.com/services/nebbia-hold-bail/fort-lauderdale)
- [/services/nebbia-hold-bail/pompano-beach](https://bondflorida.com/services/nebbia-hold-bail/pompano-beach)
- [/services/nebbia-hold-bail/hollywood](https://bondflorida.com/services/nebbia-hold-bail/hollywood)
- [/services/nebbia-hold-bail/tampa](https://bondflorida.com/services/nebbia-hold-bail/tampa)

</details>

<details><summary><strong>keyword-stuffing:</strong> 1 item(s)</summary>

- "bail" (6.2%)

</details>

<details><summary><strong>keyword-stuffing:</strong> 6 page(s) affected</summary>

- [/services/immigration-bail-bonds](https://bondflorida.com/services/immigration-bail-bonds)
- [/county/broward](https://bondflorida.com/county/broward)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/polk](https://bondflorida.com/county/polk)
- [/services/immigration-bail-bonds/pompano-beach](https://bondflorida.com/services/immigration-bail-bonds/pompano-beach)

</details>

<details><summary><strong>keyword-stuffing:</strong> 9 item(s)</summary>

- "bail" (6.7%)
- "bonds" (3.5%)
- "immigration" (3.5%)
- "county" (4.1%)
- "broward" (3.7%)
- "beach" (4.0%)
- "detention" (3.3%)
- "pinellas" (3.4%)
- "polk" (3.6%)

</details>

<details><summary><strong>keyword-stuffing:</strong> 2 page(s) affected</summary>

- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/lee](https://bondflorida.com/county/lee)

</details>

<details><summary><strong>keyword-stuffing:</strong> 7 item(s)</summary>

- "bail" (8.2%)
- "road" (4.3%)
- "jail" (3.6%)
- "orient" (3.2%)
- "county" (4.4%)
- "lee" (3.3%)
- "facility" (3.3%)

</details>

<details><summary><strong>keyword-stuffing:</strong> 1 page(s) affected</summary>

- [/county/orange](https://bondflorida.com/county/orange)

</details>

<details><summary><strong>keyword-stuffing:</strong> 6 item(s)</summary>

- "bail" (8.6%)
- "county" (3.9%)
- "release" (3.9%)
- "brc" (3.6%)
- "orange" (3.2%)
- "booking" (3.2%)

</details>

<details><summary><strong>keyword-stuffing:</strong> 24 page(s) affected</summary>

- [/county/pasco](https://bondflorida.com/county/pasco)
- [/services/domestic-violence-bail/pompano-beach](https://bondflorida.com/services/domestic-violence-bail/pompano-beach)
- [/services/immigration-bail-bonds/miami](https://bondflorida.com/services/immigration-bail-bonds/miami)
- [/services/immigration-bail-bonds/hialeah](https://bondflorida.com/services/immigration-bail-bonds/hialeah)
- [/services/immigration-bail-bonds/fort-lauderdale](https://bondflorida.com/services/immigration-bail-bonds/fort-lauderdale)
- [/services/immigration-bail-bonds/miami-beach](https://bondflorida.com/services/immigration-bail-bonds/miami-beach)
- [/services/immigration-bail-bonds/hollywood](https://bondflorida.com/services/immigration-bail-bonds/hollywood)
- [/services/immigration-bail-bonds/tampa](https://bondflorida.com/services/immigration-bail-bonds/tampa)
- [/services/immigration-bail-bonds/brandon](https://bondflorida.com/services/immigration-bail-bonds/brandon)
- [/services/immigration-bail-bonds/plant-city](https://bondflorida.com/services/immigration-bail-bonds/plant-city)
- [/services/immigration-bail-bonds/orlando](https://bondflorida.com/services/immigration-bail-bonds/orlando)
- [/services/immigration-bail-bonds/apopka](https://bondflorida.com/services/immigration-bail-bonds/apopka)
- [/services/immigration-bail-bonds/winter-park](https://bondflorida.com/services/immigration-bail-bonds/winter-park)
- [/services/immigration-bail-bonds/jacksonville-beach](https://bondflorida.com/services/immigration-bail-bonds/jacksonville-beach)
- [/services/immigration-bail-bonds/st-petersburg](https://bondflorida.com/services/immigration-bail-bonds/st-petersburg)
- [/services/immigration-bail-bonds/clearwater](https://bondflorida.com/services/immigration-bail-bonds/clearwater)
- [/services/immigration-bail-bonds/winter-haven](https://bondflorida.com/services/immigration-bail-bonds/winter-haven)
- [/services/immigration-bail-bonds/lakeland](https://bondflorida.com/services/immigration-bail-bonds/lakeland)
- [/services/immigration-bail-bonds/new-port-richey](https://bondflorida.com/services/immigration-bail-bonds/new-port-richey)
- [/services/immigration-bail-bonds/wesley-chapel](https://bondflorida.com/services/immigration-bail-bonds/wesley-chapel)
- [/services/traffic-warrant-bail/miami-beach](https://bondflorida.com/services/traffic-warrant-bail/miami-beach)
- [/services/traffic-warrant-bail/pompano-beach](https://bondflorida.com/services/traffic-warrant-bail/pompano-beach)
- [/services/traffic-warrant-bail/jacksonville-beach](https://bondflorida.com/services/traffic-warrant-bail/jacksonville-beach)
- [/services/traffic-warrant-bail/new-port-richey](https://bondflorida.com/services/traffic-warrant-bail/new-port-richey)

</details>

<details><summary><strong>keyword-stuffing:</strong> 5 item(s)</summary>

- "bail" (8.6%)
- "detention" (3.4%)
- "beach" (3.0%)
- "bonds" (3.4%)
- "port" (3.0%)

</details>

---

#### Word Count **[WARN]**

`content/word-count`

> Checks content length for thin content issues

**Solution:**

Pages with thin content (under 300 words) often struggle to rank well and are actively deindexed by Google since the June 2025 core update. Add more valuable, relevant content to thin pages—aim for at least 500 words for standard pages and 1000+ for in-depth articles. If a page can't be fleshed out, voluntarily noindex it or consolidate it into a more comprehensive resource. Trimming thin pages from your index is better than leaving low-value content for Google to penalize.

| Check | Status | Message |
|-------|--------|---------|
| word-count | ! warn | Thin content: 192 words (min 300) |

<details><summary><strong>word-count:</strong> 1 page(s) affected</summary>

- [/contact](https://bondflorida.com/contact)

</details>

---

### Performance

*0 error(s), 110 warning(s)*

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
| ttfb | ! warn | Slow server response (650ms) |
| ttfb | ! warn | Slow server response (657ms) |
| ttfb | ! warn | Slow server response (753ms) |
| ttfb | ! warn | Slow server response (721ms) |
| ttfb | ! warn | Slow server response (677ms) |
| ttfb | ! warn | Slow server response (603ms) |
| ttfb | ! warn | Slow server response (652ms) |
| ttfb | ! warn | Slow server response (621ms) |
| ttfb | ! warn | Slow server response (868ms) |

<details><summary><strong>ttfb:</strong> 1 page(s) affected</summary>

- [/county/pasco](https://bondflorida.com/county/pasco)

</details>

<details><summary><strong>ttfb:</strong> 1 page(s) affected</summary>

- [/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)

</details>

<details><summary><strong>ttfb:</strong> 1 page(s) affected</summary>

- [/services/dui-bail-bonds/lakeland](https://bondflorida.com/services/dui-bail-bonds/lakeland)

</details>

<details><summary><strong>ttfb:</strong> 1 page(s) affected</summary>

- [/services/dui-bail-bonds/winter-haven](https://bondflorida.com/services/dui-bail-bonds/winter-haven)

</details>

<details><summary><strong>ttfb:</strong> 2 page(s) affected</summary>

- [/services/domestic-violence-bail/st-petersburg](https://bondflorida.com/services/domestic-violence-bail/st-petersburg)
- [/services/immigration-bail-bonds/miami-beach](https://bondflorida.com/services/immigration-bail-bonds/miami-beach)

</details>

<details><summary><strong>ttfb:</strong> 1 page(s) affected</summary>

- [/services/immigration-bail-bonds/winter-haven](https://bondflorida.com/services/immigration-bail-bonds/winter-haven)

</details>

<details><summary><strong>ttfb:</strong> 1 page(s) affected</summary>

- [/services/immigration-bail-bonds/lakeland](https://bondflorida.com/services/immigration-bail-bonds/lakeland)

</details>

<details><summary><strong>ttfb:</strong> 1 page(s) affected</summary>

- [/services/traffic-warrant-bail/tampa](https://bondflorida.com/services/traffic-warrant-bail/tampa)

</details>

<details><summary><strong>ttfb:</strong> 1 page(s) affected</summary>

- [/services/nebbia-hold-bail/hollywood](https://bondflorida.com/services/nebbia-hold-bail/hollywood)

</details>

---

#### Critical Request Chains **[WARN]**

`perf/critical-request-chains`

> Identifies chains of dependent resources that delay rendering

**Solution:**

Critical request chains are sequences of dependent network requests that must complete before the page can render. Reduce chain depth by: 1) Inlining critical CSS instead of linking external files. 2) Adding async or defer to non-critical scripts. 3) Avoiding CSS @import — use <link> tags instead. 4) Using <link rel='preload'> for critical resources. 5) Reducing the number of render-blocking resources in <head>.

| Check | Status | Message |
|-------|--------|---------|
| critical-request-chains | ! warn | 2 critical request chain(s) found |

<details><summary><strong>critical-request-chains:</strong> 100 page(s) affected</summary>

- [/](https://bondflorida.com/)
- [/contact](https://bondflorida.com/contact)
- [/services/dui-bail-bonds](https://bondflorida.com/services/dui-bail-bonds)
- [/services/domestic-violence-bail](https://bondflorida.com/services/domestic-violence-bail)
- [/services/immigration-bail-bonds](https://bondflorida.com/services/immigration-bail-bonds)
- [/services/traffic-warrant-bail](https://bondflorida.com/services/traffic-warrant-bail)
- [/services/nebbia-hold-bail](https://bondflorida.com/services/nebbia-hold-bail)
- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/broward](https://bondflorida.com/county/broward)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/orange](https://bondflorida.com/county/orange)
- [/county/duval](https://bondflorida.com/county/duval)
- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/lee](https://bondflorida.com/county/lee)
- [/county/polk](https://bondflorida.com/county/polk)
- [/county/pasco](https://bondflorida.com/county/pasco)
- [/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
- [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)
- [/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)
- [/services/dui-bail-bonds/winter-park](https://bondflorida.com/services/dui-bail-bonds/winter-park)
- [/services/dui-bail-bonds/apopka](https://bondflorida.com/services/dui-bail-bonds/apopka)
- [/services/dui-bail-bonds/jacksonville-beach](https://bondflorida.com/services/dui-bail-bonds/jacksonville-beach)
- [/services/dui-bail-bonds/clearwater](https://bondflorida.com/services/dui-bail-bonds/clearwater)
- [/services/dui-bail-bonds/st-petersburg](https://bondflorida.com/services/dui-bail-bonds/st-petersburg)
- [/services/dui-bail-bonds/lakeland](https://bondflorida.com/services/dui-bail-bonds/lakeland)
- [/services/dui-bail-bonds/winter-haven](https://bondflorida.com/services/dui-bail-bonds/winter-haven)
- [/services/dui-bail-bonds/new-port-richey](https://bondflorida.com/services/dui-bail-bonds/new-port-richey)
- [/services/domestic-violence-bail/miami](https://bondflorida.com/services/domestic-violence-bail/miami)
- [/services/dui-bail-bonds/wesley-chapel](https://bondflorida.com/services/dui-bail-bonds/wesley-chapel)
- [/services/domestic-violence-bail/hialeah](https://bondflorida.com/services/domestic-violence-bail/hialeah)
- [/services/domestic-violence-bail/miami-beach](https://bondflorida.com/services/domestic-violence-bail/miami-beach)
- [/services/domestic-violence-bail/fort-lauderdale](https://bondflorida.com/services/domestic-violence-bail/fort-lauderdale)
- [/services/domestic-violence-bail/pompano-beach](https://bondflorida.com/services/domestic-violence-bail/pompano-beach)
- [/services/domestic-violence-bail/hollywood](https://bondflorida.com/services/domestic-violence-bail/hollywood)
- [/services/domestic-violence-bail/brandon](https://bondflorida.com/services/domestic-violence-bail/brandon)
- [/services/domestic-violence-bail/tampa](https://bondflorida.com/services/domestic-violence-bail/tampa)
- [/services/domestic-violence-bail/plant-city](https://bondflorida.com/services/domestic-violence-bail/plant-city)
- [/services/domestic-violence-bail/winter-park](https://bondflorida.com/services/domestic-violence-bail/winter-park)
- [/services/domestic-violence-bail/orlando](https://bondflorida.com/services/domestic-violence-bail/orlando)
- [/services/domestic-violence-bail/apopka](https://bondflorida.com/services/domestic-violence-bail/apopka)
- [/services/domestic-violence-bail/jacksonville-beach](https://bondflorida.com/services/domestic-violence-bail/jacksonville-beach)
- [/services/domestic-violence-bail/st-petersburg](https://bondflorida.com/services/domestic-violence-bail/st-petersburg)
- [/services/domestic-violence-bail/lakeland](https://bondflorida.com/services/domestic-violence-bail/lakeland)
- [/services/domestic-violence-bail/clearwater](https://bondflorida.com/services/domestic-violence-bail/clearwater)
- [/services/domestic-violence-bail/new-port-richey](https://bondflorida.com/services/domestic-violence-bail/new-port-richey)
- [/services/domestic-violence-bail/winter-haven](https://bondflorida.com/services/domestic-violence-bail/winter-haven)
- [/services/domestic-violence-bail/wesley-chapel](https://bondflorida.com/services/domestic-violence-bail/wesley-chapel)
- [/services/immigration-bail-bonds/miami](https://bondflorida.com/services/immigration-bail-bonds/miami)
- [/services/immigration-bail-bonds/hialeah](https://bondflorida.com/services/immigration-bail-bonds/hialeah)
- [/services/immigration-bail-bonds/fort-lauderdale](https://bondflorida.com/services/immigration-bail-bonds/fort-lauderdale)
- [/services/immigration-bail-bonds/miami-beach](https://bondflorida.com/services/immigration-bail-bonds/miami-beach)
- [/services/immigration-bail-bonds/hollywood](https://bondflorida.com/services/immigration-bail-bonds/hollywood)
- [/services/immigration-bail-bonds/pompano-beach](https://bondflorida.com/services/immigration-bail-bonds/pompano-beach)
- [/services/immigration-bail-bonds/tampa](https://bondflorida.com/services/immigration-bail-bonds/tampa)
- [/services/immigration-bail-bonds/brandon](https://bondflorida.com/services/immigration-bail-bonds/brandon)
- [/services/immigration-bail-bonds/plant-city](https://bondflorida.com/services/immigration-bail-bonds/plant-city)
- [/services/immigration-bail-bonds/orlando](https://bondflorida.com/services/immigration-bail-bonds/orlando)
- [/services/immigration-bail-bonds/apopka](https://bondflorida.com/services/immigration-bail-bonds/apopka)
- [/services/immigration-bail-bonds/winter-park](https://bondflorida.com/services/immigration-bail-bonds/winter-park)
- [/services/immigration-bail-bonds/jacksonville-beach](https://bondflorida.com/services/immigration-bail-bonds/jacksonville-beach)
- [/services/immigration-bail-bonds/st-petersburg](https://bondflorida.com/services/immigration-bail-bonds/st-petersburg)
- [/services/immigration-bail-bonds/clearwater](https://bondflorida.com/services/immigration-bail-bonds/clearwater)
- [/services/immigration-bail-bonds/winter-haven](https://bondflorida.com/services/immigration-bail-bonds/winter-haven)
- [/services/immigration-bail-bonds/lakeland](https://bondflorida.com/services/immigration-bail-bonds/lakeland)
- [/services/immigration-bail-bonds/new-port-richey](https://bondflorida.com/services/immigration-bail-bonds/new-port-richey)
- [/services/immigration-bail-bonds/wesley-chapel](https://bondflorida.com/services/immigration-bail-bonds/wesley-chapel)
- [/services/traffic-warrant-bail/miami](https://bondflorida.com/services/traffic-warrant-bail/miami)
- [/services/traffic-warrant-bail/hialeah](https://bondflorida.com/services/traffic-warrant-bail/hialeah)
- [/services/traffic-warrant-bail/miami-beach](https://bondflorida.com/services/traffic-warrant-bail/miami-beach)
- [/services/traffic-warrant-bail/fort-lauderdale](https://bondflorida.com/services/traffic-warrant-bail/fort-lauderdale)
- [/services/traffic-warrant-bail/hollywood](https://bondflorida.com/services/traffic-warrant-bail/hollywood)
- [/services/traffic-warrant-bail/pompano-beach](https://bondflorida.com/services/traffic-warrant-bail/pompano-beach)
- [/services/traffic-warrant-bail/brandon](https://bondflorida.com/services/traffic-warrant-bail/brandon)
- [/services/traffic-warrant-bail/tampa](https://bondflorida.com/services/traffic-warrant-bail/tampa)
- [/services/traffic-warrant-bail/plant-city](https://bondflorida.com/services/traffic-warrant-bail/plant-city)
- [/services/traffic-warrant-bail/orlando](https://bondflorida.com/services/traffic-warrant-bail/orlando)
- [/services/traffic-warrant-bail/winter-park](https://bondflorida.com/services/traffic-warrant-bail/winter-park)
- [/services/traffic-warrant-bail/apopka](https://bondflorida.com/services/traffic-warrant-bail/apopka)
- [/services/traffic-warrant-bail/jacksonville-beach](https://bondflorida.com/services/traffic-warrant-bail/jacksonville-beach)
- [/services/traffic-warrant-bail/st-petersburg](https://bondflorida.com/services/traffic-warrant-bail/st-petersburg)
- [/services/traffic-warrant-bail/clearwater](https://bondflorida.com/services/traffic-warrant-bail/clearwater)
- [/services/traffic-warrant-bail/lakeland](https://bondflorida.com/services/traffic-warrant-bail/lakeland)
- [/services/traffic-warrant-bail/winter-haven](https://bondflorida.com/services/traffic-warrant-bail/winter-haven)
- [/services/traffic-warrant-bail/new-port-richey](https://bondflorida.com/services/traffic-warrant-bail/new-port-richey)
- [/services/traffic-warrant-bail/wesley-chapel](https://bondflorida.com/services/traffic-warrant-bail/wesley-chapel)
- [/services/nebbia-hold-bail/miami](https://bondflorida.com/services/nebbia-hold-bail/miami)
- [/services/nebbia-hold-bail/hialeah](https://bondflorida.com/services/nebbia-hold-bail/hialeah)
- [/services/nebbia-hold-bail/miami-beach](https://bondflorida.com/services/nebbia-hold-bail/miami-beach)
- [/services/nebbia-hold-bail/fort-lauderdale](https://bondflorida.com/services/nebbia-hold-bail/fort-lauderdale)
- [/services/nebbia-hold-bail/pompano-beach](https://bondflorida.com/services/nebbia-hold-bail/pompano-beach)
- [/services/nebbia-hold-bail/hollywood](https://bondflorida.com/services/nebbia-hold-bail/hollywood)
- [/services/nebbia-hold-bail/tampa](https://bondflorida.com/services/nebbia-hold-bail/tampa)

</details>

<details><summary><strong>critical-request-chains:</strong> 2 item(s)</summary>

- CSS: /_next/static/chunks/62e58ef438f9e9ab.css
- JS: /_next/static/chunks/a6dad97d9634a72d.js

</details>

---

### Social Media

*0 error(s), 1 warning(s)*

#### OG URL Match **[WARN]**

`social/og-url-match`

> Checks that og:url matches canonical URL

**Solution:**

og:url should match your canonical URL. Mismatches can cause social share stats to be fragmented across different URLs. Use the same URL normalization (https, www, trailing slash) as your canonical tag. Facebook uses og:url for share counting and deduplication.

| Check | Status | Message |
|-------|--------|---------|
| og-url-match | ! warn | og:url does not match canonical URL |

<details><summary><strong>og-url-match:</strong> 1 page(s) affected</summary>

- [/contact](https://bondflorida.com/contact)

</details>

---

### Accessibility

*187 error(s), 116 warning(s)*

#### ARIA Input Field Name **[ERROR]**

`a11y/aria-input-field-name`

> Checks that input fields have accessible names

**Solution:**

All input fields need accessible names. Best options: 1) Use <label for='inputId'>. 2) Use aria-label or aria-labelledby. 3) Wrap input in <label>. Placeholder alone is not sufficient as it disappears when typing.

| Check | Status | Message |
|-------|--------|---------|
| aria-input-field-name | X fail | 1 input field(s) without accessible names |

<details><summary><strong>aria-input-field-name:</strong> 93 page(s) affected</summary>

- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/broward](https://bondflorida.com/county/broward)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/orange](https://bondflorida.com/county/orange)
- [/county/duval](https://bondflorida.com/county/duval)
- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/lee](https://bondflorida.com/county/lee)
- [/county/polk](https://bondflorida.com/county/polk)
- [/county/pasco](https://bondflorida.com/county/pasco)
- [/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
- [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)
- [/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)
- [/services/dui-bail-bonds/winter-park](https://bondflorida.com/services/dui-bail-bonds/winter-park)
- [/services/dui-bail-bonds/apopka](https://bondflorida.com/services/dui-bail-bonds/apopka)
- [/services/dui-bail-bonds/jacksonville-beach](https://bondflorida.com/services/dui-bail-bonds/jacksonville-beach)
- [/services/dui-bail-bonds/clearwater](https://bondflorida.com/services/dui-bail-bonds/clearwater)
- [/services/dui-bail-bonds/st-petersburg](https://bondflorida.com/services/dui-bail-bonds/st-petersburg)
- [/services/dui-bail-bonds/lakeland](https://bondflorida.com/services/dui-bail-bonds/lakeland)
- [/services/dui-bail-bonds/winter-haven](https://bondflorida.com/services/dui-bail-bonds/winter-haven)
- [/services/dui-bail-bonds/new-port-richey](https://bondflorida.com/services/dui-bail-bonds/new-port-richey)
- [/services/domestic-violence-bail/miami](https://bondflorida.com/services/domestic-violence-bail/miami)
- [/services/dui-bail-bonds/wesley-chapel](https://bondflorida.com/services/dui-bail-bonds/wesley-chapel)
- [/services/domestic-violence-bail/hialeah](https://bondflorida.com/services/domestic-violence-bail/hialeah)
- [/services/domestic-violence-bail/miami-beach](https://bondflorida.com/services/domestic-violence-bail/miami-beach)
- [/services/domestic-violence-bail/fort-lauderdale](https://bondflorida.com/services/domestic-violence-bail/fort-lauderdale)
- [/services/domestic-violence-bail/pompano-beach](https://bondflorida.com/services/domestic-violence-bail/pompano-beach)
- [/services/domestic-violence-bail/hollywood](https://bondflorida.com/services/domestic-violence-bail/hollywood)
- [/services/domestic-violence-bail/brandon](https://bondflorida.com/services/domestic-violence-bail/brandon)
- [/services/domestic-violence-bail/tampa](https://bondflorida.com/services/domestic-violence-bail/tampa)
- [/services/domestic-violence-bail/plant-city](https://bondflorida.com/services/domestic-violence-bail/plant-city)
- [/services/domestic-violence-bail/winter-park](https://bondflorida.com/services/domestic-violence-bail/winter-park)
- [/services/domestic-violence-bail/orlando](https://bondflorida.com/services/domestic-violence-bail/orlando)
- [/services/domestic-violence-bail/apopka](https://bondflorida.com/services/domestic-violence-bail/apopka)
- [/services/domestic-violence-bail/jacksonville-beach](https://bondflorida.com/services/domestic-violence-bail/jacksonville-beach)
- [/services/domestic-violence-bail/st-petersburg](https://bondflorida.com/services/domestic-violence-bail/st-petersburg)
- [/services/domestic-violence-bail/lakeland](https://bondflorida.com/services/domestic-violence-bail/lakeland)
- [/services/domestic-violence-bail/clearwater](https://bondflorida.com/services/domestic-violence-bail/clearwater)
- [/services/domestic-violence-bail/new-port-richey](https://bondflorida.com/services/domestic-violence-bail/new-port-richey)
- [/services/domestic-violence-bail/winter-haven](https://bondflorida.com/services/domestic-violence-bail/winter-haven)
- [/services/domestic-violence-bail/wesley-chapel](https://bondflorida.com/services/domestic-violence-bail/wesley-chapel)
- [/services/immigration-bail-bonds/miami](https://bondflorida.com/services/immigration-bail-bonds/miami)
- [/services/immigration-bail-bonds/hialeah](https://bondflorida.com/services/immigration-bail-bonds/hialeah)
- [/services/immigration-bail-bonds/fort-lauderdale](https://bondflorida.com/services/immigration-bail-bonds/fort-lauderdale)
- [/services/immigration-bail-bonds/miami-beach](https://bondflorida.com/services/immigration-bail-bonds/miami-beach)
- [/services/immigration-bail-bonds/hollywood](https://bondflorida.com/services/immigration-bail-bonds/hollywood)
- [/services/immigration-bail-bonds/pompano-beach](https://bondflorida.com/services/immigration-bail-bonds/pompano-beach)
- [/services/immigration-bail-bonds/tampa](https://bondflorida.com/services/immigration-bail-bonds/tampa)
- [/services/immigration-bail-bonds/brandon](https://bondflorida.com/services/immigration-bail-bonds/brandon)
- [/services/immigration-bail-bonds/plant-city](https://bondflorida.com/services/immigration-bail-bonds/plant-city)
- [/services/immigration-bail-bonds/orlando](https://bondflorida.com/services/immigration-bail-bonds/orlando)
- [/services/immigration-bail-bonds/apopka](https://bondflorida.com/services/immigration-bail-bonds/apopka)
- [/services/immigration-bail-bonds/winter-park](https://bondflorida.com/services/immigration-bail-bonds/winter-park)
- [/services/immigration-bail-bonds/jacksonville-beach](https://bondflorida.com/services/immigration-bail-bonds/jacksonville-beach)
- [/services/immigration-bail-bonds/st-petersburg](https://bondflorida.com/services/immigration-bail-bonds/st-petersburg)
- [/services/immigration-bail-bonds/clearwater](https://bondflorida.com/services/immigration-bail-bonds/clearwater)
- [/services/immigration-bail-bonds/winter-haven](https://bondflorida.com/services/immigration-bail-bonds/winter-haven)
- [/services/immigration-bail-bonds/lakeland](https://bondflorida.com/services/immigration-bail-bonds/lakeland)
- [/services/immigration-bail-bonds/new-port-richey](https://bondflorida.com/services/immigration-bail-bonds/new-port-richey)
- [/services/immigration-bail-bonds/wesley-chapel](https://bondflorida.com/services/immigration-bail-bonds/wesley-chapel)
- [/services/traffic-warrant-bail/miami](https://bondflorida.com/services/traffic-warrant-bail/miami)
- [/services/traffic-warrant-bail/hialeah](https://bondflorida.com/services/traffic-warrant-bail/hialeah)
- [/services/traffic-warrant-bail/miami-beach](https://bondflorida.com/services/traffic-warrant-bail/miami-beach)
- [/services/traffic-warrant-bail/fort-lauderdale](https://bondflorida.com/services/traffic-warrant-bail/fort-lauderdale)
- [/services/traffic-warrant-bail/hollywood](https://bondflorida.com/services/traffic-warrant-bail/hollywood)
- [/services/traffic-warrant-bail/pompano-beach](https://bondflorida.com/services/traffic-warrant-bail/pompano-beach)
- [/services/traffic-warrant-bail/brandon](https://bondflorida.com/services/traffic-warrant-bail/brandon)
- [/services/traffic-warrant-bail/tampa](https://bondflorida.com/services/traffic-warrant-bail/tampa)
- [/services/traffic-warrant-bail/plant-city](https://bondflorida.com/services/traffic-warrant-bail/plant-city)
- [/services/traffic-warrant-bail/orlando](https://bondflorida.com/services/traffic-warrant-bail/orlando)
- [/services/traffic-warrant-bail/winter-park](https://bondflorida.com/services/traffic-warrant-bail/winter-park)
- [/services/traffic-warrant-bail/apopka](https://bondflorida.com/services/traffic-warrant-bail/apopka)
- [/services/traffic-warrant-bail/jacksonville-beach](https://bondflorida.com/services/traffic-warrant-bail/jacksonville-beach)
- [/services/traffic-warrant-bail/st-petersburg](https://bondflorida.com/services/traffic-warrant-bail/st-petersburg)
- [/services/traffic-warrant-bail/clearwater](https://bondflorida.com/services/traffic-warrant-bail/clearwater)
- [/services/traffic-warrant-bail/lakeland](https://bondflorida.com/services/traffic-warrant-bail/lakeland)
- [/services/traffic-warrant-bail/winter-haven](https://bondflorida.com/services/traffic-warrant-bail/winter-haven)
- [/services/traffic-warrant-bail/new-port-richey](https://bondflorida.com/services/traffic-warrant-bail/new-port-richey)
- [/services/traffic-warrant-bail/wesley-chapel](https://bondflorida.com/services/traffic-warrant-bail/wesley-chapel)
- [/services/nebbia-hold-bail/miami](https://bondflorida.com/services/nebbia-hold-bail/miami)
- [/services/nebbia-hold-bail/hialeah](https://bondflorida.com/services/nebbia-hold-bail/hialeah)
- [/services/nebbia-hold-bail/miami-beach](https://bondflorida.com/services/nebbia-hold-bail/miami-beach)
- [/services/nebbia-hold-bail/fort-lauderdale](https://bondflorida.com/services/nebbia-hold-bail/fort-lauderdale)
- [/services/nebbia-hold-bail/pompano-beach](https://bondflorida.com/services/nebbia-hold-bail/pompano-beach)
- [/services/nebbia-hold-bail/hollywood](https://bondflorida.com/services/nebbia-hold-bail/hollywood)
- [/services/nebbia-hold-bail/tampa](https://bondflorida.com/services/nebbia-hold-bail/tampa)

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

<details><summary><strong>form-labels:</strong> 94 page(s) affected</summary>

- [/](https://bondflorida.com/)
- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/broward](https://bondflorida.com/county/broward)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/orange](https://bondflorida.com/county/orange)
- [/county/duval](https://bondflorida.com/county/duval)
- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/lee](https://bondflorida.com/county/lee)
- [/county/polk](https://bondflorida.com/county/polk)
- [/county/pasco](https://bondflorida.com/county/pasco)
- [/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
- [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)
- [/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)
- [/services/dui-bail-bonds/winter-park](https://bondflorida.com/services/dui-bail-bonds/winter-park)
- [/services/dui-bail-bonds/apopka](https://bondflorida.com/services/dui-bail-bonds/apopka)
- [/services/dui-bail-bonds/jacksonville-beach](https://bondflorida.com/services/dui-bail-bonds/jacksonville-beach)
- [/services/dui-bail-bonds/clearwater](https://bondflorida.com/services/dui-bail-bonds/clearwater)
- [/services/dui-bail-bonds/st-petersburg](https://bondflorida.com/services/dui-bail-bonds/st-petersburg)
- [/services/dui-bail-bonds/lakeland](https://bondflorida.com/services/dui-bail-bonds/lakeland)
- [/services/dui-bail-bonds/winter-haven](https://bondflorida.com/services/dui-bail-bonds/winter-haven)
- [/services/dui-bail-bonds/new-port-richey](https://bondflorida.com/services/dui-bail-bonds/new-port-richey)
- [/services/domestic-violence-bail/miami](https://bondflorida.com/services/domestic-violence-bail/miami)
- [/services/dui-bail-bonds/wesley-chapel](https://bondflorida.com/services/dui-bail-bonds/wesley-chapel)
- [/services/domestic-violence-bail/hialeah](https://bondflorida.com/services/domestic-violence-bail/hialeah)
- [/services/domestic-violence-bail/miami-beach](https://bondflorida.com/services/domestic-violence-bail/miami-beach)
- [/services/domestic-violence-bail/fort-lauderdale](https://bondflorida.com/services/domestic-violence-bail/fort-lauderdale)
- [/services/domestic-violence-bail/pompano-beach](https://bondflorida.com/services/domestic-violence-bail/pompano-beach)
- [/services/domestic-violence-bail/hollywood](https://bondflorida.com/services/domestic-violence-bail/hollywood)
- [/services/domestic-violence-bail/brandon](https://bondflorida.com/services/domestic-violence-bail/brandon)
- [/services/domestic-violence-bail/tampa](https://bondflorida.com/services/domestic-violence-bail/tampa)
- [/services/domestic-violence-bail/plant-city](https://bondflorida.com/services/domestic-violence-bail/plant-city)
- [/services/domestic-violence-bail/winter-park](https://bondflorida.com/services/domestic-violence-bail/winter-park)
- [/services/domestic-violence-bail/orlando](https://bondflorida.com/services/domestic-violence-bail/orlando)
- [/services/domestic-violence-bail/apopka](https://bondflorida.com/services/domestic-violence-bail/apopka)
- [/services/domestic-violence-bail/jacksonville-beach](https://bondflorida.com/services/domestic-violence-bail/jacksonville-beach)
- [/services/domestic-violence-bail/st-petersburg](https://bondflorida.com/services/domestic-violence-bail/st-petersburg)
- [/services/domestic-violence-bail/lakeland](https://bondflorida.com/services/domestic-violence-bail/lakeland)
- [/services/domestic-violence-bail/clearwater](https://bondflorida.com/services/domestic-violence-bail/clearwater)
- [/services/domestic-violence-bail/new-port-richey](https://bondflorida.com/services/domestic-violence-bail/new-port-richey)
- [/services/domestic-violence-bail/winter-haven](https://bondflorida.com/services/domestic-violence-bail/winter-haven)
- [/services/domestic-violence-bail/wesley-chapel](https://bondflorida.com/services/domestic-violence-bail/wesley-chapel)
- [/services/immigration-bail-bonds/miami](https://bondflorida.com/services/immigration-bail-bonds/miami)
- [/services/immigration-bail-bonds/hialeah](https://bondflorida.com/services/immigration-bail-bonds/hialeah)
- [/services/immigration-bail-bonds/fort-lauderdale](https://bondflorida.com/services/immigration-bail-bonds/fort-lauderdale)
- [/services/immigration-bail-bonds/miami-beach](https://bondflorida.com/services/immigration-bail-bonds/miami-beach)
- [/services/immigration-bail-bonds/hollywood](https://bondflorida.com/services/immigration-bail-bonds/hollywood)
- [/services/immigration-bail-bonds/pompano-beach](https://bondflorida.com/services/immigration-bail-bonds/pompano-beach)
- [/services/immigration-bail-bonds/tampa](https://bondflorida.com/services/immigration-bail-bonds/tampa)
- [/services/immigration-bail-bonds/brandon](https://bondflorida.com/services/immigration-bail-bonds/brandon)
- [/services/immigration-bail-bonds/plant-city](https://bondflorida.com/services/immigration-bail-bonds/plant-city)
- [/services/immigration-bail-bonds/orlando](https://bondflorida.com/services/immigration-bail-bonds/orlando)
- [/services/immigration-bail-bonds/apopka](https://bondflorida.com/services/immigration-bail-bonds/apopka)
- [/services/immigration-bail-bonds/winter-park](https://bondflorida.com/services/immigration-bail-bonds/winter-park)
- [/services/immigration-bail-bonds/jacksonville-beach](https://bondflorida.com/services/immigration-bail-bonds/jacksonville-beach)
- [/services/immigration-bail-bonds/st-petersburg](https://bondflorida.com/services/immigration-bail-bonds/st-petersburg)
- [/services/immigration-bail-bonds/clearwater](https://bondflorida.com/services/immigration-bail-bonds/clearwater)
- [/services/immigration-bail-bonds/winter-haven](https://bondflorida.com/services/immigration-bail-bonds/winter-haven)
- [/services/immigration-bail-bonds/lakeland](https://bondflorida.com/services/immigration-bail-bonds/lakeland)
- [/services/immigration-bail-bonds/new-port-richey](https://bondflorida.com/services/immigration-bail-bonds/new-port-richey)
- [/services/immigration-bail-bonds/wesley-chapel](https://bondflorida.com/services/immigration-bail-bonds/wesley-chapel)
- [/services/traffic-warrant-bail/miami](https://bondflorida.com/services/traffic-warrant-bail/miami)
- [/services/traffic-warrant-bail/hialeah](https://bondflorida.com/services/traffic-warrant-bail/hialeah)
- [/services/traffic-warrant-bail/miami-beach](https://bondflorida.com/services/traffic-warrant-bail/miami-beach)
- [/services/traffic-warrant-bail/fort-lauderdale](https://bondflorida.com/services/traffic-warrant-bail/fort-lauderdale)
- [/services/traffic-warrant-bail/hollywood](https://bondflorida.com/services/traffic-warrant-bail/hollywood)
- [/services/traffic-warrant-bail/pompano-beach](https://bondflorida.com/services/traffic-warrant-bail/pompano-beach)
- [/services/traffic-warrant-bail/brandon](https://bondflorida.com/services/traffic-warrant-bail/brandon)
- [/services/traffic-warrant-bail/tampa](https://bondflorida.com/services/traffic-warrant-bail/tampa)
- [/services/traffic-warrant-bail/plant-city](https://bondflorida.com/services/traffic-warrant-bail/plant-city)
- [/services/traffic-warrant-bail/orlando](https://bondflorida.com/services/traffic-warrant-bail/orlando)
- [/services/traffic-warrant-bail/winter-park](https://bondflorida.com/services/traffic-warrant-bail/winter-park)
- [/services/traffic-warrant-bail/apopka](https://bondflorida.com/services/traffic-warrant-bail/apopka)
- [/services/traffic-warrant-bail/jacksonville-beach](https://bondflorida.com/services/traffic-warrant-bail/jacksonville-beach)
- [/services/traffic-warrant-bail/st-petersburg](https://bondflorida.com/services/traffic-warrant-bail/st-petersburg)
- [/services/traffic-warrant-bail/clearwater](https://bondflorida.com/services/traffic-warrant-bail/clearwater)
- [/services/traffic-warrant-bail/lakeland](https://bondflorida.com/services/traffic-warrant-bail/lakeland)
- [/services/traffic-warrant-bail/winter-haven](https://bondflorida.com/services/traffic-warrant-bail/winter-haven)
- [/services/traffic-warrant-bail/new-port-richey](https://bondflorida.com/services/traffic-warrant-bail/new-port-richey)
- [/services/traffic-warrant-bail/wesley-chapel](https://bondflorida.com/services/traffic-warrant-bail/wesley-chapel)
- [/services/nebbia-hold-bail/miami](https://bondflorida.com/services/nebbia-hold-bail/miami)
- [/services/nebbia-hold-bail/hialeah](https://bondflorida.com/services/nebbia-hold-bail/hialeah)
- [/services/nebbia-hold-bail/miami-beach](https://bondflorida.com/services/nebbia-hold-bail/miami-beach)
- [/services/nebbia-hold-bail/fort-lauderdale](https://bondflorida.com/services/nebbia-hold-bail/fort-lauderdale)
- [/services/nebbia-hold-bail/pompano-beach](https://bondflorida.com/services/nebbia-hold-bail/pompano-beach)
- [/services/nebbia-hold-bail/hollywood](https://bondflorida.com/services/nebbia-hold-bail/hollywood)
- [/services/nebbia-hold-bail/tampa](https://bondflorida.com/services/nebbia-hold-bail/tampa)

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
| color-contrast | ! warn | 13 potential color contrast issue(s) |
| color-contrast | ! warn | 7 potential color contrast issue(s) |
| color-contrast | ! warn | 10 potential color contrast issue(s) |
| color-contrast | ! warn | 9 potential color contrast issue(s) |
| color-contrast | ! warn | 11 potential color contrast issue(s) |

<details><summary><strong>color-contrast:</strong> 84 page(s) affected</summary>

- [/](https://bondflorida.com/)
- [/services/dui-bail-bonds/miami](https://bondflorida.com/services/dui-bail-bonds/miami)
- [/services/dui-bail-bonds/hialeah](https://bondflorida.com/services/dui-bail-bonds/hialeah)
- [/services/dui-bail-bonds/miami-beach](https://bondflorida.com/services/dui-bail-bonds/miami-beach)
- [/services/dui-bail-bonds/hollywood](https://bondflorida.com/services/dui-bail-bonds/hollywood)
- [/services/dui-bail-bonds/fort-lauderdale](https://bondflorida.com/services/dui-bail-bonds/fort-lauderdale)
- [/services/dui-bail-bonds/pompano-beach](https://bondflorida.com/services/dui-bail-bonds/pompano-beach)
- [/services/dui-bail-bonds/tampa](https://bondflorida.com/services/dui-bail-bonds/tampa)
- [/services/dui-bail-bonds/brandon](https://bondflorida.com/services/dui-bail-bonds/brandon)
- [/services/dui-bail-bonds/orlando](https://bondflorida.com/services/dui-bail-bonds/orlando)
- [/services/dui-bail-bonds/plant-city](https://bondflorida.com/services/dui-bail-bonds/plant-city)
- [/services/dui-bail-bonds/winter-park](https://bondflorida.com/services/dui-bail-bonds/winter-park)
- [/services/dui-bail-bonds/apopka](https://bondflorida.com/services/dui-bail-bonds/apopka)
- [/services/dui-bail-bonds/jacksonville-beach](https://bondflorida.com/services/dui-bail-bonds/jacksonville-beach)
- [/services/dui-bail-bonds/clearwater](https://bondflorida.com/services/dui-bail-bonds/clearwater)
- [/services/dui-bail-bonds/st-petersburg](https://bondflorida.com/services/dui-bail-bonds/st-petersburg)
- [/services/dui-bail-bonds/lakeland](https://bondflorida.com/services/dui-bail-bonds/lakeland)
- [/services/dui-bail-bonds/winter-haven](https://bondflorida.com/services/dui-bail-bonds/winter-haven)
- [/services/dui-bail-bonds/new-port-richey](https://bondflorida.com/services/dui-bail-bonds/new-port-richey)
- [/services/domestic-violence-bail/miami](https://bondflorida.com/services/domestic-violence-bail/miami)
- [/services/dui-bail-bonds/wesley-chapel](https://bondflorida.com/services/dui-bail-bonds/wesley-chapel)
- [/services/domestic-violence-bail/hialeah](https://bondflorida.com/services/domestic-violence-bail/hialeah)
- [/services/domestic-violence-bail/miami-beach](https://bondflorida.com/services/domestic-violence-bail/miami-beach)
- [/services/domestic-violence-bail/fort-lauderdale](https://bondflorida.com/services/domestic-violence-bail/fort-lauderdale)
- [/services/domestic-violence-bail/pompano-beach](https://bondflorida.com/services/domestic-violence-bail/pompano-beach)
- [/services/domestic-violence-bail/hollywood](https://bondflorida.com/services/domestic-violence-bail/hollywood)
- [/services/domestic-violence-bail/brandon](https://bondflorida.com/services/domestic-violence-bail/brandon)
- [/services/domestic-violence-bail/tampa](https://bondflorida.com/services/domestic-violence-bail/tampa)
- [/services/domestic-violence-bail/plant-city](https://bondflorida.com/services/domestic-violence-bail/plant-city)
- [/services/domestic-violence-bail/winter-park](https://bondflorida.com/services/domestic-violence-bail/winter-park)
- [/services/domestic-violence-bail/orlando](https://bondflorida.com/services/domestic-violence-bail/orlando)
- [/services/domestic-violence-bail/apopka](https://bondflorida.com/services/domestic-violence-bail/apopka)
- [/services/domestic-violence-bail/jacksonville-beach](https://bondflorida.com/services/domestic-violence-bail/jacksonville-beach)
- [/services/domestic-violence-bail/st-petersburg](https://bondflorida.com/services/domestic-violence-bail/st-petersburg)
- [/services/domestic-violence-bail/lakeland](https://bondflorida.com/services/domestic-violence-bail/lakeland)
- [/services/domestic-violence-bail/clearwater](https://bondflorida.com/services/domestic-violence-bail/clearwater)
- [/services/domestic-violence-bail/new-port-richey](https://bondflorida.com/services/domestic-violence-bail/new-port-richey)
- [/services/domestic-violence-bail/winter-haven](https://bondflorida.com/services/domestic-violence-bail/winter-haven)
- [/services/domestic-violence-bail/wesley-chapel](https://bondflorida.com/services/domestic-violence-bail/wesley-chapel)
- [/services/immigration-bail-bonds/miami](https://bondflorida.com/services/immigration-bail-bonds/miami)
- [/services/immigration-bail-bonds/hialeah](https://bondflorida.com/services/immigration-bail-bonds/hialeah)
- [/services/immigration-bail-bonds/fort-lauderdale](https://bondflorida.com/services/immigration-bail-bonds/fort-lauderdale)
- [/services/immigration-bail-bonds/miami-beach](https://bondflorida.com/services/immigration-bail-bonds/miami-beach)
- [/services/immigration-bail-bonds/hollywood](https://bondflorida.com/services/immigration-bail-bonds/hollywood)
- [/services/immigration-bail-bonds/pompano-beach](https://bondflorida.com/services/immigration-bail-bonds/pompano-beach)
- [/services/immigration-bail-bonds/tampa](https://bondflorida.com/services/immigration-bail-bonds/tampa)
- [/services/immigration-bail-bonds/brandon](https://bondflorida.com/services/immigration-bail-bonds/brandon)
- [/services/immigration-bail-bonds/plant-city](https://bondflorida.com/services/immigration-bail-bonds/plant-city)
- [/services/immigration-bail-bonds/orlando](https://bondflorida.com/services/immigration-bail-bonds/orlando)
- [/services/immigration-bail-bonds/apopka](https://bondflorida.com/services/immigration-bail-bonds/apopka)
- [/services/immigration-bail-bonds/winter-park](https://bondflorida.com/services/immigration-bail-bonds/winter-park)
- [/services/immigration-bail-bonds/jacksonville-beach](https://bondflorida.com/services/immigration-bail-bonds/jacksonville-beach)
- [/services/immigration-bail-bonds/st-petersburg](https://bondflorida.com/services/immigration-bail-bonds/st-petersburg)
- [/services/immigration-bail-bonds/clearwater](https://bondflorida.com/services/immigration-bail-bonds/clearwater)
- [/services/immigration-bail-bonds/winter-haven](https://bondflorida.com/services/immigration-bail-bonds/winter-haven)
- [/services/immigration-bail-bonds/lakeland](https://bondflorida.com/services/immigration-bail-bonds/lakeland)
- [/services/immigration-bail-bonds/new-port-richey](https://bondflorida.com/services/immigration-bail-bonds/new-port-richey)
- [/services/immigration-bail-bonds/wesley-chapel](https://bondflorida.com/services/immigration-bail-bonds/wesley-chapel)
- [/services/traffic-warrant-bail/miami](https://bondflorida.com/services/traffic-warrant-bail/miami)
- [/services/traffic-warrant-bail/hialeah](https://bondflorida.com/services/traffic-warrant-bail/hialeah)
- [/services/traffic-warrant-bail/miami-beach](https://bondflorida.com/services/traffic-warrant-bail/miami-beach)
- [/services/traffic-warrant-bail/fort-lauderdale](https://bondflorida.com/services/traffic-warrant-bail/fort-lauderdale)
- [/services/traffic-warrant-bail/hollywood](https://bondflorida.com/services/traffic-warrant-bail/hollywood)
- [/services/traffic-warrant-bail/pompano-beach](https://bondflorida.com/services/traffic-warrant-bail/pompano-beach)
- [/services/traffic-warrant-bail/brandon](https://bondflorida.com/services/traffic-warrant-bail/brandon)
- [/services/traffic-warrant-bail/tampa](https://bondflorida.com/services/traffic-warrant-bail/tampa)
- [/services/traffic-warrant-bail/plant-city](https://bondflorida.com/services/traffic-warrant-bail/plant-city)
- [/services/traffic-warrant-bail/orlando](https://bondflorida.com/services/traffic-warrant-bail/orlando)
- [/services/traffic-warrant-bail/winter-park](https://bondflorida.com/services/traffic-warrant-bail/winter-park)
- [/services/traffic-warrant-bail/apopka](https://bondflorida.com/services/traffic-warrant-bail/apopka)
- [/services/traffic-warrant-bail/jacksonville-beach](https://bondflorida.com/services/traffic-warrant-bail/jacksonville-beach)
- [/services/traffic-warrant-bail/st-petersburg](https://bondflorida.com/services/traffic-warrant-bail/st-petersburg)
- [/services/traffic-warrant-bail/clearwater](https://bondflorida.com/services/traffic-warrant-bail/clearwater)
- [/services/traffic-warrant-bail/lakeland](https://bondflorida.com/services/traffic-warrant-bail/lakeland)
- [/services/traffic-warrant-bail/winter-haven](https://bondflorida.com/services/traffic-warrant-bail/winter-haven)
- [/services/traffic-warrant-bail/new-port-richey](https://bondflorida.com/services/traffic-warrant-bail/new-port-richey)
- [/services/traffic-warrant-bail/wesley-chapel](https://bondflorida.com/services/traffic-warrant-bail/wesley-chapel)
- [/services/nebbia-hold-bail/miami](https://bondflorida.com/services/nebbia-hold-bail/miami)
- [/services/nebbia-hold-bail/hialeah](https://bondflorida.com/services/nebbia-hold-bail/hialeah)
- [/services/nebbia-hold-bail/miami-beach](https://bondflorida.com/services/nebbia-hold-bail/miami-beach)
- [/services/nebbia-hold-bail/fort-lauderdale](https://bondflorida.com/services/nebbia-hold-bail/fort-lauderdale)
- [/services/nebbia-hold-bail/pompano-beach](https://bondflorida.com/services/nebbia-hold-bail/pompano-beach)
- [/services/nebbia-hold-bail/hollywood](https://bondflorida.com/services/nebbia-hold-bail/hollywood)
- [/services/nebbia-hold-bail/tampa](https://bondflorida.com/services/nebbia-hold-bail/tampa)

</details>

<details><summary><strong>color-contrast:</strong> 18 item(s)</summary>

- a with class "hidden sm:block text-slate-300..." may have low contrast
- span with class "block text-xl md:text-2xl text..." may have low contrast
- span with class "text-slate-400 text-lg block m..." may have low contrast
- p with class "max-w-2xl mx-auto text-slate-4..." may have low contrast
- div with class "flex flex-wrap justify-center ..." may have low contrast
- p with class "text-lg text-slate-400 max-w-2..." may have low contrast
- p with class "text-slate-400 leading-relaxed..." may have low contrast
- p with class "text-slate-400 mb-8 leading-re..." may have low contrast
- p with class "text-xl text-slate-300 italic ..." may have low contrast
- p with class "text-slate-400 max-w-xl..." may have low contrast
- p with class "text-lg text-slate-300 leading..." may have low contrast
- p with class "text-slate-400 mb-6 italic bor..." may have low contrast
- div with class "flex items-center gap-4 text-s..." may have low contrast
- li with class "text-slate-300..." may have low contrast
- p with class "text-sm text-slate-400..." may have low contrast
- label with class "block text-xs font-bold text-s..." may have low contrast
- button with class "flex items-center justify-cent..." may have low contrast
- div with class "space-y-4 text-sm text-slate-4..." may have low contrast

</details>

<details><summary><strong>color-contrast:</strong> 1 page(s) affected</summary>

- [/contact](https://bondflorida.com/contact)

</details>

<details><summary><strong>color-contrast:</strong> 7 item(s)</summary>

- a with class "hidden sm:block text-slate-300..." may have low contrast
- p with class "text-xl text-slate-400 max-w-2..." may have low contrast
- p with class "text-slate-400 mb-6..." may have low contrast
- p with class "text-slate-400..." may have low contrast
- ol with class "space-y-4 text-slate-400 list-..." may have low contrast
- label with class "block text-xs font-bold text-s..." may have low contrast
- footer with class "py-16 bg-slate-950 text-slate-..." may have low contrast

</details>

<details><summary><strong>color-contrast:</strong> 4 page(s) affected</summary>

- [/services/dui-bail-bonds](https://bondflorida.com/services/dui-bail-bonds)
- [/services/domestic-violence-bail](https://bondflorida.com/services/domestic-violence-bail)
- [/services/traffic-warrant-bail](https://bondflorida.com/services/traffic-warrant-bail)
- [/services/nebbia-hold-bail](https://bondflorida.com/services/nebbia-hold-bail)

</details>

<details><summary><strong>color-contrast:</strong> 10 item(s)</summary>

- a with class "hidden sm:block text-slate-300..." may have low contrast
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

<details><summary><strong>color-contrast:</strong> 9 item(s)</summary>

- a with class "hidden sm:block text-slate-300..." may have low contrast
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
- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/orange](https://bondflorida.com/county/orange)
- [/county/duval](https://bondflorida.com/county/duval)
- [/county/pinellas](https://bondflorida.com/county/pinellas)
- [/county/lee](https://bondflorida.com/county/lee)
- [/county/polk](https://bondflorida.com/county/polk)
- [/county/pasco](https://bondflorida.com/county/pasco)

</details>

<details><summary><strong>color-contrast:</strong> 10 item(s)</summary>

- a with class "hidden sm:block text-slate-300..." may have low contrast
- span with class "block text-xl md:text-2xl text..." may have low contrast
- span with class "text-slate-400 text-lg block m..." may have low contrast
- p with class "max-w-2xl mx-auto text-slate-4..." may have low contrast
- div with class "flex items-start gap-3 text-sl..." may have low contrast
- p with class "text-slate-400 text-sm..." may have low contrast
- li with class "flex items-center gap-2 text-s..." may have low contrast
- p with class "text-slate-400 leading-relaxed..." may have low contrast
- label with class "block text-xs font-bold text-s..." may have low contrast
- button with class "flex items-center justify-cent..." may have low contrast

</details>

---

#### Heading Order **[WARN]**

`a11y/heading-order`

> Checks that heading levels don't skip

**Solution:**

Headings should follow a logical hierarchy without skipping levels. Screen reader users navigate by headings, so skipping from H1 to H3 is confusing. Correct order: H1 -> H2 -> H3 (not H1 -> H3). You can have multiple headings at the same level, and you can go back up (H3 -> H2 is fine). Think of headings as an outline - they should make sense when read alone.

| Check | Status | Message |
|-------|--------|---------|
| heading-order | ! warn | 2 heading level skip(s) detected |
| heading-order | ! warn | 1 heading level skip(s) detected |

<details><summary><strong>heading-order:</strong> 1 page(s) affected</summary>

- [/contact](https://bondflorida.com/contact)

</details>

<details><summary><strong>heading-order:</strong> 2 item(s)</summary>

- H3 after H1
- H4 after H2

</details>

<details><summary><strong>heading-order:</strong> 15 page(s) affected</summary>

- [/services/dui-bail-bonds](https://bondflorida.com/services/dui-bail-bonds)
- [/services/domestic-violence-bail](https://bondflorida.com/services/domestic-violence-bail)
- [/services/immigration-bail-bonds](https://bondflorida.com/services/immigration-bail-bonds)
- [/services/traffic-warrant-bail](https://bondflorida.com/services/traffic-warrant-bail)
- [/services/nebbia-hold-bail](https://bondflorida.com/services/nebbia-hold-bail)
- [/county/miami-dade](https://bondflorida.com/county/miami-dade)
- [/county/broward](https://bondflorida.com/county/broward)
- [/county/palm-beach](https://bondflorida.com/county/palm-beach)
- [/county/hillsborough](https://bondflorida.com/county/hillsborough)
- [/county/orange](https://bondflorida.com/county/orange)
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