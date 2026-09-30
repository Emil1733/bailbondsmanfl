import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, FileSearch, Info, Phone } from 'lucide-react';
import VerifiedJailGuide from '@/components/VerifiedJailGuide';
import { pageMetadata } from '@/lib/seo';

const arrestSearchUrl = 'https://apps.sheriff.org/arrestsearch?d=y';
const facilitySourceUrl = 'https://www.sheriff.org/DOD/Pages/Facility.aspx?title=Main+Jail+Bureau';
const bondSourceUrl = 'https://www.sheriff.org/DOD/Pages/Information/Bond.aspx';
const detentionSourceUrl = 'https://www.sheriff.org/dod/';

export const metadata: Metadata = pageMetadata({
  title: 'Broward Main Jail Address, Phone & Inmate Search',
  description: 'Find the Broward County Main Jail address and phone, search official arrest records, and review verified booking, bond and release resources.',
  path: '/jail/broward-county-main-jail',
});

function BrowardMainJailDetails() {
  return (
    <div className="space-y-8">
      <section className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8" aria-labelledby="broward-main-jail-quick-facts">
        <h2 id="broward-main-jail-quick-facts" className="text-2xl font-serif font-bold text-white">Broward Main Jail address and phone</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          The Broward County Main Jail, also called the Main Jail Bureau, is a Broward Sheriff&apos;s Office detention facility in downtown Fort Lauderdale. Confirm that the person is currently assigned to this facility before traveling because custody locations can change.
        </p>
        <dl className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-5">
            <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Street address</dt>
            <dd className="mt-2 font-bold text-white">555 SE 1st Avenue<br />Fort Lauderdale, FL 33301</dd>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-5">
            <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Arrest, bail and inmate information</dt>
            <dd className="mt-2"><a className="inline-flex items-center gap-2 font-bold text-yellow-500 underline" href="tel:+19548315900"><Phone className="h-4 w-4" />(954) 831-5900</a></dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="broward-inmate-search">
        <h2 id="broward-inmate-search" className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><FileSearch className="h-6 w-6 text-yellow-500" />How to use the Broward arrest search</h2>
        <ol className="mt-5 space-y-4 text-slate-400">
          <li className="rounded-lg border border-slate-800 p-5"><span className="font-bold text-white">1. Open the official Broward Sheriff&apos;s Office arrest search.</span> Use the person&apos;s legal name and check spelling and identifying details carefully.</li>
          <li className="rounded-lg border border-slate-800 p-5"><span className="font-bold text-white">2. Review the complete record.</span> Confirm the listed facility, arrest number, charges, bond information, and any other status shown by BSO.</li>
          <li className="rounded-lg border border-slate-800 p-5"><span className="font-bold text-white">3. Save the identifiers before calling.</span> Having the arrest number and exact name available helps the agency locate the correct record.</li>
        </ol>
        <a className="mt-6 inline-flex items-center gap-2 font-bold text-yellow-500 underline" href={arrestSearchUrl} rel="noopener noreferrer" target="_blank">Search official Broward arrest records <ExternalLink className="h-4 w-4" /></a>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="broward-bond-release">
        <h2 id="broward-bond-release" className="text-2xl font-serif font-bold text-white">Broward bond and release information</h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Start with the official arrest record to see the current status and any displayed bond information. BSO publishes separate official instructions for bonding someone out of jail. The court and detention agency determine eligibility, conditions, holds, and release processing; a directory or private provider cannot override those decisions.
        </p>
        <p className="mt-4 leading-relaxed text-slate-400">
          Do not treat a search result, payment receipt, or estimated processing window as confirmation that release is complete. Call the official information line when the record is unclear, and confirm the current facility before arranging transportation or traveling to 555 SE 1st Avenue.
        </p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm">
          <a className="inline-flex items-center gap-2 text-yellow-500 underline" href={bondSourceUrl} rel="noopener noreferrer" target="_blank">Official BSO bond information <ExternalLink className="h-4 w-4" /></a>
          <a className="inline-flex items-center gap-2 text-yellow-500 underline" href={facilitySourceUrl} rel="noopener noreferrer" target="_blank">Official Main Jail Bureau page <ExternalLink className="h-4 w-4" /></a>
          <a className="inline-flex items-center gap-2 text-yellow-500 underline" href={detentionSourceUrl} rel="noopener noreferrer" target="_blank">BSO detention department <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8" aria-labelledby="broward-before-calling">
        <h2 id="broward-before-calling" className="flex items-center gap-3 text-xl font-bold text-white"><Info className="h-6 w-6 text-blue-400" />Before calling or visiting</h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Gather the person&apos;s full legal name, date of birth, arrest number if shown, booking date, listed facility, charges, and bond status. Ask the agency which office handles the specific question. For visitation, property, mail, medical, or release procedures, follow the current BSO instructions rather than an old directory listing.
        </p>
        <p className="mt-4 text-sm text-slate-400">
          Continue with the <Link className="text-yellow-500 underline" href="/county/broward">Broward County jail guide</Link>, the <Link className="text-yellow-500 underline" href="/county/broward/fort-lauderdale">Fort Lauderdale arrest and jail guide</Link>, or the <Link className="text-yellow-500 underline" href="/services/online-bail-bonds">online bail-bond safety guide</Link>.
        </p>
      </section>
    </div>
  );
}

export default function Page() {
  return (
    <VerifiedJailGuide
      jail={{
        name: 'Broward County Main Jail',
        countyName: 'Broward',
        countySlug: 'broward',
        address: '555 SE 1st Avenue, Fort Lauderdale, FL 33301',
        phone: '(954) 831-5900',
        phoneHref: '+19548315900',
        inmateSearchUrl: arrestSearchUrl,
        facilitySourceUrl,
        jailSlug: 'broward-county-main-jail',
      }}
      additionalContent={<BrowardMainJailDetails />}
      reviewedDate="September 28, 2026"
    />
  );
}
