<?xml version="1.0" encoding="UTF-8"?>
<audit version="0.0.88">
<site url="https://bondflorida.com" crawled="331" date="2026-08-30T12:35:43.176Z"/>
<score overall="67" grade="D">
 <group name="SEO" score="65" errors="630" warnings="1164"/>
 <group name="Performance" score="73" errors="2" warnings="333"/>
 <group name="Security" score="95" errors="0" warnings="2"/>
 <group name="Agents" score="50" errors="0" warnings="330"/>
 <cat name="Accessibility" score="48"/>
 <cat name="Performance" score="73"/>
 <cat name="Links" score="72"/>
 <cat name="Agent Experience" score="50"/>
 <cat name="Content" score="57"/>
 <cat name="Core SEO" score="88"/>
 <cat name="Social Media" score="71"/>
 <cat name="Crawlability" score="88"/>
 <cat name="Security" score="94"/>
 <cat name="Structured Data" score="88"/>
 <cat name="E-E-A-T" score="100"/>
 <cat name="Internationalization" score="100"/>
 <cat name="Images" score="100"/>
 <cat name="Site Integrity" score="100"/>
 <cat name="Legal Compliance" score="100"/>
 <cat name="Local SEO" score="100"/>
 <cat name="Mobile" score="100"/>
 <cat name="URL Structure" score="100"/>
</score>
<summary passed="33015" warnings="1894" failed="632"/>
<scan-scope origin="cli" crawled="331" max-pages="400" capped="false"/>
<technologies first-scan="false" added="0" removed="0">
 <tech name="React" cat="framework"/>
 <tech name="Next.js" cat="framework"/>
 <tech name="Vercel Edge Network" cat="cdn"/>
 <tech name="Vercel" cat="hosting"/>
