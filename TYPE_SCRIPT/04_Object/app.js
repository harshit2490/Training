// Default type object...
var users_1 = {
    name: "joe",
    age: "30",
    address: "USA"
};
console.warn("Default type Object");
console.log(users_1);
users_1.name = "peter";
console.log("After name change: ", users_1);
// Define a custom type for object...
console.warn("Custom type Object");
var users_2 = {
    name: "bruce",
    age: 40,
    address: "UAE"
};
console.log(users_2);
// Use 'any' with object...
console.warn("Use 'any' with Object");
var users_3 = {
    name: "scarlett",
    age: 35,
    address: "US"
};
users_3.name = 100;
console.log(users_3);
