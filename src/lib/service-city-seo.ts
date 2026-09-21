export type ServiceCitySeoContent = {
  serviceSlug: string;
  citySlug: string;
  heading: string;
  paragraphs: string[];
};

/** Pages that have passed the standalone-value review and may be indexed. */
export const approvedServiceCityPages: ServiceCitySeoContent[] = [
  {
    serviceSlug: 'dui-bail-bonds',
    citySlug: 'clearwater',
    heading: 'DUI booking and release in Clearwater',
    paragraphs: [
      'Clearwater DUI arrests are commonly processed through Pinellas County intake. Required observation and booking steps may need to finish before a surety bond can be accepted, even when a bond amount already appears in the court record.',
      'Confirm the defendant’s legal name, date of birth, booking location, charges, and any holds before starting paperwork. The official county lookup is the authoritative source for current custody information.',
    ],
  },
  {
    serviceSlug: 'domestic-violence-bail',
    citySlug: 'plant-city',
    heading: 'Domestic-violence release procedure in Plant City',
    paragraphs: [
      'A domestic-violence arrest in Plant City normally requires first appearance before release conditions are finalized. A listed bond amount does not necessarily mean immediate release because the judge may impose a no-contact order or another condition.',
      'Families can gather identification and case information while the hearing is pending. Release timing still depends on booking completion, the signed court order, and the detention facility’s discharge queue.',
    ],
  },
  {
    serviceSlug: 'traffic-warrant-bail',
    citySlug: 'clearwater',
    heading: 'Clearing a traffic warrant in Clearwater',
    paragraphs: [
      'A Clearwater traffic or failure-to-appear warrant should be verified before a voluntary surrender or bond is arranged. The live warrant record determines the responsible court, bond status, and whether another hold could prevent release.',
      'When a walk-through procedure is available, paperwork may be prepared before booking. Eligibility varies by warrant, so the official court and custody records must be checked first.',
    ],
  },
  {
    serviceSlug: 'nebbia-hold-bail',
    citySlug: 'plant-city',
    heading: 'Resolving a Nebbia hold after a Plant City arrest',
    paragraphs: [
      'A Nebbia hold prevents release until the court accepts evidence that the premium and collateral come from lawful sources. Paying or posting funds before the hold is cleared does not authorize release.',
      'The court may require bank statements, pay records, tax documents, or proof of ownership. A defense attorney handles the legal presentation; the bond agent addresses surety requirements after the court approves the source of funds.',
    ],
  },
  {
    serviceSlug: 'domestic-violence-bail',
    citySlug: 'fort-lauderdale',
    heading: 'Domestic-violence release process in Fort Lauderdale',
    paragraphs: [
      'Fort Lauderdale domestic-violence cases generally require first appearance before final release conditions are known. The court may add a no-contact order, residence restriction, or monitoring requirement.',
      'Preparing identification and bond information during booking can reduce avoidable delay, but no private service can bypass a judicial hold. Verify the current custody and court status through the linked official sources.',
    ],
  },
];

export function getApprovedServiceCityPage(serviceSlug: string, citySlug: string) {
  return approvedServiceCityPages.find(
    (page) => page.serviceSlug === serviceSlug && page.citySlug === citySlug,
  );
}
