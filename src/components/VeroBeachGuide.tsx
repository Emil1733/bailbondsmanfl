import Link from 'next/link';
import { CheckCircle2, ExternalLink, FileSearch, Phone, Search, ShieldCheck } from 'lucide-react';

const inmateSearchUrl = 'https://www.ircsheriff.org/inmate-search';
const correctionsUrl = 'https://www.ircsheriff.org/corrections';
const courtRecordsUrl = 'https://indianriverclerk.com/court-records/online-case-view/';

export default function VeroBeachGuide() {
  return (
    <div className="space-y-8 md:col-span-2">
      <section className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8" aria-labelledby="vero-start">
        <h2 id="vero-start" className="text-2xl font-serif font-bold text-white">Start with the official Vero Beach jail lookup</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          The Indian River County Sheriff&apos;s Office operates the county jail at 4055 41st Avenue in Vero Beach. Use the Sheriff&apos;s inmate search to confirm that the person is in custody and record the booking details before discussing payment or paperwork. A Vero Beach arrest does not by itself confirm that a bond has been set or that release is currently permitted.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950" href={inmateSearchUrl} rel="noopener noreferrer" target="_blank">
            <Search className="h-5 w-5" /> Search Indian River inmates <ExternalLink className="h-4 w-4" />
          </a>
          <a className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-bold text-white" href={correctionsUrl} rel="noopener noreferrer" target="_blank">
            Official jail and bond instructions <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3" aria-labelledby="vero-contacts">
        <h2 id="vero-contacts" className="sr-only">Vero Beach jail and court contacts</h2>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Indian River County Jail</p>
          <p className="mt-3 font-bold text-white">4055 41st Avenue</p>
          <p className="mt-1 text-sm text-slate-400">Vero Beach, FL 32960</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+17725696700"><Phone className="h-4 w-4" />(772) 569-6700</a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Vero Beach Police</p>
          <p className="mt-3 font-bold text-white">1055 20th Street</p>
          <p className="mt-1 text-sm text-slate-400">Vero Beach, FL 32960</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+17729784600"><Phone className="h-4 w-4" />(772) 978-4600</a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Indian River County Clerk</p>
          <p className="mt-3 font-bold text-white">2000 16th Avenue</p>
          <p className="mt-1 text-sm text-slate-400">Vero Beach, FL 32960</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+17722263100"><Phone className="h-4 w-4" />(772) 226-3100</a>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="vero-record">
        <h2 id="vero-record" className="text-2xl font-serif font-bold text-white">Information to save from the custody record</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Identity.</strong> Match the full legal name and other identifying details before relying on a record.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Booking information.</strong> Save the booking or inmate number shown in the official search.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Bond status.</strong> Record the amount and status exactly as displayed, including any charge without a set bond.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Separate holds.</strong> Check every listed charge and restriction; one bond amount may not resolve the entire custody record.</span></li>
        </ul>
      </section>

      <section className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8" aria-labelledby="vero-bond-options">
        <h2 id="vero-bond-options" className="text-2xl font-serif font-bold text-white">Bond options published by the Sheriff&apos;s Office</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          The Sheriff&apos;s corrections page says that if no bond is set, the person may need to wait for a judge at first appearance or a later court date. Once a bond is set, the official page describes full-payment options and the use of a registered bail bondsman. It also lists on-site, online, and telephone payment methods with specific identification requirements. Read the current instructions directly before sending funds because accepted methods and processing requirements can change.
        </p>
        <div className="mt-6 flex flex-wrap gap-5 text-sm">
          <a className="text-yellow-500 underline" href={correctionsUrl} rel="noopener noreferrer" target="_blank">Read current Indian River bond instructions</a>
          <a className="text-yellow-500 underline" href="https://licenseesearch.fldfs.com/" rel="noopener noreferrer" target="_blank">Verify a Florida agent&apos;s license</a>
          <Link className="text-yellow-500 underline" href="/services/online-bail-bonds">Review online bail-bond safety</Link>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><FileSearch className="h-6 w-6 text-yellow-500" />Jail record versus court record</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            The inmate search is the starting point for custody and displayed bond information. The Indian River County Clerk&apos;s public court-record system is a separate source for filed criminal and traffic cases, court dates, charges, and available documents. Names and case identifiers should match before information from the two systems is combined.
          </p>
          <a className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline" href={courtRecordsUrl} rel="noopener noreferrer" target="_blank">Search official court records <ExternalLink className="h-4 w-4" /></a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><ShieldCheck className="h-6 w-6 text-yellow-500" />About walk-through bond searches</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            People searching for a “walk-through bond” may be trying to address a warrant without an extended stay. That phrase does not guarantee a procedure or outcome in Indian River County. Confirm the warrant, issuing court, bond status, and surrender instructions with the responsible agency and a qualified professional before traveling.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-yellow-500/30 bg-slate-900 p-8 text-center" aria-labelledby="vero-help">
        <h2 id="vero-help" className="text-2xl font-serif font-bold text-white">Need help with a Vero Beach custody or bond question?</h2>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-400">Have the person&apos;s full name, booking number, listed charges, and displayed bond status ready. Bond Florida can help organize the request and arrange contact with a professional who may be able to assist.</p>
        <Link className="mt-6 inline-flex rounded-lg bg-yellow-500 px-6 py-3 font-bold text-slate-950 hover:bg-yellow-400" href="/contact">Request assistance</Link>
      </section>

      <p className="text-sm leading-relaxed text-slate-500">
        Official jail, bond, police, and court-record sources reviewed November 12, 2026. Procedures and records can change; use the linked government sources for time-sensitive decisions. Bond Florida is not a court, jail, law-enforcement agency, or law firm.
      </p>
    </div>
  );
}
