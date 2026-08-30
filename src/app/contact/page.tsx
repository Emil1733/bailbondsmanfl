
import { Metadata } from 'next';
import EmergencyHeader from '@/components/EmergencyHeader';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Florida Bail Bonds | 24/7 Emergency Help',
  description: 'Connect with a licensed Florida bail bondsman immediately. 24/7 emergency phone support for all county jails. Fast release assistance starts here.',
  alternates: {
    canonical: 'https://bondflorida.com/contact',
  },
  openGraph: {
    url: 'https://bondflorida.com/contact',
    images: [{
      url: 'https://bondflorida.com/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
};

const ContactContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`max-w-6xl mx-auto px-6 ${className}`}>
        {children}
    </div>
);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-200">
      <EmergencyHeader />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-white/5">
        <ContactContainer className="text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Immediate <span className="text-yellow-500">Bail Assistance</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our agents are standing by 24/7 across Florida. Call now for a free case assessment and instant inmate location.
          </p>
        </ContactContainer>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <ContactContainer>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl group hover:border-yellow-500/50 transition-all">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-2">Call 24/7</h2>
              <p className="text-slate-400 mb-6">Immediate dispatch to any Florida county jail.</p>
              <a href="tel:+13058310358" className="text-xl font-bold text-yellow-500 hover:text-white transition-colors">
                (305) 831-0358
              </a>
            </div>

            {/* Support Card */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl group hover:border-yellow-500/50 transition-all">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-blue-500" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-2">Email Support</h2>
              <p className="text-slate-400 mb-6">For documentation and general inquiries.</p>
              <a href="mailto:help@bondflorida.com" className="text-xl font-bold text-blue-500 hover:text-white transition-colors">
                help@bondflorida.com
              </a>
            </div>

            {/* Availability Card */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl group hover:border-yellow-500/50 transition-all">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-green-500" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-2">Always Open</h2>
              <p className="text-slate-400 mb-6">We never close. Weekends and holidays included.</p>
              <span className="text-lg font-bold text-green-500 uppercase tracking-widest">
                Operational 24/7
              </span>
            </div>
          </div>
        </ContactContainer>
      </section>

      {/* Form & Info Section */}
      <section className="py-20 bg-slate-900/30 border-y border-white/5">
        <ContactContainer>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Statewide Coverage</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-yellow-500 shrink-0" />
                    <div>
                      <h3 className="font-bold text-white uppercase tracking-wider text-xs mb-1">Regional HQ</h3>
                      <p className="text-slate-400">7000 NW 41st Street, Miami, FL 33166</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-yellow-500 shrink-0" />
                    <div>
                      <h3 className="font-bold text-white uppercase tracking-wider text-xs mb-1">Licensure</h3>
                      <p className="text-slate-400">Florida Dept. of Financial Services • Agency Lic# P123456</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-yellow-500" />
                  What happens when you call?
                </h3>
                <ol className="space-y-4 text-slate-400 list-decimal pl-5">
                  <li>Identify the defendant and jail location.</li>
                  <li>Verify bond amount with the court/jail.</li>
                  <li>Secure funding and post bond immediately.</li>
                </ol>
              </div>
            </div>

            {/* Right: Inquiry Form */}
            <div id="inquiry-form" className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl scroll-mt-24">
              <h3 className="text-2xl font-serif font-bold text-white mb-6 text-center">Inquiry Form</h3>
              <ContactForm />
            </div>
          </div>
        </ContactContainer>
      </section>
    </main>
  );
}
