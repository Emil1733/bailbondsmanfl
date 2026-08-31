import type { Metadata } from 'next';
import VerifiedJailGuide from '@/components/VerifiedJailGuide';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({ title: 'Lee County Jail Core Facility Guide', description: 'Find the verified Lee County Jail Core Facility address, official Corrections Bureau phone number, arrest search, and current agency source links.', path: '/jail/lee-county-core-facility' });
export default function Page() { return <VerifiedJailGuide jail={{ name: 'Lee County Jail Core / CPU Facility', countyName: 'Lee', countySlug: 'lee', address: '2501 Ortiz Avenue, Fort Myers, FL 33905', phone: '(239) 477-1500', phoneHref: '+12394771500', inmateSearchUrl: 'https://www.sheriffleefl.org/arrest-search/', facilitySourceUrl: 'https://www.sheriffleefl.org/corrections/', jailSlug: 'lee-county-core-facility' }} />; }
