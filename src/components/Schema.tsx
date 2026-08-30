import { County } from '@/lib/data';
import JsonLd from '@/components/JsonLd';
import { SOCIAL_IMAGE_URL } from '@/lib/seo';

interface SchemaProps {
    county: County;
    faqs?: { question: string; answer: string }[];
}

export default function Schema({ county }: SchemaProps) {
    const graph = [
        {
            '@type': 'BailBondBusiness',
            '@id': `https://bondflorida.com/county/${county.slug}#localbusiness`,
            name: `Statewide Bail Bonds - ${county.name}`,
            image: SOCIAL_IMAGE_URL,
            telephone: '(305) 831-0358', // Central dispatch
            url: `https://bondflorida.com/county/${county.slug}`,
            address: {
                '@type': 'PostalAddress',
                addressLocality: county.name,
                addressRegion: 'FL',
                addressCountry: 'US',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: county.geo.lat,
                longitude: county.geo.lng,
            },
            priceRange: '$$',
            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    opens: '00:00',
                    closes: '23:59',
                },
            ],
            areaServed: [
                {
                    '@type': 'AdministrativeArea',
                    name: `${county.name}, FL`
                },
                ...(county.cities || []).map(city => ({
                    '@type': 'City',
                    name: `${city.name}, FL`
                }))
            ],
            knowsAbout: [
                {
                    '@type': 'DetentionCenter',
                    name: county.jail.name,
                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: county.jail.address,
                        addressLocality: county.jail.address.split(',')[1]?.trim() || county.name,
                        addressRegion: 'FL',
                        addressCountry: 'US'
                    },
                    telephone: county.jail.phone,
                    geo: {
                        '@type': 'GeoCoordinates',
                        latitude: county.geo.lat,
                        longitude: county.geo.lng
                    }
                }
            ]
        }
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': graph
    };

    return (
        <JsonLd data={jsonLd} />
    );
}
