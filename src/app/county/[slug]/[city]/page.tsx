import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExternalLink, MapPin, Phone, Search, ShieldAlert } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import EmergencyHeader from '@/components/EmergencyHeader';
import { counties, getCounty } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string; city: string }> };

export function generateStaticParams() { return counties.flatMap((county) => (county.cities || []).map((city) => ({ slug: county.slug, city: city.slug }))); }
export async function generateMetadata({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const county = await getCounty(slug); const city = county?.cities?.find(({ slug }) => slug === citySlug);
  if (!county || !city) return { title: 'City Not Found' };
  return pageMetadata({ title: `${city.name} Florida Bail Bonds & Jail Guide`, description: `Find official inmate-search links, local arresting-agency contact details, county jail information, and verified Florida bail resources for ${city.name}.`, path: `/county/${county.slug}/${city.slug}` });
}

export default async function CityPage({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const county = await getCounty(slug); const city = county?.cities?.find(({ slug }) => slug === citySlug);
  if (!county || !city) notFound();
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <EmergencyHeader />
      <section className="border-b border-white/5 bg-gradient-to-b from-slate-900 to-slate-950 py-20"><div className="mx-auto max-w-6xl px-6"><Breadcrumbs items={[{ label: county.name, href: `/county/${county.slug}` }, { label: city.name, href: `/county/${county.slug}/${city.slug}` }]} /><p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">Local directory</p><h1 className="mt-4 text-4xl font-serif font-bold text-white md:text-6xl">{city.name} arrest and jail resources</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">Confirm custody and case details through the county&apos;s official source. Transfer routes, booking duration, and release timing vary and cannot be promised.</p></div></section>
      <section className="py-16"><div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8"><h2 className="text-2xl font-serif font-bold text-white">Local arresting agency</h2><p className="mt-5 font-bold text-white">{city.policeDepartment.name}</p><p className="mt-3 flex gap-2 text-slate-400"><MapPin className="h-5 w-5 text-yellow-500" />{city.policeDepartment.address}</p><p className="mt-3 flex gap-2 text-slate-400"><Phone className="h-5 w-5 text-yellow-500" />{city.policeDepartment.phone}</p></div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8"><h2 className="text-2xl font-serif font-bold text-white">County detention resource</h2><p className="mt-5 font-bold text-white">{county.jail.name}</p><p className="mt-3 text-slate-400">{county.jail.address}</p><a className="mt-6 inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 font-bold text-slate-950" href={county.jail.inmateSearchUrl} rel="noopener noreferrer" target="_blank"><Search className="h-5 w-5" />Official lookup <ExternalLink className="h-4 w-4" /></a></div>
        <div className="rounded-xl border border-amber-900/40 bg-amber-950/20 p-8 md:col-span-2"><h2 className="flex items-center gap-3 text-xl font-bold text-white"><ShieldAlert className="h-6 w-6 text-yellow-500" />Important verification notice</h2><p className="mt-4 leading-relaxed text-slate-400">Bond Florida is a directory, not the court or detention agency. Verify addresses, phone numbers, custody status, charges, bond conditions, and procedures directly. For case-specific advice, consult a qualified attorney.</p><div className="mt-5 flex flex-wrap gap-5 text-sm"><a className="text-yellow-500 underline" href="https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview" target="_blank" rel="noopener noreferrer">Florida DFS consumer guide</a><Link className="text-yellow-500 underline" href={`/county/${county.slug}`}>Return to {county.name}</Link></div></div>
      </div></section>
    </main>
  );
}
