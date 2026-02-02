import { counties, County, getCounty as getCountyData, getAllCounties as getAllCountiesData } from './data';

export type { County };

export async function getCounty(slug: string): Promise<County | undefined> {
    // Simulate network delay
    // await new Promise(resolve => setTimeout(resolve, 100));
    return getCountyData(slug);
}

export async function getAllCounties(): Promise<County[]> {
    return getAllCountiesData();
}

export async function getCountySlugs(): Promise<string[]> {
    const allCounties = await getAllCountiesData();
    return allCounties.map(c => c.slug);
}
