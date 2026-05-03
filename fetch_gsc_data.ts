import fs from "fs";
import path from "path";
import { google } from "googleapis";

const KEY_FILE_PATH = "C:\\Users\\tevat\\bailbondsman\\gsc-credentials.json";
const SITE_URL = "sc-domain:bondflorida.com";

// GSC data finalizes ~48 hours after the date.
// This pulls the last 28 days by default, ending 2 days ago.
const today = new Date();
const endDate = new Date(today);
endDate.setDate(endDate.getDate() - 2);
const startDate = new Date(endDate);
startDate.setDate(startDate.getDate() - 30);

const formatDate = (date: Date) => date.toISOString().split("T")[0];
const startStr = formatDate(startDate);
const endStr = formatDate(endDate);

console.log(`📅 Pulling data for: ${SITE_URL}`);
console.log(`   Range: ${startStr} → ${endStr}\n`);

async function auth() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
  return google.searchconsole({ version: "v1", auth });
}

async function fetchGscData(
  sc: any,
  dimensions: string[],
  rowLimit: number = 1000,
) {
  try {
    const res = await sc.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: startStr,
        endDate: endStr,
        dimensions,
        rowLimit,
      },
    });
    return res.data.rows || [];
  } catch (error: any) {
    console.error(
      `❌ Error fetching [${dimensions.join(", ")}]:`,
      error.response?.data?.error?.message || error.message,
    );
    return [];
  }
}

function toCsv(data: any[], label: string) {
  let csv = `Top ${label},Clicks,Impressions,CTR,Position\n`;
  data.forEach((row) => {
    const key = row.keys[0];
    const clicks = row.clicks || 0;
    const impressions = row.impressions || 0;
    const ctr = row.ctr ? (row.ctr * 100).toFixed(2) + "%" : "0%";
    const position = row.position ? row.position.toFixed(2) : "0";
    csv += `"${key}",${clicks},${impressions},${ctr},${position}\n`;
  });
  return csv;
}

async function run() {
  if (!fs.existsSync(KEY_FILE_PATH)) {
    console.error("❌ gsc-credentials.json not found in project root.");
    return;
  }

  const sc = await auth();
  const outDir = "C:\\Users\\tevat\\bailbondsman\\gsc\\health_check_global";
  fs.mkdirSync(outDir, { recursive: true });

  // --- Performance data ---
  console.log("Fetching: Top Queries...");
  const queries = await fetchGscData(sc, ["query"], 2000);
  fs.writeFileSync(path.join(outDir, "Queries.csv"), toCsv(queries, "queries"), "utf-8");

  console.log("Fetching: Top Pages...");
  const pages = await fetchGscData(sc, ["page"], 2000);
  fs.writeFileSync(path.join(outDir, "Pages.csv"), toCsv(pages, "pages"), "utf-8");

  console.log("Fetching: By Device...");
  const devices = await fetchGscData(sc, ["device"]);
  fs.writeFileSync(path.join(outDir, "Devices.csv"), toCsv(devices, "devices"), "utf-8");

  console.log("Fetching: By Country...");
  const countries = await fetchGscData(sc, ["country"]);
  fs.writeFileSync(path.join(outDir, "Countries.csv"), toCsv(countries, "countries"), "utf-8");

  // --- Summary stats ---
  const totalClicks = queries.reduce((s: number, r: any) => s + (r.clicks || 0), 0);
  const totalImpressions = queries.reduce((s: number, r: any) => s + (r.impressions || 0), 0);
  const avgPosition =
    queries.length > 0
      ? (queries.reduce((s: number, r: any) => s + (r.position || 0), 0) / queries.length).toFixed(1)
      : "N/A";

  console.log(`\n✅ Data saved to: ${outDir}`);
  console.log(`   Queries: ${queries.length} | Pages: ${pages.length}`);
  console.log(`   Clicks: ${totalClicks} | Impressions: ${totalImpressions} | Avg Position: ${avgPosition}`);
  console.log(`\n👉 Run the audit report next:`);
  console.log(`   npx tsx generate_audit_report.ts ${outDir} <baseline_folder>`);
}

run();
