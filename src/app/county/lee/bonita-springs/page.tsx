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
    title: "Bail Bonds Bonita Springs FL | 24/7 Emergency Lee County Jail Release",
    description: "Need reliable bail bonds in Bonita Springs, FL? Contact our licensed bondsman 24/7. Fast release from the Lee County Jail Core Facility. 10% Rates & flexible payment plans.",
    alternates: {
        canonical: "https://bondflorida.com/county/lee/bonita-springs",
    },
};

export default function BonitaSpringsPage() {
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
        name: "Bonita Springs",
        slug: "bonita-springs",
        policeDepartment: {
            name: "Lee County Sheriff - District 4 (Bonita Springs)",
            address: "27300 Old 41 Rd, Bonita Springs, FL 34135",
            phone: "(239) 477-1840"
        },
        travelTimeToJail: "30-40 minutes"
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BailBondBusiness",
                "name": "Bail Bonds Bonita Springs - Bond Florida",
                "image": "https://bondflorida.com/og-image.jpg",
                "description": "24/7 emergency bail bond services in Bonita Springs, FL. Fast release from Lee County Sheriff District 4 and Lee County Jail Core Facility.",
                "url": "https://bondflorida.com/county/lee/bonita-springs",
                "telephone": "+1-305-831-0358",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bonita Springs",
                    "addressRegion": "FL",
                    "postalCode": "34135",
                    "addressCountry": "US"
                },
                "areaServed": [
                    {
                        "@type": "City",
                        "name": "Bonita Springs"
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
                        "name": "How do I bail someone out of the Lee County Jail in Bonita Springs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "To bail someone out of the Lee County Jail Core Facility (located in Fort Myers), you must work with a licensed bondsman. Since Bonita Springs arrests are processed by the Lee County Sheriff District 4 substation on Old 41 Road before being transported north to Fort Myers, we recommend starting the paperwork immediately. You can pay the 10% premium and sign forms online via E-Bonding, and we will post the surety bond directly at the Ortiz Avenue jail desk."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Where is the police station in Bonita Springs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Bonita Springs is policed by the Lee County Sheriff's Office (LCSO) District 4 substation, located at 27300 Old 41 Rd, Bonita Springs, FL 34135. The phone number is (239) 477-1840. While initial processing occurs here, inmates are quickly transported to the main jail on Ortiz Avenue in Fort Myers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does transport take from Bonita Springs to the Fort Myers jail?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The transport from Bonita Springs to the Ortiz Avenue jail in Fort Myers is approximately 25 miles and takes about 30 to 40 minutes via I-75 North. Booking at the main facility takes an additional 3 to 6 hours before they can be released."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I pay for a Bonita Springs bail bond online?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Our E-Bonding service allows you to secure a release remotely. You can complete the credit application and pay the 10% premium via card or bank wire from your phone, allowing the release process to start before you even travel to the jail."
                        }
                    }
                ]
            }
        ]
    };

    const combinedFaqs = [
        {
            question: "How long does booking take at the Lee County Jail for Bonita Springs arrests?",
            answer: "Booking at the Lee County Jail Core Facility on Ortiz Avenue typically takes between 3 and 6 hours. During this period, the inmate is fingerprinted, photographed, and run for outstanding warrants. We recommend starting the bail bond paperwork immediately upon arrest so we can post the bond the moment the booking process is finalized."
        },
        {
            question: "Where is the release lobby in Lee County?",
            answer: "Inmate releases are processed at the Lee County Jail Core Facility located at 2501 Ortiz Avenue, Fort Myers, FL 33905. The release lobby is situated at the front of the complex with public parking available outside. Our local bail bondsman can coordinate meeting you at this location or handle all paperwork remotely."
        },
        {
            question: "What is the standard bail bond premium in Bonita Springs?",
            answer: "The premium is fixed by Florida state law at 10% of the total bail amount for state charges, with a minimum fee of $100 per charge. Federal or immigration bonds have a standard premium of 15%. This fee is non-refundable and represents the bondsman's service fee for guaranteeing the defendant's appearance in court."
        },
        {
            question: "How do I secure a walk-through bond for an active warrant?",
            answer: "A walk-through bond allows you to turn yourself in at the Lee County Jail on an active warrant, get processed, and be released immediately without spending the night in a cell. We prepare the bond paperwork in advance, accompany you to the Ortiz Avenue facility, and post the bond immediately during the intake process."
        },
        {
            question: "Can I pay for a Bonita Springs bail bond online?",
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
                title={<span className="font-serif text-white">Bail Bonds in <span className="text-yellow-500">Bonita Springs, FL</span></span>}
                subtitle="Emergency 24/7 Service — Speed Release from LCSO District 4 & Ortiz Ave Jail"
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
                                    <h2 className="text-2xl font-serif font-bold text-white">Bonita Springs Jail Transfer Warning</h2>
                                </div>
                                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                    Looking for the fastest **Bail Bonds Bonita Springs**? Call our licensed surety bondsman 24/7 for immediate dispatch to the Lee County Jail Core Facility. If your loved one is currently detained by the Lee County Sheriff's Office at the District 4 Old 41 Road substation, they are held in a temporary booking area.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Standard law enforcement procedures dictate that inmates who are not bonded out within a few hours of arrest are loaded into transport vans and transferred to the main Lee County Jail Core Facility in Fort Myers.
                                </p>
                                <div className="bg-slate-900/50 p-4 rounded border border-slate-800 flex items-start gap-3">
                                    <Siren className="w-5 h-5 text-yellow-500 mt-1 shrink-0" />
                                    <p className="text-sm text-slate-400">
                                        <strong>Why Timing Matters:</strong> The physical transfer from Bonita Springs to the Ortiz Avenue facility requires driving approximately 25 miles north via I-75. Once the transport van leaves the southern substation, the booking process effectively resets at the main facility in Fort Myers, which can add 4 to 8 hours of processing time before they can be released.
                                    </p>
                                </div>
                            </div>

                            {/* SECTION 1: EDITORIAL GUIDE TO BONITA SPRINGS ARRESTS */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-yellow-500 pl-6">
                                    The Arrest and Booking Timeline in Bonita Springs
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    An arrest in Bonita Springs is handled by the Lee County Sheriff's Office (LCSO) District 4 substation, located at 27300 Old 41 Rd. Arrestees are transported to the District 4 precinct for initial processing. This includes fingerprinting, booking verification, and check for outstanding warrants. The facility on Old 41 Road is a temporary holding zone; it does not house inmates long-term.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    If a surety bond is not posted immediately, the arrestee will be transferred to the Lee County Jail Core Facility at 2501 Ortiz Avenue, Fort Myers, FL 33905. The physical distance between the Bonita Springs precinct and the Ortiz Avenue facility is roughly 25 miles. The transport van runs regularly, but transit during peak rush hours on I-75 can add significant delays.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Once the inmate arrives at the Ortiz Avenue jail, the booking process begins again. Booking involves a medical screening, property inventory, fingerprint submission to national databases, and a review by a booking deputy. This process takes anywhere from 3 to 6 hours depending on jail volume, shift changes, and the cooperation of the arrestee.
                                </p>
                            </article>

                            {/* SECTION 2: MAP AND LANDMARKS GEOGRAPHY */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-slate-700 pl-6">
                                    Geographical Proximity & LCSO District 4 Details
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Navigating Bonita Springs’ geography is essential for fast bail services. The city is located in the southernmost corner of Lee County, directly bordering Collier County. If you are trying to visit the jail or meet a bondsman, you must plan your route carefully:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 pt-4">
                                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-yellow-500" />
                                            LCSO District 4 Station
                                        </h4>
                                        <p className="text-sm text-slate-400">
                                            27300 Old 41 Rd<br />
                                            Bonita Springs, FL 34135<br />
                                            Phone: (239) 477-1840
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
                                    Walk-Through Bonds for Active Warrants in Bonita Springs
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
                                    How to Post Bail in Bonita Springs: Step-by-Step
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
                                    Speak directly to a licensed Bonita Springs surety agent. Open 24 hours.
                                </p>
                                <a href="tel:+13058310358" className="flex items-center justify-center gap-3 bg-black text-white py-5 rounded-xl font-black text-xl hover:bg-slate-900 transition-all">
                                    <Phone className="w-6 h-6 text-yellow-500" />
                                    (305) 831-0358
                                </a>
                                <p className="text-[10px] uppercase font-black tracking-widest mt-6 text-center opacity-70">
                                    Serving Bonita Springs and All Lee County Jails
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
                                        {city.travelTimeToJail} from Bonita Springs
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
