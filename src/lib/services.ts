import { Shield, CloudRain, Globe, Scale, AlertTriangle, Car } from 'lucide-react';

export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    metaDescription: string;
    icon: any; // Lucide icon component
    heroImage: string; // Placeholder for now
    content: {
        intro: string;
        keyPoints: string[];
        processSteps: { title: string; desc: string }[];
        commonCharges: string[];
        faq: { question: string; answer: string }[];
    };
    speakableSummary?: string; // Voice Search Snippet (2-3 sentences)
}

export const services: Service[] = [
    {
        slug: 'dui-bail-bonds',
        title: 'DUI Bail Bonds Florida',
        shortDescription: ' arrested for Driving Under the Influence? We specialize in urgent DUI release preventing license suspension delays.',
        metaDescription: 'DUI Bail Bonds in Florida. 24/7 Fast Release for Driving Under the Influence charges. We handle the paperwork to get them out before the 8-hour hold expires.',
        icon: Car,
        heroImage: '/images/dui-hero.jpg',
        content: {
            intro: "Driving Under the Influence (DUI) is one of the most common arrest charges in Florida, but it comes with strict release conditions. Unlike standard arrests, DUI defendants are often subject to a mandatory 8-hour hold to ensure sobriety. Our job is to have the bond paperwork posted *exactly* when that clock runs out, so they don't spend a minute longer in jail than necessary.",
            keyPoints: [
                "Mandatory 8-Hour Hold Monitoring",
                "Assistance with Vehicle Impound Release",
                "Discrete & Confidential Service",
                "Payment Plans for High Bond Amounts"
            ],
            processSteps: [
                { title: "The 8-Hour Clock", desc: "Florida law mandates a hold until BAC drops < 0.05 or 8 hours pass. We use this time to sign paperwork." },
                { title: "Bond Posting", desc: "We post the bond immediately so it is pre-processed by the time the hold expires." },
                { title: "Discharge", desc: "The defendant is released. We provide a ride home if needed, as their license may be seized." }
            ],
            commonCharges: ["DUI First Offense", "DUI with Property Damage", "Felony DUI (3rd within 10 years)", "BUI (Boating Under Influence)"],
            ],
    faq: [
        { question: "Can I bail someone out immediately after a DUI arrest?", answer: "You can sign the paperwork immediately, but the jail cannot physically release them until the mandatory 8-hour sobriety hold is complete (or their BAC is 0.00)." },
        { question: "How much is bail for a first DUI?", answer: "In Florida, standard bonds for a first-time misdemeanor DUI range from $500 to $1,000. Our fee is 10% ($50 to $100)." },
        { question: "What happens to their driver's license?", answer: "The license is often seized upon arrest. Their DUI citation serves as a temporary driving permit for 10 days. We can refer you to traffic attorneys to fight the suspension." }
    ]
        },
speakableSummary: "For a first-time DUI in Florida, the standard bond is typically between $500 and $1,000. However, the defendant must complete a mandatory 8-hour sobriety hold before they can be physically released."
    },
{
    slug: 'domestic-violence-bail',
        title: 'Domestic Violence Bail Bonds',
            shortDescription: 'Navigating "No Contact" orders and mandatory court appearances. We guide you through the complex DV release process.',
                metaDescription: 'Domestic Violence Bail Bonds Florida. Specialized support for DV charges, "No Contact" orders, and First Appearance hearings. Confidential and fast.',
                    icon: CloudRain,
                        heroImage: '/images/dv-hero.jpg',
                            content: {
        intro: "Domestic Violence arrests in Florida trigger a unique set of legal protocols. Most importantly, the defendant cannot be bonded out immediately—they must face a judge at 'First Appearance' (usually within 24 hours) to have 'No Contact' orders issued. We prepare everything beforehand so release happens immediately after the judge bangs the gavel.",
            keyPoints: [
                "Mandatory First Appearance Court",
                "Explanation of 'No Contact' Orders",
                "Assistance with Temporary Housing Locations",
                "Fastest Post-Court Release"
            ],
                processSteps: [
                    { title: "No Immediate Bond", desc: "By law, DV arrests have 'No Bond' until a judge reviews the case." },
                    { title: "First Appearance", desc: "The judge sets the bond amount and issues a 'Stay Away' order protecting the victim." },
                    { title: "Immediate Posting", desc: "We are present at the courthouse/jail to post the bond the second the amount is set." }
                ],
                    commonCharges: ["Domestic Battery", "Aggravated Battery", "Stalking / Cyberstalking", "Violation of Restraining Order"],
            ],
        faq: [
            { question: "Why is there no bond amount yet?", answer: "Domestic violence charges require a 'First Appearance' hearing. The bond is set by a judge, not a schedule, to ensure victim safety." },
            { question: "What does a 'No Contact' order mean?", answer: "It is strict. The defendant cannot return home, call, text, or email the victim. We explain these rules clearly to prevent re-arrest." },
            { question: "Can I bail out my spouse if I am the victim?", answer: "Yes. You have the right to post bond for them. However, the 'No Contact' order will likely still apply until modified by a judge." }
        ]
    },
    speakableSummary: "Domestic violence charges in Florida require a mandatory 'First Appearance' hearing before a judge, meaning bond cannot be posted immediately. The judge will set the amount and issue a 'No Contact' order to protect the victim."
},
{
    slug: 'immigration-bail-bonds',
        title: 'Immigration Bail Bonds (Federal)',
            shortDescription: 'Specialized Federal bonds for ICE datainers. We handle nationwide immigration bonds to reunite families.',
                metaDescription: 'Immigration Bail Bonds Florida. Licensed to post Federal bonds for ICE detainees across Florida. Reunite your family today.',
                    icon: Globe,
                        heroImage: '/images/immigration-hero.jpg',
                            content: {
        intro: "Immigration bonds are distinct from state bonds. If your loved one is held by ICE (Immigration and Customs Enforcement) or has an immigration detainer, you need a bondsman licensed for Federal transactions. We specialize in navigating the complex DHS/ICE protocols to reunite families pending their hearing.",
            keyPoints: [
                "Federal License (Different from State)",
                "Nationwide Posting Utility",
                "Bilingual Staff (Se Habla Español)",
                "Collateral Management"
            ],
                processSteps: [
                    { title: "A-Number Lookup", desc: "We locate the detainee using their Alien Registration Number (A-Number)." },
                    { title: "Bond Verification", desc: "We verify the bond amount set by the Immigration Judge or ICE officer." },
                    { title: "Federal Posting", desc: "We post the Delivery Bond directly with the DHS field office." }
                ],
                    commonCharges: ["ICE Detainer", "Visa Overstay", "Illegal Entry", "Removal Proceedings"],
                        faq: [
                            { question: "What is an Immigration Delivery Bond?", answer: "It guarantees that the alien will appear for all immigration court hearings. If they appear, the collateral is returned at the end of the case." },
                            { question: "How much do immigration bonds cost?", answer: "They are higher than state bonds, often starting at $1,500 and going up to $10,000+. The premium structure is different (15% is standard for Federal)." },
                            { question: "Do you need collateral?", answer: "Yes. Due to the high flight risk and federal nature, immigration bonds almost always require full collateral (real estate or cash) to secure the bond." }
                        ]
    },
    speakableSummary: "Immigration bond amounts are set by an Immigration Judge or ICE and typically start at $1,500, but can exceed $10,000. Unlike state bonds, these often require full collateral to guarantee the detainee appears for federal hearings."
},
{
    slug: 'traffic-warrant-bail',
        title: 'Traffic & Warrant Amnesty',
            shortDescription: 'Clear active bench warrants for unpaid tickets or missed court dates without going to jail (Walk-Through Bonds).',
                metaDescription: 'Traffic Ticket Bail Bonds Florida. Clear your bench warrant for suspended license or missed court. "Walk-Through" bond service available.',
                    icon: AlertTriangle,
                        heroImage: '/images/traffic-hero.jpg',
                            content: {
        intro: "Driving with a suspended license or missing a court date usually results in a 'Bench Warrant'. This means you can be arrested during any routine traffic stop. We offer a 'Walk-Through' bond service where we prepare the paperwork, go with you to the station, and clear the warrant in minutes—often without you ever being put in a cell.",
            keyPoints: [
                "Walk-Through Bond Service",
                "Clear Warrants Fast",
                "Avoid Embarrassing Arrests",
                "Driver's License Reinstatement Help"
            ],
                processSteps: [
                    { title: "Warrant Check", desc: "We confirm the active warrant and the bond amount." },
                    { title: "Pre-Sign", desc: "We finish all paperwork in our office." },
                    { title: "Walk-Through", desc: "We escort you to the booking desk, process the bond, and you leave immediately." }
                ],
                    commonCharges: ["Failure to Appear (FTA)", "Driving While License Suspended (DWLS)", "Reckless Driving", "Unpaid Traffic Citations"],
                        faq: [
                            { question: "Do I have to go to jail to clear a warrant?", answer: "Technically yes, you must be 'booked', but with our Walk-Through service, it is a rapid administrative process. You are fingerprinting and released immediately." },
                            { question: "How do I know if I have a warrant?", answer: "Call us. We can check the statewide database safely and confidentially." }
                        ]
    },
    speakableSummary: "Most traffic warrants can be cleared with a 'Walk-Through' bond, allowing you to process the paperwork and resolve the warrant without ever being placed in a jail cell. This administrative process typically takes less than an hour."
},
{
    slug: 'nebbia-hold-bail',
        title: 'Nebbia Hold (Bail Source)',
            shortDescription: 'Prove legitimacy of funds. We prepare the "Nebbia Proffer" to lift financial holds and secure release.',
                metaDescription: 'Nebbia Hold Bail Bonds Florida. Specialized assistance for "Bail Source Hearings". We help prove funds are legitimate to lift the hold.',
                    icon: Scale,
                        heroImage: '/images/nebbia-hero.jpg',
                            content: {
        intro: "A 'Nebbia Hold' (or Bail Source Hearing) is applied when the court suspects bail money may come from illegal activities (e.g., drug trafficking or fraud). The defendant cannot be released—even if bond is posted—until the source of the premiums and collateral is proven to be legitimate. We specialize in preparing the 'Nebbia Proffer' packet to satisfy the state attorney and lift the hold fast.",
            keyPoints: [
                "Financial Source Verification",
                "Nebbia Proffer Preparation",
                "Coordination with Defense Attorney",
                "Rapid Hearing Scheduling"
            ],
                processSteps: [
                    { title: "Document Collection", desc: "We gather bank statements, pay stubs, and tax returns to prove the funds are clean." },
                    { title: "The Proffer", desc: "We compile the 'Nebbia Proffer' packet and submit it to the prosecutor for review." },
                    { title: "Lifting the Hold", desc: "Once the prosecutor stipulates (agrees) to the source, the judge signs the order lifting the hold." }
                ],
                    commonCharges: ["Drug Trafficking", "Money Laundering", "Racketeering (RICO)", "Grand Theft / Fraud"],
                        faq: [
                            { question: "What is a Nebbia Hold?", answer: "It is a condition added to the bond requiring proof that the money used to pay for bail was not obtained illegally. You cannot bond out until this is cleared." },
                            { question: "What documents do I need?", answer: "Typically: 3 months of bank statements, recent pay stubs, tax returns, or affidavits from co-signers proving income." },
                            { question: "How long does it take to lift?", answer: "If we prepare a strong proffer immediately, we can often get the prosecutor to agree (stipulate) within 24-48 hours, avoiding a long wait for a court hearing." }
                        ]
    },
    speakableSummary: "A Nebbia Hold is a court requirement to prove that bail funds come from legitimate sources before a defendant can be released. We prepare a financial proffer packet to satisfy the prosecutor and lift this hold quickly."
}
];

// Helper Functions
export async function getService(slug: string): Promise<Service | undefined> {
    return services.find((s) => s.slug === slug);
}

export async function getAllServices(): Promise<Service[]> {
    return services;
}
