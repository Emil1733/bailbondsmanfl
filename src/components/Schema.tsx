import { County } from '@/lib/data';

interface SchemaProps {
    county: County;
    faqs?: { question: string; answer: string }[];
}

export default function Schema({ county, faqs }: SchemaProps) {
    const localBusiness = {
        '@context': 'https://schema.org',
        '@type': 'BailBondBusiness',
        name: `Statewide Bail Bonds - ${county.name}`,
        image: 'https://bondflorida.com/og-image.jpg',
        telephone: '(305) 831-0358', // Central dispatch
        url: `https://bondflorida.com/county/${county.slug}`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: county.name,
            addressRegion: 'NM',
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
    };

    const faqSchema = faqs ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    } : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
        </>
    );
}
