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

                <a
                    href="tel:555-0123"
                    className="flex items-center gap-2 bg-urgent-red hover:bg-urgent-red-dark text-white font-bold py-2 px-4 rounded-full transition-all shadow-red-900/50 shadow-lg animate-pulse hover:animate-none"
                >
                    <Phone className="w-5 h-5 fill-current" />
                    <span>CALL NOW</span>
                </a>
            </div>
        </header>
    );
}
