import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://bondflorida.com';

// Helper to parse the formatted CSVs
const parseCsv = (filePath: string) => {
  if (!fs.existsSync(filePath)) return {};
  const lines = fs.readFileSync(filePath, 'utf-8').split('\n');
  const data: Record<string, any> = {};

  lines.slice(1).forEach(l => {
    if (!l.trim()) return;

    // Handle quoted keys (URLs)
    const match = l.match(/^"([^"]+)",(.+)/);
    if (match) {
      const key = match[1];
      const parts = match[2].split(',');
      data[key] = {
        clicks: parseInt(parts[0] || '0', 10),
        impressions: parseInt(parts[1] || '0', 10),
        ctr: parseFloat(parts[2] ? parts[2].replace('%', '') : '0'),
        position: parseFloat(parts[3] || '0'),
      };
    } else {
      // Non-quoted keys (queries, device names, etc.)
      const parts = l.split(',');
      if (parts.length >= 5) {
        data[parts[0]] = {
          clicks: parseInt(parts[1] || '0', 10),
          impressions: parseInt(parts[2] || '0', 10),
          ctr: parseFloat(parts[3] ? parts[3].replace('%', '') : '0'),
          position: parseFloat(parts[4] || '0'),
        };
      }
    }
  });
  return data;
};

// Args: current pull folder, baseline folder (optional)
const currentDir = process.argv[2];
const baselineDir = process.argv[3];

if (!currentDir) {
  console.error('Usage: npx tsx generate_audit_report.ts <current_pull_folder> [baseline_folder]');
  process.exit(1);
}

const curPages   = parseCsv(path.join(currentDir, 'Pages.csv'));
const curQueries = parseCsv(path.join(currentDir, 'Queries.csv'));
const basePages   = baselineDir ? parseCsv(path.join(baselineDir, 'Pages.csv'))   : {};
const baseQueries = baselineDir ? parseCsv(path.join(baselineDir, 'Queries.csv')) : {};

// --- ANALYSIS ---

// County hub pages: /county/[slug]
const countySpikes: any[] = [];
const countyBreakouts: any[] = [];

// City hub pages: /county/[slug]/[city]
const citySpikes: any[] = [];
const cityBreakouts: any[] = [];

// Service pages: /services/[slug] or /services/[slug]/[city]
const serviceSpikes: any[] = [];

// Striking distance: impressions > 20, position 11–35
const strikingDistance: any[] = [];

Object.entries(curPages).forEach(([url, cur]: [string, any]) => {
  const path = url.replace(DOMAIN, '');
  const base = basePages[url];
  const impDiff = base ? cur.impressions - base.impressions : 0;
  const posDiff = base ? base.position - cur.position : 0;

  // County pages
  if (/^\/county\/[^/]+$/.test(path)) {
    if (!base) countyBreakouts.push({ url, ...cur });
    else if (impDiff > 0) countySpikes.push({ url, impDiff, oldImp: base.impressions, newImp: cur.impressions, posDiff, position: cur.position });
  }

  // City pages
  if (/^\/county\/[^/]+\/[^/]+$/.test(path)) {
    if (!base) cityBreakouts.push({ url, ...cur });
    else if (impDiff > 0) citySpikes.push({ url, impDiff, oldImp: base.impressions, newImp: cur.impressions, posDiff, position: cur.position });
  }

  // Service pages (with or without city)
  if (path.startsWith('/services/')) {
    if (!base && cur.impressions > 0) serviceSpikes.push({ url, ...cur });
    else if (base && impDiff > 0) serviceSpikes.push({ url, impDiff, newImp: cur.impressions, position: cur.position });
  }

  // Striking distance: any page
  if (cur.impressions > 20 && cur.position > 10 && cur.position < 35) {
    strikingDistance.push({ url, ...cur });
  }
});

// Sort all lists
const byImpDiff = (a: any, b: any) => b.impDiff - a.impDiff;
const byImp     = (a: any, b: any) => b.impressions - a.impressions;

countySpikes.sort(byImpDiff);
citySpikes.sort(byImpDiff);
countyBreakouts.sort(byImp);
cityBreakouts.sort(byImp);
serviceSpikes.sort((a, b) => (b.impressions || b.newImp) - (a.impressions || a.newImp));
strikingDistance.sort(byImp);

// New queries
const newQueries: any[] = [];
Object.entries(curQueries).forEach(([query, data]: [string, any]) => {
  if (!baseQueries[query]) newQueries.push({ query, ...data });
});
newQueries.sort(byImp);

