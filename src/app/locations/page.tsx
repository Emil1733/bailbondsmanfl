import { Metadata } from 'next';
import Link from 'next/link';
import { counties } from '@/lib/data';
import EmergencyHeader from '@/components/EmergencyHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import { MapPin, ShieldCheck, Clock, ExternalLink, Siren, Phone, Gavel, FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: "Florida Bail Bonds Service Areas | Statewide County & City Directory",
    description: "Complete directory of bail bond service areas in Florida. We provide 24/7 assistance across all 67 counties, including Miami-Dade, Hillsborough, Orange, and Duval. Find your local jail and arresting agency here.",
    alternates: {
        canonical: "https://bondflorida.com/locations",
    },
};

export default function LocationsPage() {
    const totalCities = counties.reduce((acc, county) => acc + (county.cities?.length || 0), 0);

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 font-sans">
            <EmergencyHeader />

            {/* HERO SECTION */}
            <header className="relative py-24 bg-[url('/grid.svg')] bg-center overflow-hidden border-b border-slate-900">
                <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-slate-950"></div>
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <Breadcrumbs items={[{ label: 'Service Areas', href: '/locations' }]} />
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 mt-8 leading-tight">
                        Florida Bail Bonds:<br />
                        <span className="text-yellow-500">Statewide Service Directory</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                        Navigating the Florida jail system is an exercise in speed and precision. We provide 24/7 licensed surety bail assistance across <span className="text-white font-bold">{counties.length} major counties</span> and <span className="text-white font-bold">{totalCities} cities</span>.
                    </p>
                </div>
            </header>

            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16">
                        
                        {/* LEFT COL: EDUCATIONAL CONTENT (SEO MEAT) */}
                        <div className="lg:col-span-8 space-y-12">
                            
                            {/* SECTION 1: THE FLORIDA BAIL SYSTEM */}
                            <article className="prose prose-invert max-w-none">
                                <h2 className="text-3xl font-serif font-bold text-white mb-6">How Bail Works in the Sunshine State</h2>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    When someone is arrested in Florida, the clock starts ticking immediately. Whether the arrest happens in a major urban hub like Miami or a smaller municipality like Plant City, the legal process follows a strict statewide framework governed by the Florida Department of Financial Services (DFS). 
                                </p>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    A bail bond is a financial guarantee provided to the court to ensure the defendant appears at all future hearings. In Florida, the standard premium for a surety bond is <strong>fixed at 10%</strong> of the total bail amount. For example, if a judge sets bail at $5,000, the non-refundable premium you pay a licensed agent is $500. This rate is set by state law—anyone offering a lower percentage is likely operating outside of legal compliance.
                                </p>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    But it's not just about the money. It's about the logistics of the booking lobby. Every county jail has its own rhythm, its own transport schedules, and its own unique paperwork requirements. Understanding these nuances is the difference between your family member coming home tonight or spending another 12 hours in a holding cell.
                                </p>
                            </article>

                            {/* SECTION 2: THE "TRANSFER" TRAP */}
                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-yellow-500/10 rounded-full">
                                        <Siren className="w-8 h-8 text-yellow-500" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-white">The "Jail Transfer" Trap: Why Speed is Critical</h3>
                                </div>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    One of the most common mistakes families make is waiting until the inmate reaches the "Main Jail." In many Florida cities, if you are arrested by the local police department (not the Sheriff), you are held at a temporary municipal holding facility first. 
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-6 italic">
                                    Take Hialeah or West Palm Beach as examples. If you are arrested by the city police, they will hold you for a few hours for initial processing. Then, a transport van arrives to take everyone to the massive county detention center.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    <strong>The Danger:</strong> Once that van leaves the city station, the booking process effectively restarts at the county hub. This can add 4 to 8 hours of "processing time" where no one can help you. By calling a bondsman while the inmate is still at the city station, we can often prepare the paperwork so it's "live" the moment they hit the county system, cutting your wait time in half.
                                </p>
                            </div>

                            {/* SECTION 3: THE DIRECTORY (THE CORE OF THE PAGE) */}
                            <div className="space-y-12 pt-8">
                                <h2 className="text-3xl font-serif font-bold text-white border-b border-slate-800 pb-4 flex items-center gap-3">
                                    <MapPin className="w-8 h-8 text-yellow-500" />
                                    Regional Directory & Local Jails
                                </h2>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {counties.map((county) => (
                                        <div key={county.slug} className="group bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:border-yellow-500 transition-all">
                                            <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                                                <Link href={`/county/${county.slug}`} className="hover:text-yellow-500 transition-colors">
                                                    {county.name}
                                                </Link>
                                                <span className="text-[10px] uppercase tracking-widest text-slate-600 bg-slate-950 px-2 py-1 rounded">County Hub</span>
                                            </h3>
                                            
                                            <div className="mb-4">
                                                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Central Facility</p>
                                                <div className="text-sm text-slate-300 flex items-start gap-2">
                                                    <ShieldCheck className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                                                    {county.jail.name}
                                                </div>
                                            </div>

                                            {county.cities && county.cities.length > 0 && (
                                                <div>
                                                    <p className="text-xs text-slate-500 uppercase font-bold mb-2">City Service Areas</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {county.cities.map((city) => (
                                                            <Link 
                                                                key={city.slug} 
                                                                href={`/county/${county.slug}/${city.slug}`}
                                                                className="text-xs bg-slate-950 border border-slate-800 px-2 py-1 rounded hover:border-yellow-600 hover:text-white transition-colors"
                                                            >
                                                                {city.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SECTION 4: INMATE SEARCH TIPS */}
                            <article className="prose prose-invert max-w-none pt-12 border-t border-slate-900">
                                <h2 className="text-3xl font-serif font-bold text-white mb-6">Expert Tips for Using Florida Inmate Rosters</h2>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    Finding your loved one in the system isn't always as simple as typing their name. Florida's county jail rosters (like the HCSO Orient Road Jail or the TGK Center in Miami) are updated in real-time, but human error during booking is common.
                                </p>
                                <ul className="text-slate-300 space-y-4 text-lg">
                                    <li><strong>Partial Searches:</strong> If a name doesn't show up, try searching by just the first three letters of the last name. Misspellings are the #1 reason families think someone "isn't in the system."</li>
                                    <li><strong>The Booking Lag:</strong> It can take 2-4 hours after the physical arrest for an inmate to appear on the digital roster. If they aren't showing up, they are likely still in the intake van or the "pre-booking" holding area.</li>
                                    <li><strong>"No Bond" Status:</strong> If the roster says "No Bond," it doesn't mean they can't get out. It often means they haven't seen a judge yet (First Appearance) or they have a specific hold (like a Nebbia hold or an out-of-county warrant).</li>
                                </ul>
                            </article>

                            {/* SECTION 5: LEGAL RIGHTS */}
                            <article className="prose prose-invert max-w-none pt-12">
                                <h2 className="text-3xl font-serif font-bold text-white mb-6">Your Rights: The First 24 Hours</h2>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    In Florida, every arrestee has the right to a "First Appearance" hearing before a magistrate judge within 24 hours of their arrest. This is where the judge determines if there was "probable cause" for the arrest and sets the formal bond amount.
                                </p>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    <strong>Should you wait for the hearing?</strong> Not necessarily. Many charges have "pre-set" bond amounts on a standard schedule. If the bond is already set, we can post it immediately, and your loved one can be home before the hearing even happens. If you wait for the hearing, you're guaranteed at least one night in jail.
                                </p>
                                <div className="bg-emerald-950/20 border border-emerald-500/30 p-6 rounded-lg">
                                    <p className="text-emerald-200 font-bold mb-2 flex items-center gap-2">
                                        <Gavel className="w-5 h-5" />
                                        Nebbia Holds (Source of Funds)
                                    </p>
                                    <p className="text-emerald-100/80 text-sm italic">
                                        For certain charges (narcotics, high-value theft), the judge may attach a "Nebbia Requirement." This means the defendant must prove that the money used for bail came from a legitimate source, not from criminal activity. We are experts in handling Nebbia hearings and can help you gather the bank statements and tax records needed to clear this hold.
                                    </p>
                                </div>
                            </article>

                        </div>

                        {/* RIGHT COL: SIDEBAR TOOLS */}
                        <aside className="lg:col-span-4 space-y-8">
                            
                            <div className="sticky top-8 space-y-8">
                                {/* CTA CARD */}
                                <div className="bg-yellow-500 p-8 rounded-2xl text-black shadow-2xl">
                                    <h3 className="text-2xl font-serif font-black mb-4 leading-tight">Need Immediate Bail Help?</h3>
                                    <p className="font-bold mb-8 opacity-90">
                                        Speak directly to a licensed Florida surety agent. We are online 24/7.
                                    </p>
                                    <a href="tel:+13058310358" className="flex items-center justify-center gap-3 bg-black text-white py-5 rounded-xl font-black text-xl hover:bg-slate-900 transition-all">
                                        <Phone className="w-6 h-6" />
                                        (305) 831-0358
                                    </a>
                                    <p className="text-[10px] uppercase font-black tracking-widest mt-6 text-center opacity-70">
                                        Serving All 67 Florida Counties
                                    </p>
                                </div>

                                {/* QUICK STATS */}
                                <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                                    <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-yellow-500" />
                                        Statewide Statistics
                                    </h4>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="text-3xl font-serif font-bold text-white">10%</div>
                                            <div className="text-xs text-slate-500 uppercase tracking-widest">Fixed Legal Premium</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-serif font-bold text-white">24h</div>
                                            <div className="text-xs text-slate-500 uppercase tracking-widest">Max Time to First Appearance</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-serif font-bold text-white">4-8h</div>
                                            <div className="text-xs text-slate-500 uppercase tracking-widest">Avg Release Processing Time</div>
                                        </div>
                                    </div>
                                </div>

                                {/* DOCUMENT CHECKLIST */}
                                <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                                    <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                                        <FileText className="w-5 h-5 text-yellow-500" />
                                        Bail Requirements
                                    </h4>
                                    <ul className="space-y-4 text-sm text-slate-400">
                                        <li className="flex gap-3">
                                            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                                            <span>Valid State Photo ID (Driver's License or Passport)</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                                            <span>Proof of Employment or Income (Paystub/Tax Return)</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                                            <span>10% Premium Payment (Cash, Card, or Wire)</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                                            <span>Inmate's Full Legal Name and Date of Birth</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </aside>

                    </div>
                </div>
            </section>
        </main>
    );
}
