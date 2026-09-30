import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, FileSearch, Info, Phone } from 'lucide-react';
import VerifiedJailGuide from '@/components/VerifiedJailGuide';
import { pageMetadata } from '@/lib/seo';

const inmateSearchUrl = 'https://jailinfo.pascocorrections.net/jmc/';
const correctionsSourceUrl = 'https://www.pascocountyfl.gov/services/pasco_corrections/index.php';
const inmateServicesUrl = 'https://www.pascocountyfl.gov/inmate_services/index.php';
const warrantsUrl = 'https://pascosheriff.com/active-warrants/';

export const metadata: Metadata = pageMetadata({
  title: "Land O' Lakes Jail Inmate Search, Phone & Address",
  description: "Find the Land O' Lakes Detention Center address and phone, search Pasco County custody records, and review verified booking and release resources.",
  path: '/jail/land-o-lakes-detention-center',
});

function LandOLakesDetails() {
  return (
    <div className="space-y-8">
      <section className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8" aria-labelledby="land-o-lakes-quick-facts">
        <h2 id="land-o-lakes-quick-facts" className="text-2xl font-serif font-bold text-white">Land O&apos; Lakes jail address and phone</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          The Land O&apos; Lakes Detention Center is Pasco County&apos;s central detention facility. Pasco County also refers to its detention operations as Pasco Corrections. Confirm the person&apos;s current custody record before calling or traveling because booking and release activity may not appear immediately.
        </p>
        <dl className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-5">
            <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Facility address</dt>
            <dd className="mt-2 font-bold text-white">20101 Central Boulevard<br />Land O&apos; Lakes, FL 34637</dd>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-5">
            <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Main facility phone</dt>
            <dd className="mt-2"><a className="inline-flex items-center gap-2 font-bold text-yellow-500 underline" href="tel:+18139966982"><Phone className="h-4 w-4" />(813) 996-6982</a></dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="pasco-inmate-search">
        <h2 id="pasco-inmate-search" className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><FileSearch className="h-6 w-6 text-yellow-500" />How to search Pasco County custody records</h2>
        <ol className="mt-5 space-y-4 text-slate-400">
          <li className="rounded-lg border border-slate-800 p-5"><span className="font-bold text-white">1. Open the Pasco Corrections inmate-search portal.</span> Use the current-custody search rather than the sheriff&apos;s active-warrants page.</li>
          <li className="rounded-lg border border-slate-800 p-5"><span className="font-bold text-white">2. Search with exact identifying information.</span> Check the legal name carefully and use the booking number when one is available.</li>
          <li className="rounded-lg border border-slate-800 p-5"><span className="font-bold text-white">3. Record the displayed details.</span> Save the booking number, listed charges, bond information, and custody status before contacting the facility or a licensed professional.</li>
        </ol>
        <a className="mt-6 inline-flex items-center gap-2 font-bold text-yellow-500 underline" href={inmateSearchUrl} rel="noopener noreferrer" target="_blank">Search Pasco Corrections custody records <ExternalLink className="h-4 w-4" /></a>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="pasco-booking-release">
        <h2 id="pasco-booking-release" className="text-2xl font-serif font-bold text-white">Pasco booking, bond and release information</h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Use the current-custody record to verify the listed charges and any bond information. A warrant result is not the same as confirmation that someone is currently booked at the detention center. If the person does not appear or the record is unclear, use Pasco County&apos;s official Corrections and inmate-services resources for current contact instructions.
        </p>
        <p className="mt-4 leading-relaxed text-slate-400">
          Release timing depends on the court&apos;s orders, completion of booking, payment processing, other agency holds, medical clearance, transportation, and the facility&apos;s discharge process. Do not rely on an estimated time as confirmation of release, and verify the current status before arranging pickup.
        </p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm">
          <a className="inline-flex items-center gap-2 text-yellow-500 underline" href={correctionsSourceUrl} rel="noopener noreferrer" target="_blank">Official Pasco Corrections information <ExternalLink className="h-4 w-4" /></a>
          <a className="inline-flex items-center gap-2 text-yellow-500 underline" href={inmateServicesUrl} rel="noopener noreferrer" target="_blank">Official inmate services <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8" aria-labelledby="pasco-before-calling">
        <h2 id="pasco-before-calling" className="flex items-center gap-3 text-xl font-bold text-white"><Info className="h-6 w-6 text-blue-400" />Custody search versus warrant search</h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          The inmate-search portal is for current custody and booking information. The Pasco Sheriff&apos;s Office <a className="text-yellow-500 underline" href={warrantsUrl} rel="noopener noreferrer" target="_blank">active-warrants search</a> serves a different purpose and does not prove that a person is currently inside the Land O&apos; Lakes facility. Use the source that matches the question you need answered.
        </p>
        <p className="mt-4 text-sm text-slate-400">
          Continue with the <Link className="text-yellow-500 underline" href="/county/pasco">Pasco County jail guide</Link>, the <Link className="text-yellow-500 underline" href="/county/pasco/wesley-chapel">Wesley Chapel arrest and jail guide</Link>, the <Link className="text-yellow-500 underline" href="/county/pasco/new-port-richey">New Port Richey arrest and jail guide</Link>, or the <Link className="text-yellow-500 underline" href="/services/online-bail-bonds">online bail-bond safety guide</Link>.
        </p>
      </section>
    </div>
  );
}

export default function Page() {
  return (
    <VerifiedJailGuide
      jail={{
        name: "Land O' Lakes Detention Center",
        countyName: 'Pasco',
        countySlug: 'pasco',
        address: "20101 Central Boulevard, Land O' Lakes, FL 34637",
        phone: '(813) 996-6982',
        phoneHref: '+18139966982',
        inmateSearchUrl,
        facilitySourceUrl: correctionsSourceUrl,
        jailSlug: 'land-o-lakes-detention-center',
      }}
      additionalContent={<LandOLakesDetails />}
      reviewedDate="September 28, 2026"
    />
  );
}
