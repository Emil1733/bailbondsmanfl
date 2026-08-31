import { Shield, CloudRain, Globe, Scale, AlertTriangle, Car, Clock, CreditCard } from 'lucide-react';

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
    editorialBody?: string[]; // Deep SEO content (paragraphs)
    speakableSummary?: string; // Voice Search Snippet (2-3 sentences)
}

export const services: Service[] = [
    {
        slug: 'dui-bail-bonds',
        title: 'DUI Bail Bonds Florida',
        shortDescription: ' arrested for Driving Under the Influence? We specialize in urgent DUI release preventing license suspension delays.',
        metaDescription: 'Learn how Florida DUI booking and bail may work, which information to gather, what can affect release timing, and where to find official county resources.',
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
            faq: [
        { question: "Can I bail someone out immediately after a DUI arrest?", answer: "You can sign the paperwork immediately, but the jail cannot physically release them until the mandatory 8-hour sobriety hold is complete (or their BAC is 0.00)." },
        { question: "How much is bail for a first DUI?", answer: "In Florida, standard bonds for a first-time misdemeanor DUI range from $500 to $1,000. Our fee is 10% ($50 to $100)." },
        { question: "What happens to their driver's license?", answer: "The license is often seized upon arrest. Their DUI citation serves as a temporary driving permit for 10 days. We can refer you to traffic attorneys to fight the suspension." }
    ]
        },
        editorialBody: [
            "Driving Under the Influence (DUI) is one of the most aggressively prosecuted crimes in Florida. Law enforcement agencies conduct frequent sobriety checkpoints, and the moment a driver fails a field sobriety test or registers a Blood Alcohol Content (BAC) over the legal limit of 0.08%, they are placed in handcuffs and transported to the local county jail. The immediate aftermath of a DUI arrest is chaotic, disorienting, and legally precarious. This is where our specialized DUI bail bond services become critical. We step in immediately to stabilize the situation, protect the defendant's rights, and orchestrate their release the second the law allows.",
            "One of the unique legal mechanisms surrounding a DUI arrest in Florida is the mandatory sobriety hold. Under Florida Statute § 316.193(9), a person arrested for DUI cannot be released from custody until one of three conditions is met: their blood alcohol level drops below 0.05%, eight hours have elapsed from the time of the arrest, or they are deemed completely sober and no longer a threat to themselves or the public. This 8-hour hold is strictly enforced across all 67 counties. While it is incredibly frustrating for family members waiting outside the jail, it is an immovable legal barrier.",
            "However, this 8-hour window is exactly when our bondsmen go to work. We do not wait for the clock to run out to begin the bail process. The moment you call us, we locate the defendant in the county roster, determine their assigned bond amount, and begin processing the surety paperwork. We handle all indemnity signatures, process the 10% premium payment securely, and file the bond directly with the booking desk while the defendant is still serving their hold. By front-loading this administrative work, we guarantee that the second the 8-hour timer expires, the jail has the release orders in hand. There are no secondary delays; they walk out the door immediately.",
            "The financial aspect of a DUI bond in Florida is heavily standardized. For a first-time misdemeanor DUI with no property damage or bodily injury, standard bonds typically range from $500 to $1,000. If the arrest involves an aggravated DUI (such as a BAC over 0.15% or having a minor in the vehicle), or if there was property damage, the bond can escalate quickly to $2,500 or more. Regardless of the total, Florida law mandates that bail bond premiums are strictly capped at 10% (or a $100 minimum). This means that a $1,000 bond requires exactly $100 to secure release. There are no hidden fees, and we offer flexible payment plans for higher felony bonds.",
            "Beyond the immediate release from jail, a DUI arrest triggers a simultaneous administrative battle regarding the defendant's driving privileges. In Florida, if you blow over the legal limit or refuse a breathalyzer, your physical driver's license is seized by the arresting officer. Your DUI citation acts as a temporary 10-day driving permit. During this tiny 10-day window, you must request a Formal Review Hearing with the DHSMV to challenge the suspension, otherwise, a hard suspension takes effect automatically. We understand this ticking clock. That is why our priority is hyper-fast release—every hour spent lingering in jail is an hour lost preparing a legal defense to save their license."
        ],
speakableSummary: "For a first-time DUI in Florida, the standard bond is typically between $500 and $1,000. However, the defendant must complete a mandatory 8-hour sobriety hold before they can be physically released."
    },
{
    slug: 'domestic-violence-bail',
        title: 'Domestic Violence Bail Bonds',
            shortDescription: 'Navigating "No Contact" orders and mandatory court appearances. We guide you through the complex DV release process.',
                metaDescription: 'Learn about Florida domestic-violence booking, first appearance, possible release conditions, and the official resources to consult for case-specific guidance.',
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
                    metaDescription: 'Learn how federal immigration bonds differ from Florida state bail, what information families may need, and where to verify a detainee’s official status.',
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
                metaDescription: 'Learn how Florida traffic warrants and failure-to-appear cases may be handled, what to verify first, and where to find official county court information.',
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
                metaDescription: 'Learn what a Florida bail-source or Nebbia hearing may require, which financial records are commonly discussed, and why legal advice may be important.',
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
},
{
    slug: 'online-bail-bonds',
    title: 'Online Bail Bonds Florida',
    shortDescription: 'Secure release remotely with our 100% digital E-Bonding service without leaving your home.',
    metaDescription: 'Learn what to verify before completing Florida bail paperwork online, how remote document signing may work, and which fees and terms to review carefully.',
    icon: Globe,
    heroImage: '/images/online-hero.jpg',
    content: {
        intro: "Our E-Bonding technology allows co-signers and indemnitors to complete the entire bail bond process remotely. Whether you are at home, at work, or even in another U.S. state, you can secure the release of a loved one detained in any Florida facility using your smartphone or desktop computer. No office visits or trips to the jail release lobby are required.",
        keyPoints: [
            "100% Digital Document Signing (Docusign Secured)",
            "Instant Credit Card, Debit Card, & Wire Transfers",
            "Real-Time E-Filing Directly with Jail Intake Desks",
            "Available for All Florida Jails & Municipal Holding Facilities"
        ],
        processSteps: [
            { title: "1. Verify Inmate Status", desc: "Call us with the inmate's details. We pull the jail record, confirm the charge, and establish the exact preset bail bond premium." },
            { title: "2. Sign & Pay Online", desc: "We send the credit application and indemnity agreement directly to your email or smartphone. Pay the 10% premium via credit card or bank wire." },
            { title: "3. Immediate E-Filing", desc: "Our local agent submits the signed surety bond electronically to the jail. The release desk begins the discharge process immediately." }
        ],
        commonCharges: [
            "Remote Co-Signer Applications",
            "Out-of-State Indemnity Agreements",
            "Emergency Late-Night E-Bonds",
            "Federal & State Remote Surety Bonds"
        ],
        faq: [
            { question: "Can I bail someone out of jail in Florida if I live in another state?", answer: "Yes, absolutely. Our secure E-Bonding system is designed exactly for this. We can process co-signers from any U.S. state, sign all agreements electronically, and submit the bond to any Florida county jail." },
            { question: "Can I use a credit card for an online bond?", answer: "Absolutely. We accept all major credit cards, debit cards, and some digital wallets via our secure e-bonding portal." },
            { question: "How secure is the E-Bonding process?", answer: "We use bank-level 256-bit encryption for all document transactions. Your personal identification details and financial documents are processed securely and confidentially in compliance with Florida state laws." }
        ]
    },
    editorialBody: [
        "In the modern era of the legal system, securing a loved one's release from jail should not require you to physically drive to a dingy bail bonds office at 3:00 AM, carrying stacks of cash. Florida's implementation of Electronic Bail Bonds (E-Bonding) has completely revolutionized the industry, allowing friends and family to orchestrate a defendant's release from anywhere in the world using just a smartphone or computer. Our agency is fully integrated with this statewide E-Bonding infrastructure, providing a frictionless, 100% remote bail process.",
        "The online bail bond process is remarkably straightforward and designed for maximum speed. When you contact our 24/7 dispatch, we first locate the defendant in the county holding facility and verify their bond amount and charges. Once confirmed, we generate a secure, encrypted link and send it directly to your phone via SMS or email. This link grants you access to our digital portal where you can review the bail conditions, digitally sign the required indemnity agreements using your phone's touch screen, and upload a photo of your valid ID.",
        "Once the electronic paperwork is signed, the system prompts you to submit the state-mandated 10% bail premium. Our payment gateway is highly secure, accepting all major credit cards, debit cards, and digital payment methods. The entire process—from the initial phone call to the final digital signature—can be completed in under 15 minutes while you sit in the comfort of your living room. You never have to step foot in a jail lobby or a bondsman's office.",
        "The speed of E-Bonding is its greatest advantage. As soon as you hit 'submit' on our portal, the digital surety bond is instantly transmitted to the county jail's records department. In massive facilities like Miami-Dade's TGK or Broward's Main Jail, this electronic filing bypasses the physical line of bondsmen waiting at the window. The jail receives the release order directly into their system, triggering the discharge process immediately. This shaves critical hours off the total time your loved one spends behind bars.",
        "Online bail bonds are particularly crucial for out-of-state family members. Florida is a massive tourist destination, and out-of-state arrests are incredibly common. Whether you live in New York, California, or another country entirely, our digital infrastructure allows you to act as the indemnitor and post bail for a family member arrested on vacation in Florida. We handle the jurisdictional complexities, ensure the local county jail receives the electronic clearance, and arrange for the defendant to be released safely, all while keeping you updated via text notifications every step of the way."
    ],
    speakableSummary: "Our online bail bond system enables you to complete the entire bonding process from any location using a computer or mobile phone. We handle all paperwork and payments digitally, allowing us to post the surety bond to the jail immediately without requiring you to leave your home."
},
{
    slug: '24-hour-bail-bonds',
    title: '24 Hour Emergency Bail Bonds Florida',
    shortDescription: 'Arrests happen in the middle of the night. We provide immediate, round-the-clock emergency release services to get them out fast.',
    metaDescription: 'Use this checklist to gather booking details after a Florida arrest, find official inmate information, and understand factors affecting release timing.',
    icon: Clock,
    heroImage: '/images/24hour-hero.jpg',
    content: {
        intro: "The justice system doesn't sleep, and neither do we. Whether a loved one is arrested at 2:00 AM on a Saturday night or during a major holiday, every minute they spend in a Florida county jail exposes them to unnecessary danger and stress. Our 24-hour emergency response team is strategically positioned near major booking facilities to post bonds the exact second the intake process clears.",
        keyPoints: [
            "Always Open: 24/7/365 Operations",
            "Immediate Dispatch to County Jails",
            "Overnight Remote E-Bonding Available",
            "Rapid First Appearance Coordination"
        ],
        processSteps: [
            { title: "Immediate Case Pull", desc: "You call us at any hour. We instantly pull the live jail roster to locate your loved one." },
            { title: "Pre-Booking Preparation", desc: "While they are being fingerprinted, we prepare the bond paperwork so there is zero delay." },
            { title: "Midnight Posting", desc: "Our agents physically walk the bond to the 24-hour release window at the jail to secure release." }
        ],
        commonCharges: [
            "Late Night DUI / BUI Arrests",
            "Weekend Disorderly Conduct",
            "Holiday Domestic Disturbances",
            "Midnight Traffic Warrants"
        ],
        faq: [
            { question: "Is it more expensive to bond someone out at night?", answer: "No. By Florida law, the premium is strictly capped at 10%. We never charge 'after-hours' fees or emergency surcharges." },
            { question: "Can the jail release people in the middle of the night?", answer: "Yes. Most major county jails in Florida operate release lobbies 24 hours a day. If we post the bond at 3 AM, they will be released before sunrise." },
            { question: "What if I can't drive to your office right now?", answer: "We offer 100% remote E-Bonding. You can sign the emergency paperwork from your phone in your pajamas." }
        ]
    },
    speakableSummary: "Our 24-hour emergency bail bond service ensures immediate response to late-night or holiday arrests. We operate around the clock to post bonds the exact moment the jail finishes processing, with no hidden after-hours fees."
},
{
    slug: 'no-collateral-bail-bonds',
    title: 'No Collateral Bail Bonds Florida',
    shortDescription: 'Secure a release based on your signature. Most standard bonds qualify for zero property collateral with a steady job.',
    metaDescription: "Learn how collateral and underwriting can vary for Florida bail bonds, which obligations a co-signer accepts, and what contract terms to review before signing.",
    icon: CreditCard,
    heroImage: '/images/nocollateral-hero.jpg',
    content: {
        intro: "A common misconception is that you must sign over the deed to your house or put up a car title to bail someone out of jail. For the vast majority of standard arrests in Florida, this is entirely false. We specialize in 'Signature Bonds'—meaning we secure the release without requiring physical property as collateral. As long as you have steady employment and residency, your signature is enough.",
        keyPoints: [
            "Zero Property Collateral Required",
            "Signature-Based Indemnity",
            "Flexible Financing on the 10% Premium",
            "Fast Approval Over the Phone"
        ],
        processSteps: [
            { title: "Risk Assessment", desc: "We evaluate the charge, bond amount, and the defendant's ties to the local Florida community." },
            { title: "Indemnitor Approval", desc: "We qualify the co-signer based on employment history, not physical assets like houses or cars." },
            { title: "Signature Release", desc: "You pay the standard 10% premium, sign the promissory agreement, and we post the bond." }
        ],
        commonCharges: [
            "Standard Misdemeanors",
            "First-Time Offenses",
            "Traffic & DUI Violations",
            "Low-Level Non-Violent Felonies"
        ],
        faq: [
            { question: "What exactly does 'No Collateral' mean?", answer: "It means you do not have to put up property, jewelry, or cash equal to the full bond amount. You only pay the non-refundable 10% premium, and sign a contract guaranteeing the defendant will go to court." },
            { question: "When IS collateral actually required?", answer: "Property collateral is typically only required for very high bond amounts (e.g., $50,000+), severe federal charges, immigration bonds, or defendants with a massive flight risk." },
            { question: "Do I need a perfect credit score to qualify?", answer: "No. We look at stability—how long you've lived in Florida and how long you've held your current job—not just a FICO score." }
        ]
    },
    speakableSummary: "Most standard bail bonds in Florida do not require property collateral. By utilizing a signature bond, a qualified co-signer with steady employment can secure a release by simply paying the 10% premium without risking their home or vehicles."
}
];

// Helper Functions
export async function getService(slug: string): Promise<Service | undefined> {
    return services.find((s) => s.slug === slug);
}

export async function getAllServices(): Promise<Service[]> {
    return services;
}
