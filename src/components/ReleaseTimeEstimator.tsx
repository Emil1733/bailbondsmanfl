'use client';

import { FormEvent, useState } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@vercel/analytics';
import { CheckCircle, Clock, Lock, Phone, ShieldCheck } from 'lucide-react';

const PHONE_NUMBER = '(305) 831-0358';
const PHONE_HREF = 'tel:+13058310358';

const facilityByArea: Record<string, string> = {
    'miami-dade': 'Turner Guilford Knight Correctional Center', broward: 'Broward County Main Jail',
    'palm-beach': 'Palm Beach County Main Detention Center', hillsborough: 'Orient Road Jail',
    orange: 'Orange County Booking and Release Center', duval: 'Duval County Pre-Trial Detention Facility',
    lee: 'Lee County Jail Core Facility', pinellas: 'Pinellas County Jail', pasco: 'Land O\' Lakes Detention Center',
    polk: 'Polk County Sheriff Processing Center', 'indian-river': 'Indian River County Jail',
};

const facilityByJailSlug: Record<string, string> = {
    'tgk-correctional-center': 'Turner Guilford Knight Correctional Center',
    'metro-west-detention-center': 'Metro West Detention Center',
    'broward-county-main-jail': 'Broward County Main Jail',
    'palm-beach-county-main-detention-center': 'Palm Beach County Main Detention Center',
    'orient-road-jail': 'Orient Road Jail', 'falkenburg-road-jail': 'Falkenburg Road Jail',
    'orange-county-booking-and-release-center': 'Orange County Booking and Release Center',
    'duval-county-pre-trial-detention-facility': 'Duval County Pre-Trial Detention Facility',
    'lee-county-core-facility': 'Lee County Jail Core Facility', 'pinellas-county-jail': 'Pinellas County Jail',
    'land-o-lakes-detention-center': 'Land O\' Lakes Detention Center',
};

