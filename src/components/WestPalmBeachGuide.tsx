import Link from 'next/link';
import { CheckCircle2, ExternalLink, FileSearch, MapPin, Phone, Search, ShieldCheck } from 'lucide-react';

const inmateSearchUrl = 'https://www3.pbso.org/blotter/index.cfm';
const arrestAndJailUrl = 'https://pbso.org/arrest-jail_menu';
const mainDetentionUrl = 'https://www.pbso.org/inside-pbso/corrections/inmate-management-bureau/main-detention-center';
const courtRecordsUrl = 'https://appsgp.mypalmbeachclerk.com/ecaseview';

export default function WestPalmBeachGuide() {
  return (
    <div className="space-y-8 md:col-span-2">
      <section className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8" aria-labelledby="wpb-start">
        <h2 id="wpb-start" className="text-2xl font-serif font-bold text-white">Start with the Palm Beach County inmate search</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Use the Palm Beach County Sheriff&apos;s Office inmate search before beginning bail paperwork. Confirm the correct person, current custody location, charges, booking information, and displayed bond status. An arrest in West Palm Beach does not by itself show that a bond has been set or that release is currently permitted.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950" href={inmateSearchUrl} rel="noopener noreferrer" target="_blank">
            <Search className="h-5 w-5" /> Search Palm Beach County inmates <ExternalLink className="h-4 w-4" />
          </a>
          <a className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-bold text-white" href={arrestAndJailUrl} rel="noopener noreferrer" target="_blank">
            Official arrest and jail resources <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3" aria-labelledby="wpb-contacts">
        <h2 id="wpb-contacts" className="sr-only">West Palm Beach jail and police contacts</h2>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Main Detention Center</p>
          <p className="mt-3 flex items-start gap-2 font-bold text-white"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />3228 Gun Club Road</p>
          <p className="ml-6 mt-1 text-sm text-slate-400">West Palm Beach, FL 33406</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+15616884401"><Phone className="h-4 w-4" />(561) 688-4401</a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">PBSO Inmate Records</p>
          <p className="mt-3 font-bold text-white">Custody and booking information</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+15616884340"><Phone className="h-4 w-4" />(561) 688-4340</a>
          <p className="mt-3 text-sm text-slate-400">PBSO says this number covers both of its correctional facilities.</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">West Palm Beach Police</p>
          <p className="mt-3 font-bold text-white">600 Banyan Boulevard</p>
          <p className="mt-1 text-sm text-slate-400">West Palm Beach, FL 33401</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+15618221900"><Phone className="h-4 w-4" />(561) 822-1900</a>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="wpb-record">
        <h2 id="wpb-record" className="text-2xl font-serif font-bold text-white">Information to verify before requesting a bail bond</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Identity and booking.</strong> Match the full legal name and save the booking or inmate number shown in the official record.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Facility.</strong> Confirm the current custody location rather than assuming every Palm Beach County booking is at Gun Club Road.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Charges and bond status.</strong> Record each charge and the amount or status displayed beside it.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Other restrictions.</strong> Ask about any separate hold or court condition that could prevent release.</span></li>
        </ul>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><MapPin className="h-6 w-6 shrink-0 text-yellow-500" />What “Gun Club Road bail bonds” usually refers to</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            The Main Detention Center is at the Sheriff&apos;s Headquarters Complex on Gun Club Road in ZIP code 33406. A search using that phrase often concerns a person believed to be held there. Confirm the facility in the live inmate record before traveling or sending documents; Palm Beach County also operates the West Detention Center in Belle Glade.
          </p>
          <a className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline" href={mainDetentionUrl} rel="noopener noreferrer" target="_blank">View the official Main Detention Center page <ExternalLink className="h-4 w-4" /></a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><FileSearch className="h-6 w-6 shrink-0 text-yellow-500" />Jail record versus court record</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            The PBSO search is the starting point for current custody and booking information. The Palm Beach County Clerk&apos;s eCaseView is a separate official source for filed criminal and traffic cases, charges, court dates, parties, and available case documents. A new case may not appear immediately, so do not treat a missing court result as proof that the person is not in custody.
          </p>
          <a className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline" href={courtRecordsUrl} rel="noopener noreferrer" target="_blank">Search Palm Beach County court records <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8" aria-labelledby="wpb-dui-hours">
        <h2 id="wpb-dui-hours" className="text-2xl font-serif font-bold text-white">DUI, online and after-hours bail requests</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          For a DUI or late-night arrest, start with the same live custody record. A service may answer after hours or accept documents online, but only the court and detention agency control bond eligibility, holds, processing, and release. Release timing depends on their procedures and the facts of the case.
        </p>
        <div className="mt-6 flex flex-wrap gap-5 text-sm">
          <Link className="text-yellow-500 underline" href="/services/dui-bail-bonds">Florida DUI bail information</Link>
          <Link className="text-yellow-500 underline" href="/services/online-bail-bonds">Online bail-bond safety</Link>
          <a className="text-yellow-500 underline" href="https://licenseesearch.fldfs.com/" rel="noopener noreferrer" target="_blank">Verify a Florida agent&apos;s license</a>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="wpb-provider">
        <h2 id="wpb-provider" className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><ShieldCheck className="h-6 w-6 shrink-0 text-yellow-500" />Before choosing a West Palm Beach bail-bond provider</h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Verify the individual agent&apos;s Florida license, ask for written terms, and understand the premium, collateral, payment, and indemnitor obligations before signing. Do not send identification or money solely because a website appears for a local search. Bond Florida does not claim a walk-in office at the jail or on Gun Club Road.
        </p>
        <a className="mt-5 inline-flex text-yellow-500 underline" href="https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview" rel="noopener noreferrer" target="_blank">Read the Florida DFS consumer guide</a>
      </section>

      <section className="rounded-xl border border-yellow-500/30 bg-slate-900 p-8 text-center" aria-labelledby="wpb-help">
        <h2 id="wpb-help" className="text-2xl font-serif font-bold text-white">Need help with a West Palm Beach custody or bond question?</h2>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-400">Have the full name, booking number, facility, charges, and displayed bond status ready. Bond Florida can help organize the request and arrange contact with a professional who may be able to assist.</p>
        <Link className="mt-6 inline-flex rounded-lg bg-yellow-500 px-6 py-3 font-bold text-slate-950 hover:bg-yellow-400" href="/contact">Request assistance</Link>
      </section>

      <p className="text-sm leading-relaxed text-slate-500">
        Official jail, police, and court-record sources reviewed November 12, 2026. Procedures and records can change; use the linked government sources for time-sensitive decisions. Bond Florida is not a court, jail, law-enforcement agency, or law firm.
      </p>
    </div>
  );
}
