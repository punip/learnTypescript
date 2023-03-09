// specialized class
import CollegeUser from "./college_user";
import SalariedIndividual from "../abc/geometry/salary-processor/salariedindividual";

export default class Professor extends CollegeUser implements SalariedIndividual  {

    subjects: string[] =[];
    noOfDaysWorked: number = 0;
    costPerDay: number = 0;

    constructor(name? : string,gender?: string,subjects?: string[],noOfDaysWorked?: number,costPerDay?: number) {
        //this-> 5007 Professor
        super(name,gender); // this is required since professor inherits from CollegeUser
    
        if(subjects) {
            this.subjects = subjects;
        }

        if(noOfDaysWorked) {
            this.noOfDaysWorked = noOfDaysWorked;
        }

        if(costPerDay) {
            this.costPerDay = costPerDay;
        }
    }
    getPerDayCost(): number {
        return this.costPerDay   
    }
    getDaysWorkedInMonth(): number {
        return this.noOfDaysWorked ;
    }

}