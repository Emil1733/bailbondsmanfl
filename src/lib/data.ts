

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
      phone: '(786) 263-5600',
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
        description: 'The largest municipality in the county. Arrests here are processed at the MPD substation before transport to TGK.'
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
        description: 'Arrests in Hialeah are processed locally. If not bonded out quickly, inmates are transported to TGK in a daily van run.'
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
        description: 'A high-volume arrest zone for tourists and nightlife. Inmates are held at the Washington Ave station briefly before transport to TGK via the causeway.'
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
      inmateSearchUrl: 'https://www.broward.org/arrestsearch',
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
        description: 'The county seat and largest city. FLPD transports arrestees to the BSO Main Jail Intake rapidly due to close proximity.'
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
        description: 'A major coastal city. Arrests here are processed at HPD headquarters before transfer to the BSO Main Jail in Fort Lauderdale.'
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
        description: 'Patrolled by BSO. Arrestees are held briefly at the District 11 substation before being transported south to the Main Jail Intake.'
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
      phone: '(561) 688-4400',
      visitingHours: 'Daily 9:00 AM - 10:30 PM',
      inmateSearchUrl: 'https://www.pbso.org/arrestss/',
    },
    geo: {
      lat: 26.6850,
      lng: -80.0900,
    },
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
      address: '1201 Orient Road, Tampa, FL 33619',
      phone: '(813) 247-8300',
      visitingHours: 'Daily 11:00 AM - 9:00 PM',
      inmateSearchUrl: 'https://www.teamhcso.com',
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
        travelTimeToJail: '15-20 minutes',
        description: 'The major urban center of the Gulf Coast. TPD processes arrests at the District Offices before transport to Orient Road Jail.'
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
        description: 'A massive unincorporated community. Deputies from District II process arrests locally before the short transport to the Orient Road booking center.'
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
        description: 'A distinct municipality East of Tampa. PCPD handles initial processing before transfer to the Orient Road Jail hub.'
      }
    ],
    richContent: {
      courtInfo: {
        name: 'George E. Edgecomb Courthouse',
        address: '800 E Twiggs St, Tampa, FL 33602',
        bondHearingTimes: ['Daily: 9:00 AM (PP Court - Preliminary Presentation)', 'Weekends/Holidays: 9:00 AM']
      },
      releaseProcess: {
        step1: 'All booking occurs at Orient Road Jail (ORJ), regardless of arrest location.',
        step2: 'PP Court (First Appearance) is held via video link within 24 hours.',
        step3: 'Release takes place at Orient Road Jail. Release time is typically 4-8 hours after bond posting.'
      },
      specificFaqs: [
        {
          question: 'What is the cost of a bail bond in Tampa?',
          answer: 'The premium is fixed at 10% of the bond amount ($500 for a $5,000 bond). For larger bonds, we can often arrange flexible payment plans with a down payment.'
        },
        {
          question: 'What is "PP Court"?',
          answer: 'PP Court stands for "Preliminary Presentation." It is the First Appearance court held within 24 hours of arrest where a judge reviews the probable cause and sets the bond amount.'
        },
        {
          question: 'Are inmates released from Falkenburg Road Jail?',
          answer: 'No. While inmates are housed at Falkenburg (FRJ), Orient Road Jail (ORJ) is the central booking and release facility. You must pick them up at ORJ (1201 Orient Road).'
        },
        {
          question: 'How long does release take at Orient Road Jail?',
          answer: 'Hillsborough County processing times average 6-10 hours after the bond is posted. We recommend waiting by the phone rather than at the jail, as we will call you the minute they are cleared.'
        },
        {
          question: 'What is the difference between Orient Road Jail and Falkenburg Road Jail?',
          answer: 'Orient Road Jail (ORJ) is the central booking and release facility. Falkenburg Road Jail (FRJ) is a separate housing facility for sentenced inmates and some pre-trial detainees. All releases happen at ORJ, even if the inmate is housed at FRJ.'
        },
        {
          question: 'Can I get a payment plan for a large bond in Tampa?',
          answer: 'Yes. For bonds over $10,000, we offer flexible payment plans with as little as 10-20% down. We work with families to create affordable monthly payment schedules that fit your budget.'
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
      address: '3723 Vision Boulevard, Orlando, FL 32802',
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
          phone: '(407) 246-2414'
        },
        travelTimeToJail: '10-20 minutes',
        description: 'The tourism capital. OPD processes arrests at their HQ or District Stations before transport to the BRC on John Young Pkwy.'
      },
      {
        name: 'Winter Park',
        slug: 'winter-park',
        policeDepartment: {
          name: 'Winter Park Police Department',
          address: '500 N Virginia Ave, Winter Park, FL 32789',
          phone: '(407) 644-1313'
        },
        travelTimeToJail: '25-35 minutes',
        description: 'An affluent community north of Orlando. WPPD processes arrests locally before the transport down I-4 to the County BRC.'
      },
      {
        name: 'Apopka',
        slug: 'apopka',
        policeDepartment: {
          name: 'Apopka Police Department',
          address: '112 E 6th St, Apopka, FL 32703',
          phone: '(407) 703-1700'
        },
        travelTimeToJail: '30-40 minutes',
        description: 'A major city in northwest Orange County. Arrests here involve a significant transport time down US-441 to the county booking center.'
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Orange County Courthouse',
        address: '425 N Orange Ave, Orlando, FL 32801',
        bondHearingTimes: ['Daily: 8:30 AM (Initial Appearance Court)', 'Weekends/Holidays: 8:30 AM']
      },
      releaseProcess: {
        step1: 'All arrestees are processed at the BRC on John Young Parkway.',
        step2: 'Initial Appearance (Bond Hearing) occurs daily at the BRC courtroom or via video.',
        step3: 'Release occurs at the BRC Release Lobby (rear of building). Expect 6-10 hours.'
      },
      specificFaqs: [
        {
          question: 'Is the jail on 33rd Street or Vision Blvd?',
          answer: 'The current Operating Facility is at 3723 Vision Blvd, Orlando, FL 32802. Many people mistakenly go to the old "33rd Street" location which is now just administrative offices. Go to Vision Blvd for all bookings and releases.'
        },
        {
          question: 'Where is the release lobby located?',
          answer: 'The Release Lobby is in the "Booking & Release Center" (BRC) at 3723 Vision Blvd. There is a public parking lot directly in front of the BRC entrance. Do not go to the 33rd Street complex.'
        },
        {
          question: 'Can I watch First Appearance Court online?',
          answer: 'Online streaming is intermittent. The most reliable way to watch "Initial Appearance" is to go to the BRC Public Lobby at Vision Blvd, where they have public viewing screens for the sessions (usually 9AM and 1PM).'
        },
        {
          question: 'How much does a bail bond cost in Orlando?',
          answer: 'The premium is 10% of the bond amount by Florida law. We are located just minutes from the Vision Blvd facility to speed up the release process.'
        },
        {
          question: 'How long does the release process take at the BRC?',
          answer: 'The Orange County BRC is efficient but busy. Release typically takes 6-8 hours after we post the bond. We monitor the shift changes to give you the most accurate pickup time.'
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
        description: 'A separate jurisdiction from JSO. JBPD arrests are transported inland to the John E. Goode Pre-Trial Detention Facility downtown.'
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
      inmateSearchUrl: 'https://www.pcsoweb.com/whos-in-jail',
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
        travelTimeToJail: '20-25 minutes',
        description: 'The largest city in Pinellas. SPPD processes arrests at their downtown HQ before the transport north to the County Jail on 49th Street.'
      },
      {
        name: 'Clearwater',
        slug: 'clearwater',
        policeDepartment: {
          name: 'Clearwater Police Department',
          address: '645 Pierce St, Clearwater, FL 33756',
          phone: '(727) 562-4242'
        },
        travelTimeToJail: '10-15 minutes',
        description: 'The county seat. Clearwater PD is located just minutes from the Main Jail complex, resulting in rapid booking times.'
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Pinellas County Justice Center (CJC)',
        address: '14250 49th St N, Clearwater, FL 33762',
        bondHearingTimes: ['Daily: 8:30 AM (Advisory Court)', 'Weekends/Holidays: 8:30 AM']
      },
      releaseProcess: {
        step1: 'All booking occurs at the 49th Street complex in Clearwater.',
        step2: 'Advisory Court (Bond Hearing) is held in the Justice Center on the same campus.',
        step3: 'Release process is streamlined but expect 6-10 hours due to volume.'
      },
      specificFaqs: [
        {
          question: 'Where is the Video Visitation Center?',
          answer: 'Pinellas County has a dedicated Video Visitation Center at 14500 49th Street North (separate from the main jail). You must register and schedule 24 hours in advance.'
        },
        {
          question: 'Can I pay a cash bond at the jail?',
          answer: 'Yes, the Bond Desk is located in the Booking Lobby at 14400 49th St N. They accept cash, cashier\'s checks, and major credit cards.'
        },
        {
          question: 'What is Advisory Court?',
          answer: 'Advisory Court is the daily bond hearing held at the Justice Center (CJC) on the same complex. If you bond out before Advisory Court, you don\'t need to attend this specific hearing.'
        },
        {
          question: 'How fast is release in Pinellas County?',
          answer: 'The Pinellas County Sheriff\'s Office is relatively efficient. Releases typically occur 4-8 hours after we turn in the bond paperwork at the 49th Street complex.'
        },
        {
          question: 'Do you cover St. Petersburg and Clearwater arrests?',
          answer: 'Absolutely. We handle arrests from all Pinellas County municipalities including St. Petersburg, Clearwater, Largo, Pinellas Park, and Tarpon Springs. All arrestees are booked at the same 49th Street facility in Clearwater.'
        },
        {
          question: 'What is the bail bond premium in Pinellas County?',
          answer: 'The state-mandated premium is 10% of the total bond amount. For example, a $2,500 bond requires a $250 premium. We accept all major credit cards and offer payment plans for qualified clients.'
        }
      ]
    }
  },
  {
    slug: 'lee',
    name: 'Lee County',
    population: 860959,
    jail: {
      name: 'Lee County Jail (Core Facility)',
      address: '2501 Ortiz Avenue, Fort Myers, FL 33905',
      phone: '(239) 477-1705',
      visitingHours: 'Video Visitation Daily',
      inmateSearchUrl: 'https://www.sheriffleefl.org',
    },
    geo: {
      lat: 26.6500,
      lng: -81.8000,
    },
    richContent: {
      courtInfo: {
        name: 'Lee County Justice Center',
        address: '1700 Monroe St, Fort Myers, FL 33901',
        bondHearingTimes: ['Daily: 9:00 AM (First Appearance Court)', 'Weekends/Holidays: 9:00 AM']
      },
      releaseProcess: {
        step1: 'Intake occurs at the Core Facility on Ortiz Ave.',
        step2: 'First Appearance Court is generally held via video link from the jail.',
        step3: 'Release takes place at the Core Facility. Expect 4-8 hours after posting bond.'
      },
      specificFaqs: [
        {
          question: 'Is the jail downtown Fort Myers?',
          answer: 'No. The main "Core Facility" is located at 2501 Ortiz Avenue, which is about 15 minutes east of the downtown Justice Center. Do not go downtown for inmate release.'
        },
        {
          question: 'How do I visit an inmate in Lee County?',
          answer: 'Visitation is now primarily video-only. You can use the kiosks in the Video Visitation building at the Ortiz site for free, or pay to visit remotely via the GTL/ViaPath app.'
        },
        {
          question: 'What is the bail bond premium in Lee County?',
          answer: 'We charge the state-mandated 10% premium. We are local to Fort Myers and can meet you at the jail or handle everything electronically.'
        },
        {
          question: 'How long until they are released from Core Facility?',
          answer: 'Once the bond is posted, Lee County Sheriff\'s Office typically processes the release in 4-8 hours. We will notify you when the discharge process begins.'
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
        description: 'The largest city in Polk County. LPD processes arrests at their HQ before transfer to the South County Jail in Bartow.'
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
        description: 'Known for the Chain of Lakes. WHPD transports regular arrests to the main county facility in Bartow.'
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
      inmateSearchUrl: 'https://www.pascosheriff.com',
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
        description: 'The historic downtown area of West Pasco. Arrests here are transported east to the central jail in Land O\' Lakes.'
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
        description: 'A rapidly growing community. Patrolled by PCSO, with quick access to the Land O\' Lakes facility.'
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
    }
  },
];

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
