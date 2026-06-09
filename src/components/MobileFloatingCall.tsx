import { Phone, AlertCircle } from 'lucide-react';

export default function MobileFloatingCall() {
    return (
        <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 border-t border-slate-800 bg-slate-950/95 backdrop-blur-md px-6 py-4 pb-safe flex items-center justify-between shadow-2xl shadow-black">
            {/* Status and Agency Badge */}
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-emerald-400">Online 24/7</span>
                </div>
                <div className="text-xs font-bold text-slate-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
                    <span>Immediate Dispatch</span>
                </div>
            </div>

            {/* Quick Call Action */}
            <a
                href="tel:305-831-0358"
                className="flex-1 max-w-[65%] flex items-center justify-center gap-2.5 bg-yellow-500 text-slate-950 font-black py-3.5 px-6 rounded-lg shadow-xl shadow-yellow-500/10 active:scale-95 transition-all text-base border border-yellow-400"
            >
                <Phone className="w-5 h-5 fill-current shrink-0 animate-bounce" />
                <span>Call (305) 831-0358</span>
            </a>
        </div>
    );
}