</technologies>
<issues>
 <rule id="links/broken-links" severity="error" category="Links" group="seo" status="fail" docs="https://docs.squirrelscan.com/rules/links/broken-links">
  1 broken internal link(s) (4xx/5xx)
  Pages (1): /locations
  Items (1):
   - /county/pasco/dade-city (https://bondflorida.com/county/pasco/dade-city (404)) [statusCode: 404, linkedFrom: 1] (from: /locations)
 </rule>
 <rule id="a11y/aria-input-field-name" severity="error" category="Accessibility" group="seo" status="fail" docs="https://docs.squirrelscan.com/rules/a11y/aria-input-field-name">
  1 input field(s) without accessible names
  Pages (5/314): /county/brevard, /county/broward, /county/columbia, /county/duval, /county/hillsborough
  Items (1):
   - input[type=&quot;time&quot;]
 </rule>
 <rule id="a11y/form-labels" severity="error" category="Accessibility" group="seo" status="fail" docs="https://docs.squirrelscan.com/rules/a11y/form-labels">
  1 form input(s) without labels
  Pages (5/315): /, /county/brevard, /county/broward, /county/columbia, /county/duval
  Items (2):
   - number
   - time
 </rule>
 <rule id="schema/breadcrumb" severity="info" category="Structured Data" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/schema/breadcrumb">
  Breadcrumb positions not sequential
  Pages (5/61): /locations, /resources, /warrant-search, /county/brevard, /county/broward
 </rule>
 <rule id="legal/subprocessor-disclosure" severity="info" category="Legal Compliance" group="security" status="warn" docs="https://docs.squirrelscan.com/rules/legal/subprocessor-disclosure">
  No sub-processor / data-processing (DPA) disclosure found
 </rule>
 <rule id="ax/agents-md" severity="info" category="Agent Experience" group="ai" status="warn" docs="https://docs.squirrelscan.com/rules/ax/agents-md">
  No AGENTS.md found — this site publishes llms.txt, so consider an AGENTS.md for coding agents too
 </rule>
 <rule id="ax/llms-txt" severity="info" category="Agent Experience" group="ai" status="warn" docs="https://docs.squirrelscan.com/rules/ax/llms-txt">
  llms.txt format notes: no Markdown links found
 </rule>
 <rule id="ax/markdown-response" severity="info" category="Agent Experience" group="ai" status="warn" docs="https://docs.squirrelscan.com/rules/ax/markdown-response">
  No Markdown response — consider honoring Accept: text/markdown or publishing a .md variant so agents get clean content
 </rule>
 <rule id="crawl/sitemap-4xx" severity="warning" category="Crawlability" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/crawl/sitemap-4xx">
  1 sitemap URL(s) return 4XX
  Pages (1): /county/pasco/dade-city
  Items (1):
   - /county/pasco/dade-city [status: 404]
 </rule>
 <rule id="crawl/canonical-chain" severity="warning" category="Crawlability" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/crawl/canonical-chain">
  Page redirects before content is served
  Pages (2): /, /
  Items (1):
   - / (https://bondflorida.com → https://bondflorida.com/) [finalUrl: https://bondflorida.com/, chain: {&quot;sourceUrl&quot;:&quot;https://bondflorida.com/&quot;,&quot;finalUrl&quot;:&quot;https://bondflorida.com/&quot;,&quot;hops&quot;:[{&quot;url&quot;:&quot;https://bondflorida.com/&quot;,&quot;statusCode&quot;:200,&quot;type&quot;:&quot;http&quot;}],&quot;chainLength&quot;:0,&quot;isLoop&quot;:false,&quot;endsInError&quot;:f…]
 </rule>
 <rule id="crawl/noindex-in-sitemap" severity="warning" category="Crawlability" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/crawl/noindex-in-sitemap">
  2 noindexed page(s) found in sitemap
  Pages (2): /privacy, /terms
  Items (2):
   - /privacy
   - /terms
 </rule>
 <rule id="crawl/indexability-conflicts" severity="warning" category="Crawlability" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/crawl/indexability-conflicts">
  2 page(s) allowed in robots.txt but have noindex
 </rule>
 <rule id="crawl/sitemap-lastmod-churn" severity="warning" category="Crawlability" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/crawl/sitemap-lastmod-churn">
  341 sitemap URL(s) with lastmod collapse onto 1 distinct day(s): 2026-08-24 (from https://bondflorida.com/sitemap.xml)
  Items (1):
   - 2026-08-24 [count: 341]
 </rule>
 <rule id="core/meta-title" severity="warning" category="Core SEO" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/core/meta-title">
  Title too long
  Pages (5/67): /about, /locations, /resources, /warrant-search, /county/hillsborough
  Items (5/67):
   - /about (About Bond Florida | Licensed Bail Bondsmen Servin (85 chars))
   - /county/broward/fort-lauderdale (Bail Bonds Fort Lauderdale | 10-15 minutes Jail Re (81 chars))
   - /county/broward/pompano-beach (Bail Bonds Pompano Beach | 15-25 minutes Jail Rele (79 chars))
   - /county/duval/jacksonville-beach (Bail Bonds Jacksonville Beach | 25-40 minutes Jail (84 chars))
   - /county/hillsborough (Hillsborough County Bail Bonds | 24/7 Fast Release (76 chars))
 </rule>
 <rule id="core/meta-description" severity="warning" category="Core SEO" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/core/meta-description">
  Description too long; Description too short
  Pages (5/52): /locations, /privacy, /terms, /warrant-search, /county/marion
  Items (5/52):
   - /county/broward/fort-lauderdale (Arrested in Fort Lauderdale by Fort Lauderdale Pol (176 chars))
   - /county/broward/hollywood (Arrested in Hollywood by Hollywood Police Departme (164 chars))
   - /county/broward/pompano-beach (Arrested in Pompano Beach by BSO District 11 (Pomp (172 chars))
   - /county/columbia/lake-city (Arrested in Lake City by Lake City Police Departme (175 chars))
   - /county/duval/jacksonville-beach (Arrested in Jacksonville Beach by Jacksonville Bea (198 chars))
 </rule>
 <rule id="core/robots-meta" severity="warning" category="Core SEO" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/core/robots-meta">
  Page is set to noindex
  Pages (2): /privacy, /terms
 </rule>
 <rule id="security/csp" severity="warning" category="Security" group="security" status="warn" docs="https://docs.squirrelscan.com/rules/security/csp">
  CSP allows &apos;unsafe-inline&apos; and &apos;unsafe-eval&apos;
 </rule>
 <rule id="security/form-captcha" severity="warning" category="Security" group="security" status="warn" docs="https://docs.squirrelscan.com/rules/security/form-captcha">
  1 public form(s) without CAPTCHA
  Pages (1): /contact
  Items (1):
   - form[0]
 </rule>
 <rule id="links/https-downgrade" severity="warning" category="Links" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/links/https-downgrade">
  1 link(s) downgrade to HTTP
  Pages (2): http://www.pbso.org, /jail/palm-beach-county-main-detention-center
  Items (1):
   - http://www.pbso.org
 </rule>
 <rule id="links/orphan-pages" severity="warning" category="Links" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/links/orphan-pages">
  120 orphan page(s) with &lt;2 incoming links
  Pages (5/120): /county/brevard/cocoa, /county/columbia/lake-city, /county/indian-river/vero-beach, /county/lee/bonita-springs, /county/manatee/bradenton
  Items (5/120):
   - /county/brevard/cocoa
   - /county/columbia/lake-city
   - /county/indian-river/vero-beach
   - /county/lee/bonita-springs
   - /county/manatee/bradenton
 </rule>
 <rule id="links/internal-links" severity="warning" category="Links" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/links/internal-links">
  Too many internal links (103, max 100)
  Pages (1): /locations
  Items (1):
   - /locations (Too many internal links (103, max 100))
 </rule>
 <rule id="links/no-contextual-inbound" severity="warning" category="Links" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/links/no-contextual-inbound">
  10 page(s) are linked only from sitewide chrome
  Pages (5/10): /about, /privacy, /resources, /terms, /jail/broward-county-main-jail
  Items (5/10):
   - /about
   - /jail/broward-county-main-jail
   - /jail/duval-county-pre-trial-detention-facility
   - /jail/metro-west-detention-center
   - /jail/orange-county-booking-and-release-center
 </rule>
 <rule id="links/weak-internal-links" severity="warning" category="Links" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/links/weak-internal-links">
  100 page(s) have only 1 internal link
  Pages (5/100): /county/brevard/cocoa, /county/columbia/lake-city, /county/indian-river/vero-beach, /county/lee/bonita-springs, /county/manatee/bradenton
  Items (5/100):
   - /county/brevard/cocoa
   - /county/columbia/lake-city
   - /county/indian-river/vero-beach
   - /county/lee/bonita-springs
   - /county/manatee/bradenton
 </rule>
 <rule id="content/keyword-stuffing" severity="warning" category="Content" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/content/keyword-stuffing">
  N word(s) may be overused
  Pages (5/322): /, /about, /contact, /locations, /privacy
  Items (5/17):
   - bail (&quot;bail&quot; (4.7%)) [count: 34, density: 4.670329670329671]
   - beach (&quot;beach&quot; (3.2%)) [count: 14, density: 3.153153153153153]
   - booking (&quot;booking&quot; (3.8%)) [count: 27, density: 3.7815126050420167]
   - broward (&quot;broward&quot; (3.1%)) [count: 21, density: 3.061224489795918]
   - county (&quot;county&quot; (3.7%)) [count: 27, density: 3.708791208791209]
 </rule>
 <rule id="content/word-count" severity="warning" category="Content" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/content/word-count">
  Thin content: N words (min N)
  Pages (3): /contact, /privacy, /terms
  Items (3):
   - /contact (Thin content: 233 words (min 300))
   - /privacy (Thin content: 262 words (min 300))
   - /terms (Thin content: 268 words (min 300))
 </rule>
 <rule id="schema/coverage-outlier" severity="warning" category="Structured Data" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/schema/coverage-outlier">
  3 of 60 page(s) are missing structured data their same-type siblings have (faq BailBondBusiness+BreadcrumbList+FAQPage)
  Pages (3): /, /locations, /resources
  Items (2):
   - faq:BailBondBusiness (58 of 60 faq pages have BailBondBusiness schema, these 2 do not) [pageType: faq, schemaType: BailBondBusiness, richResult: false, have: 58, total: 60, missing: 2] (from: /locations, /resources)
   - faq:BreadcrumbList (59 of 60 faq pages have BreadcrumbList schema, these 1 do not) [pageType: faq, schemaType: BreadcrumbList, richResult: true, have: 59, total: 60, missing: 1] (from: /)
 </rule>
 <rule id="perf/ttfb" severity="warning" category="Performance" group="performance" status="warn" docs="https://docs.squirrelscan.com/rules/perf/ttfb">
  Slow server response (Nms)
  Pages (3): /services/immigration-bail-bonds/boca-raton, /services/immigration-bail-bonds/west-palm-beach, /services/nebbia-hold-bail/apopka
  Items (3):
   - /services/immigration-bail-bonds/boca-raton (Slow server response (616ms))
   - /services/immigration-bail-bonds/west-palm-beach (Slow server response (621ms))
   - /services/nebbia-hold-bail/apopka (Slow server response (605ms))
 </rule>
 <rule id="perf/total-byte-weight" severity="warning" category="Performance" group="performance" status="fail" docs="https://docs.squirrelscan.com/rules/perf/total-byte-weight">
  Total tracked resources: 15506KB (very heavy)
 </rule>
 <rule id="perf/bad-caching" severity="warning" category="Performance" group="performance" status="fail" docs="https://docs.squirrelscan.com/rules/perf/bad-caching">
  330/330 pages lack a caching freshness lifetime
  Pages (5): /, /about, /contact, /county/brevard, /county/brevard/cocoa
 </rule>
 <rule id="perf/critical-request-chains" severity="warning" category="Performance" group="performance" status="warn" docs="https://docs.squirrelscan.com/rules/perf/critical-request-chains">
  2 critical request chain(s) found
  Pages (5/330): /, /about, /contact, /locations, /privacy
  Items (2):
   - CSS: /_next/static/chunks/e187e64ebfed81f4.css?dpl=dpl_8PWcfYJNKqvLTeL9UoRjvsLVfVjC
   - JS: /_next/static/chunks/a6dad97d9634a72d.js?dpl=dpl_8PWcfYJNKqvLTeL9UoRjvsLVfVjC
 </rule>
 <rule id="social/asset-divergence" severity="warning" category="Social Media" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/social/asset-divergence">
  48 of 330 page(s) diverge from the site&apos;s own favicon and default OG image (favicon 100%, default OG image 85%)
  Pages (5/10): /about, /county/brevard/cocoa, /county/broward/fort-lauderdale, /county/broward/hollywood, /county/broward/pompano-beach
  Items (1):
   - og-image:https://bondflorida.com/og-image.png (48 of 330 page(s) fall back to OG image &quot;https://bondflorida.com/og-image.png&quot; but the site norm is &quot;https://bondflorida.com/og-image.jpg&quot;) [dimension: og-image, value: https://bondflorida.com/og-image.png, norm: https://bondflorida.com/og-image.jpg, pageCount: 48] (from: /about, /county/brevard/cocoa, /county/broward/fort-lauderdale, /county/broward/hollywood, /county/broward/pompano-beach; +5 more)
 </rule>
 <rule id="social/og-url-match" severity="warning" category="Social Media" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/social/og-url-match">
  og:url does not match canonical URL
  Pages (5/48): /about, /locations, /privacy, /resources, /terms
 </rule>
 <rule id="a11y/autocomplete-tokens" severity="warning" category="Accessibility" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/a11y/autocomplete-tokens">
  2 identified field(s) missing an autocomplete token
  Pages (1): /contact
  Items (2):
   - input#name (full name field has no autocomplete token (expected &quot;name&quot;)) | &lt;input type=&quot;text&quot; id=&quot;name&quot; class=&quot;w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-500 transition-colors&quot; placeholder=&quot;Full Name&quot;&gt; [reason: missing, purpose: full name, expected: name]
   - input#phone (phone number field has no autocomplete token (expected &quot;tel&quot;)) | &lt;input type=&quot;tel&quot; id=&quot;phone&quot; class=&quot;w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-500 transition-colors&quot; placeholder=&quot;(000) 000-00… [reason: missing, purpose: phone number, expected: tel]
 </rule>
 <rule id="a11y/color-contrast" severity="warning" category="Accessibility" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/a11y/color-contrast">
  N potential color contrast issue(s)
  Pages (5/330): /, /about, /contact, /locations, /privacy
  Items (5/58):
   - a with class &quot;block text-sm text-slate-400 h...&quot; may have low contrast
   - a with class &quot;hidden md:block text-slate-300...&quot; may have low contrast
   - a with class &quot;hidden sm:block text-slate-300...&quot; may have low contrast
   - a with class &quot;hover:text-yellow-500 transiti...&quot; may have low contrast
   - a with class &quot;text-xs bg-slate-800 hover:bg-...&quot; may have low contrast
 </rule>
 <rule id="a11y/heading-order" severity="warning" category="Accessibility" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/a11y/heading-order">
  N heading level skip(s) detected
  Pages (5/43): /about, /contact, /resources, /warrant-search, /county/brevard
  Items (3):
   - H3 after H1
   - H4 after H2
   - H4 after H2
 </rule>
 <rule id="a11y/identical-links-same-purpose" severity="warning" category="Accessibility" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/a11y/identical-links-same-purpose">
  1 link text(s) lead to different destinations
  Pages (5/18): /locations, /resources, /warrant-search, /jail/broward-county-main-jail, /jail/duval-county-pre-trial-detention-facility
  Items (2):
   - &quot;(305) 831-0358&quot; → 2 different URLs
   - &quot;call (305) 831-0358&quot; → 2 different URLs
 </rule>
 <rule id="a11y/input-types" severity="warning" category="Accessibility" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/a11y/input-types">
  1 multi-field form(s) set no enterkeyhint
  Pages (1): /contact
  Items (1):
   - form:nth-of-type(1) (4-field form, no field sets enterkeyhint) | &lt;form class=&quot;space-y-4&quot;&gt; [reason: missing-enterkeyhint, fields: 4]
 </rule>
 <rule id="a11y/skip-link" severity="warning" category="Accessibility" group="seo" status="warn" docs="https://docs.squirrelscan.com/rules/a11y/skip-link">
  No bypass mechanism for repetitive content
  Pages (5/265): /, /services/24-hour-bail-bonds, /services/domestic-violence-bail, /services/dui-bail-bonds, /services/immigration-bail-bonds
 </rule>
 <rule id="ax/token-weight" severity="warning" category="Agent Experience" group="ai" status="warn" docs="https://docs.squirrelscan.com/rules/ax/token-weight">
  Visible text is under 15% of the page HTML — agents pay token cost mostly for markup, scripts, and styles
  Pages (5/331): /, /, /about, /contact, /locations
  Items (5/330):
   - / (~3% of HTML is visible text (~46,367 est. tokens))
   - /about (~6% of HTML is visible text (~16,266 est. tokens))
   - /contact (~4% of HTML is visible text (~13,410 est. tokens))
   - /county/brevard (~9% of HTML is visible text (~24,318 est. tokens))
   - /county/brevard/cocoa (~4% of HTML is visible text (~21,547 est. tokens))
 </rule>
</issues>
</audit>