import { Point } from "./points";
export class triangle{

    private vertex1: Point;
    private vertex2: Point;
    private vertex3 : Point;

    constructor(vertex1 : Point, vertex2:Point,vertex3:Point,){
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;

    }
    calculateLengthSides():number[]{
        let sid1 = this.vertex1.calculateDistance(this.vertex2)
        let sid2 = this.vertex2.calculateDistance(this.vertex3)
        let sid3 = this.vertex3.calculateDistance(this.vertex1)
          
        return [sid1,sid2,sid3];
    }
}

// let vertex1 = new Point(0, 0);
// let vertex2 = new Point(3,0);
// let vertex3 = new Point (0,4);
// let Triangle = new  triangle(vertex1,vertex2,vertex3);
// console.log(Triangle.calculateLengthSides());
