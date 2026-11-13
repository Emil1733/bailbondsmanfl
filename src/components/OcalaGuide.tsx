import Link from "next/link";
import type { ReactNode } from "react";
import {
  CheckCircle2,
  ExternalLink,
  FileSearch,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
} from "lucide-react";

const inmateSearchUrl = "https://www.marionso.com/inmate-search";
const jailFaqUrl = "https://www.marionso.com/detention-faq";
const bookingUrl = "https://www.marionso.com/inmate-booking";
const sheriffFaqUrl = "https://www.marionso.com/faq";
const policeUrl =
  "https://www.ocalafl.gov/government/city-departments-i-z/ocala-police-department";

export default function OcalaGuide() {
  return (
    <div className="space-y-8 md:col-span-2">
      <section
        className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8"
        aria-labelledby="ocala-start"
      >
        <h2
          id="ocala-start"
          className="text-2xl font-serif font-bold text-white"
        >
          Start with the Marion County inmate search
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          For an Ocala arrest or bail-bond question, use the Marion County
          Sheriff&apos;s Office inmate search before contacting a provider. Match
          the correct person, then record the booking information, listed
          charges, custody status, and every bond entry. If the result is unclear
          or unavailable, contact the jail directly for current information.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950"
            href={inmateSearchUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Search className="h-5 w-5" /> Search Marion County inmates
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-bold text-white"
            href={jailFaqUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Official detention FAQ <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section
        className="grid gap-5 lg:grid-cols-3"
        aria-labelledby="ocala-contacts"
      >
        <h2 id="ocala-contacts" className="sr-only">
          Ocala police and Marion County jail contacts
        </h2>
        <ContactCard
          label="Ocala Police Department"
          address="402 South Pine Avenue"
          city="Ocala, FL 34471"
          phone="(352) 369-7000"
          phoneHref="+13523697000"
        />
        <ContactCard
          label="Marion County Jail"
          address="700 NW 30th Avenue"
          city="Ocala, FL 34475"
          phone="(352) 351-8077"
          phoneHref="+13523518077"
        />
        <ContactCard
          label="MCSO Central Operations"
          address="692 NW 30th Avenue"
          city="Ocala, FL 34475"
          phone="(352) 732-8181"
          phoneHref="+13527328181"
        />
      </section>

      <section
        className="rounded-xl border border-slate-800 bg-slate-900/40 p-8"
        aria-labelledby="ocala-checklist"
      >
        <h2
          id="ocala-checklist"
          className="text-2xl font-serif font-bold text-white"
        >
          What to verify before requesting an Ocala bond
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <CheckItem title="Identity and booking.">
            Match the full legal name and current Marion County inmate record.
          </CheckItem>
          <CheckItem title="Every charge and bond.">
            Review each displayed amount, type, and status separately.
          </CheckItem>
          <CheckItem title="Booking completion.">
            Confirm booking and identification are complete before relying on a
            bond entry.
          </CheckItem>
          <CheckItem title="Holds and conditions.">
            Ask whether court review, another agency, or release conditions
            affect eligibility.
          </CheckItem>
        </ul>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white">
            <MapPin className="h-6 w-6 shrink-0 text-yellow-500" />
            Ocala Police is not the county jail
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            The Ocala Police Department on South Pine Avenue is a city
            law-enforcement office, not the Marion County inmate housing or
            release location. MCSO states that its jail booking unit receives
            people from Ocala Police and other agencies operating in Marion
            County. Verify the live inmate record instead of relying on a fixed
            transport estimate.
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline"
            href={policeUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Official Ocala Police information
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-white">
            <FileSearch className="h-6 w-6 shrink-0 text-yellow-500" />
            Arrest record versus final disposition
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            MCSO provides current inmate and local arrest information. The
            Sheriff&apos;s Office directs people seeking the disposition of an
            arrest—such as guilty, not guilty, or adjudication withheld—to the
            Marion County Clerk at the Judicial Center. A jail result does not
            establish guilt or show the final outcome of a criminal case.
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline"
            href={sheriffFaqUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Official MCSO records guidance
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section
        className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8"
        aria-labelledby="ocala-bond-options"
      >
        <h2
          id="ocala-bond-options"
          className="text-2xl font-serif font-bold text-white"
        >
          Marion County cash and surety bond options
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          MCSO lists several current options: payment of the full bond or purge
          at the Jail Information and Visitation Center using an accepted method,
          an online card option for a cash bond through its listed provider, or a
          surety bond through a bail-bond agent. Verify the live amount, status,
          payee, accepted payment method, and provider terms before paying.
        </p>
        <a
          className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline"
          href={jailFaqUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          Review official bond and purge instructions
          <ExternalLink className="h-4 w-4" />
        </a>
      </section>

      <section
        className="rounded-xl border border-slate-800 bg-slate-900/40 p-8"
        aria-labelledby="ocala-release"
      >
        <h2
          id="ocala-release"
          className="text-2xl font-serif font-bold text-white"
        >
          Booking and release timing cannot be guaranteed
        </h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          MCSO says a bond can be posted after booking and identification are
          complete and that the jail accepts bonds 24 hours a day. It also says
          release can take several hours because required checks must be
          completed. Court action, holds, paperwork, and workload may add time;
          a private service cannot bypass those controls or set a fixed release
          time.
        </p>
        <a
          className="mt-5 inline-flex items-center gap-2 text-yellow-500 underline"
          href={bookingUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          Official Marion County booking information
          <ExternalLink className="h-4 w-4" />
        </a>
      </section>

      <section
        className="rounded-xl border border-slate-800 bg-slate-900/40 p-8"
        aria-labelledby="ocala-provider"
      >
        <h2
          id="ocala-provider"
          className="flex items-center gap-3 text-2xl font-serif font-bold text-white"
        >
          <ShieldCheck className="h-6 w-6 shrink-0 text-yellow-500" />
          Before choosing an Ocala bail-bond provider
        </h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          Verify the individual agent&apos;s Florida license, identify the licensed
          agency writing the bond, and obtain the premium, collateral, payment,
          refund, and indemnitor terms in writing. Search visibility does not
          prove a provider has an Ocala office or controls Marion County release
          processing. Bond Florida does not claim an Ocala office.
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
        aria-labelledby="ocala-help"
      >
        <h2
          id="ocala-help"
          className="text-2xl font-serif font-bold text-white"
        >
          Need help with an Ocala jail or bond question?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-400">
          Have the full name, current inmate result, charges, and displayed bond
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
        Official Marion County Sheriff and City of Ocala sources reviewed
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
