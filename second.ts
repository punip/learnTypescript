export {};

function perimeterRectangle(length: number, breadth: number) : number {
    return 2 * (length + breadth);
}

// perimeterRectangle('puneeth', 'bu'); //error 
//perimeterRectangle(89); error

//let perimeter: string;
// perimeter = perimeterRectangle(5,2); // error 

let perimeter: number;
perimeter = perimeterRectangle(5, 3);
console.log(perimeter);

// optional parameter with default value 
function areaRectangle (length:number, breadth: number=2):number {
    return length*breadth;
}
console.log(areaRectangle(5)); // breadth default 2

function greetUser(username? : string) : string {
    return username ?  `welcome to the app ${username}` : 'wecome guest';
}

console.log(greetUser('puneeth111')); //welcome to the app puneeth111
console.log(greetUser());//welcome guest

function nextGenAdd(...args: number[]): number {
    let sum = 0;
    args.forEach( n => sum+= n);
    return sum
}
console.log(nextGenAdd());

console.log(nextGenAdd(5, 6, 7));
console.log(nextGenAdd(5, 6, 7, 10, 5, 3, 2, 7, 9 ));
// console.log(nextGenAdd('audi','bmw,'mercedes',)); error