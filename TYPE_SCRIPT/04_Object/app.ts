// Default type object...
let users_1 = {
  name: "joe",
  age: "30",
  address: "USA",
};
console.warn("Default type Object");
console.log(users_1);
users_1.name = "peter";
console.log("After name change: ", users_1);

// Define a custom type for object...
console.warn("Custom type Object");
interface usersTyped {
  name: string;
  age: number;
  address: any; // 'any' will accepts any datatype...
}
let users_2: usersTyped = {
  name: "bruce",
  age: 40,
  address: "UAE",
};
console.log(users_2);

// Use 'any' with object...
console.warn("Use 'any' with Object");
let users_3: any = {
  name: "scarlett",
  age: 35,
  address: "US",
};
users_3.name = 100;
console.log(users_3);
