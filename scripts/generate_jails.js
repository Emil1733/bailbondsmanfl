const fs = require('fs');
const path = require('path');

const jails = [
    {
        name: "Broward County Main Jail",
        address: "555 SE 1st Ave, Fort Lauderdale, FL 33301",
        phone: "(954) 831-5900",
        inmateSearchUrl: "https://www.sheriff.org",
        lat: 26.1186,
        lng: -80.1413,
        slug: "broward-county-main-jail",
        county: "Broward County",
        city: "Fort Lauderdale",
        zip: "33301",
        shortDesc: "Primary intake facility for Broward County arrests. High volume processing center.",
        bookingTime: "6 to 10 hours",
        agency: "Broward Sheriff's Office (BSO)"
    },
    {
        name: "Orange County Booking and Release Center (BRC)",
        address: "3855 S John Young Pkwy, Orlando, FL 32839",
        phone: "(407) 836-3400",
        inmateSearchUrl: "https://www.ocfl.net",
        lat: 28.5020,
        lng: -81.4230,
        slug: "orange-county-booking-and-release-center",
        county: "Orange County",
        city: "Orlando",
        zip: "32839",
        shortDesc: "Central Florida's massive booking hub handling Orlando and theme park related arrests.",
        bookingTime: "8 to 14 hours",
        agency: "Orange County Corrections Department"
    },
    {
        name: "Pinellas County Jail",
        address: "14400 49th St N, Clearwater, FL 33762",
        phone: "(727) 464-6415",
        inmateSearchUrl: "https://www.pcsoweb.com",
        lat: 27.9015,
        lng: -82.6970,
        slug: "pinellas-county-jail",
        county: "Pinellas County",
        city: "Clearwater",
        zip: "33762",
        shortDesc: "The sole booking facility for all law enforcement agencies in Pinellas County.",
        bookingTime: "5 to 8 hours",
        agency: "Pinellas County Sheriff's Office"
    },
    {
        name: "Palm Beach County Main Detention Center",
        address: "3228 Gun Club Rd, West Palm Beach, FL 33406",
        phone: "(561) 688-4401",
        inmateSearchUrl: "http://www.pbso.org",
        lat: 26.6740,
        lng: -80.1040,
        slug: "palm-beach-county-main-detention-center",
        county: "Palm Beach County",
        city: "West Palm Beach",
        zip: "33406",
        shortDesc: "Main detention hub for high-wealth Palm Beach County arrests.",
        bookingTime: "6 to 12 hours",
        agency: "Palm Beach County Sheriff's Office (PBSO)"
    },
    {
        name: "Lee County Core Facility",
        address: "2501 Ortiz Ave, Fort Myers, FL 33905",
        phone: "(239) 477-1700",
        inmateSearchUrl: "https://www.sheriffleefl.org",
        lat: 26.6310,
        lng: -81.8290,
        slug: "lee-county-core-facility",
        county: "Lee County",
        city: "Fort Myers",
        zip: "33905",
        shortDesc: "Southwest Florida's primary intake and housing center.",
        bookingTime: "4 to 8 hours",
        agency: "Lee County Sheriff's Office"
    },
    {
        name: "Duval County Pre-Trial Detention Facility",
        address: "500 E Adams St, Jacksonville, FL 32202",
        phone: "(904) 630-5747",
        inmateSearchUrl: "https://www.jaxsheriff.org",
        lat: 30.3260,
        lng: -81.6500,
        slug: "duval-county-pre-trial-detention-facility",
        county: "Duval County",
        city: "Jacksonville",
        zip: "32202",
        shortDesc: "The central intake facility for the consolidated city of Jacksonville.",
        bookingTime: "6 to 10 hours",
        agency: "Jacksonville Sheriff's Office (JSO)"
    },
    {
        name: "Metro West Detention Center",
        address: "13850 NW 41st St, Miami, FL 33178",
        phone: "(786) 263-5110",
        inmateSearchUrl: "https://www.miamidade.gov/corrections",
        lat: 25.8115,
        lng: -80.4190,
        slug: "metro-west-detention-center",
        county: "Miami-Dade County",
        city: "Miami",
        zip: "33178",
        shortDesc: "Miami-Dade's largest detention facility housing major pre-trial inmates.",
        bookingTime: "6 to 12 hours",
        agency: "Miami-Dade Corrections"
    }
];

const templatePath = path.join(__dirname, '../src/app/jail/tgk-correctional-center/page.tsx');
let template = fs.readFileSync(templatePath, 'utf-8');

jails.forEach(jail => {
    let content = template;
    
    // Replace standard specific items
    content = content.replace(/Turner Guilford Knight \(TGK\) Correctional Center/g, jail.name);
    content = content.replace(/TGK Correctional Center/g, jail.name);
    content = content.replace(/TGK/g, jail.name.split(' ')[0]); // generic short name replacement
    content = content.replace(/7000 NW 41st St, Miami, FL 33166/g, jail.address);
    content = content.replace(/\(786\) 263-5600/g, jail.phone);
    content = content.replace(/https:\/\/www\.miamidade\.gov\/corrections/g, jail.inmateSearchUrl);
    content = content.replace(/25\.8118/g, jail.lat);
    content = content.replace(/-80\.3120/g, jail.lng);
    content = content.replace(/tgk-correctional-center/g, jail.slug);
    
    // Replace Meta & Schema specific geo
    content = content.replace(/"addressLocality": "Miami"/g, `"addressLocality": "${jail.city}"`);
    content = content.replace(/"postalCode": "33166"/g, `"postalCode": "${jail.zip}"`);
    content = content.replace(/"name": "Miami"/g, `"name": "${jail.city}"`);
    content = content.replace(/"name": "Miami-Dade County"/g, `"name": "${jail.county}"`);
    content = content.replace(/Miami-Dade County/g, jail.county);
    content = content.replace(/ Miami, FL/g, ` ${jail.city}, FL`);
    content = content.replace(/ Miami/g, ` ${jail.city}`);
    
    // Booking / Agency specifics
    content = content.replace(/6 to 12 hours/g, jail.bookingTime);
    content = content.replace(/Miami-Dade Corrections and Rehabilitation Department/g, jail.agency);
    content = content.replace(/Miami-Dade Corrections Desk/g, jail.agency + ' Desk');
    content = content.replace(/Miami Police Department, MDPD, or local municipal agencies/g, `local municipal agencies or the ${jail.agency}`);
    
    // Component Name
    const componentName = jail.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Page';
    content = content.replace(/export default function TgkCorrectionalCenterPage/g, `export default function ${componentName}`);

    // Create dir & write
    const dir = path.join(__dirname, `../src/app/jail/${jail.slug}`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf-8');
    console.log(`Created ${jail.slug}`);
});

// Update sitemap
const sitemapPath = path.join(__dirname, '../src/app/sitemap.ts');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const jailUrls = jails.map(j => `    { url: 'https://bondflorida.com/jail/${j.slug}', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },`).join('\n');
sitemapContent = sitemapContent.replace(
    /    \{ url: 'https:\/\/bondflorida.com\/jail\/tgk-correctional-center', lastModified: new Date\(\), changeFrequency: 'monthly', priority: 0.8 \},/g,
    `    { url: 'https://bondflorida.com/jail/tgk-correctional-center', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },\n${jailUrls}`
);
fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');
console.log('Updated sitemap.ts');
