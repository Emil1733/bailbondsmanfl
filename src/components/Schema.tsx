import { County } from '@/lib/data';
import JsonLd from '@/components/JsonLd';

interface SchemaProps {
    county: County;
    faqs?: { question: string; answer: string }[];
}

export default function Schema({ county }: SchemaProps) {
    const graph = [
        {
            '@type': 'WebPage',
            '@id': `https://bondflorida.com/county/${county.slug}#webpage`,
            name: `${county.name} Jail and Bail Information`,
            url: `https://bondflorida.com/county/${county.slug}`,
            isPartOf: {
                '@type': 'WebSite',
                '@id': 'https://bondflorida.com/#website',
                name: 'Bond Florida',
                url: 'https://bondflorida.com',
            },
            about: {
                '@type': 'AdministrativeArea',
                name: `${county.name}, Florida`,
            },
            publisher: {
                '@type': 'Organization',
                '@id': 'https://bondflorida.com/#organization',
                name: 'Bond Florida',
                url: 'https://bondflorida.com',
                telephone: '+13058310358',
            },
            mainEntity: {
                '@type': 'DetentionCenter',
                name: county.jail.name,
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: county.jail.address,
                    addressRegion: 'FL',
                    addressCountry: 'US'
                },
                telephone: county.jail.phone,
            }
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
