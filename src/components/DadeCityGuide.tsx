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
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

const custodySearchUrl = "https://jailinfo.pascocorrections.net/jmc/";
const correctionsUrl =
  "https://www.pascocountyfl.gov/services/pasco_corrections/index.php";
const inmateServicesUrl =
  "https://www.pascocountyfl.gov/inmate_services/index.php";
const policeUrl =
  "https://www.dadecityfl.com/government/departments/police_department/";
const courtUrl =
  "https://www.jud6.org/courthouse/robert-d-sumner-judicial-center/";
const courtRecordsUrl = "https://pascoclerk.com/172/Search-Court-Records";

export default function DadeCityGuide() {
  return (
    <div className="space-y-8 md:col-span-2">
      <section
        className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8"
        aria-labelledby="dade-city-start"
      >
        <h2
          id="dade-city-start"
          className="text-2xl font-serif font-bold text-white"
        >
          Looking for the Dade City jail? Start with Pasco custody records
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Dade City has a police department and an East Pasco courthouse, but
          the county detention facility is in Land O&apos; Lakes. Use the official
          Pasco Corrections search to confirm whether someone is currently in
          custody. Match the correct person, then record the booking details,
          charges, bond entries, and status before requesting assistance.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950"
            href={custodySearchUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Search className="h-5 w-5" /> Search Pasco custody records
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-bold text-white"
            href={correctionsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Official Pasco Corrections <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section
        className="grid gap-5 lg:grid-cols-3"
        aria-labelledby="dade-city-contacts"
      >
        <h2 id="dade-city-contacts" className="sr-only">
          Dade City police, courthouse, and Pasco jail contacts
        </h2>
        <ContactCard
          label="Dade City Police"
          address="38030 Meridian Avenue"
          city="Dade City, FL 33525"
          phone="(352) 521-1495"
          phoneHref="+13525211495"
        />
        <ContactCard
          label="Sumner Judicial Center"
          address="38053 Live Oak Avenue"
          city="Dade City, FL 33523"
          phone="(352) 521-4542"
          phoneHref="+13525214542"
        />
        <ContactCard
          label="Pasco detention facility"
          address="20101 Central Boulevard"
          city="Land O' Lakes, FL 34637"
          phone="(813) 996-6982"
          phoneHref="+18139966982"
        />
      </section>

      <section
        className="rounded-xl border border-slate-800 bg-slate-900/40 p-8"
        aria-labelledby="dade-city-checklist"
      >
        <h2
          id="dade-city-checklist"
          className="text-2xl font-serif font-bold text-white"
        >
          What to verify before requesting a Pasco County bond
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <CheckItem title="Identity and record.">
            Match the full legal name and the correct Pasco custody result.
          </CheckItem>
          <CheckItem title="Every charge.">
            Review the amount and current status shown for each bond entry.
          </CheckItem>
          <CheckItem title="Holds and court review.">
            Check whether another agency, warrant, or court action affects
            release.
          </CheckItem>
          <CheckItem title="Current instructions.">
            Confirm payment and release directions with an official source or a
            verified licensed agent.
          </CheckItem>
        </ul>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white">
            <MapPin className="h-6 w-6 shrink-0 text-yellow-500" />
            Dade City Police is not the county jail
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            The police department on Meridian Avenue is a local law-enforcement
            office, not an inmate housing or release location. A Dade City arrest
            may later appear in the Pasco Corrections custody system. Do not rely
            on a fixed transport or booking estimate; verify the live record
            before calling or traveling.
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline"
            href={policeUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Official Dade City Police information
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white">
            <Landmark className="h-6 w-6 shrink-0 text-yellow-500" />
            The Dade City courthouse is not a detention facility
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            The Robert D. Sumner Judicial Center on Live Oak Avenue is East
            Pasco&apos;s courthouse and handles civil, criminal, and administrative
            proceedings. A case may be heard in Dade City while the person is
            housed at the Land O&apos; Lakes detention facility. Confirm the hearing
            and custody information separately.
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline"
            href={courtUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Official Sumner Judicial Center information
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section
        className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8"
        aria-labelledby="dade-city-records"
      >
        <h2
          id="dade-city-records"
          className="flex items-center gap-3 text-2xl font-serif font-bold text-white"
        >
          <FileSearch className="h-6 w-6 shrink-0 text-yellow-500" />
          Custody record versus court record
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Pasco Corrections provides the current-custody and past-arrest search.
          The Pasco County Clerk provides a separate court-record search for
          criminal cases, dockets, and public filings. A court case does not by
          itself prove current custody, and a custody result does not show the
          final disposition of the criminal case.
        </p>
        <a
          className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline"
          href={courtRecordsUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          Search Pasco County court records
          <ExternalLink className="h-4 w-4" />
        </a>
      </section>

      <section
        className="rounded-xl border border-red-900/40 bg-red-950/20 p-8"
        aria-labelledby="dade-city-scam"
      >
        <h2
          id="dade-city-scam"
          className="flex items-center gap-3 text-2xl font-serif font-bold text-white"
        >
          <ShieldAlert className="h-6 w-6 shrink-0 text-red-400" />
          Pasco Corrections warns about release-payment scams
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Pasco County says Corrections, the Sheriff&apos;s Office, and inmate
          attorneys will not call to request money for someone&apos;s release. The
          county advises using a licensed, reputable bond agent or posting a cash
          bond directly at the detention facility. Do not send gift cards or
          payment information to an unsolicited caller.
        </p>
        <a
          className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline"
          href={inmateServicesUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          Read the official Pasco inmate-services warning
          <ExternalLink className="h-4 w-4" />
        </a>
      </section>

      <section
        className="rounded-xl border border-slate-800 bg-slate-900/40 p-8"
        aria-labelledby="dade-city-provider"
      >
        <h2
          id="dade-city-provider"
          className="flex items-center gap-3 text-2xl font-serif font-bold text-white"
        >
          <ShieldCheck className="h-6 w-6 shrink-0 text-yellow-500" />
          Before choosing a Dade City bail-bond provider
        </h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Verify the individual agent&apos;s Florida license, identify the licensed
          agency writing the bond, and obtain the premium, collateral, payment,
          refund, and indemnitor terms in writing. Search visibility does not
          prove a provider has a Dade City office or controls Pasco County
          release processing. Bond Florida does not claim a Dade City office.
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
          <Link
            className="text-yellow-500 underline"
            href="/jail/land-o-lakes-detention-center"
          >
            Land O&apos; Lakes detention-center guide
          </Link>
        </div>
      </section>

      <section
        className="rounded-xl border border-yellow-500/30 bg-slate-900 p-8 text-center"
        aria-labelledby="dade-city-help"
      >
        <h2
          id="dade-city-help"
          className="text-2xl font-serif font-bold text-white"
        >
          Need help with a Dade City arrest or bond question?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-400">
          Have the full name, Pasco custody result, charges, and displayed bond
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
        Official Dade City, Pasco County, Pasco Clerk, and Sixth Judicial Circuit
        sources reviewed November 13, 2026. Procedures and records can change;
        use the linked government sources for time-sensitive decisions. Bond
        Florida is not a court, jail, law-enforcement agency, or law firm.
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
