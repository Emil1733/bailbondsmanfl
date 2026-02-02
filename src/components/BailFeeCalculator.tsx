'use client';
import { useState } from 'react';
import { DollarSign, Calculator } from 'lucide-react';

export default function BailFeeCalculator() {
    const [bailAmount, setBailAmount] = useState<string>('');
    const [fee, setFee] = useState<number | null>(null);

    const calculateFee = (amount: string) => {
        const val = parseFloat(amount.replace(/,/g, ''));
        if (!isNaN(val)) {
            setFee(val * 0.10); // 10% standard fee
        } else {
            setFee(null);
        }
        setBailAmount(amount);
    };

    return (
        <div className="w-full">
            <div className="space-y-6">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Total Bail Amount Set by Court</label>
                    <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            type="number"
                            placeholder="e.g. 5000"
                            value={bailAmount}
                            onChange={(e) => calculateFee(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-none py-4 pl-12 pr-4 text-white text-lg focus:outline-none focus:border-yellow-500 transition-all font-mono"
                        />
                    </div>
                </div>

                {fee !== null && (
                    <div className="py-4 border-l-2 border-yellow-500 pl-4 animate-in fade-in">
                        <div className="text-sm text-slate-400">Statutory Premium (10%)</div>
                        <div className="text-4xl font-serif font-bold text-white mt-1">
                            ${fee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                        <p className="text-xs text-slate-500 mt-2">*Regulated minimum rate.</p>
                    </div>
                )}

                <button className="w-full bg-slate-800 text-slate-200 font-bold py-4 hover:bg-yellow-600 hover:text-white transition-all uppercase tracking-widest text-sm border border-slate-700 hover:border-yellow-600">
                    Get Approved
                </button>
            </div>
        </div>
    );
}
