import Link from 'next/link';
import { CheckCircle2, ExternalLink, FileSearch, MapPin, Phone, Search, ShieldCheck } from 'lucide-react';

const inmateSearchUrl = 'https://netapps.ocfl.net/BestJail/';
const correctionsUrl = 'https://newsroom.ocfl.net/directory/corrections-department/';
const courtRecordsUrl = 'https://myeclerk.myorangeclerk.com/Home/Index';
const policeUrl = 'https://cityofwinterpark.org/departments/police/contact/';

export default function WinterParkGuide() {
  return (
    <div className="space-y-8 md:col-span-2">
      <section className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8" aria-labelledby="winter-park-start">
        <h2 id="winter-park-start" className="text-2xl font-serif font-bold text-white">Start with the Orange County inmate search</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          If someone was arrested in Winter Park, use Orange County Corrections&apos; official inmate search before contacting a bail-bond agent. Match the correct person, then record the booking number, custody status, charges, and every displayed bond entry. An arrest does not by itself establish that a bond is available or that release can begin immediately.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950" href={inmateSearchUrl} rel="noopener noreferrer" target="_blank"><Search className="h-5 w-5" />Search Orange County inmates <ExternalLink className="h-4 w-4" /></a>
          <a className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-bold text-white" href={correctionsUrl} rel="noopener noreferrer" target="_blank">Official Corrections directory <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3" aria-labelledby="winter-park-contacts">
        <h2 id="winter-park-contacts" className="sr-only">Winter Park police, jail, and court contacts</h2>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Winter Park Police</p>
          <p className="mt-3 flex items-start gap-2 font-bold text-white"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />500 North Virginia Avenue</p>
          <p className="ml-6 mt-1 text-sm text-slate-400">Winter Park, FL 32789</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+14076441313"><Phone className="h-4 w-4" />(407) 644-1313 non-emergency</a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Booking and Release Center</p>
          <p className="mt-3 font-bold text-white">3855 S. John Young Parkway</p>
          <p className="mt-1 text-sm text-slate-400">Orlando, FL 32839</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+14078363400"><Phone className="h-4 w-4" />(407) 836-3400</a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Orange County Courthouse</p>
          <p className="mt-3 font-bold text-white">425 N. Orange Avenue</p>
          <p className="mt-1 text-sm text-slate-400">Orlando, FL 32801</p>
          <a className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline" href="tel:+14078362000"><Phone className="h-4 w-4" />(407) 836-2000</a>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="winter-park-checklist">
        <h2 id="winter-park-checklist" className="text-2xl font-serif font-bold text-white">Information to verify before requesting a bond</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Identity and booking.</strong> Match the full legal name and save the booking number from the official record.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Current custody.</strong> Confirm the person is listed in Orange County custody rather than relying on an arrest report alone.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Every charge and bond.</strong> Record each charge and the amount or status shown with it.</span></li>
          <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Holds and conditions.</strong> Ask whether court review, another agency, or a release condition affects eligibility.</span></li>
        </ul>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><MapPin className="h-6 w-6 shrink-0 text-yellow-500" />There is no Winter Park city jail for inmate pickup</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            Winter Park Police operates from North Virginia Avenue, but that public-safety building is not the Orange County detention facility. Orange County identifies the Booking and Release Center on South John Young Parkway in Orlando. Search the live inmate record and confirm current pickup or release instructions before traveling to either location.
          </p>
          <div className="mt-5 flex flex-wrap gap-5 text-sm">
            <a className="text-yellow-500 underline" href={policeUrl} rel="noopener noreferrer" target="_blank">Official Winter Park Police contact</a>
            <Link className="text-yellow-500 underline" href="/jail/orange-county-booking-and-release-center">Orange County BRC guide</Link>
          </div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><FileSearch className="h-6 w-6 shrink-0 text-yellow-500" />Inmate record versus court record</h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            The Corrections search is the starting point for current booking and custody information. The Orange County Clerk&apos;s my eClerk system is separate and provides public access to many criminal and traffic cases and non-confidential documents. A newly filed case may not appear immediately, so use the jail record for custody and the court record for case information.
          </p>
          <a className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline" href={courtRecordsUrl} rel="noopener noreferrer" target="_blank">Search Orange County court records <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8" aria-labelledby="winter-park-release">
        <h2 id="winter-park-release" className="text-2xl font-serif font-bold text-white">Fast jail release and after-hours claims</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Orange County lists its Corrections information service and Booking and Release Center as available around the clock. That does not guarantee immediate bond eligibility or a particular release time. Booking, court review, bond status, holds, paperwork acceptance, and final release remain under government control. A private provider can describe the next step but cannot promise when the jail will complete it.
        </p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm">
          <Link className="text-yellow-500 underline" href="/services/24-hour-bail-bonds">After-hours bail information</Link>
          <Link className="text-yellow-500 underline" href="/services/traffic-warrant-bail">Traffic and warrant information</Link>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="winter-park-provider">
        <h2 id="winter-park-provider" className="flex items-center gap-3 text-2xl font-serif font-bold text-white"><ShieldCheck className="h-6 w-6 shrink-0 text-yellow-500" />Before choosing a Winter Park bail-bond provider</h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Verify the individual agent&apos;s Florida license, ask which agency will write the bond, and request written terms before paying or signing. Understand the premium, collateral, payment arrangement, refund rules, and indemnitor obligations. A page ranking for Winter Park does not prove that the provider maintains an office in the city. Bond Florida does not claim a walk-in Winter Park office.
        </p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm">
          <a className="text-yellow-500 underline" href="https://licenseesearch.fldfs.com/" rel="noopener noreferrer" target="_blank">Verify a Florida agent&apos;s license</a>
          <a className="text-yellow-500 underline" href="https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview" rel="noopener noreferrer" target="_blank">Florida DFS consumer guide</a>
        </div>
      </section>

      <section className="rounded-xl border border-yellow-500/30 bg-slate-900 p-8 text-center" aria-labelledby="winter-park-help">
        <h2 id="winter-park-help" className="text-2xl font-serif font-bold text-white">Need help with a Winter Park custody or bond question?</h2>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-400">Have the full name, booking number, custody status, charges, and displayed bond entries ready. Bond Florida can help organize the request and arrange contact with a professional who may be able to assist.</p>
        <Link className="mt-6 inline-flex rounded-lg bg-yellow-500 px-6 py-3 font-bold text-slate-950 hover:bg-yellow-400" href="/contact">Request assistance</Link>
      </section>

      <p className="text-sm leading-relaxed text-slate-500">Official Winter Park Police, Orange County Corrections, and Orange County Clerk sources reviewed November 13, 2026. Procedures and records can change; use the linked government sources for time-sensitive decisions. Bond Florida is not a court, jail, law-enforcement agency, or law firm.</p>
    </div>
  );
}
