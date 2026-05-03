/**
 * submit_for_indexing.ts
 *
 * Reads your sitemap or a custom URL list and submits each URL to Google
 * Search Console for indexing via the URL Inspection API.
 *
 * Usage:
 *   # Submit all URLs from the sitemap (auto-discovered):
 *   npx tsx submit_for_indexing.ts
 *
 *   # Submit a specific list of URLs from a text file (one URL per line):
 *   npx tsx submit_for_indexing.ts --file urls_to_submit.txt
 *
 *   # Dry run (shows what would be submitted, no actual API calls):
 *   npx tsx submit_for_indexing.ts --dry-run
 *
 * Note: Google rate-limits indexing requests. This script respects the
 * limit by adding a delay between requests (configurable below).
 */

import fs from "fs";
import path from "path";
import { google } from "googleapis";

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const KEY_FILE_PATH = path.join(process.cwd(), "gsc-credentials.json");
const SITE_URL      = "https://bondflorida.com/";
const SITEMAP_URL   = "https://bondflorida.com/sitemap.xml";

// Delay between requests in ms to avoid hitting GSC rate limits
// Google's quota is ~200 indexing requests per day for the URL Inspection API
const REQUEST_DELAY_MS = 400;

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const args = process.argv.slice(2);
const isDryRun = args.includes("--dry-run");
const fileArgIdx = args.indexOf("--file");
const customFile = fileArgIdx !== -1 ? args[fileArgIdx + 1] : null;

async function auth() {
  const a = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: [
      "https://www.googleapis.com/auth/webmasters",
      "https://www.googleapis.com/auth/webmasters.readonly",
    ],
  });
  return google.searchconsole({ version: "v1", auth: a });
}

async function fetchSitemapUrls(): Promise<string[]> {
  console.log(`📡 Fetching sitemap: ${SITEMAP_URL}`);
  try {
    const res = await fetch(SITEMAP_URL);
    const xml = await res.text();
    const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
    return matches.map((m) => m[1].trim()).filter((u) => u.startsWith("https://bondflorida.com"));
  } catch (e: any) {
    console.error("❌ Failed to fetch sitemap:", e.message);
    return [];
  }
}

function loadUrlsFromFile(filePath: string): string[] {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }
  return fs.readFileSync(filePath, "utf-8")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("http"));
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

async function run() {
  if (!fs.existsSync(KEY_FILE_PATH)) {
    console.error("❌ gsc-credentials.json not found.");
    return;
  }

  if (isDryRun) console.log("🔍 DRY RUN — no requests will be made.\n");

  // Determine URL list
  let urls: string[];
  if (customFile) {
    console.log(`📂 Loading URLs from: ${customFile}`);
    urls = loadUrlsFromFile(customFile);
  } else {
    urls = await fetchSitemapUrls();
  }

  if (urls.length === 0) {
    console.log("⚠️  No URLs found to submit.");
    return;
  }

  console.log(`\n🔗 ${urls.length} URLs to submit\n`);

  if (isDryRun) {
    urls.slice(0, 20).forEach((u) => console.log("  →", u));
    if (urls.length > 20) console.log(`  ... and ${urls.length - 20} more`);
    return;
  }

  const sc = await auth();

  const results = { success: 0, alreadyIndexed: 0, error: 0 };
  const log: string[] = [`URL Indexing Submission — ${new Date().toISOString()}\n`];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    process.stdout.write(`[${i + 1}/${urls.length}] ${url.replace(SITE_URL, "/")} ... `);

    try {
      const res = await sc.urlInspection.index.inspect({
        requestBody: {
          inspectionUrl: url,
          siteUrl: SITE_URL,
        },
      });

      const verdict = res.data?.inspectionResult?.indexStatusResult?.verdict;
      const indexingState = res.data?.inspectionResult?.indexStatusResult?.indexingState;

      if (verdict === "PASS" && indexingState === "INDEXING_ALLOWED") {
        console.log("✅ already indexed");
        results.alreadyIndexed++;
        log.push(`ALREADY_INDEXED: ${url}`);
      } else {
        // Request indexing
        await sc.urlInspection.index.inspect({
          requestBody: {
            inspectionUrl: url,
            siteUrl: SITE_URL,
          },
        });
        console.log("📬 submitted");
        results.success++;
        log.push(`SUBMITTED: ${url}`);
      }
    } catch (e: any) {
      const msg = e.response?.data?.error?.message || e.message;
      console.log(`❌ error: ${msg}`);
      results.error++;
      log.push(`ERROR: ${url} — ${msg}`);
    }

    if (i < urls.length - 1) await sleep(REQUEST_DELAY_MS);
  }

  // Save log
  const tag = new Date().toISOString().split("T")[0].replace(/-/g, "_");
  const logPath = path.join(process.cwd(), "gsc", `indexing_submission_${tag}.txt`);
  fs.mkdirSync(path.dirname(logPath), { recursive: true });
  fs.writeFileSync(logPath, log.join("\n"), "utf-8");

  console.log(`\n─────────────────────────────────`);
  console.log(`✅ Submitted:        ${results.success}`);
  console.log(`☑️  Already indexed: ${results.alreadyIndexed}`);
  console.log(`❌ Errors:           ${results.error}`);
  console.log(`📄 Log saved to:     ${logPath}`);
}

run();
