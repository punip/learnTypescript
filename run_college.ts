import Professor from "./college/professor";
import Student from "./college/student";
import CollegeUser from "./college/college_user";
import calculateSalary from "./abc/geometry/salary-processor/calculate";


const s1 = new Student ('puneeth','m',10,90);
const p1 = new Professor('jane','f',['physics', 'chemistry'],15,8000);
console.log('salary:',calculateSalary(p1));


// internally


// student/set/roll(-12)

//s1.roll = 10;
//console.log(s1.roll);

//console.log(s1.getDetails());
//console.log(p1.getDetails());
//s1.marks = 90;
//console.log(s1.marks);

//console.log(p1.costPerDay);
//console.log(p1.noOfDaysWorked);
