import { GeneratedIdentifierFlags} from "typescript";

export {};
// explicitly give datatype to the variables 

const name: string = 'puneeth';
let gender: string;

 //gender = 1;// error
 gender = 'm';

 const pi: number = 3.14;
 const age: number = 22;
let isLightsOn: boolean = true;
// isLightsOn = 0; // error

// implicit data typing to variables
let fullName = 'puneeth';
//fullName = 8;// error

let d: string | number;//data type 'any'
d=10;
d='puneeth'; 

const cars = ['audi','bmw','porsche'];
//cars[0] = 10;// error 
//const i: number = cars[0]; // error 

let marks: number[] = [];
marks.push(5, 6, 4, 3, 7);
//marks.push('audi');// error 


//union types
let isEngineOn: boolean | number;
isEngineOn = true;
isEngineOn = 1;
// isEngineOn = 'on'; // error

//tuple data type
// hetrogenous data
const s1: [string,string,number,number] = ['puneeth','m',10,90];
// s1[10] = 89; //error 
s1[3] = 95;
console.log(s1);

// create your own datatype 

type Gender = 'm'| 'f';
let gen: Gender;

gen = 'm';
gen = 'f';
// gen = 'a'; // error 

type student = {
    name: string,
    gender: string,
    roll?: number// ? makes roll as an optional object attribute 
}

const st1:  student = {
    name: 'puneeth',
    gender: 'm',
    roll: 10,
    //address:'India,'//error
}

/*
const st2: student = {
    name: 'puneeth',
    gen: 'm',
    r:10
}
*/ // error
const st3:  student = {
    name: 'puneeth',
    gender: 'm',
}
    

