import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import EmergencyHeader from '@/components/EmergencyHeader';
import { ShieldCheck, MapPin, Clock, Award, Phone, CheckCircle2, Building2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = pageMetadata({
    title: 'About the Bond Florida Directory',
    description: 'Learn how Bond Florida organizes county jail contacts, official inmate-search links, local guides, and general bail information for Florida visitors.',
    path: '/about',
});

const ContentContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`max-w-6xl mx-auto px-6 ${className}`}>
        {children}
    </div>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
      <EmergencyHeader />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-white/5">
        <ContentContainer className="text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            About the <span className="text-yellow-500">Bond Florida</span> Directory
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A plain-language directory of Florida jail contacts, official inmate-search links, local agency details, and general information about booking and bail.
          </p>
        </ContentContainer>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-slate-950">
        <ContentContainer>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our goal is to make public jail and inmate-search resources easier to find during a stressful situation. We organize local information, link visitors to the responsible government agency, identify when a detail needs direct verification, and correct outdated directory entries when they are reported.
            </p>
          </div>
        </ContentContainer>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900/30 border-y border-white/5">
        <ContentContainer>
          <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">How the Directory Is Maintained</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Licensed & Regulated */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Official Links First</h3>
              <p className="text-slate-400 leading-relaxed">
                County pages point to the responsible sheriff, corrections department, court, or other government resource whenever one is available.
              </p>
            </div>

            {/* Statewide Coverage */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Clearly Defined Coverage</h3>
              <p className="text-slate-400 leading-relaxed">
                We publish only the counties and cities currently represented in our data and do not claim a physical office in each listed location.
              </p>
            </div>

            {/* 24/7 Availability */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Correction Requests</h3>
              <p className="text-slate-400 leading-relaxed">
                Visitors can report an outdated phone number, facility detail, or broken government link through the contact page or by email.
              </p>
            </div>

            {/* Specialized Expertise */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Plain-Language Guides</h3>
              <p className="text-slate-400 leading-relaxed">
                Guides explain common terms and questions without replacing advice from a lawyer, court, detention facility, or licensed provider.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Source Transparency</h3>
              <p className="text-slate-400 leading-relaxed">
                The site identifies its editorial review date and links to Florida&apos;s official bail and bail-bond-agent statutes for primary context.
              </p>
            </div>

            {/* Local Knowledge */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Direct Verification</h3>
              <p className="text-slate-400 leading-relaxed">
                Facility procedures can change. Important booking, visitation, payment, and release details should always be confirmed with the agency itself.
              </p>
            </div>

          </div>
        </ContentContainer>
      </section>

      {/* Licensing & Credentials */}
      <section className="py-20 bg-slate-950">
        <ContentContainer>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Editorial Standards</h2>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <div className="space-y-6 text-slate-300">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-2">No Invented Credentials</h3>
                    <p className="text-slate-400">
                      Bond Florida does not publish an agency license number, office address, or professional credential unless it has been verified and can be presented accurately.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-2">General Information Only</h3>
                    <p className="text-slate-400">
                      Directory content is not legal advice and does not guarantee eligibility, a bond amount, a fee, a response time, or release from custody.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-2">Review and Corrections</h3>
                    <p className="text-slate-400">
                      The editorial review date appears sitewide. Readers can send a source link and page URL to request a correction to factual directory information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-slate-900/30 border-y border-white/5">
        <ContentContainer>
          <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Current Directory Coverage</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-slate-400 mb-8">
              The directory currently includes detailed guides for 16 Florida counties and selected cities within them. Each guide is intended to help visitors reach the responsible agency and its official inmate-search resource. Coverage does not imply that Bond Florida has a physical office or agent in every listed location.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">Major Metro Areas</h3>
                <ul className="space-y-2 text-slate-400">
                  <li>• Miami-Dade County</li>
                  <li>• Broward County</li>
                  <li>• Palm Beach County</li>
                  <li>• Hillsborough County (Tampa)</li>
                  <li>• Orange County (Orlando)</li>
                  <li>• Duval County (Jacksonville)</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">Gulf Coast</h3>
                <ul className="space-y-2 text-slate-400">
                  <li>• Pinellas County</li>
                  <li>• Pasco County</li>
                  <li>• Lee County</li>
                  <li>• Manatee County</li>
                  <li>• Indian River County</li>
                  <li>• Marion County</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">Central & North Florida</h3>
                <ul className="space-y-2 text-slate-400">
                  <li>• Polk County</li>
                  <li>• Brevard County</li>
                  <li>• Columbia County</li>
                  <li>• Nassau County</li>
                </ul>
              </div>
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950">
        <ContentContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Need Help Finding the Right Resource?</h2>
            <p className="text-lg text-slate-400 mb-8">
              Contact Bond Florida with a general inquiry, or send us a correction when a county contact or external government link has changed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13058310358"
                className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call (305) 831-0358
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-lg transition-colors border border-slate-700"
              >
                Contact Us Online
              </Link>
            </div>
          </div>
        </ContentContainer>
      </section>
    </main>
  );
}
