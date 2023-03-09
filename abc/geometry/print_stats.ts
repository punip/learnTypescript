import Shape from "./shape";

 export default function print(shape: Shape) : void {
    console.log('********area *************');
    console.log(shape.area());
    console.log('*******perimeter**********');
    console.log(shape.perimeter());
}