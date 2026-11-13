import Link from 'next/link';
import { CheckCircle2, ExternalLink, FileSearch, MapPin, Phone, Search, ShieldCheck } from 'lucide-react';

const arrestSearchUrl = 'https://www.sheriffleefl.org/arrest-search/';
const correctionsUrl = 'https://www.sheriffleefl.org/corrections/';
const courtRecordsUrl = 'https://matrix.leeclerk.org/';

export default function FortMyersGuide() {
  return (
    <div className="space-y-8 md:col-span-2">
      <section className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8" aria-labelledby="fort-myers-start">
        <h2 id="fort-myers-start" className="text-2xl font-serif font-bold text-white">Start with the Lee County arrest search</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Use the Lee County Sheriff&apos;s Office arrest search before contacting a Fort Myers bail-bond provider. Confirm the correct person, booking information, custody status, charges, and assigned facility. The Sheriff cautions that an arrest record reflects information available at that time and does not show guilt or the final disposition of a criminal charge.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950" href={arrestSearchUrl} rel="noopener noreferrer" target="_blank">
            <Search className="h-5 w-5" /> Search Lee County arrests <ExternalLink className="h-4 w-4" />
          </a>
          <a className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-bold text-white" href={correctionsUrl} rel="noopener noreferrer" target="_blank">
            Official jail-facility directory <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3" aria-labelledby="fort-myers-contacts">
        <h2 id="fort-myers-contacts" className="sr-only">Fort Myers jail and police contacts</h2>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Lee County Core / CPU</p>
          <p className="mt-3 flex items-start gap-2 font-bold text-white"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />2501 Ortiz Avenue</p>
          <p className="ml-6 mt-1 text-sm text-slate-400">Fort Myers, FL 33905</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+12394771500"><Phone className="h-4 w-4" />(239) 477-1500</a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Lee County Jail — downtown</p>
          <p className="mt-3 flex items-start gap-2 font-bold text-white"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />2115 Dr. Martin Luther King Jr. Blvd.</p>
          <p className="ml-6 mt-1 text-sm text-slate-400">Fort Myers, FL 33901</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+12394771700"><Phone className="h-4 w-4" />(239) 477-1700</a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Fort Myers Police</p>
          <p className="mt-3 font-bold text-white">2210 Widman Way</p>
          <p className="mt-1 text-sm text-slate-400">Fort Myers, FL 33901</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+12393217700"><Phone className="h-4 w-4" />(239) 321-7700</a>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="fort-myers-record">
        <h2 id="fort-myers-record" className="text-2xl font-serif font-bold text-white">Information to verify before requesting a bail bond</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Identity and booking.</strong> Match the full legal name and save the booking number shown in the LCSO record.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Assigned facility.</strong> Confirm whether the person is at the Ortiz site, downtown jail, or another listed facility.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Charges and bond status.</strong> Record every charge and the amount or status displayed with it.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Holds and conditions.</strong> Ask whether another court, agency, or release condition affects eligibility.</span></li>
        </ul>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><MapPin className="h-6 w-6 shrink-0 text-yellow-500" />Ortiz jail versus the downtown Fort Myers jail</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            “Ortiz jail” commonly refers to the Lee County Core / CPU facility at 2501 Ortiz Avenue. LCSO also lists the Lee County Jail at 2115 Dr. Martin Luther King Jr. Boulevard downtown. They are separate facilities with different phone numbers. Search the current arrest record and confirm any release or pickup instructions before traveling.
          </p>
          <Link className="mt-5 inline-flex text-yellow-500 underline" href="/jail/lee-county-core-facility">Review the Lee County Core facility guide</Link>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><FileSearch className="h-6 w-6 shrink-0 text-yellow-500" />Arrest record versus court record</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            The LCSO arrest search is the starting point for available arrest and detention information. The Lee County Clerk&apos;s Court Records Inquiry is the separate official source for many court cases, dockets, documents, and hearing information. Public access varies by case and document type, and a new filing may not appear immediately.
          </p>
          <a className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline" href={courtRecordsUrl} rel="noopener noreferrer" target="_blank">Search Lee County court records <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8" aria-labelledby="fort-myers-release">
        <h2 id="fort-myers-release" className="text-2xl font-serif font-bold text-white">Criminal, traffic and jail-release bond questions</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          A displayed bond amount does not necessarily mean immediate release is available. Verify every charge, the type and status of the bond, the assigned facility, and any separate hold or court condition. For traffic or warrant-related matters, also confirm the court record and responsible agency. The jail and court control eligibility and release processing, so completion time varies by case.
        </p>
        <div className="mt-6 flex flex-wrap gap-5 text-sm">
          <Link className="text-yellow-500 underline" href="/services/traffic-warrant-bail">Traffic and warrant information</Link>
          <Link className="text-yellow-500 underline" href="/services/online-bail-bonds">Online bail-bond safety</Link>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="fort-myers-provider">
        <h2 id="fort-myers-provider" className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><ShieldCheck className="h-6 w-6 shrink-0 text-yellow-500" />Before choosing a Fort Myers bail-bond provider</h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Verify the individual agent&apos;s Florida license, request written terms, and understand the premium, collateral, payment, and indemnitor obligations before signing. A website ranking for Ortiz Avenue or downtown jail searches does not prove that it has an office there or controls the release process. Bond Florida does not claim a walk-in Fort Myers office at either jail.
        </p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm">
          <a className="text-yellow-500 underline" href="https://licenseesearch.fldfs.com/" rel="noopener noreferrer" target="_blank">Verify a Florida agent&apos;s license</a>
          <a className="text-yellow-500 underline" href="https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview" rel="noopener noreferrer" target="_blank">Read the Florida DFS consumer guide</a>
        </div>
      </section>

      <section className="rounded-xl border border-yellow-500/30 bg-slate-900 p-8 text-center" aria-labelledby="fort-myers-help">
        <h2 id="fort-myers-help" className="text-2xl font-serif font-bold text-white">Need help with a Fort Myers custody or bond question?</h2>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-400">Have the full name, booking number, assigned facility, charges, and displayed bond status ready. Bond Florida can help organize the request and arrange contact with a professional who may be able to assist.</p>
        <Link className="mt-6 inline-flex rounded-lg bg-yellow-500 px-6 py-3 font-bold text-slate-950 hover:bg-yellow-400" href="/contact">Request assistance</Link>
      </section>

      <p className="text-sm leading-relaxed text-slate-500">
        Official LCSO, Fort Myers Police, and Lee County Clerk sources reviewed November 12, 2026. Procedures and records can change; use the linked government sources for time-sensitive decisions. Bond Florida is not a court, jail, law-enforcement agency, or law firm.
      </p>
    </div>
  );
}
