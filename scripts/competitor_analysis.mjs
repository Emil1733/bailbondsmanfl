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

const keywords = [
    "tgk bail bonds",
    "land o lakes jail bail bonds",
    "orlando bail bonds",
    "florida bail bonds"
];

async function runCompetitorAnalysis() {
    console.log("🔍 Running DataForSEO SERP Analysis for Top Keywords...");
    
    const domainScores = {};
    const keywordData = {};

    try {
        for (const kw of keywords) {
            console.log(`Fetching DataForSEO SERP for: "${kw}"...`);
            const postData = [{
                keyword: kw,
                location_code: 2840, // USA
                language_code: "en",
                device: "desktop",
                os: "windows"
            }];

            const response = await fetch('https://api.dataforseo.com/v3/serp/google/organic/live/advanced', {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${auth}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            const data = await response.json();
            
            if (data.status_code !== 20000) {
                console.error(`API Error for ${kw}:`, data);
                continue;
            }

            data.tasks.forEach(task => {
                const keyword = task.data.keyword;
                if (!task.result || task.result.length === 0 || !task.result[0].items) {
                    console.log(`No results found for keyword: ${keyword}. Task info:`, JSON.stringify(task, null, 2));
                    return;
                }

                const items = task.result[0].items.filter(item => item.type === 'organic');
                
                keywordData[keyword] = [];

                // Analyze top 10
                items.slice(0, 10).forEach(item => {
                    const domain = item.domain;
                    if (!domainScores[domain]) {
                        domainScores[domain] = { count: 0, score: 0, positions: [], urls: [] };
                    }
                    
                    domainScores[domain].count += 1;
                    domainScores[domain].score += (11 - item.rank_group);
                    domainScores[domain].positions.push(item.rank_group);
                    domainScores[domain].urls.push(item.url);
                    
                    keywordData[keyword].push({
                        rank: item.rank_group,
                        domain: item.domain,
                        title: item.title,
                        url: item.url
                    });
                });
            });
        }

        // Sort domains by score
        const sortedCompetitors = Object.entries(domainScores)
            .sort((a, b) => b[1].score - a[1].score)
            .filter(([domain, _]) => domain && !domain.includes('bondflorida.com')); // Exclude ourselves if we show up

        console.log("\n🔥 TOP OVERALL COMPETITORS (By SERP Visibility) 🔥");
        console.log("---------------------------------------------------");
        sortedCompetitors.slice(0, 10).forEach(([domain, stats]) => {
            console.log(`${domain} (Score: ${stats.score} | Ranking for ${stats.count}/4 keywords)`);
            console.log(`   Avg Pos: ${(stats.positions.reduce((a, b) => a + b, 0) / stats.count).toFixed(1)}`);
        });

        console.log("\n📈 KEYWORD BREAKDOWN (Top 3) 📈");
        console.log("---------------------------------------------------");
        Object.entries(keywordData).forEach(([keyword, results]) => {
            console.log(`\nKeyword: "${keyword}"`);
            results.slice(0, 3).forEach(res => {
                console.log(`  #${res.rank} - ${res.domain} | ${res.title}`);
                console.log(`       ${res.url}`);
            });
        });

        // Save to file
        const outDir = path.join(process.cwd(), 'gsc', 'competitors');
        if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
        
        fs.writeFileSync(path.join(outDir, 'competitors_raw.json'), JSON.stringify({
            competitors: sortedCompetitors,
            keywords: keywordData
        }, null, 2));

        console.log(`\n✅ Raw data saved to: ${path.join(outDir, 'competitors_raw.json')}`);

    } catch (error) {
        console.error("Fetch failed:", error);
    }
}

runCompetitorAnalysis();
