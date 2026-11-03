// Multi-Dimentional Array : Its means the array of array.
// It is like table Grid 
// Array has both row and column. It means each array is a row and each element inside the row is colums.
// indexation start with 0/0

const { log } = require("console");

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]

]

console.log(matrix[0][0]); //1
console.log(matrix[2][2]); //9

console.log("Array Length:",matrix.length) //It is represent the row.
console.log("Array column length:", matrix[0].length);





