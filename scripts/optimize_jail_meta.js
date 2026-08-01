const fs = require('fs');
const path = require('path');

const jailsDir = path.join(__dirname, '../src/app/jail');
const jails = fs.readdirSync(jailsDir).filter(f => fs.statSync(path.join(jailsDir, f)).isDirectory());

const locationMap = {
    'broward-county-main-jail': { name: 'Broward Main Jail', loc: 'Fort Lauderdale' },
    'duval-county-pre-trial-detention-facility': { name: 'Duval PTDF', loc: 'Jacksonville' },
    'falkenburg-road-jail': { name: 'Falkenburg Jail', loc: 'Tampa' },
    'land-o-lakes-detention-center': { name: "Land O' Lakes Jail", loc: 'Pasco County' },
    'lee-county-core-facility': { name: 'Lee County Jail', loc: 'Fort Myers' },
    'metro-west-detention-center': { name: 'Metro West', loc: 'Miami' },
    'orange-county-booking-and-release-center': { name: 'Orange County BRC', loc: 'Orlando' },
    'orient-road-jail': { name: 'Orient Road Jail', loc: 'Tampa' },
    'palm-beach-county-main-detention-center': { name: 'Gun Club Jail', loc: 'West Palm Beach' },
    'pinellas-county-jail': { name: 'Pinellas Jail', loc: 'Clearwater' },
    'tgk-correctional-center': { name: 'TGK', loc: 'Miami' }
};

jails.forEach(jailSlug => {
    const pagePath = path.join(jailsDir, jailSlug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');
        
        const info = locationMap[jailSlug];
        if (!info) return;

        const newTitle = `"${info.name} Booking & Inmate Search | Get Them Out Now (${info.loc} Bail Bonds)"`;
        const newDesc = `"Waiting on ${info.name} Booking? Don\\'t wait for the roster to update. Call our 24/7 ${info.loc} bondsmen to check their booking status and start the release process immediately."`;

        // Regex to replace title and description inside metadata
        content = content.replace(/title:\s*".*?",/, `title: ${newTitle},`);
        content = content.replace(/description:\s*".*?",/, `description: ${newDesc},`);

        fs.writeFileSync(pagePath, content, 'utf8');
        console.log(`✅ Optimized Meta for ${jailSlug}`);
    }
});
