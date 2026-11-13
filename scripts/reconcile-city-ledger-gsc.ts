import fs from "node:fs";
import path from "node:path";
import { google } from "googleapis";

const KEY_FILE_PATH = "C:\\Users\\tevat\\bailbondsman\\gsc-credentials.json";
const SITE_URL = "sc-domain:bondflorida.com";
const RUN_DATE = "2026-11-13";
const OUTPUT_DIR = path.join(process.cwd(), "docs", "seo", "gsc");

const targetPaths = [
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

type Period = { label: string; startDate: string; endDate: string };
type GscRow = {
  keys?: string[];
  clicks?: number;
  impressions?: number;
  ctr?: number;
  position?: number;
};

const latest: Period = {
  label: "latest",
  startDate: "2026-10-15",
  endDate: "2026-11-11",
};
const previous: Period = {
  label: "previous",
  startDate: "2026-09-17",
  endDate: "2026-10-14",
};

function csvEscape(value: string | number) {
  const stringValue = String(value);
  return /[",\n]/.test(stringValue)
    ? `"${stringValue.replaceAll('"', '""')}"`
    : stringValue;
}

function aggregate(rows: GscRow[]) {
  const clicks = rows.reduce((sum, row) => sum + (row.clicks || 0), 0);
  const impressions = rows.reduce(
    (sum, row) => sum + (row.impressions || 0),
    0,
  );
  const weightedPosition = rows.reduce(
    (sum, row) => sum + (row.position || 0) * (row.impressions || 0),
    0,
  );
  return {
    clicks,
    impressions,
    ctr: impressions ? clicks / impressions : 0,
    position: impressions ? weightedPosition / impressions : 0,
  };
}

async function queryPath(
  searchConsole: ReturnType<typeof google.searchconsole>,
  pagePath: string,
  period: Period,
) {
  const response = await searchConsole.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: period.startDate,
      endDate: period.endDate,
      type: "web",
      dimensions: ["query", "page"],
      rowLimit: 25_000,
      dataState: "final",
      dimensionFilterGroups: [
        {
          groupType: "and",
          filters: [
            {
              dimension: "page",
              operator: "contains",
              expression: pagePath,
            },
            {
              dimension: "country",
              operator: "equals",
              expression: "usa",
            },
          ],
        },
      ],
    },
  });
  return (response.data.rows || []) as GscRow[];
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

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const results: Array<{
    url: string;
    latest: ReturnType<typeof aggregate>;
    previous: ReturnType<typeof aggregate>;
    topQueries: Array<{
      query: string;
      clicks: number;
      impressions: number;
      ctr: number;
      position: number;
    }>;
  }> = [];

  for (const pagePath of targetPaths) {
    process.stdout.write(`Fetching ${pagePath} ... `);
    const [latestRows, previousRows] = await Promise.all([
      queryPath(searchConsole, pagePath, latest),
      queryPath(searchConsole, pagePath, previous),
    ]);
    const latestMetrics = aggregate(latestRows);
    const previousMetrics = aggregate(previousRows);
    const topQueries = latestRows
      .map((row) => ({
        query: row.keys?.[0] || "",
        clicks: row.clicks || 0,
        impressions: row.impressions || 0,
        ctr: row.ctr || 0,
        position: row.position || 0,
      }))
      .filter((row) => row.query)
      .sort(
        (a, b) =>
          b.clicks - a.clicks ||
          b.impressions - a.impressions ||
          a.position - b.position,
      )
      .slice(0, 10);
    results.push({
      url: pagePath,
      latest: latestMetrics,
      previous: previousMetrics,
      topQueries,
    });
    console.log(
      `${latestMetrics.clicks} clicks / ${latestMetrics.impressions} impressions`,
    );
  }

  const csvHeaders = [
    "url",
    "latest_start",
    "latest_end",
    "latest_clicks",
    "latest_impressions",
    "latest_ctr_percent",
    "latest_position",
    "previous_start",
    "previous_end",
    "previous_clicks",
    "previous_impressions",
    "previous_ctr_percent",
    "previous_position",
    "click_change",
    "impression_change",
    "position_change",
    "top_queries",
  ];
  const csvRows = results.map((result) => [
    result.url,
    latest.startDate,
    latest.endDate,
    result.latest.clicks,
    result.latest.impressions,
    (result.latest.ctr * 100).toFixed(2),
    result.latest.position.toFixed(2),
    previous.startDate,
    previous.endDate,
    result.previous.clicks,
    result.previous.impressions,
    (result.previous.ctr * 100).toFixed(2),
    result.previous.position.toFixed(2),
    result.latest.clicks - result.previous.clicks,
    result.latest.impressions - result.previous.impressions,
    (result.previous.position - result.latest.position).toFixed(2),
    result.topQueries
      .map(
        (query) =>
          `${query.query} (${query.impressions} imp, pos ${query.position.toFixed(1)})`,
      )
      .join(" | "),
  ]);
  const csv = [csvHeaders, ...csvRows]
    .map((row) => row.map(csvEscape).join(","))
    .join("\n");
  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${RUN_DATE}-city-ledger-gsc.csv`),
    `${csv}\n`,
    "utf8",
  );

  let markdown = `# City URL GSC evidence\n\n`;
  markdown += `Run date: ${RUN_DATE}  \n`;
  markdown += `Property: ${SITE_URL}  \n`;
  markdown += `Country filter: United States  \n`;
  markdown += `Latest complete window: ${latest.startDate} through ${latest.endDate}  \n`;
  markdown += `Previous window: ${previous.startDate} through ${previous.endDate}\n\n`;
  markdown += `Position change is positive when average position improved. Zero metrics mean GSC returned no row for the path in that window; they do not prove that the URL was unindexed.\n\n`;
  markdown += `| URL | Latest clicks | Latest impressions | CTR | Position | Previous clicks | Previous impressions | Position |\n`;
  markdown += `| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n`;
  for (const result of results) {
    markdown += `| \`${result.url}\` | ${result.latest.clicks} | ${result.latest.impressions} | ${(result.latest.ctr * 100).toFixed(2)}% | ${result.latest.position ? result.latest.position.toFixed(2) : "—"} | ${result.previous.clicks} | ${result.previous.impressions} | ${result.previous.position ? result.previous.position.toFixed(2) : "—"} |\n`;
  }
  markdown += `\n## Query evidence\n`;
  for (const result of results) {
    markdown += `\n### ${result.url}\n\n`;
    if (!result.topQueries.length) {
      markdown += `No query rows returned for the latest complete window.\n`;
      continue;
    }
    markdown += `| Query | Clicks | Impressions | CTR | Position |\n`;
    markdown += `| --- | ---: | ---: | ---: | ---: |\n`;
    for (const query of result.topQueries) {
      markdown += `| ${query.query.replaceAll("|", "\\|")} | ${query.clicks} | ${query.impressions} | ${(query.ctr * 100).toFixed(2)}% | ${query.position.toFixed(2)} |\n`;
    }
  }
  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${RUN_DATE}-city-ledger-gsc.md`),
    markdown,
    "utf8",
  );

  console.log(`Saved ${results.length} city comparisons to ${OUTPUT_DIR}`);
}

run().catch((error) => {
  const message =
    error?.response?.data?.error?.message || error?.message || String(error);
  console.error(`GSC reconciliation failed: ${message}`);
  process.exitCode = 1;
});
