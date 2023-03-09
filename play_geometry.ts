// manager
import Sqaure  from "./geometery/square";
import Rectangle  from "./geometery/rectangle";
import print from "./abc/geometry/print_stats";
import Circle from "./geometery/circle";
import Shape from "./abc/geometry/shape";

const s = new Sqaure(6);
print(s);
//console.log(s.area());
//console.log(s.perimeter()); 

const r = new Rectangle(5, 4);
print(r);

const c = new Circle(5);
print(c);

// const s1 = new Shape(); // error cannot create an object of abstract class
// variable created of datatype class
let s2: Shape;

