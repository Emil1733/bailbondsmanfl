import type { Metadata } from 'next';
import VerifiedJailGuide from '@/components/VerifiedJailGuide';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({ title: 'Pinellas County Jail Booking & Inmate Guide', description: 'Find the verified Pinellas County Jail address, official jail phone number, Who’s in Jail lookup, and current Pinellas County source information.', path: '/jail/pinellas-county-jail' });
export default function Page() { return <VerifiedJailGuide jail={{ name: 'Pinellas County Jail', countyName: 'Pinellas', countySlug: 'pinellas', address: '14400 49th Street N., Largo, FL 33778', phone: '(727) 464-6415', phoneHref: '+17274646415', inmateSearchUrl: 'https://www.pcsoweb.com/whos-in-jail', facilitySourceUrl: 'https://pinellas.gov/contact-information-and-location-maps/', jailSlug: 'pinellas-county-jail' }} />; }
