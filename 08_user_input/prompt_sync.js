//prompt sync also required node js
// to execute the code need to run via node filepath

const prompt =require('prompt-sync')()
let num = Number(prompt("Enter a Number"))
console.log(num);

 if (num %2 === 0){
    console.log(`${num} is even` );
    
 }
 else {
    console.log(`${num} is odd`);
    
 }


