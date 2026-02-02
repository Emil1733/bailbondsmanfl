import { notFound } from 'next/navigation';
import { getCounty, getAllCounties } from '@/lib/data';
import EmergencyHeader from '@/components/EmergencyHeader';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import DynamicMap from '@/components/DynamicMap';
import ReleaseTimeEstimator from '@/components/ReleaseTimeEstimator';
import FAQSection from '@/components/FAQSection';
import Schema from '@/components/Schema';
import MobileFloatingCall from '@/components/MobileFloatingCall';
import { ExternalLink, Clock, MapPin, Phone, Gavel, FileText, HelpCircle, ArrowRight } from 'lucide-react';

// 1. STANDARD SPINE COMPONENT
const ContentContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`max-w-6xl mx-auto px-6 ${className}`}>
        {children}
    </div>
);

export async function generateStaticParams() {
    const counties = await getAllCounties();
    return counties.map((county) => ({
        slug: county.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const county = await getCounty(slug);

    if (!county) {
        return {
            title: 'County Not Found',
        };
    }

    return {
        title: `Bail Bonds ${county.name} | Free Inmate Search & Release`,
        description: `IMMEDIATE RELEASE from ${county.jail.name} in ${county.name}. 24/7 Bail Bonds. We know exactly how to speed up the process at ${county.jail.address}. Call now.`,
        alternates: {
            canonical: `/county/${county.slug}`,
        },
    };
}

import { generateCountyFAQs } from '@/lib/seo-helpers';

// ... imports

export default async function CountyPage({ params }: Props) {
    const { slug } = await params;
    const county = await getCounty(slug);

    if (!county) {
        notFound();
    }

    // SGE Optimization: Generate 5 W's
    const sgeFaqs = generateCountyFAQs(county.name, county.jail.name);

    // Combine with specific editorial FAQs (if any)
    const combinedFaqs = [
        ...(county.richContent?.specificFaqs || []),
        ...sgeFaqs
    ];

    return (
        <main className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
            <Schema county={county} faqs={combinedFaqs} />
            <EmergencyHeader />

            <Hero
                title={<span className="font-serif italic text-white">Arrested in <span className="not-italic text-yellow-500">{county.name}</span>?</span>}
                subtitle={`Licensed Surety Agents for ${county.jail.name}`}
                inmateSearchUrl={county.jail.inmateSearchUrl}
            />

            <section className="py-24 bg-slate-950">
                <ContentContainer>
                    <Breadcrumbs
                        items={[
                            { label: `${county.name} County`, href: `/county/${county.slug}` }
                        ]}
                    />
                    <div className="grid lg:grid-cols-12 gap-16 items-start">

                        {/* LEFT COL: CONTENT (7 Calls) */}
                        <div className="lg:col-span-7 space-y-20">

                            {/* 1. DETENTION DATA (Editorial Style) */}
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-white mb-8 border-l-4 border-yellow-500 pl-6">
                                    Detention Facility Data
                                </h2>
                                <div className="pl-6 md:pl-8 space-y-8">
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Primary Facility</h3>
                                        <div className="text-2xl font-bold text-white mb-2">{county.jail.name}</div>
                                        <div className="flex items-start gap-3 text-slate-400">
                                            <MapPin className="w-5 h-5 mt-1 shrink-0 text-yellow-500" />
                                            <span>{county.jail.address}</span>
                                        </div>
                                        <a
                                            href={`https://www.google.com/maps/dir/?api=1&destination=${county.geo.lat},${county.geo.lng}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-yellow-500 hover:text-white mt-4 font-bold text-sm tracking-wide transition-colors uppercase border-b border-yellow-500/30 pb-1 hover:border-white"
                                        >
                                            Get Driving Directions <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-12 pt-8 border-t border-slate-800">
                                        <div>
                                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Booking Desk</h3>
                                            <div className="flex items-center gap-3">
                                                <Phone className="w-5 h-5 text-yellow-500" />
                                                <span className="text-xl font-mono text-white tracking-tight">{county.jail.phone}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Booking Status</h3>
                                            <a
                                                href={county.jail.inmateSearchUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-yellow-600 text-white px-6 py-2 rounded-sm transition-all font-bold text-sm"
                                            >
                                                INMATE ROSTER <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. COURT INFO (If Available) */}
                            {county.richContent?.courtInfo && (
                                <div>
                                    <h2 className="text-3xl font-serif font-bold text-white mb-8 border-l-4 border-slate-700 pl-6">
                                        Bond Hearing Protocols
                                    </h2>
                                    <div className="pl-6 md:pl-8">
                                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                                            <div>
                                                <span className="block text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Presiding Court</span>
                                                <p className="text-lg text-white font-medium mb-1">{county.richContent.courtInfo.name}</p>
                                                <p className="text-slate-400 text-sm">{county.richContent.courtInfo.address}</p>
                                            </div>
                                            <div>
                                                <span className="block text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">First Appearance</span>
                                                <ul className="space-y-2">
                                                    {county.richContent.courtInfo.bondHearingTimes.map((time, idx) => (
                                                        <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                                                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div> {time}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 3. RELEASE PROCESS (If Available) */}
                            {county.richContent?.releaseProcess && (
                                <div>
                                    <h2 className="text-3xl font-serif font-bold text-white mb-8 border-l-4 border-slate-700 pl-6">
                                        Release Procedure
                                    </h2>
                                    <div className="pl-6 md:pl-8 relative space-y-12">
                                        {/* Connecting Line */}
                                        <div className="absolute left-[34px] md:left-[42px] top-4 bottom-4 w-px bg-slate-800 -z-10"></div>

                                        <div className="relative flex gap-6">
                                            <div className="w-10 h-10 bg-slate-900 border border-slate-700 text-white font-bold flex items-center justify-center shrink-0 z-10">1</div>
                                            <div>
                                                <h4 className="text-white font-bold mb-2 pt-2">Case Identification</h4>
                                                <p className="text-slate-400 leading-relaxed text-sm">{county.richContent.releaseProcess.step1}</p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-6">
                                            <div className="w-10 h-10 bg-slate-900 border border-slate-700 text-white font-bold flex items-center justify-center shrink-0 z-10">2</div>
                                            <div>
                                                <h4 className="text-white font-bold mb-2 pt-2">Bond Posting</h4>
                                                <p className="text-slate-400 leading-relaxed text-sm">{county.richContent.releaseProcess.step2}</p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-6">
                                            <div className="w-10 h-10 bg-yellow-600 border border-yellow-500 text-white font-bold flex items-center justify-center shrink-0 z-10">3</div>
                                            <div>
                                                <h4 className="text-white font-bold mb-2 pt-2">Discharge & Pick-up</h4>
                                                <p className="text-slate-400 leading-relaxed text-sm">{county.richContent.releaseProcess.step3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* RIGHT COL: TOOLS (5 Columns) */}
                        <div className="lg:col-span-5 space-y-12">

                            {/* Estimator - Urgent Action */}
                            <div>
                                <ReleaseTimeEstimator />
                            </div>

                            {/* Map - Simplified Container */}
                            <div className="border border-slate-800 bg-slate-900 h-[300px] grayscale hover:grayscale-0 transition-all duration-700">
                                <DynamicMap lat={county.geo.lat} lng={county.geo.lng} jailName={county.jail.name} />
                            </div>

                            {/* FAQ - Integrated */}
                            <div className="border-t border-slate-800 pt-12">
                                <FAQSection countyName={county.name} customFaqs={combinedFaqs} />
                            </div>

                        </div>
                    </div>
                </ContentContainer>
            </section>

            <MobileFloatingCall />
        </main>
    );
}
