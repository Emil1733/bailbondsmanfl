import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, ExternalLink, MapPin, Phone, Search, ShieldAlert } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import EmergencyHeader from '@/components/EmergencyHeader';
import { counties, getCounty } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import { jailGuideByCounty } from '@/lib/internal-links';
import { approvedServiceCityPages } from '@/lib/service-city-seo';

type Props = { params: Promise<{ slug: string; city: string }> };

export function generateStaticParams() { return counties.flatMap((county) => (county.cities || []).map((city) => ({ slug: county.slug, city: city.slug }))); }
export async function generateMetadata({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const county = await getCounty(slug); const city = county?.cities?.find(({ slug }) => slug === citySlug);
  if (!county || !city) return { title: 'City Not Found' };
  if (county.slug === 'palm-beach' && city.slug === 'west-palm-beach') {
    return pageMetadata({
      title: 'West Palm Beach Bail Bonds & Jail Information',
      description: 'Verify Palm Beach County custody and bond information, find official jail contacts, and review safe next steps for bail bonds in West Palm Beach.',
      path: '/county/palm-beach/west-palm-beach',
    });
  }
  return pageMetadata({ title: `${city.name} Florida Bail Bonds & Jail Guide`, description: `Find official inmate-search links, local arresting-agency contact details, county jail information, and verified Florida bail resources for ${city.name}.`, path: `/county/${county.slug}/${city.slug}` });
}

export default async function CityPage({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const county = await getCounty(slug); const city = county?.cities?.find(({ slug }) => slug === citySlug);
  if (!county || !city) notFound();
  const jailGuide = jailGuideByCounty[county.slug];
  const reviewedServiceGuides = approvedServiceCityPages.filter((page) => page.citySlug === city.slug);
  const isWestPalmBeach = county.slug === 'palm-beach' && city.slug === 'west-palm-beach';
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <EmergencyHeader />
      <section className="border-b border-white/5 bg-gradient-to-b from-slate-900 to-slate-950 py-20"><div className="mx-auto max-w-6xl px-6"><Breadcrumbs items={[{ label: county.name, href: `/county/${county.slug}` }, { label: city.name, href: `/county/${county.slug}/${city.slug}` }]} /><p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">Local directory</p><h1 className="mt-4 text-4xl font-serif font-bold text-white md:text-6xl">{isWestPalmBeach ? 'West Palm Beach bail bonds and jail information' : `${city.name} arrest and jail resources`}</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">{isWestPalmBeach ? 'Verify the arrest, custody location, charges, and bond status through Palm Beach County’s official records before choosing a provider or starting paperwork.' : 'Confirm custody and case details through the county\'s official source. Transfer routes, booking duration, and release timing vary and cannot be promised.'}</p></div></section>
      <section className="py-16"><div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8"><h2 className="text-2xl font-serif font-bold text-white">Local arresting agency</h2><p className="mt-5 font-bold text-white">{city.policeDepartment.name}</p><p className="mt-3 flex gap-2 text-slate-400"><MapPin className="h-5 w-5 text-yellow-500" />{city.policeDepartment.address}</p><p className="mt-3 flex gap-2 text-slate-400"><Phone className="h-5 w-5 text-yellow-500" />{city.policeDepartment.phone}</p></div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8"><h2 className="text-2xl font-serif font-bold text-white">County detention resource</h2><p className="mt-5 font-bold text-white">{county.jail.name}</p><p className="mt-3 text-slate-400">{county.jail.address}</p><div className="mt-6 flex flex-wrap gap-4"><a className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950" href={county.jail.inmateSearchUrl} rel="noopener noreferrer" target="_blank"><Search className="h-5 w-5" />Official lookup <ExternalLink className="h-4 w-4" /></a>{jailGuide && <Link className="inline-flex items-center rounded-lg border border-slate-700 px-5 py-3 font-bold text-white" href={jailGuide}>{county.slug === 'miami-dade' ? 'Turner Guilford Knight (TGK) guide' : county.slug === 'broward' ? 'Broward Main Jail address and phone' : county.slug === 'pasco' ? 'Land O\' Lakes jail inmate search' : 'Jail booking guide'}</Link>}</div></div>
        <div className="rounded-xl border border-amber-900/40 bg-amber-950/20 p-8 md:col-span-2"><h2 className="flex items-center gap-3 text-xl font-bold text-white"><ShieldAlert className="h-6 w-6 text-yellow-500" />Important verification notice</h2><p className="mt-4 leading-relaxed text-slate-400">Bond Florida is a directory, not the court or detention agency. Verify addresses, phone numbers, custody status, charges, bond conditions, and procedures directly. For case-specific advice, consult a qualified attorney.</p><div className="mt-5 flex flex-wrap gap-5 text-sm"><a className="text-yellow-500 underline" href="https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview" target="_blank" rel="noopener noreferrer">Florida DFS consumer guide</a><Link className="text-yellow-500 underline" href={`/county/${county.slug}`}>Return to {county.name}</Link></div></div>
        {isWestPalmBeach && (
          <div className="space-y-8 md:col-span-2">
            <section className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8" aria-labelledby="wpb-quick-answer">
              <h2 id="wpb-quick-answer" className="text-2xl font-serif font-bold text-white">Start with the Palm Beach County custody record</h2>
              <p className="mt-4 leading-relaxed text-slate-300">A West Palm Beach arrest and a Palm Beach County jail booking are separate steps. The arresting agency may be the West Palm Beach Police Department, while custody and bond information is published through the Palm Beach County Sheriff&apos;s Office. Search the official record first so paperwork is based on the correct person, facility, charges, and bond status.</p>
              <div className="mt-6 flex flex-wrap gap-4"><a className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950" href={county.jail.inmateSearchUrl} rel="noopener noreferrer" target="_blank"><Search className="h-5 w-5" />Official Palm Beach arrest search <ExternalLink className="h-4 w-4" /></a>{jailGuide && <Link className="inline-flex items-center rounded-lg border border-slate-700 px-5 py-3 font-bold text-white" href={jailGuide}>Main Detention Center guide</Link>}</div>
            </section>
            <section className="grid gap-5 lg:grid-cols-3" aria-labelledby="wpb-local-contacts">
              <h2 id="wpb-local-contacts" className="sr-only">West Palm Beach arrest and jail contacts</h2>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">West Palm Beach Police</p><p className="mt-3 font-bold text-white">600 Banyan Boulevard</p><a className="mt-2 inline-block text-yellow-500 underline" href="tel:+15618221900">(561) 822-1900</a></div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Main Detention Center</p><p className="mt-3 font-bold text-white">3228 Gun Club Road</p><a className="mt-2 inline-block text-yellow-500 underline" href="tel:+15616884401">(561) 688-4401</a><a className="mt-3 block text-sm text-slate-400 underline" href="https://www.pbso.org/inside-pbso/corrections/inmate-management-bureau/main-detention-center" target="_blank" rel="noopener noreferrer">Official PBSO facility page</a></div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Service area</p><p className="mt-3 font-bold text-white">West Palm Beach and 33406</p><p className="mt-2 text-sm text-slate-400">Verify the actual custody location before traveling.</p></div>
            </section>
            <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-8" aria-labelledby="wpb-bail-steps">
              <h2 id="wpb-bail-steps" className="text-2xl font-serif font-bold text-white">Before contacting a West Palm Beach bail-bond provider</h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Confirm the record.</strong> Match the full legal name, date of birth, booking number, charges, and listed bond status.</span></li>
                <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Check every hold.</strong> A displayed amount does not prove that no other court or agency restriction applies.</span></li>
                <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Verify the license.</strong> Look up the agent through Florida&apos;s official license search before sending identification or money.</span></li>
                <li className="flex gap-3 rounded-lg border border-slate-800 p-5 text-slate-400"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" /><span><strong className="text-white">Read the written terms.</strong> Understand premium, collateral, payment, and indemnitor obligations before signing.</span></li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-5 text-sm"><a className="text-yellow-500 underline" href="https://licenseesearch.fldfs.com/" target="_blank" rel="noopener noreferrer">Verify a Florida insurance license</a><a className="text-yellow-500 underline" href="https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview" target="_blank" rel="noopener noreferrer">Read the Florida DFS bail-bond guide</a></div>
            </section>
            <section className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-8" aria-labelledby="wpb-availability">
              <h2 id="wpb-availability" className="text-2xl font-serif font-bold text-white">Online, DUI and after-hours requests</h2>
              <p className="mt-4 leading-relaxed text-slate-400">A provider may answer calls or accept documents after hours, but that does not mean the court or detention facility can complete every step immediately. DUI cases may also involve booking requirements, court conditions, or other holds that must be verified from the live record. Release timing is controlled by the court and detention facility, not by a private service.</p>
              <div className="mt-5 flex flex-wrap gap-5 text-sm"><Link className="text-yellow-500 underline" href="/services/online-bail-bonds">Online bail-bond safety</Link><Link className="text-yellow-500 underline" href="/services/dui-bail-bonds">Florida DUI bail information</Link><Link className="text-yellow-500 underline" href="/county/palm-beach">Palm Beach County jail guide</Link></div>
            </section>
            <p className="text-sm leading-relaxed text-slate-500">Local contacts and official sources were reviewed September 28, 2026. Agency records and procedures can change; use the linked government sources for time-sensitive decisions.</p>
          </div>
        )}
        {reviewedServiceGuides.length > 0 && <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8 md:col-span-2"><h2 className="text-2xl font-serif font-bold text-white">Reviewed local service guides</h2><div className="mt-5 flex flex-wrap gap-4">{reviewedServiceGuides.map((page) => <Link key={page.serviceSlug} className="rounded-lg border border-slate-700 px-5 py-3 font-bold text-yellow-500" href={`/services/${page.serviceSlug}/${page.citySlug}`}>{page.heading}</Link>)}</div></div>}
      </div></section>
    </main>
  );
}
