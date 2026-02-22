import { notFound } from 'next/navigation';
import { getCounty } from '@/lib/data';
import EmergencyHeader from '@/components/EmergencyHeader';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import DynamicMap from '@/components/DynamicMap';
import ReleaseTimeEstimator from '@/components/ReleaseTimeEstimator';
import FAQSection from '@/components/FAQSection';
import MobileFloatingCall from '@/components/MobileFloatingCall';
import { ExternalLink, Clock, MapPin, Phone, AlertTriangle, ArrowRight, ShieldCheck, Siren, Zap } from 'lucide-react';
import Link from 'next/link';

// Content Container
const ContentContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`max-w-6xl mx-auto px-6 ${className}`}>
        {children}
    </div>
);

type Props = {
    params: Promise<{ slug: string; city: string }>;
};

export async function generateStaticParams() {
    const counties = (await import('@/lib/data')).counties;
    const params = [];
    
    for (const county of counties) {
        if (county.cities) {
            for (const city of county.cities) {
                params.push({
                    slug: county.slug,
                    city: city.slug,
                });
            }
        }
    }
    
    return params;
}

export async function generateMetadata({ params }: Props) {
    const { slug, city: citySlug } = await params;
    const county = await getCounty(slug);
    const city = county?.cities?.find(c => c.slug === citySlug);

    if (!county || !city) {
        return { title: 'City Not Found' };
    }

    return {
        title: `Bail Bonds ${city.name} | ${city.travelTimeToJail} Jail Release`,
        description: `Arrested in ${city.name} by ${city.policeDepartment.name}? Call now to post bond before they are transferred to ${county.jail.name} in ${county.name}. 24/7 Service.`,
        alternates: {
            canonical: `/county/${county.slug}/${city.slug}`,
        },
    };
}

