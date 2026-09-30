import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, FileSearch, Info, Phone } from 'lucide-react';
import VerifiedJailGuide from '@/components/VerifiedJailGuide';
import { pageMetadata } from '@/lib/seo';

const inmateSearchUrl = 'https://www.miamidade.gov/Apps/mdcr/inmateSearch/';
const releaseSourceUrl = 'https://www.miamidade.gov/global/corrections/inmate-release.page';
const contactSourceUrl = 'https://www.miamidade.gov/global/service.page?Mduid_service=ser1479236266010643';

export const metadata: Metadata = pageMetadata({
  title: 'TGK Jail Inmate Search, Release & Phone | Miami',
  description: 'Search Miami-Dade custody records, find the TGK jail phone and address, and review official booking, bond and release information for TGK Miami.',
  path: '/jail/tgk-correctional-center',
});

function TgkDetails() {
  return (
    <div className="space-y-8">
      <section className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8" aria-labelledby="tgk-quick-facts">
        <h2 id="tgk-quick-facts" className="text-2xl font-serif font-bold text-white">TGK jail quick facts</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          TGK is the common name for the Turner Guilford Knight Correctional Center, a Miami-Dade Corrections and Rehabilitation facility. Use the county&apos;s official search before calling or traveling because a person&apos;s custody location can change.
        </p>
        <dl className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-5">
            <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">TGK facility</dt>
            <dd className="mt-2"><a className="inline-flex items-center gap-2 font-bold text-yellow-500 underline" href="tel:+17862635341"><Phone className="h-4 w-4" />(786) 263-5341</a></dd>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-5">
            <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Inmate and bond information</dt>
            <dd className="mt-2"><a className="inline-flex items-center gap-2 font-bold text-yellow-500 underline" href="tel:+17862637000"><Phone className="h-4 w-4" />(786) 263-7000</a></dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="tgk-inmate-search">
        <h2 id="tgk-inmate-search" className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><FileSearch className="h-6 w-6 text-yellow-500" />How to search for someone at TGK</h2>
        <ol className="mt-5 space-y-4 text-slate-400">
          <li className="rounded-lg border border-slate-800 p-5"><span className="font-bold text-white">1. Open the official Miami-Dade inmate search.</span> Search using the person&apos;s identifying information and check the spelling carefully.</li>
          <li className="rounded-lg border border-slate-800 p-5"><span className="font-bold text-white">2. Confirm the displayed facility and status.</span> A Miami-Dade record does not necessarily mean the person is currently housed at TGK.</li>
          <li className="rounded-lg border border-slate-800 p-5"><span className="font-bold text-white">3. Save the jail number and case details.</span> Note the listed charges, bond information, and jail number before contacting the agency or a licensed professional.</li>
        </ol>
        <a className="mt-6 inline-flex items-center gap-2 font-bold text-yellow-500 underline" href={inmateSearchUrl} rel="noopener noreferrer" target="_blank">Search Miami-Dade custody records <ExternalLink className="h-4 w-4" /></a>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="tgk-release-information">
        <h2 id="tgk-release-information" className="text-2xl font-serif font-bold text-white">TGK release and bond information</h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Miami-Dade identifies bond, pretrial release, and a court hearing as possible release paths. The appropriate path depends on the official record, the court&apos;s orders, and any additional holds. Check the current custody record or call the county&apos;s inmate and bond-information line before starting paperwork.
        </p>
        <p className="mt-4 leading-relaxed text-slate-400">
          The county states that designated releases from TGK take place between 6 a.m. and 9 p.m. That window is not an estimate or a promise for any individual. Court review, payment processing, other holds, transportation, medical clearance, and discharge queues can change the actual timing.
        </p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm">
          <a className="inline-flex items-center gap-2 text-yellow-500 underline" href={releaseSourceUrl} rel="noopener noreferrer" target="_blank">Official Miami-Dade release information <ExternalLink className="h-4 w-4" /></a>
          <a className="inline-flex items-center gap-2 text-yellow-500 underline" href={contactSourceUrl} rel="noopener noreferrer" target="_blank">Official contact and visitation information <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8" aria-labelledby="tgk-before-calling">
        <h2 id="tgk-before-calling" className="flex items-center gap-3 text-xl font-bold text-white"><Info className="h-6 w-6 text-blue-400" />Before calling or traveling</h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Have the person&apos;s full legal name, date of birth, jail number if available, booking date, and the charge or bond details shown in the official search. Ask which facility currently holds the person and which office can answer the specific question. Do not rely on an unsolicited caller&apos;s payment instructions; verify the record and the professional&apos;s license first.
        </p>
        <p className="mt-4 text-sm text-slate-400">
          For nearby context, review the <Link className="text-yellow-500 underline" href="/county/miami-dade">Miami-Dade jail guide</Link>, the <Link className="text-yellow-500 underline" href="/county/miami-dade/miami">Miami arrest and jail guide</Link>, the <Link className="text-yellow-500 underline" href="/jail/metro-west-detention-center">Metro West Detention Center guide</Link>, or the <Link className="text-yellow-500 underline" href="/services/online-bail-bonds">online bail-bond safety guide</Link>.
        </p>
      </section>
    </div>
  );
}

export default function Page() {
  return (
    <VerifiedJailGuide
      jail={{
        name: 'Turner Guilford Knight (TGK) Correctional Center',
        countyName: 'Miami-Dade',
        countySlug: 'miami-dade',
        address: '7000 NW 41st Street, Miami, FL 33166',
        phone: '(786) 263-5341',
        phoneHref: '+17862635341',
        inmateSearchUrl,
        facilitySourceUrl: contactSourceUrl,
        jailSlug: 'tgk-correctional-center',
      }}
      additionalContent={<TgkDetails />}
      reviewedDate="September 28, 2026"
    />
  );
}
