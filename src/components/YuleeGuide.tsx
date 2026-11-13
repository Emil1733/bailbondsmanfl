import Link from "next/link";
import type { ReactNode } from "react";
import {
  CheckCircle2,
  ExternalLink,
  FileSearch,
  Landmark,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
} from "lucide-react";

const inmateSearchUrl =
  "https://dssinmate.nassauso.com/NewWorld.InmateInquiry/nassau?InCustody=True";
const correctionsUrl = "https://nassauso.com/corrections/";
const processingUrl =
  "https://nassauso.com/corrections/inmate-processing-information/";
const sheriffContactUrl = "https://nassauso.com/contact-us/";
const courtUrl = "https://www.nassauclerk.com/215/Jury-Duty";

export default function YuleeGuide() {
  return (
    <div className="space-y-8 md:col-span-2">
      <section
        className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8"
        aria-labelledby="yulee-start"
      >
        <h2
          id="yulee-start"
          className="text-2xl font-serif font-bold text-white"
        >
          Search the Yulee jail&apos;s current in-custody records
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          The Nassau County Jail and Detention Center is in Yulee. Use the
          Sheriff&apos;s Office in-custody search to confirm whether someone is
          currently held there. Match the correct person, then review the
          booking information, listed charges, custody status, and every bond
          entry before requesting assistance.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950"
            href={inmateSearchUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Search className="h-5 w-5" /> Search current inmates
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-bold text-white"
            href={correctionsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Official Nassau Corrections <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section
        className="grid gap-5 lg:grid-cols-3"
        aria-labelledby="yulee-contacts"
      >
        <h2 id="yulee-contacts" className="sr-only">
          Yulee Sheriff, jail, and court contacts
        </h2>
        <ContactCard
          label="Nassau County Sheriff"
          address="77151 Citizens Circle"
          city="Yulee, FL 32097"
          phone="(904) 225-0331"
          phoneHref="+19042250331"
        />
        <ContactCard
          label="Jail reception"
          address="76212 Nicholas Cutinha Road"
          city="Yulee, FL 32097"
          phone="(904) 548-4002"
          phoneHref="+19045484002"
        />
        <ContactCard
          label="Jail booking desk"
          address="76212 Nicholas Cutinha Road"
          city="Yulee, FL 32097"
          phone="(904) 548-4006"
          phoneHref="+19045484006"
        />
      </section>

      <section
        className="rounded-xl border border-slate-800 bg-slate-900/40 p-8"
        aria-labelledby="yulee-checklist"
      >
        <h2
          id="yulee-checklist"
          className="text-2xl font-serif font-bold text-white"
        >
          What to verify before requesting a Nassau County bond
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <CheckItem title="Current custody.">
            Confirm the person appears in the current in-custody search.
          </CheckItem>
          <CheckItem title="Identity and booking.">
            Match the full name and booking details before discussing payment.
          </CheckItem>
          <CheckItem title="Every charge and bond.">
            Review each amount, type, and status separately.
          </CheckItem>
          <CheckItem title="Holds and clearance.">
            Ask whether court action, another agency, or identification clearance
            affects release.
          </CheckItem>
        </ul>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white">
            <FileSearch className="h-6 w-6 shrink-0 text-yellow-500" />
            Current custody versus a past arrest
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            NCSO states that its in-custody search only reports people currently
            held in the Nassau County detention facility. Someone released on
            bond or otherwise will not remain in those results. For an older
            arrest or background question, contact the NCSO Records Division
            instead of treating an empty current-custody result as proof that no
            arrest occurred.
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline"
            href={sheriffContactUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Official NCSO contacts
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white">
            <Landmark className="h-6 w-6 shrink-0 text-yellow-500" />
            The Foster Justice Center is not the jail
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            The Robert M. Foster Justice Center is on Veterans Way in Yulee and
            serves as a court location. The Nassau County Jail and Detention
            Center is a separate facility on Nicholas Cutinha Road. Court
            location, hearing information, and current custody should be checked
            through their respective official sources.
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline"
            href={courtUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Official Nassau Clerk location information
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section
        className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8"
        aria-labelledby="yulee-bond-options"
      >
        <h2
          id="yulee-bond-options"
          className="text-2xl font-serif font-bold text-white"
        >
          Nassau County cash and surety bond information
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          NCSO says a cash bond at jail reception must be paid in the full amount
          by an accepted certified or cashier&apos;s check, or by money order, subject
          to its current instructions. NCSO also states that a bonding agency may
          post a surety bond. Verify the live bond status and current payment
          requirements before obtaining funds or signing an agreement.
        </p>
        <a
          className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline"
          href={processingUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          Official inmate processing and bond information
          <ExternalLink className="h-4 w-4" />
        </a>
      </section>

      <section
        className="rounded-xl border border-slate-800 bg-slate-900/40 p-8"
        aria-labelledby="yulee-release"
      >
        <h2
          id="yulee-release"
          className="text-2xl font-serif font-bold text-white"
        >
          Booking and release timing cannot be promised
        </h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          NCSO explains that intake processing and identification clearance must
          be completed before release or visitation is considered, and that
          release times vary. Court action, holds, paperwork, and facility
          workload may also affect the process. A private service cannot bypass
          these steps or guarantee a completion time.
        </p>
      </section>

      <section
        className="rounded-xl border border-slate-800 bg-slate-900/40 p-8"
        aria-labelledby="yulee-provider"
      >
        <h2
          id="yulee-provider"
          className="flex items-center gap-3 text-2xl font-serif font-bold text-white"
        >
          <ShieldCheck className="h-6 w-6 shrink-0 text-yellow-500" />
          Before choosing a Yulee bail-bond provider
        </h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Verify the individual agent&apos;s Florida license, identify the licensed
          agency writing the bond, and obtain the premium, collateral, payment,
          refund, and indemnitor terms in writing. Search visibility does not
          prove a provider has a Yulee office or controls NCSO processing. Bond
          Florida does not claim a Yulee office.
        </p>
        <a
          className="mt-5 inline-flex text-yellow-500 underline"
          href="https://licenseesearch.fldfs.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Verify a Florida agent&apos;s license
        </a>
      </section>

      <section
        className="rounded-xl border border-yellow-500/30 bg-slate-900 p-8 text-center"
        aria-labelledby="yulee-help"
      >
        <h2
          id="yulee-help"
          className="text-2xl font-serif font-bold text-white"
        >
          Need help with a Yulee jail or bond question?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-400">
          Have the full name, current custody result, charges, and displayed bond
          status ready. Bond Florida can help organize the request and arrange
          contact with a professional who may be able to assist.
        </p>
        <Link
          className="mt-6 inline-flex rounded-lg bg-yellow-500 px-6 py-3 font-bold text-slate-950 hover:bg-yellow-400"
          href="/contact"
        >
          Request assistance
        </Link>
      </section>

      <p className="text-sm leading-relaxed text-slate-500">
        Official Nassau County Sheriff and Nassau County Clerk sources reviewed
        November 13, 2026. Procedures and records can change; use the linked
        government sources for time-sensitive decisions. Bond Florida is not a
        court, jail, law-enforcement agency, or law firm.
      </p>
    </div>
  );
}

function ContactCard({
  label,
  address,
  city,
  phone,
  phoneHref,
}: {
  label: string;
  address: string;
  city: string;
  phone: string;
  phoneHref: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-3 flex items-start gap-2 font-bold text-white">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
        {address}
      </p>
      <p className="ml-6 mt-1 text-sm text-slate-400">{city}</p>
      <a
        className="mt-3 inline-flex items-center gap-2 text-yellow-500 underline"
        href={`tel:${phoneHref}`}
      >
        <Phone className="h-4 w-4" /> {phone}
      </a>
    </div>
  );
}

function CheckItem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
      <span>
        <strong className="text-white">{title}</strong> {children}
      </span>
    </li>
  );
}