function formatSlug(value: string) {
    return value.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function getFacility(pathname: string) {
    const segments = pathname.split('/').filter(Boolean);
    if (segments[0] === 'jail' && segments[1]) return facilityByJailSlug[segments[1]] || formatSlug(segments[1]);
    if (segments[0] === 'county' && segments[1]) return facilityByArea[segments[1]] || `${formatSlug(segments[1])} County Jail`;
    if (segments[0] === 'services' && segments[2]) return `${formatSlug(segments[2])} release facility`;
    return 'the assigned release facility';
}

export default function ReleaseTimeEstimator() {
    const pathname = usePathname();
    const [bookingTime, setBookingTime] = useState('');
    const [isWeekend, setIsWeekend] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [isFastTrack, setIsFastTrack] = useState(false);
    const [phone, setPhone] = useState('');
    const [consent, setConsent] = useState(false);
    const [website, setWebsite] = useState('');
    const [startedAt] = useState(() => Date.now());
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const facilityName = getFacility(pathname);

    const calculate = (time: string, weekend: boolean) => {
        if (!time) return setShowResult(false);
        const [hours] = time.split(':').map(Number);
        setIsFastTrack(!weekend && hours < 14);
        setShowResult(true);
    };

    const selectDay = (weekend: boolean) => {
        setIsWeekend(weekend);
        if (bookingTime) calculate(bookingTime, weekend);
    };

    const handleUnlock = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('submitting');
        setErrorMessage('');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phone, consent, website, startedAt, source: 'release-time-estimator',
                    context: `Page: ${pathname}; Facility: ${facilityName}; Day: ${isWeekend ? 'weekend' : 'weekday'}; Booking time: ${bookingTime}; Estimate: ${isFastTrack ? 'same-day possible' : 'delay likely'}`,
                }),
            });
            const result = (await response.json()) as { message?: string };
            if (!response.ok) throw new Error(result.message || 'Unable to unlock the guide.');
            setStatus('success');
            track('release_guide_unlocked', { page: pathname, facility: facilityName });
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Unable to unlock the guide.');
            track('release_guide_error', { page: pathname });
        }
    };

    return (
        <div className="bg-navy-800 border border-white/10 rounded-xl p-6 shadow-xl w-full max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-4"><Clock className="w-6 h-6 text-urgent-red" /><h3 className="text-xl font-bold text-white">Release Time Estimator</h3></div>
            <div className="space-y-4">
                <fieldset>
                    <legend className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">1. Day of Arrest</legend>
                    <div className="grid grid-cols-2 gap-2 p-1 bg-navy-950 rounded-lg border border-slate-800">
                        <button type="button" aria-pressed={!isWeekend} onClick={() => selectDay(false)} className={`flex items-center justify-center gap-2 py-3 rounded-md font-bold text-sm ${!isWeekend ? 'bg-slate-800 text-white border border-slate-700' : 'text-slate-500 hover:text-slate-300'}`}><ShieldCheck className="w-4 h-4" /> Weekday</button>
                        <button type="button" aria-pressed={isWeekend} onClick={() => selectDay(true)} className={`flex items-center justify-center gap-2 py-3 rounded-md font-bold text-sm ${isWeekend ? 'bg-slate-800 text-white border border-slate-700' : 'text-slate-500 hover:text-slate-300'}`}><Lock className="w-4 h-4" /> Weekend</button>
                    </div>
                </fieldset>
                <div>
                    <label htmlFor="booking-time" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">2. Booking Time</label>
                    <input id="booking-time" type="time" autoComplete="off" value={bookingTime} onChange={(event) => { setBookingTime(event.target.value); calculate(event.target.value, isWeekend); }} className="w-full bg-navy-950 border border-slate-700 rounded-lg py-4 px-4 text-white text-xl font-mono focus:outline-none focus:border-yellow-500 [color-scheme:dark]" />
                    <p className="text-xs text-slate-500 mt-2 text-center">Estimate only; actual timing depends on booking, court, and facility processing.</p>
                </div>

                {showResult && <div className="space-y-4 pt-4 border-t border-slate-800">
                    <div className={`p-5 rounded-lg border ${isFastTrack ? 'bg-green-950/40 border-green-500/50' : 'bg-red-950/40 border-red-500/50'}`} role="status">
                        <div className="flex items-center gap-3 mb-3">{isFastTrack ? <CheckCircle className="w-6 h-6 text-green-400" /> : <Clock className="w-6 h-6 text-red-400" />}<span className={`font-bold text-lg uppercase ${isFastTrack ? 'text-green-400' : 'text-red-400'}`}>{isFastTrack ? 'Same-Day Release May Be Possible' : 'A Longer Delay May Occur'}</span></div>
                        <p className="text-slate-300">{isWeekend ? 'Weekend staffing and court schedules can extend processing.' : isFastTrack ? 'Earlier booking may leave more time for bond posting and discharge processing.' : 'Later booking may extend processing into the next court or staffing period.'}</p>
                    </div>

                    {status === 'success' ? <div className="rounded-lg border border-green-500/50 bg-green-950/30 p-4" role="status">
                        <div className="flex items-center gap-2 text-green-400 font-bold"><CheckCircle className="w-5 h-5" /> Pickup guide unlocked</div>
                        <h4 className="text-white font-bold mt-3">{facilityName}</h4>
                        <ol className="list-decimal pl-5 mt-2 space-y-2 text-sm text-slate-300"><li>Wait for confirmed discharge notification before traveling.</li><li>Call to confirm the correct release lobby.</li><li>Bring government-issued photo ID and keep your phone available.</li></ol>
                        <a href={PHONE_HREF} onClick={() => track('release_guide_call_clicked', { page: pathname })} className="mt-4 inline-flex items-center gap-2 text-yellow-400 font-bold hover:text-white"><Phone className="w-4 h-4" /> Confirm pickup: {PHONE_NUMBER}</a>
                    </div> : <form onSubmit={handleUnlock} className="border-t border-white/10 pt-4 space-y-3">
                        <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-urgent-red" /><span className="text-sm font-semibold text-white">Unlock Facility Pickup Guide</span></div>
                        <label htmlFor="estimator-phone" className="sr-only">Phone number</label>
                        <input id="estimator-phone" type="tel" autoComplete="tel" inputMode="tel" enterKeyHint="done" required placeholder="Phone number" value={phone} onChange={(event) => setPhone(event.target.value)} className="w-full bg-navy-950 border border-slate-700 rounded-lg px-3 py-3 text-sm text-white focus:outline-none focus:border-urgent-red" />
                        <div className="hidden" inert><label htmlFor="estimator-website">Website</label><input id="estimator-website" type="url" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></div>
                        <label className="flex items-start gap-2 text-xs text-slate-300"><input type="checkbox" required checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-0.5" /><span>I agree that a Bond Florida agent may contact me about this request by phone or text.</span></label>
                        <button type="submit" disabled={status === 'submitting'} className="w-full bg-urgent-red hover:bg-urgent-red-dark disabled:opacity-60 text-white text-sm font-bold px-4 py-3 rounded-lg">{status === 'submitting' ? 'Unlocking…' : 'Unlock Guide'}</button>
                        {status === 'error' && <p className="text-sm text-red-300" role="alert">{errorMessage} <a href={PHONE_HREF} className="font-bold underline">Call {PHONE_NUMBER}</a>.</p>}
                    </form>}
                </div>}
            </div>
        </div>
    );
}
