// Finding the element from Array

let num = [1,2,3,4,5]

let result = num.find( temp => temp >3)
console.log(result);
// the result is 4. Because we are finding only 1 element which is >3


//Finding the index of the elemet

let index = num.findIndex(i => i>3)
console.log(index);

// finding last elemet and index of last element

num.findLast(n => n>3)
num.findLastIndex(n => n>3)

