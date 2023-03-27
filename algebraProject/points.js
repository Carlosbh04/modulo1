"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.toString = function () {
        return "(el valor de x ".concat(this.x, ", el valor de y es ").concat(this.y, ")");
    };
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var dx = this.x - anotherPoint.x;
        var dy = this.y - anotherPoint.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    return Point;
}());
exports.Point = Point;
var point1 = new Point(3, 4);
var point2 = new Point(20, 9);
console.log(point1.toString());
console.log(point1.distanceToOrigin());
console.log(point1.calculateDistance(point2));
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
console.log(calcularQuadrant(5, -3));
function calculateNearest(points) {
    var points1 = points[0];
    for (var i = 1; i < points.length; i++) {
        if (points[i].calculateDistance(new Point(0, 0)) < points1.calculateDistance(new Point(0, 0))) {
            points1 = points[i];
        }
    }
    return points1;
}
var pointsArray = [
    new Point(3, 4),
    new Point(7, 2),
    new Point(-1, 5),
    new Point(2, 5)
];
var nearestPoint = calculateNearest(pointsArray);
console.log(nearestPoint.toString());
