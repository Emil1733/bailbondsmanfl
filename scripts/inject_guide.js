const fs = require('fs');
const path = require('path');

const jailsDir = path.join(__dirname, '../src/app/jail');

function injectGuide(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            injectGuide(fullPath);
        } else if (file === 'page.tsx') {
            let content = fs.readFileSync(fullPath, 'utf-8');
            
            if (!content.includes('ComprehensiveJailGuide')) {
                
                // 1. Add the import statement
                const importMatch = content.match(/import .* from '.*';\n/g);
                if (importMatch) {
                    const lastImport = importMatch[importMatch.length - 1];
                    const lastImportIndex = content.lastIndexOf(lastImport);
                    const insertPos = lastImportIndex + lastImport.length;
                    content = content.substring(0, insertPos) + "import ComprehensiveJailGuide from '@/components/ComprehensiveJailGuide';\n" + content.substring(insertPos);
                } else {
                     content = "import ComprehensiveJailGuide from '@/components/ComprehensiveJailGuide';\n" + content;
                }
                
                // 2. Inject the component at the bottom of the left column
                // The left column ends with:
                //                                 </ul>
                //                             </div>
                // 
                //                         </div>
                
                // Use a more robust regex since whitespace might vary slightly
                const endOfLeftColRegex = /(<\/ul>\s*<\/div>\s*)(<\/div>)/;
                
                content = content.replace(endOfLeftColRegex, '$1\n                            <ComprehensiveJailGuide jailName={jail.name} />\n\n                        $2');
                
                fs.writeFileSync(fullPath, content, 'utf-8');
                console.log(`Injected guide into ${fullPath}`);
            }
        }
    }
}

injectGuide(jailsDir);
