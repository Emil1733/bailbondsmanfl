export const jailGuideByCounty: Record<string, string> = {
  'miami-dade': '/jail/tgk-correctional-center',
  broward: '/jail/broward-county-main-jail',
  'palm-beach': '/jail/palm-beach-county-main-detention-center',
  hillsborough: '/jail/orient-road-jail',
  orange: '/jail/orange-county-booking-and-release-center',
  duval: '/jail/duval-county-pre-trial-detention-facility',
  pinellas: '/jail/pinellas-county-jail',
  lee: '/jail/lee-county-core-facility',
  pasco: '/jail/land-o-lakes-detention-center',
};

export const jailLocalityBySlug: Record<string, { countySlug: string; citySlug: string; cityName: string }> = {
  'tgk-correctional-center': { countySlug: 'miami-dade', citySlug: 'miami', cityName: 'Miami' },
  'metro-west-detention-center': { countySlug: 'miami-dade', citySlug: 'miami', cityName: 'Miami' },
  'broward-county-main-jail': { countySlug: 'broward', citySlug: 'fort-lauderdale', cityName: 'Fort Lauderdale' },
  'palm-beach-county-main-detention-center': { countySlug: 'palm-beach', citySlug: 'west-palm-beach', cityName: 'West Palm Beach' },
  'orient-road-jail': { countySlug: 'hillsborough', citySlug: 'tampa', cityName: 'Tampa' },
  'falkenburg-road-jail': { countySlug: 'hillsborough', citySlug: 'tampa', cityName: 'Tampa' },
  'orange-county-booking-and-release-center': { countySlug: 'orange', citySlug: 'orlando', cityName: 'Orlando' },
  'pinellas-county-jail': { countySlug: 'pinellas', citySlug: 'clearwater', cityName: 'Clearwater' },
  'duval-county-pre-trial-detention-facility': { countySlug: 'duval', citySlug: 'jacksonville-beach', cityName: 'Jacksonville Beach' },
  'lee-county-core-facility': { countySlug: 'lee', citySlug: 'fort-myers', cityName: 'Fort Myers' },
  'land-o-lakes-detention-center': { countySlug: 'pasco', citySlug: 'wesley-chapel', cityName: 'Wesley Chapel' },
};
