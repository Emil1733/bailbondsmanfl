import Link from 'next/link';
import { ExternalLink, FileSearch, MapPin, Phone, ShieldAlert } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import EmergencyHeader from '@/components/EmergencyHeader';
import JailLocalLinks from '@/components/JailLocalLinks';

export type VerifiedJail = {
  name: string;
  countyName: string;
  countySlug: string;
  address: string;
  phone: string;
  phoneHref: string;
  inmateSearchUrl: string;
  facilitySourceUrl: string;
  jailSlug: string;
};

export default function VerifiedJailGuide({ jail }: { jail: VerifiedJail }) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <EmergencyHeader />
      <section className="border-b border-white/5 bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Breadcrumbs items={[
            { label: `${jail.countyName} County`, href: `/county/${jail.countySlug}` },
            { label: jail.name, href: `/jail/${jail.jailSlug}` },
          ]} />
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">Verified facility directory</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-serif font-bold text-white md:text-6xl">{jail.name}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Use the official agency resources below to confirm custody status, charges, bond information, visitation rules, and current facility procedures.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
                <MapPin className="mb-4 h-6 w-6 text-yellow-500" />
                <h2 className="font-bold text-white">Facility address</h2>
                <p className="mt-2 leading-relaxed text-slate-400">{jail.address}</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
                <Phone className="mb-4 h-6 w-6 text-yellow-500" />
                <h2 className="font-bold text-white">Official facility contact</h2>
                <a className="mt-2 inline-block text-yellow-500 underline" href={`tel:${jail.phoneHref}`}>{jail.phone}</a>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-8">
              <h2 className="text-2xl font-serif font-bold text-white">Official lookup and verification</h2>
              <p className="mt-4 leading-relaxed text-slate-400">
                Search results may lag behind booking or release activity. Confirm time-sensitive details with the responsible agency, and do not send money to anyone who refuses to let you verify an arrest through official channels.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <a className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950" href={jail.inmateSearchUrl} rel="noopener noreferrer" target="_blank">
                  <FileSearch className="h-5 w-5" /> Official inmate search <ExternalLink className="h-4 w-4" />
                </a>
                <a className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-bold text-white" href={jail.facilitySourceUrl} rel="noopener noreferrer" target="_blank">
                  Facility source <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-white">Information to gather</h2>
              <ul className="mt-5 grid gap-3 text-slate-400 sm:grid-cols-2">
                <li className="rounded-lg border border-slate-800 p-4">Full legal name and date of birth</li>
                <li className="rounded-lg border border-slate-800 p-4">Booking or inmate number, if listed</li>
                <li className="rounded-lg border border-slate-800 p-4">Charges and bond status shown by the agency</li>
                <li className="rounded-lg border border-slate-800 p-4">Court, case number, and next appearance</li>
              </ul>
            </div>

            <div className="rounded-xl border border-amber-900/40 bg-amber-950/20 p-8">
              <h2 className="flex items-center gap-3 text-xl font-bold text-white"><ShieldAlert className="h-6 w-6 text-yellow-500" /> Release timing cannot be guaranteed</h2>
              <p className="mt-4 leading-relaxed text-slate-400">
                Booking, court review, payment processing, holds, transportation, medical clearance, and the facility&apos;s discharge queue can all affect timing. Only the court and detention agency control custody and release. This directory does not provide legal advice or promise a particular outcome.
              </p>
            </div>

            <p className="text-sm leading-relaxed text-slate-500">
              Facility details were reviewed against the linked government source on August 31, 2026. If the agency has changed a phone number, address, or lookup page, <Link className="text-yellow-500 underline" href="/contact">report a correction</Link> with the official replacement link.
            </p>
          </div>

          <aside className="h-fit rounded-xl border border-slate-800 bg-slate-900/60 p-7">
            <h2 className="text-xl font-bold text-white">Related county guide</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">Find local agency contacts and the county&apos;s primary official resources.</p>
            <Link className="mt-5 inline-block font-bold text-yellow-500 underline" href={`/county/${jail.countySlug}`}>View {jail.countyName} County</Link>
          </aside>
        </div>
      </section>
      <JailLocalLinks jailSlug={jail.jailSlug} />
    </main>
  );
}
