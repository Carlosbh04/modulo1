"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangle = void 0;
var triangle = /** @class */ (function () {
    function triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    triangle.prototype.calculateLengthSides = function () {
        var sid1 = this.vertex1.calculateDistance(this.vertex2);
        var sid2 = this.vertex2.calculateDistance(this.vertex3);
        var sid3 = this.vertex3.calculateDistance(this.vertex1);
        return [sid1, sid2, sid3];
    };
    return triangle;
}());
exports.triangle = triangle;
// let vertex1 = new Point(0, 0);
// let vertex2 = new Point(3,0);
// let vertex3 = new Point (0,4);
// let Triangle = new  triangle(vertex1,vertex2,vertex3);
// console.log(Triangle.calculateLengthSides());
