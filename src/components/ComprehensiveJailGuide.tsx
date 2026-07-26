'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Scale, BookOpen, AlertCircle, FileText, Info } from 'lucide-react';

export interface GuideSection {
    id: string;
    title: string;
    icon: 'AlertCircle' | 'Scale' | 'FileText' | 'Info';
    content: string[];
}

interface ComprehensiveJailGuideProps {
    jailName: string;
    intro: string[];
    sections: GuideSection[];
}

export default function ComprehensiveJailGuide({ jailName, intro, sections }: ComprehensiveJailGuideProps) {
    const [isOpen, setIsOpen] = useState(false);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'AlertCircle': return <AlertCircle className="w-5 h-5 text-yellow-500" />;
            case 'Scale': return <Scale className="w-5 h-5 text-yellow-500" />;
            case 'FileText': return <FileText className="w-5 h-5 text-yellow-500" />;
            case 'Info':
            default: return <Info className="w-5 h-5 text-yellow-500" />;
        }
    };

    return (
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-slate-800/50 hover:bg-slate-800 transition-colors group text-left"
            >
                <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-yellow-500" />
                    <h2 className="text-xl font-serif font-bold text-white group-hover:text-yellow-500 transition-colors">
                        Comprehensive Legal & Facility Guide for {jailName}
                    </h2>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-wider">
                    {isOpen ? 'Close Guide' : 'Expand Guide'}
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
            </button>

            {isOpen && (
                <div className="p-8 prose prose-invert max-w-none text-slate-300">
                    {intro.map((p, idx) => (
                        <p key={idx} className={idx === 0 ? "lead text-lg mb-6" : "mb-6"} dangerouslySetInnerHTML={{ __html: p }}></p>
                    ))}

                    <div className="space-y-8 mt-8">
                        {sections.map((sec) => (
                            <div key={sec.id} className="bg-slate-950 p-6 rounded-lg border border-slate-800">
                                <h3 className="flex items-center gap-2 text-white font-serif mt-0 mb-4">
                                    {getIcon(sec.icon)}
                                    {sec.title}
                                </h3>
                                {sec.content.map((p, idx) => (
                                    <p key={idx} className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: p }}></p>
                                ))}
                            </div>
                        ))}
                    </div>

                    <hr className="border-slate-800 my-8" />
                    
                    <p className="text-sm text-slate-500 italic text-center">
                        Disclaimer: The information provided in this local facility guide is for educational purposes only and does not constitute legal advice. Facility policies, state statutes, and county court procedures are subject to change. Always consult with a licensed Florida attorney regarding specific criminal charges in this jurisdiction.
                    </p>
                </div>
            )}
        </div>
    );
}
