import JsonLd from '@/components/JsonLd';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
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

export const metadata: Metadata = pageMetadata({
    title: "Metro West Booking & Inmate Search | Get Them Out Now (Miami Bail Bonds)",
    description: "Waiting on Metro West Booking? Don\'t wait for the roster to update. Call our 24/7 Miami bondsmen to check their booking status and start the release process immediately.",
    path: '/jail/metro-west-detention-center',
});

export default function MetroWestDetentionCenterPage() {
    const jail = {
        name: "Metro West Detention Center",
        address: "13850 NW 41st St, Miami, FL 33178",
        phone: "(786) 263-5110",
        visitingHours: "Video Visitation Only",
        inmateSearchUrl: "https://www.miamidade.gov/corrections",
        geo: {
            lat: 25.8115,
            lng: -80.419,
        }
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BailBondBusiness",
                "name": "Metro West Detention Center Bail Bonds - Bond Florida",
                "image": "https://bondflorida.com/og-image.png",
                "description": "24/7 emergency bail bond services for Metro West Detention Center in Miami, FL. Immediate release from Miami-Dade custody.",
                "url": "https://bondflorida.com/jail/metro-west-detention-center",
                "telephone": "+1-305-831-0358",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Miami",
                    "addressRegion": "FL",
                    "postalCode": "33178",
                    "addressCountry": "US"
                },
                "areaServed": [
                    {
                        "@type": "City",
                        "name": "Miami"
                    },
                    {
                        "@type": "AdministrativeArea",
                        "name": "Miami-Dade County"
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
            }
        ]
    };

    const combinedFaqs = [
        {
            question: "Where do I post bail for someone at Metro West Detention Center?",
            answer: "Bail bonds for Metro West Detention Center must be posted at the main booking desk lobby located at 13850 NW 41st St, Miami, FL 33178. The bail window is open 24/7. Our licensed bail bondsman can handle the entire process electronically or meet you at the facility, so you do not have to wait in line at the jail cash window."
        },
        {
            question: "How long does booking take at the Metro West Detention Center in Miami?",
            answer: "Booking at Metro West Detention Center typically takes 6 to 12 hours depending on booking volume, staffing, and shift change holds. The facility serves as the primary intake and processing hub for all Miami-Dade County arrests, which leads to high traffic. We recommend starting the bail bond paperwork immediately so the bond can be posted as soon as the inmate receives their booking number."
        },
        {
            question: "What is the release time after posting bond at Metro?",
            answer: "Once the surety bond is accepted and processed by the Metro booking desk, release typically takes between 6 and 12 hours. The jail release lobby is open 24/7, and our local bondsman will monitor the discharge status and notify you when it is time to pick them up."
        },
        {
            question: "Can I pay for a bail bond at Metro West Detention Center online?",
            answer: "Yes. Our digital E-Bonding service allows you to complete the credit application and pay the 10% premium via credit card, debit card, or wire transfer from your phone. Our bondsman will immediately file the surety bond with the Metro booking desk electronically."
        },
        {
            question: "What is the statutory bail bond fee in Miami-Dade County?",
            answer: "By Florida law, the premium for a state surety bond is 10% of the total bail amount (with a minimum fee of $100 per charge). For example, a $5,000 bond requires a non-refundable premium of $500. We offer flexible payment plans with low down payments for qualified co-signers."
        }
    ];

    const guideData = {
    "intro": [
        "Metro West Detention Center is the largest correctional facility in Miami-Dade County. While TGK handles primary intake, Metro West houses a massive population of pre-trial inmates awaiting trial in the 11th Judicial Circuit.",
        "Securing a bond for an inmate already housed at Metro West requires coordinating with the central records department to facilitate a transfer release."
    ],
    "sections": [
        {
            "id": "booking",
            "title": "Pre-Trial Housing & Transfers",
            "icon": "AlertCircle",
            "content": [
                "Unlike TGK, Metro West is primarily a housing facility rather than a booking hub. If your loved one was transferred here, it means they have completed the initial intake and are in long-term pre-trial status. Posting a bond for an inmate at Metro West requires the paperwork to be routed through the Miami-Dade Corrections central system, which can sometimes add administrative time to the release."
            ]
        },
        {
            "id": "hearings",
            "title": "Navigating Miami-Dade Pre-Trial",
            "icon": "Scale",
            "content": [
                "Inmates housed at Metro West have already had their first appearance. If they are seeking a bond reduction (an Arthur Hearing), it must be scheduled with their assigned felony or misdemeanor judge at the Richard E. Gerstein Justice Building. Once a judge signs the order modifying the bond, we execute the new surety bond immediately."
            ]
        },
        {
            "id": "facility",
            "title": "Metro West Logistics",
            "icon": "Info",
            "content": [
                "Located on NW 41st Street, further west than TGK, this massive complex strictly enforces visitation rules and uses specific vendors for inmate accounts. Releases from Metro West can sometimes be routed back through TGK depending on staffing and transport schedules, so having a bondsman monitor the exact release point is critical."
            ]
        }
    ]
};

    return (
        <main className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
            <JsonLd data={jsonLd} />
            <EmergencyHeader />

            {/* HERO */}
            <Hero
                title={<span className="font-serif text-white">Metro West Detention Center <span className="text-yellow-500">Bail Bonds</span></span>}
                subtitle="24/7 Emergency Jail Release — Miami-Dade Primary Intake Specialists"
                inmateSearchUrl={jail.inmateSearchUrl}
            />

            <section className="py-24 bg-slate-950">
                <ContentContainer>
                    <Breadcrumbs
                        items={[
                            { label: "Jail Directories", href: "/locations" },
                            { label: "Metro West Detention Center", href: "/jail/metro-west-detention-center" }
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
                                    Need immediate **Metro West Detention Center Bail Bonds**? Speak with a licensed bondsman 24/7. Turner Guilford Knight (Metro) is the primary intake center for all Miami-Dade County arrests. If your loved one is arrested by the local municipal agencies or the Miami-Dade Corrections, they will be transported here immediately.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Because this is a high-volume booking facility, booking delays can stretch to 12 hours. Starting the bail process while they are still in transport or booking is critical to secure release the minute they are eligible.
                                </p>
                            </div>

                            {/* SECTION 1: BOOKING TIMELINE */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-yellow-500 pl-6">
                                    Understanding the Metro West Detention Center Booking Process
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Metro West Detention Center, located at 13850 NW 41st St, Miami, FL 33178, is a 1,300-bed direct supervision facility operated by the Miami-Dade Corrections. It serves as the primary processing center for adult males and females arrested in Miami-Dade County.
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
                                    Metro is conveniently located in Doral, just north of Miami International Airport, with quick access from the Palmetto Expressway (SR-826) and the Dolphin Expressway (SR-836).
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 pt-4">
                                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                                        <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-yellow-500" />
                                            Physical Location
                                        </h3>
                                        <p className="text-sm text-slate-400">
                                            7000 NW 41st St<br />
                                            Miami, FL 33166<br />
                                            Phone: (786) 263-5110
                                        </p>
                                    </div>
                                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                                        <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <ShieldCheck className="w-5 h-5 text-yellow-500" />
                                            Bail Window Hours
                                        </h3>
                                        <p className="text-sm text-slate-400">
                                            Open 24 Hours a Day<br />
                                            7 Days a Week<br />
                                            Miami-Dade Corrections Desk
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 3: WALK-THROUGH WARRANT GUIDE */}
                            <article className="prose prose-invert max-w-none space-y-6">
                                <h2 className="text-3xl font-serif font-bold text-white border-l-4 border-yellow-500 pl-6">
                                    Clearing Warrants at Metro West Detention Center
                                </h2>
                                <p className="text-slate-300 leading-relaxed">
                                    If you have an active warrant in Miami-Dade County, do not wait to get arrested. We offer a specialized **Walk-Through Warrant Bond** service. We coordinate with you, draft the bond paperwork in advance, and meet you at the Metro lobby.
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
                                    We provide fully remote digital E-Bonding for Metro West Detention Center. Using your smartphone or computer, you can complete all application documents, verify your identity, and pay the 10% premium via credit card or wire transfer.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    Once completed, we transmit the surety bond electronically directly to the Metro booking desk. The jail begins the release sequence immediately, and you can simply meet your loved one at the release lobby, eliminating the need to travel to our office or wait in line at the jail.
                                </p>
                            </article>

                            {/* CHECKLIST */}
                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl space-y-6">
                                <h3 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                                    <FileText className="w-6 h-6 text-yellow-500" />
                                    Metro West Detention Center Release Checklist
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
                                            <strong>Call Our Agent:</strong> Speak with a licensed Miami bondsman at (305) 831-0358 to confirm the bond amount.
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
                                            <strong>Bond Submission:</strong> We submit the surety bond directly to the Metro booking window.
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <div className="w-5 h-5 bg-yellow-500 text-black font-bold flex items-center justify-center shrink-0 rounded-full text-xs mt-1">5</div>
                                        <div>
                                            <strong>Discharge:</strong> Meet the defendant at the main Metro release lobby. Release times vary from 6 to 12 hours.
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
                                        Primary Booking Hub (Metro Miami)
                                    </div>
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="border-t border-slate-800 pt-12">
                                <FAQSection countyName="Metro West Detention Center" customFaqs={combinedFaqs} />
                            </div>

                            {/* Local Navigation Links */}
                            <div className="border-t border-slate-800 pt-12">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Other Miami Facilities</h3>
                                <div className="flex flex-col gap-3">
                                    <Link href="/county/miami-dade" className="text-sm text-yellow-600 hover:text-white transition-colors">
                                        Miami-Dade County Directory &rarr;
                                    </Link>
                                </div>
                            </div>

{/* Sticky Urgency CTA */}
                            <div className="bg-yellow-500 p-8 rounded-2xl text-black shadow-2xl sticky top-8">
                                <h3 className="text-2xl font-serif font-black mb-4 leading-tight">Need Immediate Bail Help?</h3>
                                <p className="font-bold mb-8 opacity-90">
                                    Speak directly to a licensed Miami surety agent. Open 24 hours.
                                </p>
                                <a href="tel:+13058310358" className="flex items-center justify-center gap-3 bg-black text-white py-5 rounded-xl font-black text-xl hover:bg-slate-900 transition-all">
                                    <Phone className="w-6 h-6 text-yellow-500" />
                                    (305) 831-0358
                                </a>
                                <p className="text-[10px] uppercase font-black tracking-widest mt-6 text-center opacity-70">
                                    Serving Miami-Dade County and All Florida Jails
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
