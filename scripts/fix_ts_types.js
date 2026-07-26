const fs = require('fs');
const path = require('path');

const jailsDir = path.join(__dirname, '../src/app/jail');

function fixTypes(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixTypes(fullPath);
        } else if (file === 'page.tsx') {
            let content = fs.readFileSync(fullPath, 'utf-8');
            
            // 1. Fix the import statement
            if (content.includes("import ComprehensiveJailGuide from '@/components/ComprehensiveJailGuide';")) {
                content = content.replace(
                    "import ComprehensiveJailGuide from '@/components/ComprehensiveJailGuide';", 
                    "import ComprehensiveJailGuide, { GuideSection } from '@/components/ComprehensiveJailGuide';"
                );
            }
            
            // 2. Fix the component props to cast the type
            if (content.includes("sections={guideData.sections} />")) {
                content = content.replace(
                    "sections={guideData.sections} />", 
                    "sections={guideData.sections as GuideSection[]} />"
                );
            }
            
            fs.writeFileSync(fullPath, content, 'utf-8');
            console.log(`Fixed TS typing in ${fullPath}`);
        }
    }
}

fixTypes(jailsDir);
