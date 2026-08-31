import { notFound } from 'next/navigation';
import { getService, getAllServices } from '@/lib/services';
import { getCityBySlug, getAllCities } from '@/lib/data';
import EmergencyHeader from '@/components/EmergencyHeader';
import Hero from '@/components/Hero';
import MobileFloatingCall from '@/components/MobileFloatingCall';
import { MapPin, Siren, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { jailGuideByCounty } from '@/lib/internal-links';
import { PROGRAMMATIC_INDEXING_ENABLED, validateProgrammaticInputs } from '@/lib/programmatic-seo';

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
    const services = await getAllServices();
    const citiesInfo = await getAllCities();
    validateProgrammaticInputs(services, citiesInfo);

    // Create the Matrix: All Services x All Cities
    const params = [];
    for (const service of services) {
        for (const info of citiesInfo) {
            params.push({
                slug: service.slug,
                city: info.city.slug,
            });
        }
    }
    return params;
}

export async function generateMetadata({ params }: Props) {
    const { slug, city: citySlug } = await params;
    const service = await getService(slug);
    const cityData = await getCityBySlug(citySlug);

    if (!service || !cityData) {
        return { title: 'Not Found' };
    }

    const { city } = cityData;

    // Clean "Florida" from the service title for the geo-page (e.g. "DUI Bail Bonds Florida" -> "DUI Bail Bonds")
    const cleanServiceTitle = service.title.replace(' Florida', '');

    const metadata = pageMetadata({
        title: `${cleanServiceTitle} ${city.name} Local Guide`,
        description: `Local ${cleanServiceTitle} directory for ${city.name}, including the arresting agency, county jail destination, and official inmate-search resource.`,
        keywords: [`${cleanServiceTitle} ${city.name}`, `Bail Bonds ${city.name}`, `${city.name} DUI Bail`, `${city.name} Jail Release`],
        path: `/services/${slug}/${citySlug}`,
    });

    return {
        ...metadata,
        robots: {
            index: PROGRAMMATIC_INDEXING_ENABLED,
            follow: true,
            googleBot: { index: PROGRAMMATIC_INDEXING_ENABLED, follow: true },
        },
    };
}

