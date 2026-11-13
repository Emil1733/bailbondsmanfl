import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, MapPin, Phone, Search, ShieldAlert } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyHeader from "@/components/EmergencyHeader";
import { counties, getCounty } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { jailGuideByCounty } from "@/lib/internal-links";
import { approvedServiceCityPages } from "@/lib/service-city-seo";
import VeroBeachGuide from "@/components/VeroBeachGuide";
import WestPalmBeachGuide from "@/components/WestPalmBeachGuide";
import OrlandoGuide from "@/components/OrlandoGuide";
import TampaGuide from "@/components/TampaGuide";
import FortMyersGuide from "@/components/FortMyersGuide";
import StPetersburgGuide from "@/components/StPetersburgGuide";
import WinterParkGuide from "@/components/WinterParkGuide";
import BonitaSpringsGuide from "@/components/BonitaSpringsGuide";
import CapeCoralGuide from "@/components/CapeCoralGuide";
import DadeCityGuide from "@/components/DadeCityGuide";
import YuleeGuide from "@/components/YuleeGuide";
import OcalaGuide from "@/components/OcalaGuide";
import ClearwaterGuide from "@/components/ClearwaterGuide";

type Props = { params: Promise<{ slug: string; city: string }> };

export function generateStaticParams() {
  return counties.flatMap((county) =>
    (county.cities || []).map((city) => ({
      slug: county.slug,
      city: city.slug,
    })),
  );
}
export async function generateMetadata({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const county = await getCounty(slug);
  const city = county?.cities?.find(({ slug }) => slug === citySlug);
  if (!county || !city) return { title: "City Not Found" };
  if (county.slug === "palm-beach" && city.slug === "west-palm-beach") {
    return pageMetadata({
      title: "West Palm Beach Jail Search & Bail Bond Information",
      description:
        "Search Palm Beach County custody records, find Gun Club Road jail contacts, verify bond details, and prepare a West Palm Beach bail-bond request.",
      path: "/county/palm-beach/west-palm-beach",
    });
  }
  if (county.slug === "orange" && city.slug === "orlando") {
    return pageMetadata({
      title: "Orlando Bail Bonds & Orange County Jail Information",
      description:
        "Search Orange County custody records, verify Orlando jail and bond details, find official contacts, and prepare a safe bail-bond request.",
      path: "/county/orange/orlando",
    });
  }
  if (county.slug === "hillsborough" && city.slug === "tampa") {
    return pageMetadata({
      title: "Tampa Bail Bonds & Hillsborough County Jail Information",
      description:
        "Search Hillsborough County arrest records, compare Orient and Falkenburg jails, verify bond details, and prepare a safe Tampa bail-bond request.",
      path: "/county/hillsborough/tampa",
    });
  }
  if (county.slug === "lee" && city.slug === "fort-myers") {
    return pageMetadata({
      title: "Fort Myers Bail Bonds & Lee County Jail Information",
      description:
        "Search Lee County arrest records, compare the Ortiz and downtown Fort Myers jails, verify bond details, and prepare a safe request for assistance.",
      path: "/county/lee/fort-myers",
    });
  }
  if (county.slug === "pinellas" && city.slug === "st-petersburg") {
    return pageMetadata({
      title: "St. Petersburg Bail Bonds & Pinellas Jail Information",
      description:
        "Search Pinellas County custody records, verify St. Petersburg arrest and bond details, compare licensed agents, and prepare a safe request for help.",
      path: "/county/pinellas/st-petersburg",
    });
  }
  if (county.slug === "orange" && city.slug === "winter-park") {
    return pageMetadata({
      title: "Winter Park Bail Bonds & Orange County Jail Information",
      description:
        "Search Orange County custody records, verify Winter Park arrest and bond details, find official contacts, and prepare a safe request for assistance.",
      path: "/county/orange/winter-park",
    });
  }
  if (county.slug === "lee" && city.slug === "bonita-springs") {
    return pageMetadata({
      title: "Bonita Springs Bail Bonds & Lee County Jail Information",
      description:
        "Search Lee County arrest records, verify Bonita Springs criminal-bond details and jail location, and prepare a safe request for assistance.",
      path: "/county/lee/bonita-springs",
    });
  }
  if (county.slug === "lee" && city.slug === "cape-coral") {
    return pageMetadata({
      title: "Cape Coral Bail Bonds & Lee County Jail Information",
      description:
        "Search Lee County arrest records, verify Cape Coral criminal-bond and jail details, and prepare a safe request for licensed bail-bond assistance.",
      path: "/county/lee/cape-coral",
    });
  }
  if (county.slug === "pasco" && city.slug === "dade-city") {
    return pageMetadata({
      title: "Dade City Jail Search & Pasco County Bail Information",
      description:
        "Search Pasco County custody records, distinguish the Dade City courthouse from the Land O' Lakes jail, and verify bond details before requesting help.",
      path: "/county/pasco/dade-city",
    });
  }
  if (county.slug === "nassau" && city.slug === "yulee") {
    return pageMetadata({
      title: "Yulee Jail Inmate Search & Nassau County Bail Information",
      description:
        "Search Nassau County jail records in Yulee, verify booking and bond details, find official contacts, and prepare a safe request for assistance.",
      path: "/county/nassau/yulee",
    });
  }
  if (county.slug === "marion" && city.slug === "ocala") {
    return pageMetadata({
      title: "Ocala Jail Inmate Search & Marion County Bail Information",
      description:
        "Search Marion County inmate records, verify Ocala jail and bond details, review official contacts, and prepare a safe request for licensed assistance.",
      path: "/county/marion/ocala",
    });
  }
  if (county.slug === "pinellas" && city.slug === "clearwater") {
    return pageMetadata({
      title: "Clearwater Bail Bonds & Pinellas County Jail Information",
      description:
        "Search Pinellas County arrest records, verify Clearwater bond and jail details, review official payment options, and request licensed assistance safely.",
      path: "/county/pinellas/clearwater",
    });
  }
  if (county.slug === "indian-river" && city.slug === "vero-beach") {
    return pageMetadata({
      title: "Vero Beach Jail, Inmate Search & Bond Information",
      description:
        "Use the official Indian River County inmate search, review Vero Beach jail and bond instructions, find court records, and prepare to request assistance.",
      path: "/county/indian-river/vero-beach",
    });
  }
  return pageMetadata({
    title: `${city.name} Florida Bail Bonds & Jail Guide`,
    description: `Find official inmate-search links, local arresting-agency contact details, county jail information, and verified Florida bail resources for ${city.name}.`,
    path: `/county/${county.slug}/${city.slug}`,
  });
}

export default async function CityPage({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const county = await getCounty(slug);
  const city = county?.cities?.find(({ slug }) => slug === citySlug);
  if (!county || !city) notFound();
  const jailGuide = jailGuideByCounty[county.slug];
  const reviewedServiceGuides = approvedServiceCityPages.filter(
    (page) => page.citySlug === city.slug,
  );
  const isWestPalmBeach =
    county.slug === "palm-beach" && city.slug === "west-palm-beach";
  const isVeroBeach =
    county.slug === "indian-river" && city.slug === "vero-beach";
  const isOrlando = county.slug === "orange" && city.slug === "orlando";
  const isTampa = county.slug === "hillsborough" && city.slug === "tampa";
  const isFortMyers = county.slug === "lee" && city.slug === "fort-myers";
  const isStPetersburg =
    county.slug === "pinellas" && city.slug === "st-petersburg";
  const isWinterPark = county.slug === "orange" && city.slug === "winter-park";
  const isBonitaSprings =
    county.slug === "lee" && city.slug === "bonita-springs";
  const isCapeCoral = county.slug === "lee" && city.slug === "cape-coral";
  const isDadeCity = county.slug === "pasco" && city.slug === "dade-city";
  const isYulee = county.slug === "nassau" && city.slug === "yulee";
  const isOcala = county.slug === "marion" && city.slug === "ocala";
  const isClearwater =
    county.slug === "pinellas" && city.slug === "clearwater";
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <EmergencyHeader />
      <section className="border-b border-white/5 bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Breadcrumbs
            items={[
              { label: county.name, href: `/county/${county.slug}` },
              { label: city.name, href: `/county/${county.slug}/${city.slug}` },
            ]}
          />
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
            Local directory
          </p>
          <h1 className="mt-4 text-4xl font-serif font-bold text-white md:text-6xl">
            {isWestPalmBeach
              ? "West Palm Beach jail search and bail-bond information"
              : isVeroBeach
                ? "Vero Beach jail, inmate search and bond information"
                : isOrlando
                  ? "Orlando bail bonds and Orange County jail information"
                  : isTampa
                    ? "Tampa bail bonds and Hillsborough County jail information"
                    : isFortMyers
                      ? "Fort Myers bail bonds and Lee County jail information"
                      : isStPetersburg
                        ? "St. Petersburg bail bonds and Pinellas County jail information"
                        : isWinterPark
                          ? "Winter Park bail bonds and Orange County jail information"
                          : isBonitaSprings
                            ? "Bonita Springs bail bonds and Lee County jail information"
                            : isCapeCoral
                              ? "Cape Coral bail bonds and Lee County jail information"
                              : isDadeCity
                                ? "Dade City jail search and Pasco County bail information"
                                : isYulee
                                  ? "Yulee jail inmate search and Nassau County bail information"
                                  : isOcala
                                    ? "Ocala jail inmate search and Marion County bail information"
                                    : isClearwater
                                      ? "Clearwater bail bonds and Pinellas County jail information"
                            : `${city.name} arrest and jail resources`}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {isWestPalmBeach
              ? "Use official Palm Beach County custody records, verify the facility and bond status, and prepare the details needed to request help safely."
              : isVeroBeach
                ? "Find the official Indian River County jail lookup, verify the bond status, review published payment options, and prepare the information needed to request help."
                : isOrlando
                  ? "Search official Orange County custody records, verify the bond status and facility, and prepare the information needed to request help safely."
                  : isTampa
                    ? "Search official Hillsborough County arrest records, confirm the assigned jail and bond status, and prepare the details needed to request help safely."
                    : isFortMyers
                      ? "Search official Lee County arrest records, distinguish the Ortiz and downtown jail facilities, and prepare the details needed to request help safely."
                      : isStPetersburg
                        ? "Search official Pinellas County custody records, verify each bond entry or hold, and prepare the information needed to request help safely."
                        : isWinterPark
                          ? "Search official Orange County custody records, verify Winter Park arrest and bond details, and prepare the information needed to request help safely."
                          : isBonitaSprings
                            ? "Search official Lee County arrest records, confirm the assigned jail and criminal-bond status, and prepare the details needed to request help safely."
                            : isCapeCoral
                              ? "Search official Lee County arrest records, verify Cape Coral booking and criminal-bond details, and prepare the information needed to request help safely."
                              : isDadeCity
                                ? "Search official Pasco custody records, distinguish the Dade City courthouse from the Land O' Lakes detention facility, and verify bond details safely."
                                : isYulee
                                  ? "Search the official Nassau County in-custody records, verify Yulee jail and bond details, and prepare the information needed to request help safely."
                                  : isOcala
                                    ? "Search official Marion County inmate records, verify Ocala jail and bond details, and prepare the information needed to request help safely."
                                    : isClearwater
                                      ? "Search official Pinellas County arrest records, verify Clearwater bond and jail details, and prepare the information needed to request help safely."
                            : "Confirm custody and case details through the county's official source. Transfer routes, booking duration, and release timing vary and cannot be promised."}
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
            <h2 className="text-2xl font-serif font-bold text-white">
              Local arresting agency
            </h2>
            <p className="mt-5 font-bold text-white">
              {city.policeDepartment.name}
            </p>
            <p className="mt-3 flex gap-2 text-slate-400">
              <MapPin className="h-5 w-5 text-yellow-500" />
              {city.policeDepartment.address}
            </p>
            <p className="mt-3 flex gap-2 text-slate-400">
              <Phone className="h-5 w-5 text-yellow-500" />
              {city.policeDepartment.phone}
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
            <h2 className="text-2xl font-serif font-bold text-white">
              County detention resource
            </h2>
            <p className="mt-5 font-bold text-white">{county.jail.name}</p>
            <p className="mt-3 text-slate-400">{county.jail.address}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950"
                href={county.jail.inmateSearchUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Search className="h-5 w-5" />
                Official lookup <ExternalLink className="h-4 w-4" />
              </a>
              {jailGuide && (
                <Link
                  className="inline-flex items-center rounded-lg border border-slate-700 px-5 py-3 font-bold text-white"
                  href={jailGuide}
                >
                  {county.slug === "miami-dade"
                    ? "Turner Guilford Knight (TGK) guide"
                    : county.slug === "broward"
                      ? "Broward Main Jail address and phone"
                      : county.slug === "pasco"
                        ? "Land O' Lakes jail inmate search"
                        : "Jail booking guide"}
                </Link>
              )}
            </div>
          </div>
          <div className="rounded-xl border border-amber-900/40 bg-amber-950/20 p-8 md:col-span-2">
            <h2 className="flex items-center gap-3 text-xl font-bold text-white">
              <ShieldAlert className="h-6 w-6 text-yellow-500" />
              Important verification notice
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              Bond Florida is a directory, not the court or detention agency.
              Verify addresses, phone numbers, custody status, charges, bond
              conditions, and procedures directly. For case-specific advice,
              consult a qualified attorney.
            </p>
            <div className="mt-5 flex flex-wrap gap-5 text-sm">
              <a
                className="text-yellow-500 underline"
                href="https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                Florida DFS consumer guide
              </a>
              <Link
                className="text-yellow-500 underline"
                href={`/county/${county.slug}`}
              >
                Return to {county.name}
              </Link>
            </div>
          </div>
          {isWestPalmBeach && <WestPalmBeachGuide />}
          {isVeroBeach && <VeroBeachGuide />}
          {isOrlando && <OrlandoGuide />}
          {isTampa && <TampaGuide />}
          {isFortMyers && <FortMyersGuide />}
          {isStPetersburg && <StPetersburgGuide />}
          {isWinterPark && <WinterParkGuide />}
          {isBonitaSprings && <BonitaSpringsGuide />}
          {isCapeCoral && <CapeCoralGuide />}
          {isDadeCity && <DadeCityGuide />}
          {isYulee && <YuleeGuide />}
          {isOcala && <OcalaGuide />}
          {isClearwater && <ClearwaterGuide />}
          {reviewedServiceGuides.length > 0 && (
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8 md:col-span-2">
              <h2 className="text-2xl font-serif font-bold text-white">
                Reviewed local service guides
              </h2>
              <div className="mt-5 flex flex-wrap gap-4">
                {reviewedServiceGuides.map((page) => (
                  <Link
                    key={page.serviceSlug}
                    className="rounded-lg border border-slate-700 px-5 py-3 font-bold text-yellow-500"
                    href={`/services/${page.serviceSlug}/${page.citySlug}`}
                  >
                    {page.heading}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
