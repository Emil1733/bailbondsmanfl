const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '../src/lib/data.ts');
let content = fs.readFileSync(dataFile, 'utf8');

const marionData = `
  {
    slug: 'marion',
    name: 'Marion County',
    population: 396437,
    jail: {
      name: 'Marion County Jail',
      address: '700 NW 30th Ave, Ocala, FL 34475',
      phone: '(352) 351-8077',
      visitingHours: 'Video Visitation Only',
      inmateSearchUrl: 'https://www.marionso.com/jail-inmates',
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
        travelTimeToJail: '10-15 minutes',
        description: 'The county seat and primary urban center of Marion County. OPD arrests are transported directly to the Marion County Jail on NW 30th Ave.',
        specificFaqs: [
          {
            question: 'Is the Ocala Police Department holding facility the same as the jail?',
            answer: 'No. OPD handles initial processing at their Pine Ave headquarters, but all arrestees are quickly transferred to the Marion County Jail (run by the Sheriff) on NW 30th Ave for official booking and bond setting.'
          },
          {
            question: 'Are arrests from the Ocala National Forest handled by OPD?',
            answer: 'No. The forest falls under the jurisdiction of the Marion County Sheriff\\'s Office (MCSO) or the Florida Fish and Wildlife Conservation Commission (FWC). Regardless of the arresting agency, all go to the Marion County Jail.'
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
          answer: 'The bond desk at the Marion County Jail is open 24/7. They accept cash (exact change only), cashier\\'s checks, or money orders made payable to the Marion County Sheriff\\'s Office.'
        },
        {
          question: 'Does the Marion County Jail use video visitation?',
          answer: 'Yes, physical contact visits are not permitted. All visitation is conducted via video kiosks. You must schedule the visit 24 hours in advance through the approved vendor system.'
        }
      ]
    },
    relatedEntities: ["Billy Woods", "Marion County Judicial Center", "Ocala Police Department", "Fifth Judicial Circuit"]
  }
`;

const match = content.match(/];\s*export async function getCounty/);
const insertionPoint = match ? match.index : -1;
if (insertionPoint !== -1) {
    content = content.substring(0, insertionPoint) + ',\n' + marionData + '\n' + content.substring(insertionPoint);
    fs.writeFileSync(dataFile, content, 'utf8');
    console.log("✅ Successfully injected Marion County into data.ts");
} else {
    console.error("Could not find the end of the counties array.");
}
