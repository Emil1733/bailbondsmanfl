import Link from 'next/link';
import { CheckCircle2, ExternalLink, FileSearch, MapPin, Phone, Search, ShieldCheck } from 'lucide-react';

const arrestInquiryUrl = 'https://webapps.hcso.tampa.fl.us/ArrestInquiry';
const detentionUrl = 'https://teamhcso.com/Section/708bcd1f-1d7b-4029-8428-39aac7343910/Department-of-Detention-Services';
const courtRecordsUrl = 'https://hover.hillsclerk.com/html/home.html';

export default function TampaGuide() {
  return (
    <div className="space-y-8 md:col-span-2">
      <section className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8" aria-labelledby="tampa-start">
        <h2 id="tampa-start" className="text-2xl font-serif font-bold text-white">Start with the Hillsborough County arrest inquiry</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Use the Hillsborough County Sheriff&apos;s Office Arrest Inquiry before contacting a Tampa bail-bond provider. The official search lists people currently in jail and can show charges, bond amounts, booking details, and the assigned facility. Match the full name and booking information before relying on the record.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950" href={arrestInquiryUrl} rel="noopener noreferrer" target="_blank">
            <Search className="h-5 w-5" /> Search Hillsborough arrests <ExternalLink className="h-4 w-4" />
          </a>
          <a className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-bold text-white" href={detentionUrl} rel="noopener noreferrer" target="_blank">
            Official detention information <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-slate-400">HCSO says its system is updated every 30 minutes. During the first 24 hours, a new arrest may require a direct first-and-last-name search instead of appearing in general listings.</p>
      </section>

      <section className="grid gap-5 lg:grid-cols-3" aria-labelledby="tampa-contacts">
        <h2 id="tampa-contacts" className="sr-only">Tampa jail and police contacts</h2>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Orient Road Jail</p>
          <p className="mt-3 flex items-start gap-2 font-bold text-white"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />1201 N. Orient Road</p>
          <p className="ml-6 mt-1 text-sm text-slate-400">Tampa, FL 33619</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+18132478300"><Phone className="h-4 w-4" />(813) 247-8300</a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Falkenburg Road Jail</p>
          <p className="mt-3 flex items-start gap-2 font-bold text-white"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />520 N. Falkenburg Road</p>
          <p className="ml-6 mt-1 text-sm text-slate-400">Tampa, FL 33619</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+18132478300"><Phone className="h-4 w-4" />(813) 247-8300</a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Tampa Police Headquarters</p>
          <p className="mt-3 font-bold text-white">411 N. Franklin Street</p>
          <p className="mt-1 text-sm text-slate-400">Tampa, FL 33602</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+18132763200"><Phone className="h-4 w-4" />(813) 276-3200</a>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="tampa-record">
        <h2 id="tampa-record" className="text-2xl font-serif font-bold text-white">Information to verify before requesting a criminal bond</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Identity and booking.</strong> Match the full legal name and save the booking number displayed by HCSO.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Assigned facility.</strong> Check whether the person is listed at Orient Road or Falkenburg Road.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Every charge and bond.</strong> Record each charge and the amount or status shown beside it.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Holds and conditions.</strong> Ask whether another court, agency, or release condition affects eligibility.</span></li>
        </ul>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><MapPin className="h-6 w-6 shrink-0 text-yellow-500" />Orient Road versus Falkenburg Road Jail</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            HCSO identifies Orient Road Jail as Hillsborough County&apos;s primary receiving facility, with central booking, intake, inmate records, and classification functions. Falkenburg Road Jail is a separate detention facility. Do not assume a person remains at the initial booking location; use the live arrest record and confirm pickup or release instructions directly with HCSO before traveling.
          </p>
          <div className="mt-5 flex flex-wrap gap-5 text-sm">
            <Link className="text-yellow-500 underline" href="/jail/orient-road-jail">Orient Road Jail guide</Link>
            <Link className="text-yellow-500 underline" href="/jail/falkenburg-road-jail">Falkenburg Road Jail guide</Link>
          </div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><FileSearch className="h-6 w-6 shrink-0 text-yellow-500" />Arrest inquiry versus court record</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            HCSO&apos;s inquiry reflects arrest and jail information available to the Sheriff. It does not establish guilt or show the final disposition of a criminal case. The Hillsborough County Clerk&apos;s HOVER system is the separate official source for many court indexes, case dockets, hearing information, and non-confidential documents.
          </p>
          <a className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline" href={courtRecordsUrl} rel="noopener noreferrer" target="_blank">Search Hillsborough court records <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8" aria-labelledby="tampa-surrender">
        <h2 id="tampa-surrender" className="text-2xl font-serif font-bold text-white">Before a self-arrest or voluntary surrender in Tampa</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Do not travel to a jail based only on an online search or assume that a “walk-through” process is available. Confirm the warrant, issuing court, surrender location, identification requirements, bond status, and any required appointment with the responsible agency or a qualified attorney. A bondsman may help prepare paperwork when legally permitted, but cannot promise that booking will be skipped or that release will be immediate.
        </p>
        <Link className="mt-5 inline-flex text-yellow-500 underline" href="/warrant-search">Review Florida warrant-search safety</Link>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="tampa-provider">
        <h2 id="tampa-provider" className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><ShieldCheck className="h-6 w-6 shrink-0 text-yellow-500" />Before choosing a Tampa bail-bond provider</h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Verify the individual agent&apos;s Florida license, request written terms, and understand the premium, collateral, payment, and indemnitor obligations before signing. Claims such as “fast release” or “near the jail” do not mean a provider controls booking, court review, holds, or jail release processing. Bond Florida does not claim a walk-in Tampa office near either jail.
        </p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm">
          <a className="text-yellow-500 underline" href="https://licenseesearch.fldfs.com/" rel="noopener noreferrer" target="_blank">Verify a Florida agent&apos;s license</a>
          <a className="text-yellow-500 underline" href="https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview" rel="noopener noreferrer" target="_blank">Read the Florida DFS consumer guide</a>
        </div>
      </section>

      <section className="rounded-xl border border-yellow-500/30 bg-slate-900 p-8 text-center" aria-labelledby="tampa-help">
        <h2 id="tampa-help" className="text-2xl font-serif font-bold text-white">Need help with a Tampa custody or bond question?</h2>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-400">Have the full name, booking number, assigned facility, charges, and displayed bond status ready. Bond Florida can help organize the request and arrange contact with a professional who may be able to assist.</p>
        <Link className="mt-6 inline-flex rounded-lg bg-yellow-500 px-6 py-3 font-bold text-slate-950 hover:bg-yellow-400" href="/contact">Request assistance</Link>
      </section>

      <p className="text-sm leading-relaxed text-slate-500">
        Official HCSO, Tampa Police, and Hillsborough County Clerk sources reviewed November 12, 2026. Procedures and records can change; use the linked government sources for time-sensitive decisions. Bond Florida is not a court, jail, law-enforcement agency, or law firm.
      </p>
    </div>
  );
}
