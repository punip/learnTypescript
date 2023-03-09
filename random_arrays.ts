// generic function 
// where the parameter type and the return type are generic and in sync with each other 
function surpriseMe<T>(elements : T[]): T {
    const index = Math.floor(Math.random() * elements.length );
    return elements[index];
}

const movie = surpriseMe(['titanic','3 idiots', 'forest gump','terminator 2']);
console.log('************ Netflix surprise me with *********',movie);

const n = surpriseMe([5, 7, 2, 3, 7, 8, 10]);
console.log('number',n);