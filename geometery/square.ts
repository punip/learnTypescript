// this is been coded by developer x

import Shape from "../abc/geometry/shape";

export default class Sqaure extends Shape {

    // default access specififer --- public
    //side: number;

    /*
    constructor(side: number) {
        super();
        this.side = side;

    }*/

    constructor(public side: number) {
        super();
    }

    area(): number {
        return this.side * this.side ;
    }

    perimeter() : number {
        return 4 * this.side ;
    }

}