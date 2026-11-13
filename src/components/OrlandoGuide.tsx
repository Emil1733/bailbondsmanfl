import Link from 'next/link';
import { CheckCircle2, ExternalLink, FileSearch, MapPin, Phone, Search, ShieldCheck } from 'lucide-react';

const inmateSearchUrl = 'https://netapps.ocfl.net/BestJail/';
const correctionsUrl = 'https://newsroom.ocfl.net/directory/corrections-department/';
const courtRecordsUrl = 'https://myeclerk.myorangeclerk.com/Home/Index';

export default function OrlandoGuide() {
  return (
    <div className="space-y-8 md:col-span-2">
      <section className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8" aria-labelledby="orlando-start">
        <h2 id="orlando-start" className="text-2xl font-serif font-bold text-white">Start with the Orange County inmate search</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Use Orange County Corrections&apos; official inmate search before contacting an Orlando bail-bond provider. Confirm the correct person, booking number, custody status, charges, and displayed bond information. An arrest does not by itself confirm that a bond has been set or that release is currently permitted.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950" href={inmateSearchUrl} rel="noopener noreferrer" target="_blank">
            <Search className="h-5 w-5" /> Search Orange County inmates <ExternalLink className="h-4 w-4" />
          </a>
          <a className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-bold text-white" href={correctionsUrl} rel="noopener noreferrer" target="_blank">
            Official Corrections directory <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3" aria-labelledby="orlando-contacts">
        <h2 id="orlando-contacts" className="sr-only">Orlando jail and police contacts</h2>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Booking and Release Center</p>
          <p className="mt-3 flex items-start gap-2 font-bold text-white"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />3855 S. John Young Parkway</p>
          <p className="ml-6 mt-1 text-sm text-slate-400">Orlando, FL 32839</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+14078363400"><Phone className="h-4 w-4" />(407) 836-3400</a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Corrections information</p>
          <p className="mt-3 font-bold text-white">Automated service available 24 hours</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+14078363400"><Phone className="h-4 w-4" />(407) 836-3400</a>
          <p className="mt-3 text-sm text-slate-400">Orange County lists option 1 for inmate information.</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Orlando Police Headquarters</p>
          <p className="mt-3 font-bold text-white">1250 West South Street</p>
          <p className="mt-1 text-sm text-slate-400">Orlando, FL 32805</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+13212355300"><Phone className="h-4 w-4" />(321) 235-5300</a>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="orlando-record">
        <h2 id="orlando-record" className="text-2xl font-serif font-bold text-white">Information to verify before requesting a bail bond</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Identity and booking.</strong> Match the full legal name and save the booking number shown in the official record.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Custody status.</strong> Verify that the person is currently in Orange County custody and note the listed facility.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Charges and bond.</strong> Record every charge and the amount or status displayed beside it.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Conditions or holds.</strong> Ask whether another court, agency, or release condition affects eligibility.</span></li>
        </ul>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><MapPin className="h-6 w-6 shrink-0 text-yellow-500" />Orlando Police headquarters is not the jail</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            People searching for bail bonds near the Orlando Police Department may be looking for someone arrested by OPD. The headquarters on West South Street is a police facility, not the Orange County jail. Current custody and booking information comes from Orange County Corrections, and the Booking and Release Center is on South John Young Parkway. Verify the inmate record before traveling to either location.
          </p>
          <a className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline" href="https://www.orlando.gov/Our-Government/Departments-Offices/Orlando-Police-Department" rel="noopener noreferrer" target="_blank">View the official OPD page <ExternalLink className="h-4 w-4" /></a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><FileSearch className="h-6 w-6 shrink-0 text-yellow-500" />Jail record versus court record</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            The Orange County inmate search is the starting point for current custody and booking information. The Clerk of Courts&apos; my eClerk system is a separate official source for many filed criminal and traffic cases and available court documents. A case may not appear immediately after an arrest, so a missing court result does not establish that the person is not in custody.
          </p>
          <a className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline" href={courtRecordsUrl} rel="noopener noreferrer" target="_blank">Search Orange County court records <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8" aria-labelledby="orlando-dui-hours">
        <h2 id="orlando-dui-hours" className="text-2xl font-serif font-bold text-white">DUI, warrant and after-hours bail requests</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          For a DUI, warrant, traffic-related, weekend, or late-night arrest, start with the live custody record and review every listed charge. Orange County lists the Booking and Release Center and its Corrections information line as operating around the clock, but availability does not guarantee immediate bond eligibility, processing, or release. Those decisions and timelines remain under court and detention-agency control.
        </p>
        <div className="mt-6 flex flex-wrap gap-5 text-sm">
          <Link className="text-yellow-500 underline" href="/services/dui-bail-bonds">Florida DUI bail information</Link>
          <Link className="text-yellow-500 underline" href="/services/traffic-warrant-bail">Traffic and warrant information</Link>
          <Link className="text-yellow-500 underline" href="/services/24-hour-bail-bonds">After-hours request safety</Link>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="orlando-provider">
        <h2 id="orlando-provider" className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><ShieldCheck className="h-6 w-6 shrink-0 text-yellow-500" />Before choosing an Orlando bail-bond provider</h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Verify the individual agent&apos;s Florida license, request written terms, and understand the premium, collateral, payment, and indemnitor obligations before signing. Phrases such as “fast release,” “same-day release,” or “near the jail” do not prove that a provider controls the jail&apos;s process. Bond Florida does not claim a walk-in office near OPD or the Orange County jail.
        </p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm">
          <a className="text-yellow-500 underline" href="https://licenseesearch.fldfs.com/" rel="noopener noreferrer" target="_blank">Verify a Florida agent&apos;s license</a>
          <a className="text-yellow-500 underline" href="https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview" rel="noopener noreferrer" target="_blank">Read the Florida DFS consumer guide</a>
        </div>
      </section>

      <section className="rounded-xl border border-yellow-500/30 bg-slate-900 p-8 text-center" aria-labelledby="orlando-help">
        <h2 id="orlando-help" className="text-2xl font-serif font-bold text-white">Need help with an Orlando custody or bond question?</h2>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-400">Have the person&apos;s full name, booking number, custody status, charges, and displayed bond information ready. Bond Florida can help organize the request and arrange contact with a professional who may be able to assist.</p>
        <Link className="mt-6 inline-flex rounded-lg bg-yellow-500 px-6 py-3 font-bold text-slate-950 hover:bg-yellow-400" href="/contact">Request assistance</Link>
      </section>

      <p className="text-sm leading-relaxed text-slate-500">
        Official Orange County Corrections, Orlando Police, and Clerk of Courts sources reviewed November 12, 2026. Procedures and records can change; use the linked government sources for time-sensitive decisions. Bond Florida is not a court, jail, law-enforcement agency, or law firm.
      </p>
    </div>
  );
}
