import Link from 'next/link';
import EmergencyHeader from '@/components/EmergencyHeader';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
            <EmergencyHeader />

            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-9xl font-serif font-bold text-yellow-500 mb-4">404</h1>
                <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
                <p className="text-lg text-slate-400 max-w-md mb-8">
                    The page you are looking for might have been moved or does not exist.
                    If you need immediate bail assistance, please call us or return home.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/"
                        className="px-8 py-3 bg-yellow-500 text-slate-900 font-bold rounded hover:bg-yellow-400 transition-colors"
                    >
                        Return Home
                    </Link>
                    <a
                        href="tel:1-800-555-0199"
                        className="px-8 py-3 border border-slate-700 text-white font-bold rounded hover:bg-slate-800 transition-colors"
                    >
                        Call 24/7 Support
                    </a>
                </div>
            </div>
        </main>
    );
}
