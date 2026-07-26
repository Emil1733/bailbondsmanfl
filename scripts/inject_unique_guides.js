const fs = require('fs');
const path = require('path');

const uniqueData = {
    "broward-county-main-jail": {
        intro: [
            "Located in the heart of downtown Fort Lauderdale, the Broward County Main Jail is a massive eight-story maximum-security facility that serves as the central booking hub for the Broward Sheriff's Office (BSO). It handles the highest volume of arrests in the 17th Judicial Circuit of Florida.",
            "Understanding the logistics of the BSO intake system, the procedures of the Broward County courthouse, and local magistrate schedules is critical to securing a rapid release."
        ],
        sections: [
            {
                id: "booking", title: "BSO Intake and Processing", icon: "AlertCircle",
                content: [
                    "When a defendant is arrested in Fort Lauderdale, Hollywood, or anywhere in Broward County, they are transported to the Main Jail on SE 1st Ave. The intake process here involves fingerprinting via LiveScan (which is sent directly to FDLE and the FBI) and a full medical screening. Because this facility processes thousands of inmates monthly, the booking wait time can easily exceed 8 to 12 hours before a bond amount is officially entered into the system."
                ]
            },
            {
                id: "hearings", title: "Magistrate Hearings in the 17th Circuit", icon: "Scale",
                content: [
                    "If the charges do not have a pre-set bond schedule, or if the arrest involves domestic violence, the defendant must wait for a First Appearance hearing before a Broward County magistrate judge. These hearings occur daily at the Broward County Courthouse (often conducted via video link from the jail). The judge will review the probable cause affidavit to determine bail."
                ]
            },
            {
                id: "facility", title: "Fort Lauderdale Facility Operations", icon: "Info",
                content: [
                    "The Broward Main Jail strictly prohibits in-person social visits. All visitations are conducted via video monitors. Inmates can use the Securus system for calls. It is important to note that parking around the facility (near the courthouse) is notoriously difficult, which is why our mobile e-bonding process—where we handle the paperwork digitally and file the bond at the clerk's window for you—is the preferred method for most families."
                ]
            }
        ]
    },
    "orange-county-booking-and-release-center": {
        intro: [
            "The Orange County Booking and Release Center (BRC), located on South John Young Parkway in Orlando, is one of the busiest county jails in Florida. Due to the high volume of tourism in the Greater Orlando area and theme parks, the BRC processes a uniquely diverse demographic of inmates daily.",
            "Navigating the 9th Judicial Circuit's procedures quickly is essential, especially for out-of-state visitors facing unexpected arrests."
        ],
        sections: [
            {
                id: "booking", title: "The BRC Intake Pipeline", icon: "AlertCircle",
                content: [
                    "Operated by the Orange County Corrections Department, the BRC handles all arrests from the Orlando Police Department, the Orange County Sheriff's Office, and surrounding municipalities. Upon arrival, inmates undergo a strict classification process. Because of the sheer volume of weekend arrests (particularly DUIs and altercations from nightlife districts), the booking queue can take up to 14 hours to clear."
                ]
            },
            {
                id: "hearings", title: "Ninth Judicial Circuit First Appearances", icon: "Scale",
                content: [
                    "Initial appearances for Orange County are broadcast via closed-circuit television from the BRC to the courthouse. For out-of-state defendants, securing a surety bond quickly is paramount to avoid being stranded in Florida. A licensed local bondsman can post the bond immediately after the judge sets the amount, preventing transfer to long-term housing."
                ]
            },
            {
                id: "facility", title: "Orlando Release Procedures & Vendor Info", icon: "Info",
                content: [
                    "Unlike some older facilities, the Orange County BRC utilizes modern digital kiosks for commissary deposits and operates entirely on video visitation (currently managed via the Global Tel Link - GTL network). When a bond is posted, the discharge process begins, but due to facility size, it can take 4 to 8 hours for the individual to finally exit through the main release lobby."
                ]
            }
        ]
    },
    "tgk-correctional-center": {
        intro: [
            "The Turner Guilford Knight (TGK) Correctional Center in Miami is the primary intake facility for the Miami-Dade Corrections and Rehabilitation Department. As the central booking hub for the 11th Judicial Circuit, it processes arrests from all over Miami-Dade, including Miami Beach and Doral.",
            "Its fast-paced, high-security environment requires bondsmen to have immediate, 24/7 access to the booking windows to ensure rapid release."
        ],
        sections: [
            {
                id: "booking", title: "Miami-Dade Central Intake", icon: "AlertCircle",
                content: [
                    "TGK is notorious for its complex intake gauntlet. When a suspect is brought in by MDPD, they are held in large holding cells while waiting for their fingerprints to clear NCIC/FCIC databases. A bond cannot be executed until the Miami-Dade Clerk of Courts updates the CJIS system with an active booking number. This administrative lag usually takes 6 to 10 hours."
                ]
            },
            {
                id: "hearings", title: "11th Circuit Bond Court", icon: "Scale",
                content: [
                    "Bond hearings in Miami-Dade are fast-paced and highly structured. Held daily, magistrates determine if a defendant is a flight risk. Miami judges rely heavily on the Pretrial Services (PTS) risk assessment matrix. If the judge grants a surety bond, we immediately file the paperwork at the TGK bond window on the first floor."
                ]
            },
            {
                id: "facility", title: "TGK Operations & Logistics", icon: "Info",
                content: [
                    "Located on NW 41st Street, TGK operates 24/7. They utilize specialized third-party vendors for inmate communications. Because of the high volume of releases, the discharge area can be crowded. Our agents track the internal jail management system to pinpoint exactly when your loved one will walk out the door."
                ]
            }
        ]
    },
    "pinellas-county-jail": {
        intro: [
            "The Pinellas County Jail, located on 49th Street North in Clearwater, is the sole detention facility for the entire county. It houses pre-trial detainees arrested by the Pinellas County Sheriff’s Office, St. Petersburg Police, and Clearwater Police.",
            "Understanding the nuances of the 6th Judicial Circuit's bail protocols is the key to navigating this massive complex."
        ],
        sections: [
            {
                id: "booking", title: "Clearwater Central Booking", icon: "AlertCircle",
                content: [
                    "Because Pinellas County consolidated all municipal jails into this single facility, the intake center is always active. The PCSO conducts thorough medical and psychological screenings upon entry. Only after these clearances and the live-scan fingerprint returns are complete can a surety bond be officially processed by the clerk's office."
                ]
            },
            {
                id: "hearings", title: "Advisory Hearings in the 6th Circuit", icon: "Scale",
                content: [
                    "Defendants who do not bond out immediately via the standard uniform bail schedule must attend an advisory hearing at the Pinellas County Justice Center (which is adjacent to the jail complex). These hearings occur 365 days a year. If a bond is granted, the proximity of the courthouse to the jail allows our agents to file the bond swiftly."
                ]
            },
            {
                id: "facility", title: "Pinellas Facility Guidelines", icon: "Info",
                content: [
                    "The Pinellas County Sheriff’s Office utilizes the 'Smart Communications' system for inmate mail and phone calls. All physical mail is scanned and delivered electronically to inmates via tablets. Visitation is handled through a video visitation center located in the Administration Support Building. When posting bond, the release process typically takes 4 to 6 hours."
                ]
            }
        ]
    },
    "palm-beach-county-main-detention-center": {
        intro: [
            "Located on Gun Club Road in West Palm Beach, the Palm Beach County Main Detention Center is a high-security facility serving the 15th Judicial Circuit. It manages a significant volume of complex, high-bond cases.",
            "Dealing with the Palm Beach County Sheriff's Office (PBSO) requires precision, especially when coordinating large surety bonds and collateral."
        ],
        sections: [
            {
                id: "booking", title: "PBSO Intake & Background Verification", icon: "AlertCircle",
                content: [
                    "Arrestees brought to the Gun Club Road facility undergo a rigorous intake process. PBSO cross-references local, state, and federal warrants immediately. Due to the high-profile nature of many Palm Beach arrests, the classification and verification process is meticulous, meaning booking times can stretch from 6 to 12 hours before a bond is eligible for posting."
                ]
            },
            {
                id: "hearings", title: "15th Judicial Circuit Bond Hearings", icon: "Scale",
                content: [
                    "First Appearance hearings in Palm Beach County are conducted daily. Magistrates here closely evaluate community ties and flight risk. In cases involving high net-worth individuals or serious charges, judges may impose Nebbia holds (requiring proof that the funds used to pay the bond premium come from legitimate sources) before the surety bond can be executed."
                ]
            },
            {
                id: "facility", title: "Gun Club Road Logistics", icon: "Info",
                content: [
                    "The facility relies heavily on digital systems for visitation and funds deposits. JPay is the primary vendor used for inmate accounts. Because the Main Detention Center is located in a busy government complex, utilizing our digital e-bonding service allows you to secure the bond remotely without having to navigate the West Palm Beach traffic or wait in the PBSO lobby."
                ]
            }
        ]
    },
    "lee-county-core-facility": {
        intro: [
            "The Lee County Core Facility on Ortiz Avenue in Fort Myers is the nerve center of the Lee County Sheriff's Office corrections bureau. It serves the rapidly growing populations of Fort Myers, Cape Coral, and Bonita Springs.",
            "Navigating the 20th Judicial Circuit's specific rules is crucial for families seeking to secure a fast release in Southwest Florida."
        ],
        sections: [
            {
                id: "booking", title: "Fort Myers Central Intake", icon: "AlertCircle",
                content: [
                    "The Ortiz Avenue complex is designed to process arrestees efficiently, but peak times (such as weekends or holidays in Cape Coral) can cause bottlenecks. Inmates are subject to standard biometric scanning and warrant checks. The Lee County Clerk of Court must update the system before a bonding agency can legally submit the surety bond paperwork."
                ]
            },
            {
                id: "hearings", title: "20th Circuit Magistrate Procedures", icon: "Scale",
                content: [
                    "For offenses requiring judicial review, defendants will face a judge during daily first appearances. The 20th Circuit is known for strict adherence to bond schedules. Having a bondsman ready the moment the judge bangs the gavel ensures that the release process begins before the inmate is transferred from the temporary holding cells into general population."
                ]
            },
            {
                id: "facility", title: "Lee County Facility Rules", icon: "Info",
                content: [
                    "Lee County operates its visitation exclusively through video kiosks, and appointments must be scheduled in advance. The release lobby at the Core Facility is open 24/7 for bond postings and inmate discharges. The typical turnaround time for a discharge after the bond is accepted by the booking desk is 4 to 8 hours."
                ]
            }
        ]
    },
    "duval-county-pre-trial-detention-facility": {
        intro: [
            "The John E. Goode Pre-Trial Detention Facility in downtown Jacksonville is unique because it serves the largest consolidated city-county in Florida. The Jacksonville Sheriff's Office (JSO) oversees this massive complex.",
            "Efficiently bonding someone out requires an intimate understanding of JSO protocols and the 4th Judicial Circuit Court."
        ],
        sections: [
            {
                id: "booking", title: "JSO Intake and Processing", icon: "AlertCircle",
                content: [
                    "Because Jacksonville spans such a massive geographic area, all arrests funnel into this single downtown facility on East Adams Street. The intake unit operates 24 hours a day, executing background checks, medical clearances, and property cataloging. The high volume of intake means families should expect a minimum of a 6 to 10 hour wait before an inmate is fully 'booked in' and eligible for bail."
                ]
            },
            {
                id: "hearings", title: "4th Judicial Circuit Hearings", icon: "Scale",
                content: [
                    "First Appearance court (often referred to as 'J1' hearings in Duval County) occurs daily at 1:00 PM. These hearings are conducted via video link from the jail. If a judge grants a bond, our agents immediately process the surety documents with the JSO bonding window to ensure the defendant is included in the next wave of releases."
                ]
            },
            {
                id: "facility", title: "Jacksonville Facility Operations", icon: "Info",
                content: [
                    "The facility utilizes 'GettingOut' by GTL for all video visitations and inmate messaging. There is no in-person social visitation allowed. When an inmate is released, they exit through the main lobby on Adams Street. We track the JSO release log in real-time to coordinate pickup seamlessly."
                ]
            }
        ]
    },
    "metro-west-detention-center": {
        intro: [
            "Metro West Detention Center is the largest correctional facility in Miami-Dade County. While TGK handles primary intake, Metro West houses a massive population of pre-trial inmates awaiting trial in the 11th Judicial Circuit.",
            "Securing a bond for an inmate already housed at Metro West requires coordinating with the central records department to facilitate a transfer release."
        ],
        sections: [
            {
                id: "booking", title: "Pre-Trial Housing & Transfers", icon: "AlertCircle",
                content: [
                    "Unlike TGK, Metro West is primarily a housing facility rather than a booking hub. If your loved one was transferred here, it means they have completed the initial intake and are in long-term pre-trial status. Posting a bond for an inmate at Metro West requires the paperwork to be routed through the Miami-Dade Corrections central system, which can sometimes add administrative time to the release."
                ]
            },
            {
                id: "hearings", title: "Navigating Miami-Dade Pre-Trial", icon: "Scale",
                content: [
                    "Inmates housed at Metro West have already had their first appearance. If they are seeking a bond reduction (an Arthur Hearing), it must be scheduled with their assigned felony or misdemeanor judge at the Richard E. Gerstein Justice Building. Once a judge signs the order modifying the bond, we execute the new surety bond immediately."
                ]
            },
            {
                id: "facility", title: "Metro West Logistics", icon: "Info",
                content: [
                    "Located on NW 41st Street, further west than TGK, this massive complex strictly enforces visitation rules and uses specific vendors for inmate accounts. Releases from Metro West can sometimes be routed back through TGK depending on staffing and transport schedules, so having a bondsman monitor the exact release point is critical."
                ]
            }
        ]
    },
    // The remaining 3 jails (Orient, Falkenburg, Land O Lakes) were part of the older set.
    // I will include them here so the script can hit them too if needed.
    "orient-road-jail": {
        intro: [
            "Orient Road Jail is the primary booking and intake facility for the Hillsborough County Sheriff's Office (HCSO). Anyone arrested in Tampa or Hillsborough County comes through these doors first.",
            "Navigating the 13th Judicial Circuit and the HCSO central booking desk requires speed and accuracy to prevent the inmate from being transferred to general housing."
        ],
        sections: [
            {
                id: "booking", title: "HCSO Central Intake", icon: "AlertCircle",
                content: [
                    "Orient Road handles the initial booking for every arrest in the county. The process includes DNA swabbing (for felonies), LiveScan fingerprinting, and warrant checks. If a bond is posted immediately after the booking number is generated, the defendant can be released directly from Orient Road without being transferred."
                ]
            },
            {
                id: "hearings", title: "13th Circuit Video Court", icon: "Scale",
                content: [
                    "First Appearance hearings are conducted via video from the Orient Road Jail to the Hillsborough County courthouse. Judges review the charges and establish bail. Because we monitor the court dockets in real-time, we can file the surety bond the exact moment the judge's order hits the clerk's system."
                ]
            },
            {
                id: "facility", title: "Tampa Facility Operations", icon: "Info",
                content: [
                    "The release lobby at Orient Road is open 24/7. HCSO operates a highly efficient system, and typical release times are between 4 and 8 hours after the bond is posted. We provide families with direct tracking information so you know exactly when to arrive at the facility."
                ]
            }
        ]
    },
    "falkenburg-road-jail": {
        intro: [
            "Falkenburg Road Jail is the massive, 3,300-bed direct supervision facility in Hillsborough County. It serves as the long-term pre-trial housing center for inmates who have completed intake at Orient Road.",
            "Bonding an inmate out of Falkenburg requires coordinating with the HCSO records department to execute a housing release."
        ],
        sections: [
            {
                id: "booking", title: "Pre-Trial Housing Status", icon: "AlertCircle",
                content: [
                    "If an inmate is located at Falkenburg, they have already passed through central intake. Posting a bond here means the release order must be sent from the clerk's office to the housing unit deputies, who then escort the inmate to the Falkenburg release center. This internal logistics chain can take 6 to 12 hours."
                ]
            },
            {
                id: "hearings", title: "Bond Reduction & Arthur Hearings", icon: "Scale",
                content: [
                    "Since these inmates have already had their first appearance, any changes to their bond require a formal motion in front of a 13th Judicial Circuit judge. If an Arthur Hearing results in a bond reduction, we immediately execute the new bond amount to secure their release from Falkenburg."
                ]
            },
            {
                id: "facility", title: "Falkenburg Operations", icon: "Info",
                content: [
                    "Falkenburg Road operates with advanced video visitation and uses specific vendors for inmate trust funds. The release lobby is distinct from the intake lobby, and our agents will guide you to the exact pickup point on Falkenburg Road once the discharge is finalized."
                ]
            }
        ]
    },
    "land-o-lakes-detention-center": {
        intro: [
            "The Land O' Lakes Detention Center is the sole booking and housing facility for the Pasco County Sheriff's Office. It handles all arrests for New Port Richey, Dade City, and surrounding areas.",
            "Dealing with the 6th Judicial Circuit (Pasco division) requires localized knowledge of the county's specific bond schedules."
        ],
        sections: [
            {
                id: "booking", title: "Pasco County Central Intake", icon: "AlertCircle",
                content: [
                    "The Pasco Sheriff's Office processes all arrestees through the Land O' Lakes facility. The intake process is thorough, and because the facility is centralized for a sprawling county, booking queues can be long. We monitor the Pasco jail management system to alert you the minute the booking is complete."
                ]
            },
            {
                id: "hearings", title: "Pasco Magistrate Court", icon: "Scale",
                content: [
                    "First appearances are conducted daily. Because Pasco County spans two main courthouses (New Port Richey and Dade City), having a bondsman who understands how to file paperwork electronically across the 6th Circuit ensures there are no delays in the release order reaching the jail."
                ]
            },
            {
                id: "facility", title: "Land O' Lakes Operations", icon: "Info",
                content: [
                    "Located centrally in Land O' Lakes, the facility allows for 24/7 bond postings. Pasco uses strict guidelines for visitation and mail. Once the surety bond is accepted by the desk deputies, the inmate is usually discharged to the front lobby within 4 to 8 hours."
                ]
            }
        ]
    }
};

const jailsDir = path.join(__dirname, '../src/app/jail');

function injectUniqueData(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            injectUniqueData(fullPath);
        } else if (file === 'page.tsx') {
            const slug = path.basename(path.dirname(fullPath));
            if (uniqueData[slug]) {
                let content = fs.readFileSync(fullPath, 'utf-8');
                
                const dataString = `const guideData = ${JSON.stringify(uniqueData[slug], null, 4)};`;
                
                // Inject guideData right before the return statement if it doesn't exist
                if (!content.includes('const guideData =')) {
                    content = content.replace('    return (', `    ${dataString}\n\n    return (`);
                } else {
                    // replace existing guideData
                    content = content.replace(/const guideData = \{[\s\S]*?\}\];\n/m, `${dataString}\n`);
                }
                
                // Update the component call
                content = content.replace(
                    /<ComprehensiveJailGuide jailName=\{jail\.name\} \/>/g, 
                    '<ComprehensiveJailGuide jailName={jail.name} intro={guideData.intro} sections={guideData.sections} />'
                );
                
                fs.writeFileSync(fullPath, content, 'utf-8');
                console.log(`Updated unique data for ${slug}`);
            }
        }
    }
}

injectUniqueData(jailsDir);
