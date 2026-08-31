import { writeFile } from 'node:fs/promises';

const baseUrl = process.env.SITE_URL || 'http://127.0.0.1:3109';
const outputPath = process.env.OUTPUT_PATH || 'changelog/phase8-programmatic-inventory.csv';

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<');
}

function visibleMainText(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || html;
  return decodeEntities(main)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function shingles(text, size = 5) {
  const words = text.toLowerCase().match(/[a-z0-9]+/g) || [];
  const result = new Set();
  for (let index = 0; index <= words.length - size; index += 1) {
    result.add(words.slice(index, index + size).join(' '));
  }
  return { words, values: result };
}

function jaccard(left, right) {
  let intersection = 0;
  for (const value of left) if (right.has(value)) intersection += 1;
  const union = left.size + right.size - intersection;
  return union ? intersection / union : 1;
}

const sitemap = await (await fetch(`${baseUrl}/sitemap.xml`)).text();
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]));
const paths = new Set(
  sitemapUrls
    .filter((url) => /^\/services\/[^/]+\/[^/]+$/.test(url.pathname))
    .map((url) => url.pathname),
);

const serviceHubs = sitemapUrls.filter((url) => /^\/services\/[^/]+$/.test(url.pathname));
for (const hub of serviceHubs) {
  const html = await (await fetch(`${baseUrl}${hub.pathname}`)).text();
  for (const match of html.matchAll(/href=["'](\/services\/[^/"']+\/[^/"'#?]+)["']/g)) {
    paths.add(match[1]);
  }
}

const urls = [...paths].map((path) => new URL(path, baseUrl));

const pages = [];
let cursor = 0;
await Promise.all(Array.from({ length: 12 }, async () => {
  while (cursor < urls.length) {
    const url = urls[cursor++];
    const response = await fetch(`${baseUrl}${url.pathname}`);
    const html = await response.text();
    const text = visibleMainText(html);
    const parts = url.pathname.split('/').filter(Boolean);
    pages.push({
      path: url.pathname,
      service: parts[1],
      city: parts[2],
      status: response.status,
      indexable: !/<meta[^>]+(?:name|property)=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html),
      hasReviewDate: /(?:reviewed|updated)\s+(?:on\s+)?[A-Z][a-z]+\s+\d{1,2},\s+20\d{2}/i.test(text),
      hasSourceSection: /(?:official sources?|sources and verification)/i.test(text),
      ...shingles(text),
    });
  }
}));

for (const page of pages) {
  const peers = pages.filter((candidate) => candidate.service === page.service && candidate.path !== page.path);
  page.maxSimilarity = Math.max(...peers.map((peer) => jaccard(page.values, peer.values)));
  page.uniquePercent = Math.round((1 - page.maxSimilarity) * 1000) / 10;
  page.decision = page.uniquePercent >= 60 && page.hasReviewDate && page.hasSourceSection ? 'keep-indexed' : 'noindex-until-reviewed';
  page.reason = [
    page.uniquePercent < 60 ? 'below-60-percent-unique' : null,
    !page.hasSourceSection ? 'no-authoritative-source-record' : null,
    !page.hasReviewDate ? 'no-review-date' : null,
  ].filter(Boolean).join(';');
}

pages.sort((left, right) => left.path.localeCompare(right.path));
const columns = ['path', 'service', 'city', 'status', 'indexable', 'wordCount', 'uniquePercent', 'hasSourceSection', 'hasReviewDate', 'decision', 'reason'];
const rows = pages.map((page) => ({ ...page, wordCount: page.words.length }));
const csv = [columns.join(','), ...rows.map((row) => columns.map((column) => JSON.stringify(row[column] ?? '')).join(','))].join('\n');
await writeFile(outputPath, `${csv}\n`);

const uniqueValues = rows.map((row) => row.uniquePercent).sort((a, b) => a - b);
const percentile = (fraction) => uniqueValues[Math.min(uniqueValues.length - 1, Math.floor(uniqueValues.length * fraction))];
console.log(JSON.stringify({
  pages: rows.length,
  currentlyIndexable: rows.filter((row) => row.indexable).length,
  passingGate: rows.filter((row) => row.decision === 'keep-indexed').length,
  belowSixtyPercentUnique: rows.filter((row) => row.uniquePercent < 60).length,
  missingSources: rows.filter((row) => !row.hasSourceSection).length,
  missingReviewDate: rows.filter((row) => !row.hasReviewDate).length,
  uniqueness: {
    minimum: uniqueValues[0],
    median: percentile(0.5),
    percentile95: percentile(0.95),
    maximum: uniqueValues.at(-1),
  },
}, null, 2));
