import { notFound } from 'next/navigation';
import { getService, getAllServices } from '@/lib/services';
import { getCityBySlug, getAllCities } from '@/lib/data';
import EmergencyHeader from '@/components/EmergencyHeader';
import Hero from '@/components/Hero';
import ReleaseTimeEstimator from '@/components/ReleaseTimeEstimator';
import MobileFloatingCall from '@/components/MobileFloatingCall';
import { CheckCircle2, MapPin, Clock, Siren, ArrowRight, Phone, ShieldCheck } from 'lucide-react';
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
    const services = await getAllServices();
    const citiesInfo = await getAllCities();

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

    // Customize the hook based on service type (DUI has 8-hour hold, others do not)
    const serviceHook = slug === 'dui-bail-bonds' 
        ? "Bypass the 8-hour hold."
        : "Call our 24/7 agents now.";

    return {
        title: `${cleanServiceTitle} ${city.name} | 24/7`,
        description: `Arrested for ${cleanServiceTitle} in ${city.name}? We specialize in fast release from ${city.policeDepartment.name}. ${serviceHook}`,
        keywords: [`${cleanServiceTitle} ${city.name}`, `Bail Bonds ${city.name}`, `${city.name} DUI Bail`, `${city.name} Jail Release`],
        alternates: {
            canonical: `/services/${slug}/${citySlug}`,
        },
        openGraph: {
            url: `https://bondflorida.com/services/${slug}/${citySlug}`,
            images: [{
                url: 'https://bondflorida.com/og-image.jpg',
                width: 1200,
                height: 630,
            }],
        },
    };
}

export default async function MatrixPage({ params }: Props) {
    const { slug, city: citySlug } = await params;
    const service = await getService(slug);
    const cityData = await getCityBySlug(citySlug);

    if (!service || !cityData) {
        notFound();
    }

    const { city, county } = cityData;
    const Icon = service.icon;

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.title,
        "provider": {
            "@type": "BailBondBusiness",
            "name": "Bond Florida",
            "url": "https://bondflorida.com"
        },
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "description": `Specizalized ${service.title} services for ${city.name}, FL.`,
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Bail Bond Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": `${service.title} in ${city.name}`
                    }
                }
            ]
        }
    };

    return (
        <main className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <EmergencyHeader />

            {/* Matrix Hero */}
            <Hero
                title={
                    <span className="font-serif text-white">
                        {service.title.replace(' Florida', '')} in <span className="text-yellow-500">{city.name}</span>
                    </span>
                }
                subtitle={`Licensed Specialist for ${city.policeDepartment.name} Cases`}
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
                                        If you or a loved one is facing <strong>{service.title.replace(' Bail Bonds Florida', '')}</strong> charges in {city.name}, time is critical.
                                        Arrests by the <strong>{city.policeDepartment.name}</strong> are processed locally before transport to <strong>{county.jail.name}</strong>.
                                    </p>
                                    <p className="text-slate-400 mb-6 italic border-l-2 border-slate-700 pl-4">
                                        {city.description}
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

                            {/* 2. Service Specifics */}
                            <div className="prose prose-lg prose-invert max-w-none">
                                <h3 className="text-white font-serif">Why {service.title} is Different</h3>
                                <p>{service.content.intro}</p>

                                <ul>
                                    {service.content.keyPoints.map((point, idx) => (
                                        <li key={idx} className="text-slate-300">
                                            <strong className="text-yellow-500">{point}</strong>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 3. Local + Service Process */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 font-serif">Release Process for {city.name}</h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-yellow-600 text-white font-bold flex items-center justify-center shrink-0">1</div>
                                        <div className="bg-slate-900 p-4 rounded border border-slate-800 w-full">
                                            <h4 className="font-bold text-white mb-1">Booking at {city.policeDepartment.name}</h4>
                                            <p className="text-sm text-slate-400">Initial fingerprinting and processing occurs at {city.policeDepartment.address}.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-yellow-600 text-white font-bold flex items-center justify-center shrink-0">2</div>
                                        <div className="bg-slate-900 p-4 rounded border border-slate-800 w-full">
                                            <h4 className="font-bold text-white mb-1">Specific Charge Processing</h4>
                                            <p className="text-sm text-slate-400">
                                                For {service.title.replace(' Bail Bonds Florida', '')}, specific holds (like the DUI 8-hour rule or DV no-contact) must be satisfied before bond is set.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-yellow-600 text-white font-bold flex items-center justify-center shrink-0">3</div>
                                        <div className="bg-slate-900 p-4 rounded border border-slate-800 w-full">
                                            <h4 className="font-bold text-white mb-1">Fast Release from {county.jail.name}</h4>
                                            <p className="text-sm text-slate-400">We post bond immediately at the county hub to ensure release the moment they are eligible.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Tools */}
                        <div className="lg:col-span-5 space-y-12">
                            {/* Estimator - Urgent Action */}
                            <div>
                                <ReleaseTimeEstimator />
                            </div>

                            {/* Service Details Box */}
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                    <Icon className="w-5 h-5 text-yellow-500" />
                                    About {service.title.replace(' Florida', '')}
                                </h3>
                                <div className="space-y-4 text-sm text-slate-400">
                                    {service.content.faq.slice(0, 2).map((item, idx) => (
                                        <div key={idx}>
                                            <p className="font-bold text-slate-300 mb-1">{item.question}</p>
                                            <p>{item.answer}</p>
                                        </div>
                                    ))}
                                </div>
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
                                    {['dui-bail-bonds', 'domestic-violence-bail', 'traffic-warrant-bail', 'nebbia-hold-bail']
                                        .filter(s => s !== service.slug)
                                        .map(s => (
                                            <Link 
                                                key={s} 
                                                href={`/services/${s}/${city.slug}`}
                                                className="block text-sm text-slate-400 hover:text-yellow-500 transition-colors"
                                            >
                                                {s.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} &rarr;
                                            </Link>
                                        ))
                                    }
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
