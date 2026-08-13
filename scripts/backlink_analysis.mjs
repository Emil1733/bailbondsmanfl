import fs from 'fs';
import path from 'path';

// Load env vars
const envFile = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf8');
const authMatch = envFile.match(/DATAFORSEO_AUTH=(.+)/);
if (!authMatch) {
    console.error("Could not find DATAFORSEO_AUTH in .env.local");
    process.exit(1);
}
const auth = authMatch[1].trim();

const targets = [
    "bailbondsnow.org",
    "thebailbondfirm.com",
    "mercybailbonds.com",
    "bradsbailbonds.com",
    "bondflorida.com" // our domain
];

async function runBacklinkAnalysis() {
    console.log("🔗 Running DataForSEO Backlinks Analysis...");
    
    const results = [];

    try {
        for (const target of targets) {
            console.log(`Fetching backlinks for: ${target}...`);
            const postData = [{ target: target, internal_list_limit: 10 }];

            const response = await fetch('https://api.dataforseo.com/v3/backlinks/summary/live', {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${auth}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            const data = await response.json();
            
            if (data.status_code !== 20000) {
                console.error(`API Error for ${target}:`, data);
                continue;
            }

            data.tasks.forEach(task => {
                if (!task.result || task.result.length === 0) {
                    console.log(`No backlink data for: ${target}. Task info: ${JSON.stringify(task)}`);
                    return;
                }

                const res = task.result[0];
                results.push({
                    domain: target,
                    rank: res.rank || 0,
                    referring_domains: res.referring_domains || 0,
                    backlinks: res.backlinks || 0,
                    dofollow: res.backlinks_info && res.backlinks_info.dofollow ? res.backlinks_info.dofollow : 0
                });
            });
        }

        console.log("\n📊 BACKLINK PROFILE COMPARISON 📊");
        console.log("--------------------------------------------------------------------------------");
        console.log(String("DOMAIN").padEnd(25) + "| RANK | REF DOMAINS | BACKLINKS | DOFOLLOW |");
        console.log("--------------------------------------------------------------------------------");

        // Sort by rank
        results.sort((a, b) => b.rank - a.rank);

        results.forEach(r => {
            const domain = r.domain === "bondflorida.com" ? `>> ${r.domain} <<` : r.domain;
            console.log(
                String(domain).padEnd(25) + "| " + 
                String(r.rank).padEnd(4) + " | " + 
                String(r.referring_domains).padEnd(11) + " | " + 
                String(r.backlinks).padEnd(9) + " | " + 
                String(r.dofollow).padEnd(8) + "|"
            );
        });

        // Save to file
        const outDir = path.join(process.cwd(), 'gsc', 'competitors');
        fs.writeFileSync(path.join(outDir, 'backlinks_raw.json'), JSON.stringify(results, null, 2));

        console.log(`\n✅ Raw backlink data saved to: ${path.join(outDir, 'backlinks_raw.json')}`);

    } catch (error) {
        console.error("Fetch failed:", error);
    }
}

runBacklinkAnalysis();
