//Accessing & Modifying

let statusCode =["Pass", "Fail", "Skip"]

console.log(statusCode[0]); // Pass
console.log(statusCode[1]); // Fail
console.log(statusCode[4]); // Undefined


console.log(statusCode.at(-1)); // Skip
console.log(statusCode.at(-4)); // Undefined

//Modifying the Value
statusCode[1] ="Blocked"

console.log("Modified Array",statusCode);


