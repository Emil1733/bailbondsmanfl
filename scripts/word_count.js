const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../src/app/jail/broward-county-main-jail/page.tsx');
let content = fs.readFileSync(file, 'utf-8');

const match = content.match(/return \(([\s\S]*)\);/);
if (match) {
    let html = match[1];
    
    const faqMatch = content.match(/const combinedFaqs = \[([\s\S]*?)\];/);
    if (faqMatch) html += faqMatch[1];

    const jailMatch = content.match(/const jail = \{([\s\S]*?)\};/);
    if (jailMatch) html += jailMatch[1];
    
    html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
    html = html.replace(/<[^>]+>/g, ' '); 
    html = html.replace(/\{[^}]+\}/g, ' '); 
    html = html.replace(/&[a-z]+;/g, ' '); 
    html = html.replace(/[^a-zA-Z0-9\s]/g, ' '); 
    
    const words = html.trim().split(/\s+/).filter(w => w.length > 0);
    console.log("Approximate word count:", words.length);
}
