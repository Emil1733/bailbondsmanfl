const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const appDir = path.join(srcDir, 'app');

// 1. Discover all routes and their canonicals
const routes = new Map(); // route -> canonical URL found

function findRoutes(dir, currentRoute = '') {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!file.startsWith('[')) {
                findRoutes(fullPath, `${currentRoute}/${file}`);
            }
        } else if (file === 'page.tsx') {
            const route = currentRoute === '' ? '/' : currentRoute;
            
            // Extract canonical
            const content = fs.readFileSync(fullPath, 'utf-8');
            const canonicalMatch = content.match(/canonical:\s*["'](https:\/\/bondflorida\.com[^"']*)["']/);
            const canonical = canonicalMatch ? canonicalMatch[1] : null;
            
            routes.set(route, { filePath: fullPath, canonical });
        }
    }
}
findRoutes(appDir);

// 2. Read Sitemap.ts to see what routes are included
const sitemapPath = path.join(appDir, 'sitemap.ts');
let sitemapRoutes = [];
if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    const urlRegex = /url:\s*`?(https:\/\/bondflorida\.com[^`"']*)`?/g;
    let match;
    while ((match = urlRegex.exec(sitemapContent)) !== null) {
        // Evaluate template literals if necessary (like ${baseUrl})
        let url = match[1];
        if (url.includes('${baseUrl}')) {
             url = url.replace('${baseUrl}', 'https://bondflorida.com');
        }
        // Remove trailing slashes for comparison
        url = url.replace(/\/$/, '');
        sitemapRoutes.push(url);
    }
}

console.log("=== 🔍 CANONICAL & SITEMAP AUDIT ===\n");

let canonicalErrors = 0;
let missingCanonicals = 0;

console.log("📍 CANONICAL TAGS:");
for (const [route, data] of routes.entries()) {
    const expectedCanonical = `https://bondflorida.com${route === '/' ? '' : route}`;
    
    if (!data.canonical) {
        console.log(`   ❌ MISSING: ${route} has NO canonical tag in metadata.`);
        missingCanonicals++;
    } else if (data.canonical !== expectedCanonical) {
        console.log(`   ❌ MISMATCH: ${route}`);
        console.log(`      Found:    ${data.canonical}`);
        console.log(`      Expected: ${expectedCanonical}`);
        canonicalErrors++;
    }
}

if (canonicalErrors === 0 && missingCanonicals === 0) {
    console.log("   ✅ All static pages have perfectly matching canonical URLs.");
}

console.log("\n🗺️ SITEMAP AUDIT:");
let missingFromSitemap = 0;
for (const [route, data] of routes.entries()) {
    const expectedUrl = `https://bondflorida.com${route === '/' ? '' : route}`;
    
    if (!sitemapRoutes.includes(expectedUrl)) {
        console.log(`   ⚠️ NOT FOUND IN STATIC SITEMAP REGEX: ${expectedUrl}`);
        missingFromSitemap++;
    }
}

if (missingFromSitemap === 0) {
    console.log("   ✅ All static routes found in sitemap.ts.");
} else {
    console.log(`   Note: ${missingFromSitemap} routes weren't found in the static regex scan. If sitemap.ts generates these dynamically via the 'counties' or 'jails' arrays, this is expected.`);
}

console.log("\nDone.");
