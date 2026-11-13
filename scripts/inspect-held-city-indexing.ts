import fs from "node:fs";
import path from "node:path";
import { google } from "googleapis";

const KEY_FILE_PATH = "C:\\Users\\tevat\\bailbondsman\\gsc-credentials.json";
const SITE_URL = "sc-domain:bondflorida.com";
const ORIGIN = "https://bondflorida.com";
const RUN_DATE = "2026-11-13";
const OUTPUT_DIR = path.join(process.cwd(), "docs", "seo", "gsc");

const heldPaths = [
  "/county/miami-dade/miami",
  "/county/miami-dade/hialeah",
  "/county/miami-dade/miami-beach",
  "/county/broward/fort-lauderdale",
  "/county/broward/hollywood",
  "/county/broward/pompano-beach",
  "/county/palm-beach/boca-raton",
  "/county/hillsborough/brandon",
  "/county/hillsborough/plant-city",
  "/county/orange/apopka",
  "/county/duval/jacksonville-beach",
  "/county/polk/lakeland",
  "/county/polk/winter-haven",
  "/county/pasco/new-port-richey",
  "/county/pasco/wesley-chapel",
  "/county/marion/belleview",
  "/county/brevard/cocoa",
  "/county/manatee/bradenton",
  "/county/columbia/lake-city",
] as const;

type InspectionRow = {
  url: string;
  verdict: string;
  coverageState: string;
  indexingState: string;
  robotsTxtState: string;
  pageFetchState: string;
  lastCrawlTime: string;
  googleCanonical: string;
  userCanonical: string;
  referringUrls: string;
  crawledAs: string;
  error: string;
};

function csvEscape(value: string) {
  return /[",\n]/.test(value)
    ? `"${value.replaceAll('"', '""')}"`
    : value;
}

async function run() {
  if (!fs.existsSync(KEY_FILE_PATH)) {
    throw new Error("The configured GSC service-account file is missing.");
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
  const searchConsole = google.searchconsole({ version: "v1", auth });
  const rows: InspectionRow[] = [];

  for (const heldPath of heldPaths) {
    const url = `${ORIGIN}${heldPath}`;
    process.stdout.write(`Inspecting ${heldPath} ... `);
    try {
      const response = await searchConsole.urlInspection.index.inspect({
        requestBody: { inspectionUrl: url, siteUrl: SITE_URL },
      });
      const result = response.data.inspectionResult?.indexStatusResult;
      const row: InspectionRow = {
        url,
        verdict: result?.verdict || "",
        coverageState: result?.coverageState || "",
        indexingState: result?.indexingState || "",
        robotsTxtState: result?.robotsTxtState || "",
        pageFetchState: result?.pageFetchState || "",
        lastCrawlTime: result?.lastCrawlTime || "",
        googleCanonical: result?.googleCanonical || "",
        userCanonical: result?.userCanonical || "",
        referringUrls: (result?.referringUrls || []).join(" | "),
        crawledAs: result?.crawledAs || "",
        error: "",
      };
      rows.push(row);
      console.log(`${row.verdict || "unknown"} — ${row.coverageState || "no coverage state"}`);
    } catch (error: any) {
      const message =
        error?.response?.data?.error?.message || error?.message || String(error);
      rows.push({
        url,
        verdict: "ERROR",
        coverageState: "",
        indexingState: "",
        robotsTxtState: "",
        pageFetchState: "",
        lastCrawlTime: "",
        googleCanonical: "",
        userCanonical: "",
        referringUrls: "",
        crawledAs: "",
        error: message,
      });
      console.log(`error — ${message}`);
    }
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const columns: Array<keyof InspectionRow> = [
    "url",
    "verdict",
    "coverageState",
    "indexingState",
    "robotsTxtState",
    "pageFetchState",
    "lastCrawlTime",
    "googleCanonical",
    "userCanonical",
    "referringUrls",
    "crawledAs",
    "error",
  ];
  const csv = [
    columns.join(","),
    ...rows.map((row) => columns.map((column) => csvEscape(row[column])).join(",")),
  ].join("\n");
  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${RUN_DATE}-held-city-index-inspection.csv`),
    `${csv}\n`,
    "utf8",
  );

  const counts = Object.entries(
    rows.reduce<Record<string, number>>((summary, row) => {
      const key = `${row.verdict || "UNKNOWN"}: ${row.coverageState || row.error || "No state"}`;
      summary[key] = (summary[key] || 0) + 1;
      return summary;
    }, {}),
  ).sort(([a], [b]) => a.localeCompare(b));

  let markdown = `# Held city URL index inspection\n\n`;
  markdown += `Run date: ${RUN_DATE}  \n`;
  markdown += `Property: ${SITE_URL}  \n`;
  markdown += `Method: read-only Google Search Console URL Inspection API\n\n`;
  markdown += `No indexing request or Search Console setting change was made.\n\n`;
  markdown += `## Summary\n\n`;
  for (const [label, count] of counts) markdown += `- ${label}: ${count}\n`;
  markdown += `\n## Results\n\n`;
  markdown += `| URL | Verdict | Coverage | Fetch | Last crawl | Google canonical | User canonical |\n`;
  markdown += `| --- | --- | --- | --- | --- | --- | --- |\n`;
  for (const row of rows) {
    const shortUrl = row.url.replace(ORIGIN, "");
    markdown += `| \`${shortUrl}\` | ${row.verdict || "—"} | ${(row.coverageState || row.error || "—").replaceAll("|", "\\|")} | ${row.pageFetchState || "—"} | ${row.lastCrawlTime || "—"} | ${row.googleCanonical || "—"} | ${row.userCanonical || "—"} |\n`;
  }
  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${RUN_DATE}-held-city-index-inspection.md`),
    markdown,
    "utf8",
  );

  console.log(`Saved ${rows.length} URL inspection results to ${OUTPUT_DIR}`);
}

run().catch((error) => {
  const message =
    error?.response?.data?.error?.message || error?.message || String(error);
  console.error(`URL inspection failed: ${message}`);
  process.exitCode = 1;
});
