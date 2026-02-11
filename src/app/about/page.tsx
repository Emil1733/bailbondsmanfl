import { Metadata } from 'next';
import EmergencyHeader from '@/components/EmergencyHeader';
import { ShieldCheck, Users, MapPin, Clock, Award, Phone, CheckCircle2, Building2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Bond Florida | Licensed Bail Bondsmen Serving Florida',
  description: 'Learn about our licensed bail bond agents, statewide coverage, and commitment to fast, professional release services across all Florida counties.',
  alternates: {
    canonical: '/about',
  },
};

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
            Florida's <span className="text-yellow-500">Trusted</span> Bail Bond Experts
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Licensed, professional, and available 24/7 to secure fast release from any Florida county jail. We specialize in complex cases that require expertise and speed.
          </p>
        </ContentContainer>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-slate-950">
        <ContentContainer>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              To provide immediate, professional bail bond services across Florida with transparency, integrity, and compassion. We understand that arrests happen at the worst times—our job is to make the release process as fast and stress-free as possible.
            </p>
          </div>
        </ContentContainer>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900/30 border-y border-white/5">
        <ContentContainer>
          <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">Why Choose Bond Florida</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Licensed & Regulated */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Licensed & Regulated</h3>
              <p className="text-slate-400 leading-relaxed">
                All agents are licensed by the Florida Department of Financial Services. We operate under strict state regulations to protect your rights.
              </p>
            </div>

            {/* Statewide Coverage */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Statewide Coverage</h3>
              <p className="text-slate-400 leading-relaxed">
                We post bonds at every county jail in Florida—from Miami-Dade to Escambia. No matter where the arrest occurred, we can help.
              </p>
            </div>

            {/* 24/7 Availability */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Availability</h3>
              <p className="text-slate-400 leading-relaxed">
                Arrests don't follow business hours. Our agents are on call around the clock, every day of the year, including holidays.
              </p>
            </div>

            {/* Specialized Expertise */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Specialized Expertise</h3>
              <p className="text-slate-400 leading-relaxed">
                We handle complex cases: DUI 8-hour holds, Domestic Violence first appearances, Nebbia hearings, and Federal immigration bonds.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Transparent Pricing</h3>
              <p className="text-slate-400 leading-relaxed">
                Florida law sets bail bond premiums at 10% of the bond amount. We never charge hidden fees or surprise costs.
              </p>
            </div>

            {/* Local Knowledge */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Local Knowledge</h3>
              <p className="text-slate-400 leading-relaxed">
                We know every county jail's procedures, booking times, and release protocols. This expertise speeds up the process significantly.
              </p>
            </div>

          </div>
        </ContentContainer>
      </section>

      {/* Licensing & Credentials */}
      <section className="py-20 bg-slate-950">
        <ContentContainer>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Licensing & Credentials</h2>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <div className="space-y-6 text-slate-300">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-2">Florida Department of Financial Services</h4>
                    <p className="text-slate-400">
                      All bail bond agents must be licensed by the state and pass background checks, financial audits, and continuing education requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-2">Professional Liability Insurance</h4>
                    <p className="text-slate-400">
                      We maintain comprehensive surety bonds and insurance to protect our clients and ensure financial responsibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-2">Federal Immigration Bond License</h4>
                    <p className="text-slate-400">
                      Unlike most bail bondsmen, we hold a specialized federal license to post immigration bonds with ICE and DHS.
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
          <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Statewide Service Area</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-slate-400 mb-8">
              We serve all 67 counties in Florida. Our network of licensed agents can post bonds at any county jail, sheriff's office, or federal detention center.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">Major Metro Areas</h4>
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
                <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">Gulf Coast</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• Pinellas County</li>
                  <li>• Pasco County</li>
                  <li>• Lee County</li>
                  <li>• Sarasota County</li>
                  <li>• Manatee County</li>
                  <li>• Collier County</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">Central & North Florida</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• Polk County</li>
                  <li>• Brevard County</li>
                  <li>• Volusia County</li>
                  <li>• Alachua County</li>
                  <li>• Leon County</li>
                  <li>• + 56 more counties</li>
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
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Need Immediate Assistance?</h2>
            <p className="text-lg text-slate-400 mb-8">
              Our licensed agents are standing by 24/7 to answer your questions and start the bail process immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:305-831-0358"
                className="flex items-center justify-center gap-3 bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
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
