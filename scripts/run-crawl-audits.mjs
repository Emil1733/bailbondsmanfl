import { mkdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';

const port = 3130;
const siteUrl = `http://127.0.0.1:${port}`;
const outputDirectory = path.join(process.cwd(), '.next', 'audit-output');
const nextCli = path.join(process.cwd(), 'node_modules', 'next', 'dist', 'bin', 'next');

const audits = [
  ['scripts/audit-high-risk-claims.mjs', 'claims.csv'],
  ['scripts/audit-content-quality.mjs', 'content.csv'],
  ['scripts/audit-internal-links.mjs', 'links.csv'],
  ['scripts/audit-programmatic-pages.mjs', 'programmatic.csv'],
];

function run(command, args, extraEnvironment = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: process.cwd(),
      env: { ...process.env, ...extraEnvironment },
      stdio: 'inherit',
    });

    child.once('error', reject);
    child.once('exit', (code, signal) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} exited with ${code ?? signal}`));
    });
  });
}

async function waitForServer(server) {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) throw new Error(`Next.js server exited with ${server.exitCode}.`);
    try {
      const response = await fetch(siteUrl, { redirect: 'manual' });
      if (response.status >= 200 && response.status < 500) return;
    } catch {
      // The server has not bound the port yet.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error('Timed out waiting for the production server.');
}

await mkdir(outputDirectory, { recursive: true });

const server = spawn(process.execPath, [nextCli, 'start', '-p', String(port)], {
  cwd: process.cwd(),
  env: { ...process.env, NODE_ENV: 'production' },
  stdio: 'inherit',
});

try {
  await waitForServer(server);
  for (const [script, outputFile] of audits) {
    await run(process.execPath, [script], {
      SITE_URL: siteUrl,
      OUTPUT_PATH: path.join(outputDirectory, outputFile),
    });
  }
} finally {
  if (server.exitCode === null) server.kill('SIGTERM');
}
