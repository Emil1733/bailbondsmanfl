import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const nextConfig = fs.readFileSync(path.join(root, 'next.config.ts'), 'utf8');
const contactRoute = fs.readFileSync(path.join(root, 'src/app/api/contact/route.ts'), 'utf8');
const clientInstrumentation = fs.readFileSync(path.join(root, 'src/instrumentation-client.ts'), 'utf8');
const privacyPolicy = fs.readFileSync(path.join(root, 'src/app/privacy/page.tsx'), 'utf8');
const sourceFiles = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (/\.(?:ts|tsx|js|jsx)$/.test(entry.name)) sourceFiles.push(fullPath);
  }
}

walk(path.join(root, 'src'));

const failures = [];
const productionCsp = nextConfig.replace(/\$\{isDevelopment \? " 'unsafe-eval'" : ''\}/g, '');

if (productionCsp.includes("'unsafe-eval'")) failures.push('Production CSP still contains unsafe-eval.');
if (!nextConfig.includes("object-src 'none'")) failures.push('CSP is missing object-src none.');
if (!nextConfig.includes("frame-ancestors 'none'")) failures.push('CSP is missing frame-ancestors none.');
if (!nextConfig.includes('Permissions-Policy')) failures.push('Permissions-Policy is missing.');
if (!nextConfig.includes('Strict-Transport-Security')) failures.push('HSTS is missing.');
if (!contactRoute.includes('checkBotId()') || !clientInstrumentation.includes("path: '/api/contact'")) {
  failures.push('BotID is not configured on both sides of the contact request.');
}
if (!contactRoute.includes('export function GET()') || !contactRoute.includes("service: 'contact'")) {
  failures.push('The non-writing contact health endpoint is missing.');
}
if (!privacyPolicy.includes('within 90 days') || !privacyPolicy.includes('Airtable') || !privacyPolicy.includes('Vercel')) {
  failures.push('Privacy policy is missing the defined retention period or subprocessors.');
}

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/(?:href|url|Url):?\s*[=]?\s*['"]http:\/\//g);
  if (matches) failures.push(`Insecure public URL in ${path.relative(root, file)}.`);
}

console.log(JSON.stringify({ scannedSourceFiles: sourceFiles.length, failures }, null, 2));
if (failures.length) process.exit(1);
