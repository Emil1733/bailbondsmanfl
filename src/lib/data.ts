

export interface City {
  name: string;
  slug: string;
  policeDepartment: {
    name: string;
    address: string;
    phone: string;
  };
  travelTimeToJail: string;
  description: string;
  specificFaqs?: {
    question: string;
    answer: string;
  }[];
}

export interface County {
  slug: string;
  name: string;
  population: number;
  jail: {
    name: string;
    address: string;
    phone: string;
    visitingHours: string;
    inmateSearchUrl: string;
  };
  geo: {
    lat: number;
    lng: number;
  };
  cities?: City[];
  richContent?: {
    courtInfo?: {
      name: string;
      address: string;
      bondHearingTimes: string[];
    };
    releaseProcess?: {
      step1: string;
      step2: string;
      step3: string;
    };
    specificFaqs?: {
      question: string;
      answer: string;
    }[];
  };
  relatedEntities?: string[]; // Knowledge Graph Entities (e.g. Sheriff, Clerk, Courthouse)
}

export const counties: County[] = [
  {
    slug: 'miami-dade',
    name: 'Miami-Dade County',
    population: 2966883,
    jail: {
      name: 'Turner Guilford Knight (TGK) Center',
      address: '7000 NW 41st Street, Miami, FL 33166',
      phone: '(786) 263-5341',
      visitingHours: 'Daily 9:00 AM - 9:00 PM (Video Only)',
      inmateSearchUrl: 'https://www.miamidade.gov/Apps/mdcr/InmateSearch/#/',
    },
    geo: {
      lat: 25.8100,
      lng: -80.3117,
    },
    cities: [
      {
        name: 'Miami',
        slug: 'miami',
        policeDepartment: {
          name: 'Miami Police Department',
          address: '400 NW 2nd Ave, Miami, FL 33128',
          phone: '(305) 603-6640'
        },
        travelTimeToJail: '25-35 minutes',
        description: 'The largest municipality in the county. Arrests here are processed at the MPD substation before transport to TGK.',
        specificFaqs: [
          {
            question: 'I was arrested by Miami PD, not the Sheriff — does that change anything?',
            answer: 'No. Regardless of whether it was MPD or the Miami-Dade Sheriff, all arrestees end up at TGK (7000 NW 41st St) for booking. The arresting agency only affects the initial holding location — we post bond at TGK in all cases.'
          },
          {
            question: 'Is Wynwood / Brickell a different jurisdiction from Miami?',
            answer: 'Wynwood and Brickell are inside City of Miami limits and are policed by MPD. These are high-enforcement zones for weekend nightlife arrests. Call us immediately — the next available transport to TGK usually leaves within hours.'
          }
        ]
      },
      {
        name: 'Hialeah',
        slug: 'hialeah',
        policeDepartment: {
          name: 'Hialeah Police Department',
          address: '501 E 4th Ave, Hialeah, FL 33010',
          phone: '(305) 687-2525'
        },
        travelTimeToJail: '30-45 minutes',
        description: 'Arrests in Hialeah are processed locally. If not bonded out quickly, inmates are transported to TGK in a daily van run.',
        specificFaqs: [
          {
            question: 'Is the Hialeah Police department a separate jail?',
            answer: 'Yes. HPD has its own holding facility at 501 E 4th Ave. Inmates can be released directly from here on low-level charges before the transport van runs to TGK. Acting fast here can save your family member from a much longer night downtown.'
          },
          {
            question: 'Does Hialeah have a high bail schedule?',
            answer: 'Bond amounts are set by the county-wide schedule, not by HPD. However, Hialeah is known for strict enforcement on traffic and driving-related charges. A traffic warrant arrest here often has a preset bond that we can post immediately.'
          }
        ]
      },
      {
        name: 'Miami Beach',
        slug: 'miami-beach',
        policeDepartment: {
          name: 'Miami Beach Police Department',
          address: '1100 Washington Ave, Miami Beach, FL 33139',
          phone: '(305) 673-7900'
        },
        travelTimeToJail: '30-50 minutes',
        description: 'A high-volume arrest zone for tourists and nightlife. Inmates are held at the Washington Ave station briefly before transport to TGK via the causeway.',
        specificFaqs: [
          {
            question: 'Why does transport from Miami Beach to TGK take longer?',
            answer: 'All vehicles heading to the Turner Guilford Knight Correctional Center must cross the MacArthur Causeway back to the mainland, then travel through Miami traffic. This adds 20-30 minutes to every transport run compared to mainland Miami arrests.'
          },
          {
            question: 'Are tourist arrests in Miami Beach handled differently?',
            answer: 'No — MBPD does not give breaks for tourists. Nightlife arrests on Ocean Drive are prosecuted the same as any local arrest. The bond amount is set at First Appearance Court, which is the morning after arrest.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Richard E. Gerstein Justice Building',
        address: '1351 NW 12th St, Miami, FL 33125',
        bondHearingTimes: ['Mon-Fri: 9:00 AM & 1:30 PM', 'Weekends: 9:00 AM Only']
      },
      releaseProcess: {
        step1: 'Inmate is booked at TGK (avg 4-6 hours).',
        step2: 'Bond amount is set by the magistrate or standard schedule.',
        step3: 'We post the bond. Release usually occurs 2-4 hours after posting.'
      },
      specificFaqs: [
        {
          question: 'Where do I pick up an inmate released from TGK?',
          answer: 'All releases occur at the TGK Correctional Center (7000 NW 41st Street). Even if the inmate was housed at Metro West or the Women’s Detention Center, they are transported back to TGK for final discharge. Do not wait at Metro West.'
        },
        {
          question: 'Where do I park for bond hearings at the Gerstein Building?',
          answer: 'Street parking is nearly impossible. We recommend the "Civic Center Jury Lot" at 1250 NW 12th St ($15 daily maximum). It is directly across from the courthouse entrance.'
        },
        {
          question: 'Can I visit an inmate physically in Miami-Dade?',
          answer: 'No, physical contact visits are suspended. You must schedule video visitations using the "GTL VisitMe" portal (miamidade.gtlvisitme.com) or the "ConnectNetwork" mobile app. Visits must be scheduled 24 hours in advance.'
        },
        {
          question: 'How much does a bail bond cost in Miami-Dade?',
          answer: 'State law sets the premium at 10% of the total bond amount. For example, a $5,000 bond requires a $500 premium. We offer payment plans for qualified signers.'
        },
        {
          question: 'How long does the release process take?',
          answer: 'Once we post the bond at TGK, MDCR typically takes 6-8 hours to process the release. We monitor the "inmate release queue" and will notify you exactly when to pull up to the release lobby.'
        }
      ]
    },
    relatedEntities: ["Katherine Fernandez Rundle", "Richard E. Gerstein Justice Building", "Miami-Dade Police Department", "Daniella Levine Cava"]
  },
  {
    slug: 'broward',
    name: 'Broward County',
    population: 2106844,
    jail: {
      name: 'Broward County Main Jail',
      address: '555 SE 1st Avenue, Fort Lauderdale, FL 33301',
      phone: '(954) 831-5900',
      visitingHours: 'Daily 7:45 AM - 9:45 PM',
      inmateSearchUrl: 'https://apps.sheriff.org/arrestsearch?d=y',
    },
    geo: {
      lat: 26.1162,
      lng: -80.1446,
    },
    cities: [
      {
        name: 'Fort Lauderdale',
        slug: 'fort-lauderdale',
        policeDepartment: {
          name: 'Fort Lauderdale Police Department',
          address: '1300 W Broward Blvd, Fort Lauderdale, FL 33312',
          phone: '(954) 828-5700'
        },
        travelTimeToJail: '10-15 minutes',
        description: 'The county seat and largest city. FLPD transports arrestees to the BSO Main Jail Intake rapidly due to close proximity.',
        specificFaqs: [
          {
            question: 'What is the BSO Intake process at the Main Jail?',
            answer: 'BSO Main Jail Intake at 555 SE 1st Ave is where all Fort Lauderdale arrests are processed. Booking takes 4-8 hours. You cannot visit during booking, but you can call us immediately to start the bond paperwork so we can post the moment the amount is set.'
          },
          {
            question: 'Is the Las Olas / Riverwalk area a high-arrest zone?',
            answer: 'Yes. The Las Olas entertainment corridor is a priority enforcement zone for FLPD on weekends. DUI and disorderly conduct arrests are common. The jail is less than 3 miles from Las Olas Blvd, so processing begins very quickly.'
          }
        ]
      },
      {
        name: 'Hollywood',
        slug: 'hollywood',
        policeDepartment: {
          name: 'Hollywood Police Department',
          address: '3250 Hollywood Blvd, Hollywood, FL 33021',
          phone: '(954) 967-4357'
        },
        travelTimeToJail: '20-30 minutes',
        description: 'A major coastal city. Arrests here are processed at HPD headquarters before transfer to the BSO Main Jail in Fort Lauderdale.',
        specificFaqs: [
          {
            question: 'Does Hollywood police process arrests at the Margaritaville or beach strip?',
            answer: 'Hollywood Beach is covered by HPD. Arrests on the boardwalk or A1A are processed at HPD HQ on Hollywood Blvd before the transport north on US-1 to the BSO Main Jail. The beach-to-jail trip takes 30-40 minutes total.'
          },
          {
            question: 'Can I bond someone out before they leave HPD custody?',
            answer: 'In most cases, no — HPD transfers to Broward Main Jail before bond can be posted through a bondsman. The exception is a very low-level charge where the officer can issue a Notice to Appear (no custody). Call us immediately to confirm which applies.'
          }
        ]
      },
      {
        name: 'Pompano Beach',
        slug: 'pompano-beach',
        policeDepartment: {
          name: 'BSO District 11 (Pompano Beach)',
          address: '100 SW 3rd St, Pompano Beach, FL 33060',
          phone: '(954) 786-4201'
        },
        travelTimeToJail: '15-25 minutes',
        description: 'Patrolled by BSO. Arrestees are held briefly at the District 11 substation before being transported south to the Main Jail Intake.',
        specificFaqs: [
          {
            question: 'There are two BSO stations in Pompano — which one processes arrests?',
            answer: 'All bookings go to the BSO District 11 station at 100 SW 3rd St. However, the actual bond must be posted at the BSO Main Jail in Fort Lauderdale (555 SE 1st Ave), not in Pompano. We go directly to Fort Lauderdale to file the paperwork.'
          },
          {
            question: 'What is the Paul Rein Facility that serves Pompano Beach?',
            answer: 'Paul Rein Detention Facility (5601 NE 31st Ave) is a BSO housing facility in Pompano for female inmates and those with medical needs. If your family member is at Paul Rein, the bond is still posted at the Fort Lauderdale Main Jail, but they are released from Pompano.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Broward County Judicial Complex',
        address: '201 SE 6th St, Fort Lauderdale, FL 33301',
        bondHearingTimes: ['Daily: 8:30 AM (Magistrate Court)', 'Weekends/Holidays: 8:30 AM']
      },
      releaseProcess: {
        step1: 'Booking at BSO Main Jail Intake. Processing can take 4-8 hours.',
        step2: 'First Appearance Court (usually following morning) for bond setting if not pre-set.',
        step3: 'Post bail. Release from Main Jail typically takes 6-12 hours due to high volume.'
      },
      specificFaqs: [
        {
          question: 'Where is the "Cash Bond Window" located?',
          answer: 'The window is in the Main Jail lobby at 555 SE 1st Avenue. It is open 24/7. IMPORTANT: They strictly do not accept personal checks or credit cards at the window. You must bring cash or a cashier’s check made out to the "Sheriff of Broward County".'
        },
        {
          question: 'What is the "Paul Rein" facility?',
          answer: 'The Paul Rein Detention Facility is in Pompano Beach (North Broward). It primarily houses female inmates and those with medical needs. If your loved one is at Paul Rein, we still post the bond at the Main Jail, but release will happen in Pompano.'
        },
        {
          question: 'Where can I watch the First Appearance Court?',
          answer: 'Broward County streams First Appearance hearings live. The bond hearings are held at 201 S.E. Sixth Street, Courtroom 04155 (West Wing). You can watch the "Magistrate Court" live stream on the 17th Judicial Circuit website.'
        },
        {
          question: 'How much does a bail bond cost in Broward County?',
          answer: 'The standard premium is 10% of the full bond amount (e.g., $100 for a $1,000 bond). This is regulated by Florida state law. We accept credit cards and offer payment plans.'
        },
        {
          question: 'How long does release take at Broward Main Jail?',
          answer: 'The Broward Main Jail is a high-volume facility. Once we post the bond, release processing typically takes 6-12 hours. We track the status and will be there when they walk out.'
        }
      ]
    },
    relatedEntities: ["Harold F. Pryor", "Broward County Judicial Complex", "Gregory Tony", "Fort Lauderdale Police Department"]
  },
  {
    slug: 'palm-beach',
    name: 'Palm Beach County',
    population: 1631203,
    jail: {
      name: 'Main Detention Center',
      address: '3228 Gun Club Road, West Palm Beach, FL 33406',
      phone: '(561) 688-4401',
      visitingHours: 'Daily 9:00 AM - 10:30 PM',
      inmateSearchUrl: 'https://www3.pbso.org/blotter/index.cfm',
    },
    geo: {
      lat: 26.6850,
      lng: -80.0900,
    },
    cities: [
      {
        name: 'West Palm Beach',
        slug: 'west-palm-beach',
        policeDepartment: {
          name: 'West Palm Beach Police Department',
          address: '600 Banyan Blvd, West Palm Beach, FL 33401',
          phone: '(561) 822-1900'
        },
        travelTimeToJail: '10-20 minutes',
        description: 'The county seat and largest city in Palm Beach County. WPBPD processes arrests at their downtown headquarters on Banyan Blvd before transport south to the Main Detention Center on Gun Club Road.',
        specificFaqs: [
          {
            question: 'My family member was arrested in downtown West Palm Beach — how long before they reach the jail?',
            answer: 'WPBPD holds at their Banyan Blvd station briefly, then transports south on Military Trail to the Main Detention Center at 3228 Gun Club Road — typically 10-20 minutes. Call us before the transport leaves so we can meet the paperwork window.'
          },
          {
            question: 'Does CityPlace / Clematis Street have frequent arrests?',
            answer: 'Yes. The Clematis Street corridor and CityPlace are priority DUI enforcement zones on weekends. WPBPD runs DUI checkpoints in those areas. A DUI arrest here usually has a mandatory 8-hour hold before bond is eligible.'
          }
        ]
      },
      {
        name: 'Boca Raton',
        slug: 'boca-raton',
        policeDepartment: {
          name: 'Boca Raton Police Department',
          address: '100 NW Boca Raton Blvd, Boca Raton, FL 33432',
          phone: '(561) 338-1333'
        },
        travelTimeToJail: '25-35 minutes',
        description: 'A major city on the southern end of the county. BRPD processes arrests at their NW Boca Raton Blvd station. Transport to the Main Detention Center on Gun Club Road runs north on I-95.',
        specificFaqs: [
          {
            question: 'Why does Boca Raton take longer to process than West Palm Beach?',
            answer: 'Boca is at the southern end of the county, roughly 30 miles from the Main Detention Center on Gun Club Road. Every transport van heading north on I-95 adds significant time. This is why acting early is critical — we can begin paperwork before the inmate even arrives at the jail.'
          },
          {
            question: 'Does FAU (Florida Atlantic University) area affect bail amounts?',
            answer: 'Arrests near FAU Campus are handled by BRPD. Bond amounts are set by the statewide schedule, not by location. However, if a charge involves university property, there can be additional consequences beyond the criminal charge.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Criminal Justice Complex',
        address: '3228 Gun Club Road, West Palm Beach, FL 33406',
        bondHearingTimes: ['Daily: 9:00 AM (First Appearance Court)', 'Weekends/Holidays: 9:00 AM']
      },
      releaseProcess: {
        step1: 'Booking at the Main Detention Center on Gun Club Road.',
        step2: 'First Appearance Court is held within the same complex the next morning.',
        step3: 'Once bond is posted, release is processed at the Main Detention Center release lobby.'
      },
      specificFaqs: [
        {
          question: 'Where is the inmate release parking at Gun Club Road?',
          answer: 'When approaching 3228 Gun Club Road, pass the first two entrances. Take the third entrance on the left to reach the designated "Inmate Release" parking lot. It is closest to the release lobby.'
        },
        {
          question: 'Is the courthouse at the same location as the jail?',
          answer: 'Yes. The Main Detention Center and the Criminal Justice Complex (First Appearance Court) are co-located at 3228 Gun Club Road. You do not need to drive to downtown West Palm Beach for bond hearings.'
        },
        {
          question: 'What app do I use for visitation?',
          answer: 'Physical visitation is limited. You must use the "ConnectNetwork" platform (by GTL) to schedule video visits or deposit funds into an inmate’s account. Kiosks are also available in the jail lobby.'
        },
        {
          question: 'What is the bail bond rate in Palm Beach County?',
          answer: 'As with the rest of Florida, the fee is 10% of the total bail amount. We are located minutes from the Gun Club Road facility to expedite the paperwork immediately.'
        },
        {
          question: 'How long does release take in West Palm Beach?',
          answer: 'Release times at the Gun Club Road facility generally range from 4 to 8 hours after the bond is posted. We will update you as soon as the release order is processed.'
        }
      ]
    },
    relatedEntities: ["Dave Aronberg", "Criminal Justice Complex", "Ric Bradshaw", "Palm Beach County Sheriff's Office"]
  },
  {
    slug: 'hillsborough',
    name: 'Hillsborough County',
    population: 1629652,
    jail: {
      name: 'Orient Road Jail',
      address: '1201 N. Orient Road, Tampa, FL 33619',
      phone: '(813) 247-8300',
      visitingHours: 'Daily 11:00 AM - 9:00 PM',
      inmateSearchUrl: 'https://webapps.hcso.tampa.fl.us/ArrestInquiry',
    },
    geo: {
      lat: 27.9734,
      lng: -82.3550,
    },
    cities: [
      {
        name: 'Tampa',
        slug: 'tampa',
        policeDepartment: {
          name: 'Tampa Police Department',
          address: '411 N Franklin St, Tampa, FL 33602',
          phone: '(813) 276-3200'
        },
        travelTimeToJail: 'Varies by arrest location and processing',
        description: 'Tampa Police and other agencies make arrests in the area. Confirm the arresting agency, current custody record, and assigned facility before making arrangements.',
        specificFaqs: [
          {
            question: 'My family member was arrested in Ybor City — who is the arresting agency?',
            answer: 'Tampa Police generally handles incidents within Tampa city limits, but jurisdiction and assisting agencies can vary. Confirm the arresting agency and live HCSO custody record instead of estimating transport or booking time.'
          },
          {
            question: 'Is there a holding cell at the Tampa airport (TPA)?',
            answer: 'Airport incidents may involve local, county, or federal authorities. Confirm the responsible agency and whether the person appears in HCSO custody before discussing a state bail bond.'
          }
        ]
      },
      {
        name: 'Brandon',
        slug: 'brandon',
        policeDepartment: {
          name: 'HCSO District II Office',
          address: '2310 N Falkenburg Rd, Tampa, FL 33619',
          phone: '(813) 247-8200'
        },
        travelTimeToJail: '10-15 minutes',
        description: 'A massive unincorporated community. Deputies from District II process arrests locally before the short transport to the Orient Road booking center.',
        specificFaqs: [
          {
            question: 'Brandon is unincorporated — does that mean it is the Sheriff and not city police?',
            answer: 'Correct. Brandon has no city police. All law enforcement is handled by HCSO District II at 2310 N Falkenburg Rd. There is no separate city ordinance court — all arrests go through the same county system to Orient Road Jail.'
          },
          {
            question: 'Does the Brandon Town Center area have heavy enforcement?',
            answer: 'The Falkenburg Road / Brandon Blvd commercial corridor has elevated enforcement for DUI, retail theft, and traffic stops. Because the HCSO District II office is right there, transport to Orient Road Jail is very fast — often under 20 minutes.'
          }
        ]
      },
      {
        name: 'Plant City',
        slug: 'plant-city',
        policeDepartment: {
          name: 'Plant City Police Department',
          address: '1 Police Center Dr, Plant City, FL 33563',
          phone: '(813) 757-9200'
        },
        travelTimeToJail: '20-30 minutes',
        description: 'A distinct municipality East of Tampa. PCPD handles initial processing before transfer to the Orient Road Jail hub.',
        specificFaqs: [
          {
            question: 'Does Plant City have its own magistrate or bond court?',
            answer: 'No. Bond amounts are set at PP Court (Preliminary Presentation) at the Hillsborough County courthouse, which covers all municipalities including Plant City. There is no local bond court in Plant City itself.'
          },
          {
            question: 'How long does the drive from Plant City to Orient Road Jail take?',
            answer: 'The transport from the Plant City Police Department at 1 Police Center Dr to Orient Road Jail runs east on I-4 — approximately 20-30 minutes. This is one of the longer intra-county transport runs in Hillsborough.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'George E. Edgecomb Courthouse',
        address: '800 E Twiggs St, Tampa, FL 33602',
        bondHearingTimes: ['Confirm the current hearing schedule through the Clerk of Court or HOVER']
      },
      releaseProcess: {
        step1: 'All booking occurs at Orient Road Jail (ORJ), regardless of arrest location.',
        step2: 'Court review, bond eligibility, and release conditions depend on the official case record.',
        step3: 'HCSO controls facility assignment and release processing; confirm current pickup instructions directly.'
      },
      specificFaqs: [
        {
          question: 'What is the cost of a bail bond in Tampa?',
          answer: 'Costs and obligations depend on the bond and written agreement. Verify the agent’s Florida license and review the premium, collateral, payment, and indemnitor terms before signing.'
        },
        {
          question: 'What is "PP Court"?',
          answer: 'PP Court stands for "Preliminary Presentation." It is the First Appearance court held within 24 hours of arrest where a judge reviews the probable cause and sets the bond amount.'
        },
        {
          question: 'Are inmates released from Falkenburg Road Jail?',
          answer: 'Do not assume the release location from the original booking facility. Confirm the assigned facility and current pickup instructions directly with HCSO before traveling.'
        },
        {
          question: 'How long does release take at Orient Road Jail?',
          answer: 'HCSO controls release processing. Timing varies with booking, court conditions, holds, staffing, and other case-specific factors, so a private service cannot guarantee a release time.'
        },
        {
          question: 'What is the difference between Orient Road Jail and Falkenburg Road Jail?',
          answer: 'HCSO identifies Orient Road as the primary receiving facility and Falkenburg Road as a separate detention facility. Use the live arrest record and confirm release instructions with HCSO because facility assignments can change.'
        },
        {
          question: 'Can I get a payment plan for a large bond in Tampa?',
          answer: 'Payment arrangements, collateral, and indemnitor obligations vary by licensed provider and bond. Request all terms in writing and do not rely on an advertised down payment alone.'
        }
      ]
    },
    relatedEntities: ["Suzy Lopez", "George E. Edgecomb Courthouse", "Chad Chronister", "Tampa Police Department"]
  },
  {
    slug: 'orange',
    name: 'Orange County',
    population: 1598408,
    jail: {
      name: 'Orange County Booking and Release Center (BRC)',
      address: '3855 S. John Young Parkway, Orlando, FL 32839',
      phone: '(407) 836-3400',
      visitingHours: 'Daily 8:00 AM - 10:00 PM',
      inmateSearchUrl: 'https://netapps.ocfl.net/BestJail/',
    },
    geo: {
      lat: 28.5085,
      lng: -81.4190,
    },
    cities: [
      {
        name: 'Orlando',
        slug: 'orlando',
        policeDepartment: {
          name: 'Orlando Police Department',
          address: '1250 W South St, Orlando, FL 32805',
          phone: '(321) 235-5300'
        },
        travelTimeToJail: 'Varies by arrest location and processing',
        description: 'Orlando Police and other agencies make arrests in the area. Confirm the arresting agency and current custody record before relying on a facility location.',
        specificFaqs: [
          {
            question: 'My family was arrested near the theme parks (Disney/Universal) — is that still Orlando?',
            answer: 'Arresting-agency jurisdiction varies across the Orlando tourism area. Confirm the agency and search Orange County Corrections records rather than assuming an arrest was made by Orlando Police.'
          },
          {
            question: 'Does the International Drive (I-Drive) area have high arrest rates?',
            answer: 'Enforcement activity and jurisdiction can vary along International Drive. Use the official inmate search to confirm custody, charges, and booking information; no private service can predict booking or release timing.'
          }
        ]
      },
      {
        name: 'Winter Park',
        slug: 'winter-park',
        policeDepartment: {
          name: 'Winter Park Police Department',
          address: '500 N Virginia Ave, Winter Park, FL 32789',
          phone: '(407) 644-1313'
        },
        travelTimeToJail: 'Varies by traffic and processing',
        description: 'Winter Park Police serves the city. Confirm current custody, booking details, and bond entries through the official Orange County inmate search.',
        specificFaqs: [
          {
            question: 'Where can I check a Winter Park arrest?',
            answer: 'Use the official Orange County Corrections inmate search. Match the correct person and verify current custody, booking information, charges, bond entries, and any holds before requesting assistance.'
          },
          {
            question: 'Is Winter Park the same as Maitland and Casselberry for bail bonds?',
            answer: 'They are separate municipalities with different police jurisdictions. Confirm the arresting agency and current custody through the official record rather than assuming the same process or location applies.'
          }
        ]
      },
      {
        name: 'Apopka',
        slug: 'apopka',
        policeDepartment: {
          name: 'Apopka Police Department',
          address: '112 E 6th St, Apopka, FL 32703',
          phone: '(407) 703-1700'
        },
        travelTimeToJail: 'Varies by traffic and processing',
        description: 'A major city in northwest Orange County. Arrests here involve a significant transport time down US-441 to the county booking center.',
        specificFaqs: [
          {
            question: 'Why does Apopka show such a long transport time to the jail?',
            answer: 'Travel and processing times vary. Confirm the current custody record and bond status before making arrangements; a bond cannot be completed before the responsible agencies make the person eligible.'
          },
          {
            question: 'Is Apopka a city police or county sheriff arrest?',
            answer: 'Apopka has its own city police department (APD, 112 E 6th St). APD handles all arrests within city limits. Areas outside the city limits are Orange County Sheriff (OCSO). Both transport to the BRC.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Orange County Courthouse',
        address: '425 N Orange Ave, Orlando, FL 32801',
        bondHearingTimes: ['Confirm the current hearing schedule with the court or Clerk of Courts']
      },
      releaseProcess: {
        step1: 'All arrestees are processed at the BRC on John Young Parkway.',
        step2: 'Court review, bond eligibility, and release conditions depend on the case and official record.',
        step3: 'Orange County Corrections controls release processing and does not guarantee a completion time.'
      },
      specificFaqs: [
        {
          question: 'Where is the Orange County Booking and Release Center?',
          answer: 'Orange County lists the Booking and Release Center at 3855 S. John Young Parkway, Orlando, FL 32839. The Corrections administration address at 3723 Vision Boulevard is a separate location.'
        },
        {
          question: 'Where is the release lobby located?',
          answer: 'Confirm current release and pickup instructions directly with Orange County Corrections at (407) 836-3400 before traveling.'
        },
        {
          question: 'Can I watch First Appearance Court online?',
          answer: 'Hearing access and schedules can change. Check the Orange County court or Clerk of Courts sources for current, case-specific information.'
        },
        {
          question: 'How much does a bail bond cost in Orlando?',
          answer: 'Costs and obligations depend on the bond and written agreement. Verify the agent’s Florida license and review the premium, collateral, payment, and indemnitor terms before signing.'
        },
        {
          question: 'How long does the release process take at the BRC?',
          answer: 'Orange County Corrections controls release processing. Timing varies with booking, court conditions, holds, staffing, and other case-specific factors, so a private service cannot guarantee a release time.'
        }
      ]
    },
    relatedEntities: ["Andrew Bain", "Orange County Courthouse", "John Mina", "Orlando Police Department"]
  },
  {
    slug: 'duval',
    name: 'Duval County',
    population: 1055159,
    jail: {
      name: 'John E. Goode Pre-Trial Detention Facility',
      address: '500 East Adams Street, Jacksonville, FL 32202',
      phone: '(904) 630-5760',
      visitingHours: 'Daily 8:00 AM - 5:00 PM',
      inmateSearchUrl: 'https://inmatesearch.jaxsheriff.org/',
    },
    geo: {
      lat: 30.3299,
      lng: -81.6543,
    },
    cities: [
      {
        name: 'Jacksonville Beach',
        slug: 'jacksonville-beach',
        policeDepartment: {
          name: 'Jacksonville Beach Police Department',
          address: '101 Penman Rd S, Jacksonville Beach, FL 32250',
          phone: '(904) 270-1661'
        },
        travelTimeToJail: '25-40 minutes',
        description: 'A separate jurisdiction from JSO. JBPD arrests are transported inland to the John E. Goode Pre-Trial Detention Facility downtown.',
        specificFaqs: [
          {
            question: 'My family member was arrested on the Jax Beach pier/boardwalk — who handled it?',
            answer: 'The Jacksonville Beach Police Department (JBPD) covers all of Jacksonville Beach including the boardwalk and pier area. Neptune Beach and Atlantic Beach have their own separate PDs. All three beach cities transport to the John E. Goode facility downtown.'
          },
          {
            question: 'Does the beach-to-downtown transport add time to the release?',
            answer: 'Yes. The 25-40 minute transport from Jax Beach to downtown adds real time before booking even begins. We can start the bond paperwork the moment you call — so we are ready the instant the booking window opens on their end.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Duval County Courthouse',
        address: '501 W Adams St, Jacksonville, FL 32202',
        bondHearingTimes: ['Daily: 9:00 AM (Courtroom 208)', 'Weekends/Holidays: 9:00 AM']
      },
      releaseProcess: {
        step1: 'Intake at John E. Goode Pre-Trial Detention Facility (The J-1) on Adams St.',
        step2: 'First Appearance Court is held at the Courthouse directly across the street.',
        step3: 'Release is processed at the J-1 facility. JSO release times can vary from 4-12 hours.'
      },
      specificFaqs: [
        {
          question: 'What is the difference between John E. Goode and the "P-Farm"?',
          answer: 'The John E. Goode Pre-Trial Detention Facility (PTDF) is downtown and holds arrestees before trial. The "P-Farm" (Montgomery Correctional Center) is for sentenced inmates. We post bonds at the PTDF downtown.'
        },
        {
          question: 'Where do I park for the jail release?',
          answer: 'Downtown parking is strict. We recommend the "Yates Garage" at 200 E. Adams St, which is within walking distance of the release lobby at 500 E Adams St.'
        },
        {
          question: 'How long does release take in Jacksonville?',
          answer: 'JSO processing at the John E. Goode facility typically takes 4-8 hours. We monitor the "active inmate search" system to confirm exactly when they are cleared for release.'
        },
        {
          question: 'Can I visit an inmate at the PTDF?',
          answer: 'Yes, but all visits are video-only. You must go to the "Video Visitation Center" which shares an entrance with the First Appearance Court at 500 Broad St (around the corner from the main entrance).'
        },
        {
          question: 'Do you cover the beaches (Jax Beach/Neptune Beach)?',
          answer: 'Yes. All arrests at the beaches are transported downtown to the John E. Goode facility. We can post the bond immediately so you don\'t have to drive downtown until pickup.'
        }
      ]
    }
  },
  {
    slug: 'pinellas',
    name: 'Pinellas County',
    population: 965870,
    jail: {
      name: 'Pinellas County Jail',
      address: '14400 49th Street North, Clearwater, FL 33762',
      phone: '(727) 464-6415',
      visitingHours: 'Daily 9:40 AM - 9:00 PM',
      inmateSearchUrl: 'https://whosinjail.pinellassheriff.gov/',
    },
    geo: {
      lat: 27.9100,
      lng: -82.7400,
    },
    cities: [
      {
        name: 'St. Petersburg',
        slug: 'st-petersburg',
        policeDepartment: {
          name: 'St. Petersburg Police Department',
          address: '1301 1st Ave N, St. Petersburg, FL 33705',
          phone: '(727) 893-7780'
        },
        travelTimeToJail: 'Varies by origin, traffic, and agency procedure',
        description: 'St. Petersburg Police is a local arresting agency. Use the official Pinellas County inmate search to confirm current custody, booking details, and bond entries.',
        specificFaqs: [
          {
            question: 'Where can I check a St. Petersburg arrest?',
            answer: 'Start with the official Pinellas County Sheriff\'s Office Who\'s in Jail search. Match the person carefully and verify current custody, charges, bond entries, and any holds before requesting assistance.'
          },
          {
            question: 'Is St. Petersburg policed by the city or the Pinellas Sheriff?',
            answer: 'St. Petersburg Police serves the city, while PCSO serves other jurisdictions and operates the county jail. Agency jurisdiction can depend on where an incident occurs. Confirm the arresting agency and current custody through the official record.'
          }
        ]
      },
      {
        name: 'Clearwater',
        slug: 'clearwater',
        policeDepartment: {
          name: 'Clearwater Police Department',
          address: '645 Pierce St, Clearwater, FL 33756',
          phone: '(727) 562-4242'
        },
        travelTimeToJail: 'Varies by arrest location, traffic, and agency procedure',
        description: 'Clearwater Police is a local arresting agency, while PCSO operates the county jail and publishes current custody and bond information. Confirm the official record before traveling or requesting assistance.',
        specificFaqs: [
          {
            question: 'Does the distance from Clearwater Police predict booking time?',
            answer: 'No. Transport, intake, identity checks, medical screening, court review, holds, and jail workload can all affect timing. Use the official PCSO arrest inquiry to confirm booking instead of estimating from distance.'
          },
          {
            question: 'Is Clearwater Beach the same police jurisdiction as mainland Clearwater?',
            answer: 'Clearwater Beach is within the City of Clearwater, but the responsible agency can depend on the incident and location. Confirm the arresting agency and current custody record rather than assuming a transport route.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Pinellas County Justice Center (CJC)',
        address: '14250 49th St N, Clearwater, FL 33762',
        bondHearingTimes: ['Verify the current hearing schedule and case status with the court.']
      },
      releaseProcess: {
        step1: 'Confirm current custody and booking details through the official PCSO inmate search.',
        step2: 'Verify every charge, bond entry, hold, and court condition before relying on release eligibility.',
        step3: 'PCSO controls intake and release processing; completion time varies and cannot be promised.'
      },
      specificFaqs: [
        {
          question: 'Where is the Video Visitation Center?',
          answer: 'Use the current PCSO visitation instructions to confirm the location, registration rules, scheduling requirements, and availability before traveling.'
        },
        {
          question: 'Can I pay a cash bond at the jail?',
          answer: 'Payment methods, locations, and acceptance rules can change. Confirm current cash-bond instructions directly with PCSO before traveling or sending payment.'
        },
        {
          question: 'What is Advisory Court?',
          answer: 'Advisory Court is associated with initial court review. Whether a person must appear, and how that affects bond eligibility, depends on the case. Verify the current status with the court or a qualified attorney.'
        },
        {
          question: 'How fast is release in Pinellas County?',
          answer: 'There is no reliable universal release time. Booking, court review, holds, paperwork, and jail workload can all affect processing. Only the jail controls final release.'
        },
        {
          question: 'Do you cover St. Petersburg and Clearwater arrests?',
          answer: 'Bond Florida provides directory and request-assistance resources for Pinellas County. Confirm current custody and the responsible agency before relying on any location or process information.'
        },
        {
          question: 'What is the bail bond premium in Pinellas County?',
          answer: 'The amount and terms depend on the bond and lawful written agreement. Ask a licensed agent to explain the premium, collateral, payment, and indemnitor obligations before signing.'
        }
      ]
    }
  },
  {
    slug: 'lee',
    name: 'Lee County',
    population: 860959,
    jail: {
      name: 'Lee County Core / CPU Facility',
      address: '2501 Ortiz Avenue, Fort Myers, FL 33905',
      phone: '(239) 477-1500',
      visitingHours: 'Video Visitation Daily',
      inmateSearchUrl: 'https://www.sheriffleefl.org/arrest-search/',
    },
    geo: {
      lat: 26.6500,
      lng: -81.8000,
    },
    cities: [
      {
        name: 'Fort Myers',
        slug: 'fort-myers',
        policeDepartment: {
          name: 'Fort Myers Police Department',
          address: '2210 Widman Way, Fort Myers, FL 33901',
          phone: '(239) 321-7700'
        },
        travelTimeToJail: 'Varies by arrest location and processing',
        description: 'Fort Myers Police and other agencies make arrests in the area. Confirm the arresting agency, current custody record, and assigned Lee County facility before making arrangements.',
        specificFaqs: [
          {
            question: 'Is the Lee County Jail downtown Fort Myers?',
            answer: 'Lee County lists a Core / CPU facility at 2501 Ortiz Avenue and a separate Lee County Jail at 2115 Dr. Martin Luther King Jr. Boulevard downtown. Check the current arrest record and confirm instructions before traveling.'
          },
          {
            question: 'Does FMPD arrest for things that happened on Fort Myers Beach?',
            answer: 'Law-enforcement jurisdiction varies across the Fort Myers area. Confirm the arresting agency and assigned facility in the official Lee County record rather than assuming the arrest was handled by Fort Myers Police.'
          }
        ]
      },
      {
        name: 'Cape Coral',
        slug: 'cape-coral',
        policeDepartment: {
          name: 'Cape Coral Police Department',
          address: '1100 Cultural Park Blvd, Cape Coral, FL 33990',
          phone: '(239) 574-3223'
        },
        travelTimeToJail: 'Varies by arrest location, traffic, and agency procedure',
        description: 'Cape Coral Police handles city law-enforcement matters, while the Lee County Sheriff operates the county jail system. Use the official LCSO arrest search to confirm custody, assigned facility, charges, and bond entries.',
        specificFaqs: [
          {
            question: 'Where do people arrested in Cape Coral go?',
            answer: 'LCSO identifies the downtown Fort Myers jail as Lee County\'s central intake and booking facility and separately operates the Core / CPU site on Ortiz Avenue. Confirm the currently assigned facility in the official arrest record before traveling.'
          },
          {
            question: 'How long does a Cape Coral booking or release take?',
            answer: 'Transport, booking, court review, holds, paperwork, and facility workload can affect timing. LCSO controls processing and final release, so a private service cannot promise a completion time.'
          }
        ]
      },
      {
        name: 'Bonita Springs',
        slug: 'bonita-springs',
        policeDepartment: {
          name: 'Lee County Sheriff - 4th Precinct (Bonita Springs)',
          address: '8350 Hospital Drive, Suite 114, Bonita Springs, FL 34135',
          phone: '(239) 477-1840'
        },
        travelTimeToJail: 'Varies by arrest location, traffic, and agency procedure',
        description: 'LCSO serves Bonita Springs through its 4th Precinct. Use the official arrest search to confirm custody, booking details, assigned facility, charges, and bond entries.',
        specificFaqs: [
          {
            question: 'Where do arrests in Bonita Springs go?',
            answer: 'LCSO identifies the downtown jail as Lee County\'s central intake and booking facility and separately operates the Core / CPU site on Ortiz Avenue. Confirm the assigned facility in the current arrest record before traveling.'
          },
          {
            question: 'How long does booking or release take after a Bonita Springs arrest?',
            answer: 'Transport, booking, court review, holds, paperwork, and facility workload can all affect timing. LCSO controls processing and final release, so a private service cannot promise a completion time.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Lee County Justice Center',
        address: '1700 Monroe St, Fort Myers, FL 33901',
        bondHearingTimes: ['Confirm the current hearing schedule through the Lee County Clerk']
      },
      releaseProcess: {
        step1: 'Intake occurs at the Core Facility on Ortiz Ave.',
        step2: 'Court review, bond eligibility, and release conditions depend on the official case record.',
        step3: 'LCSO controls facility assignment and release processing; confirm current pickup instructions directly.'
      },
      specificFaqs: [
        {
          question: 'Is the jail downtown Fort Myers?',
          answer: 'Lee County operates the Core / CPU facility at 2501 Ortiz Avenue and a separate downtown jail at 2115 Dr. Martin Luther King Jr. Boulevard. Verify the assigned facility and release instructions before traveling.'
        },
        {
          question: 'How do I visit an inmate in Lee County?',
          answer: 'LCSO publishes current visitation eligibility, scheduling, and location requirements. Review the official visiting-inmates page before traveling because procedures can change.'
        },
        {
          question: 'What is the bail bond premium in Lee County?',
          answer: 'Costs and obligations depend on the bond and written agreement. Verify the agent’s Florida license and review the premium, collateral, payment, and indemnitor terms before signing.'
        },
        {
          question: 'How long until they are released from Core Facility?',
          answer: 'LCSO controls release processing. Timing varies with booking, court conditions, holds, staffing, and other case-specific factors, so a private service cannot guarantee a release time.'
        }
      ]
    }
  },
  {
    slug: 'polk',
    name: 'Polk County',
    population: 852878,
    jail: {
      name: 'Polk County Central Jail (South County)',
      address: '2390 Bob Phillips Road, Bartow, FL 33830',
      phone: '(863) 534-6331',
      visitingHours: 'Video Visitation Only (7 days/week)',
      inmateSearchUrl: 'https://www.polksheriff.org',
    },
    geo: {
      lat: 27.8910,
      lng: -81.8474,
    },
    cities: [
      {
        name: 'Lakeland',
        slug: 'lakeland',
        policeDepartment: {
          name: 'Lakeland Police Department',
          address: '219 N Massachusetts Ave, Lakeland, FL 33801',
          phone: '(863) 834-6900'
        },
        travelTimeToJail: '25-30 minutes',
        description: 'The largest city in Polk County. LPD processes arrests at their HQ before transfer to the South County Jail in Bartow.',
        specificFaqs: [
          {
            question: 'Does Lakeland have its own jail?',
            answer: 'No. Lakeland PD holds suspects at their headquarters briefly, then transports to the Polk County processing facility. All booking and release happens at county-operated facilities, not the Lakeland PD building.'
          },
          {
            question: 'Is the Lakeland to Bartow transport fast?',
            answer: 'The transport runs south on US-98 to Bartow — roughly 25-30 minutes. Sheriff Grady Judd runs a strict no-nonsense booking process at the other end. We prepare the bond paperwork during the transport window so it is ready immediately upon arrival.'
          }
        ]
      },
      {
        name: 'Winter Haven',
        slug: 'winter-haven',
        policeDepartment: {
          name: 'Winter Haven Police Department',
          address: '125 N Lake Silver Dr NW, Winter Haven, FL 33881',
          phone: '(863) 291-5858'
        },
        travelTimeToJail: '20-25 minutes',
        description: 'Known for the Chain of Lakes. WHPD transports regular arrests to the main county facility in Bartow.',
        specificFaqs: [
          {
            question: 'Does Winter Haven have its own processing center?',
            answer: 'Polk County actually centralizes booking at the Sheriff\'s Processing Center on De Castro Road in Winter Haven — not in Bartow. This means Winter Haven arrests have a shorter initial transport. We know the exact location to file paperwork, which saves critical time.'
          },
          {
            question: 'What is the LEGOLAND area jurisdiction in Winter Haven?',
            answer: 'LEGOLAND Florida is inside the Winter Haven city limits and policed by WHPD. Arrests on the property are relatively rare but do occur, especially at the water park. All WHPD arrests process through the county system on De Castro Road.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Polk County Courthouse',
        address: '255 N Broadway Ave, Bartow, FL 33830',
        bondHearingTimes: ['Daily: 8:30 AM (South County Jail Courtroom)', 'Weekends: 8:30 AM']
      },
      releaseProcess: {
        step1: 'Processing at Central Booking (South County Jail) in Bartow/Frostproof.',
        step2: 'First Appearance Court held at the jail courtroom or via video link.',
        step3: 'Release takes place at the "Release Lobby" on Bob Phillips Road. Process is strict.'
      },
      specificFaqs: [
        {
          question: 'Where do I go to post bond?',
          answer: 'All arrests are processed at the "Sheriff\'s Processing Center" (Book-In) at 7101 De Castro Road in Winter Haven. Do not go to the jails in Bartow or Frostproof for posting bond.'
        },
        {
          question: 'What is the difference between Central and South County Jails?',
          answer: 'Central County Jail is in Bartow, and South County Jail is in Frostproof. These are housing facilities. All releases happen at the Processing Center in Winter Haven.'
        },
        {
          question: 'How strict is the release process in Polk County?',
          answer: 'Sheriff Grady Judd runs a very strict facility. There are no "early releases" or shortcuts. Processing takes 6-12 hours, and all paperwork must be perfect.'
        },
        {
          question: 'What app do I use for visitation?',
          answer: 'Polk County uses "Securus Technologies" for video visitation. You must register online to schedule a remote visit. Physical visitation is limited.'
        },
        {
          question: 'Do you cover Lakeland and Winter Haven?',
          answer: 'Yes. Whether arrested by Lakeland PD or Winter Haven PD, they are all transported to the central processing center. We are located nearby to speed up the bond posting.'
        }
      ]
    }
  },
  {
    slug: 'pasco',
    name: 'Pasco County',
    population: 659114,
    jail: {
      name: 'Land O\' Lakes Detention Center',
      address: '20101 Central Blvd, Land O\' Lakes, FL 34637',
      phone: '(813) 996-6982',
      visitingHours: 'Daily 8:30 AM - 10:30 PM (Video)',
      inmateSearchUrl: 'https://jailinfo.pascocorrections.net/jmc/',
    },
    geo: {
      lat: 28.1917,
      lng: -82.4657,
    },
    cities: [
      {
        name: 'New Port Richey',
        slug: 'new-port-richey',
        policeDepartment: {
          name: 'New Port Richey Police Department',
          address: '6739 Adams St, New Port Richey, FL 34652',
          phone: '(727) 841-4550'
        },
        travelTimeToJail: '25-35 minutes',
        description: 'The historic downtown area of West Pasco. Arrests here are transported east to the central jail in Land O\' Lakes.',
        specificFaqs: [
          {
            question: 'Why does New Port Richey take 25-35 minutes to get to the jail?',
            answer: 'The Land O\' Lakes Detention Center is on the east side of the county (20101 Central Blvd). From New Port Richey on the coast, the transport runs along SR-54 East — a 25-35 minute drive with no highway shortcut. Post bond early to avoid a shift-change delay.'
          },
          {
            question: 'Is downtown New Port Richey a high-enforcement area?',
            answer: 'Yes. The Grand Blvd entertainment strip runs targeted DUI enforcement on weekends. New Port Richey PD (6739 Adams St) is the arresting agency for the downtown corridor. Arrests here are some of the most common nightlife-related calls in West Pasco.'
          }
        ]
      },
      {
        name: 'Wesley Chapel',
        slug: 'wesley-chapel',
        policeDepartment: {
          name: 'Pasco Sheriff District 2 Office',
          address: '29245 SR 54, Wesley Chapel, FL 33543',
          phone: '(813) 996-6982'
        },
        travelTimeToJail: '15-20 minutes',
        description: 'A rapidly growing community. Patrolled by PCSO, with quick access to the Land O\' Lakes facility.',
        specificFaqs: [
          {
            question: 'Is Wesley Chapel a city or unincorporated area?',
            answer: 'Wesley Chapel is an unincorporated community — it has no city police. All law enforcement is handled by the Pasco County Sheriff District 2 Office at 29245 SR-54. This means all arrests go directly through the PCSO system to the Land O\' Lakes Detention Center.'
          },
          {
            question: 'Does the Wiregrass / Cypress Creek Town Center area have elevated DUI arrests?',
            answer: 'Yes. The rapid retail and restaurant growth along SR-54 has created a high-traffic nightlife corridor that PCSO monitors closely. DUI stops on SR-54 are among the most common enforcement actions in East Pasco. The jail is only 15-20 minutes away.'
          }
        ]
      },
      {
        name: 'Dade City',
        slug: 'dade-city',
        policeDepartment: {
          name: 'Dade City Police Department',
          address: '38030 Meridian Ave, Dade City, FL 33525',
          phone: '(352) 521-1495'
        },
        travelTimeToJail: 'Varies by arrest location, booking status, traffic, and agency procedure',
        description: 'Dade City has a municipal police department and the East Pasco courthouse, while Pasco County operates its detention facility in Land O\' Lakes. Use the official custody search to confirm current booking and bond information.',
        specificFaqs: [
          {
            question: 'If court is in Dade City, why is the jail in Land O\' Lakes?',
            answer: 'The Robert D. Sumner Judicial Center in Dade City is a courthouse, not a detention facility. Pasco County operates the detention facility in Land O\' Lakes. Confirm court and custody information separately through the official sources.'
          },
          {
            question: 'How long does a Dade City booking or release take?',
            answer: 'Transport, booking, court review, holds, paperwork, and facility workload can affect timing. Pasco Corrections controls processing and final release, so a private service cannot promise a completion time.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'West Pasco Judicial Center',
        address: '7530 Little Rd, New Port Richey, FL 34654',
        bondHearingTimes: ['Daily: 1:30 PM (Advisory Court)', 'Weekends: 8:30 AM']
      },
      releaseProcess: {
        step1: 'All arrests in Pasco are transported to the Land O\' Lakes Detention Center.',
        step2: 'Advisory Court is held at the detention center courtroom or via video link.',
        step3: 'Release takes place at the Central Detention Center lobby. Times vary by shift.'
      },
      specificFaqs: [
        {
          question: 'Is there a jail in New Port Richey?',
          answer: 'No. While there is a courthouse in New Port Richey, the actual jail (Land O\' Lakes Detention Center) is centrally located in Land O\' Lakes. All releases happen there.'
        },
        {
          question: 'Can I post bond online for Pasco County?',
          answer: 'Yes, Pasco utilizes "TouchPay" for remote funding, but the fastest way to navigate the release paperwork and avoid full cash payment is to use our surety bond service.'
        },
        {
          question: 'What is the 10% bail bond fee?',
          answer: 'If bail is set at $5,000, you pay us $500 (10%). This is a non-refundable fee for our service of guaranteeing the full bond amount to the court.'
        },
        {
          question: 'How long is the release process at Land O\' Lakes?',
          answer: 'Release times vary by shift, but typically run 4-8 hours. We handle the paperwork electronically so the jail can start processing the discharge before you even arrive.'
        }
      ]
    },
    relatedEntities: ["Chris Nocco", "Robert D. Sumner Judicial Center", "West Pasco Judicial Center", "Pasco Sheriff's Office", "Sixth Judicial Circuit"]
  },
  {
    slug: 'indian-river',
    name: 'Indian River County',
    population: 159788,
    jail: {
      name: 'Indian River County Jail',
      address: '4055 41st Ave, Vero Beach, FL 32960',
      phone: '(772) 978-6334',
      visitingHours: 'Daily 8:30 AM - 11:30 AM & 1:00 PM - 4:00 PM (Video Only)',
      inmateSearchUrl: 'https://www.ircsheriff.org/inmate-search',
    },
    geo: {
      lat: 27.6690,
      lng: -80.4200,
    },
    cities: [
      {
        name: 'Vero Beach',
        slug: 'vero-beach',
        policeDepartment: {
          name: 'Vero Beach Police Department',
          address: '1055 20th St, Vero Beach, FL 32960',
          phone: '(772) 978-4600'
        },
        travelTimeToJail: '5-10 minutes',
        description: 'The county seat of Indian River County. Arrests by VBPD are held locally at the city precinct before immediate transfer to the Indian River County Jail just minutes away on 41st Ave.',
        specificFaqs: [
          {
            question: 'How long does booking take at the Indian River County Jail?',
            answer: 'Booking at Indian River County Jail generally takes 3-6 hours. You can call us while your loved one is still being processed to start the paperwork and speed up their release.'
          },
          {
            question: 'What is the release time after posting bond in Vero Beach?',
            answer: 'Once the bail bond is posted, release typically takes 2-4 hours, depending on jail staffing and volume. We monitor the process and notify you of the release time.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Indian River County Courthouse',
        address: '2000 16th Ave, Vero Beach, FL 32960',
        bondHearingTimes: ['Daily: 8:30 AM (First Appearance Hearings)', 'Weekends/Holidays: 8:30 AM']
      },
      releaseProcess: {
        step1: 'Intake and identification are completed at the Indian River County Jail on 41st Ave.',
        step2: 'The bail bond is posted directly at the jail or electronically via our surety service.',
        step3: 'The inmate is discharged. Pickup takes place at the main jail release lobby.'
      },
      specificFaqs: [
        {
          question: 'Where do I post bail for someone in Indian River County?',
          answer: 'All bail bonds must be posted at the Indian River County Jail located at 4055 41st Ave in Vero Beach. We can handle this on your behalf so you do not need to visit the facility.'
        },
        {
          question: 'How does the 10% premium work in Indian River County?',
          answer: 'By Florida law, the surety bond premium is 10% of the total bail amount. We offer flexible payment options and payment plans for qualified co-signers.'
        }
      ]
    }
  }
,

  {
    slug: 'marion',
    name: 'Marion County',
    population: 396437,
    jail: {
      name: 'Marion County Jail',
      address: '700 NW 30th Ave, Ocala, FL 34475',
      phone: '(352) 351-8077',
      visitingHours: 'Video Visitation Only',
      inmateSearchUrl: 'https://www.marionso.com/inmate-search',
    },
    geo: {
      lat: 29.2081,
      lng: -82.1645,
    },
    cities: [
      {
        name: 'Ocala',
        slug: 'ocala',
        policeDepartment: {
          name: 'Ocala Police Department',
          address: '402 S Pine Ave, Ocala, FL 34471',
          phone: '(352) 369-7000'
        },
        travelTimeToJail: 'Varies by arrest location, booking status, traffic, and agency procedure',
        description: 'Ocala Police handles city law-enforcement matters, while the Marion County Sheriff operates the county jail. Use the official inmate search to confirm current custody, booking details, charges, and bond entries.',
        specificFaqs: [
          {
            question: 'Is the Ocala Police Department holding facility the same as the jail?',
            answer: 'No. The Ocala Police Department is a city law-enforcement office, while the Marion County Sheriff operates the county jail. MCSO states that its booking unit receives people from Ocala Police and other Marion County agencies.'
          },
          {
            question: 'Are arrests from the Ocala National Forest handled by OPD?',
            answer: 'Agency jurisdiction depends on the location and circumstances. Confirm the arresting agency and current custody through the official Marion County inmate record instead of assuming Ocala Police handled the arrest.'
          },
          {
            question: 'How long does an Ocala booking or release take?',
            answer: 'MCSO says booking and identification must be completed before a bond can be posted and that release can take several hours after the bond is received. Additional holds, court action, and workload can affect timing.'
          }
        ]
      },
      {
        name: 'Belleview',
        slug: 'belleview',
        policeDepartment: {
          name: 'Belleview Police Department',
          address: '5350 SE 110th St, Belleview, FL 34420',
          phone: '(352) 245-7044'
        },
        travelTimeToJail: '25-30 minutes',
        description: 'A municipality south of Ocala. BPD handles arrests within city limits before transport north on US-441 to the county jail.',
        specificFaqs: [
          {
            question: 'How long does the transfer from Belleview to Ocala take?',
            answer: 'Transport from Belleview to the Marion County Jail takes about 25-30 minutes depending on US-441 traffic. We recommend starting the bond paperwork while they are in transit to speed up the ultimate release.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Marion County Judicial Center',
        address: '110 NW 1st Ave, Ocala, FL 34475',
        bondHearingTimes: ['Daily: 9:00 AM (First Appearance)']
      },
      releaseProcess: {
        step1: 'Arrestee is booked at the Marion County Jail on NW 30th Ave.',
        step2: 'First Appearance court is held the following morning at 9:00 AM.',
        step3: 'Surety bond is posted. Release typically occurs within 4-8 hours after posting.'
      },
      specificFaqs: [
        {
          question: 'Where do I pick up an inmate in Ocala?',
          answer: 'All releases occur at the Marion County Jail at 700 NW 30th Ave, Ocala. There is a designated release lobby in the main building.'
        },
        {
          question: 'How do I pay a cash bond in Marion County?',
          answer: 'The bond desk at the Marion County Jail is open 24/7. They accept cash (exact change only), cashier\'s checks, or money orders made payable to the Marion County Sheriff\'s Office.'
        },
        {
          question: 'Does the Marion County Jail use video visitation?',
          answer: 'Yes, physical contact visits are not permitted. All visitation is conducted via video kiosks. You must schedule the visit 24 hours in advance through the approved vendor system.'
        }
      ]
    },
    relatedEntities: ["Billy Woods", "Marion County Judicial Center", "Ocala Police Department", "Fifth Judicial Circuit"]
  }

,

  {
    slug: 'brevard',
    name: 'Brevard County',
    population: 630692,
    jail: {
      name: 'Brevard County Jail Complex',
      address: '860 Camp Rd, Cocoa, FL 32927',
      phone: '(321) 690-1500',
      visitingHours: 'Video Visitation Only',
      inmateSearchUrl: 'https://www.brevardsheriff.com/bookings/',
    },
    geo: {
      lat: 28.3842,
      lng: -80.7712,
    },
    cities: [
      {
        name: 'Cocoa',
        slug: 'cocoa',
        policeDepartment: {
          name: 'Cocoa Police Department',
          address: '1226 W King St, Cocoa, FL 32922',
          phone: '(321) 639-7620'
        },
        travelTimeToJail: '10-15 minutes',
        description: 'Cocoa is a major hub in Brevard County. Because the County Jail Complex is physically located in Cocoa on Camp Road, booking times for local arrests are extremely fast.',
        specificFaqs: [
          {
            question: 'Is the Cocoa Police Station the same as the Brevard County Jail?',
            answer: 'No. The Cocoa PD handles initial arrest processing, but all arrestees are quickly transferred to the Brevard County Jail Complex at 860 Camp Road, which is run by the Sheriff.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Moore Justice Center',
        address: '2825 Judge Fran Jamieson Way, Viera, FL 32940',
        bondHearingTimes: ['Daily: 1:15 PM (Initial Appearance)']
      },
      releaseProcess: {
        step1: 'Intake at the Brevard County Jail Complex on Camp Road.',
        step2: 'First Appearance Court is held in Viera or via video feed at 1:15 PM.',
        step3: 'Surety bond posted. Release takes 4-8 hours.'
      },
      specificFaqs: [
        {
          question: 'Where is the Brevard County Jail?',
          answer: 'The jail is located at 860 Camp Rd in Cocoa. It is commonly referred to as the "Camp Road Jail".'
        }
      ]
    },
    relatedEntities: ["Wayne Ivey", "Moore Justice Center", "Brevard County Sheriff"]
  },
  {
    slug: 'manatee',
    name: 'Manatee County',
    population: 429125,
    jail: {
      name: 'Manatee County Central Jail',
      address: '14470 Harlee Rd, Palmetto, FL 34221',
      phone: '(941) 747-3011',
      visitingHours: 'Video Visitation',
      inmateSearchUrl: 'https://www.manateesheriff.com/InmateSearch',
    },
    geo: {
      lat: 27.6186,
      lng: -82.5534,
    },
    cities: [
      {
        name: 'Bradenton',
        slug: 'bradenton',
        policeDepartment: {
          name: 'Bradenton Police Department',
          address: '100 10th St W, Bradenton, FL 34205',
          phone: '(941) 932-9300'
        },
        travelTimeToJail: '15-20 minutes',
        description: 'The largest city in Manatee County. Arrests by BPD are transported north across the Manatee River to the Central Jail in Palmetto.',
        specificFaqs: [
          {
            question: 'Where are Bradenton arrests taken?',
            answer: 'Regardless of whether the arrest was by Bradenton PD or the Manatee Sheriff, all arrestees are taken to the Manatee County Central Jail located in Palmetto.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Manatee County Judicial Center',
        address: '1051 Manatee Ave W, Bradenton, FL 34205',
        bondHearingTimes: ['Daily: 1:00 PM']
      },
      releaseProcess: {
        step1: 'Arrestee is booked at the Central Jail in Palmetto (Port Manatee area).',
        step2: 'First Appearance held daily at 1:00 PM via video from the jail.',
        step3: 'Release processed at the Harlee Rd facility after bond is posted.'
      },
      specificFaqs: [
        {
          question: 'Is the jail in Bradenton?',
          answer: 'No, the Manatee County Judicial Center (courthouse) is in Bradenton, but the actual jail is located at 14470 Harlee Rd in Palmetto (often called the Port Manatee jail).'
        }
      ]
    },
    relatedEntities: ["Rick Wells", "Manatee County Judicial Center"]
  },
  {
    slug: 'columbia',
    name: 'Columbia County',
    population: 71686,
    jail: {
      name: 'Columbia County Detention Facility',
      address: '389 NW Quinten St, Lake City, FL 32055',
      phone: '(386) 755-7000',
      visitingHours: 'Video Visitation',
      inmateSearchUrl: 'https://columbiasheriff.org/',
    },
    geo: {
      lat: 30.1897,
      lng: -82.6393,
    },
    cities: [
      {
        name: 'Lake City',
        slug: 'lake-city',
        policeDepartment: {
          name: 'Lake City Police Department',
          address: '225 NW Main Blvd, Lake City, FL 32055',
          phone: '(386) 752-4343'
        },
        travelTimeToJail: '5-10 minutes',
        description: 'The county seat and primary hub of Columbia County. The jail is located directly within Lake City, making booking and release times exceptionally fast compared to larger counties.',
        specificFaqs: [
          {
            question: 'Are arrests on I-75 taken to Lake City?',
            answer: 'Yes. The I-75 and I-10 intersection in Columbia County is a major enforcement zone for Florida Highway Patrol. All arrests here are taken to the Columbia County Detention Facility on Quinten St.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Columbia County Courthouse',
        address: '173 NE Hernando Ave, Lake City, FL 32055',
        bondHearingTimes: ['Daily: 8:30 AM']
      },
      releaseProcess: {
        step1: 'Booked at the Columbia County Detention Facility on Quinten St.',
        step2: 'First appearance at the courthouse in downtown Lake City.',
        step3: 'Facility release processing begins after the surety bond is accepted, subject to holds and facility procedures.'
      },
      specificFaqs: [
        {
          question: 'How fast is release in Lake City?',
          answer: 'Columbia County is highly efficient. Releases often take less than 4 hours after the bond is posted due to the smaller population size.'
        }
      ]
    },
    relatedEntities: ["Mark Hunter", "Columbia County Courthouse"]
  },
  {
    slug: 'nassau',
    name: 'Nassau County',
    population: 97899,
    jail: {
      name: 'Nassau County Jail and Detention Center',
      address: '76212 Nicholas Cutinha Rd, Yulee, FL 32097',
      phone: '(904) 548-4002',
      visitingHours: 'Video Visitation',
      inmateSearchUrl: 'https://dssinmate.nassauso.com/NewWorld.InmateInquiry/nassau?InCustody=True',
    },
    geo: {
      lat: 30.6318,
      lng: -81.7483,
    },
    cities: [
      {
        name: 'Yulee',
        slug: 'yulee',
        policeDepartment: {
          name: 'Nassau County Sheriff (Yulee District)',
          address: '77151 Citizens Cir, Yulee, FL 32097',
          phone: '(904) 225-0331'
        },
        travelTimeToJail: 'Varies by arrest location, booking status, traffic, and agency procedure',
        description: 'The Nassau County Sheriff\'s Office, Jail and Detention Center, and Robert M. Foster Justice Center are separate facilities in Yulee. Use the official in-custody search to verify current booking and bond information.',
        specificFaqs: [
          {
            question: 'Are Amelia Island / Fernandina Beach arrests taken to Yulee?',
            answer: 'NCSO states that people arrested in Nassau County are brought to the Nassau County Jail for processing. Confirm current custody through the official search because a released person will not remain in the in-custody results.'
          },
          {
            question: 'How long does booking or release take at the Yulee jail?',
            answer: 'NCSO says intake processing and identification clearance must be completed before release or visitation is considered, and release times vary. A private service cannot promise a completion time.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Robert M. Foster Justice Center',
        address: '76347 Veterans Way, Yulee, FL 32097',
        bondHearingTimes: ['Daily: 8:30 AM']
      },
      releaseProcess: {
        step1: 'Booking at the Nassau County Jail on Nicholas Cutinha Rd.',
        step2: 'First appearance is held at the adjacent Justice Center in Yulee.',
        step3: 'Release takes place at the main jail entrance.'
      },
      specificFaqs: [
        {
          question: 'Is the courthouse in Fernandina Beach?',
          answer: 'The historic courthouse is in Fernandina, but the Robert M. Foster Justice Center (where criminal proceedings and bond hearings take place) is located in Yulee right next to the jail.'
        }
      ]
    },
    relatedEntities: ["Bill Leeper", "Robert M. Foster Justice Center"]
  }

];

// Phase 10 safety boundary: legacy editorial fields contained unsourced timing,
// availability, and provider claims. Public templates consume verified directory
// facts only; neutral city descriptions remain unique for validation and context.
for (const county of counties) {
  delete county.richContent;
  for (const city of county.cities || []) {
    city.description = `Directory entry for ${city.name}, ${county.name}, with local agency contact details and the county's official inmate-search resource.`;
    delete city.specificFaqs;
  }
}

export async function getCounty(slug: string): Promise<County | undefined> {
  return counties.find((c) => c.slug === slug);
}

export async function getAllCounties(): Promise<County[]> {
  return counties;
}

export async function getCityBySlug(citySlug: string): Promise<{ city: City; county: County } | undefined> {
  for (const county of counties) {
    const city = county.cities?.find(c => c.slug === citySlug);
    if (city) {
      return { city, county };
    }
  }
  return undefined;
}

export async function getAllCities(): Promise<{ city: City; county: County }[]> {
  const allCities: { city: City; county: County }[] = [];
  for (const county of counties) {
    if (county.cities) {
      for (const city of county.cities) {
        allCities.push({ city, county });
      }
    }
  }
  return allCities;
}
