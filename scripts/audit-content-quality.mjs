import { writeFile } from 'node:fs/promises';

const baseUrl = process.env.SITE_URL || 'http://127.0.0.1:3111';
const outputPath = process.env.OUTPUT_PATH || 'changelog/phase9-metadata-inventory.csv';
const concurrency = Math.max(1, Number(process.env.AUDIT_CONCURRENCY) || 12);

function decode(text = '') {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function attribute(html, tag, key, value, resultKey) {
  const direct = new RegExp(`<${tag}[^>]*${key}=["']${value}["'][^>]*${resultKey}=["']([^"']*)["'][^>]*>`, 'i');
  const reverse = new RegExp(`<${tag}[^>]*${resultKey}=["']([^"']*)["'][^>]*${key}=["']${value}["'][^>]*>`, 'i');
  return decode(html.match(direct)?.[1] || html.match(reverse)?.[1] || '');
}

function visibleText(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || html;
  return decode(main)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function pageType(path) {
  const parts = path.split('/').filter(Boolean);
  if (path === '/') return 'home';
  if (parts[0] === 'county' && parts.length === 2) return 'county';
  if (parts[0] === 'county' && parts.length === 3) return 'city';
  if (parts[0] === 'services' && parts.length === 2) return 'service';
  if (parts[0] === 'jail') return 'jail';
  return 'core';
}

function minimumWords(type) {
  return { home: 300, core: 150, county: 100, city: 100, jail: 200, service: 400 }[type] || 150;
}

const sitemap = await (await fetch(`${baseUrl}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
const rows = [];
let cursor = 0;

await Promise.all(Array.from({ length: concurrency }, async () => {
  while (cursor < paths.length) {
    const path = paths[cursor++];
    const response = await fetch(`${baseUrl}${path}`);
    const html = await response.text();
    const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '');
    const description = attribute(html, 'meta', 'name', 'description', 'content');
    const text = visibleText(html);
    const pageText = visibleText(html.replace(/<main\b[^>]*>/i, '<div>').replace(/<\/main>/i, '</div>'));
    const words = text.match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g) || [];
    const lower = words.map((word) => word.toLowerCase());
    const bailCount = lower.filter((word) => word === 'bail').length;
    rows.push({
      path,
      type: pageType(path),
      status: response.status,
      title,
      titleLength: title.length,
      description,
      descriptionLength: description.length,
      wordCount: words.length,
      bailDensity: words.length ? Math.round((bailCount / words.length) * 1000) / 10 : 0,
      hasReviewer: /reviewed by/i.test(pageText),
      hasReviewDate: /(?:reviewed|updated)\s+(?:on\s+)?[A-Z][a-z]+\s+\d{1,2},\s+20\d{2}/i.test(pageText),
      hasSources: /(?:official sources?|sources and verification)/i.test(pageText),
    });
  }
}));

rows.sort((left, right) => left.path.localeCompare(right.path));
const titleCounts = Map.groupBy(rows, (row) => row.title);
const descriptionCounts = Map.groupBy(rows, (row) => row.description);
for (const row of rows) {
  row.duplicateTitle = (titleCounts.get(row.title)?.length || 0) > 1;
  row.duplicateDescription = (descriptionCounts.get(row.description)?.length || 0) > 1;
}

const columns = ['path', 'type', 'status', 'title', 'titleLength', 'description', 'descriptionLength', 'duplicateTitle', 'duplicateDescription', 'wordCount', 'bailDensity', 'hasReviewer', 'hasReviewDate', 'hasSources'];
const csvCell = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
const csv = [columns.map(csvCell).join(','), ...rows.map((row) => columns.map((column) => csvCell(row[column])).join(','))].join('\n');
await writeFile(outputPath, `${csv}\n`);

const byType = Object.fromEntries([...Map.groupBy(rows, (row) => row.type)].map(([type, group]) => [type, {
  pages: group.length,
  titleViolations: group.filter((row) => row.titleLength < 30 || row.titleLength > 60).length,
  descriptionViolations: group.filter((row) => row.descriptionLength < 120 || row.descriptionLength > 160).length,
  minimumWords: minimumWords(type),
  thinPages: group.filter((row) => row.wordCount < minimumWords(type)).length,
}]));

console.log(JSON.stringify({
  pages: rows.length,
  titleViolations: rows.filter((row) => row.titleLength < 30 || row.titleLength > 60).length,
  descriptionViolations: rows.filter((row) => row.descriptionLength < 120 || row.descriptionLength > 160).length,
  duplicateTitles: rows.filter((row) => row.duplicateTitle).length,
  duplicateDescriptions: rows.filter((row) => row.duplicateDescription).length,
  highBailDensity: rows.filter((row) => row.bailDensity > 3).length,
  missingReviewer: rows.filter((row) => !row.hasReviewer).length,
  missingReviewDate: rows.filter((row) => !row.hasReviewDate).length,
  missingSources: rows.filter((row) => !row.hasSources).length,
  byType,
}, null, 2));
