"use strict";
//  export class Point{
//     private x : number;
//     private y : number;
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularQuadrant = void 0;
//     constructor(x:number, y :number){
//         this.x = x;
//         this.y = y;
//     }
//     setX(x:number): void{
//         this.x = x;
//     }
//     getX():number{
//         return this.x;
//     }
//     setY(y : number): void{
//         this.y = y;
//     }
//     getY():number{
//         return this.y;
//     }
//     toString():string{
//         return `(el valor de x ${this.x}, el valor de y es ${this.y})`;
//     }
//     distanceToOrigin(): number {
//         return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y, 2));
//     }
//     calculateDistance(anotherPoint:Point):number{
//         let dx = this.x - anotherPoint.x;
//         let dy = this.y - anotherPoint.y;
//         return Math.sqrt(dx*dx + dy*dy);
//     }
// }
// let point1 = new Point(3,4);
// let point2 = new Point(20,9);
// console.log(point1.toString());
// console.log(point1.distanceToOrigin());
// console.log(point1.calculateDistance(point2));
function calcularQuadrant(x, y) {
    if (x === 0 || y === 0) {
        return 0;
    }
    else if (x > 0 && y > 0) {
        return 1;
    }
    else if (x < 0 && y > 0) {
        return 2;
    }
    else if (x < 0 && y < 0) {
        return 3;
    }
    else {
        x > 0 && y < 0;
        return 4;
    }
}
exports.calcularQuadrant = calcularQuadrant;
// console.log(calcularQuadrant(5,-3));
