'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-800 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left group"
            >
                <span className="text-lg font-serif font-medium text-slate-200 group-hover:text-yellow-500 transition-colors pr-8">{question}</span>
                {isOpen ? <Minus className="w-5 h-5 text-yellow-500 min-w-[20px]" /> : <Plus className="w-5 h-5 text-slate-600 group-hover:text-yellow-500 min-w-[20px]" />}
            </button>

            {isOpen && (
                <div className="pb-6 text-slate-400 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
}

interface FAQSectionProps {
    countyName: string;
    customFaqs?: { question: string; answer: string }[];
}

export default function FAQSection({ countyName, customFaqs }: FAQSectionProps) {
    const defaultFaqs = [
        {
            question: `How do I post bail in ${countyName}?`,
            answer: `You can post bail locally at the county detention center or court clerk's office. We provide 24/7 surety bond services to speed up this process, usually for just 10% of the total bond amount.`
        },
        {
            question: `What are the visiting hours for the jail in ${countyName}?`,
            answer: `Visiting hours vary by facility. Please check the specific jail information section above for the most current schedule and rules for video or in-person visitation.`
        },
        {
            question: `Can I do an inmate search online for ${countyName}?`,
            answer: `Yes, use the "Inmate Search" link provided on this page to access the official county roster. If you can't find them, give us a call and we can help locate them in the system.`
        },
        {
            question: `How long does it take to get released in ${countyName}?`,
            answer: `Release times vary based on booking volume. If processed before 2 PM, release often happens same-day. After 2 PM or on weekends, it may take longer. Our agents work to expedite this immediately.`
        }
    ];

    // Use custom FAQs if provided, otherwise fallback to defaults
    const displayFaqs = (customFaqs && customFaqs.length > 0) ? customFaqs : defaultFaqs;

    return (
        <div>
            <h2 className="text-4xl font-serif font-bold text-white mb-12">Common Questions</h2>
            <div className="space-y-0">
                {displayFaqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
}
