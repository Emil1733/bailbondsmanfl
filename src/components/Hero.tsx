import Link from 'next/link';
import { Search, Gavel } from 'lucide-react';

import { ReactNode } from 'react';

interface HeroProps {
    title?: ReactNode;
    subtitle?: ReactNode;
    inmateSearchUrl?: string;
}

export default function Hero({ title, subtitle, inmateSearchUrl }: HeroProps) {
    const searchHref = inmateSearchUrl || "#inmate-search";
    const isExternal = searchHref.startsWith('http');

    return (
        <section className="relative w-full py-16 md:py-32 overflow-hidden border-b border-white/5">
            <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
                <div className="mb-12">
                    <span className="block text-yellow-500 font-bold tracking-widest text-sm uppercase mb-4">{subtitle || "Bail Bonds & Inmate Search"}</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        {title || <span>Fastest Way to <span className="text-slate-400 italic">Get Out</span></span>}
                    </h1>
                    <p className="max-w-2xl mx-auto text-slate-400 text-xl leading-relaxed">
                        Statewide coverage. 24/7 Service. Immediate Release Processing.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <Link
                        href={searchHref}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="group flex flex-col items-center justify-center p-10 bg-slate-900 border border-slate-800 hover:border-yellow-500 transition-all rounded-sm"
                    >
                        <Search className="w-8 h-8 text-slate-500 group-hover:text-yellow-500 mb-4 transition-colors" />
                        <span className="text-xl font-serif font-bold text-white">Find an Inmate</span>
                        <span className="text-sm text-slate-500 mt-2">Check booking status & charges</span>
                    </Link>

                    <Link
                        href="tel:555-0123"
                        className="group flex flex-col items-center justify-center p-10 bg-yellow-600/10 border border-yellow-600/50 hover:bg-yellow-600 hover:border-yellow-600 transition-all rounded-sm"
                    >
                        <Gavel className="w-8 h-8 text-yellow-500 group-hover:text-white mb-4 transition-colors" />
                        <span className="text-xl font-serif font-bold text-yellow-500 group-hover:text-white transition-colors">Emergency Release</span>
                        <span className="text-sm text-yellow-500/60 group-hover:text-white/80 mt-2 transition-colors">Speak to an agent immediately</span>
                    </Link>
                </div>
            </div>

            {/* Subtle Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-slate-900/50 to-transparent -z-10 pointer-events-none"></div>
        </section>
    );
}
