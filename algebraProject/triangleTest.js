"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
var points_1 = require("./points");
var vertex1 = new points_1.Point(0, 0);
var vertex2 = new points_1.Point(3, 0);
var vertex3 = new points_1.Point(0, 4);
var myTriangle = new triangle_1.triangle(vertex1, vertex2, vertex3);
console.log(myTriangle.calculateLengthSides());
