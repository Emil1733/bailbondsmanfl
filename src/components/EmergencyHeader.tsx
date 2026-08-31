import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function EmergencyHeader() {
    return (
        <header className="sticky top-0 z-50 w-full bg-navy-950/90 backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white transition-all">
                        <span className="text-yellow-500">Bond</span>Florida
                    </div>
                </Link>

                <div className="flex items-center gap-4">
                    <Link href="/locations" className="hidden md:block text-slate-300 hover:text-white font-medium transition-colors">
                        County Directory
                    </Link>
                    <Link href="/contact" className="hidden sm:block text-slate-300 hover:text-white font-medium transition-colors">
                        Contact
                    </Link>
                    <a
                        href="tel:+13058310358"
                        className="flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 font-bold text-white transition-colors hover:bg-slate-700"
                    >
                        <Phone className="w-5 h-5 fill-current" />
                        <span>(305) 831-0358</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
