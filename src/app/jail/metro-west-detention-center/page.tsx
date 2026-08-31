import type { Metadata } from 'next';
import VerifiedJailGuide from '@/components/VerifiedJailGuide';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({ title: 'Metro West Detention Center Booking Guide', description: 'Find the verified Metro West Detention Center address, official Miami-Dade phone number, inmate-search resource, and current facility information links.', path: '/jail/metro-west-detention-center' });
export default function Page() { return <VerifiedJailGuide jail={{ name: 'Metro West Detention Center', countyName: 'Miami-Dade', countySlug: 'miami-dade', address: '13850 NW 41st Street, Miami, FL 33178', phone: '(786) 263-5110', phoneHref: '+17862635110', inmateSearchUrl: 'https://www.miamidade.gov/global/service.page?Mduid_service=ser149149575839770', facilitySourceUrl: 'https://www.miamidade.gov/global/corrections/contact.page', jailSlug: 'metro-west-detention-center' }} />; }
