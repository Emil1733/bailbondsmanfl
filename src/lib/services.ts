import type { LucideIcon } from 'lucide-react';
import { AlertTriangle, Car, Clock, CreditCard, Globe, Scale, Shield, Wifi } from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  metaDescription: string;
  icon: LucideIcon;
  heroImage: string;
  sources: { label: string; url: string }[];
  content: {
    intro: string;
    keyPoints: string[];
    processSteps: { title: string; desc: string }[];
    commonCharges: string[];
    faq: { question: string; answer: string }[];
  };
  editorialBody?: string[];
  speakableSummary?: string;
}

const floridaBailSource = {
  label: 'Florida DFS bail bonds overview',
  url: 'https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview',
};

export const services: Service[] = [
  {
    slug: 'dui-bail-bonds', title: 'DUI Bail Bonds Florida', icon: Car, heroImage: '/images/dui-hero.jpg',
    shortDescription: 'A source-based overview of Florida DUI custody rules and the details families should verify.',
    metaDescription: 'Learn how Florida DUI custody and bail may work, what information to gather, which release conditions apply, and where to verify official requirements.',
    sources: [{ label: 'Florida Statutes § 316.193', url: 'https://www.leg.state.fl.us/Statutes/Index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.193.html' }, floridaBailSource],
    content: {
      intro: 'Florida Statutes § 316.193(9) restricts release after a DUI arrest until at least one of three statutory conditions is satisfied. The statute does not promise release at a particular time; booking, other holds, court requirements, and facility processing can add time.',
      keyPoints: ['Verify custody through the county', 'Confirm every listed charge', 'Ask whether another hold applies', 'Use the statute and agency as primary sources'],
      processSteps: [
        { title: 'Locate the record', desc: 'Use the county’s official inmate-search resource and confirm the person’s identifying details.' },
        { title: 'Read the custody status', desc: 'Check the listed charges, bond status, court information, and any hold shown by the agency.' },
        { title: 'Confirm directly', desc: 'Call the detention facility or court for time-sensitive information; do not rely on an estimated release time.' },
      ],
      commonCharges: ['Driving under the influence', 'DUI with property damage', 'DUI with injury', 'Related traffic charges'],
      faq: [
        { question: 'Does Florida always impose an eight-hour DUI hold?', answer: 'Section 316.193(9) lists three alternative conditions. Release may occur when any applicable statutory condition is met, but other legal or administrative holds may still apply.' },
        { question: 'Can anyone guarantee the release time?', answer: 'No. The detention agency and court control custody and release processing.' },
      ],
    },
  },
  {
    slug: 'domestic-violence-bail', title: 'Domestic Violence Bail Florida', icon: Shield, heroImage: '/images/domestic-hero.jpg',
    shortDescription: 'Florida first-appearance and bail information for domestic-violence arrests, with official sources.',
    metaDescription: 'Review Florida domestic-violence first-appearance and bail requirements, possible release conditions, safety considerations, and official legal sources.',
    sources: [{ label: 'Florida Statutes § 741.2901', url: 'https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0741/Sections/0741.2901.html' }, floridaBailSource],
    content: {
      intro: 'Florida Statutes § 741.2901 states that a person arrested for an act of domestic violence is held until brought before the court for admittance to bail. The court considers safety and may impose case-specific conditions. Only the court can determine those conditions.',
      keyPoints: ['First appearance is required', 'The court evaluates safety', 'Conditions vary by case', 'Legal advice should come from a lawyer'],
      processSteps: [
        { title: 'Verify the booking', desc: 'Use the official county record to confirm charges, custody location, and court information.' },
        { title: 'Wait for the court record', desc: 'Do not assume a preset amount or condition before the first appearance is completed.' },
        { title: 'Read every condition', desc: 'The defendant should obtain legal advice and follow all court-ordered contact and location restrictions.' },
      ],
      commonCharges: ['Domestic battery allegations', 'Violation of an injunction', 'Stalking allegations', 'Related misdemeanor or felony charges'],
      faq: [
        { question: 'Can bond be posted before first appearance?', answer: 'Section 741.2901 states that the defendant is held until brought before the court for admittance to bail.' },
        { question: 'Does this page provide advice about a no-contact order?', answer: 'No. Court orders are case-specific; a qualified attorney should explain the order.' },
      ],
    },
  },
  {
    slug: 'immigration-bail-bonds', title: 'Immigration Bond Information', icon: Globe, heroImage: '/images/immigration-hero.jpg',
    shortDescription: 'Federal immigration custody and bond resources for families seeking reliable official information.',
    metaDescription: 'Learn how federal immigration custody and delivery bonds differ from Florida state bail, what information to gather, and which official ICE resources to use.',
    sources: [{ label: 'ICE Online Detainee Locator', url: 'https://locator.ice.gov/odls/#/search' }, { label: 'ICE bonds information', url: 'https://www.ice.gov/detain/detention-management/bonds' }],
    content: {
      intro: 'Immigration custody is federal and is separate from Florida county-jail bail. Eligibility, bond amount, payment, release, and hearing obligations depend on the federal record. Use ICE resources and consult a qualified immigration attorney for case-specific advice.',
      keyPoints: ['Use the ICE locator', 'Gather the A-number', 'Confirm eligibility with ICE or counsel', 'Do not treat state-bail rules as federal rules'],
      processSteps: [
        { title: 'Locate the detainee', desc: 'Use the official ICE locator with the person’s A-number or biographical information.' },
        { title: 'Confirm the federal record', desc: 'Ask ICE or qualified counsel whether a bond has been set and what conditions apply.' },
        { title: 'Use official payment instructions', desc: 'Follow current ICE instructions and keep all receipts and case documents.' },
      ],
      commonCharges: ['ICE detention', 'Removal proceedings', 'Immigration court matters', 'Federal delivery bonds'],
      faq: [
        { question: 'Is an immigration bond a Florida state bond?', answer: 'No. Immigration detention and delivery bonds are federal matters.' },
        { question: 'Can this directory determine eligibility?', answer: 'No. Confirm eligibility with ICE and qualified immigration counsel.' },
      ],
    },
  },
  {
    slug: 'traffic-warrant-bail', title: 'Traffic and Warrant Information', icon: AlertTriangle, heroImage: '/images/traffic-hero.jpg',
    shortDescription: 'Official warrant-search resources and cautions for Florida traffic and failure-to-appear matters.',
    metaDescription: 'Learn how to search Florida wanted-person information, why results require agency verification, and where to obtain case-specific warrant guidance.',
    sources: [{ label: 'FDLE Wanted Persons Search', url: 'https://pas.fdle.state.fl.us/pas/restricted/PAS/person/WantedPersons.jsf' }],
    content: {
      intro: 'The FDLE public system displays warrant information reported by agencies, but FDLE warns that it may not be current, active, or complete and is not confirmation that a warrant is active. Verify results with the reporting agency or court.',
      keyPoints: ['Search the FDLE public system', 'Do not act on a result alone', 'Verify with the reporting agency', 'Seek legal advice before surrender decisions'],
      processSteps: [
        { title: 'Search carefully', desc: 'Use accurate identifying information and review the reporting agency shown in the result.' },
        { title: 'Verify the result', desc: 'Contact the reporting agency or responsible court using independently verified contact information.' },
        { title: 'Get legal guidance', desc: 'A lawyer can explain jurisdiction, court procedure, and the safest lawful next step.' },
      ],
      commonCharges: ['Failure to appear', 'Traffic-related warrants', 'Suspended-license cases', 'Court compliance matters'],
      faq: [
        { question: 'Is an FDLE search definitive?', answer: 'No. FDLE says its public information should not be used as confirmation that a warrant is active.' },
        { question: 'Can a website promise a no-custody resolution?', answer: 'No. Procedure and custody decisions depend on the court and agency.' },
      ],
    },
  },
  {
    slug: 'nebbia-hold-bail', title: 'Nebbia Hold and Bail Source', icon: Scale, heroImage: '/images/nebbia-hero.jpg',
    shortDescription: 'A general explanation of Florida bail-source review, documentation, and official consumer guidance.',
    metaDescription: 'Learn what a Florida bail-source or Nebbia review may require, why financial documentation matters, and where to read official consumer guidance.',
    sources: [floridaBailSource],
    content: {
      intro: 'Florida DFS describes a Nebbia hold as a requirement for the defendant and co-signers to disclose the source of bail premium and collateral before release. The proof and court procedure are case-specific and may require legal advice.',
      keyPoints: ['Source of funds must be legitimate', 'Documentation is case-specific', 'The court controls the decision', 'A lawyer can advise on the proffer'],
      processSteps: [
        { title: 'Identify the hold', desc: 'Confirm the court record and do not assume that posting money alone will authorize release.' },
        { title: 'Ask what is required', desc: 'Counsel can identify the records and explanations requested in the specific case.' },
        { title: 'Await the court decision', desc: 'No provider can guarantee when or whether the court will lift the hold.' },
      ],
      commonCharges: ['Cases involving a source-of-funds review', 'Financial-crime allegations', 'Drug-trafficking allegations', 'Court-ordered bail conditions'],
      faq: [
        { question: 'Is there one standard document list?', answer: 'No. Requirements depend on the court and facts; obtain case-specific legal advice.' },
        { question: 'Can the hold be cleared on a promised schedule?', answer: 'No. The court and parties control the review and timing.' },
      ],
    },
  },
  {
    slug: 'online-bail-bonds', title: 'Online Bail Bond Safety', icon: Wifi, heroImage: '/images/online-hero.jpg',
    shortDescription: 'Consumer checks for remote paperwork, identity requests, payments, receipts, and provider verification.',
    metaDescription: 'Review consumer-safety checks for online bail paperwork, provider licensing, payment requests, receipts, collateral terms, and official custody verification.',
    sources: [floridaBailSource, { label: 'Florida license search', url: 'https://licenseesearch.fldfs.com/' }],
    content: {
      intro: 'Remote paperwork may be offered by a provider, but availability and filing methods vary. Before sharing identification or money, independently verify custody, verify the individual agent’s Florida license, read the contract, and obtain required receipts.',
      keyPoints: ['Verify the agent’s license', 'Verify custody independently', 'Read every contract term', 'Keep receipts and copies'],
      processSteps: [
        { title: 'Verify identities', desc: 'Confirm the arrest through the county and the agent through Florida’s official license search.' },
        { title: 'Review the agreement', desc: 'Understand premium, collateral, payment fees, indemnitor obligations, and refund terms.' },
        { title: 'Protect sensitive data', desc: 'Use only the verified provider’s documented process and retain copies of everything submitted.' },
      ],
      commonCharges: ['Remote document signing', 'Identity verification', 'Premium receipts', 'Collateral agreements'],
      faq: [
        { question: 'Is every Florida jail connected to one e-bonding system?', answer: 'Do not assume so. Ask the responsible facility and verified provider which filing methods are accepted.' },
        { question: 'What should I keep?', answer: 'Keep the contract, premium and collateral receipts, payment confirmation, and provider license information.' },
      ],
    },
  },
  {
    slug: '24-hour-bail-bonds', title: 'After-Hours Bail Information', icon: Clock, heroImage: '/images/24hour-hero.jpg',
    shortDescription: 'A checklist for verifying an after-hours Florida arrest without relying on release promises.',
    metaDescription: 'Use an after-hours Florida arrest checklist to verify custody, locate official information, avoid payment scams, and understand factors affecting release.',
    sources: [floridaBailSource],
    content: {
      intro: 'Official inmate-search and information services vary by county. After-hours availability by a private provider does not mean the court or facility can complete every step at that time, and it does not guarantee release before a particular hour.',
      keyPoints: ['Verify custody first', 'Use official phone numbers', 'Avoid urgent payment pressure', 'Expect timing to vary'],
      processSteps: [
        { title: 'Confirm the facility', desc: 'Use the county’s official roster or corrections contact rather than a number supplied by an unsolicited caller.' },
        { title: 'Confirm the record', desc: 'Check charges, bond status, court requirements, and holds.' },
        { title: 'Review any agreement', desc: 'Verify the agent and understand fees, collateral, and obligations before paying or signing.' },
      ],
      commonCharges: ['Night or weekend bookings', 'Court-set bond', 'Administrative holds', 'Multiple-charge records'],
      faq: [
        { question: 'Does a 24-hour phone line mean 24-hour release?', answer: 'No. Courts and detention facilities control processing and release.' },
        { question: 'What is the safest first step?', answer: 'Verify the arrest and custody status through the official county source.' },
      ],
    },
  },
  {
    slug: 'no-collateral-bail-bonds', title: 'Bail Bond Collateral Guide', icon: CreditCard, heroImage: '/images/nocollateral-hero.jpg',
    shortDescription: 'Official consumer information about collateral, premiums, receipts, and indemnitor obligations.',
    metaDescription: 'Learn how Florida bail-bond collateral and underwriting may vary, which receipts are required, and what contract obligations to review before signing.',
    sources: [floridaBailSource],
    content: {
      intro: 'Collateral is not automatically waived. Whether collateral is requested depends on lawful underwriting and the facts of the bond. Florida DFS explains restrictions, receipts, return of collateral, premiums, and consumer responsibilities.',
      keyPoints: ['Collateral varies by case', 'Obtain a collateral receipt', 'Read indemnitor obligations', 'Verify the agent’s license'],
      processSteps: [
        { title: 'Ask for written terms', desc: 'Review the premium, collateral, payment fees, obligations, and refund provisions before signing.' },
        { title: 'Document any collateral', desc: 'Obtain the required detailed receipt and keep copies of ownership and payment records.' },
        { title: 'Track discharge and return', desc: 'Keep case and bond records so you can follow up when the surety’s liability ends.' },
      ],
      commonCharges: ['Collateral agreements', 'Indemnitor contracts', 'Premium payments', 'Bond discharge records'],
      faq: [
        { question: 'Does every bond qualify for no collateral?', answer: 'No. Collateral requirements depend on underwriting and the specific bond.' },
        { question: 'Where can I read the official consumer guidance?', answer: 'Use the Florida Department of Financial Services bail bonds overview linked on this page.' },
      ],
    },
  },
];

export async function getService(slug: string) { return services.find((service) => service.slug === slug); }
export async function getAllServices() { return services; }
