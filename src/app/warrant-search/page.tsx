import { Metadata } from 'next';
import Link from 'next/link';
import EmergencyHeader from '@/components/EmergencyHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import MobileFloatingCall from '@/components/MobileFloatingCall';
import WarrantForm from '@/components/WarrantForm';
import { ShieldAlert, Search, FileSearch, Lock, CheckCircle2, Siren, Phone, Gavel, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: "Florida Warrant Search & Confidential Checks | Walk-Through Bonds",
    description: "Don't get surprised by a traffic stop. Request a confidential Florida active warrant check from a licensed bondsman. We arrange instant walk-through bonds to keep you out of jail.",
    alternates: {
        canonical: "https://bondflorida.com/warrant-search",
    },
};

export default function WarrantSearchPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 font-sans">
            <EmergencyHeader />

            {/* HERO SECTION */}
            <header className="relative py-20 bg-[url('/grid.svg')] bg-center overflow-hidden border-b border-slate-900">
                <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-slate-950"></div>
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <Breadcrumbs items={[{ label: 'Warrant Search', href: '/warrant-search' }]} />
                    
                    <div className="mt-8 flex items-center gap-3 mb-6">
                        <span className="bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-red-500/20 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Confidential Service
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                        Florida Active <span className="text-red-500">Warrant Search</span><br />& Walk-Through Bonds
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                        If you suspect you have an active arrest warrant in the state of Florida, <strong>do not wait to get pulled over.</strong> We provide confidential warrant checks and coordinate "Walk-Through" bonds so you never have to see the inside of a jail cell.
                    </p>
                </div>
            </header>

            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16">
                        
                        {/* LEFT COL: EDUCATIONAL CONTENT */}
                        <div className="lg:col-span-8 space-y-12">
                            
                            {/* The Danger of Public Databases */}
                            <article className="prose prose-invert max-w-none">
                                <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                                    <FileSearch className="w-8 h-8 text-yellow-500" />
                                    The Danger of Public Databases
                                </h2>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    Many people attempt to check their own warrant status using the public Florida Department of Law Enforcement (FDLE) database or third-party background check websites. This is highly risky for two reasons:
                                </p>
                                <ul className="text-slate-300 space-y-4 text-lg mt-6">
                                    <li className="flex gap-4">
                                        <Siren className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                        <span><strong>The Data is Delayed:</strong> Publicly accessible databases can be delayed by 48 to 72 hours. A judge may have signed a bench warrant this morning, but it won't show up online until Wednesday. If you get pulled over tonight, you are going to jail.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <Lock className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                        <span><strong>Digital Footprints:</strong> Some municipal databases log IP addresses. Searching for your own active warrant can alert local law enforcement that you are aware of the warrant, potentially escalating their efforts to execute it.</span>
                                    </li>
                                </ul>
                            </article>

                            {/* The Solution: Walk-Through Bonds */}
                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <ShieldAlert className="w-48 h-48" />
                                </div>
                                <h2 className="text-3xl font-serif font-bold text-white mb-6 relative z-10">What is a Walk-Through Bond?</h2>
                                <p className="text-slate-300 leading-relaxed text-lg mb-6 relative z-10">
                                    If we run a confidential check and discover you <em>do</em> have an active warrant, we can execute a <strong>Walk-Through Bond</strong> (also known as a turn-in bond). This is the only way to clear a warrant while maintaining control of your freedom.
                                </p>
                                
                                <div className="space-y-6 relative z-10">
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-emerald-500/20 p-2 rounded-full mt-1 shrink-0">
                                            <span className="text-emerald-500 font-bold">1</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-1">Pre-Approval</h4>
                                            <p className="text-slate-400">We secure your bond paperwork and payment <em>before</em> you ever step foot near a police station.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-emerald-500/20 p-2 rounded-full mt-1 shrink-0">
                                            <span className="text-emerald-500 font-bold">2</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-1">The Turn-In</h4>
                                            <p className="text-slate-400">Our licensed bondsman walks with you into the intake facility. We present the bond to the booking officer at the exact same moment you surrender.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-emerald-500/20 p-2 rounded-full mt-1 shrink-0">
                                            <span className="text-emerald-500 font-bold">3</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-1">Instant Processing</h4>
                                            <p className="text-slate-400">Because the bond is already posted, you are simply "processed" (fingerprinted and photographed) and immediately released through the front door. You never enter a holding cell.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Types of Warrants */}
                            <article className="prose prose-invert max-w-none pt-8 border-t border-slate-900">
                                <h2 className="text-2xl font-serif font-bold text-white mb-6">Common Types of Florida Warrants</h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <Gavel className="w-4 h-4 text-yellow-500" />
                                            Bench Warrants
                                        </h4>
                                        <p className="text-sm text-slate-400">Issued by a judge when you fail to appear (FTA) for a scheduled court date or fail to pay a court-ordered fine. These often have pre-set bond amounts.</p>
                                    </div>
                                    <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <Search className="w-4 h-4 text-red-500" />
                                            Arrest Warrants
                                        </h4>
                                        <p className="text-sm text-slate-400">Issued when law enforcement establishes probable cause that you committed a crime. Police are actively authorized to take you into custody.</p>
                                    </div>
                                    <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <ShieldAlert className="w-4 h-4 text-orange-500" />
                                            VOP Warrants
                                        </h4>
                                        <p className="text-sm text-slate-400">Violation of Probation. These are extremely severe and often come with a "No Bond" status attached until you see a judge.</p>
                                    </div>
                                    <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-blue-500" />
                                            Out-of-County
                                        </h4>
                                        <p className="text-sm text-slate-400">If you are stopped in Miami for a warrant issued in Broward, you will be held in Miami until Broward transport arrives. A walk-through prevents this nightmare.</p>
                                    </div>
                                </div>
                            </article>

                        </div>

                        {/* RIGHT COL: CTA MAGENT */}
                        <aside className="lg:col-span-4 space-y-8">
                            
                            <div className="sticky top-8 space-y-6">
                                {/* PRIMARY CTA - DIGITAL LEAD CAPTURE */}
                                <WarrantForm />

                                {/* TRUST SIGNALS */}
                                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                                    <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs flex items-center gap-2">
                                        <Lock className="w-4 h-4 text-emerald-500" />
                                        Attorney-Client Privacy
                                    </h4>
                                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                                        Inquiries made to a licensed bail bondsman regarding warrant status or bond pricing fall under strict confidentiality regulations. We do not report inquiries to law enforcement.
                                    </p>
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                            100% Confidential
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                            Statewide Coverage
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                            Zero Digital Footprint
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </aside>

                    </div>
                </div>
            </section>

            <MobileFloatingCall />
        </main>
    );
}
