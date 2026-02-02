import { notFound } from 'next/navigation';
import { getService, getAllServices } from '@/lib/services';
import EmergencyHeader from '@/components/EmergencyHeader';
import Hero from '@/components/Hero';
import MobileFloatingCall from '@/components/MobileFloatingCall';
import { CheckCircle2, AlertTriangle, ArrowRight, Shield, Phone, HelpCircle } from 'lucide-react';
import Link from 'next/link';

// Content Container
const ContentContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`max-w-5xl mx-auto px-6 ${className}`}>
        {children}
    </div>
);

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const services = await getAllServices();
    return services.map(service => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const service = await getService(slug);

    if (!service) {
        return { title: 'Service Not Found' };
    }

    return {
        title: `${service.title} | 24/7 Specialist & Warrant Check`,
        description: service.metaDescription,
        keywords: [service.title, 'Florida Bail Bonds', '24/7 Bail Bonds', 'Emergency Release'],
        alternates: {
            canonical: `/services/${service.slug}`,
        },
        openGraph: {
            title: service.title,
            description: service.metaDescription,
            url: `https://bondflorida.com/services/${service.slug}`,
            siteName: 'Bond Florida',
            images: [
                {
                    url: 'https://bondflorida.com/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
            type: 'website',
        },
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = await getService(slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    // JSON-LD Service Schema
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
            "@type": "State",
            "name": "Florida"
        },
        "description": service.metaDescription,
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Bail Bond Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": service.title
                    }
                }
            ]
        },
        ...(service.speakableSummary && {
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["#voice-summary"]
            }
        })
    };
    };

return (
    <main className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <EmergencyHeader />

        {/* Custom Hero */}
        <Hero
            title={<span className="font-serif text-white">{service.title}</span>}
            subtitle={service.shortDescription}
            inmateSearchUrl="/contact" // Redirect to contact or general search
        />

        <section className="py-20 bg-slate-950">
            <ContentContainer>
                <div className="grid lg:grid-cols-12 gap-16">

                    {/* MAIN CONTENT (8 Cols) */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* 0. Voice Search Snippet (Speakable) */}
                        {service.speakableSummary && (
                            <div id="voice-summary" className="bg-slate-900 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                                <h3 className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">Quick Answer</h3>
                                <p className="text-lg text-white font-medium leading-relaxed">
                                    {service.speakableSummary}
                                </p>
                            </div>
                        )}

                        {/* 1. Intro / Hook */}
                        <div className="prose prose-lg prose-invert max-w-none">
                            <p className="text-xl leading-relaxed text-slate-300 border-l-4 border-yellow-500 pl-6">
                                {service.content.intro}
                            </p>
                        </div>

                        {/* 2. Key Points Grid */}
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                                <Shield className="w-6 h-6 text-yellow-500" />
                                Why This Requires a Specialist
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.content.keyPoints.map((point, idx) => (
                                    <div key={idx} className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                        <span className="font-medium text-slate-200">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. The Process (Rich Content) */}
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-white mb-8 flex items-center gap-3">
                                <ArrowRight className="w-6 h-6 text-yellow-500" />
                                The Release Process
                            </h2>
                            <div className="space-y-6 relative">
                                {/* Vertical Line */}
                                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-800 -z-10"></div>

                                {service.content.processSteps.map((step, idx) => (
                                    <div key={idx} className="flex gap-6 group">
                                        <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-700 text-slate-300 font-bold flex items-center justify-center shrink-0 group-hover:border-yellow-500 group-hover:text-yellow-500 transition-colors z-10">
                                            {idx + 1}
                                        </div>
                                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 w-full hover:border-slate-600 transition-colors">
                                            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-slate-400">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. Common Charges */}
                        <div>
                            <div className="bg-red-950/20 border border-red-900/30 p-8 rounded-xl">
                                <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    Common Charges We Handle
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {service.content.commonCharges.map((charge, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-red-900/20 text-red-200 rounded-full text-sm font-medium border border-red-900/30">
                                            {charge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* SIDEBAR (4 Cols) */}
                    <div className="lg:col-span-4 space-y-12">

                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 p-8 rounded-xl shadow-2xl text-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                            <Icon className="w-16 h-16 text-white/90 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-2">Need Help Now?</h3>
                            <p className="text-yellow-100 mb-8 font-medium">
                                Our specialists are standing by to handle {service.title} cases immediately.
                            </p>
                            <a
                                href="tel:555-0123"
                                className="block w-full bg-white text-yellow-800 font-bold py-4 rounded-lg hover:bg-yellow-50 transition-colors shadow-lg flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5 fill-current" />
                                Call 24/7 Agent
                            </a>
                        </div>

                        {/* Mini FAQ */}
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-slate-400" />
                                Quick Answers
                            </h3>
                            <div className="space-y-6">
                                {service.content.faq.map((item, idx) => (
                                    <div key={idx}>
                                        <h4 className="font-bold text-slate-200 text-sm mb-2">{item.question}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.answer}</p>
                                    </div>
                                ))}
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
