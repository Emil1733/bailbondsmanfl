const fs = require('fs');
const path = require('path');

const jailsDir = path.join(__dirname, '../src/app/jail');

function fixSticky(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixSticky(fullPath);
        } else if (file === 'page.tsx') {
            let content = fs.readFileSync(fullPath, 'utf-8');
            
            // To fix the overlap, we will extract the CTA block, remove it from the top,
            // and move it to the very bottom of the sidebar, keeping `sticky top-8`.
            // This way, as the user scrolls, the CTA will stick *after* the other elements scroll up,
            // preventing any overlap.
            
            // 1. Identify the CTA block
            const ctaStart = content.indexOf('{/* Sticky Urgency CTA */}');
            if (ctaStart !== -1) {
                const ctaEnd = content.indexOf('{/* Estimator */}');
                if (ctaEnd !== -1) {
                    let ctaBlock = content.substring(ctaStart, ctaEnd);
                    
                    // 2. Remove the CTA block from its current position
                    content = content.replace(ctaBlock, '');
                    
                    // 3. Find the end of the sidebar
                    // The sidebar ends with:
                    //                             </div>
                    // 
                    //                         </div>
                    // 
                    //                     </div>
                    //                 </ContentContainer>
                    
                    const sidebarEndRegex = / +<\/div>\n\n +<\/div>\n\n +<\/div>\n +<\/ContentContainer>/;
                    const match = content.match(sidebarEndRegex);
                    
                    if (match) {
                        // Insert the CTA block right before the end of the sidebar column (the second to last </div>)
                        const insertPosition = match.index + match[0].indexOf('                        </div>\n\n                    </div>\n                </ContentContainer>');
                        
                        // We keep the sticky top-8 because now it's the last element in the column,
                        // so it won't overlap anything below it when it sticks!
                        
                        content = content.substring(0, insertPosition) + ctaBlock + content.substring(insertPosition);
                        
                        fs.writeFileSync(fullPath, content, 'utf-8');
                        console.log(`Moved sticky CTA to bottom in ${fullPath}`);
                    }
                }
            }
        }
    }
}

fixSticky(jailsDir);
