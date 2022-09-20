var firstProgram = "Hello TypeScript";
console.warn(firstProgram);

// Using Class & Functions...
class A {
    test() {
        console.log("Test function working");
    }
    sum(x, y) {
        var result = x + y;
        console.log("Sum: " + result)
    }
    exponent(x, y) {
        var result = x ** y;
        console.log("Exponent: " + result)
    }
}
var a = new A();
a.test();
a.sum(2, 4);
a.exponent(2, 5);

export {};
// RUN in Terminal
// tsc -> typescript compiler
// >> tsc app.ts