import type { Metadata } from 'next';
import VerifiedJailGuide from '@/components/VerifiedJailGuide';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({ title: 'Broward County Main Jail Inmate Search & Phone', description: 'Find the verified Broward Main Jail address, official phone number, arrest and inmate search, booking information, and detention-facility links.', path: '/jail/broward-county-main-jail' });
export default function Page() { return <VerifiedJailGuide jail={{ name: 'Broward County Main Jail', countyName: 'Broward', countySlug: 'broward', address: '555 SE 1st Avenue, Fort Lauderdale, FL 33301', phone: '(954) 831-5900', phoneHref: '+19548315900', inmateSearchUrl: 'https://www.sheriff.org/DOD/PAGES/ARRESTSEARCH.ASPX', facilitySourceUrl: 'https://www.sheriff.org/dod/contact-us/', jailSlug: 'broward-county-main-jail' }} />; }
