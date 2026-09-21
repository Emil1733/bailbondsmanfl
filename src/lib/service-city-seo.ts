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
      'A DUI record can involve separate court, driver-license, and custody questions. The jail roster answers only the custody portion. Court notices and any licensing consequences should be verified with the agency responsible for that record instead of inferred from the booking page.',
      'For a useful first call, have the arrest date, arresting agency, county, and exact spelling of the defendant’s name available. Ask whether booking is complete and whether the displayed status includes every charge or hold.',
    ],
  },
  {
    serviceSlug: 'domestic-violence-bail',
    citySlug: 'plant-city',
    heading: 'Domestic-violence release procedure in Plant City',
    paragraphs: [
      'A domestic-violence arrest in Plant City normally requires first appearance before release conditions are finalized. A listed bond amount does not necessarily authorize release at once because the judge may impose a no-contact order or another condition.',
      'Families can gather identification and case information while the hearing is pending. Release timing still depends on booking completion, the signed court order, and the detention facility’s discharge queue.',
      'The first-appearance order matters more than a generic bond schedule in these cases. Read the entered conditions carefully and do not contact a protected person on the defendant’s behalf when the order prohibits communication.',
      'Plant City cases may involve a local arresting agency while custody information appears through the county system. Record the case number and responsible court so later questions go to the correct office.',
    ],
  },
  {
    serviceSlug: 'traffic-warrant-bail',
    citySlug: 'clearwater',
    heading: 'Clearing a traffic warrant in Clearwater',
    paragraphs: [
      'A Clearwater traffic or failure-to-appear warrant should be verified before a voluntary surrender or bond is arranged. The live warrant record determines the responsible court, bond status, and whether another hold could prevent release.',
      'When a walk-through procedure is available, paperwork may be prepared before booking. Eligibility varies by warrant, so the official court and custody records must be checked first.',
      'Do not assume that paying the original citation clears a later failure-to-appear warrant. Confirm the warrant number, issuing court, stated bond status, and any required court appearance before traveling to a facility.',
      'Keep proof of every payment and filing, but rely on the court docket or law-enforcement record to confirm that a warrant has actually been recalled. A receipt by itself may not reflect the current enforcement status.',
    ],
  },
  {
    serviceSlug: 'nebbia-hold-bail',
    citySlug: 'plant-city',
    heading: 'Resolving a Nebbia hold after a Plant City arrest',
    paragraphs: [
      'A Nebbia hold prevents release until the court accepts evidence that the premium and collateral come from lawful sources. Paying or posting funds before the hold is cleared does not authorize release.',
      'The court may require bank statements, pay records, tax documents, or proof of ownership. A defense attorney handles the legal presentation; the bond agent addresses surety requirements after the court approves the source of funds.',
      'Documents should show both ownership and the path of the funds. Large recent deposits, transfers from another person, or property offered by a third party may require additional explanation and supporting records.',
      'A Plant City arrest may be booked through the county facility even when the underlying events occurred locally. Keep the booking record, court case number, and financial-source documents organized as separate records for the professionals handling the matter.',
    ],
  },
  {
    serviceSlug: 'domestic-violence-bail',
    citySlug: 'fort-lauderdale',
    heading: 'Domestic-violence release process in Fort Lauderdale',
    paragraphs: [
      'Fort Lauderdale domestic-violence cases generally require first appearance before final release conditions are known. The court may add a no-contact order, residence restriction, or monitoring requirement.',
      'Preparing identification and bond information during booking can reduce avoidable delay, but no private service can bypass a judicial hold. Verify the current custody and court status through the linked official sources.',
      'The Broward arrest search and court record serve different purposes: one confirms custody information while the other reflects filed court activity and judicial conditions. Compare names and case identifiers carefully before relying on either record.',
      'If a no-contact condition is entered, questions about retrieving belongings, returning home, or communicating through another person require legal guidance. A bond transaction does not modify the judge’s order.',
    ],
  },
];

export function getApprovedServiceCityPage(serviceSlug: string, citySlug: string) {
  return approvedServiceCityPages.find(
    (page) => page.serviceSlug === serviceSlug && page.citySlug === citySlug,
  );
}
