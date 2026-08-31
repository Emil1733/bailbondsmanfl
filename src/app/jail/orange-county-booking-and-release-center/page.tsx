import type { Metadata } from 'next';
import VerifiedJailGuide from '@/components/VerifiedJailGuide';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({ title: 'Orange County Booking and Release Guide', description: 'Find the verified Orange County Booking and Release Center address, official information phone number, inmate search, and current county source links.', path: '/jail/orange-county-booking-and-release-center' });
export default function Page() { return <VerifiedJailGuide jail={{ name: 'Orange County Booking and Release Center', countyName: 'Orange', countySlug: 'orange', address: '3855 S. John Young Parkway, Orlando, FL 32839', phone: '(407) 836-3400', phoneHref: '+14078363400', inmateSearchUrl: 'https://netapps.ocfl.net/BestJail/', facilitySourceUrl: 'https://newsroom.ocfl.net/directory/corrections-department/', jailSlug: 'orange-county-booking-and-release-center' }} />; }
