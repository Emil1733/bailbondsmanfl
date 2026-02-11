import Link from 'next/link';
import EmergencyHeader from '@/components/EmergencyHeader';
import Hero from '@/components/Hero';
import BailFeeCalculator from '@/components/BailFeeCalculator';
import FAQSection from '@/components/FAQSection';
import AuthorityArticle from '@/components/AuthorityArticle';
import { counties } from '@/lib/data';
import { ShieldCheck, Clock, Scale, Phone, FileCheck, LockOpen, MapPin, ArrowRight, Star } from 'lucide-react';

// 1. STANDARD SPINE COMPONENT
const ContentContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`max-w-5xl mx-auto px-6 ${className}`}>
    {children}
  </div>
);

export const metadata = {
  title: 'Florida Bail Bonds | 24/7 Statewide Release Authority',
  description: 'Licensed Florida Bail Bondsman serving all 67 counties. Immediate release from Miami-Dade, Broward, Orange, and Hillsborough jails. 10% Rates.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: 'https://bondflorida.com/',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BailBondBusiness',
        '@id': 'https://bondflorida.com/#business',
        name: 'Statewide Bail Bonds Florida',
        url: 'https://bondflorida.com',
        image: 'https://bondflorida.com/logo.jpg',
        description: '24/7 Florida Bail Bonds. Immediate release assistance for Miami-Dade, Broward, Palm Beach, and all 67 counties.',
        areaServed: { '@type': 'State', name: 'Florida' },
        telephone: '(305) 831-0358',
        priceRange: '$$',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bondflorida.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does bail cost in Florida?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In Florida, the standard bail bond premium is 10% of the total bail amount for state charges. This rate is regulated by the state.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I do an inmate search online?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Most Florida counties, including Miami-Dade and Broward, have online inmate search portals. You can access these direct links through our County Directory.'
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EmergencyHeader />

      {/* 2. REFACTORED HERO - Authority Style */}
      <Hero
        title={<span className="font-serif tracking-tight text-white">Florida Bail Bonds <span className="text-yellow-500">& 24/7 Statewide Release</span></span>}
        subtitle={<span className="block text-xl md:text-2xl text-slate-300 mt-4">Who are you looking for? <span className="text-slate-400 text-lg block mt-2">We track discharge times across all 67 counties involved.</span></span>}
      />

      {/* 3. TRUST STRIP - Minimalist */}
      <div className="border-y border-white/5 bg-slate-900/50 py-6">
        <ContentContainer>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-semibold tracking-wide uppercase text-slate-400">
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-yellow-500" /> Fully Licensed</span>
            <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-yellow-500" /> 24/7 Availability</span>
            <span className="flex items-center gap-2"><Scale className="w-5 h-5 text-yellow-500" /> State Regulated</span>
          </div>
        </ContentContainer>
      </div>

      {/* 4. PROCESS - Flat hierarchy, high whitespace */}
      <section className="py-24 bg-slate-950">
        <ContentContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">The Release Process</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We navigate the legal system so you don't have to. Three precise steps to secure release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-800 -z-10"></div>

            {/* Step 1 */}
            <div className="text-center bg-slate-950">
              <div className="w-24 h-24 mx-auto bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center mb-8 relative z-10 shadow-xl">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3">1. Case Assessment</h3>
              <p className="text-slate-400 leading-relaxed">
                Call us with the defendant's name. We locate them instantly in the county roster.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center bg-slate-950">
              <div className="w-24 h-24 mx-auto bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center mb-8 relative z-10 shadow-xl">
                <FileCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3">2. Secure Bond</h3>
              <p className="text-slate-400 leading-relaxed">
                Complete the regulated 10% premium payment securely via phone or online portal.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center bg-slate-950">
              <div className="w-24 h-24 mx-auto bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center mb-8 relative z-10 shadow-xl">
                <LockOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3">3. Immediate Discharge</h3>
              <p className="text-slate-400 leading-relaxed">
                We post the bond directly at the facility. We wait until they walk out the door.
              </p>
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* 5. CALCULATOR & SOCIAL PROOF - Multi-column spine */}
      <section className="py-24 bg-slate-900 border-y border-white/5">
        <ContentContainer className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* Left: Calculator (Functional) */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Financial Transparency</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Florida law mandates a strict 10% premium on all state bonds. Use our calculator to determine the exact statutory cost.
              </p>
              <BailFeeCalculator />
            </div>

            {/* Right: Reviews (Editorial Style) */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-10">Client Testimonials</h2>

              <div className="space-y-12">
                <div className="border-l-2 border-yellow-500 pl-6">
                  <p className="text-xl text-slate-300 italic mb-4 font-serif leading-relaxed">
                    "The level of professionalism was unexpected for this industry. They handled the Miami-Dade release with absolute precision during a very difficult night."
                  </p>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold text-white ml-2">— Maria R., Miami-Dade</span>
                  </div>
                </div>

                <div className="border-l-2 border-slate-700 pl-6">
                  <p className="text-xl text-slate-300 italic mb-4 font-serif leading-relaxed">
                    "Straightforward and honest about the timeline. They didn't overpromise on release times, but they delivered exactly as they said they would."
                  </p>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold text-white ml-2">— James T., Broward</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </ContentContainer>
      </section>

      {/* 6. DIRECTORY - Clean Grid */}
      <section id="inmate-search" className="py-24 bg-slate-950">
        <ContentContainer>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif font-bold text-white mb-4">Jurisdictional Directory</h2>
              <p className="text-slate-400 max-w-xl">
                Select a county to access specific inmate rosters, bond hearing schedules, and facility release procedures.
              </p>
            </div>
            <button className="text-yellow-500 font-bold hover:text-white transition-colors flex items-center gap-2">
              View All Counties <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {counties.map((county) => (
              <Link
                key={county.slug}
                href={`/county/${county.slug}`}
                className="group p-6 bg-slate-900 border border-slate-800 hover:border-yellow-500/50 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-slate-500 group-hover:text-yellow-500 transition-colors" />
                  <span className="font-bold text-slate-200 group-hover:text-white transition-colors">{county.name} County</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-yellow-500 -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </ContentContainer>
      </section>

      {/* 7. AUTHORITY ARTICLE (SEO Semantic Density) */}
      <AuthorityArticle />

      {/* 8. FAQ Section */}
      <section className="py-24 bg-slate-900 border-t border-white/5">
        <ContentContainer className="max-w-3xl">
          <FAQSection countyName="Florida" />
        </ContentContainer>
      </section>
    </main>
  );
}
