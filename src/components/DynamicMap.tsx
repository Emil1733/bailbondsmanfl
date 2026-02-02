'use client';

import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./LeafletMap'), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-slate-900 animate-pulse rounded-xl border border-white/10 flex items-center justify-center text-slate-500">Loading Map...</div>
});

export default LeafletMap;
