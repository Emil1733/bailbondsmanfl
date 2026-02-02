import { ScrollText, Gavel, Scale } from 'lucide-react';

const ContentContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`max-w-4xl mx-auto px-6 ${className}`}>
        {children}
    </div>
);

export default function AuthorityArticle() {
    return (
        <section className="py-24 bg-slate-950 border-t border-white/5">
            <ContentContainer>
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-900/10 border border-yellow-500/20 rounded-full text-yellow-500 text-sm font-bold uppercase tracking-widest mb-6">
                        <ScrollText className="w-4 h-4" /> Florida Statute 903
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Understanding Florida Bail Laws</h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Bail in Florida is strictly regulated by the Department of Financial Services.
                        We operate in full compliance with state statutes to ensure your rights are protected.
                    </p>
                </div>

                {/* Article Content */}
                <div className="prose prose-invert prose-lg mx-auto text-slate-400">
                    <h3 className="flex items-center gap-3 text-white font-serif text-2xl mt-0">
                        <Gavel className="w-6 h-6 text-yellow-500" />
                        The 10% Premium Rule
                    </h3>
                    <p>
                        Under Florida law, the cost of a surety bond (bail bond) is standard across the entire state.
                        For any bond up to $1,000, the minimum premium is $100. For bonds over $1,000, the premium is strictly fixed at <strong>10% of the total bond amount</strong>.
                        Beware of any agent offering "5% bail" or "cheap bail bonds," as heavily discounting this state-mandated rate can be a violation of Florida regulatory statutes.
                    </p>

                    <h3 className="flex items-center gap-3 text-white font-serif text-2xl mt-12">
                        <Scale className="w-6 h-6 text-yellow-500" />
                        How "First Appearance" Works
                    </h3>
                    <p>
                        If a bond is not posted immediately via the standard schedule, the defendant must appear before a judge within 24 hours of arrest.
                        This hearing, known as "First Appearance" or "PP Court" (Preliminary Presentation), is where the judge reviews the Probable Cause Affidavit.
                        The judge has the discretion to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-yellow-500">
                        <li>Lower the bond amount based on community ties (ROR).</li>
                        <li>Maintain the standard bond schedule.</li>
                        <li>Raise the bond if the defendant is deemed a flight risk.</li>
                    </ul>
                    <p className="mt-6">
                        <strong>Strategy:</strong> Posting bond <em>before</em> First Appearance avoids the risk of a judge increasing the bail amount or adding strict pre-trial release conditions.
                    </p>
                </div>
            </ContentContainer>
        </section>
    );
}
