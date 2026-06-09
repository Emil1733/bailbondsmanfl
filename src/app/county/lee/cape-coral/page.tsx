import { Metadata } from 'next';
import Link from 'next/link';
import EmergencyHeader from '@/components/EmergencyHeader';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import DynamicMap from '@/components/DynamicMap';
import ReleaseTimeEstimator from '@/components/ReleaseTimeEstimator';
import FAQSection from '@/components/FAQSection';
import MobileFloatingCall from '@/components/MobileFloatingCall';
import { ExternalLink, Clock, MapPin, Phone, AlertTriangle, ArrowRight, ShieldCheck, Siren, Zap, FileText, Gavel, CheckCircle } from 'lucide-react';

const ContentContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`max-w-6xl mx-auto px-6 ${className}`}>
        {children}
    </div>
);

export const metadata: Metadata = {
    title: "Bail Bonds Cape Coral FL | 24/7 Emergency Jail Release",
    description: "Need bail bonds in Cape Coral, FL? Call our 24/7 licensed bondsman immediately. Fast release from Lee County Jail Core Facility. Low rates & payment plans.",
    alternates: {
        canonical: "https://bondflorida.com/county/lee/cape-coral",
    },
};

export default function CapeCoralPage() {
    const county = {
        name: "Lee County",
        slug: "lee",
        jail: {
            name: "Lee County Jail (Core Facility)",
            address: "2501 Ortiz Avenue, Fort Myers, FL 33905",
            phone: "(239) 477-1705",
            visitingHours: "Video Visitation Daily",
            inmateSearchUrl: "https://www.sheriffleefl.org",
        },
        geo: {
            lat: 26.6500,
            lng: -81.8000,
        }
    };

    const city = {
        name: "Cape Coral",
        slug: "cape-coral",
        policeDepartment: {
            name: "Cape Coral Police Department",
            address: "1100 Cultural Park Blvd, Cape Coral, FL 33990",
            phone: "(239) 574-3223"
        },
        travelTimeToJail: "25-35 minutes"
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BailBondBusiness",
        "name": "Bail Bonds Cape Coral - Bond Florida",
        "image": "https://bondflorida.com/og-image.jpg",
        "description": "24/7 emergency bail bond services in Cape Coral, FL. Immediate release from Cape Coral Police Department and Lee County Jail.",
        "url": "https://bondflorida.com/county/lee/cape-coral",
        "telephone": "+1-305-831-0358",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cape Coral",
            "addressRegion": "FL",
            "postalCode": "33990",
            "addressCountry": "US"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Cape Coral"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Lee County"
            }
        ],
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        }
    };

    const combinedFaqs = [
        {
            question: "How long does booking take at the Lee County Jail?",
            answer: "Booking at the Lee County Jail Core Facility on Ortiz Avenue typically takes between 3 and 6 hours. During this period, the inmate is fingerprinted, photographed, and run for outstanding warrants. We recommend starting the bail bond paperwork immediately upon arrest so we can post the bond the moment the booking process is finalized."
        },
        {
            question: "Where is the release lobby in Lee County?",
            answer: "Inmate releases are processed at the Lee County Jail Core Facility located at 2501 Ortiz Avenue, Fort Myers, FL 33905. The release lobby is situated at the front of the complex with public parking available outside. Our local bail bondsman can coordinate meeting you at this location or handle all paperwork remotely."
        },
        {
            question: "What is the standard bail bond premium in Cape Coral?",
            answer: "The premium is fixed by Florida state law at 10% of the total bail amount for state charges, with a minimum fee of $100 per charge. Federal or immigration bonds have a standard premium of 15%. This fee is non-refundable and represents the bondsman's service fee for guaranteeing the defendant's appearance in court."
        },
        {
            question: "How do I secure a walk-through bond for an active warrant?",
            answer: "A walk-through bond allows you to turn yourself in at the Lee County Jail on an active warrant, get processed, and be released immediately without spending the night in a cell. We prepare the bond paperwork in advance, accompany you to the Ortiz Avenue facility, and post the bond immediately during the intake process."
        },
        {
            question: "Can I pay for a Cape Coral bail bond online?",
            answer: "Yes. We offer fully digital electronic bonding (E-Bonding). You can complete the credit application, sign the indemnity agreements, and pay the 10% premium via credit card, debit card, or bank wire from your mobile phone, eliminating the need to travel to our office or the jail."
        }
    ];

    return (
        <main className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <EmergencyHeader />

            {/* HERO */}
            <Hero
                title={<span className="font-serif text-white">Bail Bonds in <span className="text-yellow-500">Cape Coral, FL</span></span>}
                subtitle="Emergency 24/7 Service — Speed Release from Cape Coral PD & Ortiz Ave Jail"
                inmateSearchUrl={county.jail.inmateSearchUrl}
            />

            <section className="py-24 bg-slate-950">
                <ContentContainer>
                    <Breadcrumbs
                        items={[
                            { label: `${county.name}`, href: `/county/${county.slug}` },
                            { label: city.name, href: `/county/${county.slug}/${city.slug}` }
                        ]}
                    />
                    <div className="grid lg:grid-cols-12 gap-16 items-start">

                        {/* LEFT COL: MASSIVE LONG-FORM CONTENT */}
                        <div className="lg:col-span-7 space-y-12">

                            {/* URGENCY ALERT BLOCK */}
                            <div className="bg-red-950/20 border-l-4 border-red-500 p-8 rounded-r-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertTriangle className="w-6 h-6 text-red-500" />
                                    <h2 className="text-2xl font-serif font-bold text-white">Lee County Jail Transfer Warning</h2>
                                </div>
                                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                    When an arrest occurs, securing professional <strong>Bail Bonds Cape Coral</strong> services is the single most critical step in preventing a long, stressful transfer to the Lee County Jail Core Facility on Ortiz Avenue. If your loved one is currently detained by the Cape Coral Police Department at the Cultural Park Boulevard station, they are held in a temporary booking area.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Standard law enforcement procedures dictate that inmates who are not bonded out within a few hours of arrest are loaded into transport vans and transferred to the main Lee County Jail Core Facility in Fort Myers. 
                                </p>
                                <div className="bg-slate-900/50 p-4 rounded border border-slate-800 flex items-start gap-3">
                                    <Siren className="w-5 h-5 text-yellow-500 mt-1 shrink-0" />
                                    <p className="text-sm text-slate-400">
                                        <strong>Why Timing Matters:</strong> The physical transfer from Cape Coral to the Ortiz Avenue facility requires crossing either the Cape Coral Bridge (Cape Coral Pkwy) or the Midpoint Bridge (Veterans Pkwy) and driving east on Colonial Boulevard. Once the transport van leaves Cape Coral limits, the booking process effectively resets at the county facility, which can add 4 to 8 hours of processing time before they can be released.
                                    </p>
                                </div>
                            </div>

                            {/* SECTION 1: EDITORIAL GUIDE TO CAPE CORAL ARRESTS */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-yellow-500 pl-6">
                                    The Arrest and Booking Timeline in Cape Coral
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    An arrest in Cape Coral typically begins with the Cape Coral Police Department (CCPD), located at 1100 Cultural Park Blvd. Arrestees are transported to the CCPD holding area for initial processing. This includes fingerprinting, mugshots, and checking for outstanding warrants. The facility on Cultural Park Boulevard is a short-term detention zone; CCPD does not house inmates long-term.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    If a surety bond is not posted immediately, the arrestee will be transferred to the Lee County Jail Core Facility at 2501 Ortiz Avenue, Fort Myers, FL 33905. This main jail is operated by the Lee County Sheriff's Office (LCSO). The physical distance between the Cape Coral Police Department and the Ortiz Avenue facility is roughly 15 miles, but traffic congestion along the bridges during rush hour can cause significant delays.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Once the inmate arrives at the Ortiz Avenue jail, the booking process begins again. Booking involves a medical screening, property inventory, fingerprint submission to national databases, and a review by a booking deputy. This process takes anywhere from 3 to 6 hours depending on jail volume, shift changes, and the cooperation of the arrestee.
                                </p>
                            </article>

                            {/* SECTION 2: MAP AND LANDMARKS GEOGRAPHY */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-slate-700 pl-6">
                                    Geographical Proximity & Lee County Jail Details
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Navigating Cape Coral’s unique geography is essential for fast bail services. The city is bordered on the south and east by the Caloosahatchee River. If you are trying to visit the jail or meet a bondsman, you must plan your route carefully:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 pt-4">
                                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-yellow-500" />
                                            Cape Coral Police Dept
                                        </h4>
                                        <p className="text-sm text-slate-400">
                                            1100 Cultural Park Blvd<br />
                                            Cape Coral, FL 33990<br />
                                            Phone: (239) 574-3223
                                        </p>
                                    </div>
                                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <ShieldCheck className="w-5 h-5 text-yellow-500" />
                                            Lee County Jail (Core)
                                        </h4>
                                        <p className="text-sm text-slate-400">
                                            2501 Ortiz Avenue<br />
                                            Fort Myers, FL 33905<br />
                                            Phone: (239) 477-1705
                                        </p>
                                    </div>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    <strong>Bridge Logistics:</strong> If the arrest occurs in South Cape Coral (near Cape Coral Parkway or Del Prado Blvd), the fastest route is across the Cape Coral Bridge, continuing onto College Parkway, turning north on US-41, and then heading east on Colonial Blvd to Ortiz Ave. For North Cape Coral arrests (near Pine Island Road or Santa Barbara Blvd), the Midpoint Bridge on Veterans Parkway provides a direct path to Colonial Blvd.
                                </p>
                            </div>

                            {/* SECTION 3: COURT INFO & BOND SCHEDULES */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-yellow-500 pl-6">
                                    First Appearance Court & Lee County Justice Center
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    If a defendant is not bonded out on a pre-set bond schedule within 24 hours, they must appear before a magistrate judge for a "First Appearance" hearing. These hearings are held daily, including weekends and holidays, at the Lee County Justice Center located at 1700 Monroe Street, Fort Myers, FL 33901.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    The judge reviews the arrest reports to determine if probable cause exists, sets the formal bail amount, and imposes any pre-trial release conditions (such as GPS monitoring or a no-contact order in domestic violence cases). First Appearance hearings typically take place via video feed from the Ortiz Avenue facility to the courtroom downtown.
                                </p>
                                <div className="bg-emerald-950/20 border border-emerald-500/30 p-6 rounded-lg my-6">
                                    <h4 className="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                                        <Gavel className="w-5 h-5 text-emerald-400" />
                                        Standard Bond Schedule in Lee County
                                    </h4>
                                    <p className="text-sm text-slate-300">
                                        Lee County operates under a uniform bond schedule set by the Twentieth Judicial Circuit. For minor misdemeanors (such as first-offense DUI or petty theft), preset bonds typically range from $500 to $2,500. Third-degree felonies (such as grand theft or drug possession) usually have preset bonds starting at $5,000. Violent offenses, domestic violence charges, and certain drug trafficking charges require a mandatory appearance before a judge before any bond can be posted.
                                    </p>
                                </div>
                            </article>

                            {/* SECTION 4: THE FINANCIALS AND STANDARD FEES */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-slate-700 pl-6">
                                    What is the Cost of a Bail Bond?
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Understanding the cost of a bail bond is critical. In the State of Florida, the premium charged by a licensed surety agent is regulated by the Department of Financial Services (DFS). The standard rate is set at <strong>10% of the total bail amount</strong> for state-level charges, with a minimum charge of $100 per warrant/charge.
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm text-slate-300 border-collapse border border-slate-800">
                                        <thead>
                                            <tr className="bg-slate-900 text-white border-b border-slate-800">
                                                <th className="p-3 border-r border-slate-800">Bail Amount Set by Court</th>
                                                <th className="p-3 border-r border-slate-800">Surety Premium (10% State Rate)</th>
                                                <th className="p-3">Collateral Required</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-slate-800">
                                                <td className="p-3 border-r border-slate-800">$1,000.00</td>
                                                <td className="p-3 border-r border-slate-800">$100.00 (Minimum fee)</td>
                                                <td className="p-3">Usually Signature Only</td>
                                            </tr>
                                            <tr className="border-b border-slate-800">
                                                <td className="p-3 border-r border-slate-800">$5,000.00</td>
                                                <td className="p-3 border-r border-slate-800">$500.00</td>
                                                <td className="p-3">Signature Only (Qualified Signers)</td>
                                            </tr>
                                            <tr className="border-b border-slate-800">
                                                <td className="p-3 border-r border-slate-800">$10,000.00</td>
                                                <td className="p-3 border-r border-slate-800">$1,000.00</td>
                                                <td className="p-3">Signature / Indemnity Agreement</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 border-r border-slate-800">$25,000.00+</td>
                                                <td className="p-3 border-r border-slate-800">$2,500.00+</td>
                                                <td className="p-3">Real Estate or Cash Collateral (Case Dependent)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    The 10% premium is non-refundable. This represents the agent's compensation for taking on the financial risk of the full bond amount. If a defendant fails to appear in court, the bail bondsman is responsible for paying the entire bond amount to the court, which is why co-signers (indemnitors) are required to sign indemnity contracts.
                                </p>
                            </article>

                            {/* SECTION 5: SPECIALIZED ON-PAGE ADVICE (AEO / SEARCH ENTITY INTENT) */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-yellow-500 pl-6">
                                    Walk-Through Bonds & Active Warrants
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    If you discover you have an active warrant in Cape Coral or Lee County (e.g., failure to appear for a traffic violation, unpaid child support, or a probation infraction), you do not have to wait to get pulled over and booked. We offer a specialized **Walk-Through Bond** service.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    With a walk-through bond, we draft all the surety documents in advance. We meet you at the Lee County Jail Core Facility (Ortiz Ave), present the pre-written bond to the booking desk, and accompany you through the booking intake. Because the bond is already prepared, you are processed, fingerprinted, and released immediately—often in less than 45 minutes—without being placed in general population cells.
                                </p>
                            </div>

                            {/* SECTION 6: THE ADVANCED LOCAL INSIDER ADVICE */}
                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl space-y-6">
                                <h3 className="text-2xl font-serif font-bold text-white flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-yellow-500 animate-pulse" />
                                    Cape Coral Bail Process Checklist
                                </h3>
                                <ul className="space-y-4 text-slate-300">
                                    <li className="flex gap-3 items-start">
                                        <div className="w-5 h-5 bg-yellow-500 text-black font-bold flex items-center justify-center shrink-0 rounded-full text-xs mt-1">1</div>
                                        <div>
                                            <strong>Get Inmate Details:</strong> Find the defendant's full legal name, date of birth, and booking number (if available).
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <div className="w-5 h-5 bg-yellow-500 text-black font-bold flex items-center justify-center shrink-0 rounded-full text-xs mt-1">2</div>
                                        <div>
                                            <strong>Call Us Immediately:</strong> Reach a licensed bondsman at (305) 831-0358 to verify the charges and preset bond amounts.
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <div className="w-5 h-5 bg-yellow-500 text-black font-bold flex items-center justify-center shrink-0 rounded-full text-xs mt-1">3</div>
                                        <div>
                                            <strong>Complete E-Bonding:</strong> Fill out the credit application and sign documents electronically on your phone.
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <div className="w-5 h-5 bg-yellow-500 text-black font-bold flex items-center justify-center shrink-0 rounded-full text-xs mt-1">4</div>
                                        <div>
                                            <strong>Bond Posting:</strong> We submit the bond directly to the Lee County Jail Core Facility desk.
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <div className="w-5 h-5 bg-yellow-500 text-black font-bold flex items-center justify-center shrink-0 rounded-full text-xs mt-1">5</div>
                                        <div>
                                            <strong>Inmate Release:</strong> Meet the defendant at the Ortiz Avenue release lobby. Release times vary from 3 to 6 hours.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        {/* RIGHT COL: SIDEBAR TOOLS */}
                        <div className="lg:col-span-5 space-y-12">

                            {/* Sticky Urgency CTA */}
                            <div className="bg-yellow-500 p-8 rounded-2xl text-black shadow-2xl sticky top-8">
                                <h3 className="text-2xl font-serif font-black mb-4 leading-tight">Need Immediate Bail Help?</h3>
                                <p className="font-bold mb-8 opacity-90">
                                    Speak directly to a licensed Cape Coral surety agent. Open 24 hours.
                                </p>
                                <a href="tel:+13058310358" className="flex items-center justify-center gap-3 bg-black text-white py-5 rounded-xl font-black text-xl hover:bg-slate-900 transition-all">
                                    <Phone className="w-6 h-6 text-yellow-500" />
                                    (305) 831-0358
                                </a>
                                <p className="text-[10px] uppercase font-black tracking-widest mt-6 text-center opacity-70">
                                    Serving Cape Coral and All Lee County Jails
                                </p>
                            </div>

                            {/* Estimator */}
                            <div>
                                <ReleaseTimeEstimator />
                            </div>

                            {/* Map (Pointing to Lee County Jail) */}
                            <div className="border border-slate-800 bg-slate-900 h-[300px] grayscale hover:grayscale-0 transition-all duration-700 relative group">
                                <DynamicMap lat={county.geo.lat} lng={county.geo.lng} jailName={county.jail.name} />
                                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 p-4 border border-slate-700 backdrop-blur-sm">
                                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Jail Intake Facility</div>
                                    <div className="text-white font-bold flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-yellow-500" />
                                        {city.travelTimeToJail} from Cape Coral
                                    </div>
                                </div>
                            </div>

                            {/* FAQ - SGE / Gemini Optimization */}
                            <div className="border-t border-slate-800 pt-12">
                                <FAQSection countyName={city.name} customFaqs={combinedFaqs} />
                            </div>

                            {/* Local Navigation Links */}
                            <div className="border-t border-slate-800 pt-12">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Nearby Service Areas</h3>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/county/lee/fort-myers" className="text-sm text-yellow-600 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-sm">
                                        Bail Bonds Fort Myers
                                    </Link>
                                    <Link href="/county/lee" className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-1.5">
                                        All Lee County Locations &rarr;
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </ContentContainer>
            </section>

            <MobileFloatingCall />
        </main>
    );
}
