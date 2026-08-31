import type { Metadata } from 'next';
import VerifiedJailGuide from '@/components/VerifiedJailGuide';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({ title: 'Palm Beach Main Detention Center Guide', description: 'Find the verified Palm Beach Main Detention Center address, official main phone number, inmate-search resource, and current PBSO facility source.', path: '/jail/palm-beach-county-main-detention-center' });
export default function Page() { return <VerifiedJailGuide jail={{ name: 'Palm Beach County Main Detention Center', countyName: 'Palm Beach', countySlug: 'palm-beach', address: '3228 Gun Club Road, West Palm Beach, FL 33406', phone: '(561) 688-4401', phoneHref: '+15616884401', inmateSearchUrl: 'https://www3.pbso.org/blotter/index.cfm', facilitySourceUrl: 'https://pbso.org/inside-pbso/corrections/inmate-management-bureau/main-detention-center', jailSlug: 'palm-beach-county-main-detention-center' }} />; }
