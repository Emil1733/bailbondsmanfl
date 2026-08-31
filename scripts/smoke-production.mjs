import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const origin = (process.env.MONITOR_ORIGIN || 'https://bondflorida.com').replace(/\/$/, '');
const outputDirectory = process.env.MONITOR_OUTPUT_DIR || 'monitoring-output';
const attempts = Math.max(1, Number(process.env.MONITOR_ATTEMPTS) || 3);

const checks = [
  { path: '/', contains: 'Florida public-resource directory' },
  { path: '/contact', contains: 'Inquiry Form' },
  { path: '/robots.txt', contains: 'Sitemap: https://bondflorida.com/sitemap.xml' },
  { path: '/sitemap.xml', contains: '<loc>https://bondflorida.com</loc>' },
  { path: '/api/contact', contains: '"status":"ok"' },
];

async function checkRoute(check) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const startedAt = Date.now();
    try {
      const response = await fetch(`${origin}${check.path}`, {
        headers: { 'User-Agent': 'BondFloridaProductionMonitor/1.0' },
        redirect: 'follow',
        signal: AbortSignal.timeout(15_000),
      });
      const body = await response.text();
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      if (!body.includes(check.contains)) throw new Error(`Expected content missing: ${check.contains}`);

      if (check.path === '/') {
        const csp = response.headers.get('content-security-policy') || '';
        const requiredHeaders = ['strict-transport-security', 'permissions-policy', 'x-content-type-options'];
        if (!csp || csp.includes("'unsafe-eval'")) throw new Error('Production CSP is missing or permits unsafe-eval.');
        for (const header of requiredHeaders) {
          if (!response.headers.has(header)) throw new Error(`Required header missing: ${header}`);
        }
      }

      return { path: check.path, ok: true, status: response.status, durationMs: Date.now() - startedAt, attempt };
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, attempt * 1_000));
    }
  }
  return { path: check.path, ok: false, error: lastError };
}

const results = [];
for (const check of checks) results.push(await checkRoute(check));

const report = {
  checkedAt: new Date().toISOString(),
  origin,
  ok: results.every((result) => result.ok),
  results,
};

await mkdir(outputDirectory, { recursive: true });
await writeFile(path.join(outputDirectory, 'production-smoke.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (!report.ok) process.exit(1);
