import Link from 'next/link';
import { CheckCircle2, Clock3, ExternalLink, FileSearch, MapPin, Phone, Search, ShieldCheck } from 'lucide-react';

const inmateSearchUrl = 'https://whosinjail.pinellassheriff.gov/';
const correctionsUrl = 'https://www.pinellassheriff.gov/corrections';
const courtRecordsUrl = 'https://courtrecords-psc.mypinellasclerk.gov/';

export default function StPetersburgGuide() {
  return (
    <div className="space-y-8 md:col-span-2">
      <section className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8" aria-labelledby="st-pete-start">
        <h2 id="st-pete-start" className="text-2xl font-serif font-bold text-white">Start with the official Pinellas County inmate search</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Before contacting a St. Petersburg bail-bond agent, search the Pinellas County Sheriff&apos;s Office custody record. Confirm the person&apos;s identity, booking information, charges, bond entries, and current custody status. A matching name alone is not enough, and an online record can change as booking, court review, or another agency&apos;s hold is processed.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950" href={inmateSearchUrl} rel="noopener noreferrer" target="_blank">
            <Search className="h-5 w-5" /> Search Who&apos;s in Jail <ExternalLink className="h-4 w-4" />
          </a>
          <a className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-bold text-white" href={correctionsUrl} rel="noopener noreferrer" target="_blank">
            Official corrections information <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3" aria-labelledby="st-pete-contacts">
        <h2 id="st-pete-contacts" className="sr-only">St. Petersburg jail, police, and court contacts</h2>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Pinellas County Jail</p>
          <p className="mt-3 flex items-start gap-2 font-bold text-white"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />14400 49th Street North</p>
          <p className="ml-6 mt-1 text-sm text-slate-400">Clearwater, FL 33762</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+17274646415"><Phone className="h-4 w-4" />(727) 464-6415</a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">St. Petersburg Police</p>
          <p className="mt-3 font-bold text-white">1301 First Avenue North</p>
          <p className="mt-1 text-sm text-slate-400">St. Petersburg, FL 33705</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+17278937780"><Phone className="h-4 w-4" />(727) 893-7780 non-emergency</a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Pinellas County Justice Center</p>
          <p className="mt-3 font-bold text-white">14250 49th Street North</p>
          <p className="mt-1 text-sm text-slate-400">Clearwater, FL 33762</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+17274647000"><Phone className="h-4 w-4" />(727) 464-7000</a>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="st-pete-checklist">
        <h2 id="st-pete-checklist" className="text-2xl font-serif font-bold text-white">What to have ready when requesting help</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Correct identity.</strong> Match the full legal name and other available identifiers before discussing a bond.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Booking record.</strong> Save the booking number and confirm the person is currently listed in Pinellas custody.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Every charge and bond entry.</strong> A separate status may appear for each charge.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Holds and conditions.</strong> Ask whether court review, another agency, or a release condition affects eligibility.</span></li>
        </ul>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><MapPin className="h-6 w-6 shrink-0 text-yellow-500" />A St. Petersburg arrest does not mean a St. Petersburg jail</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            St. Petersburg Police headquarters is a local law-enforcement contact, not the county detention facility. The official Pinellas County listing places the jail at 14400 49th Street North in Clearwater. Do not travel to police headquarters expecting inmate pickup or bond processing. Confirm custody and release instructions with the Sheriff&apos;s Office before traveling.
          </p>
          <Link className="mt-5 inline-flex text-yellow-500 underline" href="/jail/pinellas-county-jail">Review the Pinellas County Jail guide</Link>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><FileSearch className="h-6 w-6 shrink-0 text-yellow-500" />Custody record versus court record</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            The Sheriff&apos;s search is the starting point for current custody information. The Pinellas County Clerk&apos;s Public Access Case Records system is separate and can show many court cases, dockets, and public documents. Access varies by case type and document, and a court record should not be treated as a live release-status confirmation.
          </p>
          <a className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline" href={courtRecordsUrl} rel="noopener noreferrer" target="_blank">Search Pinellas court records <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8" aria-labelledby="st-pete-hours">
        <h2 id="st-pete-hours" className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><Clock3 className="h-6 w-6 shrink-0 text-yellow-500" />What “24-hour bail bonds” should mean</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          A provider may advertise that calls or applications are accepted around the clock. That does not mean a bond is immediately available or establish a fixed release window. Booking completion, bond eligibility, court orders, holds, paperwork acceptance, and final jail release remain under government control. Ask whether a licensed agent is actually available now and request realistic next steps in writing.
        </p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm">
          <Link className="text-yellow-500 underline" href="/services/24-hour-bail-bonds">24-hour assistance guide</Link>
          <Link className="text-yellow-500 underline" href="/services/online-bail-bonds">Online bail-bond safety</Link>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="st-pete-provider">
        <h2 id="st-pete-provider" className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><ShieldCheck className="h-6 w-6 shrink-0 text-yellow-500" />How to compare St. Pete bail-bond agents safely</h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Verify the individual agent&apos;s Florida license, ask which licensed agency will write the bond, and obtain written terms before paying or signing. Review the premium, collateral, payment arrangement, refund rules, and indemnitor obligations. Search visibility, a St. Pete phone number, or claims of “fast jail release” do not prove a nearby walk-in office or control over the jail. Bond Florida does not claim a St. Petersburg office.
        </p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm">
          <a className="text-yellow-500 underline" href="https://licenseesearch.fldfs.com/" rel="noopener noreferrer" target="_blank">Verify a Florida agent&apos;s license</a>
          <a className="text-yellow-500 underline" href="https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview" rel="noopener noreferrer" target="_blank">Read the Florida DFS consumer guide</a>
        </div>
      </section>

      <section className="rounded-xl border border-yellow-500/30 bg-slate-900 p-8 text-center" aria-labelledby="st-pete-help">
        <h2 id="st-pete-help" className="text-2xl font-serif font-bold text-white">Need help with a St. Petersburg custody or bond question?</h2>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-400">Have the full name, booking number, charges, and displayed bond status ready. Bond Florida can help organize the request and arrange contact with a professional who may be able to assist.</p>
        <Link className="mt-6 inline-flex rounded-lg bg-yellow-500 px-6 py-3 font-bold text-slate-950 hover:bg-yellow-400" href="/contact">Request assistance</Link>
      </section>

      <p className="text-sm leading-relaxed text-slate-500">
        Official Pinellas County, PCSO, St. Petersburg Police, and Pinellas Clerk sources reviewed November 12, 2026. Procedures and records can change; use the linked government sources for time-sensitive decisions. Bond Florida is not a court, jail, law-enforcement agency, or law firm.
      </p>
    </div>
  );
}
