/**
 * debug_gsc.ts — One-time diagnostic script
 * Run this to see exactly which GSC properties the service account can access.
 * The exact string shown here is what you must use as SITE_URL in fetch_gsc_data.ts
 */
import path from "path";
import { google } from "googleapis";

const KEY_FILE_PATH = path.join(process.cwd(), "gsc-credentials.json");

async function run() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });

  const sc = google.searchconsole({ version: "v1", auth });

  console.log("🔍 Listing all GSC properties the service account can access...\n");

  try {
    const res = await sc.sites.list();
    const sites = res.data.siteEntry || [];

    if (sites.length === 0) {
      console.log("❌ NO SITES FOUND.");
      console.log("\nThis means either:");
      console.log("  1. The service account has NOT been added to bondflorida.com in GSC yet.");
      console.log("     → Go to GSC → Settings → Users & Permissions → Add user");
      console.log("     → Email: service-account@toppoolremoval-api.iam.gserviceaccount.com");
      console.log("     → Permission: Full");
      console.log("  2. You just added it and it hasn't propagated yet (wait 5 minutes).");
    } else {
      console.log(`✅ Found ${sites.length} accessible propert${sites.length === 1 ? 'y' : 'ies'}:\n`);
      sites.forEach((site: any) => {
        console.log(`  siteUrl: "${site.siteUrl}"   permissionLevel: ${site.permissionLevel}`);
      });
      console.log("\n👉 Copy the exact siteUrl string above and set it as SITE_URL in fetch_gsc_data.ts");
    }
  } catch (err: any) {
    console.error("❌ API error:", err.response?.data?.error?.message || err.message);
  }
}

run();
