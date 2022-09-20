"use strict";
exports.__esModule = true;
var firstProgram = "Hello TypeScript";
console.warn(firstProgram);
// Using Class & Functions...
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.test = function () {
        console.log("Test function working");
    };
    A.prototype.sum = function (x, y) {
        var result = x + y;
        console.log("Sum: " + result);
    };
    A.prototype.exponent = function (x, y) {
        var result = Math.pow(x, y);
        console.log("Exponent: " + result);
    };
    return A;
}());
var a = new A();
a.test();
a.sum(2, 4);
a.exponent(2, 5);
// RUN in Terminal
// tsc -> typescript compiler
// >> tsc app.ts
