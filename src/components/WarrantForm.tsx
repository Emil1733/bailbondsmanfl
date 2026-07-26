"use client";

import { useState } from 'react';
import { Phone, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function WarrantForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            inquiryType: 'warrant_check',
        };

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    }

    if (status === 'success') {
        return (
            <div className="bg-emerald-600 p-8 rounded-2xl text-white shadow-2xl text-center">
                <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-emerald-200" />
                <h3 className="text-2xl font-serif font-black mb-2">Request Received</h3>
                <p className="text-emerald-100 mb-6">
                    Your request is in our secure system. A licensed bondsman will call you from a confidential line within 5 minutes.
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">Stay by your phone.</p>
            </div>
        );
    }

    return (
        <div className="bg-red-600 p-8 rounded-2xl text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
            
            <h3 className="text-2xl font-serif font-black mb-2 relative z-10">
                Confidential Warrant Check
            </h3>
            <p className="text-sm mb-6 text-red-100 relative z-10">
                Submit your details below. We will run a secure search and call you immediately with the results.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div>
                    <label htmlFor="name" className="sr-only">Full Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Full Legal Name"
                        className="w-full px-4 py-3 rounded-xl text-slate-900 font-medium border-0 focus:ring-4 focus:ring-red-400 outline-none transition-all"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        placeholder="Phone Number (for immediate callback)"
                        className="w-full px-4 py-3 rounded-xl text-slate-900 font-medium border-0 focus:ring-4 focus:ring-red-400 outline-none transition-all"
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl font-black text-lg hover:bg-black transition-all shadow-lg disabled:opacity-70"
                >
                    {status === 'submitting' ? (
                        <span className="animate-pulse">Connecting to Secure DB...</span>
                    ) : (
                        <>
                            <ShieldAlert className="w-5 h-5 text-red-500" />
                            Run Secure Check Now
                        </>
                    )}
                </button>
            </form>
            
            <p className="text-[10px] uppercase font-black tracking-widest mt-4 text-center text-red-200 relative z-10">
                100% Attorney-Client Privilege Applied
            </p>
        </div>
    );
}
