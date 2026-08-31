
import { Metadata } from 'next';
import EmergencyHeader from '@/components/EmergencyHeader';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact the Bond Florida Support Team',
  description: 'Contact Bond Florida about directory corrections, general questions, or bail-service inquiries. Phone and online form options are available around the clock.',
  path: '/contact',
});

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
            Contact <span className="text-yellow-500">Bond Florida</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ask a general question, request contact, or report an outdated facility detail or government link.
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
              <h2 className="text-2xl font-serif font-bold text-white mb-2">Phone Contact</h2>
              <p className="text-slate-400 mb-6">Call with a general directory or service inquiry.</p>
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
              <a href="mailto:tevatrosyan13.17@gmail.com" className="break-all text-lg font-bold text-blue-500 hover:text-white transition-colors">
                tevatrosyan13.17@gmail.com
              </a>
            </div>

            {/* Availability Card */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl group hover:border-yellow-500/50 transition-all">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-green-500" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-2">Online Form</h2>
              <p className="text-slate-400 mb-6">Submit a request without including sensitive financial information.</p>
              <span className="text-lg font-bold text-green-500 uppercase tracking-widest">
                Available online
              </span>
            </div>
          </div>
        </ContactContainer>
      </section>

      <section className="border-y border-white/5 bg-slate-900/30 py-16">
        <ContactContainer>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-5 text-3xl font-serif font-bold text-white">What to have ready</h2>
            <p className="mb-8 leading-relaxed text-slate-400">
              You do not need every detail before contacting us. Providing the information below can make it easier to identify the correct county record and explain the available next steps. If a fact is unknown, say so rather than guessing.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
                <h3 className="mb-4 text-lg font-bold text-white">Helpful booking details</h3>
                <ul className="list-disc space-y-3 pl-5 text-slate-400">
                  <li>The defendant&apos;s full legal name and date of birth.</li>
                  <li>The county, city, or facility where the arrest occurred.</li>
                  <li>An inmate or booking number, if an official roster already shows one.</li>
                  <li>The arrest date, listed charges, and bond amount, if known.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
                <h3 className="mb-4 text-lg font-bold text-white">Protect sensitive information</h3>
                <p className="mb-4 text-slate-400">
                  Use the form only for an initial inquiry. Do not enter Social Security numbers, payment-card or bank details, passwords, medical records, government identification images, or confidential attorney communications.
                </p>
                <p className="text-slate-400">
                  Verify booking information through the county&apos;s official inmate-search page. Release eligibility and timing are controlled by the court and detention facility, so no website or service provider can guarantee a particular outcome.
                </p>
              </div>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-slate-500">
              For directory corrections, include the page URL, the detail that appears outdated, and a link to the responsible government agency when available. General questions and corrections may also be emailed to tevatrosyan13.17@gmail.com.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              The online form is not monitored by a court, sheriff, jail, or emergency service. Do not use it to report danger, request medical attention for someone in custody, submit a court filing, or communicate a deadline. For an emergency, call 911. For custody, visitation, medication, or booking-record questions, contact the detention facility directly through the official county resource linked in this directory.
            </p>
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
                      <h3 className="font-bold text-white uppercase tracking-wider text-xs mb-1">Service Area</h3>
                      <p className="text-slate-400">Florida county and city directory inquiries</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-yellow-500 shrink-0" />
                    <div>
                      <h3 className="font-bold text-white uppercase tracking-wider text-xs mb-1">Corrections</h3>
                      <p className="text-slate-400">Report outdated jail contacts or inmate-search links by email.</p>
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
                  <li>Explain the information available and discuss possible next steps.</li>
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