export default async function CityPage({ params }: Props) {
    const { slug, city: citySlug } = await params;
    const county = await getCounty(slug);
    const city = county?.cities?.find(c => c.slug === citySlug);

    if (!county || !city) {
        notFound();
    }

    // JSON-LD Schema for Local Business (Service Area)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BailBondBusiness",
        "name": `Bail Bonds ${city.name} - Bond Florida`,
        "image": "https://bondflorida.com/og-image.jpg", // Replace with actual
        "description": `24/7 Bail Bond services in ${city.name}, FL. Immediate release from ${city.policeDepartment.name} and ${county.jail.name} transfer prevention.`,
        "url": `https://bondflorida.com/county/${county.slug}/${city.slug}`,
        "telephone": "+1-305-831-0358", // Replace with dynamic phone if available
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city.name,
            "addressRegion": "FL",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/statewidebail",
            "https://twitter.com/statewidebail"
        ]
    };

    return (
        <main className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <EmergencyHeader />

            {/* HERO: City Specific Alert */}
            <Hero
                title={<span className="font-serif text-white">Bail Bonds in <span className="text-yellow-500">{city.name}, FL</span></span>}
                subtitle={`Urgent: Prevent Transfer from ${city.policeDepartment.name}`}
                inmateSearchUrl={county.jail.inmateSearchUrl}
            />

            <section className="py-24 bg-slate-950">
                <ContentContainer>
                    <Breadcrumbs
                        items={[
                            { label: `${county.name} County`, href: `/county/${county.slug}` },
                            { label: city.name, href: `/county/${county.slug}/${city.slug}` }
                        ]}
                    />
                    <div className="grid lg:grid-cols-12 gap-16 items-start">

                        {/* LEFT COL: CONTENT */}
                        <div className="lg:col-span-7 space-y-16">

                            {/* 1. URGENCY BLOCK (The "Transfer Prevention" Hook) */}
                            <div className="bg-red-950/20 border-l-4 border-red-500 p-8 rounded-r-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertTriangle className="w-6 h-6 text-red-500" />
                                    <h2 className="text-2xl font-serif font-bold text-white">Avoid the County Transfer</h2>
                                </div>
                                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                    If your loved one was arrested in <strong>{city.name}</strong>, they are likely being held temporarily at the <span className="text-white font-bold">{city.policeDepartment.name}</span> holding cells.
                                </p>
                                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                    Standard procedure is to transfer them to the <strong>{county.jail.name}</strong>, which is a <span className="text-white font-bold">{city.travelTimeToJail}</span> transport.
                                </p>
                                <div className="bg-slate-900/50 p-4 rounded border border-slate-800 flex items-start gap-3">
                                    <Siren className="w-5 h-5 text-yellow-500 mt-1 shrink-0" />
                                    <p className="text-sm text-slate-400">
                                        <strong>Warning:</strong> Once the transport van leaves {city.name}, the booking process must restart at the county hub, adding <strong>4-8 hours</strong> to their release time. Call us immediately to post bond <em>before</em> the transfer.
                                    </p>
                                </div>
                            </div>

                            {/* Specialized Services (Matrix Linkage) */}
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-white mb-8 border-l-4 border-yellow-500 pl-6">
                                    Specialized Services in {city.name}
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4 pl-6">
                                    <Link href={`/services/dui-bail-bonds/${city.slug}`} className="group bg-slate-900 border border-slate-800 p-4 rounded-lg hover:border-yellow-500 transition-all">
                                        <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">DUI Bail Bonds</h3>
                                        <p className="text-xs text-slate-400 mt-1">Faster release from {city.policeDepartment.name} for DUI charges.</p>
                                    </Link>
                                    <Link href={`/services/domestic-violence-bail/${city.slug}`} className="group bg-slate-900 border border-slate-800 p-4 rounded-lg hover:border-yellow-500 transition-all">
                                        <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">Domestic Violence</h3>
                                        <p className="text-xs text-slate-400 mt-1">Navigating no-contact orders and first appearance hearings.</p>
                                    </Link>
                                    <Link href={`/services/traffic-warrant-bail/${city.slug}`} className="group bg-slate-900 border border-slate-800 p-4 rounded-lg hover:border-yellow-500 transition-all">
                                        <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">Traffic Warrants</h3>
                                        <p className="text-xs text-slate-400 mt-1">Clear bench warrants without extended jail stays.</p>
                                    </Link>
                                    <Link href={`/services/nebbia-hold-bail/${city.slug}`} className="group bg-slate-900 border border-slate-800 p-4 rounded-lg hover:border-yellow-500 transition-all">
                                        <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">Nebbia/Bail Source</h3>
                                        <p className="text-xs text-slate-400 mt-1">Specialized assistance for financial source hearings.</p>
                                    </Link>
                                </div>
                            </div>

                            {/* 2. LOCAL RESOURCES (City PD) */}
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-white mb-8 border-l-4 border-yellow-500 pl-6">
                                    Local Resources
                                </h2>
                                <div className="pl-6 md:pl-8 space-y-8">
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Arresting Agency</h3>
                                        <div className="text-2xl font-bold text-white mb-2">{city.policeDepartment.name}</div>
                                        <div className="flex items-start gap-3 text-slate-400">
                                            <MapPin className="w-5 h-5 mt-1 shrink-0 text-yellow-500" />
                                            <span>{city.policeDepartment.address}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-400 mt-3">
                                            <Phone className="w-5 h-5 text-yellow-500" />
                                            <span>{city.policeDepartment.phone}</span>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-slate-800">
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">County Hub (Destination)</h3>
                                        <div className="flex items-center gap-3 mb-2">
                                            <ShieldCheck className="w-5 h-5 text-slate-400" />
                                            <span className="text-lg font-bold text-slate-300">{county.jail.name}</span>
                                        </div>
                                        <Link href={`/county/${county.slug}`} className="text-yellow-500 hover:text-white text-sm font-bold flex items-center gap-2">
                                            View County Jail Details <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* RIGHT COL: TOOLS */}
                        <div className="lg:col-span-5 space-y-12">
                            {/* Efficiency Badge: E-Bonding */}
                            <div className="bg-gradient-to-r from-emerald-950/80 to-green-950/80 border border-emerald-500/30 p-5 rounded-lg flex items-center gap-4 relative overflow-hidden group shadow-lg shadow-emerald-900/10">
                                <div className="absolute inset-0 bg-emerald-500/5 blur-xl group-hover:bg-emerald-500/10 transition-all duration-700" />
                                <div className="bg-emerald-500/20 p-3 rounded-full relative z-10 shrink-0 ring-1 ring-emerald-500/40">
                                    <Zap className="w-6 h-6 text-emerald-400 fill-emerald-400/20 animate-pulse" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-bold text-white text-lg leading-none mb-1.5 flex items-center gap-2">
                                        E-Bonding Available
                                        <span className="bg-emerald-500 text-black text-[0.6rem] font-black px-1.5 py-0.5 rounded-[2px] uppercase tracking-wider">Fastest</span>
                                    </h3>
                                    <p className="text-emerald-200/80 text-sm font-medium">Approve bail via phone. <span className="text-white underline decoration-emerald-500/50 underline-offset-2">No travel</span> to {city.name} required.</p>
                                </div>
                            </div>

                            {/* Estimator - Urgent Action */}
                            <div>
                                <ReleaseTimeEstimator />
                            </div>

                            {/* Map (Pointing to County Jail as that's where they end up) */}
                            <div className="border border-slate-800 bg-slate-900 h-[300px] grayscale hover:grayscale-0 transition-all duration-700 relative group">
                                <DynamicMap lat={county.geo.lat} lng={county.geo.lng} jailName={county.jail.name} />
                                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 p-4 border border-slate-700 backdrop-blur-sm">
                                    <div className="text-xs text-slate-400 uppercase font-bold mb-1">Estimated Transport</div>
                                    <div className="text-white font-bold flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-yellow-500" />
                                        {city.travelTimeToJail} from {city.name}
                                    </div>
                                </div>
                            </div>

                            {/* FAQ - City-specific first, county as fallback */}
                            <div className="border-t border-slate-800 pt-12">
                                <FAQSection countyName={city.name} customFaqs={city.specificFaqs ?? county.richContent?.specificFaqs} />
                            </div>

                            {/* Internal Linking: Nearby Cities */}
                            <div className="border-t border-slate-800 pt-12">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Nearby Service Areas</h3>
                                <div className="flex flex-wrap gap-3">
                                    {county.cities?.filter(c => c.slug !== city.slug).map((c) => (
                                        <Link
                                            key={c.slug}
                                            href={`/county/${county.slug}/${c.slug}`}
                                            className="text-sm text-yellow-600 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-sm"
                                        >
                                            Bail Bonds {c.name}
                                        </Link>
                                    ))}
                                    <Link
                                        href={`/county/${county.slug}`}
                                        className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-1.5"
                                    >
                                        All {county.name} Locations &rarr;
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
