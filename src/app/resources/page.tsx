import { Metadata } from 'next';
import Link from 'next/link';
import EmergencyHeader from '@/components/EmergencyHeader';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import MobileFloatingCall from '@/components/MobileFloatingCall';
import { BookOpen, ShieldAlert, Clock, HelpCircle, FileText, Scale, ArrowRight, Gavel, UserCheck, AlertTriangle, Phone, ShieldCheck } from 'lucide-react';

const ContentContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`max-w-6xl mx-auto px-6 ${className}`}>
        {children}
    </div>
);

export const metadata: Metadata = {
    title: "Florida Bail Resources & Legal Guides | 24/7 Educational Hub",
    description: "Access our comprehensive Florida bail bonds guide. Learn about weekend jail releases, co-signer liabilities, 72-hour holds, cash bonds, and Nebbia requirements.",
    alternates: {
        canonical: "https://bondflorida.com/resources",
    },
};

export default function ResourcesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://bondflorida.com/resources#webpage",
                "url": "https://bondflorida.com/resources",
                "name": "Florida Bail Resources & Legal Guides",
                "description": "Comprehensive resource directory answering critical questions about Florida jail releases, surety liabilities, and intake schedules."
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Do county jails release inmates on weekends in Florida?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. County jails in Florida operate 24 hours a day, 7 days a week, including weekends and state holidays. If a defendant has a pre-set bond or has gone to a First Appearance hearing (magistrate court) on Saturday or Sunday, a licensed bail bondsman can post the surety bond and secure their release at any hour of the night or weekend."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the financial liabilities of co-signing a bail bond?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "As a co-signer (indemnitor), you assume full financial responsibility for the complete amount of the bail bond. If the defendant fails to appear in court, you are responsible for paying the full face value of the bond to the surety agency, plus any recovery fees. If you put up collateral (like real estate or cash), that collateral can be seized and liquidated to satisfy the court's bond forfeiture order."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long can a Florida jail hold you without filing formal charges?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Under Florida Rules of Criminal Procedure 3.133, the state prosecutor generally has 33 days from the date of arrest to file formal charges (an Information or Indictment). If charges are not filed within 33 days, the court must release the defendant on their own recognizance on the 34th day, unless the state shows good cause, which can extend the charging deadline to a maximum of 40 days."
                        }
                    }
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
                title={<span className="font-serif text-white">Florida Bail <span className="text-yellow-500">Resource Center</span></span>}
                subtitle="Authoritative Guides on Jail Intake, Co-Signer Liabilities, and Legal Rights"
            />

            <section className="py-16 bg-slate-950">
                <ContentContainer>
                    <Breadcrumbs items={[{ label: 'Resources', href: '/resources' }]} />

                    <div className="grid lg:grid-cols-12 gap-16 items-start mt-8">
                        {/* LEFT COLUMN: NAVIGATION HUB */}
                        <div className="lg:col-span-4 sticky top-8 space-y-6">
                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                                <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-yellow-500" />
                                    Guide Directory
                                </h3>
                                <nav className="space-y-4">
                                    <a href="#weekend-release" className="block text-sm text-slate-400 hover:text-yellow-500 transition-colors py-1.5 border-b border-slate-800 flex justify-between items-center group">
                                        <span>1. Weekend Jail Releases</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </a>
                                    <a href="#cosigner-liability" className="block text-sm text-slate-400 hover:text-yellow-500 transition-colors py-1.5 border-b border-slate-800 flex justify-between items-center group">
                                        <span>2. Co-Signer Rights & Risks</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </a>
                                    <a href="#charging-deadlines" className="block text-sm text-slate-400 hover:text-yellow-500 transition-colors py-1.5 border-b border-slate-800 flex justify-between items-center group">
                                        <span>3. The 33-Day & 40-Day Rules</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </a>
                                    <a href="#cash-vs-surety" className="block text-sm text-slate-400 hover:text-yellow-500 transition-colors py-1.5 border-b border-slate-800 flex justify-between items-center group">
                                        <span>4. Cash Bonds vs. Surety</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </a>
                                    <a href="#nebbia-requirements" className="block text-sm text-slate-400 hover:text-yellow-500 transition-colors py-1.5 border-b border-slate-800 flex justify-between items-center group">
                                        <span>5. Lifting Nebbia Holds</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </a>
                                </nav>
                            </div>

                            <div className="bg-yellow-500 p-8 rounded-2xl text-black shadow-2xl">
                                <h3 className="text-2xl font-serif font-black mb-4 leading-tight">Emergency Support</h3>
                                <p className="font-bold mb-8 opacity-90">
                                    Have an immediate question or need a surety bond filed right away? Talk to our dispatch line 24/7.
                                </p>
                                <a href="tel:+13058310358" className="flex items-center justify-center gap-3 bg-black text-white py-5 rounded-xl font-black text-xl hover:bg-slate-900 transition-all">
                                    <Phone className="w-6 h-6 text-yellow-500" />
                                    (305) 831-0358
                                </a>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: LONG-FORM ARTICLE (1600+ WORDS) */}
                        <div className="lg:col-span-8 space-y-20">

                            {/* SECTION 1: WEEKEND RELEASES */}
                            <article id="weekend-release" className="space-y-6 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-2">
                                    <Clock className="w-8 h-8 text-yellow-500" />
                                    <h2 className="text-3xl font-serif font-bold text-white">Do County Jails Release on Weekends in Florida?</h2>
                                </div>
                                <div className="prose prose-invert max-w-none text-slate-300 space-y-4 leading-relaxed">
                                    <p>
                                        One of the most persistent myths surrounding criminal justice administration in Florida is that county jails suspend release processing on Saturdays, Sundays, and public holidays. **This is completely false.** All 67 county jail systems in Florida operate on a continuous, 24/7/365 schedule. Booking deputies, release intake coordinators, and medical personnel work revolving shifts to ensure that administrative transitions, booking, and releases happen continuously.
                                    </p>
                                    <p>
                                        However, while the physical jail facilities are always open, jail release delays are frequent on weekends due to several logistical factors:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Staffing Constraints:</strong> Jail administration units often operate with reduced clerical staff on weekends. While custody deputies remain at full capacity, the records clerks who verify warrants, compute release times, and accept surety bonds are frequently understaffed, leading to processing queues.
                                        </li>
                                        <li>
                                            <strong>First Appearance Schedules:</strong> If an individual is arrested on a charge without a pre-set bond amount (such as domestic violence, felony charges, or out-of-county warrants), they must see a magistrate judge at a "First Appearance" hearing. These hearings are held once per day on weekends (typically in the morning). If an arrest occurs on Saturday afternoon, the inmate must remain in custody until Sunday morning's magistrate session before a bond is formally established.
                                        </li>
                                        <li>
                                            <strong>Surety Bond Processing:</strong> Once the judge sets the bond at First Appearance, a licensed bail bondsman can immediately post it. E-Bonding operations run 24 hours a day. We can submit bonds electronically on weekends, and once the jail receives the transaction, the release clock begins.
                                        </li>
                                    </ul>
                                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg my-6">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-yellow-500" />
                                            The Weekend Release Window
                                        </h4>
                                        <p className="text-sm text-slate-400">
                                            If a bond is posted on a weekend, expect release processing to take between 4 and 10 hours depending on the jail's capacity. Heavy intake periods (typically Friday and Saturday nights) will delay processing as priority is placed on incoming bookings over outgoing releases.
                                        </p>
                                    </div>
                                </div>
                            </article>

                            {/* SECTION 2: CO-SIGNER RIGHTS AND RISKS */}
                            <article id="cosigner-liability" className="space-y-6 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-2">
                                    <UserCheck className="w-8 h-8 text-yellow-500" />
                                    <h2 className="text-3xl font-serif font-bold text-white">Co-Signer (Indemnitor) Rights, Liabilities, and Release</h2>
                                </div>
                                <div className="prose prose-invert max-w-none text-slate-300 space-y-4 leading-relaxed">
                                    <p>
                                        When you act as a co-signer (legally known as the **indemnitor**) on a Florida surety bond, you are entering into a legally binding contract with the bail bond agency and, by extension, the state court. Many families believe their responsibility ends with paying the 10% premium. This is a dangerous misconception.
                                    </p>
                                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Financial Liabilities</h3>
                                    <p>
                                        By signing the indemnity agreement, you are guaranteeing that the defendant will attend every scheduled court appearance related to their charge until the case is resolved. If the defendant fails to appear (FTA) in court:
                                    </p>
                                    <ol className="list-decimal pl-6 space-y-2">
                                        <li>
                                            <strong>Bond Forfeiture:</strong> The court will declare the bond forfeited and issue a warrant for the defendant's arrest.
                                        </li>
                                        <li>
                                            <strong>Surety Payment:</strong> The bail bond agency is given a statutory window (usually 60 days in Florida) to locate the defendant and return them to custody. If the defendant is not found, the surety company must pay the **full face value** of the bail to the court.
                                        </li>
                                        <li>
                                            <strong>Co-Signer Recourse:</strong> The bail bond agency will immediately seek reimbursement from the co-signer for the full bond amount, plus any fugitive recovery costs, investigator fees, and legal expenses. If you put up collateral (such as a vehicle title or property deed), it will be liquidated to cover these costs.
                                        </li>
                                    </ol>
                                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Can a Co-Signer Get Off a Bail Bond?</h3>
                                    <p>
                                        Yes, but only under specific circumstances. If you believe the defendant is planning to flee (skip bail) or is violating their release conditions (such as moving without notice or committing new crimes), you have the right to request a **surrender**.
                                    </p>
                                    <p>
                                        To be released from liability, the defendant must be physically returned to the custody of the jail. The bondsman will file a "Surrender of Inmate" form with the court. Note that the 10% premium paid to the agency is non-refundable, as it represents the fee for the service already rendered. Additionally, if the bondsman must use a fugitive recovery agent to locate and return the defendant, the co-signer is liable for those recovery fees.
                                    </p>
                                </div>
                            </article>

                            {/* SECTION 3: CHARGING DEADLINES */}
                            <article id="charging-deadlines" className="space-y-6 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-2">
                                    <Gavel className="w-8 h-8 text-yellow-500" />
                                    <h2 className="text-3xl font-serif font-bold text-white">How Long Can You Be Held Without Charges? (The 33-Day Rule)</h2>
                                </div>
                                <div className="prose prose-invert max-w-none text-slate-300 space-y-4 leading-relaxed">
                                    <p>
                                        When someone is arrested, they are booked on the "probable cause" of the arresting officer. However, the police officer does not file formal charges. In Florida, the authority to file formal criminal charges rests solely with the State Attorney (prosecutor).
                                    </p>
                                    <p>
                                        Under **Florida Rules of Criminal Procedure 3.133(b)**, the state has a specific timeframe to file formal charges (either an Information or an Indictment) against a defendant who is detained in jail:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-4">
                                        <li>
                                            <strong>The 33-Day Deadline:</strong> If the defendant remains in jail, the state must file formal charges within 33 days from the date of arrest. If charges are not filed by the 30th day, the defense attorney or bondsman can request an adversary preliminary hearing or petition for release. On the 33rd day, if charges are still absent, the court will order the jail to release the defendant on their own recognizance (R.O.R.) on the 34th day.
                                        </li>
                                        <li>
                                            <strong>The 40-Day Maximum:</strong> The state prosecutor can request a 7-day extension by showing "good cause" at a hearing. If the judge grants the extension, the state has a hard maximum of 40 days to file charges. If no formal charges are filed by the 40th day, the defendant must be released from custody.
                                        </li>
                                    </ul>
                                    <p>
                                        It is important to understand that being released under the 33-day rule does not mean the case is dismissed. The state still has the right to file charges later (within the statute of limitations, which ranges from 1 to 5 years depending on the severity of the felony). It simply means the defendant cannot be held in jail while waiting for the prosecutor's filing decisions.
                                    </p>
                                </div>
                            </article>

                            {/* SECTION 4: CASH VS. SURETY */}
                            <article id="cash-vs-surety" className="space-y-6 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-2">
                                    <Scale className="w-8 h-8 text-yellow-500" />
                                    <h2 className="text-3xl font-serif font-bold text-white">Cash Bonds vs. Surety Bonds: A Financial Comparison</h2>
                                </div>
                                <div className="prose prose-invert max-w-none text-slate-300 space-y-4 leading-relaxed">
                                    <p>
                                        If the judge sets bail at $10,000, you have two primary methods to secure the release of the defendant: paying a **Cash Bond** directly to the jail, or purchasing a **Surety Bond** from a licensed bail bond agent.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-8">
                                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                                            <h4 className="font-bold text-white mb-3 text-lg flex items-center gap-2">
                                                <FileText className="w-5 h-5 text-yellow-500" />
                                                Cash Bond (Direct to Jail)
                                            </h4>
                                            <p className="text-sm text-slate-400 leading-relaxed mb-4">
                                                You must pay the full $10,000 in cash or cashier's check to the jail clerk.
                                            </p>
                                            <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4">
                                                <li>Requires 100% liquidity upfront.</li>
                                                <li>The money is held by the court until the entire case resolves (often 6 to 18 months).</li>
                                                <li>At case resolution, the court refunds the money, but **deducts court costs, fines, and administrative fees** first.</li>
                                            </ul>
                                        </div>
                                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                                            <h4 className="font-bold text-white mb-3 text-lg flex items-center gap-2">
                                                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                                Surety Bond (Via Bondsman)
                                            </h4>
                                            <p className="text-sm text-slate-400 leading-relaxed mb-4">
                                                You pay a licensed bondsman a regulated 10% premium ($1,000). The bondsman posts the $10,000 guarantee.
                                            </p>
                                            <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4">
                                                <li>Saves 90% of your cash liquidity.</li>
                                                <li>No court fees or fines are deducted from your funds, as no money was deposited with the court clerk.</li>
                                                <li>The 10% premium is non-refundable; it is the fee paid to the surety company for taking on the financial risk.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        For most families, tieing up thousands of dollars of cash in a court escrow account for months is not financially viable. A surety bond allows you to preserve your cash resources to hire a private defense attorney, which is often the most critical element in resolving the underlying criminal charges successfully.
                                    </p>
                                </div>
                            </article>

                            {/* SECTION 5: NEBBIA HOLDS */}
                            <article id="nebbia-requirements" className="space-y-6 scroll-mt-24">
                                <div className="flex items-center gap-3 mb-2">
                                    <ShieldAlert className="w-8 h-8 text-yellow-500" />
                                    <h2 className="text-3xl font-serif font-bold text-white">Understanding and Lifting Nebbia holds</h2>
                                </div>
                                <div className="prose prose-invert max-w-none text-slate-300 space-y-4 leading-relaxed">
                                    <p>
                                        In federal cases and state felony cases involving drug trafficking, money laundering, fraud, or white-collar crime, the prosecution may request a **Nebbia Hold** (named after the federal case *United States v. Nebbia*). When a Nebbia hold is placed on a defendant, the jail cannot release them, even if you try to post the full bail amount.
                                    </p>
                                    <p>
                                        The purpose of the hold is to force the defendant to prove that the funds being used to pay the bail bond premium and secure the collateral are derived from legitimate, legal sources, and not from the proceeds of the alleged criminal activity.
                                    </p>
                                    <h3 className="text-xl font-bold text-white mt-6 mb-2">The Nebbia Proffer</h3>
                                    <p>
                                        To lift the hold, the defense must file a document known as a **Nebbia Proffer**. This packet contains a collection of financial records verifying the source of the funds:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Bank Statements:</strong> Multiple months of bank records showing regular deposits from clean sources.
                                        </li>
                                        <li>
                                            <strong>Tax Returns:</strong> IRS forms (1040, W-2, or 1099) proving legitimate income.
                                        </li>
                                        <li>
                                            <strong>Pay Stubs:</strong> Recent wage details showing active employment.
                                        </li>
                                        <li>
                                            <strong>Affidavits:</strong> Statements from co-signers detailing their financial contributions and verifying their assets.
                                        </li>
                                    </ul>
                                    <p>
                                        Once the proffer is compiled, it is submitted to the State Attorney's Office. If the prosecutor is satisfied with the documentation, they will sign a stipulation to lift the hold. If they object, a Nebbia hearing must be scheduled before the judge, where the co-signers must testify about the source of their money. Working with a bondsman experienced in compiling proffer files is critical to expedite this process and avoid long court delays.
                                    </p>
                                </div>
                            </article>

                        </div>
                    </div>
                </ContentContainer>
            </section>

            <MobileFloatingCall />
        </main>
    );
}
