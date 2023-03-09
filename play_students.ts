import student from "./college/student";


console.log(student.count)

const s1 = new student('puneeth','m',10,90);
console.log(student.count)

//console.log(s1);
const s2 = new student('jane','m',30,44);

const s3 = new student('jill','f',20,56);

console.log(s3.getDetails());
console.log(s2.getDetails());
//conslole.log(s3.getDetail());// error
console.log(student.count);





