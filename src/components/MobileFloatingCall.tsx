import { Phone } from 'lucide-react';

export default function MobileFloatingCall() {
    return (
        <div className="fixed bottom-6 right-6 md:hidden z-50">
            <a
                href="tel:555-0123"
                className="flex items-center gap-2 bg-urgent-red text-white font-bold py-3 px-6 rounded-full shadow-2xl shadow-urgent-red/50 animate-pulse-fast hover:scale-105 transition-transform"
            >
                <Phone className="w-6 h-6 fill-current" />
                <span>CALL NOW</span>
            </a>
        </div>
    );
}
