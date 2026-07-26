const fs = require('fs');
const path = require('path');

const leeCities = ['cape-coral', 'bonita-springs', 'fort-myers'];
const baseDir = path.join(__dirname, '../src/app/county/lee');

for (const city of leeCities) {
    const filePath = path.join(baseDir, city, 'page.tsx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        
        // Find the right column sidebar or the end of the main content
        // In the city template, there is usually a "Local Navigation Links" or "Other Miami Facilities" equivalent
        // Alternatively, we can just inject a new section in the sidebar.
        
        // Let's inject a "Local Facility Info" block in the sidebar
        // Look for: {/* Estimator */} or something similar
        if (content.includes('{/* Local Navigation Links */}')) {
            const insertPoint = content.indexOf('{/* Local Navigation Links */}');
            const jailLinkBlock = `
                            {/* Local Jail Link */}
                            <div className="border-t border-slate-800 pt-12 mb-12">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Central Intake Facility</h3>
                                <div className="flex flex-col gap-3">
                                    <Link href="/jail/lee-county-core-facility" className="text-sm text-yellow-600 hover:text-white transition-colors">
                                        Lee County Core Facility (Ortiz Ave) &rarr;
                                    </Link>
                                </div>
                            </div>
                            
                            `;
            
            // Only inject if it's not already there
            if (!content.includes('/jail/lee-county-core-facility')) {
                content = content.substring(0, insertPoint) + jailLinkBlock + content.substring(insertPoint);
                fs.writeFileSync(filePath, content, 'utf-8');
                console.log(`Injected deep link into ${city}`);
            }
        }
    }
}