export default async function MatrixPage({ params }: Props) {
    const { slug, city: citySlug } = await params;
    const service = await getService(slug);
    const services = await getAllServices();
    const cityData = await getCityBySlug(citySlug);

    if (!service || !cityData) {
        notFound();
    }

    const { city, county } = cityData;
    const Icon = service.icon;
    const jailGuide = jailGuideByCounty[county.slug];

    return (
        <main className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
            <EmergencyHeader />

            {/* Matrix Hero */}
            <Hero
                title={
                    <span className="font-serif text-white">
                        {service.title.replace(' Florida', '')} in <span className="text-yellow-500">{city.name}</span>
                    </span>
                }
                subtitle={`Local booking contacts for ${city.policeDepartment.name} and ${county.jail.name}`}
                inmateSearchUrl={county.jail.inmateSearchUrl}
            />

            <section className="py-20 bg-slate-950">
                <ContentContainer>
                    <div className="grid lg:grid-cols-12 gap-16">

                        {/* LEFT: Content */}
                        <div className="lg:col-span-7 space-y-16">

                            {/* 1. The Local Hook */}
                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <MapPin className="w-6 h-6 text-yellow-500" />
                                        Arrested in {city.name}?
                                    </h2>
                                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                        This directory combines <strong>{service.title.replace(' Bail Bonds Florida', '')}</strong> information with booking contacts for {city.name}.
                                        Confirm the current custody location through the official county inmate search before traveling to a facility.
                                    </p>
                                    <div className="flex items-center gap-4 text-sm font-bold text-slate-400 bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                                        <div className="flex items-center gap-2">
                                            <Siren className="w-4 h-4 text-red-500" />
                                            {city.policeDepartment.name}
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-slate-600" />
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck className="w-4 h-4 text-green-500" />
                                            {county.jail.name}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Service overview */}
                            <div className="prose prose-lg prose-invert max-w-none">
                                <h3 className="text-white font-serif">Review the statewide service information</h3>
                                <p>
                                    Bond requirements depend on the charge, court order, and current booking status. Review the main service guide before relying on a local combination page.
                                </p>
                                <Link href={`/services/${service.slug}`} className="font-bold text-yellow-500 hover:text-white">
                                    Read the complete {service.title} guide &rarr;
                                </Link>
                            </div>

                            {/* 3. Local + Service Process */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 font-serif">Verification steps for {city.name}</h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-yellow-500 text-slate-950 font-bold flex items-center justify-center shrink-0">1</div>
                                        <div className="bg-slate-900 p-4 rounded border border-slate-800 w-full">
                                            <h4 className="font-bold text-white mb-1">Confirm the booking location</h4>
                                            <p className="text-sm text-slate-400">Contact {city.policeDepartment.name} at {city.policeDepartment.phone}, or check the official county inmate roster.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-yellow-500 text-slate-950 font-bold flex items-center justify-center shrink-0">2</div>
                                        <div className="bg-slate-900 p-4 rounded border border-slate-800 w-full">
                                            <h4 className="font-bold text-white mb-1">Review service requirements</h4>
                                            <p className="text-sm text-slate-400">
                                                Eligibility and release conditions vary by the charge and court order. Confirm the case details before completing paperwork or payment.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-yellow-500 text-slate-950 font-bold flex items-center justify-center shrink-0">3</div>
                                        <div className="bg-slate-900 p-4 rounded border border-slate-800 w-full">
                                            <h4 className="font-bold text-white mb-1">County booking destination</h4>
                                            <p className="text-sm text-slate-400">The county directory identifies {county.jail.name} as the primary jail resource for this service area. Verify custody before arrival.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Tools */}
                        <div className="lg:col-span-5 space-y-12">
                            {/* Service Details Box */}
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                    <Icon className="w-5 h-5 text-yellow-500" />
                                    About {service.title.replace(' Florida', '')}
                                </h3>
                                <p className="text-sm text-slate-400">Use the statewide guide for service-specific requirements, limitations, and questions.</p>
                                <div className="mt-6 pt-6 border-t border-slate-800">
                                    <Link href={`/services/${service.slug}`} className="text-yellow-500 font-bold text-sm hover:text-white flex items-center gap-2">
                                        View Full Rules <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Other Services in this City (Horizontal Matrix Linking) */}
                            <div className="bg-slate-900/30 border border-slate-800/50 p-6 rounded-xl">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Other Services in {city.name}</h3>
                                <div className="space-y-3">
                                    {services
                                        .filter((relatedService) => relatedService.slug !== service.slug)
                                        .map((relatedService) => (
                                            <Link 
                                                key={relatedService.slug}
                                                href={`/services/${relatedService.slug}/${city.slug}`}
                                                className="block text-sm text-slate-400 hover:text-yellow-500 transition-colors"
                                            >
                                                {relatedService.title.replace(' Florida', '')} in {city.name} &rarr;
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="bg-slate-900/30 border border-slate-800/50 p-6 rounded-xl">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Local booking resources</h3>
                                <div className="space-y-3 text-sm">
                                    <Link href={`/county/${county.slug}/${city.slug}`} className="block text-yellow-500 hover:text-white">
                                        {city.name} arrest and transfer guide &rarr;
                                    </Link>
                                    <Link href={`/county/${county.slug}`} className="block text-yellow-500 hover:text-white">
                                        {county.name} jail and booking hub &rarr;
                                    </Link>
                                    {jailGuide && (
                                        <Link href={jailGuide} className="block text-yellow-500 hover:text-white">
                                            {county.jail.name} release guide &rarr;
                                        </Link>
                                    )}
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
