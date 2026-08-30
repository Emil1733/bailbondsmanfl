import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { jailLocalityBySlug } from '@/lib/internal-links';

export default function JailLocalLinks({ jailSlug }: { jailSlug: string }) {
  const locality = jailLocalityBySlug[jailSlug];
  if (!locality) return null;

  return (
    <section className="border-t border-slate-800 bg-slate-900/40 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-3 flex items-center gap-2 text-2xl font-serif font-bold text-white">
          <MapPin className="h-5 w-5 text-yellow-500" /> Local release resources
        </h2>
        <p className="mb-5 max-w-3xl text-slate-400">
          Continue with booking and release information for {locality.cityName}, or review the county hub before choosing a bond service.
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-bold">
          <Link href={`/county/${locality.countySlug}/${locality.citySlug}`} className="text-yellow-500 hover:text-white">
            {locality.cityName} arrest and transfer details <ArrowRight className="ml-1 inline h-4 w-4" />
          </Link>
          <Link href={`/county/${locality.countySlug}`} className="text-yellow-500 hover:text-white">
            County jail and booking hub <ArrowRight className="ml-1 inline h-4 w-4" />
          </Link>
          <Link href={`/services/online-bail-bonds/${locality.citySlug}`} className="text-yellow-500 hover:text-white">
            Online bail bonds in {locality.cityName} <ArrowRight className="ml-1 inline h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
