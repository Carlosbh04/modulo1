import { triangle } from "./triangle";
import { Point } from "./points";





let vertex1 = new Point(0, 0);
let vertex2 = new Point(3,0);
let vertex3 = new Point (0,4);
let myTriangle = new  triangle(vertex1,vertex2,vertex3);
console.log(myTriangle.calculateLengthSides());
