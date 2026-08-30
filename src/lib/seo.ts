import type { Metadata } from 'next';

export const SITE_URL = 'https://bondflorida.com';
export const SITE_NAME = 'Bond Florida';
export const SOCIAL_IMAGE_URL = `${SITE_URL}/og-image.png`;

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: Metadata['keywords'];
};

export function absoluteUrl(path = '/') {
  if (path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function pageMetadata({ title, description, path = '/', keywords }: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [{
        url: SOCIAL_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${title} — ${SITE_NAME}`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SOCIAL_IMAGE_URL],
    },
  };
}

function removeUnsupportedSchema(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value
      .map(removeUnsupportedSchema)
      .filter((item) => item !== undefined);
  }

  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    if (record['@type'] === 'FAQPage' || record['@type'] === 'HowTo') {
      return undefined;
    }

    if (record['@type'] === 'BailBondBusiness') {
      return removeUnsupportedSchema({
        '@type': 'Service',
        '@id': record['@id'],
        name: record.name,
        url: record.url,
        image: record.image,
        description: record.description,
        serviceType: 'Bail bond services',
        provider: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: SITE_NAME,
          url: SITE_URL,
          telephone: '+13058310358',
        },
        areaServed: record.areaServed,
      });
    }

    return Object.fromEntries(
      Object.entries(record)
        .map(([key, item]) => [key, removeUnsupportedSchema(item)] as const)
        .filter(([, item]) => item !== undefined),
    );
  }

  return value;
}

export function serializeJsonLd(value: unknown) {
  const json = JSON.stringify(removeUnsupportedSchema(value));
  return json?.replace(/</g, '\\u003c');
}
