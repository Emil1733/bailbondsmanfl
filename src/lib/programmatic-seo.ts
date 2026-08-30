import type { City, County } from '@/lib/data';
import type { Service } from '@/lib/services';

export const PROGRAMMATIC_INDEXING_ENABLED = false;

type CityInfo = { city: City; county: County };

export function validateProgrammaticInputs(services: Service[], cities: CityInfo[]) {
  const errors: string[] = [];
  const citySlugs = new Set<string>();
  const combinations = new Set<string>();

  for (const { city, county } of cities) {
    if (citySlugs.has(city.slug)) errors.push(`Duplicate city slug: ${city.slug}`);
    citySlugs.add(city.slug);

    const required = [
      ['city name', city.name],
      ['police department name', city.policeDepartment.name],
      ['police department address', city.policeDepartment.address],
      ['police department phone', city.policeDepartment.phone],
      ['county jail name', county.jail.name],
      ['county jail address', county.jail.address],
      ['official inmate search URL', county.jail.inmateSearchUrl],
    ] as const;

    for (const [label, value] of required) {
      if (!value?.trim()) errors.push(`${county.slug}/${city.slug}: missing ${label}`);
    }

    try {
      const url = new URL(county.jail.inmateSearchUrl);
      if (url.protocol !== 'https:') errors.push(`${county.slug}/${city.slug}: inmate search URL must use HTTPS`);
    } catch {
      errors.push(`${county.slug}/${city.slug}: invalid inmate search URL`);
    }
  }

  for (const service of services) {
    for (const { city } of cities) {
      const key = `${service.slug}/${city.slug}`;
      if (combinations.has(key)) errors.push(`Duplicate service/city combination: ${key}`);
      combinations.add(key);
    }
  }

  if (errors.length) {
    throw new Error(`Programmatic SEO data validation failed:\n${errors.join('\n')}`);
  }
}
