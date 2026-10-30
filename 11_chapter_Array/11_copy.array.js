const { log } = require("node:console")

let A =[1,2,3,4]
console.log("original Array A before Coying");
console.log(A);

// using spead method.

// let copy = [...A]
// console.log("Copy an array using spread Method let copy = [...A]: ");

// console.log(copy);

// console.log("Copy.PUSH(6)");

// console.log("Array A:", A);

// console.log(("Pusing the value in Copy Array"));
// copy.push(6)
// console.log(copy);
// console.log(A);






//using slice method

let copy1 = A.slice()

console.log("Copy an array using slice Method: copy1 = A.slice() ");

console.log(copy1);
copy1.push(6)
console.log(copy1);
console.log(A);


//3th Method

let deep_copy = A
console.log(deep_copy);
deep_copy.push(8)

console.log("using deep copy");
console.log(deep_copy);
console.log(A);





