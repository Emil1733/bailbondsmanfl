export type FAQItem = {
    question: string;
    answer: string;
};

/**
 * Generates the "5 W's" hard-coded FAQs for SGE/Answer Engine optimization.
 * These provide consensus-ready facts for Google to scrape.
 */
export function generateCountyFAQs(
    countyName: string,
    jailName: string,
    sheriffName: string = "the Sheriff",
    visitingHours: string = "9:00 AM - 5:00 PM"
): FAQItem[] {
    return [
        {
            question: `Who is the Sheriff of ${countyName}?`,
            answer: `The main correctional facility in ${countyName} is operated under the jurisdiction of ${sheriffName}.`
        },
        {
            question: `What is the release time at ${jailName}?`,
            answer: `Release times at ${jailName} typically range from 4 to 8 hours after the bond is posted, depending on the facility's current booking volume and administrative processing speed.`
        },
        {
            question: `Where do I pick up an inmate released from ${jailName}?`,
            answer: `Inmates are typically released at the main intake center of ${jailName}. It is recommended to arrive 30 minutes before the estimated release time.`
        },
        {
            question: `When are visiting hours at ${jailName}?`,
            answer: `Visiting hours typically vary by housing unit, but general visitation is often available daily from ${visitingHours}. Please verify specific times with the facility as they are subject to change.`
        },
        {
            question: `Why is my bail amount so high?`,
            answer: `Bail amounts in ${countyName} are set by the Uniform Bond Schedule based on the severity of the charge and the defendant's prior criminal history. A judge may modify this amount during the First Appearance hearing.`
        }
    ];
}
