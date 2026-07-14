import { Metadata } from 'next';
import Link from 'next/link';
import EmergencyHeader from '@/components/EmergencyHeader';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import DynamicMap from '@/components/DynamicMap';
import ReleaseTimeEstimator from '@/components/ReleaseTimeEstimator';
import FAQSection from '@/components/FAQSection';
import MobileFloatingCall from '@/components/MobileFloatingCall';
import { Clock, MapPin, Phone, AlertTriangle, ShieldCheck, Siren, FileText, CheckCircle } from 'lucide-react';

const ContentContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`max-w-6xl mx-auto px-6 ${className}`}>
        {children}
    </div>
);

export const metadata: Metadata = {
    title: "Land O' Lakes Detention Center Bail Bonds | 24/7 Fast Release",
    description: "Need immediate bail bonds for Land O' Lakes Detention Center in Pasco County, FL? Speak with a licensed bondsman 24/7. Fast inmate release. 10% rates & online payment plans.",
    alternates: {
        canonical: "https://bondflorida.com/jail/land-o-lakes-detention-center",
    },
};

export default function LandOLakesDetentionCenterPage() {
    const jail = {
        name: "Land O' Lakes Detention Center",
        address: "20101 Central Blvd, Land O' Lakes, FL 34637",
        phone: "(813) 235-6111",
        visitingHours: "Video Visitation Only",
        inmateSearchUrl: "https://www.pascosheriff.com",
        geo: {
            lat: 28.2789,
            lng: -82.4608,
        }
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BailBondBusiness",
                "name": "Land O' Lakes Detention Center Bail Bonds - Bond Florida",
                "image": "https://bondflorida.com/og-image.jpg",
                "description": "24/7 emergency bail bond services for Land O' Lakes Detention Center in Pasco County, FL. Immediate release from HCSO custody.",
                "url": "https://bondflorida.com/jail/land-o-lakes-detention-center",
                "telephone": "+1-305-831-0358",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Land O' Lakes",
                    "addressRegion": "FL",
                    "postalCode": "34637",
                    "addressCountry": "US"
                },
                "areaServed": [
                    {
                        "@type": "City",
                        "name": "Land O' Lakes"
                    },
                    {
                        "@type": "AdministrativeArea",
                        "name": "Pasco County"
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
                        "name": "Where do I post bail for someone at Land O' Lakes Detention Center?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Bail bonds for Land O' Lakes Detention Center must be posted at the Pasco County Sheriff's Office booking desk lobby located at 20101 Central Blvd, Land O' Lakes, FL 34637. The bail window is open 24/7. Our licensed bail bondsman can handle the entire process electronically or meet you at the facility, so you do not have to wait in line at the jail cash window."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does booking take at the Land O' Lakes Detention Center?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Booking at Land O' Lakes Detention Center typically takes 3 to 6 hours depending on booking volume, staffing, and shift change holds. The facility serves as the primary intake and processing hub for all Pasco County arrests, which leads to high traffic. We recommend starting the bail bond paperwork immediately so the bond can be posted as soon as the inmate receives their booking number."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I pay for a bail bond at Land O' Lakes online?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Our digital E-Bonding service allows you to complete the credit application and pay the 10% premium via credit card, debit card, or wire transfer from your phone. Our bondsman will immediately file the surety bond with the booking desk electronically."
                        }
                    }
                ]
            }
        ]
    };

    const combinedFaqs = [
        {
            question: "Where do I post bail for someone at Land O' Lakes Detention Center?",
            answer: "Bail bonds for Land O' Lakes Detention Center must be posted at the Pasco County Sheriff's Office booking desk lobby located at 20101 Central Blvd, Land O' Lakes, FL 34637. The bail window is open 24/7. Our licensed bail bondsman can handle the entire process electronically or meet you at the facility, so you do not have to wait in line at the jail cash window."
        },
        {
            question: "How long does booking take at the Land O' Lakes Detention Center?",
            answer: "Booking at Land O' Lakes Detention Center typically takes 3 to 6 hours depending on booking volume, staffing, and shift change holds. The facility serves as the primary intake and processing hub for all Pasco County arrests, which leads to high traffic. We recommend starting the bail bond paperwork immediately so the bond can be posted as soon as the inmate receives their booking number."
        },
        {
            question: "What is the release time after posting bond at Land O' Lakes?",
            answer: "Once the surety bond is accepted and processed by the booking desk, release typically takes between 4 and 8 hours. The jail release lobby is open 24/7, and our local bondsman will monitor the discharge status and notify you when it is time to pick them up."
        },
        {
            question: "Can I pay for a bail bond at Land O' Lakes online?",
            answer: "Yes. Our digital E-Bonding service allows you to complete the credit application and pay the 10% premium via credit card, debit card, or wire transfer from your phone. Our bondsman will immediately file the surety bond with the booking desk electronically."
        },
        {
            question: "What is the statutory bail bond fee in Pasco County?",
            answer: "By Florida law, the premium for a state surety bond is 10% of the total bail amount (with a minimum fee of $100 per charge). For example, a $5,000 bond requires a non-refundable premium of $500. We offer flexible payment plans with low down payments for qualified co-signers."
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
                title={<span className="font-serif text-white">Land O' Lakes Jail <span className="text-yellow-500">Bail Bonds</span></span>}
                subtitle="24/7 Emergency Jail Release — Pasco County Detention Center Specialists"
                inmateSearchUrl={jail.inmateSearchUrl}
            />

            <section className="py-24 bg-slate-950">
                <ContentContainer>
                    <Breadcrumbs
                        items={[
                            { label: "Jail Directories", href: "/locations" },
                            { label: "Land O' Lakes Detention Center", href: "/jail/land-o-lakes-detention-center" }
                        ]}
                    />
                    <div className="grid lg:grid-cols-12 gap-16 items-start">

                        {/* LEFT COL: MASSIVE LONG-FORM CONTENT */}
                        <div className="lg:col-span-7 space-y-12">

                            {/* URGENCY ALERT BLOCK */}
                            <div className="bg-red-950/20 border-l-4 border-red-500 p-8 rounded-r-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertTriangle className="w-6 h-6 text-red-500" />
                                    <h2 className="text-2xl font-serif font-bold text-white">Emergency Release Warning</h2>
                                </div>
                                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                    Need immediate **Land O' Lakes Detention Center Bail Bonds**? Speak with a licensed bondsman 24/7. Land O' Lakes Detention Center is the main booking and housing center for all Pasco County arrests. If your loved one is arrested in New Port Richey, Dade City, Wesley Chapel, or Zephyrhills, they will be transported here immediately.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Because this is a centralized booking facility, delays can take 3 to 6 hours. Starting the bail process while they are still in transport or booking is critical to secure release the minute they are eligible.
                                </p>
                            </div>

                            {/* SECTION 1: BOOKING TIMELINE */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-yellow-500 pl-6">
                                    Understanding the Land O' Lakes Jail Booking Process
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Land O' Lakes Detention Center, located at 20101 Central Blvd, Land O' Lakes, FL 34637, is a modern facility operated by the Pasco County Sheriff's Office. It serves as the primary intake and booking center for adult males and females arrested in Pasco County.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    The booking sequence includes a medical screening, inventory of personal property, fingerprinting, mugshots, and checking local and federal databases for active warrants. This administrative sequence takes between 3 and 6 hours. The bond cannot be posted until the booking process is finalized and the inmate receives an active booking number.
                                </p>
                            </article>

                            {/* SECTION 2: MAP & LOCATION INFO */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-slate-700 pl-6">
                                    Facility Coordinates & Navigation
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    The Land O' Lakes Detention Center is located in central Pasco County, just off US-41 (Land O' Lakes Blvd), offering quick access via State Road 54 and I-75.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 pt-4">
                                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-yellow-500" />
                                            Physical Location
                                        </h4>
                                        <p className="text-sm text-slate-400">
                                            20101 Central Blvd<br />
                                            Land O' Lakes, FL 34637<br />
                                            Phone: (813) 235-6111
                                        </p>
                                    </div>
                                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <ShieldCheck className="w-5 h-5 text-yellow-500" />
                                            Bail Window Hours
                                        </h4>
                                        <p className="text-sm text-slate-400">
                                            Open 24 Hours a Day<br />
                                            7 Days a Week<br />
                                            Pasco County Sheriff's Desk
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 3: WALK-THROUGH WARRANT GUIDE */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-yellow-500 pl-6">
                                    Clearing Warrants at Land O' Lakes Detention Center
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    If you have an active warrant in Pasco County, do not wait to get arrested. We offer a specialized **Walk-Through Warrant Bond** service. We coordinate with you, draft the bond paperwork in advance, and meet you at the Land O' Lakes jail lobby.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    We escort you to the booking window. The deputies will execute the warrant, process your fingerprints, and we immediately file the pre-written bond. This rapid process allows you to clear the warrant and leave the lobby in about 45 to 90 minutes, avoiding a long stay in a holding cell.
                                </p>
                            </article>

                            {/* SECTION 4: E-BONDING REMOTE PROCESS */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-slate-700 pl-6">
                                    Fast Electronic Bonding (E-Bonding)
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    We provide fully remote digital E-Bonding for Land O' Lakes Detention Center. Using your smartphone or computer, you can complete all application documents, verify your identity, and pay the 10% premium via credit card or wire transfer.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Once completed, we transmit the surety bond electronically directly to the Pasco County booking desk. The jail begins the release sequence immediately, and you can simply meet your loved one at the release lobby, eliminating the need to travel to our office or wait in line at the jail.
                                </p>
                            </article>

                            {/* CHECKLIST */}
                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl space-y-6">
                                <h3 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                                    <FileText className="w-6 h-6 text-yellow-500" />
                                    Land O' Lakes Jail Release Checklist
                                </h3>
                                <ul className="space-y-4 text-slate-300">
                                    <li className="flex gap-3 items-start">
                                        <div className="w-5 h-5 bg-yellow-500 text-black font-bold flex items-center justify-center shrink-0 rounded-full text-xs mt-1">1</div>
                                        <div>
                                            <strong>Verify Arrest Status:</strong> Find the defendant's legal name, date of birth, and booking number (or call us to look it up for you).
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <div className="w-5 h-5 bg-yellow-500 text-black font-bold flex items-center justify-center shrink-0 rounded-full text-xs mt-1">2</div>
                                        <div>
                                            <strong>Call Our Agent:</strong> Speak with a licensed Pasco bondsman at (305) 831-0358 to confirm the bond amount.
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <div className="w-5 h-5 bg-yellow-500 text-black font-bold flex items-center justify-center shrink-0 rounded-full text-xs mt-1">3</div>
                                        <div>
                                            <strong>E-Sign Paperwork:</strong> Sign all indemnity agreements securely on your phone.
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <div className="w-5 h-5 bg-yellow-500 text-black font-bold flex items-center justify-center shrink-0 rounded-full text-xs mt-1">4</div>
                                        <div>
                                            <strong>Bond Submission:</strong> We submit the surety bond directly to the Land O' Lakes Jail booking window.
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <div className="w-5 h-5 bg-yellow-500 text-black font-bold flex items-center justify-center shrink-0 rounded-full text-xs mt-1">5</div>
                                        <div>
                                            <strong>Discharge:</strong> Meet the defendant at the main Land O' Lakes release lobby. Release times vary from 4 to 8 hours.
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
                                    Speak directly to a licensed Land O' Lakes surety agent. Open 24 hours.
                                </p>
                                <a href="tel:+13058310358" className="flex items-center justify-center gap-3 bg-black text-white py-5 rounded-xl font-black text-xl hover:bg-slate-900 transition-all">
                                    <Phone className="w-6 h-6 text-yellow-500" />
                                    (305) 831-0358
                                </a>
                                <p className="text-[10px] uppercase font-black tracking-widest mt-6 text-center opacity-70">
                                    Serving Pasco County and All Florida Jails
                                </p>
                            </div>

                            {/* Estimator */}
                            <div>
                                <ReleaseTimeEstimator />
                            </div>

                            {/* Map */}
                            <div className="border border-slate-800 bg-slate-900 h-[300px] grayscale hover:grayscale-0 transition-all duration-700 relative group">
                                <DynamicMap lat={jail.geo.lat} lng={jail.geo.lng} jailName={jail.name} />
                                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 p-4 border border-slate-700 backdrop-blur-sm">
                                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Jail Intake Facility</div>
                                    <div className="text-white font-bold flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-yellow-500" />
                                        Primary Booking Hub (Land O' Lakes)
                                    </div>
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="border-t border-slate-800 pt-12">
                                <FAQSection countyName="Land O' Lakes Detention Center" customFaqs={combinedFaqs} />
                            </div>

                            {/* Local Navigation Links */}
                            <div className="border-t border-slate-800 pt-12">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Other Pasco Facilities</h3>
                                <div className="flex flex-col gap-3">
                                    <Link href="/county/pasco" className="text-sm text-yellow-600 hover:text-white transition-colors">
                                        Pasco County Directory &rarr;
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
