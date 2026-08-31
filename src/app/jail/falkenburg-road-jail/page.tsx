import type { Metadata } from 'next';
import VerifiedJailGuide from '@/components/VerifiedJailGuide';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({ title: 'Falkenburg Road Jail Booking Guide', description: 'Find the verified Falkenburg Road Jail address, official Hillsborough County phone number, inmate-search resource, and current facility source links.', path: '/jail/falkenburg-road-jail' });
export default function Page() { return <VerifiedJailGuide jail={{ name: 'Falkenburg Road Jail', countyName: 'Hillsborough', countySlug: 'hillsborough', address: '520 N. Falkenburg Road, Tampa, FL 33619', phone: '(813) 247-8300', phoneHref: '+18132478300', inmateSearchUrl: 'https://web.fdle.state.fl.us/search/app/default', facilitySourceUrl: 'https://teamhcso.com/Section/708bcd1f-1d7b-4029-8428-39aac7343910/Department-of-Detention-Services', jailSlug: 'falkenburg-road-jail' }} />; }
