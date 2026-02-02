'use client';
import { useState } from 'react';
import { Clock, CheckCircle, Lock, ShieldCheck } from 'lucide-react';

export default function ReleaseTimeEstimator() {
    const [bookingTime, setBookingTime] = useState('');
    const [isWeekend, setIsWeekend] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [isFastTrack, setIsFastTrack] = useState(false);

    const calcStatus = (time: string, weekend: boolean) => {
        if (!time) {
            setShowResult(false);
            return;
        }

        const [hours] = time.split(':').map(Number);

        // Logic: Weekends are always slow. Weekdays before 2 PM are fast.
        if (weekend) {
            setIsFastTrack(false);
        } else if (hours < 14) {
            setIsFastTrack(true);
        } else {
            setIsFastTrack(false);
        }
        setShowResult(true);
    };

    const handleTimeChange = (time: string) => {
        setBookingTime(time);
        calcStatus(time, isWeekend);
    };

    const handleRunningDayChange = (weekend: boolean) => {
        setIsWeekend(weekend);
        // Only recalc if we already have a time set
        if (bookingTime) {
            calcStatus(bookingTime, weekend);
        }
    };

    return (
        <div className="bg-navy-800 border border-white/10 rounded-xl p-6 shadow-xl w-full max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-urgent-red" />
                <h3 className="text-xl font-bold text-white">Release Time Estimator</h3>
            </div>

            <div className="space-y-4">
                {/* Input Groups */}
                <div className="space-y-6">

                    {/* 1. Day Selection (Segmented Control) */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">1. Day of Arrest</label>
                        <div className="grid grid-cols-2 gap-2 p-1 bg-navy-950 rounded-lg border border-slate-800">
                            <button
                                onClick={() => handleRunningDayChange(false)}
                                className={`flex items-center justify-center gap-2 py-3 rounded-md transition-all font-bold text-sm ${!isWeekend
                                    ? 'bg-slate-800 text-white shadow-lg border border-slate-700'
                                    : 'text-slate-500 hover:text-slate-300'
                                    }`}
                            >
                                <ShieldCheck className="w-4 h-4" />
                                Weekday
                            </button>
                            <button
                                onClick={() => handleRunningDayChange(true)}
                                className={`flex items-center justify-center gap-2 py-3 rounded-md transition-all font-bold text-sm ${isWeekend
                                    ? 'bg-slate-800 text-white shadow-lg border border-slate-700'
                                    : 'text-slate-500 hover:text-slate-300'
                                    }`}
                            >
                                <Lock className="w-4 h-4" />
                                Weekend
                            </button>
                        </div>
                    </div>

                    {/* 2. Time Selection */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">2. Booking Time</label>
                        <div className="relative group">
                            <input
                                type="time"
                                value={bookingTime}
                                onChange={(e) => handleTimeChange(e.target.value)}
                                className="w-full bg-navy-950 border border-slate-700 rounded-lg py-4 px-4 pl-12 text-white text-xl font-mono focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all shadow-inner [color-scheme:dark] cursor-pointer"
                            />
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-yellow-500 transition-colors" />
                        </div>
                        <p className="text-xs text-slate-500 mt-2 text-center">
                            *Select the approximate time the defendant arrived at the station.
                        </p>
                    </div>

                </div>

                {showResult && (
                    <div className="space-y-4 pt-4 border-t border-slate-800">
                        <div className={`p-5 rounded-lg border ${isFastTrack ? 'bg-green-950/40 border-green-500/50' : 'bg-red-950/40 border-red-500/50'} relative overflow-hidden`}>
                            {/* Background Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-20 ${isFastTrack ? 'bg-green-500' : 'bg-red-500'}`} />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    {isFastTrack ? <CheckCircle className="w-6 h-6 text-green-400" /> : <Clock className="w-6 h-6 text-red-400" />}
                                    <span className={`font-bold text-lg uppercase tracking-wide ${isFastTrack ? 'text-green-400' : 'text-red-400'}`}>
                                        {isFastTrack ? 'Likely Same-Day Release' : 'Overnight Delay Likely'}
                                    </span>
                                </div>
                                <p className="text-slate-300 leading-snug">
                                    {isWeekend
                                        ? 'Courts operate on limited staff during weekends. Expect 12-24hr delays.'
                                        : isFastTrack
                                            ? 'Booking before the 2 PM cutoff usually ensures discharge before midnight.'
                                            : 'Arriving after 2 PM often means missing the magistrate schedule.'
                                    }
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Lock className="w-4 h-4 text-urgent-red" />
                                <span className="text-sm font-semibold text-white">Unlock Jail-Specific Pickup Guide</span>
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="tel"
                                    placeholder="(505) 555-0123"
                                    className="flex-1 bg-navy-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-urgent-red"
                                />
                                <button className="bg-urgent-red hover:bg-urgent-red-dark text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors">
                                    Unlock
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
