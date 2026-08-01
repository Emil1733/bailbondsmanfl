const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '../src/lib/data.ts');
let content = fs.readFileSync(dataFile, 'utf8');

const pascoData = `
  {
    slug: 'pasco',
    name: 'Pasco County',
    population: 583606,
    jail: {
      name: 'Land O\\' Lakes Detention Center',
      address: '20101 Central Blvd, Land O\\' Lakes, FL 34637',
      phone: '(813) 996-6982',
      visitingHours: 'Video Visitation Only (Must schedule 24hrs in advance)',
      inmateSearchUrl: 'https://www.pascosheriff.com/arrest-search.html',
    },
    geo: {
      lat: 28.1994,
      lng: -82.4632,
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
        travelTimeToJail: '40-50 minutes',
        description: 'The major hub of West Pasco. Arrests by NPRPD involve a significant transport east across the county on SR-54 to the Land O\\' Lakes facility.',
        specificFaqs: [
          {
            question: 'Does West Pasco have its own jail?',
            answer: 'No. While the West Pasco Judicial Center is in New Port Richey, the actual jail is the Land O\\' Lakes Detention Center in Central Pasco. All arrestees from West Pasco are transported there for booking.'
          }
        ]
      },
      {
        name: 'Dade City',
        slug: 'dade-city',
        policeDepartment: {
          name: 'Dade City Police Department',
          address: '38030 Meridian Ave, Dade City, FL 33525',
          phone: '(352) 521-1490'
        },
        travelTimeToJail: '30-40 minutes',
        description: 'The county seat located in East Pasco. DCPD transports arrestees south to Land O\\' Lakes.',
        specificFaqs: [
          {
            question: 'If court is in Dade City, why is the jail in Land O\\' Lakes?',
            answer: 'Pasco County operates a consolidated detention center in Land O\\' Lakes for efficiency. Even if the arrest and subsequent trial happen in Dade City, the inmate is housed in the central facility.'
          }
        ]
      }
    ],
    richContent: {
      courtInfo: {
        name: 'Robert D. Sumner Judicial Center',
        address: '38053 Live Oak Ave, Dade City, FL 33523',
        bondHearingTimes: ['Daily: 1:30 PM (Advisory Court)', 'Weekends/Holidays: 8:30 AM']
      },
      releaseProcess: {
        step1: 'Intake and booking at the Land O\\' Lakes Detention Center (typically 4-6 hours).',
        step2: 'First Appearance (Advisory) occurs daily via video feed from the jail.',
        step3: 'We post the surety bond. Release processing in Pasco takes approximately 4-8 hours.'
      },
      specificFaqs: [
        {
          question: 'Where is the release lobby for Pasco County?',
          answer: 'The release lobby is located at the main entrance of the Land O\\' Lakes Detention Center (20101 Central Blvd). Parking is available in the visitor lot directly in front of the building.'
        },
        {
          question: 'When is Advisory Court held in Pasco County?',
          answer: 'Advisory Court (First Appearance) is generally held at 1:30 PM on weekdays and 8:30 AM on weekends and holidays. The judge reviews probable cause and sets bond if it wasn\\'t already set by a schedule.'
        },
        {
          question: 'Are arrests from US-19 taken to Land O\\' Lakes?',
          answer: 'Yes. The US-19 corridor is heavily patrolled by the Pasco Sheriff (PSO) and Florida Highway Patrol (FHP). Anyone arrested on US-19 in Pasco County faces a 40+ minute transport east to the Land O\\' Lakes Detention Center.'
        },
        {
          question: 'Can I post a cash bond at the Pasco jail?',
          answer: 'Yes. The booking desk accepts cash, cashier\\'s checks, and certain credit cards for the full bond amount. If you cannot afford the full amount, you must use a licensed bail bondsman to post a surety bond for a 10% premium.'
        }
      ]
    },
    relatedEntities: ["Chris Nocco", "Robert D. Sumner Judicial Center", "Pasco Sheriff's Office", "Sixth Judicial Circuit"]
  }
`;

// Inject before the last closing bracket of the counties array.
// We look for the closing bracket of the array `];` at the end of the file.
// Or we just insert before the last `];`
const match = content.match(/];\s*export async function getCounty/);
const insertionPoint = match ? match.index : -1;
if (insertionPoint !== -1) {
    content = content.substring(0, insertionPoint) + ',\n' + pascoData + '\n' + content.substring(insertionPoint);
    fs.writeFileSync(dataFile, content, 'utf8');
    console.log("✅ Successfully injected Pasco County into data.ts");
} else {
    console.error("Could not find the end of the counties array.");
}
