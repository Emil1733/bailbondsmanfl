import type { Metadata } from 'next';
import VerifiedJailGuide from '@/components/VerifiedJailGuide';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({ title: 'TGK Jail Inmate Search, Phone & Booking Guide', description: 'Find the verified TGK jail address, official Miami-Dade phone number, inmate search, booking information, and bail-status resources.', path: '/jail/tgk-correctional-center' });
export default function Page() { return <VerifiedJailGuide jail={{ name: 'Turner Guilford Knight (TGK) Correctional Center', countyName: 'Miami-Dade', countySlug: 'miami-dade', address: '7000 NW 41st Street, Miami, FL 33166', phone: '(786) 263-5550', phoneHref: '+17862635550', inmateSearchUrl: 'https://www.miamidade.gov/global/service.page?Mduid_service=ser149149575839770', facilitySourceUrl: 'https://www.miamidade.gov/global/service.page?Mduid_service=ser1772581797828384', jailSlug: 'tgk-correctional-center' }} />; }
