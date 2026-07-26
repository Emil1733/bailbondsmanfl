const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../src/app');

const filesToFix = [
    { path: 'page.tsx', route: '' },
    { path: 'about/page.tsx', route: '/about' },
    { path: 'contact/page.tsx', route: '/contact' },
    { path: 'privacy/page.tsx', route: '/privacy' },
    { path: 'terms/page.tsx', route: '/terms' },
];

for (const file of filesToFix) {
    const fullPath = path.join(appDir, file.path);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf-8');
        
        if (!content.includes('alternates: {')) {
            // Find the metadata block
            // It usually looks like:
            // export const metadata: Metadata = {
            //     title: "...",
            //     description: "...",
            // };
            
            const canonicalString = `\n    alternates: {\n        canonical: "https://bondflorida.com${file.route}",\n    },`;
            
            // Regex to find the end of the metadata block
            content = content.replace(/(export const metadata(?:.*?)\{[\s\S]*?)(};)/, `$1${canonicalString}\n$2`);
            
            fs.writeFileSync(fullPath, content, 'utf-8');
            console.log(`Added canonical to ${file.path}`);
        }
    }
}
