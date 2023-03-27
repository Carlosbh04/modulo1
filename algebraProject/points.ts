

 export class Point{
    private x : number;
    private y : number;

    constructor(x:number, y :number){
        this.x = x;
        this.y = y;
    }
    setX(x:number): void{
        this.x = x;
    }
    getX():number{
        return this.x;
    }
    setY(y : number): void{
        this.y = y;
    }
    getY():number{
        return this.y;
    }
    toString():string{
        return `(el valor de x ${this.x}, el valor de y es ${this.y})`;
    }
    distanceToOrigin(): number {
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y, 2));
    }
    calculateDistance(anotherPoint:Point):number{
        let dx = this.x - anotherPoint.x;
        let dy = this.y - anotherPoint.y;

        return Math.sqrt(dx*dx + dy*dy);

    }
}


let point1 = new Point(3,4);
let point2 = new Point(20,9);
console.log(point1.toString());
console.log(point1.distanceToOrigin());
console.log(point1.calculateDistance(point2));





function calcularQuadrant(x:number, y:number): number {
    if(x === 0 || y === 0){
        return 0;
    }
    else if(x > 0 && y > 0 ){
        return 1;
    }
    else if(x < 0 && y > 0){
        return 2;
    }
    else if(x < 0 && y <0){
        return 3;
    }
    else {  x > 0 && y < 0

        return 4;
    }
    
}

console.log(calcularQuadrant(5,-3));


  function calculateNearest(points:Point[]):Point{
    let points1 = points [0];
    for(let i = 1; i < points.length; i++){
        if(points[i].calculateDistance(new Point(0,0)) < points1.calculateDistance(new Point(0,0))){
            points1 = points[i];
        }
    }
    return points1;
    }
    

let pointsArray: Point[] = [
    new Point(3, 4),
    new Point(7, 2),
    new Point(-1, 5),
    new Point(2, 5)
];

let nearestPoint = calculateNearest(pointsArray);
console.log(nearestPoint.toString());



