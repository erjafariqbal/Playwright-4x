//Nested Ternary Means 
// Multiple condition

//age =26

//if age >18 You can go to Goa and if age > 25 you can also drink

let age = 26
//let eligible_for_Goa = (age> 18) ? "eligible" : "Not Eligble"
let eligible_for_Goa =  age> 18? (age >25 ? "Goa and Drink": "No Drink") : "No Goa"

console.log(`Your age is ${age} and can Go ${eligible_for_Goa} for Goa`);
