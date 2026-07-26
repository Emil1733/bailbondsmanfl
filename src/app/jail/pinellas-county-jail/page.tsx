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
import ComprehensiveJailGuide, { GuideSection } from '@/components/ComprehensiveJailGuide';

const ContentContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`max-w-6xl mx-auto px-6 ${className}`}>
        {children}
    </div>
);

export const metadata: Metadata = {
    title: "Pinellas County Jail Bail Bonds Clearwater | 24/7 Fast Release",
    description: "Need immediate bail bonds for Pinellas County Jail in Clearwater, FL? Speak with a licensed bondsman 24/7. Fast inmate release. 10% rates & online payment plans.",
    alternates: {
        canonical: "https://bondflorida.com/jail/pinellas-county-jail",
    },
};

export default function PinellasCountyJailPage() {
    const jail = {
        name: "Pinellas County Jail",
        address: "14400 49th St N, Clearwater, FL 33762",
        phone: "(727) 464-6415",
        visitingHours: "Video Visitation Only",
        inmateSearchUrl: "https://www.pcsoweb.com",
        geo: {
            lat: 27.9015,
            lng: -82.697,
        }
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BailBondBusiness",
                "name": "Pinellas County Jail Bail Bonds - Bond Florida",
                "image": "https://bondflorida.com/og-image.jpg",
                "description": "24/7 emergency bail bond services for Pinellas County Jail in Clearwater, FL. Immediate release from Clearwater-Dade custody.",
                "url": "https://bondflorida.com/jail/pinellas-county-jail",
                "telephone": "+1-305-831-0358",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Clearwater",
                    "addressRegion": "FL",
                    "postalCode": "33762",
                    "addressCountry": "US"
                },
                "areaServed": [
                    {
                        "@type": "City",
                        "name": "Clearwater"
                    },
                    {
                        "@type": "AdministrativeArea",
                        "name": "Pinellas County"
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
                        "name": "Where do I post bail for someone at Pinellas County Jail?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Bail bonds for Pinellas County Jail must be posted at the main booking desk lobby located at 14400 49th St N, Clearwater, FL 33762. The bail window is open 24/7. Our licensed bail bondsman can handle the entire process electronically or meet you at the facility, so you do not have to wait in line at the jail cash window."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does booking take at the Pinellas County Jail in Clearwater?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Booking at Pinellas County Jail typically takes 5 to 8 hours depending on booking volume, staffing, and shift change holds. The facility serves as the primary intake and processing hub for all Pinellas County arrests, which leads to high traffic. We recommend starting the bail bond paperwork immediately so the bond can be posted as soon as the inmate receives their booking number."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I pay for a bail bond at Pinellas County Jail online?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Our digital E-Bonding service allows you to complete the credit application and pay the 10% premium via credit card, debit card, or wire transfer from your phone. Our bondsman will immediately file the surety bond with the Pinellas booking desk electronically."
                        }
                    }
                ]
            }
        ]
    };

    const combinedFaqs = [
        {
            question: "Where do I post bail for someone at Pinellas County Jail?",
            answer: "Bail bonds for Pinellas County Jail must be posted at the main booking desk lobby located at 14400 49th St N, Clearwater, FL 33762. The bail window is open 24/7. Our licensed bail bondsman can handle the entire process electronically or meet you at the facility, so you do not have to wait in line at the jail cash window."
        },
        {
            question: "How long does booking take at the Pinellas County Jail in Clearwater?",
            answer: "Booking at Pinellas County Jail typically takes 5 to 8 hours depending on booking volume, staffing, and shift change holds. The facility serves as the primary intake and processing hub for all Pinellas County arrests, which leads to high traffic. We recommend starting the bail bond paperwork immediately so the bond can be posted as soon as the inmate receives their booking number."
        },
        {
            question: "What is the release time after posting bond at Pinellas?",
            answer: "Once the surety bond is accepted and processed by the Pinellas booking desk, release typically takes between 6 and 12 hours. The jail release lobby is open 24/7, and our local bondsman will monitor the discharge status and notify you when it is time to pick them up."
        },
        {
            question: "Can I pay for a bail bond at Pinellas County Jail online?",
            answer: "Yes. Our digital E-Bonding service allows you to complete the credit application and pay the 10% premium via credit card, debit card, or wire transfer from your phone. Our bondsman will immediately file the surety bond with the Pinellas booking desk electronically."
        },
        {
            question: "What is the statutory bail bond fee in Pinellas County?",
            answer: "By Florida law, the premium for a state surety bond is 10% of the total bail amount (with a minimum fee of $100 per charge). For example, a $5,000 bond requires a non-refundable premium of $500. We offer flexible payment plans with low down payments for qualified co-signers."
        }
    ];

    const guideData = {
    "intro": [
        "The Pinellas County Jail, located on 49th Street North in Clearwater, is the sole detention facility for the entire county. It houses pre-trial detainees arrested by the Pinellas County Sheriff’s Office, St. Petersburg Police, and Clearwater Police.",
        "Understanding the nuances of the 6th Judicial Circuit's bail protocols is the key to navigating this massive complex."
    ],
    "sections": [
        {
            "id": "booking",
            "title": "Clearwater Central Booking",
            "icon": "AlertCircle",
            "content": [
                "Because Pinellas County consolidated all municipal jails into this single facility, the intake center is always active. The PCSO conducts thorough medical and psychological screenings upon entry. Only after these clearances and the live-scan fingerprint returns are complete can a surety bond be officially processed by the clerk's office."
            ]
        },
        {
            "id": "hearings",
            "title": "Advisory Hearings in the 6th Circuit",
            "icon": "Scale",
            "content": [
                "Defendants who do not bond out immediately via the standard uniform bail schedule must attend an advisory hearing at the Pinellas County Justice Center (which is adjacent to the jail complex). These hearings occur 365 days a year. If a bond is granted, the proximity of the courthouse to the jail allows our agents to file the bond swiftly."
            ]
        },
        {
            "id": "facility",
            "title": "Pinellas Facility Guidelines",
            "icon": "Info",
            "content": [
                "The Pinellas County Sheriff’s Office utilizes the 'Smart Communications' system for inmate mail and phone calls. All physical mail is scanned and delivered electronically to inmates via tablets. Visitation is handled through a video visitation center located in the Administration Support Building. When posting bond, the release process typically takes 4 to 6 hours."
            ]
        }
    ]
};

    return (
        <main className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <EmergencyHeader />

            {/* HERO */}
            <Hero
                title={<span className="font-serif text-white">Pinellas County Jail <span className="text-yellow-500">Bail Bonds</span></span>}
                subtitle="24/7 Emergency Jail Release — Clearwater-Dade Primary Intake Specialists"
                inmateSearchUrl={jail.inmateSearchUrl}
            />

            <section className="py-24 bg-slate-950">
                <ContentContainer>
                    <Breadcrumbs
                        items={[
                            { label: "Jail Directories", href: "/locations" },
                            { label: "Pinellas County Jail", href: "/jail/pinellas-county-jail" }
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
                                    Need immediate **Pinellas County Jail Bail Bonds**? Speak with a licensed bondsman 24/7. Turner Guilford Knight (Pinellas) is the primary intake center for all Pinellas County arrests. If your loved one is arrested by the Clearwater Police Department, MDPD, or local municipal agencies, they will be transported here immediately.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Because this is a high-volume booking facility, booking delays can stretch to 12 hours. Starting the bail process while they are still in transport or booking is critical to secure release the minute they are eligible.
                                </p>
                            </div>

                            {/* SECTION 1: BOOKING TIMELINE */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-yellow-500 pl-6">
                                    Understanding the Pinellas County Jail Booking Process
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Pinellas County Jail, located at 14400 49th St N, Clearwater, FL 33762, is a 1,300-bed direct supervision facility operated by the Clearwater-Dade Corrections and Rehabilitation Department. It serves as the primary processing center for adult males and females arrested in Pinellas County.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    The booking sequence includes a medical screening, inventory of personal property, fingerprinting, mugshots, and checking local and federal databases for active warrants. This administrative sequence takes between 6 and 12 hours. The bond cannot be posted until the booking process is finalized and the inmate receives an active booking number.
                                </p>
                            </article>

                            {/* SECTION 2: MAP & LOCATION INFO */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-slate-700 pl-6">
                                    Facility Coordinates & Navigation
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Pinellas is conveniently located in Doral, just north of Clearwater International Airport, with quick access from the Palmetto Expressway (SR-826) and the Dolphin Expressway (SR-836).
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 pt-4">
                                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-yellow-500" />
                                            Physical Location
                                        </h4>
                                        <p className="text-sm text-slate-400">
                                            7000 NW 41st St<br />
                                            Clearwater, FL 33166<br />
                                            Phone: (727) 464-6415
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
                                            Clearwater-Dade Corrections Desk
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 3: WALK-THROUGH WARRANT GUIDE */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-yellow-500 pl-6">
                                    Clearing Warrants at Pinellas County Jail
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    If you have an active warrant in Pinellas County, do not wait to get arrested. We offer a specialized **Walk-Through Warrant Bond** service. We coordinate with you, draft the bond paperwork in advance, and meet you at the Pinellas lobby.
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
                                    We provide fully remote digital E-Bonding for Pinellas County Jail. Using your smartphone or computer, you can complete all application documents, verify your identity, and pay the 10% premium via credit card or wire transfer.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Once completed, we transmit the surety bond electronically directly to the Pinellas booking desk. The jail begins the release sequence immediately, and you can simply meet your loved one at the release lobby, eliminating the need to travel to our office or wait in line at the jail.
                                </p>
                            </article>

                            {/* CHECKLIST */}
                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl space-y-6">
                                <h3 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                                    <FileText className="w-6 h-6 text-yellow-500" />
                                    Pinellas County Jail Release Checklist
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
                                            <strong>Call Our Agent:</strong> Speak with a licensed Clearwater bondsman at (305) 831-0358 to confirm the bond amount.
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
                                            <strong>Bond Submission:</strong> We submit the surety bond directly to the Pinellas booking window.
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <div className="w-5 h-5 bg-yellow-500 text-black font-bold flex items-center justify-center shrink-0 rounded-full text-xs mt-1">5</div>
                                        <div>
                                            <strong>Discharge:</strong> Meet the defendant at the main Pinellas release lobby. Release times vary from 5 to 8 hours.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        
                            <ComprehensiveJailGuide jailName={jail.name} intro={guideData.intro} sections={guideData.sections as GuideSection[]} />

                        </div>

                        {/* RIGHT COL: SIDEBAR TOOLS */}
                        <div className="lg:col-span-5 space-y-12">

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
                                        Primary Booking Hub (Pinellas Clearwater)
                                    </div>
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="border-t border-slate-800 pt-12">
                                <FAQSection countyName="Pinellas County Jail" customFaqs={combinedFaqs} />
                            </div>

                            {/* Local Navigation Links */}
                            <div className="border-t border-slate-800 pt-12">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Other Clearwater Facilities</h3>
                                <div className="flex flex-col gap-3">
                                    <Link href="/county/miami-dade" className="text-sm text-yellow-600 hover:text-white transition-colors">
                                        Pinellas County Directory &rarr;
                                    </Link>
                                </div>
                            </div>

{/* Sticky Urgency CTA */}
                            <div className="bg-yellow-500 p-8 rounded-2xl text-black shadow-2xl sticky top-8">
                                <h3 className="text-2xl font-serif font-black mb-4 leading-tight">Need Immediate Bail Help?</h3>
                                <p className="font-bold mb-8 opacity-90">
                                    Speak directly to a licensed Clearwater surety agent. Open 24 hours.
                                </p>
                                <a href="tel:+13058310358" className="flex items-center justify-center gap-3 bg-black text-white py-5 rounded-xl font-black text-xl hover:bg-slate-900 transition-all">
                                    <Phone className="w-6 h-6 text-yellow-500" />
                                    (305) 831-0358
                                </a>
                                <p className="text-[10px] uppercase font-black tracking-widest mt-6 text-center opacity-70">
                                    Serving Pinellas County and All Florida Jails
                                </p>
                            </div>

                                                    </div>

                    </div>
                </ContentContainer>
            </section>

            <MobileFloatingCall />
        </main>
    );
}
