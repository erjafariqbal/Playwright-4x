
let num =[10,2,1,21]
console.log("Array before soring");
console.log(num);

// Array after natural sorting
 num.sort()
 console.log("sorting using natural sorting");
 console.log(num);
 
 
console.log("array after Normal sorting");


num.sort((a,b) => a-b)
console.log(num);

