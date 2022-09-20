var data = ['A', 'B']
console.warn("Array: ", data);

data.push('C');
console.log("After Push: ", data);

data.pop();
console.log("After Pop: ", data);


// Mixed array: string, number, boolean...
var data1 = ['A', 'B', 10, true]
console.warn("Mixed Array: ", data1);

data1.push(false);
console.log("Pushing boolean value: ", data1);

data1.push(20);
console.log("Pushing numeric value: ", data1);


// Array with data type...
var data2:string[] = ['A', 'B']
console.warn("With Datatype: ", data2);

data2.push("C")
console.log("After Push: ", data2);