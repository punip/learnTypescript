import SalariedIndividual from "./salariedindividual";

export default function calculateSalary(si: SalariedIndividual): number {
    const daysWorkedInMonth = si.getDaysWorkedInMonth();
    const perDayCost = si.getPerDayCost();

    const salary = daysWorkedInMonth * perDayCost;
    const professionalTax = 200;
    const salaryAfterPt = salary - professionalTax;
    const tds = 0.1 * salaryAfterPt;

    return salaryAfterPt - tds;

}
