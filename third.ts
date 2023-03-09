export {};

const cars = ['audi','mercedes','i20','i10']; // atleast the size of the array will be 2

// array destructuring
//const c1 = cars[0];
//const c2 = cars[1];
const [c1,c2, ...restOfCars] = cars;
console.log(c1,c2);
console.log(restOfCars);

//object destrcuting 
type Book = {
    title: string;
    price: number;
    pages: number;

};

const b1: Book = {
    title: 'Book1',
    price: 900,
    pages: 560

};
/*
const title = b1.title;
const price = b1.price;
*/
const { title, price: pr, /* publicationHouse*/} = b1;
console.log(title, pr);


