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
    title: "Bail Bonds Vero Beach | 24/7 Emergency Jail Release FL",
    description: "Looking for reliable bail bonds in Vero Beach, FL? Speak with a licensed bondsman 24/7. Get fast release from the Indian River County Jail.",
    alternates: {
        canonical: "https://bondflorida.com/county/indian-river/vero-beach",
    },
};

export default function VeroBeachPage() {
    const county = {
        name: "Indian River County",
        slug: "indian-river",
        jail: {
            name: "Indian River County Jail",
            address: "4055 41st Ave, Vero Beach, FL 32960",
            phone: "(772) 978-6334",
            visitingHours: "Daily 8:30 AM - 11:30 AM & 1:00 PM - 4:00 PM (Video Only)",
            inmateSearchUrl: "https://www.ircsheriff.org/inmate-search",
        },
        geo: {
            lat: 27.6690,
            lng: -80.4200,
        }
    };

    const city = {
        name: "Vero Beach",
        slug: "vero-beach",
        policeDepartment: {
            name: "Vero Beach Police Department",
            address: "1055 20th St, Vero Beach, FL 32960",
            phone: "(772) 978-4600"
        },
        travelTimeToJail: "5-10 minutes"
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BailBondBusiness",
        "name": "Bail Bonds Vero Beach - Bond Florida",
        "image": "https://bondflorida.com/og-image.jpg",
        "description": "24/7 emergency bail bond services in Vero Beach, FL. Fast release from Indian River County Jail and Vero Beach Police Department.",
        "url": "https://bondflorida.com/county/indian-river/vero-beach",
        "telephone": "+1-305-831-0358",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vero Beach",
            "addressRegion": "FL",
            "postalCode": "32960",
            "addressCountry": "US"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Vero Beach"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Indian River County"
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
            question: "How long is the release process at the Indian River County Jail?",
            answer: "Release times at the Indian River County Jail average between 2 and 4 hours after the bail bond is posted. This can vary depending on jail traffic, shift changes, and administrative processing speed. We monitor the release queue and stay in contact with the release desk to minimize wait times."
        },
        {
            question: "Can I pay for a Vero Beach bail bond electronically?",
            answer: "Yes. Our E-Bonding system allows you to complete the entire bail bond transaction remotely. We accept credit card payments, debit cards, and bank transfers over the phone or secure online checkout, allowing you to secure your loved one's release from the comfort of your home."
        },
        {
            question: "What information is needed to post bail in Indian River County?",
            answer: "You will need the defendant's full legal name, date of birth, the charges they were arrested on, and the bail amount set by the court. If you do not have all of this information, our bondsman can look up the records directly through the Indian River County Sheriff's database."
        },
        {
            question: "Where is the Indian River County Jail located?",
            answer: "The jail facility is located at 4055 41st Ave, Vero Beach, FL 32960. It is situated in the central portion of Vero Beach, just north of State Road 60. You do not need to go to the jail physically; we can handle all filings on your behalf."
        },
        {
            question: "What is a Walk-Through Bond in Indian River County?",
            answer: "If you have an active arrest warrant in Indian River County, we can arrange a walk-through bond. We write the bond in advance, walk you into the booking desk at the 41st Avenue facility, and post the bond immediately. You are processed and released in under an hour without ever entering a holding cell."
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
                title={<span className="font-serif text-white">Bail Bonds in <span className="text-yellow-500">Vero Beach, FL</span></span>}
                subtitle="Emergency 24/7 Service — Immediate Release from Indian River County Jail"
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
                                    <h2 className="text-2xl font-serif font-bold text-white">Indian River County Booking Notice</h2>
                                </div>
                                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                    Securing professional <strong>Bail Bonds Vero Beach</strong> services is the single most important action you can take to prevent a prolonged stay in the Indian River County Jail. If your loved one is currently detained by the Vero Beach Police Department at the 20th Street station, they are held in a temporary holding area.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Standard law enforcement procedures dictate that inmates who are not bonded out within a few hours of arrest are loaded into transport vans and transferred to the main Indian River County Jail on 41st Avenue. 
                                </p>
                                <div className="bg-slate-900/50 p-4 rounded border border-slate-800 flex items-start gap-3">
                                    <Siren className="w-5 h-5 text-yellow-500 mt-1 shrink-0" />
                                    <p className="text-sm text-slate-400">
                                        <strong>Why Timing Matters:</strong> The physical transfer from Vero Beach to the 41st Avenue facility requires crossing either the Barber Bridge (SR-60) or the Alma Lee Loy Bridge if arrested on the barrier island, and driving to 41st Ave. Once the transport van leaves Vero Beach limits, the booking process effectively resets at the county facility, which can add 4 to 8 hours of processing time before they can be released.
                                    </p>
                                </div>
                            </div>

                            {/* SECTION 1: EDITORIAL GUIDE TO VERO BEACH ARRESTS */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-yellow-500 pl-6">
                                    The Arrest and Booking Timeline in Vero Beach
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    An arrest in Vero Beach typically begins with the Vero Beach Police Department (VBPD), located at 1055 20th St. Arrestees are transported to the VBPD holding area for initial processing. This includes fingerprinting, mugshots, and checking for outstanding warrants. The facility on 20th Street is a short-term detention zone; VBPD does not house inmates long-term.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    If a surety bond is not posted immediately, the arrestee will be transferred to the Indian River County Jail at 4055 41st Avenue, Vero Beach, FL 32960. This main jail is operated by the Indian River County Sheriff's Office (IRCSO). The physical distance between the Vero Beach Police Department and the 41st Avenue facility is roughly 5 miles, but traffic congestion along the bridges during rush hour can cause significant delays.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Once the inmate arrives at the 41st Avenue jail, the booking process begins again. Booking involves a medical screening, property inventory, fingerprint submission to national databases, and a review by a booking deputy. This process takes anywhere from 3 to 6 hours depending on jail volume, shift changes, and the cooperation of the arrestee.
                                </p>
                            </article>

                            {/* SECTION 2: MAP AND LANDMARKS GEOGRAPHY */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-slate-700 pl-6">
                                    Geographical Proximity & Indian River County Jail Details
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Navigating Vero Beach’s unique geography is essential for fast bail services. The city is bordered on the south and east by the Indian River Lagoon. If you are trying to visit the jail or meet a bondsman, you must plan your route carefully:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 pt-4">
                                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-yellow-500" />
                                            Vero Beach Police Dept
                                        </h4>
                                        <p className="text-sm text-slate-400">
                                            1055 20th St<br />
                                            Vero Beach, FL 32960<br />
                                            Phone: (772) 978-4600
                                        </p>
                                    </div>
                                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <ShieldCheck className="w-5 h-5 text-yellow-500" />
                                            Indian River County Jail
                                        </h4>
                                        <p className="text-sm text-slate-400">
                                            4055 41st Ave<br />
                                            Vero Beach, FL 32960<br />
                                            Phone: (772) 978-6334
                                        </p>
                                    </div>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    <strong>Bridge Logistics:</strong> If the arrest occurs in South Vero Beach (near US-1 or State Road 60), the fastest route is along State Road 60 West, turning north on 43rd Avenue, and then heading east on 41st Street to 41st Ave. For barrier island arrests (near Ocean Drive or A1A), the Barber Bridge provides a direct path to SR-60.
                                </p>
                            </div>

                            {/* SECTION 3: COURT INFO & BOND SCHEDULES */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-yellow-500 pl-6">
                                    First Appearance Court & Indian River County Courthouse
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    If a defendant is not bonded out on a pre-set bond schedule within 24 hours, they must appear before a magistrate judge for a "First Appearance" hearing. These hearings are held daily, including weekends and holidays, at the Indian River County Courthouse located at 2000 16th Avenue, Vero Beach, FL 32960.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    The judge reviews the arrest reports to determine if probable cause exists, sets the formal bail amount, and imposes any pre-trial release conditions (such as GPS monitoring or a no-contact order in domestic violence cases). First Appearance hearings typically take place via video feed from the 41st Avenue facility to the courtroom downtown.
                                </p>
                                <div className="bg-emerald-950/20 border border-emerald-500/30 p-6 rounded-lg my-6">
                                    <h4 className="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                                        <Gavel className="w-5 h-5 text-emerald-400" />
                                        Standard Bond Schedule in Indian River County
                                    </h4>
                                    <p className="text-sm text-slate-300">
                                        Indian River County operates under a uniform bond schedule set by the Nineteenth Judicial Circuit. For minor misdemeanors (such as first-offense DUI or petty theft), preset bonds typically range from $500 to $2,500. Third-degree felonies (such as grand theft or drug possession) usually have preset bonds starting at $5,000. Violent offenses, domestic violence charges, and certain drug trafficking charges require a mandatory appearance before a judge before any bond can be posted.
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
                                    If you discover you have an active warrant in Vero Beach or Indian River County (e.g., failure to appear for a traffic violation, unpaid child support, or a probation infraction), you do not have to wait to get pulled over and booked. We offer a specialized **Walk-Through Bond** service.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    With a walk-through bond, we draft all the surety documents in advance. We meet you at the Indian River County Jail (41st Ave), present the pre-written bond to the booking desk, and accompany you through the booking intake. Because the bond is already prepared, you are processed, fingerprinted, and released immediately—often in less than 45 minutes—without being placed in general population cells.
                                </p>
                            </div>

                            {/* SECTION 6: THE ADVANCED LOCAL INSIDER ADVICE */}
                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl space-y-6">
                                <h3 className="text-2xl font-serif font-bold text-white flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-yellow-500 animate-pulse" />
                                    Vero Beach Bail Process Checklist
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
                                            <strong>Bond Posting:</strong> We submit the bond directly to the Indian River County Jail desk.
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <div className="w-5 h-5 bg-yellow-500 text-black font-bold flex items-center justify-center shrink-0 rounded-full text-xs mt-1">5</div>
                                        <div>
                                            <strong>Inmate Release:</strong> Meet the defendant at the 41st Avenue release lobby. Release times vary from 2 to 4 hours.
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
                                    Speak directly to a licensed Vero Beach surety agent. Open 24 hours.
                                </p>
                                <a href="tel:+13058310358" className="flex items-center justify-center gap-3 bg-black text-white py-5 rounded-xl font-black text-xl hover:bg-slate-900 transition-all">
                                    <Phone className="w-6 h-6 text-yellow-500" />
                                    (305) 831-0358
                                </a>
                                <p className="text-[10px] uppercase font-black tracking-widest mt-6 text-center opacity-70">
                                    Serving Vero Beach and All Indian River County Jails
                                </p>
                            </div>

                            {/* Estimator */}
                            <div>
                                <ReleaseTimeEstimator />
                            </div>

                            {/* Map (Pointing to Indian River County Jail) */}
                            <div className="border border-slate-800 bg-slate-900 h-[300px] grayscale hover:grayscale-0 transition-all duration-700 relative group">
                                <DynamicMap lat={county.geo.lat} lng={county.geo.lng} jailName={county.jail.name} />
                                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 p-4 border border-slate-700 backdrop-blur-sm">
                                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Jail Intake Facility</div>
                                    <div className="text-white font-bold flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-yellow-500" />
                                        {city.travelTimeToJail} from Vero Beach
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
                                    <Link href="/county/indian-river" className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-1.5">
                                        All Indian River County Locations &rarr;
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
