const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '../src/lib/data.ts');
let content = fs.readFileSync(dataFile, 'utf8');

const newCountiesData = `
  {
    slug: 'brevard',
    name: 'Brevard County',
    population: 630692,
    jail: {
      name: 'Brevard County Jail Complex',
      address: '860 Camp Rd, Cocoa, FL 32927',
      phone: '(321) 690-1500',
      visitingHours: 'Video Visitation Only',
      inmateSearchUrl: 'https://www.brevardsheriff.com/home/commands-services/jail-complex/',
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
        step3: 'Immediate release processing upon posting of the surety bond.'
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
      phone: '(904) 225-5211',
      visitingHours: 'Video Visitation',
      inmateSearchUrl: 'https://www.nassauso.com/jail-and-detention-center/',
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
          phone: '(904) 225-5174'
        },
        travelTimeToJail: '5-10 minutes',
        description: 'Yulee is the central geographic hub of Nassau County and the home of the county jail complex. Transport times from a Yulee arrest to the jail are extremely short.',
        specificFaqs: [
          {
            question: 'Are Amelia Island / Fernandina Beach arrests taken to Yulee?',
            answer: 'Yes. Fernandina Beach has its own police department, but the only jail in Nassau County is the Detention Center located in Yulee.'
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
`;

const match = content.match(/];\s*export async function getCounty/);
const insertionPoint = match ? match.index : -1;
if (insertionPoint !== -1) {
    content = content.substring(0, insertionPoint) + ',\n' + newCountiesData + '\n' + content.substring(insertionPoint);
    fs.writeFileSync(dataFile, content, 'utf8');
    console.log("✅ Successfully injected Brevard, Manatee, Columbia, and Nassau Counties into data.ts");
} else {
    console.error("Could not find the end of the counties array.");
}
