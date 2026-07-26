const https = require('https');

const postData = JSON.stringify([
    {
        "keywords": [
            "miami jail bail",
            "tgk bail",
            "falkenburg bail",
            "orient road bail",
            "county jail bail bonds"
        ],
        "location_name": "United States",
        "language_name": "English",
        "limit": 50,
        "order_by": ["keyword_info.search_volume,desc"]
    }
]);

const options = {
    hostname: 'api.dataforseo.com',
    port: 443,
    path: '/v3/dataforseo_labs/google/keyword_ideas/live',
    method: 'POST',
    headers: {
        'Authorization': 'Basic dGV2YXRyb3N5YW4xMy4xN0BnbWFpbC5jb206ZGE4ODAwYzE1MzU5M2Q5Zg==',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
};

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const parsed = JSON.parse(data);
            if (parsed.status_code === 20000) {
                const items = parsed.tasks[0].result[0].items;
                const opportunities = items.map(item => ({
                    keyword: item.keyword,
                    search_volume: item.keyword_info ? item.keyword_info.search_volume : null,
                    cpc: item.keyword_info ? item.keyword_info.cpc : null,
                    competition: item.keyword_info ? item.keyword_info.competition : null
                })).filter(item => item.search_volume > 10);
                
                console.log(JSON.stringify(opportunities, null, 2));
            } else {
                console.error("API Error:", parsed);
            }
        } catch (e) {
            console.error("Parse Error:", e.message);
            console.log("Raw Data:", data);
        }
    });
});

req.on('error', (e) => {
    console.error(`Request Error: ${e.message}`);
});

req.write(postData);
req.end();
