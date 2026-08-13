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

const target = "thebailbondfirm.com";

async function fetchCompetitorBacklinks() {
    console.log(`🔗 Fetching exact backlinks for: ${target}...`);
    
    // Using the backlinks/live endpoint to get actual URLs
    const postData = [{
        target: target,
        limit: 20, // Get top 20 backlinks
        order_by: ["rank,desc"], // Sort by domain rank
        filters: [
            ["dofollow", "=", true] // Only dofollow links
        ]
    }];

    try {
        const response = await fetch('https://api.dataforseo.com/v3/backlinks/backlinks/live', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        const data = await response.json();
        
        if (data.status_code !== 20000) {
            console.error(`API Error for ${target}:`, JSON.stringify(data, null, 2));
            return;
        }

        const task = data.tasks[0];
        if (!task.result || task.result.length === 0 || !task.result[0].items) {
            console.log(`No backlink URLs found for: ${target}`);
            return;
        }

        const items = task.result[0].items;

        console.log(`\n🔥 TOP 20 DOFOLLOW BACKLINKS FOR ${target} 🔥`);
        console.log("--------------------------------------------------------------------------------");
        
        items.forEach((item, index) => {
            console.log(`\n[#${index + 1}] Rank: ${item.domain_from_rank}`);
            console.log(`From URL: ${item.url_from}`);
            console.log(`Anchor Text: "${item.anchor || 'N/A'}"`);
            console.log(`To Page: ${item.url_to}`);
        });

        // Save to file
        const outDir = path.join(process.cwd(), 'gsc', 'competitors');
        fs.writeFileSync(path.join(outDir, 'tgk_backlinks.json'), JSON.stringify(items, null, 2));

        console.log(`\n✅ Exact backlink URLs saved to: ${path.join(outDir, 'tgk_backlinks.json')}`);

    } catch (error) {
        console.error("Fetch failed:", error);
    }
}

fetchCompetitorBacklinks();
