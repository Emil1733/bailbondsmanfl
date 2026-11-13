import Link from 'next/link';
import type { ReactNode } from 'react';
import { CheckCircle2, ExternalLink, FileSearch, MapPin, Phone, Search, ShieldCheck } from 'lucide-react';

const arrestSearchUrl = 'https://www.sheriffleefl.org/arrest-search/';
const correctionsUrl = 'https://www.sheriffleefl.org/corrections/';
const facilitiesUrl = 'https://www.sheriffleefl.org/facility-directory/';
const courtRecordsUrl = 'https://matrix.leeclerk.org/';

export default function BonitaSpringsGuide() {
  return (
    <div className="space-y-8 md:col-span-2">
      <section className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8" aria-labelledby="bonita-start">
        <h2 id="bonita-start" className="text-2xl font-serif font-bold text-white">Start with the Lee County arrest search</h2>
        <p className="mt-4 leading-relaxed text-slate-300">For a Bonita Springs arrest or criminal-bond question, begin with the Lee County Sheriff&apos;s Office arrest search. Match the correct person, then record the booking information, charges, custody status, assigned facility, and every displayed bond entry. An arrest record does not establish guilt, final case disposition, or immediate eligibility for release.</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950" href={arrestSearchUrl} rel="noopener noreferrer" target="_blank"><Search className="h-5 w-5" />Search Lee County arrests <ExternalLink className="h-4 w-4" /></a>
          <a className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-bold text-white" href={correctionsUrl} rel="noopener noreferrer" target="_blank">Official jail information <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3" aria-labelledby="bonita-contacts">
        <h2 id="bonita-contacts" className="sr-only">Bonita Springs law-enforcement and Lee County jail contacts</h2>
        <ContactCard label="LCSO 4th Precinct" address="8350 Hospital Drive, Suite 114" city="Bonita Springs, FL 34135" phone="(239) 477-1840" phoneHref="+12394771840" />
        <ContactCard label="Lee County Jail — intake" address="2115 Dr. Martin Luther King Jr. Blvd." city="Fort Myers, FL 33901" phone="(239) 477-1700" phoneHref="+12394771700" />
        <ContactCard label="Lee County Core / CPU" address="2501 Ortiz Avenue" city="Fort Myers, FL 33905" phone="(239) 477-1500" phoneHref="+12394771500" />
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="bonita-checklist">
        <h2 id="bonita-checklist" className="text-2xl font-serif font-bold text-white">What to verify before requesting a criminal bond</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <CheckItem title="Identity and booking.">Match the full legal name and save the booking number in the LCSO record.</CheckItem>
          <CheckItem title="Assigned facility.">Confirm the current location instead of assuming the person is at Ortiz Avenue.</CheckItem>
          <CheckItem title="Every charge and bond.">A separate amount or status may apply to each charge.</CheckItem>
          <CheckItem title="Holds and conditions.">Ask whether court review, another agency, or a release condition affects eligibility.</CheckItem>
        </ul>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><MapPin className="h-6 w-6 shrink-0 text-yellow-500" />The Bonita Springs precinct is not a jail</h2>
          <p className="mt-4 leading-relaxed text-slate-400">LCSO lists its 4th Precinct at 8350 Hospital Drive in Bonita Springs. That office is a local Sheriff&apos;s Office contact, not an inmate housing or release location. LCSO identifies the downtown Fort Myers jail as its central intake and booking facility and separately operates the Core / CPU site on Ortiz Avenue. Verify the live record and pickup instructions before traveling.</p>
          <a className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline" href={facilitiesUrl} rel="noopener noreferrer" target="_blank">Official LCSO facility directory <ExternalLink className="h-4 w-4" /></a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><FileSearch className="h-6 w-6 shrink-0 text-yellow-500" />Arrest record versus court record</h2>
          <p className="mt-4 leading-relaxed text-slate-400">The LCSO arrest search is the starting point for available custody and arrest information. The Lee County Clerk&apos;s Court Records Inquiry is a separate official source for many criminal and traffic cases, dockets, hearings, and public documents. A new court filing may not appear immediately, and public access varies by case and document type.</p>
          <a className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline" href={courtRecordsUrl} rel="noopener noreferrer" target="_blank">Search Lee County court records <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8" aria-labelledby="bonita-criminal-bond">
        <h2 id="bonita-criminal-bond" className="text-2xl font-serif font-bold text-white">What a displayed criminal bond does—and does not—mean</h2>
        <p className="mt-4 leading-relaxed text-slate-300">A dollar amount in an arrest record may be only one part of the release picture. Confirm every charge, the bond type and current status, any separate hold, required court review, and conditions of release. A licensed agent can explain whether a surety bond may be available, but cannot change a court order, remove a hold, skip booking, or control when LCSO will complete release processing.</p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm"><Link className="text-yellow-500 underline" href="/services/24-hour-bail-bonds">After-hours request information</Link><Link className="text-yellow-500 underline" href="/services/traffic-warrant-bail">Traffic and warrant information</Link></div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="bonita-provider">
        <h2 id="bonita-provider" className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><ShieldCheck className="h-6 w-6 shrink-0 text-yellow-500" />Before choosing a Bonita Springs bail-bond agency</h2>
        <p className="mt-4 leading-relaxed text-slate-400">Verify the individual agent&apos;s Florida license, identify the licensed agency that will write the bond, and obtain written terms before paying or signing. Review the premium, collateral, payment arrangement, refund rules, and indemnitor obligations. Search visibility in Bonita Springs does not prove that a provider has a local walk-in office or controls Lee County release processing. Bond Florida does not claim a Bonita Springs office.</p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm"><a className="text-yellow-500 underline" href="https://licenseesearch.fldfs.com/" rel="noopener noreferrer" target="_blank">Verify a Florida agent&apos;s license</a><a className="text-yellow-500 underline" href="https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview" rel="noopener noreferrer" target="_blank">Florida DFS consumer guide</a></div>
      </section>

      <section className="rounded-xl border border-yellow-500/30 bg-slate-900 p-8 text-center" aria-labelledby="bonita-help">
        <h2 id="bonita-help" className="text-2xl font-serif font-bold text-white">Need help with a Bonita Springs bond question?</h2>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-400">Have the full name, booking number, assigned facility, charges, and displayed bond status ready. Bond Florida can help organize the request and arrange contact with a professional who may be able to assist.</p>
        <Link className="mt-6 inline-flex rounded-lg bg-yellow-500 px-6 py-3 font-bold text-slate-950 hover:bg-yellow-400" href="/contact">Request assistance</Link>
      </section>
      <p className="text-sm leading-relaxed text-slate-500">Official LCSO and Lee County Clerk sources reviewed November 13, 2026. Procedures and records can change; use the linked government sources for time-sensitive decisions. Bond Florida is not a court, jail, law-enforcement agency, or law firm.</p>
    </div>
  );
}

function ContactCard({ label, address, city, phone, phoneHref }: { label: string; address: string; city: string; phone: string; phoneHref: string }) {
  return <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</p><p className="mt-3 flex items-start gap-2 font-bold text-white"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />{address}</p><p className="ml-6 mt-1 text-sm text-slate-400">{city}</p><a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href={`tel:${phoneHref}`}><Phone className="h-4 w-4" />{phone}</a></div>;
}

function CheckItem({ title, children }: { title: string; children: ReactNode }) {
  return <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">{title}</strong> {children}</span></li>;
}
