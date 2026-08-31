import { mkdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';

const siteUrl = (process.env.SITE_URL || 'https://bondflorida.com').replace(/\/$/, '');
const outputDirectory = process.env.MONITOR_OUTPUT_DIR || 'monitoring-output';
const audits = [
  ['scripts/audit-high-risk-claims.mjs', 'claims.csv'],
  ['scripts/audit-content-quality.mjs', 'content.csv'],
  ['scripts/audit-internal-links.mjs', 'links.csv'],
  ['scripts/audit-programmatic-pages.mjs', 'programmatic.csv'],
];

function run(script, outputFile) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script], {
      cwd: process.cwd(),
      env: {
        ...process.env,
        SITE_URL: siteUrl,
        OUTPUT_PATH: path.join(outputDirectory, outputFile),
        AUDIT_CONCURRENCY: process.env.AUDIT_CONCURRENCY || '2',
      },
      stdio: 'inherit',
    });
    child.once('error', reject);
    child.once('exit', (code, signal) => {
      if (code === 0) resolve();
      else reject(new Error(`${script} exited with ${code ?? signal}`));
    });
  });
}

await mkdir(outputDirectory, { recursive: true });
for (const [script, outputFile] of audits) await run(script, outputFile);
