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
    title: "Bail Bonds Fort Myers FL | 24/7 Emergency Ortiz Jail Release",
    description: "Looking for reliable bail bonds in Fort Myers, FL? Speak with a licensed bondsman 24/7. Immediate release from the Lee County Jail Core Facility. 10% Rates & online payment plans.",
    alternates: {
        canonical: "https://bondflorida.com/county/lee/fort-myers",
    },
};

export default function FortMyersPage() {
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
        name: "Fort Myers",
        slug: "fort-myers",
        policeDepartment: {
            name: "Fort Myers Police Department",
            address: "2210 Widman Way, Fort Myers, FL 33901",
            phone: "(239) 321-7700"
        },
        travelTimeToJail: "10-15 minutes"
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BailBondBusiness",
                "name": "Bail Bonds Fort Myers - Bond Florida",
                "image": "https://bondflorida.com/og-image.jpg",
                "description": "24/7 emergency bail bond services in Fort Myers, FL. Immediate release from Fort Myers Police Department and Lee County Jail Core Facility.",
                "url": "https://bondflorida.com/county/lee/fort-myers",
                "telephone": "+1-305-831-0358",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Fort Myers",
                    "addressRegion": "FL",
                    "postalCode": "33901",
                    "addressCountry": "US"
                },
                "areaServed": [
                    {
                        "@type": "City",
                        "name": "Fort Myers"
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
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How do I bail someone out of the Lee County Jail in Fort Myers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "To bail someone out of the Lee County Jail Core Facility on Ortiz Avenue, Fort Myers, you must work with a licensed bondsman. You will need to pay the state-regulated 10% non-refundable premium, provide a valid photo ID, and sign indemnity forms. You can complete all paperwork and payment online via our E-Bonding service, and our bondsman will post the bond directly at the jail desk to secure release."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does booking take at the Ortiz Avenue Jail?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Booking at the Lee County Jail Core Facility typically takes between 3 and 6 hours depending on jail volume, staffing, and shift change periods. Once booking is complete and the inmate is fully processed, we can immediately file the bond. The release process itself takes another 4 to 8 hours."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Where is the inmate release lobby in Fort Myers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "All inmate releases in Lee County are processed at the Lee County Jail Core Facility, located at 2501 Ortiz Avenue, Fort Myers, FL 33905. Even if an arrest was made by the Fort Myers Police Department downtown, the inmate will be transported to the Ortiz Avenue facility. Do not go to the downtown Justice Center for release."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I pay for a Fort Myers bail bond online?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, we support remote E-Bonding. You can complete the application, upload your ID, and pay the 10% premium electronically using a credit card, debit card, or bank wire, allowing you to secure release without visiting the jail."
                        }
                    }
                ]
            }
        ]
    };

    const combinedFaqs = [
        {
            question: "How long does booking take at the Lee County Jail in Fort Myers?",
            answer: "Booking at the Lee County Jail Core Facility on Ortiz Avenue typically takes between 3 and 6 hours. During this period, the inmate is fingerprinted, photographed, and run for outstanding warrants. We recommend starting the bail bond paperwork immediately upon arrest so we can post the bond the moment the booking process is finalized."
        },
        {
            question: "Where is the release lobby in Lee County?",
            answer: "Inmate releases are processed at the Lee County Jail Core Facility located at 2501 Ortiz Avenue, Fort Myers, FL 33905. The release lobby is situated at the front of the complex with public parking available outside. Our local bail bondsman can coordinate meeting you at this location or handle all paperwork remotely."
        },
        {
            question: "What is the standard bail bond premium in Fort Myers?",
            answer: "The premium is fixed by Florida state law at 10% of the total bail amount for state charges, with a minimum fee of $100 per charge. Federal or immigration bonds have a standard premium of 15%. This fee is non-refundable and represents the bondsman's service fee for guaranteeing the defendant's appearance in court."
        },
        {
            question: "How do I secure a walk-through bond for an active warrant?",
            answer: "A walk-through bond allows you to turn yourself in at the Lee County Jail on an active warrant, get processed, and be released immediately without spending the night in a cell. We prepare the bond paperwork in advance, accompany you to the Ortiz Avenue facility, and post the bond immediately during the intake process."
        },
        {
            question: "Can I pay for a Fort Myers bail bond online?",
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
                title={<span className="font-serif text-white">Bail Bonds in <span className="text-yellow-500">Fort Myers, FL</span></span>}
                subtitle="Emergency 24/7 Service — Speed Release from FMPD & Lee County Core Jail"
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
                                    <h2 className="text-2xl font-serif font-bold text-white">Fort Myers Jail Release Warning</h2>
                                </div>
                                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                    Looking for the fastest **Bail Bonds Fort Myers**? Call our licensed surety bondsman 24/7 for immediate dispatch to the Lee County Jail Core Facility. If your loved one is currently detained by the Fort Myers Police Department at the Widman Way headquarters, they are held in a temporary booking area.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Standard law enforcement procedures dictate that inmates who are not bonded out within a few hours of arrest are loaded into transport vans and transferred to the main Lee County Jail Core Facility in Fort Myers on Ortiz Avenue.
                                </p>
                                <div className="bg-slate-900/50 p-4 rounded border border-slate-800 flex items-start gap-3">
                                    <Siren className="w-5 h-5 text-yellow-500 mt-1 shrink-0" />
                                    <p className="text-sm text-slate-400">
                                        <strong>Why Timing Matters:</strong> The physical transfer from the downtown Fort Myers Police Department to the Ortiz Avenue facility is a short drive east on Colonial or MLK Boulevard. However, once the transport van leaves FMPD limits, the booking process effectively resets at the county facility, which can add 4 to 8 hours of processing time before they can be released.
                                    </p>
                                </div>
                            </div>

                            {/* SECTION 1: EDITORIAL GUIDE TO FORT MYERS ARRESTS */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-yellow-500 pl-6">
                                    The Arrest and Booking Timeline in Fort Myers
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    An arrest in Fort Myers typically begins with the Fort Myers Police Department (FMPD), located at 2210 Widman Way. Arrestees are transported to the FMPD holding area for initial processing. This includes fingerprinting, mugshots, and checking for outstanding warrants. The facility on Widman Way is a short-term detention zone; FMPD does not house inmates long-term.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    If a surety bond is not posted immediately, the arrestee will be transferred to the Lee County Jail Core Facility at 2501 Ortiz Avenue, Fort Myers, FL 33905. This main jail is operated by the Lee County Sheriff's Office (LCSO). The physical distance between the Fort Myers Police Department and the Ortiz Avenue facility is roughly 6 miles, but traffic congestion along Colonial Boulevard during rush hour can cause significant delays.
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
                                    Navigating Fort Myers’ unique geography is essential for fast bail services. The city is bordered on the north and west by the Caloosahatchee River. If you are trying to visit the jail or meet a bondsman, you must plan your route carefully:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 pt-4">
                                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-yellow-500" />
                                            Fort Myers Police Dept
                                        </h4>
                                        <p className="text-sm text-slate-400">
                                            2210 Widman Way<br />
                                            Fort Myers, FL 33901<br />
                                            Phone: (239) 321-7700
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
                            </div>

                            {/* SECTION 3: WALK-THROUGH BONDS */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-yellow-500 pl-6">
                                    Walk-Through Bonds for Active Warrants in Fort Myers
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    If you have an active arrest warrant in Lee County, you do not have to spend a night in jail. We offer a specialized **Walk-Through Bond** service. This allows us to prepare the surety bond paperwork in advance. We then accompany you to the booking desk at the Lee County Jail Core Facility on Ortiz Avenue.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    The booking deputy will process your arrest, fingerprint you, and execute the warrant. The bondsman will then immediately file the bond. This allows you to walk out the front lobby within 1-2 hours instead of being housed in a cell. This is the cleanest, most professional way to clear your name without disruption to your family or job.
                                </p>
                            </article>

                            {/* SECTION 4: E-BONDING REMOTE PROCESS */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-slate-700 pl-6">
                                    Complete E-Bonding: Fast Online Bail Bonds
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    We understand that traveling to a bail bonds office in the middle of the night is stressful. That is why we provide **E-Bonding**—a fully remote online bail process. Using your smartphone or computer, you can complete the application, upload your ID, and sign the indemnity contracts electronically.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Once the 10% premium payment is completed (via credit card, debit card, or bank transfer), we electronically transmit the surety bond directly to the Lee County Sheriff's Office desk. The jail begins the release sequence immediately, and you can simply meet your loved one at the Ortiz Avenue release lobby.
                                </p>
                            </article>

                            {/* STEP-BY-STEP CHECKLIST */}
                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl space-y-6">
                                <h3 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                                    <FileText className="w-6 h-6 text-yellow-500" />
                                    How to Post Bail in Fort Myers: Step-by-Step
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
                                            <strong>Inmate Release:</strong> Meet the defendant at the Ortiz Avenue release lobby. Release times vary from 4 to 8 hours.
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
                                    Speak directly to a licensed Fort Myers surety agent. Open 24 hours.
                                </p>
                                <a href="tel:+13058310358" className="flex items-center justify-center gap-3 bg-black text-white py-5 rounded-xl font-black text-xl hover:bg-slate-900 transition-all">
                                    <Phone className="w-6 h-6 text-yellow-500" />
                                    (305) 831-0358
                                </a>
                                <p className="text-[10px] uppercase font-black tracking-widest mt-6 text-center opacity-70">
                                    Serving Fort Myers and All Lee County Jails
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
                                        {city.travelTimeToJail} from downtown Fort Myers
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
                                    <Link href="/county/lee/cape-coral" className="text-sm text-yellow-600 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-sm">
                                        Bail Bonds Cape Coral
                                    </Link>
                                    <Link href="/locations" className="text-sm text-yellow-600 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-sm">
                                        Florida Service Directory
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
