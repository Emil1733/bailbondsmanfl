import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import EmergencyHeader from '@/components/EmergencyHeader';
import Hero from '@/components/Hero';
import BailFeeCalculator from '@/components/BailFeeCalculator';
import FAQSection from '@/components/FAQSection';
import AuthorityArticle from '@/components/AuthorityArticle';
import MobileFloatingCall from '@/components/MobileFloatingCall';
import { counties } from '@/lib/data';
import { ShieldCheck, Clock, Scale, Phone, FileCheck, LockOpen, MapPin, ArrowRight, Star, Globe, Car, ShieldAlert, Gavel, Zap } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';

// 1. STANDARD SPINE COMPONENT
const ContentContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`max-w-5xl mx-auto px-6 ${className}`}>
    {children}
  </div>
);

export const metadata = pageMetadata({
  title: '24 Hour Florida Bail Bondsman | Statewide Jail Release',
  description: 'Licensed Florida Bail Bondsman serving all 67 counties. Immediate release from Miami-Dade, Broward, Orange, and Hillsborough jails. 10% Rates.',
});

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
      }
        ]
    };

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
      <JsonLd data={jsonLd} />
      <EmergencyHeader />

      {/* 2. REFACTORED HERO - Authority Style */}
      <Hero
        title={<span className="font-serif tracking-tight text-white">24 Hour Florida Bail Bondsman <span className="text-yellow-500">& Statewide Jail Release</span></span>}
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

      {/* SPECIALIZED SERVICES SECTION */}
      <section className="py-24 bg-slate-900 border-y border-white/5">
        <ContentContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Specialized Bail Bond Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We specialize in complex release scenarios. Choose a service type below to view requirements and fast-track instructions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/online-bail-bonds" className="group bg-slate-950 border border-slate-800 p-8 rounded-xl hover:border-yellow-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <Globe className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">Online Bail Bonds Florida</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Secure release 100% remotely. Approve bail, upload identification, and sign indemnity agreements securely from your mobile device.
                </p>
              </div>
              <span className="text-yellow-500 text-sm font-bold flex items-center gap-2">
                Learn About E-Bonding <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/services/dui-bail-bonds" className="group bg-slate-950 border border-slate-800 p-8 rounded-xl hover:border-yellow-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <Car className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">DUI Bail Bonds</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Immediate filing post- sobriety checks. We navigate mandatory 8-hour holds so the defendant is released the minute the clock runs out.
                </p>
              </div>
              <span className="text-yellow-500 text-sm font-bold flex items-center gap-2">
                View DUI Release Info <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/services/domestic-violence-bail" className="group bg-slate-950 border border-slate-800 p-8 rounded-xl hover:border-yellow-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <ShieldAlert className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">Domestic Violence Bonds</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Confidential advisory court support. We prepare surety documentation in advance of first appearance hearings and protective orders.
                </p>
              </div>
              <span className="text-yellow-500 text-sm font-bold flex items-center gap-2">
                View DV Bond Process <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/services/traffic-warrant-bail" className="group bg-slate-950 border border-slate-800 p-8 rounded-xl hover:border-yellow-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <Gavel className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">Traffic Warrant Amnesty</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Clear suspended licenses and active bench warrants without spending a night in jail via pre-arranged walk-through bonds.
                </p>
              </div>
              <span className="text-yellow-500 text-sm font-bold flex items-center gap-2">
                Clear Your Warrant <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/services/nebbia-hold-bail" className="group bg-slate-950 border border-slate-800 p-8 rounded-xl hover:border-yellow-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <Scale className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">Nebbia Hold Proffers</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Financial source verification support. We prepare the detailed proffer files required to satisfy prosecutors and lift holds fast.
                </p>
              </div>
              <span className="text-yellow-500 text-sm font-bold flex items-center gap-2">
                Resolve Nebbia Holds <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/services/immigration-bail-bonds" className="group bg-slate-950 border border-slate-800 p-8 rounded-xl hover:border-yellow-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <LockOpen className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">Immigration Bonds (ICE)</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Specialized federal surety services. Licensed to post delivery bonds directly with DHS field offices to reunite families.
                </p>
              </div>
              <span className="text-yellow-500 text-sm font-bold flex items-center gap-2">
                ICE Detainer Guidelines <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/services/24-hour-bail-bonds" className="group bg-slate-950 border border-slate-800 p-8 rounded-xl hover:border-yellow-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <Clock className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">24-Hour Bail Assistance</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Review the information needed to begin a bail inquiry outside normal business hours and confirm the current booking location.
                </p>
              </div>
              <span className="text-yellow-500 text-sm font-bold flex items-center gap-2">
                Review 24-Hour Assistance <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/services/no-collateral-bail-bonds" className="group bg-slate-950 border border-slate-800 p-8 rounded-xl hover:border-yellow-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <FileCheck className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">No-Collateral Bond Information</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Learn how underwriting and co-signer requirements are evaluated and when collateral may still be requested.
                </p>
              </div>
              <span className="text-yellow-500 text-sm font-bold flex items-center gap-2">
                Review Qualification Factors <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </ContentContainer>
      </section>

      {/* PRIORITY INTERNAL LINKING (STRIKING DISTANCE SEO SILO) */}
      <section className="py-24 bg-slate-950 border-b border-white/5 relative overflow-hidden">
        {/* Subtle background glow to draw attention */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <ContentContainer className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Critical Processing Facilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Direct access to Florida's highest-volume county jails and specialized legal resources. Track booking status and orchestrate immediate release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* TGK - Position 10.8 Target */}
            <Link href="/jail/tgk-correctional-center" className="group p-8 bg-slate-900/80 backdrop-blur-sm border border-slate-800 hover:border-yellow-500 rounded-xl flex flex-col justify-between transition-all hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] hover:-translate-y-1">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-500/10 p-2 rounded border border-red-500/20">
                    <ShieldAlert className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-500 group-hover:text-yellow-500 transition-colors">Miami-Dade County</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">TGK Booking</h3>
                <p className="text-sm text-slate-400">Turner Guilford Knight Correctional Center</p>
              </div>
              <span className="text-sm font-bold text-yellow-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                Check Booking Status <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Land O Lakes - Position 12.9 Target */}
            <Link href="/jail/land-o-lakes-detention-center" className="group p-8 bg-slate-900/80 backdrop-blur-sm border border-slate-800 hover:border-yellow-500 rounded-xl flex flex-col justify-between transition-all hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] hover:-translate-y-1">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-500/10 p-2 rounded border border-blue-500/20">
                    <ShieldCheck className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-500 group-hover:text-yellow-500 transition-colors">Pasco County</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Land O' Lakes Jail</h3>
                <p className="text-sm text-slate-400">Central Pasco Detention Facility</p>
              </div>
              <span className="text-sm font-bold text-yellow-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                View Release Times <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Orlando - Position 45.6 Target (Needs massive push) */}
            <Link href="/county/orange/orlando" className="group p-8 bg-slate-900/80 backdrop-blur-sm border border-slate-800 hover:border-yellow-500 rounded-xl flex flex-col justify-between transition-all hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] hover:-translate-y-1">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-500/10 p-2 rounded border border-yellow-500/20">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-500 group-hover:text-yellow-500 transition-colors">Orange County</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Orlando Arrests</h3>
                <p className="text-sm text-slate-400">Orange County BRC Transfers</p>
              </div>
              <span className="text-sm font-bold text-yellow-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                Orlando Bail Process <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Warrant Search - Position 20.1 Target */}
            <Link href="/warrant-search" className="group p-8 bg-slate-900/80 backdrop-blur-sm border border-slate-800 hover:border-yellow-500 rounded-xl flex flex-col justify-between transition-all hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] hover:-translate-y-1">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-500/10 p-2 rounded border border-purple-500/20">
                    <FileCheck className="w-5 h-5 text-purple-500" />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-500 group-hover:text-yellow-500 transition-colors">Statewide Resource</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Warrant Search</h3>
                <p className="text-sm text-slate-400">Confidential FDLE Background Checks</p>
              </div>
              <span className="text-sm font-bold text-yellow-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                Check Active Warrants <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

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
            <Link href="/locations" className="text-yellow-500 font-bold hover:text-white transition-colors flex items-center gap-2">
              View All Counties <ArrowRight className="w-4 h-4" />
            </Link>
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

      <MobileFloatingCall />
    </main>
  );
}
