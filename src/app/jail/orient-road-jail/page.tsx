import type { Metadata } from 'next';
import VerifiedJailGuide from '@/components/VerifiedJailGuide';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({ title: 'Orient Road Jail Booking & Inmate Guide', description: 'Find the verified Orient Road Jail address, official Hillsborough County phone number, inmate-search resource, and current detention source links.', path: '/jail/orient-road-jail' });
export default function Page() { return <VerifiedJailGuide jail={{ name: 'Orient Road Jail', countyName: 'Hillsborough', countySlug: 'hillsborough', address: '1201 Orient Road, Tampa, FL 33619', phone: '(813) 247-8300', phoneHref: '+18132478300', inmateSearchUrl: 'https://web.fdle.state.fl.us/search/app/default', facilitySourceUrl: 'https://teamhcso.com/Section/708bcd1f-1d7b-4029-8428-39aac7343910/Department-of-Detention-Services', jailSlug: 'orient-road-jail' }} />; }
