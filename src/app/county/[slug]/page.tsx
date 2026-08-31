import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExternalLink, MapPin, Phone, Search, ShieldAlert } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import EmergencyHeader from '@/components/EmergencyHeader';
import { getAllCounties, getCounty } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import { jailLocalityBySlug } from '@/lib/internal-links';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() { return (await getAllCounties()).map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const county = await getCounty((await params).slug);
  if (!county) return { title: 'County Not Found' };
  return pageMetadata({
    title: `${county.name} Bail Bonds & Jail Guide`,
    description: `Find the official inmate-search resource, primary detention contact, selected local agencies, and source-based bail information for ${county.name}.`,
    path: `/county/${county.slug}`,
  });
}

export default async function CountyPage({ params }: Props) {
  const county = await getCounty((await params).slug);
  if (!county) notFound();
  const jailGuides = Object.entries(jailLocalityBySlug).filter(([, locality]) => locality.countySlug === county.slug);
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <EmergencyHeader />
      <section className="border-b border-white/5 bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Breadcrumbs items={[{ label: county.name, href: `/county/${county.slug}` }]} />
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">County directory</p>
          <h1 className="mt-4 text-4xl font-serif font-bold text-white md:text-6xl">{county.name} jail and bail information</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">Use the official county resource to verify custody, charges, bond status, and current facility procedures. Bond Florida does not control or guarantee release.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
              <h2 className="text-2xl font-serif font-bold text-white">Primary detention contact</h2>
              <dl className="mt-6 space-y-5 text-slate-400">
                <div><dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Facility</dt><dd className="mt-1 text-white">{county.jail.name}</dd></div>
                <div><dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Address</dt><dd className="mt-1 flex gap-2"><MapPin className="h-5 w-5 text-yellow-500" />{county.jail.address}</dd></div>
                <div><dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone</dt><dd className="mt-1 flex gap-2"><Phone className="h-5 w-5 text-yellow-500" />{county.jail.phone}</dd></div>
              </dl>
              <a className="mt-7 inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950" href={county.jail.inmateSearchUrl} rel="noopener noreferrer" target="_blank"><Search className="h-5 w-5" />Official inmate resource <ExternalLink className="h-4 w-4" /></a>
            </div>
            <div className="rounded-xl border border-amber-900/40 bg-amber-950/20 p-8">
              <h2 className="flex items-center gap-3 text-xl font-bold text-white"><ShieldAlert className="h-6 w-6 text-yellow-500" />Verify before paying or traveling</h2>
              <p className="mt-4 leading-relaxed text-slate-400">Roster entries, addresses, phone numbers, visitation policies, and court schedules can change. Confirm time-sensitive details with the responsible government agency. Verify any private agent through Florida&apos;s official license search and read all premium, collateral, and indemnitor terms before signing.</p>
              <div className="mt-5 flex flex-wrap gap-5 text-sm"><a className="text-yellow-500 underline" href="https://licenseesearch.fldfs.com/" target="_blank" rel="noopener noreferrer">Florida license search</a><a className="text-yellow-500 underline" href="https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview" target="_blank" rel="noopener noreferrer">Florida DFS consumer guide</a></div>
            </div>
          </div>
          <aside className="rounded-xl border border-slate-800 bg-slate-900/50 p-7">
            <h2 className="text-xl font-bold text-white">Selected city guides</h2>
            <ul className="mt-5 space-y-3">{county.cities?.map((city) => <li key={city.slug}><Link className="text-yellow-500 underline" href={`/county/${county.slug}/${city.slug}`}>{city.name}</Link></li>)}</ul>
            {jailGuides.length > 0 && <><h2 className="mt-8 border-t border-slate-800 pt-7 text-xl font-bold text-white">Verified facility guides</h2><ul className="mt-5 space-y-3">{jailGuides.map(([jailSlug]) => <li key={jailSlug}><Link className="text-yellow-500 underline" href={`/jail/${jailSlug}`}>{jailSlug.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')}</Link></li>)}</ul></>}
          </aside>
        </div>
      </section>
    </main>
  );
}