// Totals
const totalClicks = Object.values(curPages).reduce((s: number, r: any) => s + r.clicks, 0);
const totalImpressions = Object.values(curPages).reduce((s: number, r: any) => s + r.impressions, 0);
const avgPos = Object.values(curPages).length > 0
  ? (Object.values(curPages).reduce((s: number, r: any) => s + r.position, 0) / Object.values(curPages).length).toFixed(1)
  : 'N/A';

// --- BUILD REPORT ---
const reportDate = new Date().toISOString().split('T')[0];
let md = `# Bond Florida — GSC Audit (${reportDate})\n\n`;
if (baselineDir) md += `*Baseline: \`${baselineDir}\`*\n\n`;

md += `## Overview\n`;
md += `| Metric | Value |\n| :--- | :--- |\n`;
md += `| Total Clicks | **${totalClicks}** |\n`;
md += `| Total Impressions | **${totalImpressions}** |\n`;
md += `| Average Position | **${avgPos}** |\n`;
md += `| Pages with Data | **${Object.keys(curPages).length}** |\n`;
md += `| Active Queries | **${Object.keys(curQueries).length}** |\n\n`;

md += `## 1. New Keywords (Not in Baseline)\n`;
md += `**${newQueries.length}** new queries discovered.\n\n`;
if (newQueries.length > 0) {
  md += `| Query | Impressions | Position | CTR |\n| :--- | :--- | :--- | :--- |\n`;
  newQueries.slice(0, 20).forEach(q => {
    md += `| **${q.query}** | ${q.impressions} | ${Number(q.position).toFixed(1)} | ${q.ctr}% |\n`;
  });
}

md += `\n## 2. County Pages — Impression Spikes\n`;
if (countySpikes.length > 0) {
  md += `| URL | New Impressions | Growth | Pos |\n| :--- | :--- | :--- | :--- |\n`;
  countySpikes.slice(0, 10).forEach(s => {
    const pos = s.posDiff > 0 ? `+${s.posDiff.toFixed(1)} ↑` : `${s.posDiff.toFixed(1)} ↓`;
    md += `| ${s.url.replace(DOMAIN, '')} | ${s.newImp} | **+${s.impDiff}** | ${pos} |\n`;
  });
} else {
  md += `*No county spike data (baseline may not be set).*\n`;
}

md += `\n## 3. City Pages — Impression Spikes\n`;
if (citySpikes.length > 0) {
  md += `| URL | New Impressions | Growth | Pos |\n| :--- | :--- | :--- | :--- |\n`;
  citySpikes.slice(0, 15).forEach(s => {
    const pos = s.posDiff > 0 ? `+${s.posDiff.toFixed(1)} ↑` : `${s.posDiff.toFixed(1)} ↓`;
    md += `| ${s.url.replace(DOMAIN, '')} | ${s.newImp} | **+${s.impDiff}** | ${pos} |\n`;
  });
} else {
  md += `*No city spike data.*\n`;
}

md += `\n## 4. Newly Indexing Pages (Breakouts)\n`;
md += `**County:** ${countyBreakouts.length} | **City:** ${cityBreakouts.length}\n\n`;
const allBreakouts = [...countyBreakouts, ...cityBreakouts].sort(byImp);
if (allBreakouts.length > 0) {
  allBreakouts.slice(0, 10).forEach(c => {
    md += `- \`${c.url.replace(DOMAIN, '')}\` — ${c.impressions} impr, pos ${Number(c.position).toFixed(1)}\n`;
  });
}

md += `\n## 5. Service Pages\n`;
if (serviceSpikes.length > 0) {
  md += `| URL | Impressions | Position |\n| :--- | :--- | :--- |\n`;
  serviceSpikes.slice(0, 10).forEach(s => {
    md += `| ${s.url.replace(DOMAIN, '')} | ${s.impressions || s.newImp} | ${Number(s.position).toFixed(1)} |\n`;
  });
} else {
  md += `*No service page data yet.*\n`;
}

md += `\n## 6. Striking Distance (Position 11–35, Impressions > 20)\n`;
md += `These pages are close to Page 1. Highest priority for content improvement.\n\n`;
if (strikingDistance.length > 0) {
  md += `| URL | Impressions | Position | CTR |\n| :--- | :--- | :--- | :--- |\n`;
  strikingDistance.slice(0, 15).forEach(o => {
    md += `| ${o.url.replace(DOMAIN, '')} | ${o.impressions} | **${o.position.toFixed(1)}** | ${o.ctr}% |\n`;
  });
} else {
  md += `*No striking distance candidates yet.*\n`;
}

const outPath = path.join(currentDir, `audit_report_${reportDate.replace(/-/g, '_')}.md`);
fs.writeFileSync(outPath, md, 'utf-8');
console.log(`✅ Audit report saved to: ${outPath}`);
