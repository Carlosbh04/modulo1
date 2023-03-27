

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
}


// let point1 = new Point(1,2);
// console.log(point1.toString());


