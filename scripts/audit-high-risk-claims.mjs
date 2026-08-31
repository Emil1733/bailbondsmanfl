import { writeFile } from 'node:fs/promises';

const baseUrl = process.env.SITE_URL || 'http://127.0.0.1:3118';
const outputPath = process.env.OUTPUT_PATH || 'changelog/phase10-claims-inventory.csv';
const prohibited = [
  ['unverified license claim', /\b(?:our|we(?:'re| are)?|bond florida(?:'s)?)\s+(?:fully\s+)?licensed\b/i],
  ['guaranteed release', /\b(?:guarantee(?:d|s)?|promise(?:d|s)?)\b.{0,45}\brelease\b|\brelease\b.{0,45}\b(?:guarantee(?:d|s)?|promise(?:d|s)?)\b/i],
  ['immediate release claim', /\bimmediate(?:ly)?\s+(?:jail\s+)?release\b|\breleased?\s+immediately\b/i],
  ['universal coverage claim', /\b(?:all 67|every)\s+(?:Florida\s+)?count(?:y|ies)\b/i],
  ['private warrant access claim', /\b(?:confidential|private)\s+(?:statewide\s+)?(?:warrant|database)\s+(?:check|access)|\bdirect access to statewide\b/i],
  ['fixed release timing', /\b(?:released?|release)\b.{0,35}\b(?:within|under|in)\s+\d+(?:\s*(?:-|to)\s*\d+)?\s+(?:minutes?|hours?)\b/i],
  ['instant filing claim', /\b(?:instantly|immediately)\s+(?:file|post|submit|transmit|dispatch)|\bexact second\b/i],
  ['unverified security claim', /\bbank-level\b|\b256-bit encryption\b/i],
  ['unverified payment plan', /\bwe\s+(?:offer|provide|arrange)\b.{0,40}\bpayment plans?\b/i],
  ['no-custody promise', /\bnever\s+(?:enter|see|spend)\b.{0,35}\b(?:cell|jail|custody)\b|\bwithout\s+(?:ever\s+)?entering\b.{0,25}\bcell\b/i],
];

function textFromHtml(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || html;
  return main.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&(?:nbsp|amp|quot|#x27|#39);/g, ' ').replace(/\s+/g, ' ').trim();
}

function removeExplicitDisclaimers(text) {
  return text
    .replace(/\b(?:does not|do not|cannot|can['’]t|never)\s+(?:control\s+or\s+)?(?:guarantee|promise)\b.{0,45}\brelease\b/gi, ' ')
    .replace(/\bdoes not\s+(?:guarantee|promise)\s+the\s+release\b/gi, ' ')
    .replace(/\bcan\s+(?:anyone|a\s+website|this\s+directory)\b.{0,45}\b(?:guarantee|promise)\b.{0,35}\brelease\b/gi, ' ')
    .replace(/\brelease\s+(?:timing\s+)?(?:var(?:y|ies)\s+and\s+)?cannot be (?:promised|guaranteed)\b/gi, ' ')
    .replace(/\bno\s+release\s+(?:guarantees|promises)\b/gi, ' ')
    .replace(/\brelease\s+(?:guarantees|promises)\b/gi, ' ');
}

const sitemap = await (await fetch(`${baseUrl}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
const rows = [];

for (const path of paths) {
  const response = await fetch(`${baseUrl}${path}`);
  const text = removeExplicitDisclaimers(textFromHtml(await response.text()));
  for (const [category, pattern] of prohibited) {
    const match = text.match(pattern);
    if (match) rows.push({ path, category, match: match[0] });
  }
}

const cell = (value) => `"${String(value).replaceAll('"', '""')}"`;
const columns = ['path', 'category', 'match'];
await writeFile(outputPath, `${[columns.map(cell).join(','), ...rows.map((row) => columns.map((key) => cell(row[key])).join(','))].join('\n')}\n`);
console.log(JSON.stringify({ pages: paths.length, highRiskClaims: rows.length, byCategory: Object.fromEntries([...Map.groupBy(rows, (row) => row.category)].map(([key, value]) => [key, value.length])) }, null, 2));
if (rows.length) process.exitCode = 1;
