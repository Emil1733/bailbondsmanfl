import type { Metadata } from 'next';
import VerifiedJailGuide from '@/components/VerifiedJailGuide';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({ title: "Land O' Lakes Detention Center Guide", description: "Find the Land O' Lakes Detention Center address, Pasco County inmate and warrant resources, official contacts, and current agency source links.", path: '/jail/land-o-lakes-detention-center' });
export default function Page() { return <VerifiedJailGuide jail={{ name: "Land O' Lakes Detention Center", countyName: 'Pasco', countySlug: 'pasco', address: "20101 Central Boulevard, Land O' Lakes, FL 34637", phone: '(813) 235-6111', phoneHref: '+18132356111', inmateSearchUrl: 'https://www.pascosheriff.com/psoapps/activewarrants/ActiveWarrantsInternet', facilitySourceUrl: 'https://pascosheriff.com/contact/', jailSlug: 'land-o-lakes-detention-center' }} />; }
