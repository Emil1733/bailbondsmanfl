import { MetadataRoute } from 'next';
import { counties } from '@/lib/data';
import { getAllServices } from '@/lib/services';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://bondflorida.com';

    // 1. Static Routes
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ];

    // 2. Service Routes (High Value)
    const services = await getAllServices();
    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 3. County Routes
    const countyRoutes = counties.map((county) => ({
        url: `${baseUrl}/county/${county.slug}`,
        lastModified: new Date(),
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
                        lastModified: new Date(),
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
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }))
    );

    return [...staticRoutes, ...serviceRoutes, ...matrixRoutes, ...countyRoutes, ...cityRoutes];
}
