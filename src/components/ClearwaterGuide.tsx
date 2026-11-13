import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileSearch,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
} from "lucide-react";

const inmateSearchUrl =
  "https://www.pinellassheriff.gov/InmateBooking/Inquiry.aspx";
const postBondUrl = "https://www.pinellassheriff.gov/Post-Bond";
const courtRecordsUrl = "https://courtrecords-psc.mypinellasclerk.gov/";
const clearwaterPoliceUrl = "https://www.clearwaterpolice.org/Contact-Us";

export default function ClearwaterGuide() {
  return (
    <div className="space-y-8 md:col-span-2">
      <section
        className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8"
        aria-labelledby="clearwater-start"
      >
        <h2
          id="clearwater-start"
          className="text-2xl font-serif font-bold text-white"
        >
          Start with the official Pinellas County arrest inquiry
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Before discussing a Clearwater bail bond, confirm the person in the
          Pinellas County Sheriff&apos;s Office arrest inquiry. PCSO says the
          search covers people currently incarcerated and people released
          within the last 30 days. Match the full name and available booking or
          docket details; the information can change as the case is processed.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950"
            href={inmateSearchUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Search className="h-5 w-5" /> Search PCSO arrest records
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-bold text-white"
            href={postBondUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Official bond instructions <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section
        className="grid gap-5 lg:grid-cols-3"
        aria-labelledby="clearwater-contacts"
      >
        <h2 id="clearwater-contacts" className="sr-only">
          Clearwater police, Pinellas jail, and court contacts
        </h2>
        <ContactCard
          label="Clearwater Police Department"
          address="645 Pierce Street"
          city="Clearwater, FL 33756"
          phone="(727) 562-4242"
          href="tel:+17275624242"
          note="Non-emergency"
        />
        <ContactCard
          label="Pinellas County Jail records"
          address="14400 49th Street North"
          city="Clearwater, FL 33762"
          phone="(727) 464-6415"
          href="tel:+17274646415"
          note="Custody and bond records"
        />
        <ContactCard
          label="Pinellas County Justice Center"
          address="14250 49th Street North"
          city="Clearwater, FL 33762"
          phone="(727) 464-7000"
          href="tel:+17274647000"
          note="Clerk information"
        />
      </section>

      <section
        className="rounded-xl border border-slate-800 bg-slate-900/40 p-8"
        aria-labelledby="clearwater-checklist"
      >
        <h2
          id="clearwater-checklist"
          className="text-2xl font-serif font-bold text-white"
        >
          What to verify before requesting help
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <ChecklistItem title="Identity and record">
            Match the person carefully, then save the booking or docket number.
          </ChecklistItem>
          <ChecklistItem title="Every charge">
            Review the bond entry and status for each charge rather than relying
            on a single total.
          </ChecklistItem>
          <ChecklistItem title="Holds and court review">
            Ask whether another agency, court condition, or unresolved hold
            prevents release.
          </ChecklistItem>
          <ChecklistItem title="Written terms">
            Before signing, review the premium, collateral, payment terms, and
            indemnitor obligations.
          </ChecklistItem>
        </ul>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white">
            <MapPin className="h-6 w-6 shrink-0 text-yellow-500" />
            Clearwater Police is not the bond counter
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            Clearwater Police headquarters on Pierce Street is a city
            law-enforcement contact. PCSO operates the county jail and publishes
            the arrest inquiry and bond instructions. Do not use the distance
            between the police department and jail to estimate booking or
            release time; confirm custody before traveling.
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline"
            href={clearwaterPoliceUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Official Clearwater Police contact information
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white">
            <FileSearch className="h-6 w-6 shrink-0 text-yellow-500" />
            Arrest inquiry versus final case result
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            PCSO describes its inquiry as informational and directs people to
            the Pinellas Clerk for the final disposition of criminal charges.
            Use the Sheriff&apos;s record for current custody and the Clerk&apos;s
            public case system for available court records. Neither should be
            treated as legal advice.
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline"
            href={courtRecordsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Search Pinellas court records <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section
        className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8"
        aria-labelledby="clearwater-bond-options"
      >
        <h2
          id="clearwater-bond-options"
          className="text-2xl font-serif font-bold text-white"
        >
          Bond options published by PCSO
        </h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <InfoCard title="Credit or debit card">
            PCSO links to its current payment provider and states a limit of up
            to $2,500 per charge. Verify the current provider, code, fees, and
            record details on the official page before paying.
          </InfoCard>
          <InfoCard title="Cash bond">
            The full bond amount is required. PCSO requires valid photo ID and
            publishes rules for accepted checks and money orders; personal
            checks are not accepted.
          </InfoCard>
          <InfoCard title="Surety bond">
            PCSO accepts surety bonds from registered bonding agents. Verify the
            individual agent&apos;s Florida license and obtain the agreement in
            writing.
          </InfoCard>
        </div>
      </section>

      <section
        className="rounded-xl border border-slate-800 bg-slate-900/40 p-8"
        aria-labelledby="clearwater-release"
      >
        <h2
          id="clearwater-release"
          className="flex items-center gap-3 text-2xl font-serif font-bold text-white"
        >
          <Clock3 className="h-6 w-6 shrink-0 text-yellow-500" />
          No private service controls release time
        </h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          A payment or accepted bond does not guarantee immediate release.
          Booking completion, separate charges, court orders, holds, paperwork,
          and jail workload can all affect timing. PCSO controls processing and
          final release, so avoid anyone promising a fixed number of minutes or
          hours.
        </p>
      </section>

      <section
        className="rounded-xl border border-slate-800 bg-slate-900/40 p-8"
        aria-labelledby="clearwater-provider"
      >
        <h2
          id="clearwater-provider"
          className="flex items-center gap-3 text-2xl font-serif font-bold text-white"
        >
          <ShieldCheck className="h-6 w-6 shrink-0 text-yellow-500" />
          Compare Clearwater bail-bond providers safely
        </h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Confirm the agent&apos;s Florida license, the agency writing the bond,
          and all financial obligations before paying. A Clearwater search
          result or local phone number does not prove a walk-in office. Bond
          Florida does not claim a Clearwater office and cannot control PCSO
          processing.
        </p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm">
          <a
            className="text-yellow-500 underline"
            href="https://licenseesearch.fldfs.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Verify a Florida agent&apos;s license
          </a>
          <a
            className="text-yellow-500 underline"
            href="https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview"
            rel="noopener noreferrer"
            target="_blank"
          >
            Florida DFS consumer guide
          </a>
        </div>
      </section>

      <section
        className="rounded-xl border border-yellow-500/30 bg-slate-900 p-8 text-center"
        aria-labelledby="clearwater-help"
      >
        <h2
          id="clearwater-help"
          className="text-2xl font-serif font-bold text-white"
        >
          Need help with a Clearwater custody or bond question?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-400">
          Have the full name, booking or docket number, charges, and displayed
          bond status ready. Bond Florida can organize the request and arrange
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
        Official PCSO, Clearwater Police, and Pinellas Clerk sources reviewed
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
  href,
  note,
}: {
  label: string;
  address: string;
  city: string;
  phone: string;
  href: string;
  note: string;
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
        href={href}
      >
        <Phone className="h-4 w-4" /> {phone}
      </a>
      <p className="mt-1 text-xs text-slate-500">{note}</p>
    </div>
  );
}

function ChecklistItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
      <span>
        <strong className="text-white">{title}.</strong> {children}
      </span>
    </li>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-blue-900/40 bg-slate-950/30 p-5">
      <h3 className="font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{children}</p>
    </div>
  );
}
