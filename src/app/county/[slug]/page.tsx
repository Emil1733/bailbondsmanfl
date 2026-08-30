import { notFound } from 'next/navigation';
import { getCounty, getAllCounties } from '@/lib/data';
import EmergencyHeader from '@/components/EmergencyHeader';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import DynamicMap from '@/components/DynamicMap';
import ReleaseTimeEstimator from '@/components/ReleaseTimeEstimator';
import FAQSection from '@/components/FAQSection';
import Schema from '@/components/Schema';
import MobileFloatingCall from '@/components/MobileFloatingCall';
import { ExternalLink, Clock, MapPin, Phone, Gavel, FileText, HelpCircle, ArrowRight } from 'lucide-react';

// 1. STANDARD SPINE COMPONENT
const ContentContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`max-w-6xl mx-auto px-6 ${className}`}>
        {children}
    </div>
);

export async function generateStaticParams() {
    const counties = await getAllCounties();
    return counties.map((county) => ({
        slug: county.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const county = await getCounty(slug);

    if (!county) {
        return {
            title: 'County Not Found',
        };
    }

    return {
        title: `${county.name} Bail Bonds | 24/7 Fast Release`,
        description: `Fast release from ${county.jail.name}. 24/7 bail bonds in ${county.name}. Licensed agents. Call now for immediate help.`,
        alternates: {
            canonical: `https://bondflorida.com/county/${county.slug}`,
        },
        openGraph: {
            url: `https://bondflorida.com/county/${county.slug}`,
            images: [{
                url: 'https://bondflorida.com/og-image.jpg',
                width: 1200,
                height: 630,
            }],
        },
    };
}

import { generateCountyFAQs } from '@/lib/seo-helpers';

// ... imports

export default async function CountyPage({ params }: Props) {
    const { slug } = await params;
    const county = await getCounty(slug);

    if (!county) {
        notFound();
    }

    // SGE Optimization: Generate 5 W's
    const sgeFaqs = generateCountyFAQs(county.name, county.jail.name);

    // Combine with specific editorial FAQs (if any)
    const combinedFaqs = [
        ...(county.richContent?.specificFaqs || []),
        ...sgeFaqs
    ];

    return (
        <main className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
            <Schema county={county} faqs={combinedFaqs} />
            <EmergencyHeader />

            <Hero
                title={<span className="font-serif text-white">Bail Bonds in <span className="text-yellow-500">{county.name}</span></span>}
                subtitle={<span className="block text-xl md:text-2xl text-slate-300 mt-4">Arrested in {county.name}? <span className="text-slate-400 text-lg block mt-2">Licensed Surety Agents for {county.jail.name}</span></span>}
                inmateSearchUrl={county.jail.inmateSearchUrl}
            />

            <section className="py-24 bg-slate-950">
                <ContentContainer>
                    <Breadcrumbs
                        items={[
                            { label: `${county.name} County`, href: `/county/${county.slug}` }
                        ]}
                    />
                    <div className="grid lg:grid-cols-12 gap-16 items-start">

                        {/* LEFT COL: CONTENT (7 Calls) */}
                        <div className="lg:col-span-7 space-y-20">

                            {/* 1. DETENTION DATA (Editorial Style) */}
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-white mb-8 border-l-4 border-yellow-500 pl-6">
                                    Detention Facility Data
                                </h2>
                                <div className="pl-6 md:pl-8 space-y-8">
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Primary Facility</h3>
                                        <div className="text-2xl font-bold text-white mb-2">{county.jail.name}</div>
                                        <div className="flex items-start gap-3 text-slate-400">
                                            <MapPin className="w-5 h-5 mt-1 shrink-0 text-yellow-500" />
                                            <span>{county.jail.address}</span>
                                        </div>
                                        <a
                                            href={`https://www.google.com/maps/dir/?api=1&destination=${county.geo.lat},${county.geo.lng}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-yellow-500 hover:text-white mt-4 font-bold text-sm tracking-wide transition-colors uppercase border-b border-yellow-500/30 pb-1 hover:border-white"
                                        >
                                            Get Driving Directions <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-12 pt-8 border-t border-slate-800">
                                        <div>
                                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Booking Desk</h3>
                                            <div className="flex items-center gap-3">
                                                <Phone className="w-5 h-5 text-yellow-500" />
                                                <span className="text-xl font-mono text-white tracking-tight">{county.jail.phone}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Booking Status</h3>
                                            <a
                                                href={county.jail.inmateSearchUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-yellow-500 text-white hover:text-slate-950 px-6 py-2 rounded-sm transition-all font-bold text-sm"
                                            >
                                                INMATE ROSTER <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. COURT INFO (If Available) */}
                            {county.richContent?.courtInfo && (
                                <div>
                                    <h2 className="text-3xl font-serif font-bold text-white mb-8 border-l-4 border-slate-700 pl-6">
                                        Bond Hearing Protocols
                                    </h2>
                                    <div className="pl-6 md:pl-8">
                                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                                            <div>
                                                <span className="block text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Presiding Court</span>
                                                <p className="text-lg text-white font-medium mb-1">{county.richContent.courtInfo.name}</p>
                                                <p className="text-slate-400 text-sm">{county.richContent.courtInfo.address}</p>
                                            </div>
                                            <div>
                                                <span className="block text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">First Appearance</span>
                                                <ul className="space-y-2">
                                                    {county.richContent.courtInfo.bondHearingTimes.map((time, idx) => (
                                                        <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                                                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div> {time}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 3. RELEASE PROCESS (If Available) */}
                            {county.richContent?.releaseProcess && (
                                <div>
                                    <h2 className="text-3xl font-serif font-bold text-white mb-8 border-l-4 border-slate-700 pl-6">
                                        Release Procedure
                                    </h2>
                                    <div className="pl-6 md:pl-8 relative space-y-12">
                                        {/* Connecting Line */}
                                        <div className="absolute left-[34px] md:left-[42px] top-4 bottom-4 w-px bg-slate-800 -z-10"></div>

                                        <div className="relative flex gap-6">
                                            <div className="w-10 h-10 bg-slate-900 border border-slate-700 text-white font-bold flex items-center justify-center shrink-0 z-10">1</div>
                                            <div>
                                                <h3 className="text-white font-bold mb-2 pt-2">Case Identification</h3>
                                                <p className="text-slate-400 leading-relaxed text-sm">{county.richContent.releaseProcess.step1}</p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-6">
                                            <div className="w-10 h-10 bg-slate-900 border border-slate-700 text-white font-bold flex items-center justify-center shrink-0 z-10">2</div>
                                            <div>
                                                <h3 className="text-white font-bold mb-2 pt-2">Bond Posting</h3>
                                                <p className="text-slate-400 leading-relaxed text-sm">{county.richContent.releaseProcess.step2}</p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-6">
                                            <div className="w-10 h-10 bg-yellow-500 border border-yellow-400 text-slate-950 font-bold flex items-center justify-center shrink-0 z-10">3</div>
                                            <div>
                                                <h3 className="text-white font-bold mb-2 pt-2">Discharge & Pick-up</h3>
                                                <p className="text-slate-400 leading-relaxed text-sm">{county.richContent.releaseProcess.step3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 4. THE ULTIMATE PROGRAMMATIC 1500+ WORD GUIDE */}
                            <div className="prose prose-invert prose-lg max-w-none mt-16 pt-16 border-t border-slate-800">
                                <h2 className="text-3xl font-serif font-black text-white mb-8">
                                    The Complete Guide to Navigating {county.name} Bail Bonds
                                </h2>
                                
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    When the phone rings in the middle of the night and you find out a loved one has been arrested in <strong>{county.name}</strong>, panic sets in. The criminal justice system in Florida is famously unforgiving, and the {county.name} jurisdiction is no exception. Whether the arrest occurred during a traffic stop on a major highway, or following an incident in one of the local municipalities like {county.cities && county.cities.length > 0 ? county.cities.map(c => c.name).join(', ') : 'the surrounding areas'}, the endpoint is always the same: the <strong>{county.jail.name}</strong>.
                                </p>

                                <h3 className="text-2xl font-bold text-white mt-12 mb-6">
                                    Understanding the Arrest and Booking Lifecycle in {county.name}
                                </h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    The moment handcuffs click, the clock starts. However, understanding <em>when</em> a bail bond can actually be posted requires knowing the difference between the arresting agency and the housing agency. In {county.name}, local police departments (such as {county.cities?.[0]?.policeDepartment.name || 'local PD'}) handle the initial detention. They will process the arrestee at their local substation—a process that can take anywhere from 1 to 3 hours depending on the shift volume.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Once local processing is complete, the individual is placed in a transport vehicle bound for the {county.jail.name} at {county.jail.address}. This is the critical window. The transport itself adds time, and once they arrive at the main county facility, they enter the "Intake and Receiving" queue. Because this facility processes every single arrest within {county.population.toLocaleString()} residents, the backlog can be immense. Intake involves photographing, fingerprinting (LiveScan), background checks across NCIC/FCIC databases, and medical screening. You cannot post a bond until this entire sequence is completed and the inmate is officially entered into the county computer system.
                                </p>

                                <div className="bg-slate-900 border-l-4 border-yellow-500 p-6 my-10 rounded-r-xl shadow-lg">
                                    <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2">Insider Tip: The "Pre-Booking" Strategy</h4>
                                    <p className="text-slate-200 text-sm md:text-base m-0">
                                        Do not wait for the booking process to finish before contacting a bondsman. If you call us while they are still in transport to the {county.jail.name}, we can prepare the surety paperwork, run the indemnitor credit checks, and be physically standing at the bond window the exact second the booking officer hits "Submit" on the computer. This strategy often shaves 3 to 5 hours off the total incarceration time.
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold text-white mt-12 mb-6">
                                    The First Appearance (Advisory Court) and Bond Amounts
                                </h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Florida operates on a Uniform Bail Schedule. For many standard misdemeanor and non-violent felony charges, a predetermined bond amount is attached to the charge the moment the arrest report is filed. In these scenarios, we can post the bond immediately after booking.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    However, if the charge is severe (e.g., domestic violence, trafficking, or a probation violation), the bond is marked as "None" or "Zero." This does not mean they are denied bail forever. It means they must wait to see a magistrate judge at the <strong>{county.richContent?.courtInfo?.name || 'County Courthouse'}</strong> for First Appearance, also known as Advisory Court or PP Court.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    During this hearing—which typically takes place within 24 hours of arrest—the judge will review the Probable Cause (PC) affidavit submitted by the arresting officer. The judge evaluates the defendant's ties to {county.name}, their prior criminal history, and the risk to the community before setting a customized bond amount. If the arrest happens on a Saturday night, they will see the weekend duty judge on Sunday morning.
                                </p>

                                <h3 className="text-2xl font-bold text-white mt-12 mb-6">
                                    Financial Mechanics: How the 10% Premium Works
                                </h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    If the judge sets the bail at $15,000, you have two choices. You can go to the {county.jail.name} and pay $15,000 in exact cash or cashier's check to the Sheriff's Office. That money will be tied up for months—or years—until the case reaches a final disposition. 
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    The alternative is utilizing a licensed surety agent. Regulated by the Florida Department of Financial Services, bail bond premiums are strictly capped at <strong>10% of the total bond amount</strong> (with a $100 minimum per charge). For that same $15,000 bond, the non-refundable premium is exactly $1,500. We act as the corporate guarantor, leveraging backing from multinational insurance conglomerates to guarantee the court that the defendant will appear for all mandated hearings at the {county.richContent?.courtInfo?.name || 'courthouse'}.
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-slate-300 mb-8 mt-4">
                                    <li><strong>Collateral:</strong> While large bonds (over $50,000) or high-flight-risk defendants may require property collateral, the vast majority of standard bonds in {county.name} are written on "signature" or promissory notes, requiring only the 10% fee and a qualified indemnitor with steady employment.</li>
                                    <li><strong>Payment Plans:</strong> For unexpected high-dollar bonds, specialized financing and payment plans can often be arranged. This allows families to secure release with a fraction of the premium down, paying the remainder on a weekly or monthly schedule.</li>
                                </ul>

                                <h3 className="text-2xl font-bold text-white mt-12 mb-6">
                                    The Geography of Justice in {county.name}
                                </h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Navigating the logistics of a release requires geographic awareness. The {county.jail.name} is situated at {county.jail.address}. Due to security protocols, civilians cannot simply walk into the secure perimeter. The designated Release Lobby is where you must wait.
                                </p>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Upon posting the bond, the paperwork is transmitted to the Records Division. They must perform a final cross-check with state (FDLE) and federal (NCIC) databases to ensure no out-of-county warrants were issued during the holding period. Only after this rigorous secondary check is the inmate placed in the queue for out-processing, where property is returned and civilian clothes are issued. This bureaucratic latency means that even after the bond is paid, the physical release of the individual can take anywhere from 4 to 12 hours depending on facility lockdown schedules and shift changes.
                                </p>

                                <div className="bg-slate-900 border border-slate-700 p-8 rounded-2xl mt-12 text-center">
                                    <h4 className="text-xl font-serif font-bold text-white mb-4">Immediate Intervention is Critical</h4>
                                    <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                                        Every hour spent in the {county.jail.name} is an hour of lost wages, extreme stress, and exposure to the hardened criminal element. Don't navigate the {county.name} justice system blind.
                                    </p>
                                    <a href="tel:+13058310358" className="inline-flex items-center justify-center gap-3 bg-red-700 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-red-800 transition-all shadow-lg shadow-red-900/20">
                                        <Phone className="w-5 h-5" />
                                        Call for Immediate {county.name} Release
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COL: TOOLS (5 Columns) */}
                        <div className="lg:col-span-5 space-y-12">

                            {/* Estimator - Urgent Action */}
                            <div>
                                <ReleaseTimeEstimator />
                            </div>

                            {/* Map - Simplified Container */}
                            <div className="border border-slate-800 bg-slate-900 h-[300px] grayscale hover:grayscale-0 transition-all duration-700">
                                <DynamicMap lat={county.geo.lat} lng={county.geo.lng} jailName={county.jail.name} />
                            </div>

                            {/* FAQ - Integrated */}
                            <div className="border-t border-slate-800 pt-12">
                                <FAQSection countyName={county.name} customFaqs={combinedFaqs} />
                            </div>

                        </div>
                    </div>
                </ContentContainer>
            </section>

            <MobileFloatingCall />
        </main>
    );
}
