const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const appDir = path.join(srcDir, 'app');

// 1. Discover all routes
const routes = new Set();
const routeFiles = new Map(); // route -> file path

function findRoutes(dir, currentRoute = '') {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            // Ignore dynamic routes for this static audit unless they are resolved
            if (!file.startsWith('[')) {
                findRoutes(fullPath, `${currentRoute}/${file}`);
            }
        } else if (file === 'page.tsx') {
            const route = currentRoute === '' ? '/' : currentRoute;
            routes.add(route);
            routeFiles.set(route, fullPath);
        }
    }
}
findRoutes(appDir);

// 2. Scan all files for internal links
const linksMap = new Map(); // route -> Set of routes it links to
const incomingLinks = new Map(); // route -> Set of routes linking to it

// Initialize incoming links map
for (const route of routes) {
    incomingLinks.set(route, new Set());
}

function extractLinks(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const links = new Set();
    
    // Match <Link href="/something"> and href="/something"
    const hrefRegex = /href=["'](\/[^"']*)["']/g;
    let match;
    while ((match = hrefRegex.exec(content)) !== null) {
        let link = match[1];
        // Remove trailing slashes and hash links
        link = link.split('#')[0].replace(/\/$/, '');
        if (link === '') link = '/';
        links.add(link);
    }
    return links;
}

// Recursively scan all .tsx files in src/
function scanFilesForLinks(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            scanFilesForLinks(fullPath);
        } else if (file.endsWith('.tsx')) {
            const links = extractLinks(fullPath);
            
            // Map file back to route if it is a page
            let sourceRoute = 'Component/Layout';
            for (const [route, rPath] of routeFiles.entries()) {
                if (rPath === fullPath) {
                    sourceRoute = route;
                    break;
                }
            }
            
            linksMap.set(fullPath, links);
            
            for (const link of links) {
                if (incomingLinks.has(link)) {
                    incomingLinks.get(link).add(sourceRoute);
                }
            }
        }
    }
}
scanFilesForLinks(srcDir);

// 3. Analyze and Report

console.log("=== 🔍 BOND FLORIDA INTERNAL LINK AUDIT ===\n");

console.log(`Total Static Routes Found: ${routes.size}`);

const orphans = [];
const weakLinks = [];

for (const [route, incoming] of incomingLinks.entries()) {
    // Ignore dynamic route templates (if any snuck in)
    if (route.includes('[')) continue;
    
    // An orphan has 0 incoming links from anywhere in the src directory (including components)
    if (incoming.size === 0) {
        orphans.push(route);
    } else if (incoming.size < 2 && route !== '/') {
        weakLinks.push(route);
    }
}

console.log("\n🛑 ORPHAN PAGES (0 Incoming Links):");
if (orphans.length === 0) {
    console.log("   ✅ PERFECT! No orphan pages detected.");
} else {
    orphans.forEach(r => console.log(`   ❌ ${r}`));
}

console.log("\n⚠️ WEAKLY LINKED PAGES (Only 1 Incoming Link):");
if (weakLinks.length === 0) {
    console.log("   ✅ Excellent. All pages have robust linking.");
} else {
    weakLinks.forEach(r => {
        const sources = Array.from(incomingLinks.get(r)).join(', ');
        console.log(`   - ${r} (Linked only from: ${sources})`);
    });
}

// 4. Strategic Architecture Checks
console.log("\n🏗️ ARCHITECTURE & SILO ANALYSIS:");

// Check if Jail pages link back to their parent County pages
let jailToCountyFails = 0;
for (const route of routes) {
    if (route.startsWith('/jail/')) {
        const filePath = routeFiles.get(route);
        const links = extractLinks(filePath);
        
        let hasCountyLink = false;
        for (const link of links) {
            if (link.startsWith('/county/')) {
                hasCountyLink = true;
                break;
            }
        }
        
        if (!hasCountyLink) {
            console.log(`   ❌ Silo Break: ${route} does NOT link back to any /county/ page.`);
            jailToCountyFails++;
        }
    }
}
if (jailToCountyFails === 0) console.log("   ✅ All Jail pages cross-link to County hubs (Perfect Siloing).");

// Check if County pages link to Jail pages
let countyToJailFails = 0;
for (const route of routes) {
    if (route.startsWith('/county/') && !route.includes('[')) { // static county pages
        const filePath = routeFiles.get(route);
        const links = extractLinks(filePath);
        
        let hasJailLink = false;
        for (const link of links) {
            if (link.startsWith('/jail/')) {
                hasJailLink = true;
                break;
            }
        }
        
        if (!hasJailLink) {
            console.log(`   ❌ Missing Deep Link: ${route} does NOT link down to any /jail/ page.`);
            countyToJailFails++;
        }
    }
}
if (countyToJailFails === 0) console.log("   ✅ All County pages deep-link to Jail pages.");

console.log("\nDone.");
