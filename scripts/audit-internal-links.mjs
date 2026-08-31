import { writeFile } from 'node:fs/promises';

const baseUrl = process.env.SITE_URL || 'http://127.0.0.1:3108';
const outputPath = process.env.OUTPUT_PATH || 'changelog/phase7-url-inventory.csv';
const canonicalOrigin = 'https://bondflorida.com';
const concurrency = Math.max(1, Number(process.env.AUDIT_CONCURRENCY) || 12);

function normalizePath(href, sourceUrl) {
  try {
    const url = new URL(href, sourceUrl);
    if (url.origin !== canonicalOrigin && url.origin !== new URL(baseUrl).origin) return null;
    if (!url.pathname.startsWith('/')) return null;
    return url.pathname.replace(/\/$/, '') || '/';
  } catch {
    return null;
  }
}

function classify(path, cityToCounty) {
  const parts = path.split('/').filter(Boolean);
  if (path === '/') return { type: 'home' };
  if (parts[0] === 'county' && parts.length === 2) return { type: 'county', county: parts[1] };
  if (parts[0] === 'county' && parts.length === 3) return { type: 'city', county: parts[1], city: parts[2] };
  if (parts[0] === 'services' && parts.length === 2) return { type: 'service', service: parts[1] };
  if (parts[0] === 'services' && parts.length === 3) {
    return { type: 'service-city', service: parts[1], city: parts[2], county: cityToCounty.get(parts[2]) || '' };
  }
  if (parts[0] === 'jail') return { type: 'jail' };
  return { type: 'core' };
}

async function fetchText(path) {
  const response = await fetch(`${baseUrl}${path}`);
  return { response, html: await response.text() };
}

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
if (!sitemapResponse.ok) throw new Error(`Sitemap returned ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => normalizePath(match[1], baseUrl))
  .filter(Boolean);
const routeSet = new Set(paths);
const cityToCounty = new Map();
for (const path of paths) {
  const parts = path.split('/').filter(Boolean);
  if (parts[0] === 'county' && parts.length === 3) cityToCounty.set(parts[2], parts[1]);
}

const pages = new Map();
let cursor = 0;
const workers = Array.from({ length: concurrency }, async () => {
  while (cursor < paths.length) {
    const path = paths[cursor++];
    const { response, html } = await fetchText(path);
    const sourceUrl = `${baseUrl}${path}`;
    const links = [...html.matchAll(/<a\s[^>]*href=["']([^"']+)["'][^>]*>/gi)]
      .map((match) => normalizePath(match[1], sourceUrl))
      .filter((link) => link && routeSet.has(link));
    pages.set(path, {
      status: response.status,
      indexable: !/<meta[^>]+(?:name|property)=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html),
      links: new Set(links),
    });
  }
});
await Promise.all(workers);

const inbound = new Map(paths.map((path) => [path, new Set()]));
for (const [source, page] of pages) {
  for (const target of page.links) {
    if (source !== target) inbound.get(target)?.add(source);
  }
}

const depth = new Map([['/', 0]]);
const queue = ['/'];
while (queue.length) {
  const source = queue.shift();
  for (const target of pages.get(source)?.links || []) {
    if (!depth.has(target)) {
      depth.set(target, depth.get(source) + 1);
      queue.push(target);
    }
  }
}

const rows = paths
  .map((path) => {
    const classification = classify(path, cityToCounty);
    return {
      path,
      ...classification,
      indexable: pages.get(path)?.indexable ?? false,
      status: pages.get(path)?.status ?? 0,
      inbound: inbound.get(path)?.size ?? 0,
      outbound: pages.get(path)?.links.size ?? 0,
      depth: depth.get(path) ?? '',
    };
  })
  .sort((a, b) => a.path.localeCompare(b.path));

const columns = ['path', 'type', 'county', 'city', 'service', 'indexable', 'status', 'inbound', 'outbound', 'depth'];
const csv = [
  columns.join(','),
  ...rows.map((row) => columns.map((column) => JSON.stringify(row[column] ?? '')).join(',')),
].join('\n');
await writeFile(outputPath, `${csv}\n`);

const indexableRows = rows.filter((row) => row.indexable);
const underlinked = indexableRows.filter((row) => row.path !== '/' && row.inbound < 2);
const tooDeep = indexableRows.filter((row) => row.depth === '' || row.depth > 3);
const summary = {
  routes: rows.length,
  indexable: indexableRows.length,
  zeroInbound: indexableRows.filter((row) => row.path !== '/' && row.inbound === 0).length,
  fewerThanTwoInbound: underlinked.length,
  deeperThanThreeClicks: tooDeep.length,
  byType: Object.groupBy(underlinked, (row) => row.type),
};

console.log(JSON.stringify(summary, null, 2));
if (process.env.FAIL_ON_GAPS === '1' && (underlinked.length || tooDeep.length)) process.exit(1);
