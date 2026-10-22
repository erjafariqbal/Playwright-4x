
//1. For Loop in Array

const test = require("node:test");

let tests = ["login", "checkout", "search"]

for (let i =0; i< tests.length; i++){
    const element =tests[i]
    console.log(element);
    
}
console.log("<====>");

// For in Loop

for (let test of tests){
    console.log(test);
    

}

//For Each Loop

console.log("<====>");

tests.forEach((test, index) => {
    console.log(`${index}: ${test}`);
    
})

console.log("<====>");
console.log("For in loop");

let students = ["Student1", "Alex", "JSON"]

for (let student in students){
    const list = students[student]

    console.log(student, list);
    
}