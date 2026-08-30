import { MetadataRoute } from 'next';
import { counties } from '@/lib/data';
import { getAllServices } from '@/lib/services';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://bondflorida.com';

    // 1. Static Routes
    const staticRoutes = [
        {
            url: baseUrl,
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/contact`,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/locations`,
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/resources`,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/warrant-search`,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
    ];

    // 2. Service Routes (High Value)
    const services = await getAllServices();
    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 3. County Routes
    const countyRoutes = counties.map((county) => ({
        url: `${baseUrl}/county/${county.slug}`,
        changeFrequency: 'daily' as const,
        priority: 0.9,
    }));

    // 4. Matrix Routes (Service x City) - The programmatic SEO layer
    const matrixRoutes: MetadataRoute.Sitemap = [];
    for (const service of services) {
        for (const county of counties) {
            if (county.cities) {
                for (const city of county.cities) {
                    matrixRoutes.push({
                        url: `${baseUrl}/services/${service.slug}/${city.slug}`,
                        changeFrequency: 'weekly',
                        priority: 0.8,
                    });
                }
            }
        }
    }

    // 5. City Routes (The Anti-Doorway Pages)
    const cityRoutes = counties.flatMap((county) =>
        (county.cities || []).map((city) => ({
            url: `${baseUrl}/county/${county.slug}/${city.slug}`,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }))
    );

    // 6. Jail Landmark Routes
    const jailRoutes = [
        'orient-road-jail',
        'falkenburg-road-jail',
        'tgk-correctional-center',
        'land-o-lakes-detention-center',
        'broward-county-main-jail',
        'orange-county-booking-and-release-center',
        'pinellas-county-jail',
        'palm-beach-county-main-detention-center',
        'lee-county-core-facility',
        'duval-county-pre-trial-detention-facility',
        'metro-west-detention-center'
    ].map((slug) => ({
        url: `${baseUrl}/jail/${slug}`,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...staticRoutes, ...serviceRoutes, ...matrixRoutes, ...countyRoutes, ...cityRoutes, ...jailRoutes];
}
