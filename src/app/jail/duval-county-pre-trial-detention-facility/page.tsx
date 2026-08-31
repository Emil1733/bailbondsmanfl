import type { Metadata } from 'next';
import VerifiedJailGuide from '@/components/VerifiedJailGuide';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({ title: 'Duval Pre-Trial Detention Facility Guide', description: 'Find the verified Duval Pre-Trial Detention Facility address, official jail information phone number, inmate search, and current JSO facility source.', path: '/jail/duval-county-pre-trial-detention-facility' });
export default function Page() { return <VerifiedJailGuide jail={{ name: 'John E. Goode Pre-Trial Detention Facility', countyName: 'Duval', countySlug: 'duval', address: '500 E. Adams Street, Jacksonville, FL 32202', phone: '(904) 630-5760', phoneHref: '+19046305760', inmateSearchUrl: 'https://inmatesearch.jaxsheriff.org/', facilitySourceUrl: 'https://www.jaxsheriff.org/Your-Resources/Corrections-Facility.aspx', jailSlug: 'duval-county-pre-trial-detention-facility' }} />; }
