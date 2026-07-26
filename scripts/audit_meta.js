const fs = require('fs');
const path = require('path');

const jailsDir = path.join(__dirname, '../src/app/jail');
const files = fs.readdirSync(jailsDir);

console.log("=== TITLE & META DESCRIPTION AUDIT ===");

for (const file of files) {
    const fullPath = path.join(jailsDir, file);
    if (fs.statSync(fullPath).isDirectory()) {
        const pagePath = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pagePath)) {
            const content = fs.readFileSync(pagePath, 'utf-8');
            
            const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
            const descMatch = content.match(/description:\s*["']([^"']+)["']/);
            
            console.log(`\n📍 ${file.toUpperCase()}`);
            console.log(`   Title: ${titleMatch ? titleMatch[1] : 'MISSING'}`);
            console.log(`   Desc:  ${descMatch ? descMatch[1] : 'MISSING'}`);
        }
    }
}
